export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.the-ladder.org'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/guest-portal/dashboard',
          '/guest-portal/resources',
          '/studio/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
