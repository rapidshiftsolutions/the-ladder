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
  backgroundGradient = 'from-[var(--ladder-blue)] via-[var(--ladder-blue-light)] to-[var(--ladder-green)]',
  centered = true,
  showIcon = true,
  children 
}) {
  return (
    <section className={`relative py-20 lg:py-24 bg-gradient-to-br ${backgroundGradient} text-white overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${centered ? 'text-center' : ''}`}>
          {showIcon && (
            <div className={`${centered ? 'mx-auto' : ''} mb-6`}>
              <div className="inline-flex items-center justify-center">
                <img 
                  src="/TheLadder/logos/The Ladder - Logo.png" 
                  alt="The Ladder"
                  className="h-16 w-auto"
                />
              </div>
            </div>
          )}

          {subtitle && (
            <p className="text-[var(--ladder-gold)] font-semibold mb-4 uppercase tracking-wide text-sm">
              {subtitle}
            </p>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>

          {description && (
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white/90 max-w-4xl mx-auto">
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {primaryCTA && (
                <Link 
                  href={primaryCTA.href}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[var(--ladder-red)] text-white font-semibold rounded-lg hover:bg-[var(--ladder-red)]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {primaryCTA.icon && <primaryCTA.icon className="w-5 h-5 mr-2" />}
                  {primaryCTA.text}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              )}
              
              {secondaryCTA && (
                <Link 
                  href={secondaryCTA.href}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[var(--ladder-blue)] transition-all duration-300"
                >
                  {secondaryCTA.icon && <secondaryCTA.icon className="w-5 h-5 mr-2" />}
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
          )}

          {/* Custom children content */}
          {children}
        </div>
      </div>
    </section>
  )
}