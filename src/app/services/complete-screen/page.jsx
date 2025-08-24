import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer'
import { Phone, Mail, Shield, Clock, Truck, CheckCircle, Star, ArrowRight, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Complete Screen Assembly $650 - UConnect & OEM Radio Repair Bundle',
  description: 'Complete OEM radio screen assembly replacement for Dodge, Ford, GM, Toyota. UConnect radio repair bundle - digitizer + LCD for $650. Mail-in service with free shipping nationwide.',
  keywords: [
    'oem radio repair complete screen',
    'uconnect radio repair complete',
    'dodge radio repair complete screen',
    'ford oem radio repair assembly',
    'gm oem radio repair complete',
    'toyota oem radio repair assembly',
    'oem car radio repair complete',
    'complete screen replacement $650',
    'radio repair assembly service',
    'oem factory radio complete repair'
  ],
}

export default function CompleteScreenPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 bg-gradient-to-b from-background-dark to-surface-900">
        
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Complete Screen Assembly
              </h1>
              <div className="text-4xl font-bold text-primary-500 mb-4">Starting at $650</div>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                When both your LCD display and touchscreen digitizer need replacement, 
                we provide complete screen assembly service for maximum value.
              </p>
              
              {/* Trust Elements */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">1 Year Warranty</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                  <Truck className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">Free 2-Way Shipping</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">3-4 Day Turnaround</span>
                </div>
              </div>

              {/* CTA Buttons */}
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

        {/* When You Need Complete Assembly */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                When Do You Need Complete Screen Assembly?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Sometimes both the display and touch functions are damaged
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <CheckCircle className="w-8 h-8 text-primary-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Severe Physical Damage</h3>
                <p className="text-gray-300 text-sm">Screen is cracked and also has display issues or won't turn on</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <CheckCircle className="w-8 h-8 text-primary-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Age-Related Failure</h3>
                <p className="text-gray-300 text-sm">Both touch and display functions have degraded over time</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <CheckCircle className="w-8 h-8 text-primary-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Water/Heat Damage</h3>
                <p className="text-gray-300 text-sm">Environmental damage has affected multiple components</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <CheckCircle className="w-8 h-8 text-primary-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Previous Repair Failure</h3>
                <p className="text-gray-300 text-sm">An incomplete repair has led to additional damage</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <CheckCircle className="w-8 h-8 text-primary-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Preventive Replacement</h3>
                <p className="text-gray-300 text-sm">Replacing both components together for longevity</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <CheckCircle className="w-8 h-8 text-primary-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Cost Savings</h3>
                <p className="text-gray-300 text-sm">Bundle pricing saves money vs. separate repairs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Options */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Complete Assembly Pricing
              </h2>
              <p className="text-xl text-gray-300">
                Save money with our bundle pricing vs. individual repairs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Individual Services */}
              <div className="bg-gray-800/30 rounded-lg p-8 border border-gray-600">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Individual Repairs</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Digitizer Replacement</span>
                    <span className="text-white font-semibold">$400</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">LCD Replacement</span>
                    <span className="text-white font-semibold">$550</span>
                  </div>
                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold">Total if separate:</span>
                      <span className="text-gray-400 line-through text-lg">$950</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bundle Service */}
              <div className="bg-primary-500/10 rounded-lg p-8 border border-primary-500/20 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-black px-4 py-1 rounded-full text-sm font-bold">BEST VALUE</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Complete Assembly</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">LCD + Digitizer Bundle</span>
                    <span className="text-primary-400 font-bold text-2xl">$650</span>
                  </div>
                  <div className="flex justify-between items-center text-green-500">
                    <span className="font-medium">Your Savings:</span>
                    <span className="font-bold">$300</span>
                  </div>
                  <div className="border-t border-gray-600 pt-4">
                    <div className="text-center">
                      <p className="text-gray-300 text-sm">Same 1-year warranty</p>
                      <p className="text-gray-300 text-sm">Free 2-way shipping</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Complete Assembly Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive process ensures both components work perfectly together
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-lg">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Complete Disassembly</h3>
                <p className="text-gray-300 text-sm">Careful separation of all screen components</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-lg">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Dual Component Install</h3>
                <p className="text-gray-300 text-sm">Professional installation of both LCD and digitizer</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-lg">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Calibration & Testing</h3>
                <p className="text-gray-300 text-sm">Ensure perfect display and touch coordination</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-lg">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Quality Assurance</h3>
                <p className="text-gray-300 text-sm">Extended testing of all functions</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Complete Assembly FAQ
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">Should I replace both components even if only one seems damaged?</h3>
                <p className="text-gray-300">
                  It depends on the age and condition of your unit. If one component has failed, the other may be 
                  weakened and could fail soon. Our technicians will assess your specific unit and recommend the 
                  most cost-effective approach.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">How much do I save with complete assembly vs. separate repairs?</h3>
                <p className="text-gray-300">
                  You save $300 with our complete assembly service ($650) vs. separate digitizer ($400) and LCD ($550) 
                  repairs. Plus, you only pay shipping once and get faster overall turnaround.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">Is the warranty the same for complete assembly?</h3>
                <p className="text-gray-300">
                  Yes, our complete assembly service comes with the same 1-year warranty covering both the LCD and 
                  digitizer components, plus all labor and materials.
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
                Ready for Complete Screen Repair?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get both your LCD and digitizer replaced with our money-saving bundle service. 
                1-year warranty, free shipping, and $300 in savings.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:2055221162"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Bundle Quote
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-800/50 border border-primary-500/30 text-white font-medium rounded-lg hover:bg-gray-700/50 transition-all duration-300 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
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