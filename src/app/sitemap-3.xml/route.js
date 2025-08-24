import cities from '/src/data/cities'

export async function GET() {
  try {
    const baseUrl = 'https://oemradiorepair.com'
  
  // Cities 20,000+
  const startIndex = 20000
  const citiesBatch = cities.slice(startIndex)
  
  const cityPages = citiesBatch.map(city => ({
    url: `${baseUrl}/locations/${city.state.toLowerCase()}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${cityPages.map(item => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified.toISOString()}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('\n')}
</urlset>`

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  } catch (error) {
    console.error('Error generating sitemap-3:', error)
    return new Response('Error generating sitemap', { status: 500 })
  }
}