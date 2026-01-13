import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import { Handshake, CheckCircle, ArrowRight, Building2, Users, Heart } from 'lucide-react'

export const metadata = {
  title: 'Partner Organizations | Nonprofit Collaboration',
  description: 'The Ladder partners with Birmingham nonprofits to fill gaps in services. Learn about our collaborative approach and how to become a referral partner.',
  openGraph: {
    title: 'Partner Organizations | The Ladder Birmingham',
    description: 'Partner with The Ladder to help your clients overcome barriers outside your scope.',
    url: 'https://www.the-ladder.org/partners',
    type: 'website'
  }
}

export default function PartnersPage() {
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
                Partnership Network
              </h1>
              <p className="text-xl text-white/90">
                We work alongside Birmingham&apos;s nonprofits to fill gaps in services 
                and ensure individuals get the complete support they need.
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Model */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 
                    className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-6"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Partners, Not Competitors
                  </h2>
                  <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                    The Ladder doesn&apos;t duplicate services—we complement them. When your 
                    clients face barriers outside your organization&apos;s scope, we step in 
                    to address those specific obstacles.
                  </p>
                  <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                    Our partnership model ensures clients maintain their relationship 
                    with your organization while receiving the additional support they 
                    need to succeed.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[var(--color-text-primary)]">Warm Referrals</strong>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          Seamless handoff with shared context
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[var(--color-text-primary)]">Rapid Response</strong>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          24-hour response to partner referrals
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[var(--color-text-primary)]">Outcome Tracking</strong>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          Shared success reporting and follow-up
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <h3 
                    className="text-xl font-bold text-[var(--color-text-primary)] mb-6"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    How Partnership Works
                  </h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">
                          Identify the Barrier
                        </h4>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          Your team identifies a client barrier outside your scope
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">
                          Make a Referral
                        </h4>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          Contact The Ladder with client information and barrier details
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">
                          We Address the Barrier
                        </h4>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          Our team works with the individual to remove the obstacle
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">
                          Client Continues With You
                        </h4>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          Individual returns to your program ready to succeed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Why Partner With The Ladder?
              </h2>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                  Improve Client Outcomes
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Help your clients overcome barriers that would otherwise derail their progress
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                  Focus on Your Mission
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Stay focused on your core services while we handle specific barrier removal
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                  Collaborative Approach
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  No competition, just collaboration to serve our community better
                </p>
              </div>
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
              Become a Referral Partner
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our network of Birmingham nonprofits working together to 
              ensure no one falls through the cracks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-lg bg-white text-[var(--color-primary)] hover:bg-gray-100">
                Contact Us About Partnership
              </Link>
              <Link href="/corporate-partnerships" className="btn btn-lg bg-white/10 text-white border-2 border-white/30 hover:bg-white/20">
                Corporate Partnerships
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
