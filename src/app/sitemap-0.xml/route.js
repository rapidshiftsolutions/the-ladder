import cities from '/src/data/cities'
import { vehicles } from '/src/data/vehicles'

export async function GET() {
  try {
    const baseUrl = 'https://oemradiorepair.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/repair`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/warranty`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Service pages
  const servicePages = [
    'digitizer-replacement',
    'lcd-replacement',
    'complete-screen',
    'mail-in-service',
    'touchscreen-repair',
    'display-repair',
    'glass-repair',
    'ghost-touch'
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Vehicle pages
  const vehiclePages = vehicles.map(vehicle => {
    const make = vehicle.make.toLowerCase()
    const model = vehicle.model.toLowerCase().replace(/\s+/g, '-')
    const yearRange = vehicle.years.length > 1 
      ? `${vehicle.years[0]}-${vehicle.years[vehicle.years.length - 1]}`
      : vehicle.years[0]
    
    return {
      url: `${baseUrl}/repair/${make}/${model}/${yearRange}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  })

  // Vehicle make pages
  const vehicleMakePages = [...new Set(vehicles.map(v => v.make.toLowerCase()))].map(make => ({
    url: `${baseUrl}/repair/${make}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // State pages
  const statePages = [...new Set(cities.map(c => c.state.toLowerCase()))].map(state => ({
    url: `${baseUrl}/locations/state/${state}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Additional pages
  const additionalPages = [
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/shipping-instructions`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }
  ]

  const allUrls = [
    ...staticPages,
    ...servicePages,
    ...vehiclePages,
    ...vehicleMakePages,
    ...statePages,
    ...additionalPages,
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(item => `  <url>
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
    console.error('Error generating sitemap-0:', error)
    return new Response('Error generating sitemap', { status: 500 })
  }
}