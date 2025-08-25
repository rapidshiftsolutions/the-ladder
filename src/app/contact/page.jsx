import GlassNavigation from '/src/components/GlassNavigation'
import Footer from '/src/components/sitewide-footer'
import ContactForm from '/src/components/ContactForm.jsx'
import RecaptchaDebugger from '/src/components/RecaptchaDebugger.jsx'
import { Phone, Mail, MapPin, Clock, MessageCircle, Heart, HelpingHand } from 'lucide-react'

export const metadata = {
  title: 'Contact The Ladder | Birmingham Crisis Intervention & Assistance',
  description: 'Contact The Ladder for crisis intervention, emergency assistance applications, and barrier removal support in Birmingham, Alabama. Apply for help or make referrals.',
  keywords: [
    'Birmingham Alabama nonprofit contact',
    'crisis intervention Birmingham phone',
    'emergency assistance Birmingham contact',
    'The Ladder Birmingham phone number',
    'Birmingham barrier assistance application',
    'nonprofit help Birmingham AL contact',
    'crisis support Birmingham Alabama',
    'individual assistance Birmingham',
    'emergency help Birmingham contact',
    'Birmingham nonprofit crisis services',
    'barrier removal assistance contact',
    'The Ladder crisis intervention',
    'Birmingham emergency assistance phone',
    'nonprofit partnership Birmingham contact'
  ],
  openGraph: {
    title: 'Contact The Ladder | Birmingham Crisis Intervention & Assistance',
    description: 'Apply for crisis intervention and barrier removal assistance in Birmingham, Alabama. Contact The Ladder nonprofit for emergency help and support services.',
    url: 'https://www.the-ladder.org/contact',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Ladder'
  },
  alternates: {
    canonical: 'https://www.the-ladder.org/contact'
  }
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <RecaptchaDebugger />
      <GlassNavigation />
      <div className="flex-1 bg-gradient-to-b from-background-dark to-surface-900">
        
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-tiltwarp font-bold text-text-primary mb-6">
                Contact <span className="text-primary-400">The Ladder</span>
              </h1>
              <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Need help overcoming a barrier? Apply for assistance, make a referral, or contact us 
                about our crisis intervention and barrier removal services in Birmingham.
              </p>
            </div>

          </div>
        </section>

        {/* Contact Methods Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-tiltwarp font-bold text-text-primary mb-6">
                    Get Help Today
                  </h2>
                  <p className="text-lg text-text-secondary mb-8">
                    Whether you need emergency assistance, want to make a referral, or have questions 
                    about our services, we're here to help. Choose the contact method that works best for you.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">

                  {/* Email */}
                  <div className="flex items-start gap-4 p-6 bg-surface-800 rounded-xl border border-primary-500/20">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text-primary mb-2">Email Us</h3>
                      <p className="text-text-secondary mb-3">
                        Send assistance applications, make referrals, or ask questions about our services
                      </p>
                      <a 
                        href="mailto:help@the-ladder.org"
                        className="text-lg font-semibold text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        help@the-ladder.org
                      </a>
                    </div>
                  </div>

                  {/* Crisis Hotline */}
                  <div className="flex items-start gap-4 p-6 bg-surface-800 rounded-xl border border-primary-500/20">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text-primary mb-2">Crisis Support Line</h3>
                      <p className="text-text-secondary mb-3">
                        For immediate crisis intervention and emergency barrier assistance
                      </p>
                      <a 
                        href="tel:+12055221162"
                        className="text-lg font-semibold text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        (205) 522-1162
                      </a>
                      <p className="text-sm text-text-secondary mt-2">
                        Available during business hours - leave a message for after-hours response
                      </p>
                    </div>
                  </div>

                  {/* Mailing Address */}
                  <div className="flex items-start gap-4 p-6 bg-surface-800 rounded-xl border border-primary-500/20">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text-primary mb-2">Mailing Address</h3>
                      <p className="text-text-secondary mb-3">
                        Serving Birmingham and surrounding communities
                      </p>
                      <div className="space-y-1">
                        <p className="text-text-primary font-medium">The Ladder</p>
                        <p className="text-text-primary font-medium">P.O. Box [TBD]</p>
                        <p className="text-text-primary font-medium">Birmingham, AL 35233</p>
                        <p className="text-sm text-text-secondary mt-2">
                          501(c)(3) Tax-Exempt Organization • EIN: 47-2123160
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4 p-6 bg-surface-800 rounded-xl border border-primary-500/20">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-text-primary mb-2">Support Hours</h3>
                      <p className="text-text-secondary mb-3">
                        Available for crisis intervention, assistance applications, and general inquiries
                      </p>
                      <div className="space-y-1 text-text-primary">
                        <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 5:00 PM</p>
                        <p><span className="font-medium">Saturday:</span> By appointment</p>
                        <p><span className="font-medium">Sunday:</span> Emergency referrals only</p>
                        <p className="text-sm text-text-secondary mt-2">
                          Crisis situations: Leave voicemail for priority response
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Placeholder */}
              <div id="contact-form" className="space-y-8">
                <div>
                  <h2 className="text-3xl font-tiltwarp font-bold text-text-primary mb-6">
                    Apply for Assistance
                  </h2>
                  <p className="text-lg text-text-secondary mb-8">
                    Complete the form below to apply for barrier removal assistance, make a referral, 
                    or ask questions about our services. We'll respond within 24 hours.
                  </p>
                </div>

                {/* Contact Form */}
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Service Process Section */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                How Our Assistance Process Works
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Simple, confidential process to connect individuals with the barrier removal help they need
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">1. Reach Out</h3>
                <p className="text-text-secondary">
                  Contact us about your barrier, apply for assistance, or refer someone who needs help
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">2. Assessment</h3>
                <p className="text-text-secondary">
                  We work with you to understand your specific barrier and connect with partner organizations
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HelpingHand className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-4">3. Support</h3>
                <p className="text-text-secondary">
                  Receive targeted assistance to remove your barrier and get back on track toward your goals
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
                Ready to Overcome Your <span className="text-primary-400">Barrier?</span>
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Get the individual assistance you need to remove barriers and achieve your goals. 
                Our partner network is here to help Birmingham residents succeed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact-form"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Apply for Help
                </a>
                <a 
                  href="/donate"
                  className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300 text-lg"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Make a Donation
                </a>
              </div>
              
              <div className="mt-8 p-4 bg-surface-800/30 rounded-lg border border-primary-500/10">
                <p className="text-sm text-text-secondary text-center">
                  <strong className="text-text-primary">Crisis Situation?</strong> Call our support line at 
                  <a href="tel:+12055221162" className="text-primary-400 hover:text-primary-300 font-medium">(205) 522-1162</a> 
                  for immediate assistance or leave a message for priority response.
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