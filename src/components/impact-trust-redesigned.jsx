'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
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
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

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
      ref={sectionRef}
      className="py-16 lg:py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-3">
            Our Impact
          </span>
          <h2 
            className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Measurable Results
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
            {content?.impactTestimonialQuote
              ? 'Real outcomes from people who climbed past a missing rung.'
              : 'Every number represents a real person who overcame a barrier.'}
          </p>
        </motion.div>

        {/* Impact Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {resolvedStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-[var(--color-bg-secondary)] rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <div 
                className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {stat.number}
              </div>
              <div className="text-sm text-[var(--color-text-secondary)] font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 py-6 border-t border-b border-[var(--color-border)]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-[var(--color-text-secondary)]">
              <badge.icon className="w-5 h-5 text-[var(--color-primary)]" />
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
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
        </motion.div>
      </div>
    </section>
  )
}
