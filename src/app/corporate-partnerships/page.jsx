import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import { Building2, CheckCircle, ArrowRight, Heart, Users, Award, Target } from 'lucide-react'

export const metadata = {
  title: 'Corporate Partnerships | Community Impact Partnerships',
  description: 'Partner with The Ladder to make a meaningful impact in Birmingham. Corporate sponsorship, matching gifts, and employee giving programs.',
  openGraph: {
    title: 'Corporate Partnerships | The Ladder Birmingham',
    description: 'Partner with us to create meaningful community impact in Birmingham.',
    url: 'https://www.the-ladder.org/corporate-partnerships',
    type: 'website'
  }
}

const partnershipLevels = [
  {
    name: 'Community Partner',
    amount: '$1,000 - $4,999',
    benefits: [
      'Logo on website',
      'Social media recognition',
      'Quarterly impact reports',
      'Annual appreciation event invitation'
    ]
  },
  {
    name: 'Champion Partner',
    amount: '$5,000 - $9,999',
    benefits: [
      'All Community Partner benefits',
      'Featured logo placement',
      'Monthly impact updates',
      'Employee volunteer opportunities',
      'Recognition in annual report'
    ]
  },
  {
    name: 'Leadership Partner',
    amount: '$10,000+',
    benefits: [
      'All Champion Partner benefits',
      'Premier logo placement',
      'Custom impact reporting',
      'Named giving opportunity',
      'Executive board meeting invitation',
      'Custom employee engagement program'
    ]
  }
]

export default function CorporatePartnershipsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="bg-[var(--color-primary)] py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Corporate Partnerships
              </h1>
              <p className="text-xl text-white/90">
                Partner with The Ladder to create meaningful, measurable impact 
                in Birmingham while demonstrating your commitment to community.
              </p>
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 
                    className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-6"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Invest in Your Community
                  </h2>
                  <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                    Corporate partnerships with The Ladder offer a unique opportunity 
                    to see direct, measurable impact. Every dollar you invest goes 
                    directly to removing barriers for Birmingham residents.
                  </p>
                  <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                    We provide transparent reporting on exactly how your investment 
                    changes lives, giving you meaningful stories to share with your 
                    stakeholders and employees.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-primary)]">
                        100% of donations to direct assistance
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-primary)]">
                        Transparent impact reporting
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-primary)]">
                        Employee engagement opportunities
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-primary)]">
                        Tax-deductible contributions
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                    <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Target className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div 
                      className="text-2xl font-bold text-[var(--color-primary)] mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      95%
                    </div>
                    <div className="text-sm text-[var(--color-text-secondary)]">Success Rate</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                    <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div 
                      className="text-2xl font-bold text-[var(--color-primary)] mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      500+
                    </div>
                    <div className="text-sm text-[var(--color-text-secondary)]">Lives Changed</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                    <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div 
                      className="text-2xl font-bold text-[var(--color-primary)] mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      100%
                    </div>
                    <div className="text-sm text-[var(--color-text-secondary)]">To Direct Aid</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                    <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div 
                      className="text-2xl font-bold text-[var(--color-primary)] mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      501(c)(3)
                    </div>
                    <div className="text-sm text-[var(--color-text-secondary)]">Tax Exempt</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Levels */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4 text-center"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Partnership Levels
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-[var(--color-text-secondary)] text-center">
                  Choose the level that fits your company&apos;s giving goals.
                </p>
              </div>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
              {partnershipLevels.map((level, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl p-8 border-2 ${
                    index === 2 ? 'border-[var(--color-primary)]' : 'border-gray-200'
                  }`}
                >
                  {index === 2 && (
                    <div className="bg-[var(--color-primary)] text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 
                    className="text-xl font-bold text-[var(--color-text-primary)] mb-2"
                  >
                    {level.name}
                  </h3>
                  <div className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                    {level.amount}
                  </div>
                  <ul className="space-y-3">
                    {level.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-[var(--color-text-secondary)]">
                Custom partnership packages available for larger commitments.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-[var(--color-primary)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 
              className="text-3xl lg:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Let&apos;s Discuss Your Partnership
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We&apos;d love to explore how a partnership with The Ladder can 
              help you achieve your community impact goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-lg bg-white text-[var(--color-primary)] hover:bg-gray-100">
                Contact Us
              </Link>
              <Link href="/donate" className="btn btn-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)]">
                Donate Now
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
