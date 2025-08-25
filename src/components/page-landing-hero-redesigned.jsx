'use client'

import { Heart, ArrowRight, Users, Clock, Target, HandHeart, TrendingUp, CheckCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function LadderHeroRedesigned() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #007AFF 0%, #34C759 100%)'
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
          style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent)' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-10 blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4), transparent)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Empathy Statement */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-in' : 'opacity-0'}`}>
          <div 
            className="inline-block px-6 py-3 rounded-full text-base font-semibold mb-8"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
          >
            🤝 We've all felt stuck before
          </div>
          
          <p className="text-xl leading-relaxed max-w-4xl mx-auto text-white/90 mb-8">
            Like you, we are troubled by people struggling in our community. We've all felt stuck in a bad situation 
            and just needed focused help and a different perspective to move forward. 
            <strong className="text-white"> Thank God, we were blessed to have the guidance and support to overcome.</strong>
          </p>
          
          <p className="text-2xl font-bold text-white mb-4">
            Many people don't. That's where The Ladder comes in.
          </p>
        </div>

        {/* Main Hero Content */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-in-delayed' : 'opacity-0'}`}>
          <div 
            className="relative p-12 rounded-3xl overflow-hidden mb-12"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: `
                0 20px 60px rgba(0, 0, 0, 0.15),
                inset 0 1px 0 rgba(255, 255, 255, 0.3)
              `
            }}
          >
            {/* Background pattern */}
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
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 leading-tight">
                We Call Ourselves
                <br />
                <span className="text-4xl sm:text-6xl">The Ladder</span>
              </h1>
              
              <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-10">
                Because we help individuals <strong className="text-white">one by one</strong> climb over a very specific, 
                personal barrier that is otherwise keeping them from moving forward in life.
              </p>
              
              <div 
                className="inline-block px-8 py-4 rounded-2xl text-2xl font-bold text-white mb-10"
                style={{
                  background: 'rgba(255, 59, 48, 0.9)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(255, 59, 48, 0.3)'
                }}
              >
                We help people overcome and progress! 🚀
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/get-help"
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    color: '#007AFF',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 4px 20px rgba(255, 255, 255, 0.3)'
                  }}
                >
                  <Heart className="w-5 h-5 mr-3" />
                  Apply for Help Today
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                </a>
                <a 
                  href="/donate"
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                  }}
                >
                  <HandHeart className="w-5 h-5 mr-3" />
                  Support Our Mission
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Statistics */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible ? 'animate-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          {[
            { number: '500+', label: 'Lives Changed', icon: Users, color: '#007AFF' },
            { number: '95%', label: 'Success Rate', icon: CheckCircle, color: '#34C759' },
            { number: '30 Days', label: 'Avg Resolution', icon: Clock, color: '#FF9500' },
            { number: '85%', label: 'Long-term Success', icon: Target, color: '#FF3B30' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${700 + index * 100}ms` }}
            >
              <div 
                className="relative p-8 rounded-3xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(30px)',
                  WebkitBackdropFilter: 'blur(30px)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  boxShadow: `
                    0 8px 32px rgba(0, 0, 0, 0.12),
                    inset 0 1px 0 rgba(255, 255, 255, 0.3)
                  `
                }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: 'rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/90 font-semibold">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll"></div>
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

        @keyframes animate-in-delayed {
          from {
            opacity: 0;
            transform: translateY(32px);
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
        
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(8px);
            opacity: 0.5;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-in {
          animation: animate-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-in-delayed {
          animation: animate-in-delayed 1s cubic-bezier(0.16, 1, 0.3, 1) 400ms forwards;
        }

        .animate-up {
          animation: animate-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        /* iOS system font stack */
        * {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
        }
      `}</style>
    </section>
  )
}