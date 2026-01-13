import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Clock, ExternalLink, Users } from 'lucide-react'

const eventTypeLabels = {
  fundraiser: 'Fundraiser',
  volunteer: 'Volunteer Event',
  outreach: 'Community Outreach',
  awareness: 'Awareness Event',
  training: 'Training/Workshop',
  board: 'Board Meeting',
  celebration: 'Celebration',
  other: 'Event',
}

const statusStyles = {
  upcoming: 'bg-[var(--color-ladder-green)]/10 text-[var(--color-ladder-green)]',
  'sold-out': 'bg-[var(--color-ladder-red)]/10 text-[var(--color-ladder-red)]',
  cancelled: 'bg-gray-100 text-gray-500 line-through',
  postponed: 'bg-[var(--color-ladder-gold)]/10 text-[var(--color-ladder-gold)]',
  completed: 'bg-gray-100 text-gray-500',
}

export default function EventCard({
  title,
  slug,
  eventType,
  eventDate,
  endDate,
  location,
  description,
  image,
  registrationUrl,
  cost,
  status = 'upcoming',
  featured = false,
  className = '',
}) {
  const eventTypeLabel = eventTypeLabels[eventType] || eventType
  const statusStyle = statusStyles[status] || statusStyles.upcoming

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return {
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      day: date.getDate(),
      year: date.getFullYear(),
      time: date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
      full: date.toLocaleDateString('en-US', { 
        weekday: 'long',
        month: 'long', 
        day: 'numeric',
        year: 'numeric'
      }),
    }
  }

  const dateInfo = eventDate ? formatDate(eventDate) : null
  const isUpcoming = status === 'upcoming'

  return (
    <article className={`card p-0 overflow-hidden ${className}`}>
      <div className="flex flex-col sm:flex-row">
        {/* Date Badge or Image */}
        {image ? (
          <div className="relative h-48 sm:h-auto sm:w-48 flex-shrink-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
            {/* Date overlay */}
            {dateInfo && (
              <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg px-3 py-2 text-center">
                <span className="block text-xs font-semibold text-[var(--color-ladder-red)] uppercase">
                  {dateInfo.month}
                </span>
                <span className="block text-2xl font-bold text-[var(--color-text-primary)] leading-none">
                  {dateInfo.day}
                </span>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-gradient-to-br from-[var(--color-ladder-blue)] to-[var(--color-ladder-blue-light)] p-6 sm:w-32 flex-shrink-0 text-center text-white">
            {dateInfo && (
              <>
                <span className="block text-sm font-semibold uppercase opacity-80">
                  {dateInfo.month}
                </span>
                <span className="block text-4xl font-bold leading-none my-1">
                  {dateInfo.day}
                </span>
                <span className="block text-sm opacity-80">
                  {dateInfo.year}
                </span>
              </>
            )}
          </div>
        )}

        {/* Content */}
        <div className="flex-grow p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-semibold bg-[var(--color-ladder-blue)]/10 text-[var(--color-ladder-blue)]">
              {eventTypeLabel}
            </span>
            {status !== 'upcoming' && (
              <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${statusStyle}`}>
                {status.replace('-', ' ').charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
              </span>
            )}
          </div>

          <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
            <Link href={`/events/${slug}`} className="hover:text-[var(--color-ladder-blue)] transition-colors">
              {title}
            </Link>
          </h3>

          {/* Event Details */}
          <div className="space-y-1.5 text-sm text-[var(--color-text-secondary)] mb-3">
            {dateInfo && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[var(--color-text-muted)]" />
                <span>{dateInfo.full}</span>
              </div>
            )}
            {dateInfo?.time && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[var(--color-text-muted)]" />
                <span>{dateInfo.time}</span>
              </div>
            )}
            {location && (
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-text-muted)] mt-0.5" />
                <span>
                  {location.isVirtual 
                    ? 'Virtual Event' 
                    : location.name || location.address
                  }
                </span>
              </div>
            )}
            {cost && (
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[var(--color-text-muted)]" />
                <span>{cost}</span>
              </div>
            )}
          </div>

          {description && (
            <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-2">
              {description}
            </p>
          )}

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/events/${slug}`}
              className="text-sm font-semibold text-[var(--color-ladder-blue)] hover:text-[var(--color-ladder-blue-light)] transition-colors"
            >
              Learn More
            </Link>
            {isUpcoming && registrationUrl && (
              <a
                href={registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-ladder-green)] hover:text-[var(--color-ladder-green-dark)] transition-colors"
              >
                Register
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
