'use client'

import { AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function ProblemSolutionCompact() {
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
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-[var(--color-background)]"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-in' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#1a1a1a' }}>
            The Problem We Solve
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#4a5568' }}>
            Birmingham has many great nonprofits, but sometimes people face barriers that don't fit any single organization's focus.
          </p>
        </div>

        {/* Problem vs Solution */}
        <div className={`grid lg:grid-cols-2 gap-8 items-center ${isVisible ? 'animate-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          
          {/* The Problem */}
          <div className="card p-6 sm:p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-[var(--color-ladder-red)]/10 border border-[var(--color-ladder-red)]/20">
              <AlertTriangle className="w-8 h-8 text-[var(--color-ladder-red)]" />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--color-text-primary)]">
              People Fall Through Cracks
            </h3>
            
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-[var(--color-ladder-red)]" />
                <p className="text-[var(--color-text-secondary)]">
                  <strong className="text-[var(--color-text-primary)]">Housing nonprofit</strong> can't help with car repair preventing job interviews
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-[var(--color-ladder-red)]" />
                <p className="text-[var(--color-text-secondary)]">
                  <strong className="text-[var(--color-text-primary)]">Job training program</strong> can't address childcare barrier during classes
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-[var(--color-ladder-red)]" />
                <p className="text-[var(--color-text-secondary)]">
                  <strong className="text-[var(--color-text-primary)]">Health services</strong> can't solve transportation to medical appointments
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 rounded-lg bg-[var(--color-ladder-red)]/10 border border-[var(--color-ladder-red)]/20">
              <p className="font-semibold text-[var(--color-ladder-red)]">
                Result: Individual barriers block entire progress
              </p>
            </div>
          </div>

          {/* The Solution */}
          <div className="card p-6 sm:p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-[var(--color-ladder-green)]/10 border border-[var(--color-ladder-green)]/20">
              <CheckCircle className="w-8 h-8 text-[var(--color-ladder-green)]" />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--color-text-primary)]">
              The Ladder Fills the Gap
            </h3>
            
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-[var(--color-ladder-green)]" />
                <p className="text-[var(--color-text-secondary)]">
                  <strong className="text-[var(--color-text-primary)]">Partner referrals:</strong> Nonprofits send us clients with specific barriers
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-[var(--color-ladder-green)]" />
                <p className="text-[var(--color-text-secondary)]">
                  <strong className="text-[var(--color-text-primary)]">Individual focus:</strong> We address the exact obstacle blocking progress
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0 text-[var(--color-ladder-green)]" />
                <p className="text-[var(--color-text-secondary)]">
                  <strong className="text-[var(--color-text-primary)]">Quick action:</strong> 24-hour response, 30-day average resolution
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 rounded-lg bg-[var(--color-ladder-green)]/10 border border-[var(--color-ladder-green)]/20">
              <p className="font-semibold text-[var(--color-ladder-green)]">
                Result: Barriers removed, lives transformed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className={`text-center mt-12 sm:mt-16 ${isVisible ? 'animate-in-delayed' : 'opacity-0'}`}>
          <div className="card relative p-6 sm:p-8 max-w-4xl mx-auto">
            <h4 className="text-xl sm:text-2xl font-bold mb-4 text-[var(--color-text-primary)]">
              We're Not Competing — We're Collaborating
            </h4>
            <p className="text-base sm:text-lg leading-relaxed mb-6 text-[var(--color-text-secondary)]">
              Birmingham's nonprofits do amazing work in their areas of expertise. 
              The Ladder exists to handle the unique, individual barriers that don't fit traditional programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <a
                href="/partners"
                className="btn-primary group inline-flex items-center justify-center px-6 py-3"
              >
                See Our Partners
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/how-we-help"
                className="btn-secondary group inline-flex items-center justify-center px-6 py-3"
              >
                How It Works
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes animate-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
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
          animation: animate-in-delayed 1s cubic-bezier(0.16, 1, 0.3, 1) 400ms forwards;
        }
      `}</style>
    </section>
  )
}