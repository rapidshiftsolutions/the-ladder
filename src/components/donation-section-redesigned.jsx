'use client'

import { Heart, Shield, CreditCard, DollarSign, TrendingUp } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function DonationSectionRedesigned() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState('')
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

  const amounts = [25, 50, 100, 250]

  const impacts = [
    { amount: 25, description: "Provides emergency transportation for one person" },
    { amount: 50, description: "Covers essential documents and ID replacement" },
    { amount: 100, description: "Helps with utility deposit or medical co-pay" },
    { amount: 250, description: "Provides temporary housing for a family in crisis" }
  ]

  const getCurrentImpact = () => {
    const amount = customAmount || selectedAmount
    if (amount >= 250) return impacts[3].description
    if (amount >= 100) return impacts[2].description
    if (amount >= 50) return impacts[1].description
    if (amount >= 25) return impacts[0].description
    return "Every dollar helps remove barriers"
  }

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-white" id="donate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Information */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-sm uppercase tracking-wider text-[#E74C3C] font-semibold mb-3">
              Make a Difference
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">
              Your Support
              <span className="block text-[#E74C3C] mt-2">Changes Lives</span>
            </h2>
            <p className="text-base sm:text-lg text-[#4A5568] mb-8">
              Every donation directly helps Birmingham residents overcome specific barriers 
              preventing their success. Your generosity provides immediate, tangible support 
              to individuals in crisis.
            </p>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass-card bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-xl hover:bg-white/70 transition-all duration-300">
                <DollarSign className="w-8 h-8 text-[#2C3E50] mb-2" />
                <div className="text-2xl font-bold text-[#1A1A1A]">100%</div>
                <div className="text-sm text-[#4A5568]">Goes to direct assistance</div>
              </div>
              <div className="glass-card bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-xl hover:bg-white/70 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-[#E74C3C] mb-2" />
                <div className="text-2xl font-bold text-[#1A1A1A]">87%</div>
                <div className="text-sm text-[#4A5568]">Success rate</div>
              </div>
            </div>

            {/* Security Badges */}
            <div className="flex items-center gap-4 text-sm text-[#718096]">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#2C3E50]" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-[#2C3E50]" />
                <span>PCI Compliant</span>
              </div>
            </div>
          </div>

          {/* Right Column - Donation Form */}
          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="glass-card bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">Choose Your Impact</h3>

              {/* Amount Selection */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount)
                      setCustomAmount('')
                    }}
                    className={`py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                      selectedAmount === amount && !customAmount
                        ? 'glass-button bg-[#2C3E50]/90 backdrop-blur-md text-white shadow-lg transform scale-105'
                        : 'glass-card bg-white/60 backdrop-blur-md border-2 border-white/40 text-[#4A5568] hover:border-[#2C3E50]/50 hover:bg-white/80'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(0)
                  }}
                  className="glass-input w-full px-4 py-3 border-2 border-white/40 rounded-xl focus:border-[#2C3E50]/60 focus:outline-none transition-all duration-300 text-[#1A1A1A] placeholder-[#718096] bg-white/50 backdrop-blur-md"
                  min="1"
                />
              </div>

              {/* Impact Message */}
              <div className="bg-[#E74C3C]/10 rounded-xl p-4 mb-6">
                <p className="text-sm font-medium text-[#E74C3C]">Your Impact:</p>
                <p className="text-[#1A1A1A] font-semibold mt-1">
                  {getCurrentImpact()}
                </p>
              </div>

              {/* Monthly Giving Option */}
              <label className="flex items-center gap-3 mb-6 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-[#2C3E50] border-2 border-gray-300 rounded focus:ring-[#2C3E50]"
                />
                <span className="text-[#4A5568] group-hover:text-[#1A1A1A] transition-colors">
                  Make this a monthly donation
                </span>
                <Heart className="w-4 h-4 text-[#E74C3C]" />
              </label>

              {/* Donate Button */}
              <a
                href="/donate"
                className="w-full inline-flex items-center justify-center min-h-[48px] px-8 py-3 bg-gradient-to-r from-[#E74C3C] to-[#C0392B] text-white font-semibold rounded-xl hover:from-[#C0392B] hover:to-[#E74C3C] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate ${customAmount || selectedAmount} Now
              </a>

              {/* Tax Deductible Notice */}
              <p className="text-xs text-[#718096] text-center mt-4">
                The Ladder is a 501(c)(3) tax-exempt organization (EIN: 47-2123160).
                Your donation is tax-deductible to the extent allowed by law.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
          animation: slide-up 0.8s ease-out 0.2s forwards;
        }
      `}</style>
    </section>
  )
}