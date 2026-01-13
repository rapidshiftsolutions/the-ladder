import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import ContactForm from '/src/components/ContactForm'
import { Phone, Mail, Heart, HelpingHand, Clock, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Get Help | Apply for Barrier Removal Assistance',
  description: 'Apply for free, confidential barrier removal assistance from The Ladder. Crisis intervention and individual support services for Birmingham, Alabama residents.',
  keywords: [
    'Birmingham Alabama emergency help',
    'crisis intervention Birmingham',
    'barrier removal assistance',
    'individual assistance Birmingham',
    'emergency assistance application',
    'Birmingham nonprofit help'
  ],
  openGraph: {
    title: 'Get Help | Apply for Assistance | The Ladder Birmingham',
    description: 'Apply for free barrier removal assistance and crisis intervention services in Birmingham, Alabama.',
    url: 'https://www.the-ladder.org/get-help',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.the-ladder.org/get-help'
  }
}

export default function GetHelpPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="bg-[var(--color-primary)] py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 
                className="text-4xl lg:text-5xl font-bold text-white mb-6 text-center max-w-3xl mx-auto"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Get the Help You Need
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Facing a barrier that&apos;s preventing your progress? The Ladder provides 
                free, confidential assistance to help you overcome obstacles and move forward.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  100% Confidential
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Free Services
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  24hr Response
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Notice */}
        <section className="bg-red-50 border-y border-red-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-lg font-semibold text-red-900 mb-1">
                    Need Immediate Help?
                  </h2>
                  <p className="text-red-700 text-sm">
                    If you&apos;re experiencing a crisis or emergency, call our support line now.
                  </p>
                </div>
                <div className="flex-shrink-0">
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
        </section>

        {/* Main Content - Form + Info */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-12">
                
                {/* Application Form */}
                <div className="lg:col-span-3">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                    <h2 
                      className="text-2xl font-bold text-[var(--color-text-primary)] mb-2"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Apply for Assistance
                    </h2>
                    <p className="text-[var(--color-text-secondary)] mb-8">
                      Complete this form to tell us about your situation. We&apos;ll contact you within 24 hours.
                    </p>
                    
                    <ContactForm />
                  </div>
                </div>

                {/* Sidebar Info */}
                <div className="lg:col-span-2 space-y-8">
                  {/* What We Help With */}
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 
                      className="text-lg font-bold text-[var(--color-text-primary)] mb-4"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Barriers We Address
                    </h3>
                    <ul className="space-y-3 text-[var(--color-text-secondary)]">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                        <span>Transportation (car repairs, temporary transit)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                        <span>Housing (deposits, documentation fees)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                        <span>Employment (work equipment, licensing)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                        <span>Education (tuition gaps, materials)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                        <span>Healthcare (appointments, prescriptions)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                        <span>Legal/Documents (ID replacement, fees)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Our Promise */}
                  <div className="bg-[var(--color-primary)]/5 rounded-xl border border-[var(--color-primary)]/20 p-6">
                    <h3 
                      className="text-lg font-bold text-[var(--color-text-primary)] mb-4"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Our Promise to You
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[var(--color-text-primary)]">Confidential</strong>
                          <p className="text-sm text-[var(--color-text-secondary)]">
                            Your information is protected and never shared without consent.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[var(--color-text-primary)]">Fast Response</strong>
                          <p className="text-sm text-[var(--color-text-secondary)]">
                            We respond to all requests within 24 hours.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Heart className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[var(--color-text-primary)]">Judgment-Free</strong>
                          <p className="text-sm text-[var(--color-text-secondary)]">
                            We focus on solutions, not circumstances.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Alternative Contact */}
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 
                      className="text-lg font-bold text-[var(--color-text-primary)] mb-4"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Other Ways to Reach Us
                    </h3>
                    <div className="space-y-4">
                      <a 
                        href="tel:+12055221162"
                        className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        <span>(205) 522-1162</span>
                      </a>
                      <a 
                        href="mailto:help@the-ladder.org"
                        className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                        <span>help@the-ladder.org</span>
                      </a>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] mt-4">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Emergency voicemails receive priority response
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold text-[var(--color-text-primary)] mb-4 text-center"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                What Happens After You Apply
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto text-center">
                Our simple process is designed to get you the help you need quickly.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: 1, title: 'We Review', desc: 'Your application is reviewed within 24 hours' },
                  { step: 2, title: 'We Connect', desc: 'We call to learn more about your situation' },
                  { step: 3, title: 'We Plan', desc: 'Together we create a personalized action plan' },
                  { step: 4, title: 'We Help', desc: 'We provide assistance to remove your barrier' }
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partner Referral Note */}
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Users className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4" />
              <h3 
                className="text-xl font-bold text-[var(--color-text-primary)] mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Referred by a Partner Organization?
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-6">
                If you were referred by one of our partner nonprofits, please mention their 
                name in your application. This helps us coordinate your support more effectively.
              </p>
              <a 
                href="/partners" 
                className="inline-flex items-center text-[var(--color-primary)] font-semibold hover:underline"
              >
                View Our Partner Organizations
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
