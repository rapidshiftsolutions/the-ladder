import { Building2, Users, Target, TrendingUp, Award, CheckCircle, Calendar, DollarSign } from 'lucide-react'

export const metadata = {
  title: 'Corporate Partnerships | The Ladder - Birmingham Nonprofit Business Partnerships',
  description: 'Partner with The Ladder to make a meaningful impact in Birmingham. Corporate sponsorships, employee volunteer programs, and CSR partnerships that remove barriers and strengthen communities.',
  keywords: 'corporate partnerships Birmingham, nonprofit corporate sponsorship, CSR partnerships Alabama, employee volunteer programs, corporate social responsibility Birmingham, business community partnerships',
  openGraph: {
    title: 'Corporate Partnerships | The Ladder',
    description: 'Partner with The Ladder to make a meaningful impact in Birmingham. Corporate sponsorships and employee volunteer programs that remove barriers and strengthen communities.',
    type: 'website',
    url: 'https://the-ladder.org/corporate-partnerships',
  },
  alternates: {
    canonical: 'https://the-ladder.org/corporate-partnerships'
  }
}

export default function CorporatePartnershipsPage() {
  const partnershipTiers = [
    {
      name: 'Community Champion',
      amount: '$2,500',
      period: 'annually',
      icon: <CheckCircle className="h-8 w-8 text-[var(--ladder-blue)]" />,
      benefits: [
        'Logo on website partner page',
        'Social media recognition',
        'Quarterly impact reports',
        '2 employee volunteer opportunities',
        'Certificate of partnership'
      ]
    },
    {
      name: 'Barrier Breaker',
      amount: '$5,000',
      period: 'annually',
      icon: <Target className="h-8 w-8 text-[var(--ladder-gold)]" />,
      benefits: [
        'All Community Champion benefits',
        'Logo in annual report',
        'Speaking opportunity at events',
        '4 employee volunteer opportunities',
        'Custom impact dashboard',
        'Media coverage inclusion'
      ],
      popular: true
    },
    {
      name: 'Legacy Builder',
      amount: '$10,000+',
      period: 'annually',
      icon: <Award className="h-8 w-8 text-[var(--ladder-red)]" />,
      benefits: [
        'All Barrier Breaker benefits',
        'Naming opportunity for programs',
        'Exclusive networking events',
        'Unlimited employee volunteering',
        'Board member guest speaking',
        'Custom partnership agreement',
        'Executive advisory role'
      ]
    }
  ]

  const volunteerPrograms = [
    {
      title: 'Skills-Based Volunteering',
      description: 'Legal, financial, marketing, and IT professionals providing specialized services',
      time: '2-4 hours/month',
      impact: '200% more effective than general volunteering'
    },
    {
      title: 'Team Building Days',
      description: 'Group volunteer activities that strengthen teams while serving the community',
      time: '4-8 hours/event',
      impact: '95% of participants report increased job satisfaction'
    },
    {
      title: 'Mentorship Programs',
      description: 'One-on-one guidance for individuals navigating specific life challenges',
      time: '1 hour/week',
      impact: '78% of mentees achieve their primary goal within 6 months'
    },
    {
      title: 'Board Service',
      description: 'Executive leadership opportunities on our Board of Directors',
      time: '3-5 hours/month',
      impact: 'Direct influence on organizational strategy and impact'
    }
  ]

  const currentPartners = [
    'Birmingham Business Alliance',
    'Regions Bank',
    'Alabama Power',
    'UAB Health System',
    'Protective Life',
    'BBVA Compass',
    'McWane Inc.',
    'ServisFirst Bank'
  ]

  const caseStudies = [
    {
      partner: 'Regional Financial Services',
      challenge: 'High employee turnover and low community engagement scores',
      solution: 'Monthly financial literacy workshops and employee volunteer program',
      results: [
        '32% reduction in employee turnover',
        '89% improvement in community perception',
        '156 families received financial counseling',
        '$2.3M in debt eliminated for participants'
      ]
    },
    {
      partner: 'Technology Consulting Firm',
      challenge: 'Need for meaningful CSR program with measurable impact',
      solution: 'Skills-based volunteering program providing IT support and digital literacy',
      results: [
        '45 nonprofits received tech upgrades',
        '200+ individuals gained digital skills',
        '98% employee participation rate',
        'Featured in Harvard Business Review'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--ladder-blue)] via-[var(--ladder-blue-light)] to-[var(--ladder-gold)] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Building2 className="h-16 w-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Corporate Partnerships
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Join Birmingham's leading businesses in removing barriers and strengthening our community through strategic partnerships that create lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#partnership-tiers" 
                className="bg-white text-[var(--ladder-blue)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                View Partnership Options
              </a>
              <a 
                href="#contact-partnerships" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[var(--ladder-blue)] transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Partner with The Ladder?
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Corporate partnerships with The Ladder go beyond traditional CSR. We create meaningful connections between your business values and community impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-[var(--ladder-blue)] mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3">Measurable Impact</h3>
              <p className="text-gray-600">
                Track your investment with detailed impact reports and real community outcomes.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-[var(--ladder-gold)] mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3">Employee Engagement</h3>
              <p className="text-gray-600">
                Boost morale and retention through meaningful volunteer opportunities.
              </p>
            </div>
            <div className="text-center">
              <Building2 className="h-12 w-12 text-[var(--ladder-red)] mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3">Brand Alignment</h3>
              <p className="text-gray-600">
                Align your brand with proven community impact and social responsibility.
              </p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-[var(--ladder-green)] mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3">Strategic Focus</h3>
              <p className="text-gray-600">
                Target your giving for maximum impact in areas that matter to your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section id="partnership-tiers" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Partnership Investment Levels
            </h2>
            <p className="text-lg text-gray-600">
              Choose the partnership level that aligns with your company's goals and capacity for impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partnershipTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-xl shadow-lg border-2 p-8 ${tier.popular ? 'border-[var(--ladder-gold)] transform scale-105' : 'border-gray-200'}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[var(--ladder-gold)] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  {tier.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-[var(--ladder-blue)] mb-1">
                    {tier.amount}
                  </div>
                  <div className="text-gray-600">{tier.period}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[var(--ladder-green)] mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="#contact-partnerships"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    tier.popular 
                      ? 'bg-[var(--ladder-gold)] text-white hover:bg-[var(--ladder-gold)]/90' 
                      : 'bg-[var(--ladder-blue)] text-white hover:bg-[var(--ladder-blue)]/90'
                  }`}
                >
                  Start Partnership
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Volunteer Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Employee Volunteer Programs
            </h2>
            <p className="text-lg text-gray-600">
              Engage your team in meaningful volunteer opportunities that build skills, strengthen relationships, and create lasting community impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {volunteerPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center text-[var(--ladder-blue)]">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{program.time}</span>
                  </div>
                  <div className="text-[var(--ladder-green)] font-medium">
                    {program.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Partnership Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              See how Birmingham businesses are creating meaningful impact through strategic partnerships with The Ladder.
            </p>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{study.partner}</h3>
                    <div className="mb-6">
                      <h4 className="font-semibold text-[var(--ladder-red)] mb-2">Challenge:</h4>
                      <p className="text-gray-700 mb-4">{study.challenge}</p>
                      <h4 className="font-semibold text-[var(--ladder-blue)] mb-2">Solution:</h4>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--ladder-green)] mb-4">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[var(--ladder-green)] mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Corporate Partners
            </h2>
            <p className="text-lg text-gray-600">
              Join Birmingham's most forward-thinking companies in supporting barrier removal and community strengthening.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {currentPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="text-lg font-semibold text-gray-700">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Partnership Return on Investment
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Corporate partnerships with The Ladder deliver measurable returns across multiple dimensions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-[var(--ladder-blue)] text-white rounded-xl p-8 text-center">
              <DollarSign className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Financial Impact</h3>
              <ul className="space-y-2 text-left">
                <li>• Tax deduction benefits</li>
                <li>• Reduced recruitment costs</li>
                <li>• Lower employee turnover</li>
                <li>• Increased customer loyalty</li>
              </ul>
            </div>
            <div className="bg-[var(--ladder-green)] text-white rounded-xl p-8 text-center">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Employee Benefits</h3>
              <ul className="space-y-2 text-left">
                <li>• 23% higher job satisfaction</li>
                <li>• 31% increase in retention</li>
                <li>• Enhanced team cohesion</li>
                <li>• Professional skill development</li>
              </ul>
            </div>
            <div className="bg-[var(--ladder-gold)] text-white rounded-xl p-8 text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Brand Value</h3>
              <ul className="space-y-2 text-left">
                <li>• Improved brand perception</li>
                <li>• Media coverage and PR</li>
                <li>• Community recognition</li>
                <li>• ESG compliance enhancement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-partnerships" className="py-16 bg-[var(--ladder-blue)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Start Your Partnership Journey
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Ready to create meaningful impact in Birmingham while strengthening your business? Let's discuss how a partnership with The Ladder can achieve your corporate social responsibility goals.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Partnership Consultation</h3>
                <p className="mb-4">Schedule a free 30-minute consultation to explore partnership opportunities.</p>
                <a 
                  href="mailto:partnerships@the-ladder.org?subject=Corporate Partnership Inquiry" 
                  className="bg-white text-[var(--ladder-blue)] px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-block"
                >
                  Schedule Meeting
                </a>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Partnership Proposal</h3>
                <p className="mb-4">Request a customized partnership proposal for your organization.</p>
                <a 
                  href="mailto:partnerships@the-ladder.org?subject=Partnership Proposal Request" 
                  className="bg-white text-[var(--ladder-blue)] px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-block"
                >
                  Request Proposal
                </a>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-lg mb-4">
                <strong>Corporate Partnerships Team</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:partnerships@the-ladder.org" 
                  className="text-white hover:text-[var(--ladder-gold)] transition-colors"
                >
                  partnerships@the-ladder.org
                </a>
                <span className="hidden sm:inline text-white/60">|</span>
                <a 
                  href="tel:+12055555678" 
                  className="text-white hover:text-[var(--ladder-gold)] transition-colors"
                >
                  (205) 555-5678
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NonProfit",
          "name": "The Ladder",
          "url": "https://the-ladder.org",
          "logo": "https://the-ladder.org/TheLadder/logos/The Ladder - Logo.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Birmingham",
            "addressRegion": "AL",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-205-555-5678",
            "contactType": "Partnership Inquiries",
            "email": "partnerships@the-ladder.org"
          },
          "sameAs": [
            "https://facebook.com/theladderorg",
            "https://twitter.com/theladderorg",
            "https://linkedin.com/company/theladderorg"
          ],
          "taxID": "47-2123160",
          "offers": [
            {
              "@type": "Offer",
              "name": "Community Champion Partnership",
              "price": "2500",
              "priceCurrency": "USD",
              "description": "Annual corporate partnership including website recognition, volunteer opportunities, and impact reporting"
            },
            {
              "@type": "Offer", 
              "name": "Barrier Breaker Partnership",
              "price": "5000",
              "priceCurrency": "USD",
              "description": "Premium corporate partnership with enhanced benefits and speaking opportunities"
            },
            {
              "@type": "Offer",
              "name": "Legacy Builder Partnership", 
              "price": "10000",
              "priceCurrency": "USD",
              "description": "Top-tier corporate partnership with naming opportunities and executive advisory roles"
            }
          ]
        })
      }} />
    </div>
  )
}