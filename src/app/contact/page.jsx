import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import ContactForm from '/src/components/ContactForm.jsx'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Heart, HelpingHand, ArrowRight, Building2 } from 'lucide-react'

export const metadata = {
  title: 'Contact Us | The Ladder Birmingham',
  description: 'Contact The Ladder for crisis intervention, emergency assistance, or partnership inquiries. Serving Birmingham, Alabama with free, confidential support services.',
  keywords: [
    'Birmingham Alabama nonprofit contact',
    'crisis intervention Birmingham phone',
    'emergency assistance Birmingham contact',
    'The Ladder Birmingham phone number'
  ],
  openGraph: {
    title: 'Contact Us | The Ladder Birmingham',
    description: 'Contact The Ladder nonprofit for crisis intervention and barrier removal assistance in Birmingham, Alabama.',
    url: 'https://www.the-ladder.org/contact',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.the-ladder.org/contact'
  }
}

export default function ContactPage() {
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
                Get in Touch
              </h1>
              <p className="text-xl text-white/90">
                Whether you need help, want to partner with us, or have questions about 
                our services, we&apos;re here to assist you.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a 
                href="tel:+12055221162"
                className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-[var(--color-primary)] hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-text-primary)]">(205) 522-1162</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">Call us directly</div>
                </div>
              </a>
              
              <a 
                href="mailto:info@the-ladder.org"
                className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-[var(--color-primary)] hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-text-primary)]">info@the-ladder.org</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">Email us</div>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-text-primary)]">Mon-Fri 9am-5pm</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">Business hours</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-12">
                
                {/* Contact Form */}
                <div className="lg:col-span-3">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                    <h2 
                      className="text-2xl font-bold text-[var(--color-text-primary)] mb-2"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Send Us a Message
                    </h2>
                    <p className="text-[var(--color-text-secondary)] mb-8">
                      Fill out the form below and we&apos;ll respond within 24 hours during business days.
                    </p>
                    
                    <ContactForm />
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Contact Reasons */}
                  <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                    <h3 
                      className="text-lg font-bold text-[var(--color-text-primary)] mb-4"
                    >
                      How Can We Help?
                    </h3>
                    <div className="space-y-4">
                      <Link 
                        href="/get-help"
                        className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-[var(--color-primary)] transition-colors group"
                      >
                        <HelpingHand className="w-5 h-5 text-[var(--color-primary)]" />
                        <div className="flex-1">
                          <div className="font-medium text-[var(--color-text-primary)]">Apply for Assistance</div>
                          <div className="text-xs text-[var(--color-text-secondary)]">Need help with a barrier?</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)]" />
                      </Link>
                      
                      <Link 
                        href="/donate"
                        className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-[var(--color-primary)] transition-colors group"
                      >
                        <Heart className="w-5 h-5 text-[var(--color-accent)]" />
                        <div className="flex-1">
                          <div className="font-medium text-[var(--color-text-primary)]">Make a Donation</div>
                          <div className="text-xs text-[var(--color-text-secondary)]">Support our mission</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)]" />
                      </Link>
                      
                      <Link 
                        href="/partners"
                        className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-[var(--color-primary)] transition-colors group"
                      >
                        <Building2 className="w-5 h-5 text-[var(--color-secondary)]" />
                        <div className="flex-1">
                          <div className="font-medium text-[var(--color-text-primary)]">Partner With Us</div>
                          <div className="text-xs text-[var(--color-text-secondary)]">Nonprofit collaboration</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)]" />
                      </Link>
                    </div>
                  </div>

                  {/* Organization Info */}
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 
                      className="text-lg font-bold text-[var(--color-text-primary)] mb-4"
                    >
                      About The Ladder
                    </h3>
                    <div className="space-y-4 text-sm">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium text-[var(--color-text-primary)]">Birmingham, Alabama</div>
                          <div className="text-[var(--color-text-secondary)]">Serving the Birmingham metro area</div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="text-[var(--color-text-secondary)]">
                          <strong className="text-[var(--color-text-primary)]">501(c)(3) Nonprofit</strong>
                        </div>
                        <div className="text-[var(--color-text-secondary)]">EIN: 82-0737087</div>
                        <div className="text-[var(--color-text-secondary)]">Founded 2021</div>
                      </div>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="bg-[var(--color-primary)]/5 rounded-xl border border-[var(--color-primary)]/20 p-6">
                    <h3 
                      className="text-lg font-bold text-[var(--color-text-primary)] mb-2"
                    >
                      Response Time
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      We respond to all inquiries within 24 hours during business days. 
                      For urgent situations, please call our phone line directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map / Location Section */}
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 
                className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Serving Birmingham and Surrounding Communities
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-6">
                The Ladder provides barrier removal assistance to individuals throughout 
                the Birmingham metropolitan area, working with partner organizations 
                across Jefferson County and beyond.
              </p>
              <Link 
                href="/birmingham-resources"
                className="inline-flex items-center text-[var(--color-primary)] font-semibold hover:underline"
              >
                View Birmingham Area Resources
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
