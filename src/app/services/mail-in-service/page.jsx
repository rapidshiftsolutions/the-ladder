import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer'
import { Phone, Mail, Package, Truck, Clock, Shield, CheckCircle, MapPin } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'UConnect Radio Repair Mail-In Service | OEM Radio Repair Nationwide',
  description: 'Professional UConnect radio repair mail-in service for Dodge, Ford, GM, Toyota. OEM radio repair with free shipping nationwide. Expert service, 1-year warranty. Call (205) 522-1162.',
  keywords: [
    'uconnect radio repair mail in service',
    'uconnect radio repair mail in service near me',
    'uconnect radio repair mail in service phone number',
    'uconnect radio repair mail in service 2022',
    'oem radio repair mail in',
    'dodge radio repair mail in',
    'ford oem radio repair mail in',
    'gm oem radio repair mail in',
    'toyota oem radio repair mail in',
    'oem car radio repair mail in',
    'radio repair mail in service',
    'mail in radio repair nationwide',
    'roberts oem radio repair mail in',
    'jeep dodge chrysler radio mail in repair service'
  ],
}

export default function MailInServicePage() {
  const steps = [
    {
      step: 1,
      title: "Contact Us for Quote",
      description: "Call or email us with your vehicle info and symptoms. We'll provide a free quote and compatibility check.",
      icon: Phone
    },
    {
      step: 2,
      title: "Receive Shipping Label", 
      description: "We email you a prepaid FedEx shipping label - no cost to you for shipping your unit to us.",
      icon: Mail
    },
    {
      step: 3,
      title: "Package Securely",
      description: "Follow our packing instructions to safely package your infotainment unit for shipping.",
      icon: Package
    },
    {
      step: 4,
      title: "Ship to Our Facility",
      description: "Drop off at any FedEx location or schedule pickup. Your unit will be tracked and insured.",
      icon: Truck
    },
    {
      step: 5,
      title: "Expert Repair",
      description: "Our technicians perform professional repair with OEM-quality parts in 2-3 business days.",
      icon: Clock
    },
    {
      step: 6,
      title: "Return Shipping",
      description: "We ship your repaired unit back via FedEx with tracking and insurance - also free to you.",
      icon: Shield
    }
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 bg-gradient-to-b from-background-dark to-surface-900">
        
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Mail-In Repair Service
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Convenient nationwide repair service with free shipping both ways. 
                Professional infotainment repair from the comfort of your home.
              </p>
              
              {/* Trust Elements */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                  <Truck className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">Free Shipping Both Ways</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">Fully Insured</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">2-3 Day Repair</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                  <MapPin className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">All 50 States</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:2055221162"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Start Mail-In Service
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

        {/* How It Works */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                How Mail-In Service Works
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Simple 6-step process for nationwide repair service
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-lg">{step.step}</span>
                    </div>
                    <div>
                      <step.icon className="w-6 h-6 text-primary-500 mb-3" />
                      <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Coverage */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Nationwide Service Coverage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We serve customers in all 50 states with our mail-in repair service
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600 text-center">
                <MapPin className="w-8 h-8 text-primary-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">All 50 States</h3>
                <p className="text-gray-300 text-sm">Nationwide coverage including Alaska and Hawaii</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600 text-center">
                <Truck className="w-8 h-8 text-primary-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Free Shipping</h3>
                <p className="text-gray-300 text-sm">Prepaid labels for sending to us and return shipping</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600 text-center">
                <Shield className="w-8 h-8 text-primary-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Full Insurance</h3>
                <p className="text-gray-300 text-sm">Your unit is fully insured during shipping both ways</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600 text-center">
                <Clock className="w-8 h-8 text-primary-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Fast Turnaround</h3>
                <p className="text-gray-300 text-sm">2-3 day repair plus 1-2 days shipping each way</p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety & Security */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Your Unit is Safe With Us
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional handling and security measures protect your investment
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Package className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Secure Packaging</h3>
                <p className="text-gray-300">
                  We provide detailed packing instructions and recommend anti-static materials 
                  to protect your unit during shipping.
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Full Insurance Coverage</h3>
                <p className="text-gray-300">
                  Every shipment is fully insured for the replacement value of your unit, 
                  providing complete peace of mind.
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Tracking & Updates</h3>
                <p className="text-gray-300">
                  Real-time tracking for both directions plus regular updates on your 
                  repair progress throughout the process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Mail-In Service FAQ
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">How much does shipping cost?</h3>
                <p className="text-gray-300">
                  Shipping is completely free! We provide prepaid shipping labels for sending your unit to us, 
                  and we pay for return shipping as well. There are no hidden shipping charges.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">What if my unit is damaged during shipping?</h3>
                <p className="text-gray-300">
                  All shipments are fully insured for the replacement value. If any damage occurs during shipping, 
                  insurance will cover the full replacement cost of your unit.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">How long is the total turnaround time?</h3>
                <p className="text-gray-300">
                  Typical total time is 5-7 business days: 1-2 days shipping to us, 2-3 days for repair, 
                  and 1-2 days return shipping. We'll keep you updated throughout the process.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">Do you service customers in all states?</h3>
                <p className="text-gray-300">
                  Yes! We provide mail-in service to all 50 states including Alaska and Hawaii. 
                  Shipping times may be slightly longer for remote areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-primary-500/10 rounded-2xl border border-primary-500/20 p-8 lg:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Start Your Mail-In Repair?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get your free quote and prepaid shipping label today. Professional repair 
                service from anywhere in the United States.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:2055221162"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call to Get Started
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-800/50 border border-primary-500/30 text-white font-medium rounded-lg hover:bg-gray-700/50 transition-all duration-300 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Request Quote Online
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