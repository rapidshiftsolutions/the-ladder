/**
 * Reusable Section component for consistent layout and spacing
 * Used across all pages for consistent design
 */
export default function Section({
  children,
  className = '',
  backgroundColor = 'bg-white',
  padding = 'py-16',
  maxWidth = 'max-w-7xl',
  textAlign = '',
  id
}) {
  return (
    <section 
      id={id}
      className={`${padding} ${backgroundColor} ${className}`}
    >
      <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 ${textAlign}`}>
        {children}
      </div>
    </section>
  )
}

/**
 * Section Header component for consistent heading styling
 */
export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  titleClassName = '',
  descriptionClassName = ''
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p className="text-[var(--ladder-gold)] font-semibold mb-2 uppercase tracking-wide text-sm">
          {subtitle}
        </p>
      )}
      
      {title && (
        <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 ${titleClassName}`}>
          {title}
        </h2>
      )}
      
      {description && (
        <p className={`text-lg text-gray-600 ${centered ? 'max-w-4xl mx-auto' : ''} ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  )
}