import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import { Accessibility, CheckCircle, Mail, Phone } from 'lucide-react'

export const metadata = {
  title: 'Accessibility Statement | The Ladder',
  description: 'The Ladder\'s commitment to digital accessibility and WCAG compliance.',
  openGraph: {
    title: 'Accessibility Statement | The Ladder Birmingham',
    url: 'https://www.the-ladder.org/accessibility',
    type: 'website'
  }
}

export default function AccessibilityPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="bg-[var(--color-primary)] py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Accessibility className="w-6 h-6 text-white" />
              </div>
              <h1 
                className="text-3xl lg:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Accessibility Statement
              </h1>
              <p className="text-white/80">
                Our commitment to making our website accessible to everyone
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
                    Our Commitment
                  </h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    The Ladder is committed to ensuring digital accessibility for people with 
                    disabilities. We continually improve the user experience for everyone and 
                    apply the relevant accessibility standards to ensure we provide equal access 
                    to all users.
                  </p>
                </div>

                <div>
                  <h2 
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Accessibility Standards
                  </h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 
                    Level AA standards. Our accessibility efforts include:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-secondary)]">
                        Semantic HTML structure for screen reader compatibility
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-secondary)]">
                        Skip navigation links for keyboard users
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-secondary)]">
                        Alt text for images
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-secondary)]">
                        Sufficient color contrast ratios
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-secondary)]">
                        Keyboard-accessible navigation and forms
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-secondary)]">
                        Clear and consistent focus indicators
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-secondary)]">
                        Reduced motion options for users with vestibular disorders
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Alternative Access
                  </h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    If you are having difficulty accessing any content or functionality on our 
                    website, we are happy to assist you through alternative means. You can reach 
                    us by phone or email, and we will provide the information you need.
                  </p>
                </div>

                <div>
                  <h2 
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Feedback
                  </h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    We welcome your feedback on the accessibility of our website. If you 
                    encounter any accessibility barriers, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 space-y-3">
                    <a 
                      href="mailto:accessibility@the-ladder.org" 
                      className="flex items-center gap-2 text-[var(--color-primary)] hover:underline"
                    >
                      <Mail className="w-4 h-4" />
                      accessibility@the-ladder.org
                    </a>
                    <a 
                      href="tel:+12053061690" 
                      className="flex items-center gap-2 text-[var(--color-primary)] hover:underline"
                    >
                      <Phone className="w-4 h-4" />
                      (205) 306-1690
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
