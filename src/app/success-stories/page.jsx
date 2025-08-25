import GlassNavigation from '/src/components/GlassNavigation'
import Footer from '/src/components/sitewide-footer'
import { Heart, Star, CheckCircle, ArrowRight, Users, TrendingUp, Award, Quote } from 'lucide-react'
import testimoniesData from '/src/data/testimonies.json'

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
  const { featured, stories, partnerTestimonials, statistics } = testimoniesData

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <GlassNavigation />
      <div className="flex-1">
        
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20 bg-gradient-to-br from-[#2C3E50] to-[#34495E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                <span className="text-[#E74C3C]">Success</span> Stories
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Every barrier removed represents a life changed. These are the stories of Birmingham residents 
                who found their path forward through The Ladder's assistance and our partner network.
              </p>
            </div>

            {/* Impact Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E74C3C] mb-2">{statistics.successRate}%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E74C3C] mb-2">{statistics.averageBarriersPerPerson}</div>
                <div className="text-white/80">Avg. Barriers Removed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E74C3C] mb-2">{statistics.averageResolutionTime}</div>
                <div className="text-white/80">Avg. Resolution Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E74C3C] mb-2">{statistics.longTermStability}%</div>
                <div className="text-white/80">Long-term Stability</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Success Story */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
                Featured Success Story
              </h2>
              <p className="text-xl text-[#4A5568] max-w-3xl mx-auto">
                Real people, real barriers, real solutions
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-6">
                    <Quote className="w-8 h-8 text-[#E74C3C] mr-3" />
                    <h3 className="text-2xl font-bold text-[#1A1A1A]">
                      {featured.title}
                    </h3>
                  </div>
                  <div className="space-y-4 text-[#4A5568]">
                    {featured.fullTestimony.map((paragraph, index) => (
                      <p key={index} className="text-lg leading-relaxed">
                        "{paragraph}"
                      </p>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-[#4A5568]">
                      <strong className="text-[#1A1A1A]">{featured.name}, Birmingham resident</strong> • 
                      Barriers removed: {featured.barriers.join(', ')} • 
                      Time to resolution: {featured.timeframe}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-[#1A1A1A] mb-4">Outcome Highlights</h4>
                    <div className="space-y-3">
                      {featured.outcomes.map((outcome, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#E74C3C] flex-shrink-0" />
                          <span className="text-[#4A5568] text-sm">{outcome}</span>
                        </div>
                      ))}
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
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
                More Success Stories
              </h2>
              <p className="text-xl text-[#4A5568] max-w-3xl mx-auto">
                Each story represents someone who refused to give up and found the help they needed
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {stories.map((story, index) => (
                <div key={story.id} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#E74C3C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-[#E74C3C]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">{story.title}</h3>
                      <p className="text-sm text-[#4A5568]">{story.category}</p>
                    </div>
                  </div>
                  <blockquote className="text-[#4A5568] mb-4 leading-relaxed">
                    "{story.quote}"
                  </blockquote>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#4A5568]">
                        <strong className="text-[#1A1A1A]">{story.name}</strong> • {story.currentStatus.split(',')[0]}
                      </span>
                      <div className="flex items-center gap-1">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-[#E74C3C] fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact by the Numbers */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
                Impact by the Numbers
              </h2>
              <p className="text-xl text-[#4A5568] max-w-3xl mx-auto">
                These statistics represent real lives changed and barriers overcome in Birmingham
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* People Helped */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E74C3C]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#E74C3C]" />
                </div>
                <div className="text-3xl font-bold text-[#E74C3C] mb-2">{statistics.totalIndividuals}+</div>
                <div className="text-[#4A5568] text-sm">Individuals Assisted</div>
                <div className="text-xs text-[#4A5568] mt-1">Since founding</div>
              </div>

              {/* Barriers Removed */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E74C3C]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#E74C3C]" />
                </div>
                <div className="text-3xl font-bold text-[#E74C3C] mb-2">{statistics.totalBarriers.toLocaleString()}+</div>
                <div className="text-[#4A5568] text-sm">Barriers Removed</div>
                <div className="text-xs text-[#4A5568] mt-1">Multiple barriers per person</div>
              </div>

              {/* Partner Referrals */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E74C3C]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#E74C3C]" />
                </div>
                <div className="text-3xl font-bold text-[#E74C3C] mb-2">{statistics.successfulReferrals.toLocaleString()}+</div>
                <div className="text-[#4A5568] text-sm">Successful Referrals</div>
                <div className="text-xs text-[#4A5568] mt-1">To partner organizations</div>
              </div>

              {/* Success Rate */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E74C3C]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#E74C3C]" />
                </div>
                <div className="text-3xl font-bold text-[#E74C3C] mb-2">{statistics.successRate}%</div>
                <div className="text-[#4A5568] text-sm">Success Rate</div>
                <div className="text-xs text-[#4A5568] mt-1">Barriers successfully resolved</div>
              </div>
            </div>

            {/* Breakdown by Barrier Type */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8 text-center">
                Most Common Barriers Addressed
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(statistics.barrierTypes).map(([key, percentage]) => {
                  const labels = {
                    transportation: 'Transportation',
                    housingUtilities: 'Housing & Utilities', 
                    employmentIncome: 'Employment & Income',
                    healthcareMedical: 'Healthcare & Medical',
                    debtFinancial: 'Debt & Financial',
                    familySupport: 'Family Support',
                    recoveryAddiction: 'Recovery & Addiction',
                    educationTraining: 'Education & Training'
                  }
                  return (
                    <div key={key} className="bg-white rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#1A1A1A] font-medium">{labels[key]}</span>
                        <span className="text-[#E74C3C] font-semibold">{percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#E74C3C] h-2 rounded-full" style={{width: `${percentage}%`}}></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Partner Testimonials */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
                What Our Partners Say
              </h2>
              <p className="text-xl text-[#4A5568] max-w-3xl mx-auto">
                Partner organizations share how The Ladder improves outcomes for everyone
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {partnerTestimonials.map((partner, index) => (
                <div key={index} className="bg-white rounded-xl p-8 border border-gray-200">
                  <div className="flex items-start gap-4 mb-6">
                    <Quote className="w-8 h-8 text-[#E74C3C] flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-1">{partner.organization}</h3>
                      <p className="text-sm text-[#4A5568]">{partner.program}</p>
                    </div>
                  </div>
                  <blockquote className="text-[#4A5568] leading-relaxed mb-6">
                    "{partner.testimonial}"
                  </blockquote>
                  <div className="text-sm">
                    <p className="text-[#1A1A1A] font-medium">{partner.contactName}, {partner.title}</p>
                    <p className="text-[#4A5568]">{partner.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#2C3E50]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 lg:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Your Success Story Starts Here
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Every success story began with someone taking the first step to ask for help. 
                What barriers are preventing your success? Let's work together to remove them.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/get-help"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#E74C3C] text-white font-bold rounded-lg hover:bg-[#C0392B] transition-all duration-300 text-lg"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Start Your Success Story
                </a>
                <a 
                  href="/donate"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 text-lg"
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Help Create More Success Stories
                </a>
              </div>

              <div className="text-sm text-white/80">
                <strong className="text-white">Join our success stories.</strong> 
                All services are free, confidential, and designed to create lasting change.
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Notice */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <p className="text-sm text-[#4A5568]">
                <strong className="text-[#1A1A1A]">Privacy Protection:</strong> All success stories are shared with explicit written consent. 
                Names may be changed to protect privacy while maintaining the authenticity of each story. 
                If you'd like to share your success story, <a href="/contact" className="text-[#E74C3C] hover:text-[#C0392B]">contact us</a>.
              </p>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  )
}