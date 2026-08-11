import { cookies } from 'next/headers'
import { getSanityWriteClient, isValidGuestSessionToken } from '@/lib/sanityServer'

const RATE_WINDOW_MS = 60_000
const RATE_LIMIT = 5
const recentSubmissions = new Map()

function getClientIp(request) {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  )
}

function isRateLimited(ip) {
  const now = Date.now()
  const entries = (recentSubmissions.get(ip) || []).filter(
    (ts) => now - ts < RATE_WINDOW_MS
  )
  if (entries.length >= RATE_LIMIT) {
    recentSubmissions.set(ip, entries)
    return true
  }
  entries.push(now)
  recentSubmissions.set(ip, entries)
  return false
}

function validatePayload(body) {
  const errors = []
  const fullName = String(body.fullName || '').trim()
  const email = String(body.email || '').trim()
  const phone = String(body.phone || '').trim()
  const referringPartner = String(body.referringPartner || '').trim()
  const barrierDescription = String(body.barrierDescription || '').trim()
  const helpRequested = String(body.helpRequested || '').trim()
  const consentGiven = Boolean(body.consentGiven)

  if (!fullName || fullName.length < 2) errors.push('Full name is required')
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('A valid email is required')
  }
  if (!referringPartner) errors.push('Referring partner organization is required')
  if (!barrierDescription || barrierDescription.length < 20) {
    errors.push('Please describe your barrier in at least 20 characters')
  }
  if (!consentGiven) errors.push('Privacy consent is required')

  return {
    errors,
    data: {
      fullName,
      email,
      phone,
      referringPartner,
      barrierDescription,
      helpRequested,
      consentGiven,
    },
  }
}

async function notifyNetlifyForm(data, request) {
  const siteUrl =
    process.env.URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    request.headers.get('origin') ||
    'https://the-ladder.org'

  const params = new URLSearchParams()
  params.set('form-name', 'assistance-application')
  params.set('fullName', data.fullName)
  params.set('email', data.email)
  params.set('phone', data.phone || '')
  params.set('referringPartner', data.referringPartner)
  params.set('barrierDescription', data.barrierDescription)
  params.set('helpRequested', data.helpRequested || '')
  params.set('consentGiven', data.consentGiven ? 'yes' : 'no')

  try {
    await fetch(`${siteUrl.replace(/\/$/, '')}/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })
  } catch (error) {
    // Email notify is best-effort; Sanity write is source of truth
    console.error('Netlify form notification failed:', error)
  }
}

export async function POST(request) {
  try {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get('guest_portal_session')?.value

    if (!isValidGuestSessionToken(sessionToken)) {
      return Response.json(
        { success: false, error: 'Unauthorized. Please log in again.' },
        { status: 401 }
      )
    }

    const ip = getClientIp(request)
    if (isRateLimited(ip)) {
      return Response.json(
        { success: false, error: 'Too many submissions. Please wait a minute and try again.' },
        { status: 429 }
      )
    }

    const body = await request.json()

    // Honeypot
    if (body.botField || body['bot-field']) {
      return Response.json({ success: true, message: 'Application received' })
    }

    const { errors, data } = validatePayload(body)
    if (errors.length) {
      return Response.json(
        { success: false, error: errors[0], errors },
        { status: 400 }
      )
    }

    const sanityClient = getSanityWriteClient()
    const submittedAt = new Date().toISOString()

    const doc = await sanityClient.create({
      _type: 'assistanceApplication',
      fullName: data.fullName,
      email: data.email,
      phone: data.phone || undefined,
      referringPartner: data.referringPartner,
      barrierDescription: data.barrierDescription,
      helpRequested: data.helpRequested || undefined,
      consentGiven: true,
      submittedAt,
      status: 'new',
    })

    await notifyNetlifyForm(data, request)

    return Response.json({
      success: true,
      message: 'Application submitted successfully',
      id: doc._id,
    })
  } catch (error) {
    console.error('Assistance application error:', error)
    return Response.json(
      {
        success: false,
        error:
          'We could not submit your application. Please try again or contact The Ladder.',
      },
      { status: 500 }
    )
  }
}
