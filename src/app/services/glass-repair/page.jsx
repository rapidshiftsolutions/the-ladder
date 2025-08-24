import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer'
import { Phone, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Cracked Screen Glass Repair | OEM Radio Repair',
  description: 'Professional repair for cracked infotainment screen glass. Digitizer replacement restores touch function and appearance. $400 with 1-year warranty.',
}

export default function GlassRepairPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 bg-gradient-to-b from-background-dark to-surface-900">
        
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Cracked Screen Glass Repair
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
              Professional digitizer replacement fixes cracked glass and restores full touch functionality 
              to your infotainment screen.
            </p>

            {/* Redirect Notice */}
            <div className="bg-primary-500/10 rounded-2xl border border-primary-500/20 p-8 lg:p-12 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">
                Cracked Glass = Digitizer Replacement
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                When your infotainment screen glass is cracked, you need digitizer replacement service. 
                The glass is part of the digitizer assembly that handles touch input.
              </p>
              
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