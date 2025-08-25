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
    <section className={`glass-hero min-h-screen flex items-center justify-center text-white relative overflow-hidden`}>
      {/* Glass morphism background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 glass-card-blue rounded-full blur-lg"></div>
        <div className="absolute top-40 right-20 w-24 h-24 glass-card-green rounded-full blur-md"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 glass-card rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`glass-fade-in ${centered ? 'text-center' : ''}`}>
          {showIcon && (
            <div className={`${centered ? 'mx-auto' : ''} mb-8 glass-slide-up`} style={{animationDelay: '0.2s'}}>
              <div className="inline-flex items-center justify-center glass-card-strong p-4 rounded-2xl shadow-glass-md">
                <img 
                  src="/TheLadder/logos/The Ladder - Logo.png" 
                  alt="The Ladder"
                  className="h-16 w-auto md:h-20"
                />
              </div>
            </div>
          )}

          {subtitle && (
            <div className="glass-slide-up mb-6" style={{animationDelay: '0.4s'}}>
              <span className="inline-block glass-card px-4 py-2 text-[var(--ladder-gold)] font-semibold uppercase tracking-wider text-sm rounded-full shadow-glass-sm">
                {subtitle}
              </span>
            </div>
          )}

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight font-heading glass-slide-up" 
              style={{animationDelay: '0.6s'}}>
            <span className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          {description && (
            <div className="glass-slide-up mb-12" style={{animationDelay: '0.8s'}}>
              <div className="glass-card-strong max-w-4xl mx-auto p-6 rounded-2xl shadow-glass-md">
                <p className="text-xl md:text-2xl leading-relaxed text-white/95">
                  {description}
                </p>
              </div>
            </div>
          )}

          {/* CTA Buttons with Glass Morphism */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 glass-slide-up" 
                 style={{animationDelay: '1s'}}>
              {primaryCTA && (
                <Link 
                  href={primaryCTA.href}
                  className="glass-button-accent text-lg px-8 py-4 rounded-xl shadow-glass-lg hover:shadow-glass-lg transform hover:scale-105 transition-all duration-300"
                >
                  {primaryCTA.icon && <primaryCTA.icon className="w-6 h-6 mr-3" />}
                  {primaryCTA.text}
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Link>
              )}
              
              {secondaryCTA && (
                <Link 
                  href={secondaryCTA.href}
                  className="glass-button-secondary text-lg px-8 py-4 rounded-xl shadow-glass-md hover:shadow-glass-lg transform hover:scale-105 transition-all duration-300"
                >
                  {secondaryCTA.icon && <secondaryCTA.icon className="w-6 h-6 mr-3" />}
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
          )}

          {/* Custom children content with glass styling */}
          {children && (
            <div className="glass-slide-up" style={{animationDelay: '1.2s'}}>
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 glass-fade-in" style={{animationDelay: '1.4s'}}>
        <div className="glass-card-strong p-3 rounded-full shadow-glass-sm animate-bounce">
          <ArrowRight className="w-5 h-5 rotate-90 text-white/70" />
        </div>
      </div>
    </section>
  )
}
