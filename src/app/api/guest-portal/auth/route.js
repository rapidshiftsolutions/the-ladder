import { cookies } from 'next/headers'
import { createClient } from '@sanity/client'

// Create Sanity client for server-side operations
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Don't use CDN for auth checks
  token: process.env.SANITY_API_TOKEN,
})

// Simple token generation (in production, use a proper JWT library)
function generateSessionToken() {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 15)
  return `ladder_guest_${timestamp}_${random}`
}

// Verify session token format (basic validation)
function isValidTokenFormat(token) {
  return token && token.startsWith('ladder_guest_') && token.length > 20
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

    // Fetch the portal password from Sanity
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

    // Check password
    if (password !== settings.portalPassword) {
      return Response.json(
        { success: false, error: 'Invalid password' },
        { status: 401 }
      )
    }

    // Generate session token
    const sessionToken = generateSessionToken()
    const sessionDays = settings.sessionDuration || 7
    const maxAge = sessionDays * 24 * 60 * 60 // Convert days to seconds

    // Set HTTP-only cookie
    const cookieStore = await cookies()
    cookieStore.set('guest_portal_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: maxAge,
      path: '/',
    })

    return Response.json({
      success: true,
      message: 'Authentication successful',
      redirectTo: '/guest-portal/dashboard',
    })
  } catch (error) {
    console.error('Guest portal auth error:', error)
    return Response.json(
      { success: false, error: 'Authentication failed' },
      { status: 500 }
    )
  }
}

export async function GET(request) {
  try {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get('guest_portal_session')?.value

    if (!sessionToken || !isValidTokenFormat(sessionToken)) {
      return Response.json({
        authenticated: false,
      })
    }

    // Token exists and has valid format
    return Response.json({
      authenticated: true,
    })
  } catch (error) {
    console.error('Session check error:', error)
    return Response.json({
      authenticated: false,
    })
  }
}

export async function DELETE(request) {
  try {
    // Clear the session cookie
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
