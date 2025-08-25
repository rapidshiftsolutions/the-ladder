import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer'
import { Heart, TrendingUp, Users, Award, CheckCircle, DollarSign, Calendar, Target, Gift, Star, CreditCard, Shield } from 'lucide-react'

export const metadata = {
  title: 'Monthly Giving - Ladder Climbers | The Ladder Birmingham Recurring Donations',
  description: 'Join the Ladder Climbers monthly giving program. Provide consistent support for barrier removal in Birmingham with recurring donations starting at $25/month.',
  keywords: [
    'monthly giving Birmingham nonprofit',
    'recurring donations Birmingham',
    'Ladder Climbers monthly giving',
    'monthly donors Birmingham',
    'nonprofit monthly giving program',
    'recurring charitable donations',
    'Birmingham nonprofit monthly support',
    'monthly giving benefits',
    'The Ladder monthly donors',
    'sustained giving Birmingham',
    'monthly charity donations',
    'recurring nonprofit support',
    'Birmingham monthly giving',
    'nonprofit sustaining donors'
  ],
  openGraph: {
    title: 'Monthly Giving - Ladder Climbers | The Ladder Birmingham Recurring Donations',
    description: 'Join our monthly giving community providing consistent support for barrier removal services in Birmingham, Alabama.',
    url: 'https://www.the-ladder.org/monthly-giving',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Ladder'
  },
  alternates: {
    canonical: 'https://www.the-ladder.org/monthly-giving'
  }
}

