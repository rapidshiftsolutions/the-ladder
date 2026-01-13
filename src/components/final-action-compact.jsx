'use client'

import Link from 'next/link'
import { ArrowRight, Heart, HelpingHand, Building2, Phone, Mail } from 'lucide-react'

export default function FinalActionCompact() {
  const actionPaths = [
    {
      icon: HelpingHand,
      title: 'Need Assistance?',
      description: 'Facing a barrier that\'s preventing your progress? We offer free, confidential support.',
      cta: 'Apply for Help',
      href: '/get-help',
      variant: 'primary',
      features: ['24-hour response time', 'Completely confidential', 'No cost to you']
    },
    {
      icon: Heart,
      title: 'Support Our Mission',
      description: 'Your donation directly helps individuals overcome barriers and achieve stability.',
      cta: 'Make a Donation',
      href: '/donate',
      variant: 'accent',
      features: ['100% tax-deductible', 'Funds direct assistance', 'Create immediate impact']
    },
    {
      icon: Building2,
      title: 'Partner Organizations',
      description: 'Refer clients with barriers outside your scope. Together, we can fill the gaps.',
      cta: 'Partner with Us',
      href: '/partners',
      variant: 'secondary',
      features: ['Collaborative approach', 'Warm referral process', 'Shared success tracking']
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Take the Next Step
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Whether you need help, want to give, or represent a partner organization, 
            there&apos;s a meaningful way for you to be part of our mission.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {actionPaths.map((action, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200 flex flex-col h-full"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                action.variant === 'primary' ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]' :
                action.variant === 'accent' ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]' :
                'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]'
              }`}>
                <action.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 
                className="text-xl font-bold text-[var(--color-text-primary)] mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {action.title}
              </h3>
              
              <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                {action.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8 flex-grow">
                {action.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-[var(--color-text-secondary)]">
                    <div className={`w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0 ${
                      action.variant === 'primary' ? 'bg-[var(--color-primary)]' :
                      action.variant === 'accent' ? 'bg-[var(--color-accent)]' :
                      'bg-[var(--color-secondary)]'
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href={action.href}
                className={`btn w-full justify-center ${
                  action.variant === 'primary' ? 'btn-primary' :
                  action.variant === 'accent' ? 'btn-accent' :
                  'btn-secondary'
                }`}
              >
                {action.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-[var(--color-primary)] rounded-xl p-8 lg:p-12 text-center text-white">
          <h3 
            className="text-2xl lg:text-3xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Have Questions? We&apos;re Here to Help
          </h3>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Our team is available to answer your questions about our services, 
            donation process, or partnership opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a 
              href="tel:+12055221162" 
              className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
            >
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-medium">(205) 522-1162</span>
            </a>
            <a 
              href="mailto:info@the-ladder.org" 
              className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
            >
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium">info@the-ladder.org</span>
            </a>
          </div>
          
          <div className="text-white/60 text-sm">
            <p>The Ladder • Birmingham, Alabama</p>
            <p className="mt-1">501(c)(3) Nonprofit Organization • EIN: 47-2123160</p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-12">
          <p 
            className="text-xl lg:text-2xl text-[var(--color-text-secondary)] italic max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            &quot;Every barrier can be overcome. Every person deserves the opportunity to succeed.&quot;
          </p>
        </div>
      </div>
    </section>
  )
}
