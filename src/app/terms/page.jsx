import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import { FileText, Mail } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service | The Ladder',
  description: 'Terms of service for The Ladder website and services.',
  openGraph: {
    title: 'Terms of Service | The Ladder Birmingham',
    url: 'https://www.the-ladder.org/terms',
    type: 'website'
  }
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="bg-[var(--color-primary)] py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h1 
                className="text-3xl lg:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Terms of Service
              </h1>
              <p className="text-white/80">
                Last updated: January 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                
                <div>
                  <h2 
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Acceptance of Terms
                  </h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    By accessing and using The Ladder&apos;s website and services, you accept and agree 
                    to be bound by these Terms of Service. If you do not agree to these terms, 
                    please do not use our website or services.
                  </p>
                </div>

                <div>
                  <h2 
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Services
                  </h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    The Ladder is a 501(c)(3) nonprofit organization that provides barrier removal 
                    assistance to individuals in the Birmingham, Alabama area. Our services are 
                    provided free of charge to those who qualify based on our assessment process.
                  </p>
                </div>

                <div>
                  <h2 
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    No Guarantee of Services
                  </h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    Submitting an application for assistance does not guarantee that services will 
                    be provided. All applications are subject to review and approval based on 
                    available resources, eligibility requirements, and our assessment process.
                  </p>
                </div>

                <div>
                  <h2 
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Donations
                  </h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    All donations to The Ladder are tax-deductible to the extent allowed by law. 
                    Donations are final and non-refundable. Monthly recurring donations may be 
                    cancelled at any time by contacting us.
                  </p>
                </div>

                <div>
                  <h2 
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Intellectual Property
                  </h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    All content on this website, including text, graphics, logos, and images, is 
                    the property of The Ladder and is protected by applicable copyright and 
                    trademark laws.
                  </p>
                </div>

                <div>
                  <h2 
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Limitation of Liability
                  </h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    The Ladder shall not be liable for any indirect, incidental, special, 
                    consequential, or punitive damages arising from your use of our website 
                    or services.
                  </p>
                </div>

                <div>
                  <h2 
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Changes to Terms
                  </h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    We reserve the right to modify these Terms of Service at any time. Changes 
                    will be effective immediately upon posting to this website.
                  </p>
                </div>

                <div>
                  <h2 
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Contact
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <p className="font-semibold text-[var(--color-text-primary)]">The Ladder</p>
                    <a 
                      href="mailto:info@the-ladder.org" 
                      className="flex items-center gap-2 text-[var(--color-primary)] hover:underline mt-2"
                    >
                      <Mail className="w-4 h-4" />
                      info@the-ladder.org
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
