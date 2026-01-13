export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://the-ladder.org'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/guest-portal/',
          '/studio/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
