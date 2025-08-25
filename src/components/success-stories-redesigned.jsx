'use client'

import { Heart, ArrowRight, Star, CheckCircle, Clock, User } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import testimoniesData from '/src/data/testimonies.json'

export default function SuccessStoriesRedesigned() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Get first 3 stories from JSON for homepage display
  const stories = testimoniesData.stories.slice(0, 3).map(story => ({
    name: story.name,
    situation: story.situation,
    barrier: story.barriers[0], // Use first barrier as main barrier
    outcome: story.outcomes[0], // Use first outcome as summary
    timeframe: story.timeframe,
    quote: story.quote,
    rating: story.rating,
    category: story.category
  }))

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 overflow-hidden" 
      id="success-stories"
      style={{
        background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)'
      }}
    >
      {/* iOS-style ambient background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #34C75915, transparent)' }}
        />
        <div 
          className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, #007AFF15, transparent)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* iOS-style header */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-in' : 'opacity-0'}`}>
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
            Real Impact Stories
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6" style={{ color: '#1d1d1f' }}>
            Success Stories
            <br />
            <span style={{ color: '#34C759' }}>Barriers Removed, Lives Changed</span>
          </h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#86868b' }}>
            Every person we help has a unique story. These are just a few examples 
            of how removing specific barriers leads to lasting transformation.
          </p>
        </div>

        {/* iOS-style impact stats */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 ${isVisible ? 'animate-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          {[
            { number: '500+', label: 'Lives Changed', icon: User, color: '#007AFF' },
            { number: '95%', label: 'Success Rate', icon: CheckCircle, color: '#34C759' },
            { number: '30 Days', label: 'Avg Resolution', icon: Clock, color: '#FF9500' },
            { number: '85%', label: 'Long-term Stability', icon: Heart, color: '#FF3B30' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div 
                className="relative p-6 rounded-3xl transition-all duration-500 hover:scale-105"
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
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: `${stat.color}15`,
                    border: `1px solid ${stat.color}20`
                  }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#1d1d1f' }}>
                  {stat.number}
                </div>
                <div className="text-sm" style={{ color: '#86868b' }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* iOS-style story cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`group ${isVisible ? 'animate-up' : 'opacity-0'}`}
              style={{ animationDelay: `${400 + index * 150}ms` }}
            >
              <div 
                className="relative p-8 rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 h-full flex flex-col"
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
                {/* Category badge */}
                <div 
                  className="absolute -top-3 -right-3 px-3 py-1.5 rounded-2xl text-xs font-semibold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #34C759, #34C759dd)',
                    boxShadow: '0 4px 20px rgba(52, 199, 89, 0.4)'
                  }}
                >
                  {story.category}
                </div>

                {/* Header with rating */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#1d1d1f' }}>
                      {story.name}
                    </h3>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < story.rating ? 'fill-current text-yellow-500' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(52, 199, 89, 0.15)',
                      border: '1px solid rgba(52, 199, 89, 0.2)'
                    }}
                  >
                    <Heart className="w-6 h-6" style={{ color: '#34C759' }} />
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-base leading-relaxed mb-6 flex-grow italic" style={{ color: '#4a5568' }}>
                  "{story.quote.length > 150 ? story.quote.substring(0, 150) + '...' : story.quote}"
                </blockquote>

                {/* Details */}
                <div className="space-y-4">
                  <div 
                    className="p-4 rounded-2xl"
                    style={{
                      background: 'rgba(52, 199, 89, 0.05)',
                      border: '1px solid rgba(52, 199, 89, 0.1)'
                    }}
                  >
                    <div className="text-sm font-semibold mb-1" style={{ color: '#34C759' }}>
                      Primary Barrier
                    </div>
                    <div className="text-sm" style={{ color: '#4a5568' }}>
                      {story.barrier}
                    </div>
                  </div>
                  
                  <div 
                    className="p-4 rounded-2xl"
                    style={{
                      background: 'rgba(0, 122, 255, 0.05)',
                      border: '1px solid rgba(0, 122, 255, 0.1)'
                    }}
                  >
                    <div className="text-sm font-semibold mb-1" style={{ color: '#007AFF' }}>
                      Outcome Achieved
                    </div>
                    <div className="text-sm" style={{ color: '#4a5568' }}>
                      {story.outcome}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs" style={{ color: '#86868b' }}>
                      Timeframe: {story.timeframe}
                    </span>
                    <div 
                      className="w-8 h-1 rounded-full transition-all duration-300 group-hover:w-12"
                      style={{ background: '#34C759' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* iOS-style CTA section */}
        <div className={`relative ${isVisible ? 'animate-in-delayed' : 'opacity-0'}`}>
          <div 
            className="relative p-12 rounded-3xl text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(52, 199, 89, 0.9), rgba(52, 199, 89, 0.8))',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: `
                0 20px 60px rgba(52, 199, 89, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2)
              `
            }}
          >
            {/* Subtle background pattern */}
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
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <Heart className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Ready to Share Your Success Story?
              </h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Join hundreds of Birmingham residents who've overcome their barriers with The Ladder's help
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/success-stories"
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    color: '#34C759',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 4px 20px rgba(255, 255, 255, 0.3)'
                  }}
                >
                  Read All Success Stories
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/get-help"
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                  }}
                >
                  Get Help Today
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes animate-up {
          from {
            opacity: 0;
            transform: translateY(32px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes animate-in-delayed {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-in {
          animation: animate-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-up {
          animation: animate-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-in-delayed {
          animation: animate-in-delayed 1s cubic-bezier(0.16, 1, 0.3, 1) 600ms forwards;
        }

        /* iOS system font stack */
        * {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
        }
      `}</style>
    </section>
  )
}