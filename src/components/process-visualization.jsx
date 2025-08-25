'use client'

import { ArrowRight, Building2, Users, MessageSquare, Search, Handshake, TrendingUp, CheckCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function ProcessVisualization() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Start the step animation sequence
          const timer = setInterval(() => {
            setActiveStep(prev => {
              if (prev < 6) return prev + 1
              clearInterval(timer)
              return prev
            })
          }, 800)
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
      number: 1,
      icon: Building2,
      title: "Nonprofit Serves Person",
      description: "A trusted nonprofit organization is already working with someone in need",
      color: '#007AFF',
      detail: "Our partner nonprofits identify individuals who need additional support beyond their core services"
    },
    {
      number: 2,
      icon: Users,
      title: "Barrier Identified", 
      description: "This person encounters a specific barrier they can't overcome alone",
      color: '#FF9500',
      detail: "The individual faces a unique obstacle that's preventing their progress toward success"
    },
    {
      number: 3,
      icon: MessageSquare,
      title: "Agreement Reached",
      description: "Both the nonprofit and individual agree it's the one thing keeping them from success",
      color: '#FF3B30',
      detail: "Everyone recognizes this specific barrier is the key issue that must be addressed"
    },
    {
      number: 4,
      icon: Search,
      title: "Gap Discovered",
      description: "However, this specific need falls outside the nonprofit's scope of services",
      color: '#AF52DE',
      detail: "The barrier doesn't fit within the nonprofit's specialized programs or available resources"
    },
    {
      number: 5,
      icon: Handshake,
      title: "Partnership Begins",
      description: "At this point, the nonprofit partners with The Ladder",
      color: '#34C759',
      detail: "The nonprofit refers the individual to The Ladder for specialized barrier removal assistance"
    },
    {
      number: 6,
      icon: TrendingUp,
      title: "The Ladder Interviews",
      description: "The Ladder interviews the person to hear their story and identify solutions",
      color: '#007AFF',
      detail: "We conduct a thorough assessment to understand the person's unique situation and potential pathways forward"
    },
    {
      number: 7,
      icon: CheckCircle,
      title: "Barrier Removed",
      description: "The Ladder works with the client to help them over the 'missing rung'",
      color: '#34C759',
      detail: "We provide the specific support needed to overcome their barrier and continue their journey to success"
    }
  ]

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1d1d1f 0%, #2d2d2f 100%)'
      }}
    >
      {/* iOS-style ambient background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #34C75915, transparent)' }}
        />
        <div 
          className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #007AFF15, transparent)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
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
            Step-by-Step Process
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Our Process:
            <br />
            <span style={{ color: '#34C759' }}>How It Actually Works</span>
          </h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Here's exactly how The Ladder partners with nonprofits to help individuals overcome their specific barriers
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible && activeStep >= index ? 'animate-slide-in opacity-100' : 'opacity-30'
              }`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                transform: activeStep >= index ? 'translateX(0)' : 'translateX(-20px)'
              }}
            >
              <div 
                className="relative p-8 rounded-3xl overflow-hidden group hover:scale-[1.01] transition-all duration-500"
                style={{
                  background: activeStep >= index 
                    ? 'rgba(255, 255, 255, 0.08)' 
                    : 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(30px)',
                  WebkitBackdropFilter: 'blur(30px)',
                  border: `1px solid ${activeStep >= index ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.08)'}`,
                  boxShadow: activeStep >= index
                    ? `0 20px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)`
                    : `0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)`
                }}
              >
                <div className="flex items-start gap-8">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    {/* Step Number */}
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mb-4 transition-all duration-500"
                      style={{
                        background: activeStep >= index 
                          ? `linear-gradient(135deg, ${step.color}, ${step.color}dd)` 
                          : 'rgba(255, 255, 255, 0.1)',
                        boxShadow: activeStep >= index 
                          ? `0 8px 32px ${step.color}40` 
                          : '0 4px 16px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500"
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
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 
                      className="text-3xl font-bold mb-4 transition-all duration-500"
                      style={{ 
                        color: activeStep >= index ? 'white' : 'rgba(255, 255, 255, 0.6)' 
                      }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="text-xl leading-relaxed mb-4 transition-all duration-500"
                      style={{ 
                        color: activeStep >= index ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.5)' 
                      }}
                    >
                      {step.description}
                    </p>
                    <p 
                      className="text-base leading-relaxed transition-all duration-500"
                      style={{ 
                        color: activeStep >= index ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.4)' 
                      }}
                    >
                      {step.detail}
                    </p>
                  </div>

                  {/* Arrow (except last step) */}
                  {index < steps.length - 1 && (
                    <div className="flex-shrink-0 hidden lg:block">
                      <ArrowRight 
                        className="w-8 h-8 transition-all duration-500" 
                        style={{ 
                          color: activeStep > index ? step.color : 'rgba(255, 255, 255, 0.3)',
                          transform: activeStep > index ? 'translateX(4px)' : 'translateX(0)'
                        }} 
                      />
                    </div>
                  )}
                </div>

                {/* Progress indicator for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-6 flex justify-center">
                    <div 
                      className="w-1 h-8 rounded-full transition-all duration-500"
                      style={{ 
                        background: activeStep > index 
                          ? `linear-gradient(to bottom, ${step.color}, ${steps[index + 1].color})` 
                          : 'rgba(255, 255, 255, 0.2)'
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center ${isVisible ? 'animate-in-delayed' : 'opacity-0'}`}>
          <div 
            className="relative p-12 rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(52, 199, 89, 0.15), rgba(0, 122, 255, 0.15))',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: `
                0 20px 60px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `
            }}
          >
            <h3 className="text-4xl font-bold text-white mb-8">
              Ready to Start This Process?
            </h3>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Whether you're an individual who needs help or a nonprofit looking to partner with us, 
              we're here to help remove barriers and create lasting change.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/get-help"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(20px)',
                  color: '#34C759',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 4px 20px rgba(255, 255, 255, 0.3)'
                }}
              >
                I Need Help
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
                Partner With Us
                <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
              </a>
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

        @keyframes animate-slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
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

        .animate-slide-in {
          animation: animate-slide-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-in-delayed {
          animation: animate-in-delayed 1s cubic-bezier(0.16, 1, 0.3, 1) 2s forwards;
        }

        /* iOS system font stack */
        * {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
        }
      `}</style>
    </section>
  )
}