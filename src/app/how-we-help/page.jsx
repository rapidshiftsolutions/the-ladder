import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer'
import { Users, Heart, Target, CheckCircle, ArrowRight, Phone, Mail, HelpingHand, Shield } from 'lucide-react'

export const metadata = {
  title: 'How We Help | The Ladder Birmingham Barrier Removal Services',
  description: 'Learn about The Ladder\'s barrier removal process, partnership model, and crisis intervention services for Birmingham residents. Individual assistance through nonprofit partnerships.',
  keywords: [
    'barrier removal process Birmingham',
    'crisis intervention model',
    'nonprofit partnership Birmingham',
    'individual assistance process',
    'Birmingham barrier assistance',
    'how barrier removal works',
    'crisis intervention services',
    'nonprofit collaboration Birmingham',
    'individual crisis support',
    'barrier assessment process',
    'partner organization referrals',
    'The Ladder service model',
    'Birmingham nonprofit services',
    'emergency assistance process'
  ],
  openGraph: {
    title: 'How We Help | The Ladder Birmingham Barrier Removal Services',
    description: 'Discover how The Ladder removes barriers through individual assessment, partner referrals, and crisis intervention in Birmingham.',
    url: 'https://www.the-ladder.org/how-we-help',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Ladder'
  },
  alternates: {
    canonical: 'https://www.the-ladder.org/how-we-help'
  }
}

