import { urlFor } from '@/sanity/lib/image'

// Helper to get optimized image URL from Sanity
export function getImageUrl(image, width = 800, height = 600) {
  if (!image?.asset) return null
  
  return urlFor(image)
    .width(width)
    .height(height)
    .fit('crop')
    .crop('center')
    .format('webp')
    .quality(85)
    .url()
}

// Helper to get image with multiple sizes for responsive images
export function getResponsiveImageUrls(image) {
  if (!image?.asset) return null

  return {
    small: getImageUrl(image, 400, 300),
    medium: getImageUrl(image, 800, 600),
    large: getImageUrl(image, 1200, 900),
    original: urlFor(image).url()
  }
}

// Helper to format price strings consistently
export function formatPrice(price) {
  if (!price) return ''
  
  // If it's already formatted, return as is
  if (typeof price === 'string' && (price.includes('$') || price.toLowerCase().includes('starting'))) {
    return price
  }
  
  // If it's a number, format it as currency
  if (typeof price === 'number') {
    return `$${price.toFixed(2)}`
  }
  
  return price
}

// Helper to format duration strings
export function formatDuration(duration) {
  if (!duration) return ''
  return duration
}

// Helper to check if a special offer is currently valid
export function isSpecialValid(special) {
  if (!special) return false
  
  const now = new Date()
  const validFrom = special.validFrom ? new Date(special.validFrom) : new Date(0)
  const expiresAt = special.expiresAt ? new Date(special.expiresAt) : new Date('2099-12-31')
  
  return now >= validFrom && now <= expiresAt
}

// Helper to get star rating display
export function getStarRating(rating) {
  const stars = Math.max(0, Math.min(5, Math.floor(rating || 0)))
  return '⭐'.repeat(stars)
}

// Helper to format business hours
export function formatBusinessHours(hours) {
  if (!hours || !Array.isArray(hours)) return []
  
  const dayOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  
  return dayOrder.map(day => {
    const dayInfo = hours.find(h => h.day === day)
    if (!dayInfo) {
      return {
        day: day.charAt(0).toUpperCase() + day.slice(1),
        closed: true,
        hours: 'Closed'
      }
    }
    
    return {
      day: day.charAt(0).toUpperCase() + day.slice(1),
      closed: dayInfo.closed,
      hours: dayInfo.closed ? 'Closed' : `${dayInfo.openTime} - ${dayInfo.closeTime}`
    }
  })
}

// Helper to get today's business hours
export function getTodaysHours(hours) {
  if (!hours || !Array.isArray(hours)) return null
  
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase()
  const todayInfo = hours.find(h => h.day === today)
  
  if (!todayInfo || todayInfo.closed) {
    return 'Closed Today'
  }
  
  return `Open ${todayInfo.openTime} - ${todayInfo.closeTime}`
}

// Helper to check if business is currently open
export function isBusinessOpen(hours) {
  if (!hours || !Array.isArray(hours)) return false
  
  const now = new Date()
  const today = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase()
  const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })
  
  const todayInfo = hours.find(h => h.day === today)
  
  if (!todayInfo || todayInfo.closed) {
    return false
  }
  
  // Simple time comparison (assumes times are in HH:MM format)
  const openTime = todayInfo.openTime.replace(/[^0-9:]/g, '')
  const closeTime = todayInfo.closeTime.replace(/[^0-9:]/g, '')
  
  return currentTime >= openTime && currentTime <= closeTime
}

// Helper to get icon component name from string
export function getIconComponent(iconName) {
  // Map icon names to actual icon components
  const iconMap = {
    'OilIcon': 'WrenchIcon',
    'FilterIcon': 'FunnelIcon',
    'BatteryIcon': 'BoltIcon',
    'TireIcon': 'CircleStackIcon',
    'FluidIcon': 'BeakerIcon',
    'WrenchIcon': 'WrenchScrewdriverIcon',
    'CarIcon': 'TruckIcon',
    'LockIcon': 'LockIcon',
    'PerformanceIcon': 'BoltIcon',
    'StarIcon': 'StarIcon',
    'ClockIcon': 'ClockIcon',
    'HeartIcon': 'HeartIcon',
    'CheckIcon': 'CheckIcon'
  }
  
  return iconMap[iconName] || 'WrenchScrewdriverIcon'
}

// Helper to truncate text for previews
export function truncateText(text, length = 150) {
  if (!text) return ''
  if (text.length <= length) return text
  return text.substring(0, length).trim() + '...'
}

// Helper to generate SEO-friendly meta descriptions
export function generateMetaDescription(content, fallback = '') {
  if (!content) return fallback
  
  let description = ''
  
  if (typeof content === 'string') {
    description = content
  } else if (content.description) {
    description = content.description
  } else if (content.excerpt) {
    description = content.excerpt
  }
  
  return truncateText(description, 160) || fallback
}