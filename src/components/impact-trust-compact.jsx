'use client'

import Link from 'next/link'
import { Users, CheckCircle, Clock, DollarSign, Award, Shield, Handshake, Star, ArrowRight } from 'lucide-react'

export default function ImpactTrustCompact() {
  const impactStats = [
    {
      icon: Users,
      number: '500+',
      label: 'Individuals Helped',
      description: 'Birmingham residents who have overcome barriers with our support'
    },
    {
      icon: CheckCircle,
      number: '95%',
      label: 'Success Rate',
      description: 'Barriers successfully removed, enabling forward progress'
    },
    {
      icon: Clock,
      number: '24hr',
      label: 'Response Time',
      description: 'Average time from initial contact to first response'
    },
    {
      icon: DollarSign,
      number: '100%',
      label: 'Direct Impact',
      description: 'Of donations go directly to barrier removal assistance'
    }
  ]

  const trustElements = [
    {
      icon: Shield,
      title: '501(c)(3) Tax Exempt',
      description: 'Registered nonprofit organization (EIN: 82-0737087). All donations are tax-deductible.'
    },
    {
      icon: Award,
      title: 'Experienced Leadership',
      description: 'Board members with extensive nonprofit, healthcare, and business experience.'
    },
    {
      icon: Handshake,
      title: 'Trusted Partners',
      description: 'Collaborated with by Birmingham\'s leading nonprofit organizations.'
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Measurable Impact, Trusted Results
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto text-center">
            Our outcomes speak for themselves. Every statistic represents a real person 
            who overcame a barrier and moved forward in life.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-[var(--color-primary)]" />
              </div>

              {/* Number */}
              <div 
                className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {stat.number}
              </div>

              {/* Label */}
              <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 lg:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 
              className="text-2xl font-bold text-[var(--color-text-primary)] mb-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Why Trust The Ladder?
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              Transparency, accountability, and a commitment to our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {trustElements.map((element, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <element.icon className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                  {element.title}
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {element.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 lg:p-12 max-w-4xl mx-auto">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current text-amber-400" />
            ))}
          </div>
          
          <blockquote className="text-center mb-8">
            <p 
              className="text-xl lg:text-2xl text-[var(--color-text-primary)] leading-relaxed mb-6 italic"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              &quot;When I lost my car in an accident, I thought I would lose everything. 
              The Ladder provided a rental car so I could keep working until I found a replacement. 
              Today I have a new job I love and just moved into a beautiful new home. 
              They gave me the support I needed exactly when I needed it.&quot;
            </p>
            <footer>
              <cite className="not-italic">
                <span className="block font-semibold text-[var(--color-text-primary)]">
                  Maria T.
                </span>
                <span className="text-[var(--color-text-secondary)]">
                  Birmingham Resident, Helped in 2023
                </span>
              </cite>
            </footer>
          </blockquote>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/success-stories"
              className="btn btn-primary"
            >
              Read More Stories
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/annual-reports"
              className="btn btn-secondary"
            >
              View Our Reports
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
