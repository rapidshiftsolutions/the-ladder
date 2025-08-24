import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer'
import { Phone, Mail, Shield, Clock, Truck, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Touchscreen Not Responding Repair | OEM Radio Repair',
  description: 'Fix unresponsive touchscreen issues in your infotainment system. Professional digitizer repair for $400 with 1-year warranty and free shipping.',
  keywords: [
    'touchscreen not responding',
    'unresponsive touchscreen',
    'infotainment touchscreen repair',
    'digitizer repair',
    'touch screen fix',
    'Uconnect touch not working'
  ],
}

export default function TouchscreenRepairPage() {
  const commonCauses = [
    {
      cause: "Damaged Digitizer",
      description: "The touch-sensitive layer has failed or been physically damaged",
      solution: "Digitizer replacement restores full touch functionality"
    },
    {
      cause: "Loose Connection",
      description: "Internal connections have become loose due to vibration or age",
      solution: "Professional reconnection and securing of internal components"
    },
    {
      cause: "Software Corruption",
      description: "Touch calibration data has become corrupted",
      solution: "Recalibration and software restoration during repair"
    },
    {
      cause: "Physical Impact",
      description: "Drop or impact has damaged internal touch components",
      solution: "Component inspection and replacement as needed"
    }
  ]

  const symptoms = [
    "Screen displays normally but doesn't respond to touch",
    "Only certain areas of the screen respond",
    "Touch response is delayed or intermittent",
    "Need to press very hard for touch to register",
    "Touch works sometimes but not others",
    "Screen responds but not where you touch"
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
                Touchscreen Not Responding?
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                We fix unresponsive touchscreens in infotainment systems. Professional digitizer 
                repair restores full touch functionality with our expert service.
              </p>
              
              {/* Alert Box */}
              <div className="max-w-3xl mx-auto mb-8">
                <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                    <div className="text-left">
                      <h3 className="font-semibold text-white mb-2">Quick Diagnosis</h3>
                      <p className="text-gray-300 text-sm">
                        If your screen displays images but doesn't respond to touch, you likely need 
                        <strong className="text-primary-500"> digitizer replacement</strong> - our specialty service.
                      </p>
                    </div>
                  </div>
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
                  Get Free Diagnosis
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms Section */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Touchscreen Problem Symptoms
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Do any of these describe your infotainment touchscreen issue?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {symptoms.map((symptom, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-white">{symptom}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link 
                href="/services/digitizer-replacement" 
                className="inline-flex items-center text-primary-500 hover:text-primary-400 font-medium"
              >
                Learn more about digitizer replacement →
              </Link>
            </div>
          </div>
        </section>

        {/* Common Causes */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Touchscreens Stop Responding
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understanding the root cause helps determine the right repair approach
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {commonCauses.map((item, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                  <h3 className="text-xl font-semibold text-white mb-3">{item.cause}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="bg-primary-500/10 rounded p-3 border-l-4 border-primary-500">
                    <p className="text-primary-400 text-sm font-medium">Solution: {item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Repair Options */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Touchscreen Repair Options
              </h2>
              <p className="text-xl text-gray-300">
                Choose the right repair service for your specific touchscreen issue
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Digitizer Only */}
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Digitizer Replacement</h3>
                <div className="text-3xl font-bold text-primary-500 mb-4">$400</div>
                <p className="text-gray-300 mb-6">
                  Perfect when display works fine but touch doesn't respond
                </p>
                <Link 
                  href="/services/digitizer-replacement"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              {/* LCD + Digitizer */}
              <div className="bg-primary-500/10 rounded-lg p-6 border border-primary-500/20 text-center relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-black px-3 py-1 rounded-full text-sm font-bold">POPULAR</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Complete Assembly</h3>
                <div className="text-3xl font-bold text-primary-500 mb-4">$650</div>
                <p className="text-gray-300 mb-6">
                  When both display and touch need repair - best value option
                </p>
                <Link 
                  href="/services/complete-screen"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              {/* Diagnosis First */}
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Not Sure?</h3>
                <div className="text-3xl font-bold text-green-500 mb-4">FREE</div>
                <p className="text-gray-300 mb-6">
                  Get free diagnosis to determine exactly what your screen needs
                </p>
                <a 
                  href="tel:2055221162"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-700 border border-primary-500/30 text-white font-medium rounded-lg hover:bg-gray-600 transition-all duration-300"
                >
                  Call for Diagnosis
                  <Phone className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Touchscreen Repair FAQ
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">Can I fix an unresponsive touchscreen myself?</h3>
                <p className="text-gray-300">
                  Touchscreen repair requires specialized tools and expertise. DIY attempts often cause additional 
                  damage to delicate internal components. Professional repair ensures proper calibration and longevity.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">How do I know if it's the digitizer or something else?</h3>
                <p className="text-gray-300">
                  If your screen displays images normally but doesn't respond to touch, it's almost always the digitizer. 
                  Our technicians provide free diagnosis to confirm before starting any repair work.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">Will my touchscreen be as responsive as new after repair?</h3>
                <p className="text-gray-300">
                  Yes! Our OEM-quality digitizers provide the same touch sensitivity and responsiveness as the original 
                  equipment. Many customers report their repaired screens work better than before the problem started.
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
                Ready to Fix Your Touchscreen?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get professional touchscreen repair with 1-year warranty, free shipping both ways, 
                and expert diagnosis to solve your problem right the first time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:2055221162"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Free Diagnosis
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