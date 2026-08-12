import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import { FileText, ArrowRight, Heart, Users, TrendingUp, Download } from 'lucide-react'
import { client } from '@/sanity/lib/client'
import { allAnnualReportsQuery } from '@/sanity/queries/annualReportsQuery'
import { siteSettingsQuery } from '@/sanity/queries/siteSettingsQuery'

export const metadata = {
  title: 'Annual Reports | Impact & Financials',
  description:
    "View The Ladder's annual reports showing our impact, financials, and community outcomes. Transparent reporting on how your donations are used.",
  openGraph: {
    title: 'Annual Reports | The Ladder Birmingham',
    description: 'Our annual impact and financial reports.',
    url: '/annual-reports',
    type: 'website',
  },
  alternates: {
    canonical: '/annual-reports',
  },
}

export const revalidate = 3600

export default async function AnnualReportsPage() {
  let reports = []
  let stats = null
  try {
    ;[reports, stats] = await Promise.all([
      client.fetch(allAnnualReportsQuery),
      client.fetch(siteSettingsQuery).then((s) => s?.impactStats || null),
    ])
    reports = reports || []
  } catch (error) {
    console.error('Error fetching annual reports:', error)
  }

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-white">
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

        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                {
                  value: stats?.individualsHelped || '500+',
                  label: stats?.individualsHelpedLabel || 'Individuals Helped',
                },
                {
                  value: stats?.successRate || '95%',
                  label: stats?.successRateLabel || 'Success Rate',
                },
                {
                  value: stats?.directImpact || '100%',
                  label: stats?.directImpactLabel || 'To Direct Services',
                },
                { value: '20+', label: 'Partner Organizations' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div
                    className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.value}
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                  Download published annual reports from Sanity or explore related transparency
                  pages.
                </p>
              </div>

              {reports.length ? (
                <div className="space-y-4">
                  {reports.map((report) => (
                    <div
                      key={report._id}
                      className="bg-gray-50 rounded-xl border border-gray-200 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                    >
                      <div>
                        <h3
                          className="text-xl font-bold text-[var(--color-text-primary)]"
                        >
                          {report.title || `${report.year} Annual Report`}
                        </h3>
                        {report.summary && (
                          <p className="text-sm text-[var(--color-text-secondary)] mt-2">
                            {report.summary}
                          </p>
                        )}
                      </div>
                      {report.pdfFile?.url ? (
                        <a
                          href={report.pdfFile.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary inline-flex items-center"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </a>
                      ) : (
                        <span className="text-sm text-[var(--color-text-muted)]">PDF coming soon</span>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-xl p-12 border border-gray-200 text-center">
                  <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-8 h-8 text-[var(--color-primary)]" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                  >
                    Annual Report Coming Soon
                  </h3>
                  <p className="text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto">
                    Our comprehensive annual report is being prepared. In the meantime, you can
                    view our financial information and IRS filings.
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
              )}
            </div>
          </div>
        </section>

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
              {[
                {
                  icon: TrendingUp,
                  title: 'Impact Metrics',
                  text: 'Number of individuals helped, barriers removed, and success outcomes',
                },
                {
                  icon: Heart,
                  title: 'Donor Appreciation',
                  text: 'Recognition of our generous supporters and monthly donors',
                },
                {
                  icon: Users,
                  title: 'Partner Highlights',
                  text: 'Collaboration with Birmingham nonprofits and community partners',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-6 border border-gray-200 text-center"
                >
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
