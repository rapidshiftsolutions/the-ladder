import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer'
import { Phone, Mail, Shield, Clock, Truck, CheckCircle, Star, ArrowRight, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'LCD Replacement $550 - UConnect & OEM Radio Display Repair',
  description: 'Professional OEM radio LCD replacement for Dodge, Ford, GM, Toyota vehicles. UConnect radio repair, black screen, display issues, pixel damage. Mail-in service $550 with free shipping.',
  keywords: [
    'oem radio repair lcd',
    'uconnect radio repair black screen',
    'dodge radio repair lcd',
    'ford oem radio repair display',
    'gm oem radio repair lcd',
    'toyota oem radio repair screen',
    'oem car radio repair display',
    'dodge ram radio repair lcd',
    'dodge charger radio repair screen',
    'dodge caravan radio repair display',
    'uconnect radio repair mail in service',
    'oem radio repair near me',
    'radio repair near me',
    '$550 lcd replacement',
    'black screen repair',
    'display not working'
  ],
}

export default function LCDReplacementPage() {
  const symptoms = [
    { issue: "Black/blank screen", description: "Screen won't turn on or display anything" },
    { issue: "Dim or no backlight", description: "Screen is very dark or has no illumination" },
    { issue: "Pixel damage", description: "Dead pixels, lines, or color distortion" },
    { issue: "Flickering display", description: "Screen flickers, blinks, or has unstable image" },
    { issue: "Partial display", description: "Only part of the screen shows content" },
    { issue: "Color problems", description: "Wrong colors, washed out, or tinted display" }
  ]

  const compatibleVehicles = [
    "Dodge Charger (2011-2014)",
    "Dodge Journey (2011-2019)", 
    "Dodge Challenger (2011-2020)",
    "Dodge Durango (2011-2021)",
    "Chrysler 300 (2011-2014)",
    "Chrysler Pacifica (2017-2023)",
    "Jeep Wrangler JL (2018-2023)",
    "Jeep Grand Cherokee WK (2014-2022)",
    "Cadillac CTS (2013-2019)",
    "Cadillac ATS (2013-2019)",
    "Ram 1500 (2013-2018)"
  ]

  const processSteps = [
    { step: 1, title: "Free Diagnosis", description: "We examine your unit and confirm LCD replacement is needed" },
    { step: 2, title: "LCD Removal", description: "Careful disassembly to access the damaged LCD panel" },
    { step: 3, title: "OEM LCD Installation", description: "Install high-quality replacement LCD with proper calibration" },
    { step: 4, title: "Full System Test", description: "Comprehensive testing of display quality and functionality" },
    { step: 5, title: "Quality Assurance", description: "Final inspection and 1-year warranty activation" }
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
                LCD Replacement
              </h1>
              <div className="text-6xl font-bold text-primary-500 mb-4">$550</div>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Professional LCD screen replacement service. Fix black screens, display issues, 
                pixel damage, and backlight problems with our expert repair.
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
                  <span className="text-gray-300">2-3 Day Turnaround</span>
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

        {/* What We Fix Section */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                LCD Display Problems We Fix
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our LCD replacement service resolves all display-related issues
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {symptoms.map((symptom, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{symptom.issue}</h3>
                      <p className="text-gray-300 text-sm">{symptom.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compatible Vehicles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Compatible Vehicles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We specialize in LCD replacement for these vehicle models
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {compatibleVehicles.map((vehicle, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-600 text-center">
                  <span className="text-white font-medium">{vehicle}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-300 mb-4">Don't see your vehicle? We may still be able to help!</p>
              <Link href="/contact" className="text-primary-500 hover:text-primary-400 font-medium">
                Contact us to check compatibility →
              </Link>
            </div>
          </div>
        </section>

        {/* Repair Process */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our LCD Replacement Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Precision 5-step process ensures perfect display quality
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Save 54% vs. Competitors
              </h2>
            </div>

            <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-600">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold">Service Provider</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">Price</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">Warranty</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">Shipping</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-600 bg-primary-500/10">
                      <td className="px-6 py-4 font-semibold text-primary-400">OEM Radio Repair</td>
                      <td className="px-6 py-4 text-center text-primary-400 font-bold text-xl">$550</td>
                      <td className="px-6 py-4 text-center text-white">1 Year</td>
                      <td className="px-6 py-4 text-center text-white">Free Both Ways</td>
                    </tr>
                    <tr className="border-t border-gray-600">
                      <td className="px-6 py-4 text-gray-300">Infotainment.com</td>
                      <td className="px-6 py-4 text-center text-gray-300 line-through">$1,199</td>
                      <td className="px-6 py-4 text-center text-gray-300">90 Days</td>
                      <td className="px-6 py-4 text-center text-gray-300">Customer Pays</td>
                    </tr>
                    <tr className="border-t border-gray-600">
                      <td className="px-6 py-4 text-gray-300">Dealership</td>
                      <td className="px-6 py-4 text-center text-gray-300">$1,200+</td>
                      <td className="px-6 py-4 text-center text-gray-300">30-90 Days</td>
                      <td className="px-6 py-4 text-center text-gray-300">N/A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="inline-flex items-center space-x-2 text-green-500 text-xl font-bold">
                <span>You Save $649+ (54%)</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                LCD Replacement FAQ
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">What causes LCD failure in infotainment systems?</h3>
                <p className="text-gray-300">
                  LCD failure can be caused by age, heat exposure, manufacturing defects, or physical damage. 
                  The backlight may fail, pixels can die, or the entire panel may stop displaying images. 
                  These issues require complete LCD replacement.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">How do I know if I need LCD vs. digitizer replacement?</h3>
                <p className="text-gray-300">
                  If your screen doesn't display anything (black screen), has lines/pixels issues, or backlight 
                  problems, you need LCD replacement. If the display works but touch doesn't respond, you need 
                  digitizer replacement. Some cases require both.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">What quality LCD do you use for replacements?</h3>
                <p className="text-gray-300">
                  We use OEM-equivalent LCD panels that match or exceed the original specifications. Our LCDs 
                  provide the same brightness, color accuracy, and longevity as the original equipment.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">Will the new LCD last as long as the original?</h3>
                <p className="text-gray-300">
                  Yes, our replacement LCDs are designed to last as long as or longer than the original. We back 
                  this with our 1-year warranty, and many customers report their repaired units lasting for years.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-primary-500/10 rounded-2xl border border-primary-500/20 p-8 lg:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Fix Your Display?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get your LCD replaced by experts with a 1-year warranty, free shipping both ways, 
                and save $649 compared to major competitors.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:2055221162"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Free Quote
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