import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Heart, Phone, Shield } from 'lucide-react'

// Blur placeholder for the hero image (base64 encoded tiny version)
// This prevents layout shift and shows a preview while the full image loads
const heroBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9PjsBCgsLDg0OHBAQHDsoIig7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O//AABEIAAoACgMBEQACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAAB//EAB0QAAICAgMBAAAAAAAAAAAAAAECAAMEBREhMUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AqwBdkZN9lti2V0moKi8Q/9k='

// Default values (used when CMS data is not available)
const defaultContent = {
  heroHeadline: 'Helping Individuals Overcome',
  heroHeadlineAccent: 'Barriers to Success',
  heroSubheadline: "When life's obstacles stand in your way, The Ladder partners with you to find solutions. We provide personalized crisis intervention and connect you with the resources you need.",
  heroPrimaryCta: 'Get Help Today',
  heroPrimaryCtaLink: '/get-help',
  heroSecondaryCta: 'Make a Donation',
  heroSecondaryCtaLink: '/donate',
  heroQuickContact: 'All services are free and confidential',
  trustBadgeText: '501(c)(3) Nonprofit • Serving Birmingham Since 2021',
}

const defaultStats = {
  individualsHelped: '500+',
  individualsHelpedLabel: 'Individuals Helped',
  successRate: '95%',
  successRateLabel: 'Success Rate',
  responseTime: '24hr',
  responseTimeLabel: 'Response Time',
  directImpact: '100%',
  directImpactLabel: 'Confidential',
}

export default function HeroCompact({ 
  content = {}, 
  stats = {},
  siteSettings = {} 
}) {
  // Merge with defaults
  const heroContent = { ...defaultContent, ...content }
  const impactStats = { ...defaultStats, ...stats }
  const phone = siteSettings?.phone || '(205) 522-1162'
  
  // Get hero image URL or use default
  const heroImageUrl = heroContent.heroImage?.asset?.url || '/TheLadder/photos/Jamil.jpg'
  const heroImageAlt = heroContent.heroImage?.alt || 'Jamil - a success story from The Ladder'

  return (
    <section className="relative bg-white">
      {/* Hero Content - min-height prevents CLS during image load */}
      <div className="relative min-h-[500px] sm:min-h-[550px] lg:min-h-[600px]">
        {/* Background Image with Overlay - Optimized for LCP */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={heroImageUrl}
            alt={heroImageAlt}
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={80}
            placeholder="blur"
            blurDataURL={heroBlurDataURL}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/95 via-[var(--color-primary)]/85 to-[var(--color-primary)]/75" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            {/* Trust Badge */}
            <div className="hero-animate hero-animate--badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">
                {heroContent.trustBadgeText}
              </span>
            </div>

            {/* Main Headline - Fluid typography to ensure max 2 lines */}
            <h1 className="hero-headline font-bold text-white mb-6">
              <span className="hero-headline__line1">{heroContent.heroHeadline}</span>
              <span className="hero-headline__line2 text-[var(--color-accent-light)]">{heroContent.heroHeadlineAccent}</span>
            </h1>

            {/* Subheadline */}
            <p className="hero-animate hero-animate--subheadline text-base sm:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
              {heroContent.heroSubheadline}
            </p>

            {/* CTAs */}
            <div className="hero-animate hero-animate--ctas flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
              <Link
                href={heroContent.heroPrimaryCtaLink}
                className="btn btn-lg bg-white text-[var(--color-primary)] hover:bg-gray-100 font-semibold inline-flex items-center justify-center"
              >
                {heroContent.heroPrimaryCta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href={heroContent.heroSecondaryCtaLink}
                className="btn btn-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] font-semibold inline-flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5" />
                {heroContent.heroSecondaryCta}
              </Link>
            </div>

            {/* Quick Contact */}
            <div className="hero-animate hero-animate--contact flex flex-wrap items-center gap-3 sm:gap-5 text-sm">
              <a 
                href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2 text-white hover:text-white/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {phone}
              </a>
              <span className="text-white/40">|</span>
              <span className="text-white/80">{heroContent.heroQuickContact}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar / Stats Section */}
      <div className="bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div 
                className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {impactStats.individualsHelped}
              </div>
              <div className="text-sm text-[var(--color-text-secondary)]">
                {impactStats.individualsHelpedLabel}
              </div>
            </div>
            <div className="text-center">
              <div 
                className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {impactStats.successRate}
              </div>
              <div className="text-sm text-[var(--color-text-secondary)]">
                {impactStats.successRateLabel}
              </div>
            </div>
            <div className="text-center">
              <div 
                className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {impactStats.responseTime}
              </div>
              <div className="text-sm text-[var(--color-text-secondary)]">
                {impactStats.responseTimeLabel}
              </div>
            </div>
            <div className="text-center">
              <div 
                className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {impactStats.directImpact}
              </div>
              <div className="text-sm text-[var(--color-text-secondary)]">
                {impactStats.directImpactLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
