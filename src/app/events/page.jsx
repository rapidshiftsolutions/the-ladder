import { Button } from '/src/components/button'
import { Container } from '/src/components/container'
import Footer from '/src/components/sitewide-footer'
import { Link } from '/src/components/link'
import Navbar from '/src/components/sitewide-navbar'
import { Heading, Lead, Subheading } from '/src/components/text'
import { image } from '/src/sanity/lib/image'
import {
  getEventCategories,
  getFeaturedEvents,
  getEvents,
  getEventsCount,
  getAllEventYears,
} from '/src/sanity/eventQueries'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import dayjs from 'dayjs'
import { notFound } from 'next/navigation'

// Import client components
import FilterPanel from './components/FilterPanel'

export const metadata = {
  title: 'Racing Events - English Mountain Raceway | East Tennessee Drag Racing Schedule',
  description: 'View upcoming drag racing events, schedules, and results at English Mountain Raceway. No prep, grudge, bracket racing, test & tune events every weekend in East Tennessee.',
  keywords: [
    'drag racing events',
    'English Mountain Raceway schedule',
    'East Tennessee racing calendar',
    'no prep racing events',
    'bracket racing schedule',
    'test and tune events',
    'IHRA sanctioned events'
  ],
  openGraph: {
    title: 'Racing Events - English Mountain Raceway',
    description: 'Check out our upcoming drag racing events! No prep, bracket racing, test & tune sessions every weekend.',
    type: 'website'
  }
}

const postsPerPage = 5

