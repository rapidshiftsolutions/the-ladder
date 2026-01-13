import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import { FileText, Download, ArrowRight, Calendar, Users, Heart, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Annual Reports | Impact & Financials',
  description: 'View The Ladder\'s annual reports showing our impact, financials, and community outcomes. Transparent reporting on how your donations are used.',
  openGraph: {
    title: 'Annual Reports | The Ladder Birmingham',
    description: 'Our annual impact and financial reports.',
    url: 'https://www.the-ladder.org/annual-reports',
    type: 'website'
  }
}

export default function AnnualReportsPage() {
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
                Annual Reports
              </h1>
              <p className="text-xl text-white/90">
                Transparent reporting on our impact, finances, and community outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Summary */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div 
                  className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  500+
                </div>
                <div className="text-sm text-[var(--color-text-secondary)]">Individuals Helped</div>
              </div>
              <div className="text-center">
                <div 
                  className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  95%
                </div>
                <div className="text-sm text-[var(--color-text-secondary)]">Success Rate</div>
              </div>
              <div className="text-center">
                <div 
                  className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  100%
                </div>
                <div className="text-sm text-[var(--color-text-secondary)]">To Direct Services</div>
              </div>
              <div className="text-center">
                <div 
                  className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  20+
                </div>
                <div className="text-sm text-[var(--color-text-secondary)]">Partner Organizations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Reports */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 
                  className="text-3xl font-bold text-[var(--color-text-primary)] mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  View Our Reports
                </h2>
                <p className="text-lg text-[var(--color-text-secondary)]">
                  As a young organization founded in 2021, we&apos;re building our reporting history.
                </p>
              </div>

              {/* Coming Soon */}
              <div className="bg-gray-50 rounded-xl p-12 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h3 
                  className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Annual Report Coming Soon
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto">
                  Our comprehensive annual report is being prepared. In the meantime, 
                  you can view our financial information and IRS filings.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/financials" className="btn btn-primary">
                    View Financials
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link href="/success-stories" className="btn btn-secondary">
                    Read Success Stories
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                What&apos;s in Our Annual Report
              </h2>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                  Impact Metrics
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Number of individuals helped, barriers removed, and success outcomes
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                  Donor Appreciation
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Recognition of our generous supporters and monthly donors
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                  Partner Highlights
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Collaboration with Birmingham nonprofits and community partners
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
