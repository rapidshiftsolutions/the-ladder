import { Heart, ArrowRight } from 'lucide-react'
import Link from 'next/link'

/**
 * Reusable Hero component for The Ladder nonprofit pages
 * Supports different layouts and content types
 */
export default function Hero({ 
  title, 
  subtitle, 
  description, 
  primaryCTA, 
  secondaryCTA, 
  backgroundGradient = 'glass-hero',
  centered = true,
  showIcon = true,
  children 
}) {
  return (
    <section className={`min-h-screen flex items-center justify-center text-white relative overflow-hidden bg-gradient-to-br from-[var(--color-ladder-blue)] to-[var(--color-ladder-blue-light)]`}>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`${centered ? 'text-center' : ''}`}>
          {showIcon && (
            <div className={`${centered ? 'mx-auto' : ''} mb-8`}>
              <div className="inline-flex items-center justify-center card p-4 bg-white/90">
                <img 
                  src="/TheLadder/logos/The Ladder - Logo.png" 
                  alt="The Ladder"
                  className="h-16 w-auto md:h-20"
                />
              </div>
            </div>
          )}

          {subtitle && (
            <div className="mb-6">
              <span className="inline-block card px-4 py-2 text-[var(--color-ladder-gold)] font-semibold uppercase tracking-wider text-sm rounded-full bg-white/90">
                {subtitle}
              </span>
            </div>
          )}

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight font-heading">
            <span className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          {description && (
            <div className="mb-12">
              <div className="card max-w-4xl mx-auto p-6 bg-white/90">
                <p className="text-xl md:text-2xl leading-relaxed text-[var(--color-text-primary)]">
                  {description}
                </p>
              </div>
            </div>
          )}

          {/* CTA Buttons with Glass Morphism */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              {primaryCTA && (
                <Link 
                  href={primaryCTA.href}
                  className="btn-accent text-lg px-8 py-4 rounded-lg"
                >
                  {primaryCTA.icon && <primaryCTA.icon className="w-6 h-6 mr-3" />}
                  {primaryCTA.text}
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Link>
              )}
              
              {secondaryCTA && (
                <Link 
                  href={secondaryCTA.href}
                  className="btn-secondary text-lg px-8 py-4 rounded-lg"
                >
                  {secondaryCTA.icon && <secondaryCTA.icon className="w-6 h-6 mr-3" />}
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
          )}

          {/* Custom children content */}
          {children && (
            <div>
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="card p-3 rounded-full bg-white/90 animate-bounce">
          <ArrowRight className="w-5 h-5 rotate-90 text-[var(--color-ladder-blue)]" />
        </div>
      </div>
    </section>
  )
}