async function FeaturedEvents() {
  let featuredEvents = await getFeaturedEvents(3)
  // Remove events without slug or title
  featuredEvents = featuredEvents.filter(event => event.slug?.current && event.title)

  if (featuredEvents.length === 0) {
    return null
  }

  return (
    <div className="mt-16 bg-gradient-to-t from-gray-100 pb-14">
      <Container>
        <h2 className="text-2xl font-medium tracking-tight">Featured Events</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredEvents.map((event) => (
            <div
              key={event.slug?.current || event._id}
              className="relative flex flex-col rounded-3xl bg-white p-2 shadow-md shadow-black/5 ring-1 ring-black/5"
            >
              {event.mainImage?.asset && (
                <img
                  alt={event.mainImage.alt || ''}
                  src={image(event.mainImage).url()}
                  className="w-full rounded-2xl object-contain bg-gray-50"
                />
              )}
              <div className="flex flex-1 flex-col p-8">
                <div className="text-sm/5 text-gray-700">
                  {dayjs(event.eventDate).format('dddd, MMMM D, YYYY')}
                  {event.recurringInstance && (
                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                      Recurring
                    </span>
                  )}
                </div>
                <div className="mt-2 text-base/7 font-medium">
                  <Link href={`/events/${event.slug?.current}`}>
                    <span className="absolute inset-0" />
                    {event.title}
                  </Link>
                </div>
                <div className="mt-2 flex-1 text-sm/6 text-gray-500">
                  {event.excerpt}
                </div>
                {event.eventType && (
                  <div className="mt-6 flex items-center gap-3">
                    <div className="text-sm/5 text-gray-700">
                      {event.eventType}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

async function Events({ page, category, year, searchTerm }) {
  let events = await getEvents(
    (page - 1) * postsPerPage,
    page * postsPerPage,
    category,
    year,
    searchTerm
  )
  // Remove events without slug or title
  events = events.filter(event => event.slug?.current && event.title)

  if (events.length === 0 && (page > 1 || category || year || searchTerm)) {
    // Instead of notFound(), return a message for empty results with filters
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="text-gray-400 mb-4">
          <svg className="size-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </div>
        <h3 className="text-xl font-medium mb-2">No events found</h3>
        <p className="text-gray-500 max-w-md">
          We couldn't find any events with your current filters. Try adjusting your search or browse all events.
        </p>
        <Link 
          href="/events" 
          className="mt-6 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-full bg-white hover:bg-gray-50"
        >
          View all events
        </Link>
      </div>
    )
  }

  if (events.length === 0) {
    return <p className="mt-6 text-gray-500">No events found.</p>
  }

  return (
    <div className="mt-8 grid grid-cols-1 gap-8">
      {events.map((event) => (
        <div
          key={event.slug || event._id}
          className="relative flex flex-col md:flex-row bg-white overflow-hidden rounded-xl shadow-sm ring-1 ring-gray-100 hover:shadow-md transition duration-300"
        >
          {event.mainImage?.asset && (
            <div className="md:w-1/3 bg-gray-50 flex items-center justify-center">
              <img
                alt={event.mainImage.alt || ''}
                src={image(event.mainImage).url()}
                className="max-h-64 w-full object-contain"
              />
            </div>
          )}
          <div className="flex flex-col p-6 flex-1">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
              <time dateTime={event.eventDate}>
                {dayjs(event.eventDate).format('MMMM D, YYYY')}
              </time>
              {event.recurringInstance && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Recurring Event
                </span>
              )}
              {event.categories && event.categories[0] && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100">
                  {event.categories[0].title}
                </span>
              )}
              {event.status && (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  event.status === 'upcoming' ? 'bg-green-100 text-green-800' :
                  event.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                  event.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {event.status}
                </span>
              )}
            </div>
            <h2 className="text-xl font-medium mb-2 tracking-tight">{event.title}</h2>
            <p className="mt-1 flex-1 text-base text-gray-600">{event.excerpt}</p>
            <div className="mt-6 flex items-center justify-between">
              {event.eventType && (
                <div className="flex items-center gap-3">
                  <div className="text-sm font-medium">
                    {event.eventType}
                  </div>
                </div>
              )}
              <Link
                href={`/events/${event.slug?.current}`}
                className="text-sm font-medium text-gray-900 hover:text-gray-700 flex items-center gap-1"
              >
                View Details
                <ChevronRightIcon className="size-4 fill-current" />
                <span className="absolute inset-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

async function Pagination({ page, category, year, searchTerm }) {
  function url(page) {
    let params = new URLSearchParams()

    if (category) params.set('category', category)
    if (year) params.set('year', year)
    if (searchTerm) params.set('search', searchTerm)
    if (page > 1) params.set('page', page.toString())

    return params.size !== 0 ? `/events?${params.toString()}` : '/events'
  }

  let totalEvents = await getEventsCount(category, year, searchTerm)
  let hasPreviousPage = page - 1
  let previousPageUrl = hasPreviousPage ? url(page - 1) : undefined
  let hasNextPage = page * postsPerPage < totalEvents
  let nextPageUrl = hasNextPage ? url(page + 1) : undefined
  let pageCount = Math.ceil(totalEvents / postsPerPage)

  if (pageCount < 2) {
    return null
  }

  return (
    <div className="mt-12 flex items-center justify-between gap-2">
      <Button
        variant="outline"
        href={previousPageUrl}
        disabled={!previousPageUrl}
        className="rounded-full"
      >
        <ChevronLeftIcon className="size-4" />
        Previous
      </Button>
      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: pageCount }, (_, i) => (
          <Link
            key={i + 1}
            href={url(i + 1)}
            data-active={i + 1 === page ? true : undefined}
            className={clsx(
              'size-9 rounded-full flex items-center justify-center text-sm font-medium transition-colors',
              'hover:bg-gray-100',
              'data-[active]:shadow data-[active]:ring-1 data-[active]:ring-gray-900/10 data-[active]:bg-white',
            )}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <Button variant="outline" href={nextPageUrl} disabled={!nextPageUrl} className="rounded-full">
        Next
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  )
}

export default async function page({ searchParams = {} }) {
  // Await searchParams before accessing its properties
  const params = await Promise.resolve(searchParams);
  
  // Access parameters from the awaited object
  const rawPage = params.page;
  const rawCategory = params.category;
  const rawYear = params.year;
  const rawSearch = params.search;
  
  // Process page parameter
  let page = 1;
  if (typeof rawPage === 'string') {
    const parsedPage = parseInt(rawPage);
    if (parsedPage > 1) {
      page = parsedPage;
    } else if (rawPage) {
      return notFound();
    }
  }
  // Process other parameters
  let category = typeof rawCategory === 'string' ? rawCategory : undefined;
  let year = typeof rawYear === 'string' ? rawYear : undefined;
  let searchTerm = typeof rawSearch === 'string' ? rawSearch : undefined;
  
  // Fetch data for filters
  const categories = await getEventCategories();
  const years = await getAllEventYears();

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero section with subtle gradient background */}
      <div className="relative bg-gradient-to-b from-white to-gray-50 pt-24 pb-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Subheading className="text-primary-600">Racing Events</Subheading>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Upcoming Events & Results
            </h1>
            <Lead className="mt-6 text-lg text-gray-600">
              Check out our racing schedule, view past results, and register for upcoming events
              at English Mountain Raceway.
            </Lead>
          </div>
        </Container>
      </div>
      {/* Main content */}
      <Container className="py-12">
        {/* Filters panel */}
        <FilterPanel 
          categories={categories} 
          years={years}
          selectedCategory={category}
          selectedYear={year}
          searchTerm={searchTerm}
        />
        
        {/* Conditional featured section */}
        {page === 1 && !category && !year && !searchTerm && <FeaturedEvents />}
        
        {/* Active filters indicators */}
        {(category || year || searchTerm) && (
          <div className="mt-6 flex items-center text-sm text-gray-500">
            <span>Filtering by:</span>
            <div className="ml-2 flex flex-wrap gap-2">
              {category && (
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1">
                  Category: {categories.find(c => c.slug?.current === category)?.title}
                </span>
              )}
              {year && (
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1">
                  Year: {year}
                </span>
              )}
              {searchTerm && (
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1">
                  Search: "{searchTerm}"
                </span>
              )}
            </div>
          </div>
        )}
        
        {/* Events grid */}
        <Events page={page} category={category} year={year} searchTerm={searchTerm} />
        
        {/* Pagination */}
        <Pagination page={page} category={category} year={year} searchTerm={searchTerm} />
      </Container>
      <Footer />
    </main>
  )
}
