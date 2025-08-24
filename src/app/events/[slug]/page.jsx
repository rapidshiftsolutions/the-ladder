import { Button } from '/src/components/button'
import { Container } from '/src/components/container'
import { Link } from '/src/components/link'
import Footer from '/src/components/sitewide-footer'
import Navbar from '/src/components/sitewide-navbar'
import { Subheading } from '/src/components/text'
import ImageViewer from '/src/components/ImageViewer'
import { image } from '/src/sanity/image'
import { getEvent } from '/src/sanity/eventQueries'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import dayjs from 'dayjs'
import { PortableText } from '@portabletext/react'
import { sanityComponents } from '/src/components/sanity/SanityComponents'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }) {
  // Await the params and fetch the post using the slug
  const resolvedParams = await params
  const event = await getEvent(resolvedParams.slug)

  // Define fallback metadata for missing events
  if (!event) {
    return {
      title: 'Event Not Found',
      description: 'The requested racing event could not be found.',
    }
  }

  // Construct the absolute URL for the event (adjust domain as needed)
  const siteUrl = 'https://englishmountainraceway.com' // English Mountain Raceway domain
  const eventUrl = `${siteUrl}/events/${event.slug?.current}`

  // Get the image URL for Open Graph/Twitter if available
  const imageUrl = event.mainImage
    ? image(event.mainImage).size(1200, 630).url()
    : null

  // Build and return dynamic metadata
  return {
    title: event.title || 'English Mountain Raceway Event',
    description: event.excerpt || 'View event details and results from English Mountain Raceway.',
    alternates: {
      canonical: eventUrl,
    },
    openGraph: {
      title: event.title,
      description: event.excerpt,
      url: eventUrl,
      siteName: 'English Mountain Raceway Events',
      type: 'article',
      publishedTime: event.eventDate,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              alt: event.mainImage.alt || 'Event image',
              width: 1200,
              height: 630,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: event.title,
      description: event.excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
  }
}

export default async function eventPost(props) {
  // Await the params before using them!
  const params = await props.params

  const event = (await getEvent(params.slug)) || notFound()

  return (
    <main className="overflow-hidden bg-accent-50">
      <Navbar />
      <Container>
        <Subheading className="mt-16">
          {dayjs(event.eventDate).format('dddd, MMMM D, YYYY')}
        </Subheading>
        <div className="flex items-center gap-4 mt-2">
          <h1 className="font-bold text-2xl">
            {event.title}
          </h1>
          {event.status && (
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              event.status === 'upcoming' ? 'bg-green-100 text-green-800' :
              event.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
              event.status === 'completed' ? 'bg-blue-100 text-blue-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {event.status}
            </span>
          )}
        </div>

        <div className="mt-4 sm:mt-8 lg:mt-16 grid grid-cols-1 gap-8 pb-24 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
          <div className="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start">
            {event.eventType && (
              <div className="flex items-center gap-3">
                <div className="text-sm/5 text-light-700 font-medium">
                  Event Type: {event.eventType}
                </div>
              </div>
            )}
            {Array.isArray(event.categories) && (
              <div className="flex flex-wrap gap-2">
                {event.categories.map((category) => (
                  <Link
                    key={category.slug?.current}
                    href={`/events?category=${category.slug?.current}`}
                    className="rounded-full border border-dotted border-light-300 bg-light-50 px-2 text-sm/6 font-medium text-light-500"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            )}
            {(event.registrationUrl || event.resultsUrl) && (
              <div className="flex flex-col gap-2 w-full">
                {event.registrationUrl && (
                  <Button variant="outline" href={event.registrationUrl}>
                    Register for Event
                  </Button>
                )}
                {event.resultsUrl && (
                  <Button variant="outline" href={event.resultsUrl}>
                    View Results
                  </Button>
                )}
              </div>
            )}
          </div>

          <div className="text-light-700">
            <div className="max-w-4xl xl:mx-auto">
              {event.mainImage && (
                <ImageViewer
                  src={image(event.mainImage).url()}
                  alt={event.mainImage.alt || ''}
                  className="mb-6 w-full rounded-2xl object-contain bg-gray-50 shadow-xl"
                />
              )}

              {event.excerpt && (
                <div className="mb-8 text-lg text-gray-600">
                  {event.excerpt}
                </div>
              )}

              {event.body && (
                <div className="prose prose-lg max-w-none">
                  <PortableText 
                    value={event.body} 
                    components={sanityComponents} 
                  />
                </div>
              )}
              <div className="mt-10">
                <Button variant="outline" href="/events">
                  <ChevronLeftIcon className="size-4" />
                  Back to events
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
}
