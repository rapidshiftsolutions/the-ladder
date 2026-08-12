import { SITE_URL } from '@/lib/siteUrl'

export default function robots() {
  const baseUrl = SITE_URL

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
