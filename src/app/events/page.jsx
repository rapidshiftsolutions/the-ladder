import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import PageHero from '@/components/PageHero'
import SectionWrapper, { SectionHeader } from '@/components/SectionWrapper'
import EventCard from '@/components/EventCard'
import CTASection from '@/components/CTASection'
import { Calendar } from 'lucide-react'

export const metadata = {
  title: 'Events',
  description: 'Join The Ladder at upcoming fundraisers, volunteer events, and community gatherings in Birmingham.',
}

// Placeholder events - will be replaced by Sanity data
const events = [
  {
    title: 'Annual Fundraising Gala',
    slug: 'annual-gala-2026',
    eventType: 'fundraiser',
    eventDate: '2026-04-15T18:00:00',
    location: {
      name: 'Birmingham Museum of Art',
      address: '2000 Reverend Abraham Woods Jr. Blvd, Birmingham, AL 35203',
      isVirtual: false,
    },
    description: 'Join us for an elegant evening celebrating our impact in Birmingham. Dinner, live auction, and inspiring stories from those we\'ve helped.',
    registrationUrl: 'https://eventbrite.com/example',
    cost: '$100/person, $750/table',
    status: 'upcoming',
    featured: true,
  },
  {
    title: 'Spring Volunteer Day',
    slug: 'spring-volunteer-day',
    eventType: 'volunteer',
    eventDate: '2026-03-22T09:00:00',
    location: {
      name: 'Community Center',
      address: 'Birmingham, AL',
      isVirtual: false,
    },
    description: 'Help us organize donation drives and prepare care packages for families in need. All ages welcome!',
    cost: 'Free',
    status: 'upcoming',
  },
  {
    title: 'Barrier Awareness Workshop',
    slug: 'barrier-awareness-workshop',
    eventType: 'training',
    eventDate: '2026-02-28T12:00:00',
    location: {
      isVirtual: true,
      virtualLink: 'https://zoom.us/example',
    },
    description: 'Learn about the types of barriers Birmingham residents face and how organizations can help. Perfect for social workers and nonprofit partners.',
    cost: 'Free',
    status: 'upcoming',
  },
]

export default function EventsPage() {
  const upcomingEvents = events.filter(e => e.status === 'upcoming')
  const pastEvents = events.filter(e => e.status === 'completed')

  return (
    <>
      <SiteHeader />
      
      <main id="main-content">
        <PageHero
          subtitle="Events"
          title="Join Us"
          description="Connect with The Ladder at our fundraisers, volunteer events, and community gatherings. Together, we can remove more barriers."
          size="small"
        />

        {/* Upcoming Events */}
        <SectionWrapper background="light" padding="large">
          <SectionHeader
            subtitle="What's Coming"
            title="Upcoming Events"
          />

          {upcomingEvents.length > 0 ? (
            <div className="space-y-6 max-w-4xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <EventCard
                  key={index}
                  title={event.title}
                  slug={event.slug}
                  eventType={event.eventType}
                  eventDate={event.eventDate}
                  endDate={event.endDate}
                  location={event.location}
                  description={event.description}
                  image={event.image}
                  registrationUrl={event.registrationUrl}
                  cost={event.cost}
                  status={event.status}
                  featured={event.featured}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="w-12 h-12 text-[var(--color-text-muted)] mx-auto mb-4" />
              <p className="text-[var(--color-text-secondary)]">
                No upcoming events at the moment. Check back soon!
              </p>
            </div>
          )}
        </SectionWrapper>

        {/* Host Your Own Event */}
        <SectionWrapper background="subtle" padding="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mb-4">
              Host a Fundraiser for The Ladder
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
              Want to organize your own event to benefit The Ladder? We&apos;d love to 
              support you! From birthday fundraisers to corporate giving events, 
              there are many ways to get involved.
            </p>
            <a
              href="/contact?subject=host-event"
              className="btn btn-primary"
            >
              Contact Us to Learn More
            </a>
          </div>
        </SectionWrapper>

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <SectionWrapper background="light" padding="large">
            <SectionHeader
              subtitle="Past Events"
              title="What We've Done"
            />
            <div className="space-y-6 max-w-4xl mx-auto">
              {pastEvents.map((event, index) => (
                <EventCard
                  key={index}
                  title={event.title}
                  slug={event.slug}
                  eventType={event.eventType}
                  eventDate={event.eventDate}
                  location={event.location}
                  description={event.description}
                  status={event.status}
                />
              ))}
            </div>
          </SectionWrapper>
        )}

        <CTASection variant="dark" />
      </main>

      <SiteFooter />
    </>
  )
}
