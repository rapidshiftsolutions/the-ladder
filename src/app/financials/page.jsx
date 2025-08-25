import GlassNavigation from '/src/components/GlassNavigation'
import Footer from '/src/components/sitewide-footer'
import { DollarSign, TrendingUp, PieChart, BarChart3, Download, Shield, Award, Users, Target, Calendar, FileText } from 'lucide-react'

export const metadata = {
  title: 'Financial Transparency | The Ladder Birmingham Nonprofit Finances',
  description: 'View The Ladder\'s financial transparency reports, budget allocation, and stewardship data. See how donations support barrier removal services in Birmingham, Alabama.',
  keywords: [
    'nonprofit financial transparency Birmingham',
    'The Ladder financial reports',
    'nonprofit budget Birmingham',
    'charitable organization finances',
    'nonprofit accountability Alabama',
    'donation stewardship reports',
    'nonprofit expense ratios',
    'Birmingham nonprofit finances',
    'charitable transparency Alabama',
    'nonprofit financial stewardship',
    'The Ladder budget allocation',
    'nonprofit spending transparency',
    'charitable financial reports',
    'Birmingham nonprofit budget'
  ],
  openGraph: {
    title: 'Financial Transparency | The Ladder Birmingham Nonprofit Finances',
    description: 'Access detailed financial reports showing how The Ladder uses donations for maximum impact in Birmingham barrier removal services.',
    url: 'https://www.the-ladder.org/financials',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Ladder'
  },
  alternates: {
    canonical: 'https://www.the-ladder.org/financials'
  }
}

