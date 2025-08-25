'use client'

import { Users, Target, Heart, Handshake, ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function HowWeHelpRedesigned() {
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

  const steps = [
    {
      icon: Users,
      title: "Partner Identifies Need",
      description: "A nonprofit partner identifies someone facing a barrier they can't overcome.",
      color: "#2C3E50"
    },
    {
      icon: Target,
      title: "We Assess the Barrier",
      description: "The Ladder interviews the person to identify the specific 'missing rung.'",
      color: "#34495E"
    },
    {
      icon: Heart,
      title: "Provide Targeted Support",
      description: "We work with the individual to remove their specific barrier.",
      color: "#E74C3C"
    },
    {
      icon: Handshake,
      title: "Follow Up for Success",
      description: "Ongoing support and accountability to ensure sustainable progress.",
      color: "#1C2833"
    }
  ]

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 bg-gradient-to-br from-white to-gray-50 overflow-hidden" id="how-we-help">
      {/* Glass morphism background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-64 h-64 bg-[var(--ladder-blue)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-[var(--ladder-green)]/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Mobile First */}
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-sm uppercase tracking-wider text-[#E74C3C] font-semibold mb-3">
            Our Approach
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            How We Help People
            <span className="block text-[#2C3E50] mt-2">Climb Over Barriers</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568] max-w-3xl mx-auto px-4">
            We focus on people over problems, addressing individual roadblocks 
            rather than specific issues. Each person has unique barriers preventing their progress.
          </p>
        </div>

        {/* Process Steps - Mobile First Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className="relative glass-card bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6 sm:p-8 hover:bg-white/80 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full shadow-xl">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-12 h-12 glass-card bg-gradient-to-br from-[#E74C3C]/90 to-[#C0392B]/90 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div 
                  className="w-14 h-14 glass-card backdrop-blur-md border border-white/30 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 shadow-lg"
                  style={{ backgroundColor: `${step.color}15` }}
                >
                  <step.icon className="w-7 h-7" style={{ color: step.color }} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connection Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-gray-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Mission Statement Card */}
        <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-gradient-to-br from-[#2C3E50] to-[#34495E] rounded-3xl p-8 sm:p-12 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-white mb-8 leading-relaxed">
                "We focus on <span className="text-[#E74C3C]">people over problems</span>, 
                helping individuals one by one climb over very specific, 
                personal barriers that are otherwise keeping them from moving forward in life."
              </blockquote>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/how-we-help"
                  className="group inline-flex items-center justify-center min-h-[48px] px-6 py-3 bg-white text-[#2C3E50] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200"
                >
                  Learn More About Our Services
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/partners"
                  className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all duration-200"
                >
                  Partner Organizations
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}