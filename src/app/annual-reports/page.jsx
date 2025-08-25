import GlassNavigation from '/src/components/GlassNavigation'
import Footer from '/src/components/sitewide-footer'
import { Download, FileText, Calendar, TrendingUp, Users, DollarSign, Award, ExternalLink, Shield } from 'lucide-react'

export const metadata = {
  title: 'Annual Reports | The Ladder Birmingham Nonprofit Transparency',
  description: 'Access The Ladder\'s annual reports, Form 990 filings, and financial transparency documents. See how donations are used for barrier removal in Birmingham, Alabama.',
  keywords: [
    'nonprofit annual reports Birmingham',
    'Form 990 Birmingham nonprofit',
    'The Ladder annual report',
    'nonprofit transparency Alabama',
    'charitable organization reports',
    'IRS Form 990 download',
    'nonprofit financial reports',
    'Birmingham nonprofit accountability',
    'charitable transparency reports',
    'nonprofit impact reports',
    '501c3 annual reports',
    'nonprofit governance reports',
    'The Ladder accountability',
    'Birmingham nonprofit financials'
  ],
  openGraph: {
    title: 'Annual Reports | The Ladder Birmingham Nonprofit Transparency',
    description: 'Access annual reports, Form 990 filings, and impact data from The Ladder\'s barrier removal work in Birmingham.',
    url: 'https://www.the-ladder.org/annual-reports',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Ladder'
  },
  alternates: {
    canonical: 'https://www.the-ladder.org/annual-reports'
  }
}

