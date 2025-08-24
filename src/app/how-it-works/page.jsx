import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer'
import { Phone, Mail, MessageCircle, Package, Truck, Wrench, Shield, CheckCircle, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'How UConnect & OEM Radio Repair Mail-In Service Works | Step by Step',
  description: 'Learn how our UConnect radio repair mail-in service works. Simple 6-step process for Dodge, Ford, GM, Toyota radio repair with free shipping and 1-year warranty.',
  keywords: [
    'uconnect radio repair mail in service',
    'oem radio repair process',
    'dodge radio repair how it works',
    'ford oem radio repair process',
    'gm oem radio repair steps',
    'toyota oem radio repair guide',
    'mail in radio repair process',
    'oem car radio repair steps',
    'radio repair mail in guide',
    'how oem radio repair works'
  ],
}

export default function HowItWorksPage() {
  const steps = [
    {
      step: 1,
      title: "Contact Us for Quote",
      description: "Call us at (205) 522-1162 or use our contact form to describe your issue and get a free quote.",
      details: [
        "Describe your screen problems",
        "Provide your vehicle year, make, and model", 
        "Get instant compatibility confirmation",
        "Receive detailed quote with no hidden fees"
      ],
      icon: MessageCircle,
      estimatedTime: "5-10 minutes"
    },
    {
      step: 2,
      title: "Receive Shipping Instructions",
      description: "We'll email you a prepaid FedEx shipping label and detailed packing instructions.",
      details: [
        "Prepaid shipping label (no cost to you)",
        "Step-by-step packing instructions",
        "Required forms and paperwork",
        "Our facility address and contact info"
      ],
      icon: Mail,
      estimatedTime: "Within 1 hour"
    },
    {
      step: 3,
      title: "Pack & Ship Your Unit",
      description: "Follow our packing guide to safely package your infotainment unit for shipping.",
      details: [
        "Remove unit from your vehicle",
        "Wrap in anti-static material",
        "Pack securely with provided instructions",
        "Drop off at any FedEx location"
      ],
      icon: Package,
      estimatedTime: "30-60 minutes"
    },
    {
      step: 4,
      title: "We Receive & Diagnose",
      description: "Your unit arrives at our facility where we perform comprehensive diagnosis.",
      details: [
        "Professional intake and logging",
        "Detailed diagnostic testing",
        "Confirmation of repair needed",
        "Photo documentation of issues"
      ],
      icon: Truck,
      estimatedTime: "1-2 business days shipping"
    },
    {
      step: 5,
      title: "Expert Repair Service",
      description: "Our technicians perform professional repair with OEM-quality parts.",
      details: [
        "Precision disassembly and cleaning",
        "Installation of OEM-quality components",
        "Comprehensive testing and calibration",
        "Quality assurance inspection"
      ],
      icon: Wrench,
      estimatedTime: "2-3 business days"
    },
    {
      step: 6,
      title: "Return Shipping",
      description: "We ship your fully repaired unit back with tracking and 1-year warranty.",
      details: [
        "Final quality control testing",
        "Secure packaging for return",
        "Free return shipping with tracking",
        "1-year warranty activation"
      ],
      icon: Shield,
      estimatedTime: "1-2 business days shipping"
    }
  ]

  const guarantees = [
    {
      icon: Shield,
      title: "1-Year Warranty",
      description: "Every repair is backed by our comprehensive 1-year warranty covering parts and labor."
    },
    {
      icon: Truck,
      title: "Free 2-Way Shipping",
      description: "We provide prepaid shipping labels for both directions - no shipping costs to you."
    },
    {
      icon: CheckCircle,
      title: "No-Fix, No-Fee",
      description: "If we can't fix your unit, you don't pay. We only charge for successful repairs."
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Most repairs completed in 2-3 business days plus shipping time."
    }
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 bg-gradient-to-b from-background-dark to-surface-900">
        
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                How Our Repair Service Works
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Simple 6-step mail-in process gets your infotainment screen working perfectly. 
                Professional repair service from anywhere in the United States.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">5-7 Day Total Time</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                  <Truck className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">Free Shipping Both Ways</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">1 Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-black font-bold text-lg">{step.step}</span>
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">{step.title}</h2>
                        <p className="text-primary-500 font-medium">{step.estimatedTime}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-300">{step.description}</p>
                    
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gray-800/50 rounded-full flex items-center justify-center border border-gray-600">
                      <step.icon className="w-16 h-16 text-primary-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Guarantees */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Service Guarantees
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We stand behind our work with industry-leading guarantees and customer protection
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <guarantee.icon className="w-8 h-8 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{guarantee.title}</h3>
                  <p className="text-gray-300 text-sm">{guarantee.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Summary */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Typical Timeline
              </h2>
              <p className="text-xl text-gray-300">
                From initial contact to receiving your repaired unit back
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-lg border border-gray-600 overflow-hidden">
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-500 mb-2">Day 1</div>
                    <p className="text-white font-medium mb-1">Contact & Ship</p>
                    <p className="text-gray-300 text-sm">Get quote and ship your unit</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-500 mb-2">Days 2-5</div>
                    <p className="text-white font-medium mb-1">Repair Process</p>
                    <p className="text-gray-300 text-sm">Shipping, diagnosis, and professional repair</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-500 mb-2">Days 6-7</div>
                    <p className="text-white font-medium mb-1">Return Delivery</p>
                    <p className="text-gray-300 text-sm">Fully repaired unit arrives back to you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-primary-500/10 rounded-2xl border border-primary-500/20 p-8 lg:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us today to begin the repair process. Free quotes, expert service, 
                and complete satisfaction guaranteed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:2055221162"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (205) 522-1162
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-800/50 border border-primary-500/30 text-white font-medium rounded-lg hover:bg-gray-700/50 transition-all duration-300 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}