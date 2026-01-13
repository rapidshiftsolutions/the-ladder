import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl
  
  // Protect guest portal routes (except the login page itself)
  if (pathname.startsWith('/guest-portal/dashboard') || 
      pathname.startsWith('/guest-portal/resources')) {
    
    // Check for session cookie
    const sessionCookie = request.cookies.get('guest_portal_session')
    
    if (!sessionCookie || !sessionCookie.value) {
      // Redirect to login if no session
      const loginUrl = new URL('/guest-portal', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }
  
  // Allow all other requests
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/guest-portal/dashboard/:path*',
    '/guest-portal/resources/:path*',
  ],
}
