'use client'

import { Mail, Phone, MapPin, Send, ArrowRight, Users } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import ContactForm from './ContactForm'

export default function ContactSectionRedesigned() {
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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch for partnerships or general inquiries",
      action: "info@the-ladder.org",
      color: "#2C3E50"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      action: "Coming Soon",
      color: "#34495E"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Birmingham, Alabama",
      action: "View Location",
      color: "#E74C3C"
    }
  ]

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden" id="contact">
      {/* Glass morphism background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[var(--ladder-blue)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--ladder-red)]/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-sm uppercase tracking-wider text-[#2C3E50] font-semibold mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            Ready to Make a
            <span className="block text-[#E74C3C] mt-2">Difference Together?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568] max-w-3xl mx-auto px-4">
            Whether you need help, want to donate, or are interested in partnering with us,
            we're here to connect and support our Birmingham community.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`group ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl p-6 shadow-xl hover:bg-white/80 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center h-full">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 glass-card bg-white/60 backdrop-blur-md border border-white/40"
                  style={{ backgroundColor: `${method.color}15` }}
                >
                  <method.icon className="w-7 h-7" style={{ color: method.color }} />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-[#4A5568] mb-3">
                  {method.description}
                </p>
                <p className="text-sm font-semibold" style={{ color: method.color }}>
                  {method.action}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Need Help Card */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="bg-gradient-to-br from-[#E74C3C] to-[#C0392B] rounded-3xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-4">Need Help Overcoming a Barrier?</h3>
              <p className="mb-6 text-white/90">
                If you're facing a specific obstacle that's preventing you from moving forward,
                we're here to help. Apply for assistance or have a partner organization refer you.
              </p>
              <a
                href="/get-help"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/30 transition-all duration-200"
              >
                Apply for Assistance
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Partner Card */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="bg-gradient-to-br from-[#2C3E50] to-[#34495E] rounded-3xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-4">Become a Partner Organization</h3>
              <p className="mb-6 text-white/90">
                Join our network of nonprofits working together to help Birmingham residents.
                We complement your services by addressing barriers outside your scope.
              </p>
              <a
                href="/partners"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/30 transition-all duration-200"
              >
                Partner With Us
                <Users className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2 text-center">
              Send Us a Message
            </h3>
            <p className="text-[#4A5568] mb-8 text-center">
              We'll get back to you within 24 hours
            </p>
            <ContactForm />
          </div>
        </div>

        {/* 501(c)(3) Status */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-6 py-3">
            <Shield className="w-5 h-5 text-[#2C3E50]" />
            <p className="text-sm text-[#4A5568]">
              <strong>501(c)(3) Tax-Exempt Organization</strong> • EIN: 47-2123160
            </p>
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
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.1s forwards;
        }
      `}</style>
    </section>
  )
}

function Shield({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}