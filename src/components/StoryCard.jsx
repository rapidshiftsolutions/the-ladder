import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'

const barrierLabels = {
  housing: 'Housing',
  transportation: 'Transportation',
  employment: 'Employment',
  healthcare: 'Healthcare',
  childcare: 'Childcare',
  education: 'Education',
  legal: 'Legal',
  financial: 'Financial',
  other: 'Other',
}

const barrierColors = {
  housing: 'bg-blue-100 text-blue-800',
  transportation: 'bg-green-100 text-green-800',
  employment: 'bg-purple-100 text-purple-800',
  healthcare: 'bg-red-100 text-red-800',
  childcare: 'bg-yellow-100 text-yellow-800',
  education: 'bg-indigo-100 text-indigo-800',
  legal: 'bg-gray-100 text-gray-800',
  financial: 'bg-orange-100 text-orange-800',
  other: 'bg-gray-100 text-gray-800',
}

export default function StoryCard({
  name,
  slug,
  barrier,
  story,
  outcome,
  quote,
  image,
  featured = false,
  className = '',
}) {
  const barrierLabel = barrierLabels[barrier] || barrier
  const barrierColor = barrierColors[barrier] || barrierColors.other

  // Truncate story for card view
  const truncatedStory = story?.length > 150 
    ? story.substring(0, 150) + '...' 
    : story

  if (featured) {
    // Featured card layout (horizontal on desktop)
    return (
      <article className={`card p-0 overflow-hidden ${className}`}>
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative h-64 md:h-auto">
            {image ? (
              <Image
                src={image}
                alt={`${name}'s story`}
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-ladder-blue)] to-[var(--color-ladder-blue-light)] flex items-center justify-center">
                <span className="text-6xl font-bold text-white/20">
                  {name?.charAt(0)}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 flex flex-col">
            <span className={`inline-flex w-fit px-3 py-1 rounded-full text-xs font-semibold ${barrierColor} mb-4`}>
              {barrierLabel} Barrier
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-2">
              {name}&apos;s Story
            </h3>

            <p className="text-[var(--color-text-secondary)] mb-4 flex-grow">
              {truncatedStory}
            </p>

            {quote && (
              <blockquote className="relative pl-4 border-l-4 border-[var(--color-ladder-gold)] italic text-[var(--color-text-secondary)] mb-4">
                <Quote className="absolute -left-3 -top-2 w-6 h-6 text-[var(--color-ladder-gold)]" />
                &quot;{quote}&quot;
              </blockquote>
            )}

            {outcome && (
              <p className="text-sm font-medium text-[var(--color-ladder-green)] mb-4">
                ✓ {outcome}
              </p>
            )}

            <Link
              href={`/success-stories/${slug}`}
              className="inline-flex items-center gap-2 text-[var(--color-ladder-blue)] font-semibold hover:gap-3 transition-all"
            >
              Read Full Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    )
  }

  // Standard card layout
  return (
    <article className={`card p-0 overflow-hidden ${className}`}>
      {/* Image */}
      <div className="relative h-48">
        {image ? (
          <Image
            src={image}
            alt={`${name}'s story`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-ladder-blue)] to-[var(--color-ladder-blue-light)] flex items-center justify-center">
            <span className="text-5xl font-bold text-white/20">
              {name?.charAt(0)}
            </span>
          </div>
        )}
        
        {/* Badge overlay */}
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${barrierColor}`}>
          {barrierLabel}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
          {name}&apos;s Story
        </h3>

        <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-3">
          {truncatedStory}
        </p>

        {outcome && (
          <p className="text-xs font-medium text-[var(--color-ladder-green)] mb-4">
            ✓ {outcome}
          </p>
        )}

        <Link
          href={`/success-stories/${slug}`}
          className="inline-flex items-center gap-1 text-sm text-[var(--color-ladder-blue)] font-semibold hover:gap-2 transition-all"
        >
          Read Story
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  )
}
