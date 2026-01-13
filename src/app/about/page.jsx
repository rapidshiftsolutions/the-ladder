import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import { CheckCircle, Users, Target, Clock, Heart, ArrowRight, Shield, Award } from 'lucide-react'

export const metadata = {
  title: 'About Us | Our Mission and Story',
  description: 'Learn about The Ladder, a Birmingham 501(c)(3) nonprofit founded in 2021. We help individuals overcome barriers through nonprofit partnerships and personalized support.',
  keywords: [
    'about The Ladder Birmingham',
    'Birmingham nonprofit organization',
    'crisis intervention Birmingham AL',
    'barrier removal assistance',
    '501c3 Birmingham Alabama'
  ],
  openGraph: {
    title: 'About Us | The Ladder Birmingham',
    description: 'The Ladder is a Birmingham nonprofit helping individuals overcome specific barriers preventing their success.',
    url: 'https://www.the-ladder.org/about',
    type: 'website'
  }
}

export default function AboutPage() {
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
                About The Ladder
              </h1>
              <p className="text-xl text-white/90 mb-8">
                We help individuals one by one overcome specific barriers that are 
                preventing them from moving forward in life.
              </p>
              <div className="inline-flex items-center gap-4 bg-white/10 rounded-lg px-6 py-3 text-white/80 text-sm">
                <span>501(c)(3) Nonprofit</span>
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <span>Founded 2021</span>
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <span>Birmingham, Alabama</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 
                    className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-6"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Our Mission
                  </h2>
                  <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                    The Ladder partners with Birmingham nonprofits to help individuals overcome 
                    specific, personal barriers preventing their success. We focus on people 
                    over problems, addressing individual obstacles rather than broad systemic issues.
                  </p>
                  <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                    When someone encounters a barrier that falls outside a nonprofit&apos;s scope, 
                    we step in to bridge the gap. Our personalized approach ensures each 
                    person receives the specific support they need.
                  </p>
                  
                  <div className="bg-[var(--color-primary)]/5 rounded-xl p-6 border border-[var(--color-primary)]/20">
                    <h3 
                      className="text-lg font-semibold text-[var(--color-text-primary)] mb-2"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Why &quot;The Ladder&quot;?
                    </h3>
                    <p className="text-[var(--color-text-secondary)]">
                      We help individuals climb over specific barriers—the &quot;missing rungs&quot; 
                      that keep them from success. When a nonprofit can&apos;t meet a specific need, 
                      we provide the support to help them reach the next level.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <h3 
                    className="text-xl font-bold text-[var(--color-text-primary)] mb-6"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Our Core Values
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[var(--color-text-primary)]">People Over Problems</strong>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          We address individual barriers, not categories
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[var(--color-text-primary)]">Partnership Model</strong>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          We work alongside nonprofits, not in competition
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[var(--color-text-primary)]">Individual Focus</strong>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          Each case is unique and personally addressed
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[var(--color-text-primary)]">Rapid Response</strong>
                        <p className="text-sm text-[var(--color-text-secondary)]">
                          We address immediate needs quickly
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4 text-center"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                What Makes Us Different
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto text-center">
                Our unique approach fills gaps in Birmingham&apos;s nonprofit ecosystem.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">Gap-Filling</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  We address needs that fall between traditional services
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">Collaborative</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  We partner with, never compete against, other nonprofits
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">Rapid</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  24-hour response, typically resolved within 30 days
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">Personal</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Every person receives individualized attention
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Preview */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 
                className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Our Leadership
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] mb-8">
                Our board members bring diverse experience and a shared commitment 
                to helping individuals overcome barriers.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-[var(--color-primary)]">BC</span>
                  </div>
                  <h3 className="font-semibold text-[var(--color-text-primary)]">Board Chairman</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Healthcare industry executive with extensive nonprofit experience
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-[var(--color-primary)]">BT</span>
                  </div>
                  <h3 className="font-semibold text-[var(--color-text-primary)]">Board Treasurer</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Business owner with expertise in operations and finance
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-[var(--color-primary)]">BS</span>
                  </div>
                  <h3 className="font-semibold text-[var(--color-text-primary)]">Board Secretary</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Certified Peer Support Specialist with lived experience
                  </p>
                </div>
              </div>
              
              <Link href="/leadership-team" className="btn btn-secondary">
                Meet Our Full Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 
                  className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Transparency & Accountability
                </h2>
                <p className="text-lg text-[var(--color-text-secondary)]">
                  As a young organization, we&apos;re committed to earning trust through 
                  transparency and measurable impact.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-8 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-[var(--color-primary)]" />
                    <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                      Financial Transparency
                    </h3>
                  </div>
                  <ul className="space-y-3 text-[var(--color-text-secondary)]">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[var(--color-secondary)]" />
                      Annual Form 990 filings available
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[var(--color-secondary)]" />
                      Listed on Charity Navigator
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[var(--color-secondary)]" />
                      ProPublica Nonprofit Explorer profile
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[var(--color-secondary)]" />
                      Quarterly impact reports for donors
                    </li>
                  </ul>
                  <Link href="/financials" className="inline-flex items-center mt-4 text-[var(--color-primary)] font-medium hover:underline">
                    View Financial Documents
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
                
                <div className="bg-white rounded-xl p-8 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 text-[var(--color-primary)]" />
                    <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                      Our Commitment
                    </h3>
                  </div>
                  <ul className="space-y-3 text-[var(--color-text-secondary)]">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[var(--color-secondary)]" />
                      100% of donations to direct assistance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[var(--color-secondary)]" />
                      Volunteer-based operations model
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[var(--color-secondary)]" />
                      Regular board oversight
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[var(--color-secondary)]" />
                      Continuous impact measurement
                    </li>
                  </ul>
                  <Link href="/board-governance" className="inline-flex items-center mt-4 text-[var(--color-primary)] font-medium hover:underline">
                    Learn About Governance
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
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
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you need assistance, want to support our mission, or represent 
              a partner organization, we&apos;d love to connect with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-help" className="btn btn-lg bg-white text-[var(--color-primary)] hover:bg-gray-100">
                Apply for Help
              </Link>
              <Link href="/donate" className="btn btn-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)]">
                Support Our Mission
              </Link>
              <Link href="/partners" className="btn btn-lg bg-white/10 text-white border-2 border-white/30 hover:bg-white/20">
                Become a Partner
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
