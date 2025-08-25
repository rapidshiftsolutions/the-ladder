import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer'
import { Heart, Star, CheckCircle, ArrowRight, Users, TrendingUp, Award, Quote } from 'lucide-react'

export const metadata = {
  title: 'Success Stories | The Ladder Birmingham Impact & Testimonials',
  description: 'Real success stories from Birmingham residents who overcame barriers with The Ladder\'s help. See the impact of our crisis intervention and barrier removal services.',
  keywords: [
    'Birmingham nonprofit success stories',
    'barrier removal success',
    'crisis intervention testimonials',
    'The Ladder impact stories',
    'Birmingham assistance success',
    'nonprofit testimonials Birmingham',
    'barrier overcome stories',
    'individual assistance success',
    'Birmingham crisis intervention results',
    'nonprofit impact Birmingham',
    'community success stories',
    'barrier removal testimonials',
    'The Ladder reviews',
    'Birmingham nonprofit results'
  ],
  openGraph: {
    title: 'Success Stories | The Ladder Birmingham Impact & Testimonials',
    description: 'Read inspiring success stories from Birmingham residents who overcame barriers through The Ladder\'s assistance and partner network.',
    url: 'https://www.the-ladder.org/success-stories',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Ladder'
  },
  alternates: {
    canonical: 'https://www.the-ladder.org/success-stories'
  }
}

