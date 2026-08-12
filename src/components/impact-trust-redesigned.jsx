import Link from 'next/link'
import { Users, CheckCircle, Clock, DollarSign, Shield, Award, Handshake, ArrowRight } from 'lucide-react'

const impactStats = [
  {
    icon: Users,
    number: '500+',
    label: 'Individuals Helped'
  },
  {
    icon: CheckCircle,
    number: '95%',
    label: 'Success Rate'
  },
  {
    icon: Clock,
    number: '24hr',
    label: 'Response Time'
  },
  {
    icon: DollarSign,
    number: '100%',
    label: 'Direct Impact'
  }
]

const trustBadges = [
  {
    icon: Shield,
    label: '501(c)(3) Tax Exempt'
  },
  {
    icon: Award,
    label: 'EIN: 82-0737087'
  },
  {
    icon: Handshake,
    label: 'Trusted Partners'
  }
]

export default function ImpactTrustRedesigned({ stats = null, content = null }) {

  const resolvedStats = stats
    ? [
        { icon: Users, number: String(stats.individualsHelped || '500+'), label: 'Individuals Helped' },
        { icon: CheckCircle, number: String(stats.successRate || '95%'), label: 'Success Rate' },
        { icon: Clock, number: String(stats.responseTime || '24hr'), label: 'Response Time' },
        { icon: DollarSign, number: String(stats.directImpact || '100%'), label: 'Direct Impact' },
      ]
    : impactStats

  return (
    <section 
      className="py-16 lg:py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className="text-center mb-12"
        >
          <span className="eyebrow eyebrow--centered mb-3">
            Our Impact
          </span>
          <h2 
            className="heading-rule heading-rule--centered text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Measurable Results
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
            {content?.impactTestimonialQuote
              ? 'Real outcomes from people who climbed past a missing rung.'
              : 'Every number represents a real person who overcame a barrier.'}
          </p>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {resolvedStats.map((stat, index) => (
            <div
              key={stat.label}
              className="group rounded-xl border border-[var(--color-border)] bg-white p-6 text-center shadow-[0_1px_3px_rgba(28,40,51,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-primary)]/25 hover:shadow-[0_12px_28px_-12px_rgba(28,40,51,0.25)]"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] shadow-sm ring-4 ring-[var(--color-primary)]/10">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div 
                className="stat-value text-3xl lg:text-4xl font-bold text-[var(--color-primary)]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {stat.number}
              </div>
              <div className="text-sm text-[var(--color-text-secondary)] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div 
          className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 py-6 border-t border-b border-[var(--color-border)]"
        >
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-[var(--color-text-secondary)]">
              <badge.icon className="w-5 h-5 text-[var(--color-primary)]" />
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className="text-center mt-10"
        >
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/success-stories"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white px-6 py-3 rounded-lg font-semibold transition-colors min-h-[48px]"
            >
              Read Success Stories
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/annual-reports"
              className="inline-flex items-center justify-center gap-2 bg-white border border-[var(--color-border-dark)] hover:border-[var(--color-primary)] text-[var(--color-text-primary)] px-6 py-3 rounded-lg font-semibold transition-colors min-h-[48px]"
            >
              View Annual Reports
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
