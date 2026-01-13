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
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-[var(--color-ladder-red)]"
    >

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
              <div className="card p-6 sm:p-8 h-full transition-all duration-300 hover:scale-105 bg-white">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                  action.color === '#FF3B30' ? 'bg-[var(--color-ladder-red)]/10 border border-[var(--color-ladder-red)]/20' :
                  action.color === '#34C759' ? 'bg-[var(--color-ladder-green)]/10 border border-[var(--color-ladder-green)]/20' :
                  'bg-[var(--color-ladder-blue)]/10 border border-[var(--color-ladder-blue)]/20'
                }`}>
                  <action.icon className={`w-8 h-8 ${
                    action.color === '#FF3B30' ? 'text-[var(--color-ladder-red)]' :
                    action.color === '#34C759' ? 'text-[var(--color-ladder-green)]' :
                    'text-[var(--color-ladder-blue)]'
                  }`} />
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                  {action.title}
                </h3>
                
                <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                  {action.description}
                </p>

                {/* Details */}
                <ul className="space-y-2 mb-8">
                  {action.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-[var(--color-text-secondary)]">
                      <div className={`w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0 ${
                        action.color === '#FF3B30' ? 'bg-[var(--color-ladder-red)]' :
                        action.color === '#34C759' ? 'bg-[var(--color-ladder-green)]' :
                        'bg-[var(--color-ladder-blue)]'
                      }`} />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={action.href}
                  className={`group/btn inline-flex items-center justify-center w-full px-6 py-4 rounded-lg font-bold transition-all duration-300 ${
                    action.color === '#FF3B30' ? 'btn-accent' :
                    action.color === '#34C759' ? 'btn-success' :
                    'btn-primary'
                  }`}
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
          <div className="card relative p-6 sm:p-8 max-w-4xl mx-auto text-center bg-white/90">
            <h4 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-6">
              The Ladder • Birmingham, Alabama
            </h4>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 text-[var(--color-text-secondary)]" />
                <a 
                  href="mailto:info@the-ladder.org" 
                  className="text-[var(--color-ladder-blue)] hover:text-[var(--color-ladder-blue-dark)] transition-colors"
                >
                  info@the-ladder.org
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-text-secondary)]" />
                <span className="text-[var(--color-text-primary)]">Birmingham, AL</span>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <Building2 className="w-5 h-5 text-[var(--color-text-secondary)]" />
                <span className="text-[var(--color-text-primary)]">501(c)(3) Nonprofit</span>
              </div>
            </div>

            <div className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              <p className="mb-2">
                <strong className="text-[var(--color-text-primary)]">EIN:</strong> 47-2123160 • 
                <strong className="text-[var(--color-text-primary)]"> Founded:</strong> 2021
              </p>
              <p>
                Helping individuals one by one climb over very specific, personal barriers 
                that are otherwise keeping them from moving forward in life.
              </p>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className={`text-center mt-12 sm:mt-16 ${isVisible ? 'animate-in-delayed' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <p className="text-xl sm:text-2xl font-bold text-white mb-4">
            Every barrier can be overcome.
          </p>
          <p className="text-lg sm:text-xl text-white/90">
            Every person deserves the chance to succeed.
          </p>
          <p className="text-base sm:text-lg text-white/70 mt-4">
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