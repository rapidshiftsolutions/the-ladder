'use client'

import { ArrowRight, Building2, Users, Handshake, Target, CheckCircle, AlertTriangle, Heart } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function DifferentiationSection() {
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

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}
    >
      {/* iOS-style ambient background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #FF950015, transparent)' }}
        />
        <div 
          className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #007AFF15, transparent)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-in' : 'opacity-0'}`}>
          <div 
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{
              background: 'rgba(255, 149, 0, 0.1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              color: '#FF9500',
              border: '1px solid rgba(255, 149, 0, 0.2)'
            }}
          >
            What Makes Us Different
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6" style={{ color: '#1d1d1f' }}>
            How is The Ladder
            <br />
            <span style={{ color: '#FF9500' }}>Different from Other Nonprofits?</span>
          </h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto" style={{ color: '#86868b' }}>
            Even with all the nonprofits in our community, there are still so many unmet needs. 
            Most nonprofits focus on only one cause, then develop programs for that specific issue.
          </p>
        </div>

        {/* The Problem */}
        <div className={`mb-20 ${isVisible ? 'animate-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          <div 
            className="relative p-12 rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(255, 59, 48, 0.05)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              border: '1px solid rgba(255, 59, 48, 0.1)',
              boxShadow: `
                0 20px 60px rgba(255, 59, 48, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.3)
              `
            }}
          >
            <div className="text-center">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8"
                style={{
                  background: 'rgba(255, 59, 48, 0.15)',
                  border: '1px solid rgba(255, 59, 48, 0.2)'
                }}
              >
                <AlertTriangle className="w-8 h-8" style={{ color: '#FF3B30' }} />
              </div>
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#1d1d1f' }}>
                The Gap That Exists
              </h3>
              <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#4a5568' }}>
                There's nothing wrong with specialized nonprofits! As a matter of fact, we love those nonprofits! 
                But sometimes a person's specific barrier falls <strong>outside the scope</strong> of any single organization's offerings.
              </p>
            </div>
          </div>
        </div>

        {/* Traditional vs The Ladder Approach */}
        <div className={`grid lg:grid-cols-2 gap-12 mb-20 ${isVisible ? 'animate-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          {/* Traditional Approach */}
          <div 
            className="p-10 rounded-3xl"
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
            <div className="text-center mb-8">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                style={{
                  background: 'rgba(107, 114, 128, 0.15)',
                  border: '1px solid rgba(107, 114, 128, 0.2)'
                }}
              >
                <Building2 className="w-8 h-8" style={{ color: '#6B7280' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1d1d1f' }}>
                Traditional Nonprofits
              </h3>
              <p className="text-base" style={{ color: '#86868b' }}>
                Focus on specific causes
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Education programs only',
                'Health services only', 
                'Homelessness programs only',
                'Single-issue focus',
                'Rigid program structures'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div 
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: '#6B7280' }}
                  />
                  <span className="text-base" style={{ color: '#4a5568' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* The Ladder Approach */}
          <div 
            className="p-10 rounded-3xl relative"
            style={{
              background: 'rgba(52, 199, 89, 0.05)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              border: '1px solid rgba(52, 199, 89, 0.2)',
              boxShadow: `
                0 8px 32px rgba(52, 199, 89, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.3)
              `
            }}
          >
            {/* Winner badge */}
            <div 
              className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl text-sm font-bold text-white"
              style={{
                background: 'linear-gradient(135deg, #34C759, #34C759dd)',
                boxShadow: '0 4px 20px rgba(52, 199, 89, 0.4)'
              }}
            >
              ✨ The Ladder Way
            </div>

            <div className="text-center mb-8">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                style={{
                  background: 'rgba(52, 199, 89, 0.15)',
                  border: '1px solid rgba(52, 199, 89, 0.2)'
                }}
              >
                <Heart className="w-8 h-8" style={{ color: '#34C759' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1d1d1f' }}>
                The Ladder
              </h3>
              <p className="text-base" style={{ color: '#86868b' }}>
                Focus on people over problems
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Individual-specific solutions',
                'Cross-barrier assistance', 
                'Partnership-based approach',
                'Person-centered focus',
                'Flexible, adaptive support'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#34C759' }} />
                  <span className="text-base font-medium" style={{ color: '#1d1d1f' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnership Philosophy */}
        <div className={`${isVisible ? 'animate-in-delayed' : 'opacity-0'}`}>
          <div 
            className="relative p-12 rounded-3xl text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.9), rgba(0, 122, 255, 0.8))',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: `
                0 20px 60px rgba(0, 122, 255, 0.3),
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
                className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-8"
                style={{
                  background: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <Handshake className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-4xl font-bold text-white mb-8 leading-tight">
                That's Why We Partner With Them
              </h3>
              <p className="text-2xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto">
                We work alongside Birmingham's trusted nonprofit organizations to meet needs that might fall outside their specific focus areas. 
                <strong className="text-white"> We're not competing—we're collaborating.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/partners"
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    color: '#007AFF',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 4px 20px rgba(255, 255, 255, 0.3)'
                  }}
                >
                  Meet Our Partners
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/how-we-help"
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                  }}
                >
                  See How It Works
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