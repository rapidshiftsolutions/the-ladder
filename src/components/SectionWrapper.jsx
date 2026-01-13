export default function SectionWrapper({
  children,
  className = '',
  background = 'default', // 'default', 'light', 'dark', 'gradient'
  id,
  padding = 'default', // 'none', 'small', 'default', 'large'
}) {
  const bgClasses = {
    default: 'bg-[var(--color-background)]',
    light: 'bg-white',
    dark: 'bg-[var(--color-ladder-blue)] text-white',
    gradient: 'bg-gradient-to-br from-[var(--color-ladder-blue)] to-[var(--color-ladder-blue-light)] text-white',
    subtle: 'bg-gray-50',
  }

  const paddingClasses = {
    none: '',
    small: 'py-8 sm:py-12',
    default: 'py-12 sm:py-16 lg:py-20',
    large: 'py-16 sm:py-20 lg:py-28',
  }

  return (
    <section
      id={id}
      className={`${bgClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

// Section header component for consistent styling
export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  className = '',
}) {
  return (
    <div className={`mb-10 sm:mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <p className="text-[var(--color-ladder-red)] font-semibold uppercase tracking-wide text-sm mb-2">
          {subtitle}
        </p>
      )}
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] ${centered ? 'mx-auto' : ''}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg text-[var(--color-text-secondary)] ${centered ? 'max-w-2xl mx-auto text-center' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
