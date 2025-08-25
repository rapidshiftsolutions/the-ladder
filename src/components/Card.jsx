import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/**
 * Reusable Card component for displaying content consistently
 * Used for services, stories, team members, etc.
 */
export default function Card({
  title,
  description,
  icon,
  image,
  href,
  buttonText = 'Learn More',
  className = '',
  variant = 'default', // 'default', 'bordered', 'elevated', 'minimal'
  children
}) {
  const baseClasses = 'rounded-lg transition-all duration-300'
  
  const variantClasses = {
    default: 'bg-white p-6 hover:shadow-lg',
    bordered: 'bg-white border border-gray-200 p-6 hover:border-[var(--ladder-blue)] hover:shadow-lg',
    elevated: 'bg-white p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1',
    minimal: 'bg-transparent p-4 hover:bg-gray-50'
  }

  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  const CardContent = () => (
    <>
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title || ''} 
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      {icon && (
        <div className="mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[var(--ladder-blue)]/10 rounded-lg">
            {typeof icon === 'string' ? (
              <img src={icon} alt="" className="w-6 h-6" />
            ) : (
              icon
            )}
          </div>
        </div>
      )}
      
      {title && (
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {title}
        </h3>
      )}
      
      {description && (
        <p className="text-gray-600 mb-4">
          {description}
        </p>
      )}
      
      {children}
      
      {href && (
        <div className="mt-auto pt-4">
          <div className="inline-flex items-center text-[var(--ladder-blue)] font-semibold hover:text-[var(--ladder-blue)]/80 transition-colors">
            {buttonText}
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
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
 * Stats Card for displaying numbers and metrics
 */
export function StatsCard({ number, label, description, color = 'text-[var(--ladder-blue)]' }) {
  return (
    <div className="text-center">
      <div className={`text-4xl font-bold ${color} mb-2`}>
        {number}
      </div>
      <div className="text-lg font-semibold text-gray-900 mb-1">
        {label}
      </div>
      {description && (
        <div className="text-sm text-gray-600">
          {description}
        </div>
      )}
    </div>
  )
}

/**
 * Team Member Card
 */
export function TeamCard({ name, role, bio, image, linkedIn, className = '' }) {
  return (
    <Card className={`text-center ${className}`} variant="bordered">
      {image && (
        <div className="mb-4">
          <img 
            src={image} 
            alt={name} 
            className="w-24 h-24 rounded-full mx-auto object-cover"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
      {role && <p className="text-[var(--ladder-blue)] font-medium mb-3">{role}</p>}
      {bio && <p className="text-gray-600 text-sm">{bio}</p>}
      {linkedIn && (
        <div className="mt-4">
          <a 
            href={linkedIn} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--ladder-blue)] hover:text-[var(--ladder-blue)]/80 font-semibold"
          >
            View Profile
          </a>
        </div>
      )}
    </Card>
  )
}