export default function HowWeHelpPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 bg-gradient-to-b from-background-dark to-surface-900">
        
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-tiltwarp font-bold text-text-primary mb-6">
                How We <span className="text-primary-400">Remove Barriers</span>
              </h1>
              <p className="text-xl sm:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                The Ladder specializes in identifying individual barriers and connecting people with the right 
                resources to overcome challenges and achieve their goals. Here's how our proven process works.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">1-on-1</div>
                <div className="text-text-secondary">Individual Assessment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">24hr</div>
                <div className="text-text-secondary">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">Free</div>
                <div className="text-text-secondary">All Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">100%</div>
                <div className="text-text-secondary">Confidential</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Our 4-Step Process
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Every person's situation is unique. Our process is designed to understand your specific barriers 
                and connect you with the most effective resources.
              </p>
            </div>

            <div className="space-y-16">
              {/* Step 1 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      1
                    </div>
                    <h3 className="text-2xl font-tiltwarp font-bold text-text-primary">
                      Initial Contact & Intake
                    </h3>
                  </div>
                  <div className="space-y-4 text-text-secondary">
                    <p>
                      When you reach out to us—whether by phone, email, or through our website—we begin with 
                      a confidential conversation about your situation. This isn't about qualifying you for 
                      services; it's about understanding what you're facing.
                    </p>
                    <div className="bg-surface-800/50 rounded-lg p-4">
                      <h4 className="font-semibold text-text-primary mb-2">What We'll Ask:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• What barrier is preventing your progress?</li>
                        <li>• What have you already tried to resolve it?</li>
                        <li>• What would success look like for you?</li>
                        <li>• Are there any immediate safety concerns?</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="lg:order-first">
                  <div className="bg-primary-500/10 rounded-2xl p-8 border border-primary-500/20">
                    <div className="flex items-center justify-center w-24 h-24 bg-primary-500/20 rounded-full mx-auto mb-6">
                      <Phone className="w-12 h-12 text-primary-400" />
                    </div>
                    <div className="text-center">
                      <h4 className="text-xl font-semibold text-text-primary mb-2">Crisis Line Available</h4>
                      <p className="text-text-secondary mb-4">
                        For immediate assistance, call our support line at (205) 522-1162
                      </p>
                      <div className="text-sm text-text-secondary">
                        Monday - Friday: 9 AM - 5 PM<br />
                        Emergency voicemail: 24/7 priority response
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-primary-500/10 rounded-2xl p-8 border border-primary-500/20">
                    <div className="flex items-center justify-center w-24 h-24 bg-primary-500/20 rounded-full mx-auto mb-6">
                      <Target className="w-12 h-12 text-primary-400" />
                    </div>
                    <div className="text-center">
                      <h4 className="text-xl font-semibold text-text-primary mb-2">Comprehensive Assessment</h4>
                      <p className="text-text-secondary mb-4">
                        We identify root causes, not just symptoms, to create lasting solutions.
                      </p>
                      <div className="text-sm text-text-secondary">
                        Typically completed within 48 hours of initial contact
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      2
                    </div>
                    <h3 className="text-2xl font-tiltwarp font-bold text-text-primary">
                      Barrier Assessment & Planning
                    </h3>
                  </div>
                  <div className="space-y-4 text-text-secondary">
                    <p>
                      We schedule a deeper conversation—in person, by phone, or video call—to fully understand 
                      your situation. This isn't a one-size-fits-all approach. We look at your unique circumstances, 
                      strengths, and goals to create a personalized action plan.
                    </p>
                    <div className="bg-surface-800/50 rounded-lg p-4">
                      <h4 className="font-semibold text-text-primary mb-2">Our Assessment Covers:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Immediate safety and crisis intervention needs</li>
                        <li>• Financial barriers and benefit eligibility</li>
                        <li>• Housing stability and utility concerns</li>
                        <li>• Employment and income opportunities</li>
                        <li>• Healthcare and mental health needs</li>
                        <li>• Legal issues and documentation needs</li>
                        <li>• Family dynamics and support systems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      3
                    </div>
                    <h3 className="text-2xl font-tiltwarp font-bold text-text-primary">
                      Resource Connection & Referrals
                    </h3>
                  </div>
                  <div className="space-y-4 text-text-secondary">
                    <p>
                      Based on our assessment, we connect you directly with partner organizations that can provide 
                      the specific assistance you need. We don't just give you a phone number—we make warm introductions 
                      and help coordinate your care.
                    </p>
                    <div className="bg-surface-800/50 rounded-lg p-4">
                      <h4 className="font-semibold text-text-primary mb-2">Partner Network Includes:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• United Way of Central Alabama</li>
                        <li>• Community Foundation of Greater Birmingham</li>
                        <li>• Local churches and faith-based organizations</li>
                        <li>• Government assistance programs</li>
                        <li>• Healthcare providers and mental health services</li>
                        <li>• Legal aid organizations</li>
                        <li>• Employment and training programs</li>
                        <li>• Housing assistance organizations</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="lg:order-first">
                  <div className="bg-primary-500/10 rounded-2xl p-8 border border-primary-500/20">
                    <div className="flex items-center justify-center w-24 h-24 bg-primary-500/20 rounded-full mx-auto mb-6">
                      <Users className="w-12 h-12 text-primary-400" />
                    </div>
                    <div className="text-center">
                      <h4 className="text-xl font-semibold text-text-primary mb-2">Direct Partner Connections</h4>
                      <p className="text-text-secondary mb-4">
                        We make warm introductions to ensure you get the help you need quickly.
                      </p>
                      <div className="text-sm text-text-secondary">
                        Most referrals result in same-week appointments with partner organizations
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-primary-500/10 rounded-2xl p-8 border border-primary-500/20">
                    <div className="flex items-center justify-center w-24 h-24 bg-primary-500/20 rounded-full mx-auto mb-6">
                      <Heart className="w-12 h-12 text-primary-400" />
                    </div>
                    <div className="text-center">
                      <h4 className="text-xl font-semibold text-text-primary mb-2">Ongoing Support</h4>
                      <p className="text-text-secondary mb-4">
                        We don't disappear after making a referral. We stay connected to ensure success.
                      </p>
                      <div className="text-sm text-text-secondary">
                        Follow-up continues until barriers are successfully removed
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      4
                    </div>
                    <h3 className="text-2xl font-tiltwarp font-bold text-text-primary">
                      Follow-up & Success Tracking
                    </h3>
                  </div>
                  <div className="space-y-4 text-text-secondary">
                    <p>
                      We check in regularly to see how you're progressing with the resources we've connected you with. 
                      If something isn't working, we adjust the plan. If new barriers emerge, we address them. 
                      Our goal is your long-term success, not just a one-time referral.
                    </p>
                    <div className="bg-surface-800/50 rounded-lg p-4">
                      <h4 className="font-semibold text-text-primary mb-2">Follow-up Includes:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Check-ins at 1 week, 1 month, and 3 months</li>
                        <li>• Problem-solving if referrals aren't working</li>
                        <li>• Additional resource connections as needed</li>
                        <li>• Advocacy with partner organizations</li>
                        <li>• Success celebration and case closure</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Model */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Our Partnership Model
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                The Ladder doesn't duplicate existing services. Instead, we leverage Birmingham's existing 
                nonprofit ecosystem to maximize impact and eliminate service gaps.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Individual Focus */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Individual, Not Systemic</h3>
                <p className="text-text-secondary">
                  We focus on helping individuals overcome personal barriers rather than trying to fix 
                  systemic issues. This allows us to create immediate, measurable impact for each person we serve.
                </p>
              </div>

              {/* Coordination */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Coordination, Not Duplication</h3>
                <p className="text-text-secondary">
                  Rather than creating new programs, we connect people with existing resources more effectively. 
                  This eliminates the "wrong door" problem and reduces wait times for assistance.
                </p>
              </div>

              {/* Relationships */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Relationships, Not Referrals</h3>
                <p className="text-text-secondary">
                  We build genuine partnerships with other organizations, sharing clients seamlessly and 
                  working together to ensure each person gets comprehensive support.
                </p>
              </div>
            </div>

            {/* Partnership Benefits */}
            <div className="mt-16 bg-surface-800/30 rounded-2xl p-8">
              <h3 className="text-2xl font-tiltwarp font-bold text-text-primary mb-6 text-center">
                Why This Model Works
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-text-primary">For Individuals:</h4>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>Single point of contact for multiple services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>Faster access to appropriate resources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>Personalized support throughout the process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>Advocacy when systems don't work as intended</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-text-primary">For Partner Organizations:</h4>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>Pre-screened referrals that match their services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>Reduced intake burden and paperwork duplication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>Better outcomes through coordinated care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>Shared resources and knowledge across the network</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                What Makes The Ladder Different
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Our unique approach combines individual focus, deep community partnerships, and proven barrier removal methodology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Board Expertise */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Lived Experience Leadership</h3>
                <p className="text-text-secondary">
                  Our board members have overcome significant barriers themselves, bringing personal understanding 
                  to policy and program decisions.
                </p>
              </div>

              {/* Quick Response */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Rapid Response</h3>
                <p className="text-text-secondary">
                  While other organizations may have weeks-long waiting lists, we respond within 24 hours 
                  and connect you with help immediately.
                </p>
              </div>

              {/* No Wrong Door */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                  <HelpingHand className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">"No Wrong Door" Policy</h3>
                <p className="text-text-secondary">
                  Even if we can't directly help with your specific situation, we'll find someone who can. 
                  You'll never be turned away without resources.
                </p>
              </div>

              {/* Follow Through */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Follow-Through Guarantee</h3>
                <p className="text-text-secondary">
                  We don't just make referrals and disappear. We stay involved until your barriers are 
                  successfully removed and you're back on track.
                </p>
              </div>

              {/* Confidentiality */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Complete Confidentiality</h3>
                <p className="text-text-secondary">
                  Your information is protected at the highest level. We share only what's necessary 
                  for service provision and only with your explicit consent.
                </p>
              </div>

              {/* No Judgment */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Judgment-Free Environment</h3>
                <p className="text-text-secondary">
                  We believe everyone deserves help overcoming barriers, regardless of how they got there. 
                  Our focus is on solutions, not judgment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-primary-500/10 rounded-2xl border border-primary-500/20 p-8 lg:p-12">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Ready to Remove Your <span className="text-primary-400">Barrier?</span>
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Don't let barriers prevent you from achieving your goals. Our team is ready to help 
                you connect with the resources you need to move forward.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/get-help"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 text-lg"
                >
                  <HelpingHand className="w-5 h-5 mr-2" />
                  Apply for Help
                </a>
                <a 
                  href="tel:+12055221162"
                  className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (205) 522-1162
                </a>
              </div>

              <div className="text-sm text-text-secondary">
                <strong className="text-text-primary">All services are free and confidential.</strong> 
                We respond to all requests within 24 hours during business days.
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  )
}