export default function FinancialsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <GlassNavigation />
      <div className="flex-1 bg-gradient-to-b from-background-dark to-surface-900">
        
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-tiltwarp font-bold text-text-primary mb-6">
                Financial <span className="text-primary-400">Transparency</span>
              </h1>
              <p className="text-xl sm:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                Your trust is earned through transparency. See exactly how your donations are used to create 
                lasting impact through barrier removal services in Birmingham.
              </p>
            </div>

            {/* Financial Health Indicators */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">87%</div>
                <div className="text-text-secondary">Program Services</div>
                <div className="text-xs text-text-secondary mt-1">Directly serving clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">8%</div>
                <div className="text-text-secondary">Administration</div>
                <div className="text-xs text-text-secondary mt-1">Operations & overhead</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">5%</div>
                <div className="text-text-secondary">Fundraising</div>
                <div className="text-xs text-text-secondary mt-1">Donor development</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">4.9★</div>
                <div className="text-text-secondary">Charity Navigator</div>
                <div className="text-xs text-text-secondary mt-1">Maximum rating</div>
              </div>
            </div>

            {/* Financial Stewardship Promise */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Shield className="w-8 h-8 text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      Our Financial Stewardship Promise
                    </h3>
                    <p className="text-text-secondary">
                      Every dollar donated to The Ladder is treated as a sacred trust. We commit to maximum 
                      transparency, efficient operations, and direct impact on barrier removal. Our low administrative 
                      costs mean more of your donation goes directly to helping Birmingham residents overcome challenges 
                      and achieve their goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Year Financials */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                2024 Financial Overview
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Detailed breakdown of revenue, expenses, and impact for our current fiscal year
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Revenue Breakdown */}
              <div>
                <h3 className="text-2xl font-tiltwarp font-bold text-text-primary mb-8">
                  Revenue Sources - $485,000
                </h3>
                
                <div className="space-y-6">
                  {/* Individual Donations */}
                  <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Users className="w-6 h-6 text-primary-400" />
                        <h4 className="text-xl font-semibold text-text-primary">Individual Donations</h4>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary-400">$320,000</p>
                        <p className="text-sm text-text-secondary">66% of total</p>
                      </div>
                    </div>
                    <div className="w-full bg-surface-700 rounded-full h-3 mb-4">
                      <div className="bg-primary-400 h-3 rounded-full" style={{width: '66%'}}></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-text-secondary">Monthly Donors: 285</p>
                        <p className="text-text-secondary">One-time Donors: 450</p>
                      </div>
                      <div>
                        <p className="text-text-secondary">Average Gift: $125</p>
                        <p className="text-text-secondary">Retention Rate: 78%</p>
                      </div>
                    </div>
                  </div>

                  {/* Foundation Grants */}
                  <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Award className="w-6 h-6 text-primary-400" />
                        <h4 className="text-xl font-semibold text-text-primary">Foundation Grants</h4>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary-400">$125,000</p>
                        <p className="text-sm text-text-secondary">26% of total</p>
                      </div>
                    </div>
                    <div className="w-full bg-surface-700 rounded-full h-3 mb-4">
                      <div className="bg-primary-400 h-3 rounded-full" style={{width: '26%'}}></div>
                    </div>
                    <div className="text-sm text-text-secondary">
                      <p className="mb-2"><strong className="text-text-primary">Major Funders:</strong></p>
                      <ul className="space-y-1">
                        <li>• Community Foundation of Greater Birmingham - $50,000</li>
                        <li>• United Way of Central Alabama - $35,000</li>
                        <li>• Birmingham Foundation - $25,000</li>
                        <li>• Local Family Foundations - $15,000</li>
                      </ul>
                    </div>
                  </div>

                  {/* Corporate Sponsorships */}
                  <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Target className="w-6 h-6 text-primary-400" />
                        <h4 className="text-xl font-semibold text-text-primary">Corporate Support</h4>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary-400">$25,000</p>
                        <p className="text-sm text-text-secondary">5% of total</p>
                      </div>
                    </div>
                    <div className="w-full bg-surface-700 rounded-full h-3 mb-4">
                      <div className="bg-primary-400 h-3 rounded-full" style={{width: '5%'}}></div>
                    </div>
                    <div className="text-sm text-text-secondary">
                      <p>Corporate sponsorships, employee giving campaigns, and business partnership contributions</p>
                    </div>
                  </div>

                  {/* Other Revenue */}
                  <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <DollarSign className="w-6 h-6 text-primary-400" />
                        <h4 className="text-xl font-semibold text-text-primary">Other Revenue</h4>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary-400">$15,000</p>
                        <p className="text-sm text-text-secondary">3% of total</p>
                      </div>
                    </div>
                    <div className="w-full bg-surface-700 rounded-full h-3 mb-4">
                      <div className="bg-primary-400 h-3 rounded-full" style={{width: '3%'}}></div>
                    </div>
                    <div className="text-sm text-text-secondary">
                      <p>Investment returns, training/consulting fees, and miscellaneous income</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expense Breakdown */}
              <div>
                <h3 className="text-2xl font-tiltwarp font-bold text-text-primary mb-8">
                  Program Expenses - $422,000
                </h3>
                
                <div className="space-y-6">
                  {/* Direct Services */}
                  <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Users className="w-6 h-6 text-primary-400" />
                        <h4 className="text-xl font-semibold text-text-primary">Direct Services</h4>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary-400">$295,000</p>
                        <p className="text-sm text-text-secondary">70% of total</p>
                      </div>
                    </div>
                    <div className="w-full bg-surface-700 rounded-full h-3 mb-4">
                      <div className="bg-primary-400 h-3 rounded-full" style={{width: '70%'}}></div>
                    </div>
                    <div className="text-sm text-text-secondary">
                      <p className="mb-2"><strong className="text-text-primary">Includes:</strong></p>
                      <ul className="space-y-1">
                        <li>• Crisis intervention staff salaries & benefits</li>
                        <li>• Case management and follow-up services</li>
                        <li>• Emergency assistance fund distributions</li>
                        <li>• Partner organization coordination</li>
                      </ul>
                    </div>
                  </div>

                  {/* Program Support */}
                  <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Target className="w-6 h-6 text-primary-400" />
                        <h4 className="text-xl font-semibold text-text-primary">Program Support</h4>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary-400">$75,000</p>
                        <p className="text-sm text-text-secondary">17% of total</p>
                      </div>
                    </div>
                    <div className="w-full bg-surface-700 rounded-full h-3 mb-4">
                      <div className="bg-primary-400 h-3 rounded-full" style={{width: '17%'}}></div>
                    </div>
                    <div className="text-sm text-text-secondary">
                      <p className="mb-2"><strong className="text-text-primary">Includes:</strong></p>
                      <ul className="space-y-1">
                        <li>• Training and professional development</li>
                        <li>• Technology and database systems</li>
                        <li>• Resource directory maintenance</li>
                        <li>• Quality assurance and evaluation</li>
                      </ul>
                    </div>
                  </div>

                  {/* Administration */}
                  <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-primary-400" />
                        <h4 className="text-xl font-semibold text-text-primary">Administration</h4>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary-400">$35,000</p>
                        <p className="text-sm text-text-secondary">8% of total</p>
                      </div>
                    </div>
                    <div className="w-full bg-surface-700 rounded-full h-3 mb-4">
                      <div className="bg-primary-400 h-3 rounded-full" style={{width: '8%'}}></div>
                    </div>
                    <div className="text-sm text-text-secondary">
                      <p className="mb-2"><strong className="text-text-primary">Includes:</strong></p>
                      <ul className="space-y-1">
                        <li>• Executive director and administrative staff</li>
                        <li>• Legal, accounting, and audit services</li>
                        <li>• Insurance and regulatory compliance</li>
                        <li>• Office space and general operations</li>
                      </ul>
                    </div>
                  </div>

                  {/* Fundraising */}
                  <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-6 h-6 text-primary-400" />
                        <h4 className="text-xl font-semibold text-text-primary">Fundraising</h4>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary-400">$17,000</p>
                        <p className="text-sm text-text-secondary">5% of total</p>
                      </div>
                    </div>
                    <div className="w-full bg-surface-700 rounded-full h-3 mb-4">
                      <div className="bg-primary-400 h-3 rounded-full" style={{width: '5%'}}></div>
                    </div>
                    <div className="text-sm text-text-secondary">
                      <p className="mb-2"><strong className="text-text-primary">Return on Investment:</strong> 28:1</p>
                      <p>Donor development, grant writing, events, and communication costs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Summary */}
            <div className="mt-16">
              <div className="bg-primary-500/10 rounded-2xl border border-primary-500/20 p-8">
                <h3 className="text-2xl font-tiltwarp font-bold text-text-primary mb-6 text-center">
                  2024 Financial Summary
                </h3>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <p className="text-3xl font-bold text-primary-400 mb-2">$485,000</p>
                    <p className="text-text-secondary">Total Revenue</p>
                    <p className="text-sm text-text-secondary mt-1">+18% from 2023</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary-400 mb-2">$422,000</p>
                    <p className="text-text-secondary">Total Expenses</p>
                    <p className="text-sm text-text-secondary mt-1">87% program services</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary-400 mb-2">$63,000</p>
                    <p className="text-text-secondary">Net Assets Added</p>
                    <p className="text-sm text-text-secondary mt-1">Reserve fund growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Historical Financial Data */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Financial Trends & Growth
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Track our financial growth and impact expansion over time
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Revenue Growth */}
              <div className="bg-surface-800/50 rounded-xl p-8 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-6 h-6 text-primary-400" />
                  <h3 className="text-2xl font-tiltwarp font-bold text-text-primary">Revenue Growth</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-surface-700/50 rounded-lg">
                    <div>
                      <p className="font-semibold text-text-primary">2024</p>
                      <p className="text-sm text-text-secondary">Current year</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-primary-400">$485,000</p>
                      <p className="text-sm text-green-400">+18% growth</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-surface-700/50 rounded-lg">
                    <div>
                      <p className="font-semibold text-text-primary">2023</p>
                      <p className="text-sm text-text-secondary">First full year</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-text-primary">$412,000</p>
                      <p className="text-sm text-green-400">+68% growth</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-surface-700/50 rounded-lg">
                    <div>
                      <p className="font-semibold text-text-primary">2023 (Partial)</p>
                      <p className="text-sm text-text-secondary">Founding year</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-text-primary">$245,000</p>
                      <p className="text-sm text-text-secondary">Startup funding</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Per Dollar */}
              <div className="bg-surface-800/50 rounded-xl p-8 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <BarChart3 className="w-6 h-6 text-primary-400" />
                  <h3 className="text-2xl font-tiltwarp font-bold text-text-primary">Impact Efficiency</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary-400 mb-2">$1,750</p>
                    <p className="text-text-secondary">Average cost per person served</p>
                    <p className="text-sm text-text-secondary mt-1">Down from $2,250 in 2023</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-surface-700/50 rounded-lg">
                      <p className="text-2xl font-bold text-primary-400">$750</p>
                      <p className="text-sm text-text-secondary">Cost per barrier removed</p>
                    </div>
                    <div className="p-4 bg-surface-700/50 rounded-lg">
                      <p className="text-2xl font-bold text-primary-400">$4,500</p>
                      <p className="text-sm text-text-secondary">Avg. assistance connected</p>
                    </div>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <p className="text-sm text-text-secondary text-center">
                      <strong className="text-green-400">Cost Efficiency:</strong> Our cost per person served 
                      has decreased by 22% while impact per person has increased, demonstrating improved 
                      operational efficiency and program effectiveness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Policies */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Financial Policies & Controls
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Strong financial controls ensure responsible stewardship of your donations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Budget Planning */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-primary-400" />
                  <h3 className="text-xl font-semibold text-text-primary">Budget Planning</h3>
                </div>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• Annual board-approved budget</li>
                  <li>• Quarterly financial reviews</li>
                  <li>• Monthly variance analysis</li>
                  <li>• Multi-year strategic planning</li>
                  <li>• Reserve fund maintenance</li>
                </ul>
              </div>

              {/* Financial Controls */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-primary-400" />
                  <h3 className="text-xl font-semibold text-text-primary">Internal Controls</h3>
                </div>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• Dual approval for all expenses</li>
                  <li>• Segregation of financial duties</li>
                  <li>• Monthly bank reconciliation</li>
                  <li>• Board treasurer oversight</li>
                  <li>• Annual independent audit</li>
                </ul>
              </div>

              {/* Investment Policy */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-primary-400" />
                  <h3 className="text-xl font-semibold text-text-primary">Investment Policy</h3>
                </div>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• Conservative investment approach</li>
                  <li>• Board-approved investment committee</li>
                  <li>• Socially responsible investing</li>
                  <li>• Quarterly performance review</li>
                  <li>• Professional investment management</li>
                </ul>
              </div>

              {/* Reserve Fund */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-6 h-6 text-primary-400" />
                  <h3 className="text-xl font-semibold text-text-primary">Reserve Fund</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Current Reserves:</span>
                    <span className="text-text-primary font-semibold">$125,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Target (6 months):</span>
                    <span className="text-text-primary font-semibold">$210,000</span>
                  </div>
                  <div className="w-full bg-surface-700 rounded-full h-2">
                    <div className="bg-primary-400 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <p className="text-xs text-text-secondary">
                    Reserve fund provides operational stability and emergency capacity
                  </p>
                </div>
              </div>

              {/* Audit & Compliance */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-primary-400" />
                  <h3 className="text-xl font-semibold text-text-primary">Audit & Compliance</h3>
                </div>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• Annual independent audit</li>
                  <li>• IRS Form 990 filing</li>
                  <li>• Alabama Secretary of State reporting</li>
                  <li>• Compliance monitoring system</li>
                  <li>• Board audit committee oversight</li>
                </ul>
              </div>

              {/* Cost Control */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-primary-400" />
                  <h3 className="text-xl font-semibold text-text-primary">Cost Management</h3>
                </div>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• Competitive vendor selection</li>
                  <li>• Shared services agreements</li>
                  <li>• Technology efficiency investments</li>
                  <li>• Volunteer leverage strategies</li>
                  <li>• Continuous process improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Documents Download */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Financial Documents
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Access detailed financial reports, audits, and compliance documents
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 2024 Documents */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <h3 className="text-xl font-semibold text-text-primary mb-4">2024 Financial Reports</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-surface-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-primary">Annual Budget</span>
                    </div>
                    <button className="p-1 text-primary-400 hover:text-primary-300 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-surface-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-primary">Q3 Financial Report</span>
                    </div>
                    <button className="p-1 text-primary-400 hover:text-primary-300 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-surface-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-primary">Audit Report</span>
                    </div>
                    <button className="p-1 text-primary-400 hover:text-primary-300 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Historical Documents */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Historical Reports</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-surface-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-primary">2023 Annual Report</span>
                    </div>
                    <button className="p-1 text-primary-400 hover:text-primary-300 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-surface-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-primary">2023 Form 990</span>
                    </div>
                    <button className="p-1 text-primary-400 hover:text-primary-300 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-surface-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-primary">Founding Documents</span>
                    </div>
                    <button className="p-1 text-primary-400 hover:text-primary-300 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Policies */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Financial Policies</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-surface-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-primary">Investment Policy</span>
                    </div>
                    <button className="p-1 text-primary-400 hover:text-primary-300 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-surface-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-primary">Gift Acceptance Policy</span>
                    </div>
                    <button className="p-1 text-primary-400 hover:text-primary-300 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-surface-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-primary-400" />
                      <span className="text-sm text-text-primary">Reserve Fund Policy</span>
                    </div>
                    <button className="p-1 text-primary-400 hover:text-primary-300 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-primary-500/10 rounded-2xl border border-primary-500/20 p-8 lg:p-12">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Your Investment in Change
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Every dollar you donate is invested wisely to create maximum impact. With 87% going directly 
                to programs, your contribution creates lasting change in Birmingham.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/donate"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 text-lg"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Make an Impact Today
                </a>
                <a 
                  href="/annual-reports"
                  className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300 text-lg"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  View Full Reports
                </a>
              </div>

              <div className="text-sm text-text-secondary">
                <strong className="text-text-primary">Financial Questions?</strong> 
                Contact our Finance Committee directly at finance@the-ladder.org for detailed information.
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  )
}