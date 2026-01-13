import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import { FileText, ExternalLink, Shield, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Financial Transparency | The Ladder',
  description: 'The Ladder\'s financial documents, 990 filings, and transparency reports. 501(c)(3) nonprofit EIN: 82-0737087.',
  openGraph: {
    title: 'Financial Transparency | The Ladder Birmingham',
    url: 'https://www.the-ladder.org/financials',
    type: 'website'
  }
}

export default function FinancialsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="bg-[var(--color-primary)] py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h1 
                className="text-3xl lg:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Financial Transparency
              </h1>
              <p className="text-white/90">
                We believe in complete transparency with our donors and community. 
                Access our financial documents and learn how your contributions are used.
              </p>
            </div>
          </div>
        </section>

        {/* Organization Info */}
        <section className="py-8 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-sm text-[var(--color-text-secondary)] mb-1">Organization</div>
                    <div className="font-semibold text-[var(--color-text-primary)]">The Ladder</div>
                  </div>
                  <div>
                    <div className="text-sm text-[var(--color-text-secondary)] mb-1">Status</div>
                    <div className="font-semibold text-[var(--color-text-primary)]">501(c)(3)</div>
                  </div>
                  <div>
                    <div className="text-sm text-[var(--color-text-secondary)] mb-1">EIN</div>
                    <div className="font-semibold text-[var(--color-text-primary)]">82-0737087</div>
                  </div>
                  <div>
                    <div className="text-sm text-[var(--color-text-secondary)] mb-1">Founded</div>
                    <div className="font-semibold text-[var(--color-text-primary)]">2021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Overview */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 
                  className="text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  How Funds Are Used
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-[var(--color-secondary)]/10 rounded-xl p-6 border border-[var(--color-secondary)]/20 text-center">
                  <div 
                    className="text-4xl font-bold text-[var(--color-secondary)] mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    100%
                  </div>
                  <div className="font-semibold text-[var(--color-text-primary)] mb-2">
                    Direct Services
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Of donations go directly to barrier removal assistance
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                  <div 
                    className="text-4xl font-bold text-[var(--color-primary)] mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    0%
                  </div>
                  <div className="font-semibold text-[var(--color-text-primary)] mb-2">
                    Administrative Overhead
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Volunteer-based operations model
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                  <div 
                    className="text-4xl font-bold text-[var(--color-primary)] mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    $350
                  </div>
                  <div className="font-semibold text-[var(--color-text-primary)] mb-2">
                    Avg. Investment
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Per individual barrier removal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 
                  className="text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Public Documents
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
                        IRS Form 990
                      </h3>
                      <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                        Annual information return filed with the IRS
                      </p>
                      <a 
                        href="https://www.propublica.org/nonprofits" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--color-primary)] font-medium hover:underline flex items-center gap-1"
                      >
                        View on ProPublica <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
                        IRS Determination Letter
                      </h3>
                      <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                        501(c)(3) tax-exempt status confirmation
                      </p>
                      <span className="text-sm text-[var(--color-text-secondary)]">
                        Available upon request
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third Party Verification */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 
                  className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Third-Party Verification
                </h2>
                <p className="text-[var(--color-text-secondary)]">
                  Verify our nonprofit status through independent sources.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <a 
                  href="https://www.charitynavigator.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center hover:border-[var(--color-primary)] transition-colors"
                >
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                    Charity Navigator
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Independent nonprofit ratings
                  </p>
                </a>
                
                <a 
                  href="https://www.propublica.org/nonprofits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center hover:border-[var(--color-primary)] transition-colors"
                >
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                    ProPublica Nonprofit Explorer
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    990 filings and financial data
                  </p>
                </a>
                
                <a 
                  href="https://www.guidestar.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center hover:border-[var(--color-primary)] transition-colors"
                >
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                    GuideStar / Candid
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Nonprofit information database
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 
                className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Questions About Our Finances?
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-6">
                We&apos;re committed to transparency. Contact us with any questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
                <Link href="/board-governance" className="btn btn-secondary">
                  View Governance
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
