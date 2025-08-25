'use client'

import { Users, CheckCircle, Clock, DollarSign, Award, Star, ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function ImpactTrustCompact() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ people: 0, success: 0, response: 0, efficiency: 0 })
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          
          // Animate counters
          const targets = { people: 500, success: 95, response: 24, efficiency: 92 }
          const duration = 2000
          const steps = 60
          const stepDuration = duration / steps
          
          let currentStep = 0
          const timer = setInterval(() => {
            currentStep++
            const progress = currentStep / steps
            
            setCounters({
              people: Math.floor(targets.people * progress),
              success: Math.floor(targets.success * progress),
              response: Math.floor(targets.response * progress),
              efficiency: Math.floor(targets.efficiency * progress)
            })
            
            if (currentStep >= steps) {
              clearInterval(timer)
              setCounters(targets)
            }
          }, stepDuration)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const impactStats = [
    {
      icon: Users,
      number: counters.people,
      suffix: '+',
      label: 'People Helped',
      description: 'Individuals who overcame barriers with our assistance',
      color: '#007AFF'
    },
    {
      icon: CheckCircle,
      number: counters.success,
      suffix: '%',
      label: 'Success Rate',
      description: 'Barriers successfully removed and lives transformed',
      color: '#34C759'
    },
    {
      icon: Clock,
      number: counters.response,
      suffix: 'hr',
      label: 'Response Time',
      description: 'Average time from referral to initial contact',
      color: '#FF9500'
    },
    {
      icon: DollarSign,
      number: counters.efficiency,
      suffix: '%',
      label: 'Direct Impact',
      description: 'Of donations go directly to barrier removal',
      color: '#FF3B30'
    }
  ]

  const trustElements = [
    {
      icon: Award,
      title: '501(c)(3) Nonprofit',
      description: 'Tax-exempt charitable organization (EIN: 47-2123160)'
    },
    {
      icon: Star,
      title: 'Board Expertise',
      description: 'Led by professionals with extensive nonprofit and business experience'
    },
    {
      icon: CheckCircle,
      title: 'Partner Network',
      description: 'Trusted by Birmingham\'s leading nonprofit organizations'
    }
  ]

  return (
    <section 
      ref={sectionRef} 
      className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-in' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#1a1a1a' }}>
            Proven Impact, Trusted Results
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#4a5568' }}>
            Numbers tell the story of lives changed and barriers overcome through collaborative community support
          </p>
        </div>

        {/* Impact Statistics */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${isVisible ? 'animate-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-3xl transition-all duration-500 hover:scale-105"
              style={{
                background: 'white',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.8)'
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background: `${stat.color}10`,
                  border: `1px solid ${stat.color}20`
                }}
              >
                <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
              </div>

              {/* Number */}
              <div className="mb-2">
                <span className="text-4xl font-bold" style={{ color: stat.color }}>
                  {stat.number}{stat.suffix}
                </span>
              </div>

              {/* Label */}
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1a1a1a' }}>
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: '#4a5568' }}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className={`grid lg:grid-cols-3 gap-8 mb-16 ${isVisible ? 'animate-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          {trustElements.map((element, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-3xl"
              style={{
                background: 'rgba(0, 122, 255, 0.05)',
                border: '1px solid rgba(0, 122, 255, 0.1)'
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background: 'rgba(0, 122, 255, 0.1)',
                  border: '1px solid rgba(0, 122, 255, 0.2)'
                }}
              >
                <element.icon className="w-6 h-6" style={{ color: '#007AFF' }} />
              </div>
              
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1a1a1a' }}>
                {element.title}
              </h3>
              
              <p className="text-sm" style={{ color: '#4a5568' }}>
                {element.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className={`${isVisible ? 'animate-in-delayed' : 'opacity-0'}`}>
          <div 
            className="relative p-8 rounded-3xl max-w-4xl mx-auto text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(52, 199, 89, 0.1), rgba(0, 122, 255, 0.1))',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="mb-6">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#FFD700' }} />
                ))}
              </div>
              
              <blockquote className="text-xl font-medium leading-relaxed mb-4" style={{ color: '#1a1a1a' }}>
                "The Ladder helped me when no other organization could. They paid for my car repair so I could keep my new job. 
                Two years later, I own my home and volunteer to help others climb their ladders too."
              </blockquote>
              
              <cite className="text-lg font-semibold" style={{ color: '#007AFF' }}>
                — Sarah M., Birmingham Resident
              </cite>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a
                href="/success-stories"
                className="group inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: '#34C759',
                  color: 'white'
                }}
              >
                Read More Stories
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/annual-reports"
                className="group inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(52, 199, 89, 0.1)',
                  color: '#34C759',
                  border: '1px solid rgba(52, 199, 89, 0.2)'
                }}
              >
                View Impact Reports
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
          animation: animate-in-delayed 1s cubic-bezier(0.16, 1, 0.3, 1) 600ms forwards;
        }
      `}</style>
    </section>
  )
}