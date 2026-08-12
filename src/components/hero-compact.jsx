import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Heart, Phone, ShieldCheck, Lock } from 'lucide-react'

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
  heroImageCaption: 'Jamil — back on the road and back to work',
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

  const heroStats = [
    { value: impactStats.individualsHelped, label: impactStats.individualsHelpedLabel },
    { value: impactStats.successRate, label: impactStats.successRateLabel },
    { value: impactStats.responseTime, label: impactStats.responseTimeLabel },
    { value: impactStats.directImpact, label: impactStats.directImpactLabel },
  ]

  return (
    <section className="hero">
      {/* Layered background: soft brand blooms, rung motif and a fine grain */}
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__bloom hero__bloom--navy" />
        <span className="hero__bloom hero__bloom--red" />
        <span className="hero__rungs" />
        <span className="hero__grain" />
      </div>

      <div className="hero__inner container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero__grid">
          {/* Copy */}
          <div className="hero__copy">
            <span className="hero__badge">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              {heroContent.trustBadgeText}
            </span>

            <h1 className="hero__title">
              <span className="hero__title-kicker">{heroContent.heroHeadline}</span>
              <span className="hero__title-accent">{heroContent.heroHeadlineAccent}</span>
            </h1>

            <p className="hero__sub">
              {heroContent.heroSubheadline}
            </p>

            <div className="hero__ctas">
              <Link href={heroContent.heroPrimaryCtaLink} className="hero__cta hero__cta--primary">
                {heroContent.heroPrimaryCta}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link href={heroContent.heroSecondaryCtaLink} className="hero__cta hero__cta--donate">
                <Heart className="h-5 w-5" aria-hidden="true" />
                {heroContent.heroSecondaryCta}
              </Link>
            </div>

            <div className="hero__meta">
              <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="hero__meta-link">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {phone}
              </a>
              <span className="hero__meta-item">
                <Lock className="h-4 w-4" aria-hidden="true" />
                {heroContent.heroQuickContact}
              </span>
            </div>
          </div>

          {/* Portrait: framed rather than full-bleed so the photo reads at its
              native resolution instead of being upscaled behind a scrim. */}
          <figure className="hero__media">
            <span className="hero__media-offset" aria-hidden="true" />
            <div className="hero__frame">
              <Image
                src={heroImageUrl}
                alt={heroImageAlt}
                width={773}
                height={508}
                className="hero__img"
                priority
                fetchPriority="high"
                sizes="(min-width: 1024px) 46vw, (min-width: 640px) 88vw, 92vw"
                quality={82}
                placeholder="blur"
                blurDataURL={heroBlurDataURL}
              />
            </div>
            {heroContent.heroImageCaption && (
              <figcaption className="hero__caption">
                <span className="hero__caption-dot" aria-hidden="true" />
                {heroContent.heroImageCaption}
              </figcaption>
            )}
          </figure>
        </div>
      </div>

      {/* Impact strip */}
      <div className="hero__stats">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-y-8 gap-x-8 md:grid-cols-4 md:gap-x-12">
            {heroStats.map((stat) => (
              <div key={stat.label} className="stat-block text-center">
                <div className="stat-value text-3xl font-bold text-[var(--color-primary)] lg:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-[var(--color-text-secondary)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
