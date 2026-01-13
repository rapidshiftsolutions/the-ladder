'use client'

import { Building2, Users, MessageSquare, TrendingUp, ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function HowItWorksCompact() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Start step progression
          const timer = setInterval(() => {
            setActiveStep(prev => {
              if (prev < 3) return prev + 1
              clearInterval(timer)
              return prev
            })
          }, 1000)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: 1,
      icon: Building2,
      title: "Partner Refers",
      description: "Trusted nonprofits identify someone with a specific barrier outside their scope",
      color: '#007AFF'
    },
    {
      number: 2,
      icon: Users,
      title: "We Interview",
      description: "The Ladder meets with the individual to understand their unique situation",
      color: '#FF9500'
    },
    {
      number: 3,
      icon: MessageSquare,
      title: "Create Solution",
      description: "We develop a targeted plan to address the specific barrier blocking progress",
      color: '#FF3B30'
    },
    {
      number: 4,
      icon: TrendingUp,
      title: "Remove Barrier",
      description: "Direct assistance helps the person climb over their obstacle and continue forward",
      color: '#34C759'
    }
  ]

  return (
    <section 
      ref={sectionRef} 
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-[var(--color-ladder-blue)] to-[var(--color-ladder-blue-light)]"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-in' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple Process, Real Results
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Four straightforward steps from barrier identification to breakthrough
          </p>
        </div>

        {/* Process Steps */}
        <div className={`grid lg:grid-cols-4 gap-6 mb-16 ${isVisible ? 'animate-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Step Card */}
              <div 
                className={`card relative p-6 mb-4 transition-all duration-300 ${
                  activeStep >= index ? 'shadow-lg scale-105' : ''
                }`}
              >
                {/* Step Number */}
                <div 
                  className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold mb-4 mx-auto transition-all duration-300 ${
                    activeStep >= index 
                      ? 'bg-[var(--color-ladder-blue)] text-white shadow-md' 
                      : 'bg-white/20 text-white/60'
                  }`}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div 
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                    activeStep >= index 
                      ? 'bg-white/20 border-2 border-white/30' 
                      : 'bg-white/10 border border-white/20'
                  }`}
                >
                  <step.icon 
                    className={`w-8 h-8 transition-all duration-300 ${
                      activeStep >= index ? 'text-white' : 'text-white/60'
                    }`}
                  />
                </div>

                {/* Content */}
                <h3 
                  className={`text-lg sm:text-xl font-bold mb-3 transition-all duration-300 ${
                    activeStep >= index ? 'text-white' : 'text-white/70'
                  }`}
                >
                  {step.title}
                </h3>
                
                <p 
                  className={`text-sm leading-relaxed transition-all duration-300 ${
                    activeStep >= index ? 'text-white/90' : 'text-white/50'
                  }`}
                >
                  {step.description}
                </p>
              </div>

              {/* Arrow (except last step) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight 
                    className="w-6 h-6 transition-all duration-500" 
                    style={{ 
                      color: activeStep > index ? steps[index + 1].color : 'rgba(255, 255, 255, 0.2)',
                      transform: activeStep > index ? 'translateX(4px)' : 'translateX(0)'
                    }} 
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Success Example */}
        <div className={`${isVisible ? 'animate-in-delayed' : 'opacity-0'}`}>
          <div className="card relative p-6 sm:p-8 max-w-4xl mx-auto text-center bg-white/90">
            <h4 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-4">
              Real Example: Sarah's Story
            </h4>
            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
              A housing nonprofit referred Sarah, who couldn't start her new job because her car needed $800 in repairs. 
              Traditional programs couldn't help with car issues, but The Ladder covered the repair cost. 
              <strong className="text-[var(--color-text-primary)]"> Sarah kept her job, moved to stable housing, and now mentors others.</strong>
            </p>
            
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[var(--color-ladder-blue)]">$800</div>
                <div className="text-xs sm:text-sm text-[var(--color-text-secondary)]">Investment</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[var(--color-ladder-blue)]">48hr</div>
                <div className="text-xs sm:text-sm text-[var(--color-text-secondary)]">Resolution</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[var(--color-ladder-blue)]">2yr+</div>
                <div className="text-xs sm:text-sm text-[var(--color-text-secondary)]">Stable Job</div>
              </div>
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
          animation: animate-in-delayed 1s cubic-bezier(0.16, 1, 0.3, 1) 600ms forwards;
        }
      `}</style>
    </section>
  )
}