import GlassNavigation from '/src/components/GlassNavigation'
import Footer from '/src/components/sitewide-footer'
import { Heart, Star, CheckCircle, ArrowRight, Users, TrendingUp, Award, Quote, Filter, Search, Calendar, MapPin, UserCheck } from 'lucide-react'
import ClientStoriesGrid from '/src/components/ClientStoriesGrid'

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
  const impactStats = [
    {
      icon: Users,
      number: "150+",
      label: "People Helped",
      description: "Birmingham residents assisted since 2021",
      color: "var(--ladder-blue)"
    },
    {
      icon: CheckCircle,
      number: "87%",
      label: "Success Rate",
      description: "Barriers successfully removed",
      color: "var(--ladder-green)"
    },
    {
      icon: Calendar,
      number: "24hr",
      label: "Response Time",
      description: "Average time to initial contact",
      color: "var(--ladder-red)"
    },
    {
      icon: Award,
      number: "100%",
      label: "Partner Referrals",
      description: "Work with trusted nonprofit partners",
      color: "var(--ladder-gold)"
    }
  ]

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <GlassNavigation />
      <div className="flex-1">
        
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-[var(--ladder-blue)] via-[var(--ladder-blue-light)] to-[var(--ladder-green)] overflow-hidden">
          {/* Glass morphism background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl"></div>
            <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-white/4 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="glass-card bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl">
                <Quote className="h-16 w-16 mx-auto mb-6 text-white" />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Real <span className="text-[var(--ladder-red)]">Success</span> Stories
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                  Every barrier removed represents a life changed. These are the stories of Birmingham residents 
                  who found their path forward through The Ladder's assistance and our partner network.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/get-help"
                    className="glass-button-accent inline-flex items-center justify-center px-8 py-3 bg-[var(--ladder-red)]/90 backdrop-blur-md text-white font-semibold rounded-xl border border-white/30 hover:bg-[var(--ladder-red)] transition-all duration-300"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Start Your Success Story
                  </a>
                  <a 
                    href="#stories"
                    className="glass-button-secondary inline-flex items-center justify-center px-8 py-3 bg-white/15 backdrop-blur-md text-white font-semibold rounded-xl border border-white/30 hover:bg-white/25 transition-all duration-300"
                  >
                    Read Stories Below
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactStats.map((stat, index) => (
                <div key={index} className="glass-card bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:bg-white/15 transition-all duration-300">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-white" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/90 font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-white/70">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Grid Section */}
        <section id="stories" className="relative py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          {/* Glass morphism background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-[var(--ladder-blue)]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-[var(--ladder-red)]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6">
                Stories of <span className="text-[var(--ladder-red)]">Transformation</span>
              </h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-4xl mx-auto leading-relaxed">
                Each story represents someone who refused to give up and found the help they needed to overcome life's barriers. 
                These are real people with real challenges who found real solutions through The Ladder's partnership network.
              </p>
            </div>

            {/* Client Stories Grid Component */}
            <ClientStoriesGrid />
          </div>
        </section>

        {/* Impact Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-6">
                Types of Barriers We Address
              </h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                Every individual faces unique challenges. Here are the most common barriers we help remove.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { category: "Transportation", percentage: 28, description: "Vehicle repairs, rentals, purchases" },
                { category: "Financial Assistance", percentage: 24, description: "Emergency funds, debt relief, bills" },
                { category: "Emergency Housing", percentage: 18, description: "Rent assistance, deposits, utilities" },
                { category: "Recovery Support", percentage: 12, description: "Rehabilitation, counseling, life coaching" },
                { category: "Employment Support", percentage: 8, description: "Equipment, training, certifications" },
                { category: "Crisis Support", percentage: 6, description: "Emergency intervention, multiple barriers" },
                { category: "Home Repair", percentage: 3, description: "Safety improvements, essential repairs" },
                { category: "Utility Assistance", percentage: 1, description: "Water, power, heating bills" }
              ].map((item, index) => (
                <div key={index} className="glass-card bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-xl hover:bg-white/80 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[var(--ladder-blue)] mb-2">{item.percentage}%</div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-2">{item.category}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[var(--ladder-red)] h-2 rounded-full transition-all duration-1000" style={{width: `${item.percentage}%`}}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Impact */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-6">
                Partnership Impact
              </h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                Our success comes from working alongside Birmingham's trusted nonprofit organizations
              </p>
            </div>

            <div className="glass-card bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <Quote className="w-12 h-12 text-[var(--ladder-red)] mb-6" />
                  <blockquote className="text-xl text-[var(--text-secondary)] leading-relaxed mb-6 italic">
                    "Grace Klein Community is thankful for our partnership with The Ladder. When one of our long-term volunteers found herself in a difficult financial situation after taking in extra people and facing personal illness, The Ladder assisted her with a water bill. The Ladder empowered our volunteer to continue living out Jesus' teachings in John 15:13, 'Greater love has no one than this: to lay down one's life for one's friends.'"
                  </blockquote>
                  <div className="text-[var(--text-primary)]">
                    <p className="font-semibold">Jenny Waltman</p>
                    <p className="text-[var(--text-secondary)]">Grace Klein Community</p>
                  </div>
                </div>
                <div className="glass-card bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6">
                  <h3 className="font-bold text-[var(--text-primary)] mb-4">Partnership Benefits</h3>
                  <div className="space-y-3">
                    {[
                      "Fill gaps in services",
                      "Extend impact reach", 
                      "Provide specialized help",
                      "Maintain relationships",
                      "Ensure accountability"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[var(--ladder-green)] flex-shrink-0" />
                        <span className="text-[var(--text-secondary)]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-[var(--ladder-blue)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Every success story began with someone taking the first step to ask for help. 
                What barriers are preventing your success? Let's work together to remove them.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/get-help"
                  className="glass-button-accent inline-flex items-center justify-center px-8 py-4 bg-[var(--ladder-red)]/90 backdrop-blur-md text-white font-bold rounded-xl border border-white/30 hover:bg-[var(--ladder-red)] transition-all duration-300 text-lg"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Apply for Help
                </a>
                <a 
                  href="/donate"
                  className="glass-button-secondary inline-flex items-center justify-center px-8 py-4 bg-white/15 backdrop-blur-md border border-white/30 text-white font-semibold rounded-xl hover:bg-white/25 transition-all duration-300 text-lg"
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Support More Success Stories
                </a>
              </div>

              <div className="text-sm text-white/80">
                <strong className="text-white">Join our community of success stories.</strong> 
                All services are free, confidential, and designed to create lasting change.
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Notice */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl p-6 text-center shadow-lg">
              <p className="text-sm text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Privacy Protection:</strong> All success stories are shared with explicit written consent. 
                Names may be changed to protect privacy while maintaining the authenticity of each story. 
                Photos are used with permission. If you'd like to share your success story, <a href="/contact" className="text-[var(--ladder-red)] hover:text-[var(--ladder-red)]/80 transition-colors">contact us</a>.
              </p>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  )
}