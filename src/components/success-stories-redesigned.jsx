'use client'

import { Quote, ArrowRight, Star } from 'lucide-react'
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
    rating: story.rating
  }))

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden" id="success-stories">
      {/* Glass morphism background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[var(--ladder-red)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[var(--ladder-blue)]/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-sm uppercase tracking-wider text-[#E74C3C] font-semibold mb-3">
            Real Impact
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            Success Stories
            <span className="block text-[#2C3E50] mt-2">Barriers Removed, Lives Changed</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568] max-w-3xl mx-auto px-4">
            Every individual we help has a unique story. Here are just a few examples 
            of how removing specific barriers leads to lasting success.
          </p>
        </div>

        {/* Stories Grid - Mobile First */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`group ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl p-6 sm:p-8 shadow-xl hover:bg-white/80 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 glass-card bg-gradient-to-br from-[#E74C3C]/90 to-[#C0392B]/90 backdrop-blur-md border border-white/30 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-[#1A1A1A] text-lg">{story.name}</h3>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#E74C3C] text-[#E74C3C]" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-[#4A5568] mb-6 italic leading-relaxed flex-grow">
                  "{story.quote}"
                </blockquote>

                {/* Details */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-start">
                    <span className="text-xs font-semibold text-[#E74C3C] uppercase tracking-wider min-w-[80px]">
                      Barrier:
                    </span>
                    <span className="text-sm text-[#4A5568] ml-2">
                      {story.barrier}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-xs font-semibold text-[#2C3E50] uppercase tracking-wider min-w-[80px]">
                      Outcome:
                    </span>
                    <span className="text-sm text-[#4A5568] ml-2">
                      {story.outcome}
                    </span>
                  </div>
                  <div className="flex items-center pt-2">
                    <span className="text-xs text-[#718096]">
                      Journey completed in {story.timeframe}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <a
            href="/success-stories"
            className="group inline-flex items-center justify-center min-h-[48px] px-8 py-3 bg-[#2C3E50] text-white font-semibold rounded-xl hover:bg-[#34495E] transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Read More Success Stories
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}