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
      className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
      }}
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
                className={`relative p-6 rounded-3xl mb-4 transition-all duration-1000 ${
                  activeStep >= index ? 'scale-105' : 'scale-100'
                }`}
                style={{
                  background: activeStep >= index 
                    ? 'rgba(255, 255, 255, 0.1)' 
                    : 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: `1px solid ${activeStep >= index ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'}`,
                  boxShadow: activeStep >= index 
                    ? `0 20px 40px rgba(0, 0, 0, 0.3)` 
                    : `0 8px 20px rgba(0, 0, 0, 0.2)`
                }}
              >
                {/* Step Number */}
                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold text-white mb-4 mx-auto transition-all duration-500`}
                  style={{
                    background: activeStep >= index 
                      ? `linear-gradient(135deg, ${step.color}, ${step.color}dd)` 
                      : 'rgba(255, 255, 255, 0.1)',
                    boxShadow: activeStep >= index 
                      ? `0 8px 20px ${step.color}40` 
                      : '0 4px 12px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div 
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-500`}
                  style={{
                    background: activeStep >= index 
                      ? `${step.color}15` 
                      : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${activeStep >= index ? `${step.color}30` : 'rgba(255, 255, 255, 0.1)'}`
                  }}
                >
                  <step.icon 
                    className="w-8 h-8 transition-all duration-500" 
                    style={{ 
                      color: activeStep >= index ? step.color : 'rgba(255, 255, 255, 0.4)' 
                    }} 
                  />
                </div>

                {/* Content */}
                <h3 
                  className={`text-xl font-bold mb-3 transition-all duration-500`}
                  style={{ 
                    color: activeStep >= index ? 'white' : 'rgba(255, 255, 255, 0.6)' 
                  }}
                >
                  {step.title}
                </h3>
                
                <p 
                  className={`text-sm leading-relaxed transition-all duration-500`}
                  style={{ 
                    color: activeStep >= index ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.4)' 
                  }}
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
          <div 
            className="relative p-8 rounded-3xl max-w-4xl mx-auto text-center"
            style={{
              background: 'rgba(52, 199, 89, 0.1)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              border: '1px solid rgba(52, 199, 89, 0.2)',
              boxShadow: '0 20px 40px rgba(52, 199, 89, 0.1)'
            }}
          >
            <h4 className="text-2xl font-bold text-white mb-4">
              Real Example: Sarah's Story
            </h4>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              A housing nonprofit referred Sarah, who couldn't start her new job because her car needed $800 in repairs. 
              Traditional programs couldn't help with car issues, but The Ladder covered the repair cost. 
              <strong className="text-white"> Sarah kept her job, moved to stable housing, and now mentors others.</strong>
            </p>
            
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">$800</div>
                <div className="text-sm text-white/70">Investment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">48hr</div>
                <div className="text-sm text-white/70">Resolution</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2yr+</div>
                <div className="text-sm text-white/70">Stable Job</div>
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