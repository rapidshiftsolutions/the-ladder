import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import { Phone, Users, FileText, CheckCircle, Clock, Shield, Heart, ArrowRight, Handshake, Target, HelpingHand } from 'lucide-react'

export const metadata = {
  title: 'How We Help | Barrier Removal Services',
  description: 'Learn how The Ladder helps Birmingham residents overcome barriers through our proven 4-step process. Free, confidential crisis intervention and barrier removal services.',
  keywords: [
    'barrier removal process Birmingham',
    'crisis intervention model',
    'nonprofit partnership Birmingham',
    'individual assistance process',
    'Birmingham barrier assistance',
    'crisis intervention services'
  ],
  openGraph: {
    title: 'How We Help | The Ladder Birmingham',
    description: 'Discover how The Ladder removes barriers through individual assessment, partner referrals, and crisis intervention in Birmingham.',
    url: 'https://www.the-ladder.org/how-we-help',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.the-ladder.org/how-we-help'
  }
}

export default function HowWeHelpPage() {
  const steps = [
    {
      number: 1,
      icon: Phone,
      title: 'Reach Out',
      description: 'Contact us by phone, email, or through our website. We respond to all inquiries within 24 hours during business days.',
      details: [
        'Call (205) 522-1162',
        'Email info@the-ladder.org',
        'Submit an online request'
      ]
    },
    {
      number: 2,
      icon: Users,
      title: 'Personal Assessment',
      description: 'We schedule a confidential conversation to understand your unique situation, challenges, and goals.',
      details: [
        'One-on-one assessment',
        'Identify specific barriers',
        'Explore potential solutions'
      ]
    },
    {
      number: 3,
      icon: FileText,
      title: 'Action Plan',
      description: 'We develop a personalized plan and connect you with the appropriate resources and partner organizations.',
      details: [
        'Customized approach',
        'Partner referrals',
        'Clear next steps'
      ]
    },
    {
      number: 4,
      icon: CheckCircle,
      title: 'Barrier Removal',
      description: 'We provide direct assistance to remove your barrier and follow up to ensure lasting success.',
      details: [
        'Direct financial assistance',
        'Resource coordination',
        'Ongoing support'
      ]
    }
  ]

  const barrierTypes = [
    { icon: '🚗', title: 'Transportation', description: 'Car repairs, public transit costs, or temporary transportation needs' },
    { icon: '🏠', title: 'Housing', description: 'Deposits, documentation fees, or temporary housing assistance' },
    { icon: '💼', title: 'Employment', description: 'Work equipment, uniforms, licensing fees, or interview costs' },
    { icon: '📚', title: 'Education', description: 'Tuition gaps, materials, or certification expenses' },
    { icon: '⚕️', title: 'Healthcare', description: 'Medical appointments, prescriptions, or necessary equipment' },
    { icon: '📄', title: 'Legal/Documents', description: 'ID replacement, court fees, or legal document costs' }
  ]

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
                How We Help You Overcome Barriers
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Our proven process connects you with the right resources and provides 
                personalized support to remove the specific obstacles in your path.
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-8 text-white/80">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24hr</div>
                  <div className="text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">Free</div>
                  <div className="text-sm">All Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-sm">Confidential</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 
                className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Our 4-Step Process
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
                Every situation is unique. Our process is designed to understand your 
                specific needs and provide targeted support.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.number}
                      </div>
                      <div>
                        <h3 
                          className="text-xl font-bold text-[var(--color-text-primary)] mb-1"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          {step.title}
                        </h3>
                        <p className="text-[var(--color-text-secondary)]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 ml-16">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                          <CheckCircle className="w-4 h-4 text-[var(--color-secondary)]" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Types of Barriers */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Barriers We Address
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
                We help with specific, individual obstacles that fall outside traditional 
                nonprofit service categories.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {barrierTypes.map((barrier, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="text-3xl mb-3">{barrier.icon}</div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                    {barrier.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {barrier.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                What Makes Us Different
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                  Individual Focus
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  We address your specific barrier, not a general category. Every person&apos;s 
                  situation receives personalized attention.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                  Rapid Response
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  We respond within 24 hours and typically resolve barriers within 30 days. 
                  No lengthy waiting lists.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                  Partner Network
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  We work alongside Birmingham&apos;s nonprofits to fill gaps and ensure 
                  you get comprehensive support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-[var(--color-primary)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 
              className="text-3xl lg:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Ready to Overcome Your Barrier?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don&apos;t let obstacles prevent you from moving forward. 
              Our team is ready to help you take the next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-help" className="btn btn-lg bg-white text-[var(--color-primary)] hover:bg-gray-100">
                <HelpingHand className="w-5 h-5 mr-2" />
                Apply for Help
              </Link>
              <a href="tel:+12055221162" className="btn btn-lg bg-white/10 text-white border-2 border-white/30 hover:bg-white/20">
                <Phone className="w-5 h-5 mr-2" />
                Call (205) 522-1162
              </a>
            </div>
            <p className="text-white/60 text-sm mt-6">
              All services are free and completely confidential.
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
