import { cookies } from 'next/headers'
import { getSanityWriteClient, isValidGuestSessionToken } from '@/lib/sanityServer'

function generateSessionToken() {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 15)
  return `ladder_guest_${timestamp}_${random}`
}

export async function POST(request) {
  try {
    const { password } = await request.json()

    if (!password) {
      return Response.json(
        { success: false, error: 'Password is required' },
        { status: 400 }
      )
    }

    const sanityClient = getSanityWriteClient()
    const settings = await sanityClient.fetch(
      `*[_type == "guestPortalSettings"][0]{ portalPassword, sessionDuration }`
    )

    if (!settings || !settings.portalPassword) {
      console.error('Guest portal settings not found in Sanity')
      return Response.json(
        { success: false, error: 'Portal configuration error' },
        { status: 500 }
      )
    }

    if (password !== settings.portalPassword) {
      return Response.json(
        { success: false, error: 'Invalid password' },
        { status: 401 }
      )
    }

    const sessionToken = generateSessionToken()
    const sessionDays = settings.sessionDuration || 7
    const maxAge = sessionDays * 24 * 60 * 60

    const cookieStore = await cookies()
    cookieStore.set('guest_portal_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge,
      path: '/',
    })

    return Response.json({
      success: true,
      message: 'Authentication successful',
      redirectTo: '/guest-portal/apply',
    })
  } catch (error) {
    console.error('Guest portal auth error:', error)
    return Response.json(
      { success: false, error: 'Authentication failed' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get('guest_portal_session')?.value

    if (!isValidGuestSessionToken(sessionToken)) {
      return Response.json({ authenticated: false })
    }

    return Response.json({ authenticated: true })
  } catch (error) {
    console.error('Session check error:', error)
    return Response.json({ authenticated: false })
  }
}

export async function DELETE() {
  try {
    const cookieStore = await cookies()
    cookieStore.delete('guest_portal_session')

    return Response.json({
      success: true,
      message: 'Logged out successfully',
    })
  } catch (error) {
    console.error('Logout error:', error)
    return Response.json(
      { success: false, error: 'Logout failed' },
      { status: 500 }
    )
  }
}
