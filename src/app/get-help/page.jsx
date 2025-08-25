import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer'
import ContactForm from '/src/components/ContactForm'
import { Phone, Mail, Heart, HelpingHand, Clock, Shield, Users, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Get Help | The Ladder Birmingham Crisis Intervention',
  description: 'Apply for barrier removal assistance from The Ladder. Crisis intervention, emergency help, and individual support services for Birmingham, Alabama residents.',
  keywords: [
    'Birmingham Alabama emergency help',
    'crisis intervention Birmingham',
    'barrier removal assistance',
    'individual assistance Birmingham',
    'emergency assistance application',
    'Birmingham nonprofit help',
    'crisis support Birmingham AL',
    'emergency barrier assistance',
    'individual crisis intervention',
    'Birmingham emergency services',
    'barrier assistance application',
    'The Ladder get help',
    'Birmingham crisis help',
    'nonprofit assistance Birmingham'
  ],
  openGraph: {
    title: 'Get Help | The Ladder Birmingham Crisis Intervention',
    description: 'Apply for barrier removal assistance and crisis intervention services in Birmingham, Alabama.',
    url: 'https://www.the-ladder.org/get-help',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Ladder'
  },
  alternates: {
    canonical: 'https://www.the-ladder.org/get-help'
  }
}

export default function GetHelpPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 bg-gradient-to-b from-background-dark to-surface-900">
        
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-tiltwarp font-bold text-text-primary mb-6">
                Get the <span className="text-primary-400">Help</span> You Need
              </h1>
              <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Facing a barrier that's preventing your success? The Ladder connects Birmingham residents 
                with the resources they need to overcome challenges and achieve their goals.
              </p>
            </div>

            {/* Emergency Notice */}
            <div className="mb-16 max-w-4xl mx-auto">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Phone className="w-8 h-8 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      Need Immediate Help?
                    </h3>
                    <p className="text-text-secondary mb-4">
                      If you're experiencing a crisis or emergency situation, call our support line immediately.
                    </p>
                    <a 
                      href="tel:+12055221162"
                      className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call (205) 522-1162
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Can Help Section */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                How We Can Help
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                We specialize in identifying and removing individual barriers through our network of partner organizations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Crisis Intervention */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <HelpingHand className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Crisis Intervention</h3>
                <p className="text-text-secondary">
                  Immediate support for emergency situations, connecting you with resources for urgent needs.
                </p>
              </div>

              {/* Barrier Assessment */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Barrier Assessment</h3>
                <p className="text-text-secondary">
                  Professional evaluation to identify specific obstacles preventing your success and progress.
                </p>
              </div>

              {/* Resource Connection */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Resource Connection</h3>
                <p className="text-text-secondary">
                  Direct referrals to partner organizations that can provide the specific assistance you need.
                </p>
              </div>

              {/* Follow-up Support */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Follow-up Support</h3>
                <p className="text-text-secondary">
                  Ongoing check-ins to ensure you're getting the help you need and achieving your goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Barriers Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Common Barriers We Help Address
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                These are some of the most frequent challenges our community members face
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Housing */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <h3 className="text-xl font-semibold text-text-primary mb-3">Housing & Utilities</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Rental assistance and eviction prevention</li>
                  <li>• Utility shut-off notices</li>
                  <li>• Homelessness and transitional housing</li>
                  <li>• Housing repairs and safety issues</li>
                </ul>
              </div>

              {/* Employment */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <h3 className="text-xl font-semibold text-text-primary mb-3">Employment & Income</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Job search and placement assistance</li>
                  <li>• Skills training and certification</li>
                  <li>• Transportation to work</li>
                  <li>• Benefits navigation (SNAP, TANF, etc.)</li>
                </ul>
              </div>

              {/* Healthcare */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <h3 className="text-xl font-semibold text-text-primary mb-3">Healthcare & Mental Health</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Medical bill assistance</li>
                  <li>• Prescription medication costs</li>
                  <li>• Mental health counseling</li>
                  <li>• Substance abuse treatment</li>
                </ul>
              </div>

              {/* Legal */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <h3 className="text-xl font-semibold text-text-primary mb-3">Legal & Financial</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Debt management and bankruptcy</li>
                  <li>• Legal representation needs</li>
                  <li>• Immigration and documentation</li>
                  <li>• Tax preparation and issues</li>
                </ul>
              </div>

              {/* Education */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <h3 className="text-xl font-semibold text-text-primary mb-3">Education & Childcare</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Childcare and after-school programs</li>
                  <li>• Educational support and tutoring</li>
                  <li>• GED and adult education</li>
                  <li>• College and vocational training</li>
                </ul>
              </div>

              {/* Family */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <h3 className="text-xl font-semibold text-text-primary mb-3">Family & Personal</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Domestic violence and safety</li>
                  <li>• Family crisis intervention</li>
                  <li>• Elder care and disability support</li>
                  <li>• Personal crisis and trauma</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Process Steps */}
              <div>
                <h2 className="text-3xl font-tiltwarp font-bold text-text-primary mb-8">
                  Our Application Process
                </h2>

                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-2">Initial Contact</h3>
                      <p className="text-text-secondary">
                        Call, email, or complete our assistance application form to describe your situation and needs.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-2">Assessment & Planning</h3>
                      <p className="text-text-secondary">
                        We'll schedule a confidential conversation to understand your barriers and develop an action plan.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-2">Resource Connection</h3>
                      <p className="text-text-secondary">
                        We connect you with partner organizations and resources that can provide the specific help you need.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-2">Follow-up Support</h3>
                      <p className="text-text-secondary">
                        We check in regularly to ensure you're receiving help and achieving your goals.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Important Information */}
                <div className="mt-12 space-y-6">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Confidential & Free</h4>
                      <p className="text-text-secondary text-sm">
                        All our services are completely free and confidential. We protect your privacy and personal information.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Response Time</h4>
                      <p className="text-text-secondary text-sm">
                        We respond to all assistance requests within 24 hours during business days. Emergency situations receive immediate attention.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">No Judgment</h4>
                      <p className="text-text-secondary text-sm">
                        We believe everyone deserves help overcoming barriers. Our approach is supportive, respectful, and focused on solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Application Form */}
              <div>
                <div className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8">
                  <h2 className="text-3xl font-tiltwarp font-bold text-text-primary mb-6">
                    Apply for Assistance
                  </h2>
                  <p className="text-lg text-text-secondary mb-8">
                    Complete this form to get started. We'll contact you within 24 hours to discuss how we can help.
                  </p>

                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Contact Methods */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-tiltwarp font-bold text-text-primary mb-4">
                Other Ways to Get Help
              </h2>
              <p className="text-xl text-text-secondary">
                Choose the contact method that's most comfortable for you
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Phone */}
              <div className="flex items-start gap-4 p-6 bg-surface-800/50 rounded-xl border border-primary-500/20">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Call Our Support Line</h3>
                  <p className="text-text-secondary mb-3">
                    Speak directly with our team about your situation and immediate needs.
                  </p>
                  <a 
                    href="tel:+12055221162"
                    className="text-lg font-semibold text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    (205) 522-1162
                  </a>
                  <p className="text-sm text-text-secondary mt-2">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Emergency situations: Leave voicemail for priority response
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 bg-surface-800/50 rounded-xl border border-primary-500/20">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Email Us</h3>
                  <p className="text-text-secondary mb-3">
                    Send detailed information about your situation and we'll respond within 24 hours.
                  </p>
                  <a 
                    href="mailto:help@the-ladder.org"
                    className="text-lg font-semibold text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    help@the-ladder.org
                  </a>
                  <p className="text-sm text-text-secondary mt-2">
                    Include your name, phone number, and a brief description of how we can help.
                  </p>
                </div>
              </div>
            </div>

            {/* Referrals */}
            <div className="mt-12 text-center">
              <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-tiltwarp font-bold text-text-primary mb-4">
                  Referring Someone Else?
                </h3>
                <p className="text-lg text-text-secondary mb-6">
                  If you know someone who could benefit from our services, you can refer them using the same process. 
                  We'll reach out to them directly and provide the same confidential, respectful assistance.
                </p>
                <p className="text-sm text-text-secondary">
                  <strong className="text-text-primary">Note:</strong> Please ensure the person knows you're making a referral 
                  and is open to receiving contact from us.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  )
}