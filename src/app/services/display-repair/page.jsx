import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer'
import { Phone, Mail, Shield, Clock, Truck, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Screen Flickering & Black Screen Repair | OEM Radio Repair',
  description: 'Fix flickering screens, black screens, and display issues in infotainment systems. Professional LCD repair for $550 with 1-year warranty.',
  keywords: [
    'screen flickering repair',
    'black screen repair',
    'display problems',
    'LCD repair',
    'infotainment display issues',
    'screen won\'t turn on'
  ],
}

export default function DisplayRepairPage() {
  const displayIssues = [
    {
      issue: "Black/Blank Screen",
      description: "Screen won't turn on or displays nothing",
      commonCause: "LCD backlight failure or LCD panel damage",
      solution: "LCD replacement"
    },
    {
      issue: "Flickering Display",
      description: "Screen flickers, blinks, or has unstable image",
      commonCause: "Failing backlight inverter or loose connections",
      solution: "LCD replacement or connection repair"
    },
    {
      issue: "Dim/Dark Screen",
      description: "Screen is very dark even at maximum brightness",
      commonCause: "Backlight LED failure",
      solution: "LCD replacement with new backlight system"
    },
    {
      issue: "Lines or Distortion",
      description: "Vertical/horizontal lines, distorted images",
      commonCause: "LCD panel damage or driver circuit failure",
      solution: "Complete LCD replacement"
    },
    {
      issue: "Color Problems",
      description: "Wrong colors, washed out, or tinted display",
      commonCause: "LCD color filter damage or calibration issues",
      solution: "LCD replacement and calibration"
    },
    {
      issue: "Partial Display",
      description: "Only part of screen shows content",
      commonCause: "LCD panel failure or connection issues",
      solution: "LCD replacement"
    }
  ]

  const troubleshootingSteps = [
    {
      step: 1,
      action: "Check Basic Power",
      description: "Ensure your vehicle is running and infotainment system receives power"
    },
    {
      step: 2,
      action: "Try System Reset",
      description: "Hold power button for 10+ seconds or disconnect car battery briefly"
    },
    {
      step: 3,
      action: "Inspect for Physical Damage",
      description: "Look for cracks, impact damage, or signs of overheating"
    },
    {
      step: 4,
      action: "Test in Different Conditions",
      description: "Try in bright/dark conditions and hot/cold temperatures"
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
                Screen Flickering or Black?
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                We fix display problems in infotainment systems. Professional LCD repair 
                restores clear, stable display with our expert service.
              </p>
              
              {/* Alert Box */}
              <div className="max-w-3xl mx-auto mb-8">
                <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                    <div className="text-left">
                      <h3 className="font-semibold text-white mb-2">Display Issue Diagnosis</h3>
                      <p className="text-gray-300 text-sm">
                        If your screen has display problems but touch works fine, you likely need 
                        <strong className="text-primary-500"> LCD replacement</strong> - our specialty service.
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

        {/* Display Issues Section */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Common Display Problems We Fix
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional diagnosis and repair for all types of screen display issues
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {displayIssues.map((issue, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                  <h3 className="text-xl font-semibold text-white mb-3">{issue.issue}</h3>
                  <p className="text-gray-300 mb-3">{issue.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="text-primary-500 font-medium">Common Cause:</span>
                      <span className="text-gray-400 ml-2">{issue.commonCause}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-green-500 font-medium">Solution:</span>
                      <span className="text-gray-300 ml-2">{issue.solution}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link 
                href="/services/lcd-replacement" 
                className="inline-flex items-center text-primary-500 hover:text-primary-400 font-medium"
              >
                Learn more about LCD replacement →
              </Link>
            </div>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Quick Troubleshooting Steps
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Try these steps before sending for repair - they might resolve simple issues
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {troubleshootingSteps.map((step, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-600 text-center">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.action}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 max-w-2xl mx-auto">
                <p className="text-yellow-400 text-sm">
                  <strong>Still not working?</strong> These troubleshooting steps resolve about 10% of display issues. 
                  Most display problems require professional LCD replacement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Repair Options */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Display Repair Options
              </h2>
              <p className="text-xl text-gray-300">
                Choose the right repair service for your specific display problem
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* LCD Only */}
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">LCD Replacement</h3>
                <div className="text-3xl font-bold text-primary-500 mb-4">$550</div>
                <p className="text-gray-300 mb-6">
                  Perfect when touch works fine but display has problems
                </p>
                <Link 
                  href="/services/lcd-replacement"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              {/* Complete Assembly */}
              <div className="bg-primary-500/10 rounded-lg p-6 border border-primary-500/20 text-center relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-black px-3 py-1 rounded-full text-sm font-bold">BEST VALUE</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Complete Assembly</h3>
                <div className="text-3xl font-bold text-primary-500 mb-4">$650</div>
                <p className="text-gray-300 mb-6">
                  When both display and touch need repair - maximum value
                </p>
                <Link 
                  href="/services/complete-screen"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              {/* Free Diagnosis */}
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Not Sure?</h3>
                <div className="text-3xl font-bold text-green-500 mb-4">FREE</div>
                <p className="text-gray-300 mb-6">
                  Get professional diagnosis to pinpoint your display issue
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
                Display Repair FAQ
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">Why do infotainment screens go black or start flickering?</h3>
                <p className="text-gray-300">
                  Most display issues are caused by LCD backlight failure, which happens naturally over time due to heat and age. 
                  The LED backlights that illuminate the screen eventually wear out, causing dim, flickering, or black screens.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">Can a flickering screen be repaired, or does it need replacement?</h3>
                <p className="text-gray-300">
                  Flickering typically indicates failing backlight components within the LCD assembly. This requires complete LCD 
                  replacement as the backlight system cannot be repaired separately. Our LCD replacement resolves all flickering issues.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">Will my new LCD be as bright and clear as the original?</h3>
                <p className="text-gray-300">
                  Yes! Our replacement LCDs use the same specifications as the original equipment, often with improved LED backlights 
                  that last longer than the original. Many customers report their screen looks better than when it was new.
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
                Ready to Fix Your Display?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get professional display repair with 1-year warranty, free shipping both ways, 
                and expert diagnosis to restore perfect screen quality.
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