'use client'

import { Heart, ArrowRight, Users, Clock, Target } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function LadderHeroRedesigned() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#1C2833]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Content Container - Mobile First */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Main Content - 8px Grid System */}
        <div className={`text-center space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Title - Mobile: 40px, Desktop: 64px */}
          <h1 className="text-[40px] leading-tight sm:text-5xl lg:text-[64px] font-bold text-white">
            Helping People Climb Over
            <span className="block text-[#E74C3C] mt-2">Life's Barriers</span>
          </h1>

          {/* Description - 16px on mobile, 18px on desktop */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-4 sm:px-8">
            Birmingham's 501(c)(3) nonprofit partnering with organizations to help individuals 
            overcome specific obstacles preventing their success.
          </p>

          {/* CTA Buttons - 44px min height for touch targets */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
            <a
              href="/get-help"
              className="group inline-flex items-center justify-center min-h-[48px] px-8 py-3 bg-[#E74C3C] text-white font-semibold rounded-xl hover:bg-[#E74C3C]/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Heart className="w-5 h-5 mr-2" />
              Apply for Help
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/donate"
              className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200"
            >
              Donate Now
            </a>
          </div>
        </div>

        {/* Stats Cards - No square backgrounds */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Stat 1 */}
          <div className="glass-card bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 shadow-xl">
            <Users className="w-8 h-8 text-white/80 mx-auto mb-3" />
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">150+</div>
            <div className="text-sm text-white/80 uppercase tracking-wider">People Helped</div>
          </div>

          {/* Stat 2 */}
          <div className="glass-card bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 shadow-xl">
            <Target className="w-8 h-8 text-white/80 mx-auto mb-3" />
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">87%</div>
            <div className="text-sm text-white/80 uppercase tracking-wider">Success Rate</div>
          </div>

          {/* Stat 3 */}
          <div className="glass-card bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 shadow-xl">
            <Clock className="w-8 h-8 text-white/80 mx-auto mb-3" />
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">24hr</div>
            <div className="text-sm text-white/80 uppercase tracking-wider">Response Time</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out 0.3s forwards;
        }
        
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}