import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer'
import { Users, Heart, Handshake, Target, CheckCircle, ArrowRight, Phone, Mail, Building2 } from 'lucide-react'

export const metadata = {
  title: 'Our Partners | The Ladder Birmingham Nonprofit Network',
  description: 'Meet The Ladder\'s partner organizations in Birmingham. United Way, Community Foundation, local nonprofits and service providers working together for barrier removal.',
  keywords: [
    'Birmingham nonprofit partners',
    'United Way Central Alabama',
    'Community Foundation Birmingham',
    'nonprofit partnerships Birmingham',
    'charitable organizations Birmingham',
    'crisis intervention partners',
    'barrier removal network',
    'Birmingham community resources',
    'nonprofit collaboration Alabama',
    'partner organizations Birmingham',
    'charitable partnership network',
    'The Ladder partners',
    'Birmingham nonprofit network',
    'community support partners'
  ],
  openGraph: {
    title: 'Our Partners | The Ladder Birmingham Nonprofit Network',
    description: 'Discover our network of trusted nonprofit partners serving Birmingham residents through barrier removal and crisis intervention.',
    url: 'https://www.the-ladder.org/partners',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Ladder',
    images: [
      {
        url: '/meta.png',
        width: 1200,
        height: 630,
        alt: 'The Ladder Partner Organizations',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.the-ladder.org/partners'
  }
}

export default function PartnersPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 bg-gradient-to-b from-background-dark to-surface-900">
        
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-tiltwarp font-bold text-text-primary mb-6">
                Our <span className="text-primary-400">Partner Network</span>
              </h1>
              <p className="text-xl sm:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                The Ladder's strength comes from our partnerships with Birmingham's existing nonprofit ecosystem. 
                Together, we create a seamless network of support for individuals facing barriers.
              </p>
            </div>

            {/* Partnership Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">25+</div>
                <div className="text-text-secondary">Partner Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">100%</div>
                <div className="text-text-secondary">Vetted Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">Same Week</div>
                <div className="text-text-secondary">Typical Referral Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">24/7</div>
                <div className="text-text-secondary">Emergency Network</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Philosophy */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Collaboration, Not Competition
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                We believe in leveraging existing resources rather than duplicating services. 
                Our partners provide the expertise; we provide the connections.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Warm Referrals */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Handshake className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Warm Referrals</h3>
                <p className="text-text-secondary">
                  We don't just give you a phone number. We make personal introductions and coordinate 
                  with partners to ensure you get immediate attention.
                </p>
              </div>

              {/* Shared Assessment */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Shared Assessment</h3>
                <p className="text-text-secondary">
                  Partners trust our intake process, reducing duplicate paperwork and getting you 
                  to appropriate services faster.
                </p>
              </div>

              {/* Coordinated Care */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Coordinated Care</h3>
                <p className="text-text-secondary">
                  We work with multiple partners simultaneously to address complex barriers 
                  that require various types of assistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Major Partners */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Our Major Partners
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                These established organizations form the backbone of our referral network
              </p>
            </div>

            <div className="space-y-12">
              {/* United Way */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mr-4">
                      <Heart className="w-6 h-6 text-primary-400" />
                    </div>
                    <h3 className="text-2xl font-tiltwarp font-bold text-text-primary">
                      United Way of Central Alabama
                    </h3>
                  </div>
                  <div className="space-y-4 text-text-secondary">
                    <p>
                      Our primary partner for emergency assistance, housing support, and utility help. 
                      United Way's established programs provide immediate relief while we work on 
                      long-term barrier removal.
                    </p>
                    <div className="bg-surface-800/50 rounded-lg p-4">
                      <h4 className="font-semibold text-text-primary mb-2">Services Through This Partnership:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Emergency rent and utility assistance</li>
                        <li>• Food security programs</li>
                        <li>• Transportation assistance</li>
                        <li>• Healthcare navigation</li>
                        <li>• Childcare referrals</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="lg:order-first">
                  <div className="bg-primary-500/10 rounded-2xl p-8 border border-primary-500/20">
                    <div className="text-center">
                      <Building2 className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-text-primary mb-2">Established 1924</h4>
                      <p className="text-text-secondary mb-4">
                        Nearly 100 years of serving Birmingham families through crisis and opportunity.
                      </p>
                      <a 
                        href="https://www.uwca.org" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Foundation */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-primary-500/10 rounded-2xl p-8 border border-primary-500/20">
                    <div className="text-center">
                      <Users className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-text-primary mb-2">Grant Making Leader</h4>
                      <p className="text-text-secondary mb-4">
                        Connecting donors with causes and funding innovative approaches to community challenges.
                      </p>
                      <a 
                        href="https://www.cfbham.org" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mr-4">
                      <Building2 className="w-6 h-6 text-primary-400" />
                    </div>
                    <h3 className="text-2xl font-tiltwarp font-bold text-text-primary">
                      Community Foundation of Greater Birmingham
                    </h3>
                  </div>
                  <div className="space-y-4 text-text-secondary">
                    <p>
                      A key partner for connecting individuals with specialized grant-funded programs 
                      and innovative assistance initiatives throughout the Birmingham metro area.
                    </p>
                    <div className="bg-surface-800/50 rounded-lg p-4">
                      <h4 className="font-semibold text-text-primary mb-2">Services Through This Partnership:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Specialized grant program access</li>
                        <li>• Educational assistance and scholarships</li>
                        <li>• Arts and culture programs</li>
                        <li>• Community development initiatives</li>
                        <li>• Nonprofit capacity building</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Categories */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Partner Service Categories
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Our network covers every type of barrier individuals commonly face
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Housing Partners */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Housing & Utilities</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• Birmingham Housing Authority</li>
                  <li>• Habitat for Humanity</li>
                  <li>• Emergency rental assistance programs</li>
                  <li>• Utility assistance organizations</li>
                  <li>• Homeless services providers</li>
                  <li>• Transitional housing programs</li>
                </ul>
              </div>

              {/* Healthcare Partners */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Healthcare & Mental Health</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• UAB Hospital System</li>
                  <li>• Jefferson County Health Department</li>
                  <li>• Community mental health providers</li>
                  <li>• Substance abuse treatment centers</li>
                  <li>• Prescription assistance programs</li>
                  <li>• Healthcare navigation services</li>
                </ul>
              </div>

              {/* Employment Partners */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Employment & Training</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• Alabama Department of Labor</li>
                  <li>• Birmingham Workforce Development</li>
                  <li>• Skills training programs</li>
                  <li>• Job placement services</li>
                  <li>• Career counseling organizations</li>
                  <li>• Small business development centers</li>
                </ul>
              </div>

              {/* Legal Partners */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Legal & Financial</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• Legal Aid of Alabama</li>
                  <li>• Birmingham Bar Association</li>
                  <li>• Credit counseling services</li>
                  <li>• Bankruptcy assistance</li>
                  <li>• Immigration legal services</li>
                  <li>• Tax preparation assistance</li>
                </ul>
              </div>

              {/* Family Partners */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Family & Children</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• Family counseling services</li>
                  <li>• Childcare assistance programs</li>
                  <li>• Domestic violence shelters</li>
                  <li>• Youth development organizations</li>
                  <li>• Educational support services</li>
                  <li>• Elder care providers</li>
                </ul>
              </div>

              {/* Faith Partners */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Faith-Based Partners</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• Local church assistance programs</li>
                  <li>• Interfaith community services</li>
                  <li>• Religious food pantries</li>
                  <li>• Faith-based counseling</li>
                  <li>• Spiritual support services</li>
                  <li>• Community outreach programs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Become a Partner Organization
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Join our network to receive qualified referrals and participate in coordinated care for Birmingham residents
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-tiltwarp font-bold text-text-primary mb-8">
                  Partnership Benefits
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Pre-Screened Referrals</h4>
                      <p className="text-text-secondary">
                        Receive clients who have been assessed for fit with your services, reducing intake burden.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Coordinated Care</h4>
                      <p className="text-text-secondary">
                        Collaborate with other organizations to address complex, multi-barrier situations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Shared Resources</h4>
                      <p className="text-text-secondary">
                        Access to network knowledge, best practices, and collaborative problem-solving.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Better Outcomes</h4>
                      <p className="text-text-secondary">
                        Higher success rates through comprehensive barrier removal approach.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-2xl font-tiltwarp font-bold text-text-primary mb-8">
                  Partnership Requirements
                </h3>

                <div className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Organizational Requirements:</h4>
                      <ul className="space-y-1 text-text-secondary text-sm">
                        <li>• 501(c)(3) status or government agency</li>
                        <li>• Established track record of service</li>
                        <li>• Professional staff and clear intake process</li>
                        <li>• Commitment to client confidentiality</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Partnership Commitments:</h4>
                      <ul className="space-y-1 text-text-secondary text-sm">
                        <li>• Respond to referrals within 48 hours</li>
                        <li>• Provide feedback on client progress</li>
                        <li>• Participate in quarterly partner meetings</li>
                        <li>• Share outcomes data for impact tracking</li>
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-surface-600">
                      <p className="text-sm text-text-secondary mb-4">
                        <strong className="text-text-primary">Ready to join our network?</strong> 
                        Contact us to discuss partnership opportunities.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a 
                          href="mailto:partnerships@the-ladder.org"
                          className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-black font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Email Us
                        </a>
                        <a 
                          href="tel:+12055221162"
                          className="inline-flex items-center justify-center px-6 py-3 border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-primary-500/10 transition-colors"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Call (205) 522-1162
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-primary-500/10 rounded-2xl border border-primary-500/20 p-8 lg:p-12">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Stronger Together
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Our partner network makes it possible to help every person who comes to us, 
                regardless of their specific barrier. Together, we're building a stronger Birmingham.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/get-help"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 text-lg"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Get Connected to Help
                </a>
                <a 
                  href="/donate"
                  className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300 text-lg"
                >
                  <Building2 className="w-5 h-5 mr-2" />
                  Support Our Network
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  )
}