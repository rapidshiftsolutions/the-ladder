import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer'
import { Phone, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Ghost Touch Problems Repair | OEM Radio Repair',
  description: 'Fix ghost touch and phantom touch issues in infotainment screens. Digitizer replacement solves random touches and erratic touch behavior. $400 service.',
}

export default function GhostTouchPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 bg-gradient-to-b from-background-dark to-surface-900">
        
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ghost Touch Problems
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
              Fix phantom touches, random selections, and erratic touch behavior with professional 
              digitizer replacement service.
            </p>

            {/* Redirect Notice */}
            <div className="bg-primary-500/10 rounded-2xl border border-primary-500/20 p-8 lg:p-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ghost Touch = Digitizer Replacement
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Ghost touch issues are caused by damaged or failing digitizer components. 
                Our digitizer replacement service completely resolves phantom touch problems.
              </p>
              
              <div className="bg-gray-800/50 rounded-lg p-4 mb-6 text-left">
                <h3 className="text-white font-semibold mb-2">Common Ghost Touch Symptoms:</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Screen registers touches when you're not touching it</li>
                  <li>• Random menu selections or button presses</li>
                  <li>• Screen "acts on its own" without user input</li>
                  <li>• Touch inputs register in wrong locations</li>
                  <li>• Multiple touches detected from single finger press</li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services/digitizer-replacement"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 text-lg"
                >
                  View Digitizer Replacement Service
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:2055221162"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-800/50 border border-primary-500/30 text-white font-medium rounded-lg hover:bg-gray-700/50 transition-all duration-300 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (205) 522-1162
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}