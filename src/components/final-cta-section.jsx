'use client'

import { ArrowRight, Heart, HandHeart, Building2, Users, CheckCircle, Clock, Target, TrendingUp } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function FinalCtaSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeAction, setActiveAction] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Cycle through actions to draw attention
          const timer = setInterval(() => {
            setActiveAction(prev => (prev + 1) % 3)
          }, 2000)
          return () => clearInterval(timer)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const actionOptions = [
    {
      icon: Heart,
      title: "Need Help Right Now?",
      description: "If you or someone you know is facing a specific barrier that's preventing success, we're here to help.",
      cta: "Apply for Assistance",
      href: "/get-help",
      color: "#FF3B30",
      urgency: "We typically respond within 24 hours",
      stats: "500+ people helped • 95% success rate"
    },
    {
      icon: HandHeart,
      title: "Want to Make a Difference?",
      description: "Your donation goes directly to helping individuals overcome specific barriers and regain their lives.",
      cta: "Donate Today",
      href: "/donate",
      color: "#34C759",
      urgency: "Every dollar creates lasting impact",
      stats: "$50 can remove a barrier • 85% long-term success"
    },
    {
      icon: Building2,
      title: "Are You a Nonprofit Partner?",
      description: "If your organization encounters clients with barriers outside your scope, let's work together.",
      cta: "Partner With Us",
      href: "/partners",
      color: "#007AFF",
      urgency: "Strengthen your community impact",
      stats: "Collaborative approach • No competition, just cooperation"
    }
  ]

  const impactStats = [
    { number: "500+", label: "Lives Changed", icon: Users },
    { number: "95%", label: "Success Rate", icon: CheckCircle },
    { number: "24 Hours", label: "Response Time", icon: Clock },
    { number: "85%", label: "Long-term Success", icon: Target }
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
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent)' }}
        />
        <div 
          className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(52, 199, 89, 0.3), transparent)' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-10 blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, rgba(0, 122, 255, 0.4), transparent)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-in' : 'opacity-0'}`}>
          <div 
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-8"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Climb Over
            <br />
            <span style={{ color: '#34C759' }}>Life's Barriers?</span>
          </h2>
          
          <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
            Whether you need help, want to help others, or represent a nonprofit organization, 
            <strong className="text-white"> there's a place for you in our mission.</strong>
          </p>
        </div>

        {/* Action Options Grid */}
        <div className={`grid lg:grid-cols-3 gap-8 mb-20 ${isVisible ? 'animate-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          {actionOptions.map((action, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl overflow-hidden transition-all duration-1000 hover:scale-[1.02] ${
                activeAction === index ? 'ring-2 ring-white/30' : ''
              }`}
              style={{
                background: activeAction === index 
                  ? 'rgba(255, 255, 255, 0.15)' 
                  : 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                boxShadow: activeAction === index
                  ? `0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)`
                  : `0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                transform: activeAction === index ? 'translateY(-4px)' : 'translateY(0)'
              }}
            >
              {/* Background glow effect */}
              <div 
                className={`absolute inset-0 opacity-10 transition-opacity duration-1000 ${
                  activeAction === index ? 'opacity-20' : 'opacity-0'
                }`}
                style={{ background: `radial-gradient(circle at center, ${action.color}, transparent)` }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500"
                  style={{
                    background: activeAction === index 
                      ? `${action.color}25` 
                      : 'rgba(255, 255, 255, 0.1)',
                    border: `1px solid ${activeAction === index ? `${action.color}40` : 'rgba(255, 255, 255, 0.2)'}`
                  }}
                >
                  <action.icon 
                    className="w-8 h-8 transition-all duration-500" 
                    style={{ 
                      color: activeAction === index ? action.color : 'rgba(255, 255, 255, 0.7)' 
                    }} 
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {action.title}
                </h3>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  {action.description}
                </p>

                {/* Urgency/Stats */}
                <div className="mb-6 space-y-2">
                  <p className="text-sm font-semibold" style={{ color: action.color }}>
                    {action.urgency}
                  </p>
                  <p className="text-sm text-white/60">
                    {action.stats}
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href={action.href}
                  className="group inline-flex items-center justify-center w-full px-6 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: activeAction === index 
                      ? action.color 
                      : 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    color: activeAction === index ? 'white' : action.color,
                    border: `1px solid ${activeAction === index ? action.color : `${action.color}40`}`,
                    boxShadow: activeAction === index 
                      ? `0 8px 32px ${action.color}40` 
                      : '0 4px 16px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  {action.cta}
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 ${isVisible ? 'animate-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="text-center transition-all duration-500 hover:scale-105"
            >
              <div 
                className="relative p-8 rounded-3xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(30px)',
                  WebkitBackdropFilter: 'blur(30px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: `
                    0 8px 32px rgba(0, 0, 0, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `
                }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70 font-semibold">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Message */}
        <div className={`text-center ${isVisible ? 'animate-in-delayed' : 'opacity-0'}`}>
          <div 
            className="relative p-12 rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: `
                0 20px 60px rgba(0, 0, 0, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.2)
              `
            }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
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
              <h3 className="text-4xl font-bold text-white mb-8 leading-tight">
                Together, We Can Remove Every Barrier
              </h3>
              <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto">
                Every person deserves the chance to succeed. Every barrier can be overcome. 
                Every community is stronger when we work together. 
                <strong className="text-white"> Let's climb higher, together.</strong>
              </p>
              
              <div className="text-white/70 text-lg">
                <p>Contact us at: <strong className="text-white">info@the-ladder.org</strong></p>
                <p className="mt-2">Birmingham, Alabama • 501(c)(3) Nonprofit</p>
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