export default function SuccessStoriesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 bg-gradient-to-b from-background-dark to-surface-900">
        
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-tiltwarp font-bold text-text-primary mb-6">
                <span className="text-primary-400">Success</span> Stories
              </h1>
              <p className="text-xl sm:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                Every barrier removed represents a life changed. These are the stories of Birmingham residents 
                who found their path forward through The Ladder's assistance and our partner network.
              </p>
            </div>

            {/* Impact Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">95%</div>
                <div className="text-text-secondary">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">2.3</div>
                <div className="text-text-secondary">Avg. Barriers Removed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">30 Days</div>
                <div className="text-text-secondary">Avg. Resolution Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">85%</div>
                <div className="text-text-secondary">Long-term Stability</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Success Story */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Featured Success Story
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Real people, real barriers, real solutions
              </p>
            </div>

            <div className="bg-primary-500/10 rounded-2xl border border-primary-500/20 p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-6">
                    <Quote className="w-8 h-8 text-primary-400 mr-3" />
                    <h3 className="text-2xl font-tiltwarp font-bold text-text-primary">
                      From Crisis to Stability: Maria's Story
                    </h3>
                  </div>
                  <div className="space-y-4 text-text-secondary">
                    <p className="text-lg leading-relaxed">
                      "When I lost my job during the pandemic, everything fell apart at once. I was facing eviction, 
                      my utilities were about to be shut off, and I didn't know where to turn. The Ladder didn't 
                      just give me a phone number to call – they walked with me through every step."
                    </p>
                    <p className="leading-relaxed">
                      "Within a week, they connected me with United Way for emergency rent assistance, helped me 
                      apply for utility help, and even coordinated with a job training program. But what meant 
                      the most was that they checked in with me regularly to make sure everything was working."
                    </p>
                    <p className="leading-relaxed">
                      "Today, I'm in stable housing, have a new job in healthcare administration, and I'm even 
                      saving money for the first time in years. The Ladder didn't just solve my immediate crisis 
                      – they helped me build a foundation for long-term success."
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-surface-600">
                    <p className="text-sm text-text-secondary">
                      <strong className="text-text-primary">Maria, Birmingham resident</strong> • 
                      Barriers removed: Housing instability, unemployment, utility crisis • 
                      Time to resolution: 3 weeks
                    </p>
                  </div>
                </div>
                <div>
                  <div className="bg-surface-800/50 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-text-primary mb-4">Outcome Highlights</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                        <span className="text-text-secondary text-sm">Avoided eviction through emergency assistance</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                        <span className="text-text-secondary text-sm">Secured new employment with 30% higher salary</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                        <span className="text-text-secondary text-sm">Established emergency savings fund</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                        <span className="text-text-secondary text-sm">Connected to long-term career development</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                More Success Stories
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Each story represents someone who refused to give up and found the help they needed
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Story 1 */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">Breaking the Cycle</h3>
                    <p className="text-sm text-text-secondary">Healthcare Access • Mental Health Support</p>
                  </div>
                </div>
                <blockquote className="text-text-secondary mb-4 leading-relaxed">
                  "I had been struggling with untreated depression for years, which cost me my job and nearly 
                  my family. The Ladder connected me with mental health services and helped me navigate the 
                  healthcare system. Getting treatment was the key that unlocked everything else."
                </blockquote>
                <div className="pt-4 border-t border-surface-600">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">
                      <strong className="text-text-primary">James</strong> • 6 months stable
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Story 2 */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">Career Transformation</h3>
                    <p className="text-sm text-text-secondary">Job Training • Transportation • Childcare</p>
                  </div>
                </div>
                <blockquote className="text-text-secondary mb-4 leading-relaxed">
                  "As a single mom, I felt trapped in minimum-wage jobs because I couldn't afford childcare 
                  or transportation to get training. The Ladder helped me coordinate all three things at once, 
                  and now I'm a certified medical assistant earning twice what I was before."
                </blockquote>
                <div className="pt-4 border-t border-surface-600">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">
                      <strong className="text-text-primary">Angela</strong> • Career advancement success
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Story 3 */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">Family Reunification</h3>
                    <p className="text-sm text-text-secondary">Legal Aid • Housing • Substance Abuse Treatment</p>
                  </div>
                </div>
                <blockquote className="text-text-secondary mb-4 leading-relaxed">
                  "I lost custody of my children due to my addiction and legal troubles. The Ladder helped me 
                  find treatment, get legal representation, and secure stable housing. After 18 months of hard 
                  work, my kids are home with me again. It's the miracle I never thought would happen."
                </blockquote>
                <div className="pt-4 border-t border-surface-600">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">
                      <strong className="text-text-primary">Robert</strong> • Family restored
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Story 4 */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">Educational Achievement</h3>
                    <p className="text-sm text-text-secondary">GED Completion • College Preparation • Financial Aid</p>
                  </div>
                </div>
                <blockquote className="text-text-secondary mb-4 leading-relaxed">
                  "I dropped out of high school at 16 and always regretted it. At 35, I finally had the 
                  courage to try again, but I didn't know where to start. The Ladder connected me with GED 
                  classes, helped with college applications, and now I'm a freshman at UAB studying nursing."
                </blockquote>
                <div className="pt-4 border-t border-surface-600">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">
                      <strong className="text-text-primary">Sarah</strong> • Pursuing nursing degree
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Story 5 */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">Senior Independence</h3>
                    <p className="text-sm text-text-secondary">Healthcare Navigation • Home Modifications • Benefits</p>
                  </div>
                </div>
                <blockquote className="text-text-secondary mb-4 leading-relaxed">
                  "After my husband passed, I was overwhelmed trying to navigate Medicare, social services, 
                  and home repairs I couldn't afford. The Ladder helped me with everything – from understanding 
                  my benefits to getting my house accessible for my mobility issues. I can stay independent now."
                </blockquote>
                <div className="pt-4 border-t border-surface-600">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">
                      <strong className="text-text-primary">Dorothy</strong> • Aging in place successfully
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Story 6 */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">Entrepreneurial Success</h3>
                    <p className="text-sm text-text-secondary">Business Development • Microloans • Legal Support</p>
                  </div>
                </div>
                <blockquote className="text-text-secondary mb-4 leading-relaxed">
                  "I had a dream to start my own catering business but couldn't get past the legal and 
                  financial barriers. The Ladder connected me with small business resources, helped me get 
                  a microloan, and navigate licensing. My business just celebrated its first anniversary!"
                </blockquote>
                <div className="pt-4 border-t border-surface-600">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">
                      <strong className="text-text-primary">Marcus</strong> • Successful business owner
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact by the Numbers */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Impact by the Numbers
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                These statistics represent real lives changed and barriers overcome in Birmingham
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* People Helped */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-400" />
                </div>
                <div className="text-3xl font-bold text-primary-400 mb-2">500+</div>
                <div className="text-text-secondary text-sm">Individuals Assisted</div>
                <div className="text-xs text-text-secondary mt-1">Since founding</div>
              </div>

              {/* Barriers Removed */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary-400" />
                </div>
                <div className="text-3xl font-bold text-primary-400 mb-2">1,200+</div>
                <div className="text-text-secondary text-sm">Barriers Removed</div>
                <div className="text-xs text-text-secondary mt-1">Multiple barriers per person</div>
              </div>

              {/* Partner Referrals */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary-400" />
                </div>
                <div className="text-3xl font-bold text-primary-400 mb-2">2,100+</div>
                <div className="text-text-secondary text-sm">Successful Referrals</div>
                <div className="text-xs text-text-secondary mt-1">To partner organizations</div>
              </div>

              {/* Success Rate */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-400" />
                </div>
                <div className="text-3xl font-bold text-primary-400 mb-2">95%</div>
                <div className="text-text-secondary text-sm">Success Rate</div>
                <div className="text-xs text-text-secondary mt-1">Barriers successfully resolved</div>
              </div>
            </div>

            {/* Breakdown by Barrier Type */}
            <div className="mt-16">
              <h3 className="text-2xl font-tiltwarp font-bold text-text-primary mb-8 text-center">
                Most Common Barriers Addressed
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-surface-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-text-primary font-medium">Housing & Utilities</span>
                    <span className="text-primary-400 font-semibold">32%</span>
                  </div>
                  <div className="w-full bg-surface-700 rounded-full h-2">
                    <div className="bg-primary-400 h-2 rounded-full" style={{width: '32%'}}></div>
                  </div>
                </div>

                <div className="bg-surface-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-text-primary font-medium">Employment & Income</span>
                    <span className="text-primary-400 font-semibold">28%</span>
                  </div>
                  <div className="w-full bg-surface-700 rounded-full h-2">
                    <div className="bg-primary-400 h-2 rounded-full" style={{width: '28%'}}></div>
                  </div>
                </div>

                <div className="bg-surface-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-text-primary font-medium">Healthcare Access</span>
                    <span className="text-primary-400 font-semibold">22%</span>
                  </div>
                  <div className="w-full bg-surface-700 rounded-full h-2">
                    <div className="bg-primary-400 h-2 rounded-full" style={{width: '22%'}}></div>
                  </div>
                </div>

                <div className="bg-surface-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-text-primary font-medium">Legal & Financial</span>
                    <span className="text-primary-400 font-semibold">18%</span>
                  </div>
                  <div className="w-full bg-surface-700 rounded-full h-2">
                    <div className="bg-primary-400 h-2 rounded-full" style={{width: '18%'}}></div>
                  </div>
                </div>

                <div className="bg-surface-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-text-primary font-medium">Family & Personal</span>
                    <span className="text-primary-400 font-semibold">15%</span>
                  </div>
                  <div className="w-full bg-surface-700 rounded-full h-2">
                    <div className="bg-primary-400 h-2 rounded-full" style={{width: '15%'}}></div>
                  </div>
                </div>

                <div className="bg-surface-800/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-text-primary font-medium">Education & Training</span>
                    <span className="text-primary-400 font-semibold">12%</span>
                  </div>
                  <div className="w-full bg-surface-700 rounded-full h-2">
                    <div className="bg-primary-400 h-2 rounded-full" style={{width: '12%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Testimonials */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                What Our Partners Say
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Partner organizations share how The Ladder improves outcomes for everyone
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* United Way Testimonial */}
              <div className="bg-surface-800/50 rounded-xl p-8 border border-primary-500/20">
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="w-8 h-8 text-primary-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-1">United Way Partnership</h3>
                    <p className="text-sm text-text-secondary">Emergency Assistance Program</p>
                  </div>
                </div>
                <blockquote className="text-text-secondary leading-relaxed mb-6">
                  "The Ladder has transformed how we serve Birmingham residents. Instead of people getting lost 
                  in our system or being referred to the wrong programs, The Ladder's pre-screening means we get 
                  clients who are perfect fits for our services. Our success rates have improved dramatically, 
                  and client satisfaction is at an all-time high."
                </blockquote>
                <div className="text-sm">
                  <p className="text-text-primary font-medium">Jennifer Martinez, Program Director</p>
                  <p className="text-text-secondary">United Way of Central Alabama</p>
                </div>
              </div>

              {/* Community Foundation Testimonial */}
              <div className="bg-surface-800/50 rounded-xl p-8 border border-primary-500/20">
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="w-8 h-8 text-primary-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-1">Community Foundation Partnership</h3>
                    <p className="text-sm text-text-secondary">Grant Programs & Community Development</p>
                  </div>
                </div>
                <blockquote className="text-text-secondary leading-relaxed mb-6">
                  "What impresses us most about The Ladder is their commitment to follow-through. Many organizations 
                  make referrals and move on. The Ladder stays engaged, advocates for their clients, and ensures 
                  our programs are working as intended. This partnership approach creates better outcomes for 
                  everyone involved."
                </blockquote>
                <div className="text-sm">
                  <p className="text-text-primary font-medium">David Thompson, Grants Manager</p>
                  <p className="text-text-secondary">Community Foundation of Greater Birmingham</p>
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
                Your Success Story Starts Here
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Every success story began with someone taking the first step to ask for help. 
                What barriers are preventing your success? Let's work together to remove them.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/get-help"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 text-lg"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Start Your Success Story
                </a>
                <a 
                  href="/donate"
                  className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300 text-lg"
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Help Create More Success Stories
                </a>
              </div>

              <div className="text-sm text-text-secondary">
                <strong className="text-text-primary">Join our success stories.</strong> 
                All services are free, confidential, and designed to create lasting change.
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Notice */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-surface-800/30 rounded-lg p-6 text-center">
              <p className="text-sm text-text-secondary">
                <strong className="text-text-primary">Privacy Protection:</strong> All success stories are shared with explicit written consent. 
                Names may be changed to protect privacy while maintaining the authenticity of each story. 
                If you'd like to share your success story, <a href="/contact" className="text-primary-400 hover:text-primary-300">contact us</a>.
              </p>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  )
}