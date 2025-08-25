'use client'

import { Users, Target, Heart, Handshake, ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function HowWeHelpRedesigned() {
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

  const steps = [
    {
      icon: Users,
      title: "Partner Identifies Need",
      description: "A nonprofit partner identifies someone facing a barrier they can't overcome.",
      accent: "#007AFF"
    },
    {
      icon: Target,
      title: "We Assess the Barrier",
      description: "The Ladder interviews the person to identify the specific 'missing rung.'",
      accent: "#FF9500"
    },
    {
      icon: Heart,
      title: "Provide Targeted Support", 
      description: "We work with the individual to remove their specific barrier.",
      accent: "#FF3B30"
    },
    {
      icon: Handshake,
      title: "Follow Up for Success",
      description: "Ongoing support and accountability to ensure sustainable progress.",
      accent: "#34C759"
    }
  ]

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
          className="absolute top-20 left-1/4 w-80 h-80 rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, #007AFF15, transparent)' }}
        />
        <div 
          className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #FF3B3015, transparent)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* iOS-style header */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-in' : 'opacity-0'}`}>
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
            Our Process
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6" style={{ color: '#1d1d1f' }}>
            How We Help People
            <br />
            <span style={{ color: '#007AFF' }}>Climb Over Barriers</span>
          </h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: '#86868b' }}>
            We focus on people over problems, addressing individual roadblocks 
            rather than specific issues. Each person has unique barriers preventing their progress.
          </p>
        </div>

        {/* iOS-style process cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative ${isVisible ? 'animate-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* iOS glass card */}
              <div 
                className="relative p-8 rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
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
                {/* Step number */}
                <div 
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${step.accent}, ${step.accent}dd)`,
                    boxShadow: `0 4px 20px ${step.accent}40`
                  }}
                >
                  {index + 1}
                </div>

                {/* Icon container */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${step.accent}10`,
                    border: `1px solid ${step.accent}20`
                  }}
                >
                  <step.icon 
                    className="w-8 h-8" 
                    style={{ color: step.accent }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1d1d1f' }}>
                  {step.title}
                </h3>
                <p className="leading-relaxed" style={{ color: '#86868b' }}>
                  {step.description}
                </p>

                {/* iOS-style subtle indicator */}
                <div 
                  className="absolute bottom-6 left-8 w-8 h-1 rounded-full transition-all duration-300 group-hover:w-12"
                  style={{ background: step.accent }}
                />
              </div>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-gray-300 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* iOS-style mission card */}
        <div className={`relative ${isVisible ? 'animate-in-delayed' : 'opacity-0'}`}>
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
              {/* Quote icon */}
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <Heart className="w-8 h-8 text-white" />
              </div>

              {/* Quote */}
              <blockquote className="text-3xl sm:text-4xl font-bold text-white mb-12 leading-tight">
                "We focus on{' '}
                <span 
                  className="px-3 py-1 rounded-xl"
                  style={{ background: 'rgba(255, 59, 48, 0.8)' }}
                >
                  people over problems
                </span>
                , helping individuals one by one climb over very specific barriers."
              </blockquote>

              {/* iOS-style buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/how-we-help"
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    color: '#007AFF',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 4px 20px rgba(255, 255, 255, 0.3)'
                  }}
                >
                  Learn More About Our Services
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/partners"
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                  }}
                >
                  Partner Organizations
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