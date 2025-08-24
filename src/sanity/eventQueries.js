import { groq } from 'next-sanity'
import { client } from './lib/client'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

// Base event projection
const eventProjection = `{
  _id,
  title,
  slug {
    current
  },
  eventDate,
  eventTime,
  racingType,
  status,
  registrationUrl,
  resultsUrl,
  excerpt,
  publishedAt,
  featured,
  isRecurring,
  recurringDates,
  endDate,
  mainImage {
    asset->,
    alt
  },
  categories[]-> {
    _id,
    title,
    slug {
      current
    }
  },
  body
}`

// Helper function to expand recurring events into individual instances
function expandRecurringEvents(events, options = {}) {
  const { 
    startDate = dayjs().startOf('day'),
    endDate = dayjs().add(2, 'years'),
    includeCompleted = true 
  } = options
  
  const expandedEvents = []
  
  events.forEach(event => {
    if (!event.isRecurring || !event.recurringDates) {
      // Non-recurring event, add as-is
      expandedEvents.push(event)
      return
    }
    
    // Get the base event date to extract time information
    const baseDate = dayjs(event.eventDate)
    const timeString = event.eventTime || baseDate.format('HH:mm')
    
    // Parse recurring pattern
    const pattern = event.recurringDates
    const recurringEndDate = event.endDate ? dayjs(event.endDate) : endDate
    
    // Generate recurring instances based on pattern
    const instances = generateRecurringInstances(
      baseDate,
      pattern,
      startDate,
      recurringEndDate,
      timeString
    )
    
    // Create individual event instances
    instances.forEach((instanceDate, index) => {
      expandedEvents.push({
        ...event,
        _id: `${event._id}_${instanceDate.format('YYYY-MM-DD')}`,
        eventDate: instanceDate.toISOString(),
        recurringInstance: true,
        recurringIndex: index,
        parentEventId: event._id
      })
    })
  })
  
  return expandedEvents
}

// Helper function to generate recurring instances
function generateRecurringInstances(baseDate, pattern, startDate, endDate, timeString) {
  const instances = []
  
  if (!pattern || !pattern.frequency) {
    return instances
  }
  
  let currentDate = dayjs(baseDate).isAfter(startDate) ? dayjs(baseDate) : startDate
  
  // Parse time from timeString (e.g., "7:00 PM", "Gates open at 5:00 PM")
  const timeMatch = timeString.match(/(\d{1,2}):?(\d{2})?\s*(AM|PM)?/i)
  let hour = baseDate.hour()
  let minute = baseDate.minute()
  
  if (timeMatch) {
    hour = parseInt(timeMatch[1])
    minute = parseInt(timeMatch[2] || '0')
    
    if (timeMatch[3] && timeMatch[3].toUpperCase() === 'PM' && hour !== 12) {
      hour += 12
    } else if (timeMatch[3] && timeMatch[3].toUpperCase() === 'AM' && hour === 12) {
      hour = 0
    }
  }
  
  // Set the time on current date
  currentDate = currentDate.hour(hour).minute(minute).second(0).millisecond(0)
  
  const maxInstances = 200 // Safety limit to prevent infinite loops
  let instanceCount = 0
  
  while (currentDate.isBefore(endDate) && instanceCount < maxInstances) {
    instances.push(currentDate.clone())
    instanceCount++
    
    // Calculate next occurrence based on frequency
    switch (pattern.frequency) {
      case 'daily':
        currentDate = currentDate.add(pattern.interval || 1, 'day')
        break
      case 'weekly':
        if (pattern.weekdays && pattern.weekdays.length > 0) {
          // Find next weekday in the pattern
          let nextWeekday = null
          const currentWeekday = currentDate.day()
          
          for (let i = 1; i <= 7; i++) {
            const checkDay = (currentWeekday + i) % 7
            if (pattern.weekdays.includes(checkDay)) {
              nextWeekday = checkDay
              break
            }
          }
          
          if (nextWeekday !== null) {
            const daysToAdd = nextWeekday === currentWeekday ? 7 : 
              (nextWeekday - currentWeekday + 7) % 7
            currentDate = currentDate.add(daysToAdd, 'day')
          } else {
            currentDate = currentDate.add(7 * (pattern.interval || 1), 'day')
          }
        } else {
          currentDate = currentDate.add(7 * (pattern.interval || 1), 'day')
        }
        break
      case 'monthly':
        if (pattern.monthDay) {
          // Specific day of month
          currentDate = currentDate.add(pattern.interval || 1, 'month').date(pattern.monthDay)
        } else {
          // Same day of month
          currentDate = currentDate.add(pattern.interval || 1, 'month')
        }
        break
      case 'yearly':
        currentDate = currentDate.add(pattern.interval || 1, 'year')
        break
      default:
        // Unknown frequency, break to prevent infinite loop
        break
    }
  }
  
  return instances
}

// Get all event categories
export async function getEventCategories() {
  return client.fetch(
    groq`*[_type == "eventCategory"] | order(title asc) {
      _id,
      title,
      slug {
        current
      },
      description
    }`
  )
}

