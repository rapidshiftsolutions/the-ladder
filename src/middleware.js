export function middleware(request) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/guest-portal/dashboard') ||
    pathname.startsWith('/guest-portal/resources') ||
    pathname.startsWith('/guest-portal/apply')
  ) {
    const sessionCookie = request.cookies.get('guest_portal_session')

    if (!sessionCookie || !sessionCookie.value) {
      const url = request.nextUrl.clone()
      url.pathname = '/guest-portal'
      return Response.redirect(url)
    }
  }
}

export const config = {
  matcher: [
    '/guest-portal/dashboard/:path*',
    '/guest-portal/resources/:path*',
    '/guest-portal/apply/:path*',
    '/guest-portal/apply',
  ],
}
