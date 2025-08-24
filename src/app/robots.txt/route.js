export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Allow all search engine crawlers
Allow: /cities/
Allow: /counties/
Allow: /services/

# Sitemap location
Sitemap: https://oemradiorepair.com/sitemap.xml

# Crawl delay (optional - 1 second)
Crawl-delay: 1`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}