// Get featured events
export async function getFeaturedEvents(limit = 3) {
  const events = await client.fetch(
    groq`*[_type == "event" && featured == true && status in ["upcoming", "in-progress"]] | order(eventDate asc) ${eventProjection}`
  )
  
  // Expand recurring events and filter for upcoming
  const expandedEvents = expandRecurringEvents(events, {
    startDate: dayjs().startOf('day'),
    endDate: dayjs().add(1, 'year')
  })
  
  // Filter for upcoming and featured, then sort and limit
  return expandedEvents
    .filter(event => dayjs(event.eventDate).isAfter(dayjs()))
    .sort((a, b) => dayjs(a.eventDate).unix() - dayjs(b.eventDate).unix())
    .slice(0, limit)
}

// Get events with filtering
export async function getEvents(offset = 0, limit = 10, category = null, year = null, searchTerm = null, status = null) {
  let filters = ['_type == "event"']
  
  if (category) {
    filters.push(`references(*[_type == "eventCategory" && slug.current == $category]._id)`)
  }
  
  if (searchTerm) {
    filters.push(`(title match $searchTerm || excerpt match $searchTerm)`)
  }
  
  if (status) {
    filters.push(`status == $status`)
  }
  
  const filter = filters.join(' && ')
  
  // Fetch all events first (we'll filter by year after expanding recurring events)
  const events = await client.fetch(
    groq`*[${filter}] | order(eventDate desc) ${eventProjection}`,
    { category, searchTerm: searchTerm ? `*${searchTerm}*` : null, status }
  )
  
  // Expand recurring events
  const expandedEvents = expandRecurringEvents(events, {
    startDate: year ? dayjs(`${year}-01-01`) : dayjs().subtract(2, 'years'),
    endDate: year ? dayjs(`${year}-12-31`) : dayjs().add(2, 'years')
  })
  
  // Filter by year if specified (after expansion)
  let filteredEvents = expandedEvents
  if (year) {
    filteredEvents = expandedEvents.filter(event => 
      dayjs(event.eventDate).year() === parseInt(year)
    )
  }
  
  // Sort by event date (newest first)
  filteredEvents.sort((a, b) => dayjs(b.eventDate).unix() - dayjs(a.eventDate).unix())
  
  // Apply pagination
  return filteredEvents.slice(offset, offset + limit)
}

// Get upcoming events
export async function getUpcomingEvents(limit = 10) {
  const events = await client.fetch(
    groq`*[_type == "event" && status == "upcoming"] | order(eventDate asc) ${eventProjection}`
  )
  
  // Expand recurring events
  const expandedEvents = expandRecurringEvents(events, {
    startDate: dayjs().startOf('day'),
    endDate: dayjs().add(1, 'year')
  })
  
  // Filter for upcoming events and limit
  return expandedEvents
    .filter(event => dayjs(event.eventDate).isAfter(dayjs()))
    .sort((a, b) => dayjs(a.eventDate).unix() - dayjs(b.eventDate).unix())
    .slice(0, limit)
}

// Get past events (results)
export async function getPastEvents(limit = 10) {
  return client.fetch(
    groq`*[_type == "event" && status == "completed" && dateTime(eventDate) < dateTime(now())] | order(eventDate desc) [0...$limit] ${eventProjection}`,
    { limit }
  )
}

// Get event count
export async function getEventsCount(category = null, year = null, searchTerm = null, status = null) {
  let filters = ['_type == "event"']
  
  if (category) {
    filters.push(`references(*[_type == "eventCategory" && slug.current == $category]._id)`)
  }
  
  if (searchTerm) {
    filters.push(`(title match $searchTerm || excerpt match $searchTerm)`)
  }
  
  if (status) {
    filters.push(`status == $status`)
  }
  
  const filter = filters.join(' && ')
  
  // Fetch all events first to expand recurring events
  const events = await client.fetch(
    groq`*[${filter}] ${eventProjection}`,
    { category, searchTerm: searchTerm ? `*${searchTerm}*` : null, status }
  )
  
  // Expand recurring events
  const expandedEvents = expandRecurringEvents(events, {
    startDate: year ? dayjs(`${year}-01-01`) : dayjs().subtract(2, 'years'),
    endDate: year ? dayjs(`${year}-12-31`) : dayjs().add(2, 'years')
  })
  
  // Filter by year if specified (after expansion)
  let filteredEvents = expandedEvents
  if (year) {
    filteredEvents = expandedEvents.filter(event => 
      dayjs(event.eventDate).year() === parseInt(year)
    )
  }
  
  return filteredEvents.length
}

// Get single event by slug
export async function getEvent(slug) {
  return client.fetch(
    groq`*[_type == "event" && slug.current == $slug][0] ${eventProjection}`,
    { slug }
  )
}

// Get all event years for filtering
export async function getAllEventYears() {
  const events = await client.fetch(
    groq`*[_type == "event"] ${eventProjection}`
  )
  
  // Expand recurring events to get all possible years
  const expandedEvents = expandRecurringEvents(events, {
    startDate: dayjs().subtract(5, 'years'),
    endDate: dayjs().add(5, 'years')
  })
  
  // Extract years from all events (including recurring instances)
  const years = expandedEvents.map(event => dayjs(event.eventDate).year())
  
  // Get unique years and sort descending
  const uniqueYears = [...new Set(years)].sort((a, b) => b - a)
  return uniqueYears.map(year => year.toString())
}