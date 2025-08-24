import { groq } from 'next-sanity'
import { client } from './lib/client'

// Base gallery projection
const galleryProjection = `{
  _id,
  title,
  slug {
    current
  },
  eventDate,
  eventType,
  description,
  featured,
  downloadEnabled,
  publishedAt,
  coverImage {
    asset->,
    alt
  },
  photos[] {
    asset->,
    alt,
    caption,
    photographer,
    category
  }
}`

// Get all galleries
export async function getAllGalleries() {
  return client.fetch(
    groq`*[_type == "gallery"] | order(eventDate desc) ${galleryProjection}`
  )
}

// Get featured galleries
export async function getFeaturedGalleries(limit = 3) {
  return client.fetch(
    groq`*[_type == "gallery" && featured == true] | order(eventDate desc) [0...$limit] ${galleryProjection}`,
    { limit }
  )
}

// Get galleries with filtering
export async function getGalleries(offset = 0, limit = 12, eventType = null, year = null) {
  let filters = ['_type == "gallery"']
  
  if (eventType) {
    filters.push(`eventType == $eventType`)
  }
  
  if (year) {
    filters.push(`dateTime(eventDate) >= dateTime($year + "-01-01") && dateTime(eventDate) < dateTime(($year + 1) + "-01-01")`)
  }
  
  const filter = filters.join(' && ')
  
  return client.fetch(
    groq`*[${filter}] | order(eventDate desc) [$offset...$limit] ${galleryProjection}`,
    { offset, limit, eventType, year: year ? parseInt(year) : null }
  )
}

// Get single gallery by slug
export async function getGallery(slug) {
  return client.fetch(
    groq`*[_type == "gallery" && slug.current == $slug][0] ${galleryProjection}`,
    { slug }
  )
}

// Get gallery count
export async function getGalleriesCount(eventType = null, year = null) {
  let filters = ['_type == "gallery"']
  
  if (eventType) {
    filters.push(`eventType == $eventType`)
  }
  
  if (year) {
    filters.push(`dateTime(eventDate) >= dateTime($year + "-01-01") && dateTime(eventDate) < dateTime(($year + 1) + "-01-01")`)
  }
  
  const filter = filters.join(' && ')
  
  return client.fetch(
    groq`count(*[${filter}])`,
    { eventType, year: year ? parseInt(year) : null }
  )
}

// Get all gallery years for filtering
export async function getAllGalleryYears() {
  const galleries = await client.fetch(
    groq`*[_type == "gallery"] {
      "year": string::split(string(eventDate), "-")[0]
    } | order(year desc)`
  )
  
  // Get unique years
  const uniqueYears = [...new Set(galleries.map(g => g.year).filter(Boolean))]
  return uniqueYears
}

// Get recent galleries (for homepage or sidebar)
export async function getRecentGalleries(limit = 6) {
  return client.fetch(
    groq`*[_type == "gallery"] | order(publishedAt desc) [0...$limit] ${galleryProjection}`,
    { limit }
  )
}

// Get gallery event types for filtering
export async function getGalleryEventTypes() {
  const eventTypes = await client.fetch(
    groq`*[_type == "gallery"] {
      eventType
    } | order(eventType asc)`
  )
  
  // Get unique event types
  const uniqueEventTypes = [...new Set(eventTypes.map(item => item.eventType).filter(Boolean))]
  
  // Return formatted event types with titles
  const eventTypeMap = {
    'no-prep': 'No Prep Racing',
    'grudge': 'Grudge Racing',
    'bracket': 'Bracket Racing',
    'test-tune': 'Test & Tune',
    'jr-dragster': 'Jr. Dragster',
    'car-show': 'Car Show',
    'special': 'Special Event'
  }
  
  return uniqueEventTypes.map(type => ({
    value: type,
    title: eventTypeMap[type] || type
  }))
}