export default function AnnualReportsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <GlassNavigation />
      <div className="flex-1 bg-gradient-to-b from-background-dark to-surface-900">
        
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-tiltwarp font-bold text-text-primary mb-6">
                Annual <span className="text-primary-400">Reports</span>
              </h1>
              <p className="text-xl sm:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                Transparency and accountability are core to our mission. Access our annual reports, 
                IRS filings, and impact data to see how your donations create lasting change in Birmingham.
              </p>
            </div>

            {/* Key Transparency Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">100%</div>
                <div className="text-text-secondary">Public Transparency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">Form 990</div>
                <div className="text-text-secondary">IRS Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">Annual</div>
                <div className="text-text-secondary">Impact Reports</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">Open</div>
                <div className="text-text-secondary">Financial Records</div>
              </div>
            </div>

            {/* 501(c)(3) Status Banner */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Shield className="w-8 h-8 text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      Tax-Exempt Status
                    </h3>
                    <p className="text-text-secondary mb-4">
                      The Ladder is a 501(c)(3) tax-exempt nonprofit organization recognized by the IRS. 
                      Donations are tax-deductible to the fullest extent allowed by law.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-text-secondary"><strong className="text-text-primary">EIN:</strong> 47-2123160</p>
                        <p className="text-text-secondary"><strong className="text-text-primary">Incorporation:</strong> Alabama Nonprofit Corporation</p>
                      </div>
                      <div>
                        <p className="text-text-secondary"><strong className="text-text-primary">Status:</strong> 501(c)(3) Tax-Exempt</p>
                        <p className="text-text-secondary"><strong className="text-text-primary">Founded:</strong> 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Most Recent Report */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                2024 Annual Report
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Our most recent comprehensive report on impact, finances, and community outcomes
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Report Summary */}
              <div className="lg:col-span-2">
                <div className="bg-surface-800/50 rounded-xl p-8 border border-primary-500/20">
                  <h3 className="text-2xl font-tiltwarp font-bold text-text-primary mb-6">
                    Year in Review: 2024
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-3">Key Accomplishments</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-primary-400 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-text-primary">275 Individuals Served</p>
                            <p className="text-sm text-text-secondary">50% increase from 2023</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <TrendingUp className="w-5 h-5 text-primary-400 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-text-primary">95% Success Rate</p>
                            <p className="text-sm text-text-secondary">Barriers successfully removed</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Award className="w-5 h-5 text-primary-400 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-text-primary">32 Partner Organizations</p>
                            <p className="text-sm text-text-secondary">Expanded network coverage</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <DollarSign className="w-5 h-5 text-primary-400 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-text-primary">$1.2M in Assistance</p>
                            <p className="text-sm text-text-secondary">Connected through partners</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-3">Program Highlights</h4>
                      <ul className="space-y-2 text-text-secondary">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Launched Emergency Crisis Response team with 24-hour turnaround commitment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Expanded partnership network to include specialized legal and healthcare providers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Implemented follow-up tracking system to ensure long-term stability</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Created comprehensive Birmingham resources directory for community access</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-3">Financial Stewardship</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-surface-700/50 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-primary-400 mb-1">87%</p>
                          <p className="text-sm text-text-secondary">Program Services</p>
                        </div>
                        <div className="bg-surface-700/50 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-primary-400 mb-1">8%</p>
                          <p className="text-sm text-text-secondary">Administration</p>
                        </div>
                        <div className="bg-surface-700/50 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-primary-400 mb-1">5%</p>
                          <p className="text-sm text-text-secondary">Fundraising</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Section */}
              <div className="space-y-6">
                <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Download Reports</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-surface-700/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-primary-400" />
                        <div>
                          <p className="font-medium text-text-primary">2024 Annual Report</p>
                          <p className="text-sm text-text-secondary">Complete impact report</p>
                        </div>
                      </div>
                      <button className="p-2 text-primary-400 hover:text-primary-300 transition-colors">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-surface-700/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-primary-400" />
                        <div>
                          <p className="font-medium text-text-primary">IRS Form 990 (2024)</p>
                          <p className="text-sm text-text-secondary">Tax filing document</p>
                        </div>
                      </div>
                      <button className="p-2 text-primary-400 hover:text-primary-300 transition-colors">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-surface-700/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-primary-400" />
                        <div>
                          <p className="font-medium text-text-primary">Financial Summary</p>
                          <p className="text-sm text-text-secondary">Budget & expenses</p>
                        </div>
                      </div>
                      <button className="p-2 text-primary-400 hover:text-primary-300 transition-colors">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-surface-600">
                    <p className="text-sm text-text-secondary">
                      <strong className="text-text-primary">Note:</strong> All documents are available in PDF format. 
                      For accessibility accommodations or alternative formats, 
                      <a href="/contact" className="text-primary-400 hover:text-primary-300"> contact us</a>.
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">2024 At a Glance</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Total Donations</span>
                      <span className="font-semibold text-text-primary">$485,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Program Expenses</span>
                      <span className="font-semibold text-text-primary">$422,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">People Helped</span>
                      <span className="font-semibold text-text-primary">275</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Barriers Removed</span>
                      <span className="font-semibold text-text-primary">642</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Historical Reports */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Historical Reports
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Access previous years' reports to see our growth and continued impact
              </p>
            </div>

            <div className="space-y-8">
              {/* 2023 Report */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="grid lg:grid-cols-4 gap-6 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-primary-400" />
                      <h3 className="text-xl font-semibold text-text-primary">2023 Annual Report</h3>
                    </div>
                    <p className="text-sm text-text-secondary">Our founding year - establishing operations and partnerships</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-primary-400">183</p>
                      <p className="text-xs text-text-secondary">People Served</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary-400">92%</p>
                      <p className="text-xs text-text-secondary">Success Rate</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="font-semibold text-text-primary">$312,000</p>
                    <p className="text-sm text-text-secondary">Total Revenue</p>
                  </div>

                  <div className="flex gap-2 justify-end">
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary-500/20 text-primary-400 rounded-lg hover:bg-primary-500/30 transition-colors">
                      <Download className="w-4 h-4" />
                      <span className="text-sm">Annual Report</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-surface-700/50 text-text-secondary rounded-lg hover:bg-surface-600/50 transition-colors">
                      <FileText className="w-4 h-4" />
                      <span className="text-sm">Form 990</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Founding Documents */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="grid lg:grid-cols-4 gap-6 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-5 h-5 text-primary-400" />
                      <h3 className="text-xl font-semibold text-text-primary">Founding Documents</h3>
                    </div>
                    <p className="text-sm text-text-secondary">IRS determination letter and articles of incorporation</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="font-semibold text-text-primary">501(c)(3)</p>
                    <p className="text-sm text-text-secondary">Tax-Exempt Status</p>
                  </div>

                  <div className="text-center">
                    <p className="font-semibold text-text-primary">Alabama</p>
                    <p className="text-sm text-text-secondary">State Incorporation</p>
                  </div>

                  <div className="flex gap-2 justify-end">
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary-500/20 text-primary-400 rounded-lg hover:bg-primary-500/30 transition-colors">
                      <Download className="w-4 h-4" />
                      <span className="text-sm">IRS Letter</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-surface-700/50 text-text-secondary rounded-lg hover:bg-surface-600/50 transition-colors">
                      <FileText className="w-4 h-4" />
                      <span className="text-sm">Articles</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* External Resources */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Third-Party Verification
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Independent sources for verifying our nonprofit status and transparency ratings
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* GuideStar */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20 text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">GuideStar Profile</h3>
                <p className="text-text-secondary mb-4">
                  View our verified nonprofit profile and transparency rating on GuideStar/Candid.
                </p>
                <a 
                  href="https://www.guidestar.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Visit GuideStar <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Charity Navigator */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20 text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Charity Navigator</h3>
                <p className="text-text-secondary mb-4">
                  Independent evaluation of our financial health, accountability, and transparency.
                </p>
                <a 
                  href="https://www.charitynavigator.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                >
                  View Rating <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* IRS Database */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20 text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">IRS Exempt Organizations</h3>
                <p className="text-text-secondary mb-4">
                  Verify our tax-exempt status directly through the IRS database.
                </p>
                <a 
                  href="https://apps.irs.gov/app/eos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Check IRS Status <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Report Request */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-primary-500/10 rounded-2xl border border-primary-500/20 p-8 lg:p-12">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Request Additional Information
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Need specific financial data, impact metrics, or custom reports? We're committed to 
                transparency and happy to provide additional information to donors, researchers, and community members.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 text-lg"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Request Information
                </a>
                <a 
                  href="mailto:reports@the-ladder.org"
                  className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300 text-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Email Reports Team
                </a>
              </div>

              <div className="text-sm text-text-secondary">
                <strong className="text-text-primary">Typical Response Time:</strong> 
                We respond to information requests within 5 business days. Complex data requests may take up to 2 weeks.
              </div>
            </div>
          </div>
        </section>

        {/* Transparency Commitment */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Our Commitment to Transparency
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                We believe donors and community members have the right to understand how their contributions make an impact
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-primary-400" />
                  <h3 className="text-xl font-semibold text-text-primary">Legal Compliance</h3>
                </div>
                <p className="text-text-secondary">
                  We exceed all federal and Alabama state requirements for nonprofit reporting and maintain 
                  current filings with the IRS and Alabama Secretary of State.
                </p>
              </div>

              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-primary-400" />
                  <h3 className="text-xl font-semibold text-text-primary">Stakeholder Access</h3>
                </div>
                <p className="text-text-secondary">
                  Donors, volunteers, community members, and partner organizations can access detailed 
                  information about our operations, finances, and impact outcomes.
                </p>
              </div>

              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-primary-400" />
                  <h3 className="text-xl font-semibold text-text-primary">Continuous Improvement</h3>
                </div>
                <p className="text-text-secondary">
                  We regularly review and improve our reporting practices based on stakeholder feedback 
                  and industry best practices for nonprofit transparency.
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