import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import { Shield, CheckCircle, FileText, Users, ArrowRight, Scale, Eye } from 'lucide-react'

export const metadata = {
  title: 'Board Governance | Transparency & Accountability',
  description: 'Learn about The Ladder\'s board governance, bylaws, and commitment to nonprofit transparency. 501(c)(3) organization with public financial reporting.',
  openGraph: {
    title: 'Board Governance | The Ladder Birmingham',
    description: 'Our commitment to nonprofit transparency and accountability.',
    url: 'https://www.the-ladder.org/board-governance',
    type: 'website'
  }
}

export default function BoardGovernancePage() {
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
                Board Governance
              </h1>
              <p className="text-xl text-white/90">
                Our commitment to transparency, accountability, and ethical 
                stewardship of the resources entrusted to us.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Status */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-sm text-[var(--color-text-secondary)] mb-1">Legal Status</div>
                    <div className="font-semibold text-[var(--color-text-primary)]">501(c)(3) Tax-Exempt</div>
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

        {/* Governance Principles */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Governance Principles
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
                The Ladder operates under clear governance principles that ensure 
                accountability to our donors, partners, and the community we serve.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <h3 
                    className="text-xl font-semibold text-[var(--color-text-primary)]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Fiduciary Responsibility
                  </h3>
                </div>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Board members act as stewards of The Ladder&apos;s resources, ensuring 
                  all funds are used effectively to fulfill our mission.
                </p>
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    Annual budget review and approval
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    Quarterly financial reporting
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    Expense oversight and approval
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <h3 
                    className="text-xl font-semibold text-[var(--color-text-primary)]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Transparency
                  </h3>
                </div>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  We maintain open communication with stakeholders and make 
                  organizational information publicly available.
                </p>
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    Public Form 990 filings
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    Annual impact reports
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    Donor communication and updates
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center">
                    <Scale className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <h3 
                    className="text-xl font-semibold text-[var(--color-text-primary)]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Ethical Standards
                  </h3>
                </div>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Board members adhere to high ethical standards and avoid 
                  conflicts of interest in all organizational decisions.
                </p>
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    Conflict of interest policy
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    Code of ethics for board members
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    Annual disclosure requirements
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <h3 
                    className="text-xl font-semibold text-[var(--color-text-primary)]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Board Structure
                  </h3>
                </div>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Our board includes diverse perspectives and expertise to 
                  provide effective strategic guidance.
                </p>
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    Volunteer board members
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    Quarterly board meetings
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    Committee oversight structure
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 
                  className="text-3xl font-bold text-[var(--color-text-primary)] mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Governance Documents
                </h2>
                <p className="text-lg text-[var(--color-text-secondary)]">
                  Access our public governance and financial documents.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 flex items-start gap-4">
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
                    <Link href="/financials" className="text-sm text-[var(--color-primary)] font-medium hover:underline flex items-center gap-1">
                      View Document <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
                      Form 990
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                      Annual IRS information returns
                    </p>
                    <Link href="/financials" className="text-sm text-[var(--color-primary)] font-medium hover:underline flex items-center gap-1">
                      View Document <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
                      Annual Reports
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                      Impact and financial summaries
                    </p>
                    <Link href="/annual-reports" className="text-sm text-[var(--color-primary)] font-medium hover:underline flex items-center gap-1">
                      View Reports <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
                      Organizational Bylaws
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                      Governing documents and policies
                    </p>
                    <span className="text-sm text-[var(--color-text-secondary)]">
                      Available upon request
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[var(--color-primary)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 
              className="text-3xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Questions About Our Governance?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We&apos;re committed to transparency. Contact us with any questions 
              about our governance, finances, or operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-lg bg-white text-[var(--color-primary)] hover:bg-gray-100">
                Contact Us
              </Link>
              <Link href="/financials" className="btn btn-lg bg-white/10 text-white border-2 border-white/30 hover:bg-white/20">
                View Financials
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