export default function MonthlyGivingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 bg-gradient-to-b from-background-dark to-surface-900">
        
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-tiltwarp font-bold text-text-primary mb-6">
                Become a <span className="text-primary-400">Ladder Climber</span>
              </h1>
              <p className="text-xl sm:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                Join our community of monthly donors providing the consistent, reliable support that makes 
                long-term barrier removal possible in Birmingham. Small monthly gifts create big impact.
              </p>
            </div>

            {/* Monthly Impact Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">285</div>
                <div className="text-text-secondary">Monthly Donors</div>
                <div className="text-xs text-text-secondary mt-1">Ladder Climbers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">78%</div>
                <div className="text-text-secondary">Budget Stability</div>
                <div className="text-xs text-text-secondary mt-1">From monthly giving</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">$125</div>
                <div className="text-text-secondary">Average Monthly Gift</div>
                <div className="text-xs text-text-secondary mt-1">All Ladder Climbers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">95%</div>
                <div className="text-text-secondary">Retention Rate</div>
                <div className="text-xs text-text-secondary mt-1">Donor satisfaction</div>
              </div>
            </div>

            {/* Why Monthly Giving */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Heart className="w-8 h-8 text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      Why Monthly Giving Matters
                    </h3>
                    <p className="text-text-secondary">
                      Barriers don't appear and disappear on annual schedules - they require consistent, 
                      ongoing attention. Monthly giving allows us to respond immediately to crises, maintain 
                      continuous relationships with partner organizations, and provide the sustained support 
                      individuals need for long-term success. Your monthly commitment becomes someone's 
                      lifeline to stability and growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ladder Climbers Levels */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Ladder Climbers Giving Levels
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Choose the level that fits your budget and impact goals - every level makes a meaningful difference
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Foundation Level */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Foundation</h3>
                  <p className="text-3xl font-bold text-primary-400 mb-1">$25</p>
                  <p className="text-sm text-text-secondary">per month</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-primary-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-2">Monthly Impact:</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Help with 1 crisis phone call</li>
                      <li>• Contribute to emergency assistance fund</li>
                      <li>• Support resource directory updates</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Recognition:</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Monthly impact email updates</li>
                      <li>• Ladder Climbers newsletter</li>
                      <li>• Annual appreciation letter</li>
                    </ul>
                  </div>

                  <p className="text-xs text-text-secondary bg-surface-700/50 rounded p-2">
                    <strong className="text-text-primary">Annual Total:</strong> $300 - Tax deductible
                  </p>
                </div>
              </div>

              {/* Support Level */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Support</h3>
                  <p className="text-3xl font-bold text-primary-400 mb-1">$75</p>
                  <p className="text-sm text-text-secondary">per month</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-primary-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-2">Monthly Impact:</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Support 3 crisis interventions</li>
                      <li>• Fund partner organization coordination</li>
                      <li>• Enable follow-up support services</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Recognition:</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• All Foundation level benefits</li>
                      <li>• Quarterly success story calls</li>
                      <li>• Priority event invitations</li>
                      <li>• Donor-only impact webinars</li>
                    </ul>
                  </div>

                  <p className="text-xs text-text-secondary bg-surface-700/50 rounded p-2">
                    <strong className="text-text-primary">Annual Total:</strong> $900 - Tax deductible
                  </p>
                </div>
              </div>

              {/* Partnership Level */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Partnership</h3>
                  <p className="text-3xl font-bold text-primary-400 mb-1">$150</p>
                  <p className="text-sm text-text-secondary">per month</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-primary-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-2">Monthly Impact:</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Complete barrier removal for 1 person</li>
                      <li>• Support volunteer training programs</li>
                      <li>• Fund technology improvements</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Recognition:</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• All Support level benefits</li>
                      <li>• Annual appreciation dinner invite</li>
                      <li>• Executive director updates</li>
                      <li>• Behind-the-scenes facility tours</li>
                    </ul>
                  </div>

                  <p className="text-xs text-text-secondary bg-surface-700/50 rounded p-2">
                    <strong className="text-text-primary">Annual Total:</strong> $1,800 - Tax deductible
                  </p>
                </div>
              </div>

              {/* Leadership Level */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Leadership</h3>
                  <p className="text-3xl font-bold text-primary-400 mb-1">$300+</p>
                  <p className="text-sm text-text-secondary">per month</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-primary-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-2">Monthly Impact:</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Support 2+ complete transformations</li>
                      <li>• Enable program expansion</li>
                      <li>• Fund strategic initiatives</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">Recognition:</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• All Partnership level benefits</li>
                      <li>• Board meeting updates</li>
                      <li>• Annual strategic planning input</li>
                      <li>• Leadership circle recognition</li>
                    </ul>
                  </div>

                  <p className="text-xs text-text-secondary bg-surface-700/50 rounded p-2">
                    <strong className="text-text-primary">Annual Total:</strong> $3,600+ - Tax deductible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Monthly Giving Works */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Why Monthly Giving Works Better
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Consistent support creates more impact than one-time donations of the same total amount
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* For The Ladder */}
              <div>
                <h3 className="text-2xl font-tiltwarp font-bold text-text-primary mb-8">
                  Benefits for The Ladder
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Predictable Funding</h4>
                      <p className="text-text-secondary text-sm">
                        Monthly commitments allow us to plan programs, hire qualified staff, and make 
                        long-term commitments to the community with confidence.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Crisis Response Readiness</h4>
                      <p className="text-text-secondary text-sm">
                        Stable funding means we can respond immediately to emergencies without waiting 
                        for special fundraising campaigns or grant approval cycles.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Lower Fundraising Costs</h4>
                      <p className="text-text-secondary text-sm">
                        Monthly donors reduce our need for expensive direct mail campaigns and event 
                        fundraising, putting more money toward programs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Partner Relationships</h4>
                      <p className="text-text-secondary text-sm">
                        Consistent funding allows us to maintain strong relationships with partner 
                        organizations, ensuring clients get seamless referrals and support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* For Donors */}
              <div>
                <h3 className="text-2xl font-tiltwarp font-bold text-text-primary mb-8">
                  Benefits for You
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Greater Impact per Dollar</h4>
                      <p className="text-text-secondary text-sm">
                        Monthly giving allows us to plan more efficiently, meaning more of your total 
                        giving goes directly to barrier removal instead of emergency fundraising.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Convenient & Automatic</h4>
                      <p className="text-text-secondary text-sm">
                        Set it and forget it - your monthly gift processes automatically, so you never 
                        have to remember to give or worry about missing opportunities to help.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Budget-Friendly Giving</h4>
                      <p className="text-text-secondary text-sm">
                        Smaller monthly amounts are easier on your budget than large annual gifts, 
                        while still creating significant yearly impact.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Deeper Connection</h4>
                      <p className="text-text-secondary text-sm">
                        Monthly donors receive more detailed updates, success stories, and opportunities 
                        to see their ongoing impact in the community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Example */}
            <div className="mt-16">
              <div className="bg-primary-500/10 rounded-2xl border border-primary-500/20 p-8">
                <h3 className="text-2xl font-tiltwarp font-bold text-text-primary mb-6 text-center">
                  Impact Comparison: $900 Annual Gift
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-surface-800/50 rounded-lg p-6">
                    <h4 className="font-semibold text-text-primary mb-4">One-Time Annual Donation</h4>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      <li>• Helps 3-4 people in December when received</li>
                      <li>• No ongoing support for rest of year</li>
                      <li>• Forces us to hold money in reserve</li>
                      <li>• Creates funding gaps during crisis periods</li>
                      <li>• Requires emergency fundraising campaigns</li>
                    </ul>
                  </div>
                  <div className="bg-primary-500/20 rounded-lg p-6 border border-primary-500/30">
                    <h4 className="font-semibold text-text-primary mb-4">Monthly $75 x 12 Months</h4>
                    <ul className="space-y-2 text-sm text-text-secondary">
                      <li>✓ Helps 3 people <em>every single month</em></li>
                      <li>✓ Enables immediate crisis response year-round</li>
                      <li>✓ Allows strategic program planning</li>
                      <li>✓ Creates 36 barrier removal opportunities</li>
                      <li>✓ Reduces administrative and fundraising costs</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-text-secondary">
                    <strong className="text-primary-400">Same total giving, 3x more impact</strong> through 
                    predictable, consistent monthly support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ladder Climbers Community */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                The Ladder Climbers Community
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Join a special community of donors who are personally invested in Birmingham's success
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Community Features */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Exclusive Updates & Communication</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-text-primary">Monthly Impact Reports</p>
                        <p className="text-sm text-text-secondary">Detailed stories about how your specific contribution created change</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-text-primary">Ladder Climbers Newsletter</p>
                        <p className="text-sm text-text-secondary">Quarterly publication with in-depth program updates and financial transparency</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-text-primary">Direct Access</p>
                        <p className="text-sm text-text-secondary">Special email line for questions, feedback, and program suggestions</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Special Events & Recognition</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-text-primary">Annual Appreciation Dinner</p>
                        <p className="text-sm text-text-secondary">Exclusive event celebrating Ladder Climbers with clients and board members</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-text-primary">Behind-the-Scenes Tours</p>
                        <p className="text-sm text-text-secondary">See our operations firsthand and meet the team creating impact</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-text-primary">Program Input Opportunities</p>
                        <p className="text-sm text-text-secondary">Higher-level donors invited to provide feedback on strategic planning</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="space-y-6">
                <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-text-secondary mb-4 leading-relaxed">
                    "Being a Ladder Climber means I know my contribution is working every single day, 
                    not just when I remember to give. The monthly updates show me exactly how my $150 
                    helped someone specific overcome their barrier."
                  </blockquote>
                  <div className="text-sm">
                    <p className="text-text-primary font-medium">Patricia M.</p>
                    <p className="text-text-secondary">Partnership Level, 18 months</p>
                  </div>
                </div>

                <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-text-secondary mb-4 leading-relaxed">
                    "I started as a Foundation level donor and increased to Support level after seeing 
                    the incredible impact. The community aspect makes giving feel like being part of 
                    a movement, not just writing a check."
                  </blockquote>
                  <div className="text-sm">
                    <p className="text-text-primary font-medium">David R.</p>
                    <p className="text-text-secondary">Support Level, 2 years</p>
                  </div>
                </div>

                <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-text-secondary mb-4 leading-relaxed">
                    "Monthly giving fits my budget so much better than trying to make one big donation. 
                    Plus, the automatic processing means I never forget to give, and the tax documentation 
                    is so easy at year-end."
                  </blockquote>
                  <div className="text-sm">
                    <p className="text-text-primary font-medium">Lisa K.</p>
                    <p className="text-text-secondary">Foundation Level, 8 months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sign Up Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Join the Ladder Climbers Today
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Simple, secure setup process - your first gift processes immediately, and monthly gifts begin next month
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Setup Process */}
              <div>
                <h3 className="text-2xl font-tiltwarp font-bold text-text-primary mb-8">
                  Easy Setup Process
                </h3>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Choose Your Level</h4>
                      <p className="text-text-secondary text-sm">
                        Select the monthly amount that fits your budget and impact goals. You can 
                        change your level anytime by contacting us.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Secure Payment Setup</h4>
                      <p className="text-text-secondary text-sm">
                        Provide your payment information through our secure, encrypted donation form. 
                        We accept all major credit cards and bank transfers.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Welcome Package</h4>
                      <p className="text-text-secondary text-sm">
                        Receive your Ladder Climbers welcome package with program information, 
                        impact data, and your first monthly report.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Automatic Processing</h4>
                      <p className="text-text-secondary text-sm">
                        Your monthly gift processes automatically on the same date each month. 
                        You'll receive email confirmations and tax receipts.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                  <h4 className="font-semibold text-text-primary mb-3">Payment Options & Security</h4>
                  <div className="space-y-2 text-sm text-text-secondary">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-primary-400" />
                      <span>All major credit and debit cards accepted</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-primary-400" />
                      <span>Bank transfer/ACH processing available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary-400" />
                      <span>256-bit SSL encryption and PCI compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary-400" />
                      <span>Cancel or modify anytime with 30 days notice</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Selection */}
              <div>
                <h3 className="text-2xl font-tiltwarp font-bold text-text-primary mb-8">
                  Select Your Level
                </h3>
                
                <div className="space-y-4">
                  {/* Quick level buttons */}
                  <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                    <div className="grid grid-cols-2 gap-4">
                      <button className="p-4 bg-primary-500/20 rounded-lg border border-primary-500/30 hover:bg-primary-500/30 transition-colors">
                        <div className="text-center">
                          <p className="text-xl font-bold text-primary-400">$25</p>
                          <p className="text-sm text-text-secondary">Foundation</p>
                        </div>
                      </button>
                      <button className="p-4 bg-primary-500/20 rounded-lg border border-primary-500/30 hover:bg-primary-500/30 transition-colors">
                        <div className="text-center">
                          <p className="text-xl font-bold text-primary-400">$75</p>
                          <p className="text-sm text-text-secondary">Support</p>
                        </div>
                      </button>
                      <button className="p-4 bg-primary-500/20 rounded-lg border border-primary-500/30 hover:bg-primary-500/30 transition-colors">
                        <div className="text-center">
                          <p className="text-xl font-bold text-primary-400">$150</p>
                          <p className="text-sm text-text-secondary">Partnership</p>
                        </div>
                      </button>
                      <button className="p-4 bg-primary-500/20 rounded-lg border border-primary-500/30 hover:bg-primary-500/30 transition-colors">
                        <div className="text-center">
                          <p className="text-xl font-bold text-primary-400">Custom</p>
                          <p className="text-sm text-text-secondary">Your Amount</p>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-text-secondary mb-4">
                      Ready to make your first monthly gift?
                    </p>
                    <div className="space-y-3">
                      <a 
                        href="/donate"
                        className="inline-flex items-center justify-center w-full px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 text-lg"
                      >
                        <Heart className="w-5 h-5 mr-2" />
                        Start Monthly Giving
                      </a>
                      <p className="text-xs text-text-secondary">
                        Choose "Monthly Gift" on the donation page
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                  <h4 className="font-semibold text-text-primary mb-3">Questions About Monthly Giving?</h4>
                  <p className="text-text-secondary text-sm mb-4">
                    Our donor relations team is happy to help you find the right level and answer 
                    any questions about the Ladder Climbers program.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-text-secondary">
                      <strong className="text-text-primary">Email:</strong> climbers@the-ladder.org
                    </p>
                    <p className="text-text-secondary">
                      <strong className="text-text-primary">Phone:</strong> (205) 522-1162 ext. 2
                    </p>
                    <p className="text-text-secondary">
                      <strong className="text-text-primary">Hours:</strong> Mon-Fri 9 AM - 5 PM
                    </p>
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
                Join the Movement for <span className="text-primary-400">Lasting Change</span>
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Your monthly commitment becomes someone's lifeline to stability, growth, and success. 
                Together, we're not just removing barriers - we're building ladders to lasting change.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/donate"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 text-lg"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Become a Ladder Climber
                </a>
                <a 
                  href="/success-stories"
                  className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300 text-lg"
                >
                  <Award className="w-5 h-5 mr-2" />
                  See Your Impact
                </a>
              </div>

              <div className="text-sm text-text-secondary">
                <strong className="text-text-primary">100% Tax-Deductible:</strong> 
                All monthly gifts are fully tax-deductible. You'll receive detailed annual giving statements for easy tax preparation.
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  )
}