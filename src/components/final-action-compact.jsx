'use client'

import { ArrowRight, Heart, HandHeart, Building2, Mail, MapPin, Phone } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function FinalActionCompact() {
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

  const actionPaths = [
    {
      icon: Heart,
      title: 'Need Help?',
      description: 'Facing a barrier that\'s preventing your success? We\'re here to help.',
      cta: 'Apply for Help',
      href: '/get-help',
      color: '#FF3B30',
      bgColor: 'rgba(255, 59, 48, 0.1)',
      details: ['24-hour response', '95% success rate', 'No judgment, just support']
    },
    {
      icon: HandHeart,
      title: 'Want to Help?',
      description: 'Your donation directly removes barriers and transforms lives.',
      cta: 'Donate Now',
      href: '/donate',
      color: '#34C759',
      bgColor: 'rgba(52, 199, 89, 0.1)',
      details: ['Tax-deductible', '92% directly to assistance', 'See exactly where it goes']
    },
    {
      icon: Building2,
      title: 'Nonprofit Partner?',
      description: 'Refer clients with barriers outside your scope. Let\'s collaborate.',
      cta: 'Partner with Us',
      href: '/partners',
      color: '#007AFF',
      bgColor: 'rgba(0, 122, 255, 0.1)',
      details: ['No competition', 'Shared success', 'Strengthen your impact']
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
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #34C759, transparent)' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #007AFF, transparent)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-in' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Whether you need help, want to help others, or represent a nonprofit organization, 
            there's a place for you in our mission to remove barriers.
          </p>
        </div>

        {/* Action Cards */}
        <div className={`grid lg:grid-cols-3 gap-8 mb-16 ${isVisible ? 'animate-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          {actionPaths.map((action, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div 
                className="p-8 rounded-3xl h-full transition-all duration-500 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(30px)',
                  WebkitBackdropFilter: 'blur(30px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: action.bgColor,
                    border: `1px solid ${action.color}30`
                  }}
                >
                  <action.icon className="w-8 h-8" style={{ color: action.color }} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {action.title}
                </h3>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  {action.description}
                </p>

                {/* Details */}
                <ul className="space-y-2 mb-8">
                  {action.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-white/70">
                      <div 
                        className="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0"
                        style={{ background: action.color }}
                      />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={action.href}
                  className="group/btn inline-flex items-center justify-center w-full px-6 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105"
                  style={{
                    background: action.color,
                    color: 'white',
                    boxShadow: `0 8px 32px ${action.color}40`
                  }}
                >
                  {action.cta}
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className={`${isVisible ? 'animate-in-delayed' : 'opacity-0'}`}>
          <div 
            className="relative p-8 rounded-3xl max-w-4xl mx-auto text-center"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
            }}
          >
            <h4 className="text-2xl font-bold text-white mb-6">
              The Ladder • Birmingham, Alabama
            </h4>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 text-white/70" />
                <a 
                  href="mailto:info@the-ladder.org" 
                  className="text-white/90 hover:text-white transition-colors"
                >
                  info@the-ladder.org
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5 text-white/70" />
                <span className="text-white/90">Birmingham, AL</span>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <Building2 className="w-5 h-5 text-white/70" />
                <span className="text-white/90">501(c)(3) Nonprofit</span>
              </div>
            </div>

            <div className="text-white/70 text-sm leading-relaxed">
              <p className="mb-2">
                <strong className="text-white">EIN:</strong> 47-2123160 • 
                <strong className="text-white"> Founded:</strong> 2021
              </p>
              <p>
                Helping individuals one by one climb over very specific, personal barriers 
                that are otherwise keeping them from moving forward in life.
              </p>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-in-delayed' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <p className="text-2xl font-bold text-white mb-4">
            Every barrier can be overcome.
          </p>
          <p className="text-xl text-white/80">
            Every person deserves the chance to succeed.
          </p>
          <p className="text-lg text-white/60 mt-4">
            Let's climb higher, together.
          </p>
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
          animation: animate-in-delayed 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  )
}