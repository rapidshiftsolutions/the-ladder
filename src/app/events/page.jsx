import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, Clock, ArrowRight, Heart, Users, ExternalLink } from 'lucide-react'
import { getUpcomingEvents } from '@/sanity/eventQueries'

export const metadata = {
  title: 'Events | Community Gatherings',
  description: 'Join The Ladder at community events, fundraisers, and volunteer opportunities in Birmingham. Stay connected with our mission.',
  openGraph: {
    title: 'Events | The Ladder Birmingham',
    description: 'Find upcoming events and get involved with The Ladder.',
    url: 'https://www.the-ladder.org/events',
    type: 'website'
  }
}

// Revalidate every hour
export const revalidate = 3600

async function getEvents() {
  try {
    const events = await getUpcomingEvents(10)
    return events || []
  } catch (error) {
    console.error('Error fetching events:', error)
    return []
  }
}

function formatEventDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default async function EventsPage() {
  const events = await getEvents()
  const hasEvents = events && events.length > 0

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="bg-[var(--color-primary)] py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Upcoming Events
              </h1>
              <p className="text-xl text-white/90">
                Join us at community gatherings, fundraisers, and volunteer 
                opportunities throughout Birmingham.
              </p>
            </div>
          </div>
        </section>

        {/* Events List */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {hasEvents ? (
                <div className="space-y-8">
                  {events.map((event) => (
                    <div 
                      key={event._id}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Event Image */}
                        {event.mainImage?.asset && (
                          <div className="md:w-1/3 h-48 md:h-auto relative">
                            <Image
                              src={event.mainImage.asset.url || '/TheLadder/photos/LadderImage.jpg'}
                              alt={event.mainImage.alt || event.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        
                        {/* Event Details */}
                        <div className={`p-6 ${event.mainImage?.asset ? 'md:w-2/3' : 'w-full'}`}>
                          {event.featured && (
                            <span className="inline-block px-3 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-medium rounded-full mb-3">
                              Featured Event
                            </span>
                          )}
                          
                          <h2 
                            className="text-2xl font-bold text-[var(--color-text-primary)] mb-3"
                            style={{ fontFamily: 'var(--font-heading)' }}
                          >
                            {event.title}
                          </h2>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-[var(--color-text-secondary)] mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-[var(--color-primary)]" />
                              {formatEventDate(event.eventDate)}
                            </div>
                            {event.eventTime && (
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                                {event.eventTime}
                              </div>
                            )}
                          </div>
                          
                          {event.excerpt && (
                            <p className="text-[var(--color-text-secondary)] mb-4 line-clamp-2">
                              {event.excerpt}
                            </p>
                          )}
                          
                          {event.registrationUrl && (
                            <a
                              href={event.registrationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary inline-flex items-center gap-2"
                            >
                              Register Now
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* No events message */
                <div className="bg-gray-50 rounded-xl p-12 border border-gray-200 text-center">
                  <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-[var(--color-primary)]" />
                  </div>
                  <h2 
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    No Upcoming Events
                  </h2>
                  <p className="text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto">
                    We don&apos;t have any scheduled events at the moment, but check back 
                    soon or follow us on social media for announcements.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://instagram.com/theladder_bham"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      Follow Us on Instagram
                    </a>
                    <Link href="/contact" className="btn btn-primary">
                      Contact Us
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Ways to Get Involved */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Other Ways to Get Involved
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)]">
                You don&apos;t need to wait for an event to make a difference.
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-[var(--color-accent)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-[var(--color-accent)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                  Make a Donation
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                  Your gift directly removes barriers for Birmingham residents.
                </p>
                <Link href="/donate" className="text-[var(--color-primary)] font-medium hover:underline flex items-center justify-center gap-1">
                  Donate Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                  Volunteer
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                  Share your time and skills to help our mission.
                </p>
                <Link href="/volunteer" className="text-[var(--color-primary)] font-medium hover:underline flex items-center justify-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-[var(--color-secondary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-7 h-7 text-[var(--color-secondary)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                  Monthly Giving
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                  Provide sustained support with a recurring donation.
                </p>
                <Link href="/monthly-giving" className="text-[var(--color-primary)] font-medium hover:underline flex items-center justify-center gap-1">
                  Start Giving <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
