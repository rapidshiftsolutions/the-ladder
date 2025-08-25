'use client'

import { ArrowRight, Building2, Users, Handshake, Heart, CheckCircle, MapPin, Phone, Mail, ExternalLink } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function PartnershipNetworkShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const [activePartner, setActivePartner] = useState(0)
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

  // Birmingham nonprofit partners (based on The Ladder's collaboration model)
  const partnerOrganizations = [
    {
      name: "United Way of Central Alabama",
      focus: "Community Coordination & Resource Connection",
      description: "Partnering to identify individuals who need assistance beyond traditional program scope",
      services: ["Resource Coordination", "Community Programs", "Emergency Assistance"],
      partnership: "Referral and resource sharing partnership",
      logo: "/TheLadder/partners/united-way-placeholder.png",
      website: "https://www.uwca.org",
      phone: "(205) 251-5131",
      color: "#007AFF"
    },
    {
      name: "Community Foundation of Greater Birmingham", 
      focus: "Grant Making & Community Investment",
      description: "Supporting our mission through strategic funding and community connections",
      services: ["Grant Programs", "Community Development", "Nonprofit Support"],
      partnership: "Funding and strategic partnership",
      logo: "/TheLadder/partners/cfgb-placeholder.png",
      website: "https://www.cfbham.org",
      phone: "(205) 328-8641",
      color: "#34C759"
    },
    {
      name: "Grace Klein Community",
      focus: "Food Security & Basic Needs",
      description: "Collaborating to address barriers beyond food security for individuals and families",
      services: ["Food Distribution", "Emergency Relief", "Community Support"],
      partnership: "Cross-referral and resource coordination",
      logo: "/TheLadder/partners/grace-klein-placeholder.png",
      website: "https://www.gracekleincommunity.org",
      phone: "(205) 386-9653",
      color: "#FF9500"
    },
    {
      name: "YWCA Central Alabama",
      focus: "Housing & Family Support Services",
      description: "Working together to address individual barriers preventing housing stability",
      services: ["Housing Assistance", "Family Support", "Crisis Services"],
      partnership: "Individual case coordination partnership",
      logo: "/TheLadder/partners/ywca-placeholder.png",
      website: "https://www.ywcabham.org",
      phone: "(205) 322-9922",
      color: "#FF3B30"
    }
  ]

  const partnershipBenefits = [
    {
      icon: Handshake,
      title: "Collaborative Approach",
      description: "We work WITH nonprofits, not in competition. Together we fill gaps in services.",
      color: "#007AFF"
    },
    {
      icon: Heart,
      title: "Individual Focus",
      description: "Partners refer clients who need assistance with very specific, personal barriers.",
      color: "#FF3B30"
    },
    {
      icon: Users,
      title: "Shared Success",
      description: "When we help someone overcome their barrier, it strengthens the entire support network.",
      color: "#34C759"
    }
  ]

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}
    >
      {/* iOS-style ambient background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #007AFF15, transparent)' }}
        />
        <div 
          className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #34C75915, transparent)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-in' : 'opacity-0'}`}>
          <div 
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{
              background: 'rgba(0, 122, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              color: '#007AFF',
              border: '1px solid rgba(0, 122, 255, 0.2)'
            }}
          >
            Our Partnership Network
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6" style={{ color: '#1d1d1f' }}>
            Trusted Birmingham
            <br />
            <span style={{ color: '#007AFF' }}>Nonprofit Partners</span>
          </h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto" style={{ color: '#86868b' }}>
            We collaborate with Birmingham's most trusted nonprofit organizations to ensure no one falls through the cracks. 
            When they identify someone with a specific barrier outside their scope, we step in to help.
          </p>
        </div>

        {/* Partnership Philosophy */}
        <div className={`mb-20 ${isVisible ? 'animate-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          <div 
            className="relative p-12 rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(0, 122, 255, 0.05)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              border: '1px solid rgba(0, 122, 255, 0.1)',
              boxShadow: `
                0 20px 60px rgba(0, 122, 255, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.3)
              `
            }}
          >
            <div className="grid lg:grid-cols-3 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                    style={{
                      background: `${benefit.color}15`,
                      border: `1px solid ${benefit.color}20`
                    }}
                  >
                    <benefit.icon className="w-8 h-8" style={{ color: benefit.color }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#1d1d1f' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner Organizations Grid */}
        <div className={`grid lg:grid-cols-2 gap-8 mb-20 ${isVisible ? 'animate-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          {partnerOrganizations.map((partner, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-pointer ${
                activePartner === index ? 'ring-2 ring-opacity-50' : ''
              }`}
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                boxShadow: activePartner === index 
                  ? `0 20px 60px ${partner.color}20, inset 0 1px 0 rgba(255, 255, 255, 0.3)`
                  : `0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.3)`,
                ringColor: partner.color
              }}
              onClick={() => setActivePartner(activePartner === index ? -1 : index)}
            >
              {/* Partner Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#1d1d1f' }}>
                    {partner.name}
                  </h3>
                  <p className="text-base font-semibold mb-3" style={{ color: partner.color }}>
                    {partner.focus}
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                    {partner.description}
                  </p>
                </div>
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center ml-6"
                  style={{
                    background: `${partner.color}15`,
                    border: `1px solid ${partner.color}20`
                  }}
                >
                  <Building2 className="w-8 h-8" style={{ color: partner.color }} />
                </div>
              </div>

              {/* Services */}
              <div className="mb-6">
                <h4 className="text-sm font-bold mb-3" style={{ color: '#1d1d1f' }}>
                  CORE SERVICES
                </h4>
                <div className="flex flex-wrap gap-2">
                  {partner.services.map((service, serviceIndex) => (
                    <span
                      key={serviceIndex}
                      className="px-3 py-1 rounded-lg text-sm"
                      style={{
                        background: `${partner.color}10`,
                        color: partner.color,
                        border: `1px solid ${partner.color}20`
                      }}
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Partnership Type */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Handshake className="w-4 h-4" style={{ color: partner.color }} />
                  <span className="text-sm font-bold" style={{ color: '#1d1d1f' }}>
                    PARTNERSHIP TYPE
                  </span>
                </div>
                <p className="text-sm" style={{ color: '#4a5568' }}>
                  {partner.partnership}
                </p>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col sm:flex-row gap-3">
                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                    style={{
                      background: partner.color,
                      color: 'white',
                      border: `1px solid ${partner.color}`
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Website
                  </a>
                )}
                {partner.phone && (
                  <a
                    href={`tel:${partner.phone}`}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'rgba(255, 255, 255, 0.7)',
                      backdropFilter: 'blur(20px)',
                      color: partner.color,
                      border: `1px solid ${partner.color}30`
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    {partner.phone}
                  </a>
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
              background: 'linear-gradient(135deg, rgba(52, 199, 89, 0.9), rgba(52, 199, 89, 0.8))',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: `
                0 20px 60px rgba(52, 199, 89, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2)
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
                <Users className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-4xl font-bold text-white mb-8 leading-tight">
                Partner With The Ladder
              </h3>
              <p className="text-2xl text-white/90 mb-10 leading-relaxed max-w-4xl mx-auto">
                Are you a Birmingham nonprofit that encounters clients with barriers outside your scope? 
                <strong className="text-white"> Let's work together to ensure no one falls through the cracks.</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    color: '#34C759',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 4px 20px rgba(255, 255, 255, 0.3)'
                  }}
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Contact Us About Partnership
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
                  <Building2 className="w-5 h-5 mr-3" />
                  Learn About Our Partnership Process
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                </a>
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