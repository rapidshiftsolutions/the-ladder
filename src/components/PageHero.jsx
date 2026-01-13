import Image from 'next/image'
import Link from 'next/link'

export default function PageHero({
  title,
  subtitle,
  description,
  cta,
  secondaryCta,
  image,
  overlay = true,
  centered = true,
  size = 'default', // 'small', 'default', 'large'
  badge,
  children,
}) {
  const sizeClasses = {
    small: 'py-16 sm:py-20',
    default: 'py-20 sm:py-28',
    large: 'py-28 sm:py-36',
  }

  return (
    <section
      className={`relative ${sizeClasses[size]} overflow-hidden`}
      style={{
        background: image
          ? undefined
          : 'linear-gradient(135deg, var(--color-ladder-blue) 0%, var(--color-ladder-blue-light) 100%)',
      }}
    >
      {/* Background Image */}
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            priority
          />
          {overlay && (
            <div className="absolute inset-0 bg-[var(--color-ladder-blue)]/80" />
          )}
        </>
      )}

      {/* Content */}
      <div className={`relative container mx-auto px-4 sm:px-6 lg:px-8 ${centered ? 'text-center' : ''}`}>
        {badge && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white mb-4">
            {badge}
          </span>
        )}

        {subtitle && (
          <p className="text-[var(--color-ladder-gold)] font-semibold uppercase tracking-wide text-sm mb-2">
            {subtitle}
          </p>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto">
          {title}
        </h1>

        {description && (
          centered ? (
            <div className="max-w-2xl mx-auto">
              <p className="text-lg sm:text-xl text-white/90 mb-8 text-center">
                {description}
              </p>
            </div>
          ) : (
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl">
              {description}
            </p>
          )
        )}

        {(cta || secondaryCta) && (
          <div className={`flex flex-col sm:flex-row gap-4 ${centered ? 'justify-center' : ''}`}>
            {cta && (
              <Link
                href={cta.href}
                className="btn-primary bg-white text-[var(--color-ladder-blue)] hover:bg-white/90"
              >
                {cta.text}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="btn-secondary border-2 border-white text-white hover:bg-white/10"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  )
}
