import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/**
 * Reusable Card component - Institutional Trust Design
 * Clean, professional cards with subtle shadows and clear hierarchy
 */
export default function Card({
  title,
  description,
  icon,
  image,
  href,
  buttonText = 'Learn More',
  className = '',
  variant = 'default', // 'default', 'bordered', 'elevated', 'accent', 'minimal'
  children
}) {
  const baseClasses = 'rounded-lg transition-all duration-200'
  
  const variantClasses = {
    default: 'bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md',
    bordered: 'bg-white border-2 border-gray-200 p-6 hover:border-[var(--color-primary)]',
    elevated: 'bg-white p-6 shadow-lg hover:shadow-xl',
    accent: 'bg-white border-l-4 border-l-[var(--color-primary)] border border-gray-200 p-6 shadow-sm',
    minimal: 'bg-transparent p-4 hover:bg-gray-50 rounded-lg'
  }

  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  const CardContent = () => (
    <>
      {image && (
        <div className="mb-4 -mx-6 -mt-6 overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title || ''} 
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      
      {icon && (
        <div className="mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg text-[var(--color-primary)]">
            {typeof icon === 'string' ? (
              <img src={icon} alt="" className="w-6 h-6" />
            ) : (
              icon
            )}
          </div>
        </div>
      )}
      
      {title && (
        <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
          {title}
        </h3>
      )}
      
      {description && (
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          {description}
        </p>
      )}
      
      {children}
      
      {href && (
        <div className="mt-auto pt-4">
          <span className="inline-flex items-center text-[var(--color-primary)] font-semibold hover:text-[var(--color-primary-light)] transition-colors group">
            {buttonText}
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={`block ${cardClasses} h-full`}>
        <CardContent />
      </Link>
    )
  }

  return (
    <div className={cardClasses}>
      <CardContent />
    </div>
  )
}

/**
 * Stats Card - Display key metrics and numbers
 * Institutional design with serif numbers
 */
export function StatsCard({ 
  number, 
  label, 
  description, 
  icon,
  className = '' 
}) {
  return (
    <div className={`text-center p-6 ${className}`}>
      {icon && (
        <div className="inline-flex items-center justify-center w-12 h-12 bg-[var(--color-primary)]/10 rounded-full text-[var(--color-primary)] mb-4">
          {icon}
        </div>
      )}
      <div 
        className="text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-2"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {number}
      </div>
      <div className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">
        {label}
      </div>
      {description && (
        <div className="text-sm text-[var(--color-text-secondary)]">
          {description}
        </div>
      )}
    </div>
  )
}

/**
 * Team Member Card - Professional profile cards
 */
export function TeamCard({ 
  name, 
  role, 
  bio, 
  image, 
  linkedIn, 
  className = '' 
}) {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm ${className}`}>
      {image && (
        <div className="mb-4">
          <img 
            src={image} 
            alt={name} 
            className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-100"
          />
        </div>
      )}
      <h3 
        className="text-xl font-semibold text-[var(--color-text-primary)] mb-1"
      >
        {name}
      </h3>
      {role && (
        <p className="text-[var(--color-primary)] font-medium mb-3">
          {role}
        </p>
      )}
      {bio && (
        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
          {bio}
        </p>
      )}
      {linkedIn && (
        <div className="mt-4">
          <a 
            href={linkedIn} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-[var(--color-primary)] hover:text-[var(--color-primary-light)] font-semibold text-sm transition-colors"
          >
            View LinkedIn Profile
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      )}
    </div>
  )
}

/**
 * Feature Card - For highlighting services/features
 */
export function FeatureCard({
  icon,
  title,
  description,
  href,
  className = ''
}) {
  const content = (
    <div className={`bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {icon && (
        <div className="inline-flex items-center justify-center w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl text-[var(--color-primary)] mb-4">
          {icon}
        </div>
      )}
      <h3 
        className="text-lg font-semibold text-[var(--color-text-primary)] mb-2"
      >
        {title}
      </h3>
      <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )

  if (href) {
    return <Link href={href} className="block">{content}</Link>
  }

  return content
}

/**
 * Testimonial Card - For success stories and quotes
 */
export function TestimonialCard({
  quote,
  author,
  role,
  image,
  className = ''
}) {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-6 shadow-sm ${className}`}>
      <div className="mb-4">
        <svg 
          className="w-8 h-8 text-[var(--color-primary)]/30" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <blockquote className="text-[var(--color-text-primary)] text-lg leading-relaxed mb-6 italic">
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-4">
        {image && (
          <img 
            src={image} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <div className="font-semibold text-[var(--color-text-primary)]">
            {author}
          </div>
          {role && (
            <div className="text-sm text-[var(--color-text-secondary)]">
              {role}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * Impact Card - For showing donation impact
 */
export function ImpactCard({
  amount,
  impact,
  className = ''
}) {
  return (
    <div className={`bg-gray-50 border border-gray-200 rounded-lg p-6 text-center ${className}`}>
      <div 
        className="text-3xl font-bold text-[var(--color-primary)] mb-2"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        ${amount}
      </div>
      <p className="text-[var(--color-text-secondary)] text-sm">
        {impact}
      </p>
    </div>
  )
}
