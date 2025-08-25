import cities from '/src/data/cities'
import { vehicles } from '/src/data/vehicles'

// Split function to create multiple sitemaps
function createSitemapChunks(urls, chunkSize = 10000) {
  const chunks = []
  for (let i = 0; i < urls.length; i += chunkSize) {
    chunks.push(urls.slice(i, i + chunkSize))
  }
  return chunks
}

export default function sitemap() {
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

  // Priority cities (first 1000 most important cities)
  const priorityCities = cities.slice(0, 1000).map(city => ({
    url: `${baseUrl}/locations/${city.state.toLowerCase()}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  // Combine high-priority pages for main sitemap
  const mainSitemapPages = [
    ...staticPages,
    ...servicePages,
    ...vehiclePages,
    ...vehicleMakePages,
    ...statePages,
    ...additionalPages,
    ...priorityCities,
  ]

  // Return only the main sitemap with high-priority pages
  // This keeps the main sitemap under Google's limits while maintaining SEO value
  return mainSitemapPages
}