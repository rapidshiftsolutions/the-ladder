import GlassNavigation from '/src/components/GlassNavigation'
import Footer from '/src/components/sitewide-footer'
import { Heart, Star, CheckCircle, ArrowRight, Users, TrendingUp, Award, Quote, Filter, Search, Calendar, MapPin, UserCheck, Clock, Sparkles, Target } from 'lucide-react'
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
      number: "500+",
      label: "Lives Changed",
      description: "Birmingham residents assisted since 2021",
      color: "#007AFF"
    },
    {
      icon: CheckCircle,
      number: "95%",
      label: "Success Rate",
      description: "Barriers successfully removed",
      color: "#34C759"
    },
    {
      icon: Clock,
      number: "30 Days",
      label: "Avg Resolution",
      description: "Average time to barrier removal",
      color: "#FF9500"
    },
    {
      icon: Heart,
      number: "85%",
      label: "Long-term Stability",
      description: "Sustained success after assistance",
      color: "#FF3B30"
    }
  ]

  return (
    <>
      <GlassNavigation />
      <main className="min-h-screen">
        
        {/* iOS-style Hero Section */}
        <section 
          className="relative py-32 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #007AFF 0%, #34C759 100%)'
          }}
        >
          {/* iOS-style ambient background */}
          <div className="absolute inset-0">
            <div 
              className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent)' }}
            />
            <div 
              className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent)' }}
            />
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <div 
                className="relative p-12 rounded-3xl overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: `
                    0 20px 60px rgba(0, 0, 0, 0.15),
                    inset 0 1px 0 rgba(255, 255, 255, 0.3)
                  `
                }}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div 
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full"
                    style={{ background: 'radial-gradient(circle, white, transparent)' }}
                  />
                  <div 
                    className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full"
                    style={{ background: 'radial-gradient(circle, white, transparent)' }}
                  />
                </div>

                <div className="relative z-10">
                  <div 
                    className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-8"
                    style={{
                      background: 'rgba(255, 255, 255, 0.25)',
                      backdropFilter: 'blur(20px)'
                    }}
                  >
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  
                  <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}>
                    Real Success Stories
                    <br />
                    <span className="text-4xl sm:text-5xl" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Barriers Removed, Lives Changed</span>
                  </h1>
                  
                  <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-10">
                    Every barrier removed represents a life transformed. These are the stories of Birmingham residents 
                    who found their path forward through The Ladder's partnership network.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="/get-help"
                      className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(20px)',
                        color: '#007AFF',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 4px 20px rgba(255, 255, 255, 0.3)'
                      }}
                    >
                      <Heart className="w-5 h-5 mr-3" />
                      Start Your Success Story
                      <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a 
                      href="#stories"
                      className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105"
                      style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                      }}
                    >
                      View All Stories
                      <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* iOS-style Impact Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {impactStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div 
                    className="relative p-8 rounded-3xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(30px)',
                      WebkitBackdropFilter: 'blur(30px)',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      boxShadow: `
                        0 8px 32px rgba(0, 0, 0, 0.12),
                        inset 0 1px 0 rgba(255, 255, 255, 0.3)
                      `
                    }}
                  >
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                      style={{
                        background: 'rgba(255, 255, 255, 0.25)',
                        backdropFilter: 'blur(20px)'
                      }}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-white/90 font-semibold mb-2">{stat.label}</div>
                    <div className="text-sm text-white/70 leading-relaxed">{stat.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* iOS-style Success Stories Grid Section */}
        <section 
          id="stories" 
          className="relative py-32 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
          }}
        >
          {/* iOS-style ambient background */}
          <div className="absolute inset-0">
            <div 
              className="absolute top-20 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
              style={{ background: 'radial-gradient(circle, #007AFF15, transparent)' }}
            />
            <div 
              className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
              style={{ background: 'radial-gradient(circle, #34C75915, transparent)' }}
            />
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <div 
                className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                style={{
                  background: 'rgba(52, 199, 89, 0.1)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  color: '#34C759',
                  border: '1px solid rgba(52, 199, 89, 0.2)'
                }}
              >
                Transformation Stories
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold mb-6" style={{ color: '#1d1d1f' }}>
                Stories of
                <br />
                <span style={{ color: '#34C759' }}>Real Transformation</span>
              </h2>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto" style={{ color: '#86868b' }}>
                Each story represents someone who refused to give up and found the help they needed to overcome life's barriers. 
                These are real people with real challenges who found real solutions through The Ladder's partnership network.
              </p>
            </div>

            {/* Client Stories Grid Component */}
            <ClientStoriesGrid />
          </div>
        </section>

        {/* iOS-style Impact Categories */}
        <section className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <div 
                className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                style={{
                  background: 'rgba(0, 122, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  color: '#007AFF',
                  border: '1px solid rgba(0, 122, 255, 0.2)'
                }}
              >
                Barrier Categories
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold mb-6" style={{ color: '#1d1d1f' }}>
                Types of Barriers
                <br />
                <span style={{ color: '#007AFF' }}>We Address</span>
              </h2>
              <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#86868b' }}>
                Every individual faces unique challenges. Here are the most common barriers we help remove.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: "Transportation", percentage: 35, description: "Vehicle repairs, rentals, purchases", color: '#007AFF', icon: '🚗' },
                { category: "Housing & Utilities", percentage: 28, description: "Rent assistance, deposits, utilities", color: '#34C759', icon: '🏠' },
                { category: "Financial Relief", percentage: 22, description: "Emergency funds, debt relief, bills", color: '#FF9500', icon: '💰' },
                { category: "Recovery Support", percentage: 15, description: "Rehabilitation, counseling, life coaching", color: '#FF3B30', icon: '🌱' }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                  style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(30px)',
                    WebkitBackdropFilter: 'blur(30px)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    boxShadow: `
                      0 8px 32px rgba(0, 0, 0, 0.12),
                      inset 0 1px 0 rgba(255, 255, 255, 0.3)
                    `
                  }}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <div className="text-4xl font-bold mb-2" style={{ color: item.color }}>{item.percentage}%</div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: '#1d1d1f' }}>{item.category}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#86868b' }}>{item.description}</p>
                  </div>
                  <div className="mt-6">
                    <div 
                      className="w-full rounded-full h-3"
                      style={{ background: 'rgba(0, 0, 0, 0.05)' }}
                    >
                      <div 
                        className="h-3 rounded-full transition-all duration-1000 group-hover:animate-pulse" 
                        style={{ width: `${item.percentage}%`, background: item.color }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* iOS-style Partner Impact */}
        <section 
          className="py-32 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)'
          }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <div 
                className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                style={{
                  background: 'rgba(255, 59, 48, 0.1)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  color: '#FF3B30',
                  border: '1px solid rgba(255, 59, 48, 0.2)'
                }}
              >
                Partnership Success
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold mb-6" style={{ color: '#1d1d1f' }}>
                Partnership
                <br />
                <span style={{ color: '#FF3B30' }}>Impact</span>
              </h2>
              <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#86868b' }}>
                Our success comes from working alongside Birmingham's trusted nonprofit organizations
              </p>
            </div>

            <div 
              className="relative p-12 rounded-3xl overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                boxShadow: `
                  0 20px 60px rgba(0, 0, 0, 0.15),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3)
                `
              }}
            >
              <div className="grid lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-2">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                    style={{
                      background: 'rgba(255, 59, 48, 0.15)',
                      border: '1px solid rgba(255, 59, 48, 0.2)'
                    }}
                  >
                    <Quote className="w-8 h-8" style={{ color: '#FF3B30' }} />
                  </div>
                  <blockquote className="text-2xl leading-relaxed mb-8 italic" style={{ color: '#4a5568' }}>
                    "Grace Klein Community is thankful for our partnership with The Ladder. When one of our long-term volunteers found herself in a difficult financial situation after taking in extra people and facing personal illness, The Ladder assisted her with a water bill. The Ladder empowered our volunteer to continue living out Jesus' teachings in John 15:13, 'Greater love has no one than this: to lay down one's life for one's friends.'"
                  </blockquote>
                  <div>
                    <p className="font-bold text-xl" style={{ color: '#1d1d1f' }}>Jenny Waltman</p>
                    <p className="text-lg" style={{ color: '#86868b' }}>Grace Klein Community</p>
                  </div>
                </div>
                <div 
                  className="p-8 rounded-3xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    boxShadow: `
                      0 8px 32px rgba(0, 0, 0, 0.12),
                      inset 0 1px 0 rgba(255, 255, 255, 0.3)
                    `
                  }}
                >
                  <h3 className="font-bold text-xl mb-6" style={{ color: '#1d1d1f' }}>Partnership Benefits</h3>
                  <div className="space-y-4">
                    {[
                      "Fill gaps in services",
                      "Extend impact reach", 
                      "Provide specialized help",
                      "Maintain relationships",
                      "Ensure accountability"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#34C759' }} />
                        <span className="text-base" style={{ color: '#4a5568' }}>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* iOS-style Call to Action */}
        <section 
          className="py-32 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #007AFF 0%, #34C759 100%)'
          }}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div 
              className="relative p-12 rounded-3xl overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: `
                  0 20px 60px rgba(0, 0, 0, 0.15),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3)
                `
              }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div 
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full"
                  style={{ background: 'radial-gradient(circle, white, transparent)' }}
                />
                <div 
                  className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full"
                  style={{ background: 'radial-gradient(circle, white, transparent)' }}
                />
              </div>

              <div className="relative z-10">
                <div 
                  className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-8"
                  style={{
                    background: 'rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <Target className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
                  Ready to Write Your Success Story?
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Every success story began with someone taking the first step to ask for help. 
                  What barriers are preventing your success? Let's work together to remove them.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a 
                    href="/get-help"
                    className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(20px)',
                      color: '#007AFF',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 4px 20px rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    <Heart className="w-5 h-5 mr-3" />
                    Apply for Help
                    <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a 
                    href="/donate"
                    className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    <TrendingUp className="w-5 h-5 mr-3" />
                    Support More Success Stories
                    <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                <div className="text-base text-white/90">
                  <strong className="text-white">Join our community of success stories.</strong> 
                  <br className="sm:hidden" />
                  All services are free, confidential, and designed to create lasting change.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* iOS-style Privacy Notice */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div 
              className="p-8 rounded-3xl text-center"
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                boxShadow: `
                  0 8px 32px rgba(0, 0, 0, 0.12),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3)
                `
              }}
            >
              <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                <strong style={{ color: '#1d1d1f' }}>Privacy Protection:</strong> All success stories are shared with explicit written consent. 
                Names may be changed to protect privacy while maintaining the authenticity of each story. 
                Photos are used with permission. If you'd like to share your success story, <a href="/contact" className="font-semibold transition-colors hover:opacity-80" style={{ color: '#007AFF' }}>contact us</a>.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}