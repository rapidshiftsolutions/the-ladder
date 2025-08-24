import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer'
import { Shield, CheckCircle, Clock, Phone, Mail, FileText, AlertTriangle, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: '1-Year Warranty - UConnect & OEM Radio Repair Service Guarantee',
  description: 'Comprehensive 1-year warranty on all OEM radio repair services. UConnect radio repair, Dodge radio repair warranty coverage. Professional service guarantee nationwide.',
  keywords: [
    'oem radio repair warranty',
    'uconnect radio repair warranty',
    'dodge radio repair warranty',
    'ford oem radio repair warranty',
    'gm oem radio repair warranty',
    'toyota oem radio repair warranty',
    'oem car radio repair warranty',
    'radio repair warranty service',
    '1 year warranty radio repair',
    'oem radio repair guarantee'
  ],
}

export default function WarrantyPage() {
  const warrantyFeatures = [
    {
      icon: Shield,
      title: "Full 1-Year Coverage",
      description: "Complete protection against defects in parts and workmanship for 365 days from completion date"
    },
    {
      icon: CheckCircle,
      title: "Parts & Labor Included",
      description: "Warranty covers both replacement parts and all labor costs for covered repairs"
    },
    {
      icon: Clock,
      title: "Fast Warranty Service",
      description: "Priority processing for warranty claims with expedited repair turnaround"
    },
    {
      icon: FileText,
      title: "Simple Claim Process",
      description: "Easy warranty claim submission with minimal paperwork and quick approval"
    }
  ]

  const coveredIssues = [
    "Defective digitizer replacement components",
    "LCD screen failures due to manufacturing defects",
    "Touch sensitivity issues after digitizer repair",
    "Display problems after LCD replacement", 
    "Workmanship errors in repair process",
    "Component failures within warranty period",
    "Calibration and alignment issues",
    "Connection problems related to our repair work"
  ]

  const notCoveredIssues = [
    "Physical damage from impact or mishandling",
    "Water damage or liquid exposure",
    "Damage from vehicle accidents",
    "Normal wear and tear over time",
    "Issues unrelated to our repair work",
    "Damage from attempted DIY repairs",
    "Problems caused by vehicle electrical issues",
    "Modifications made by other repair shops"
  ]

  const warrantySteps = [
    {
      step: 1,
      title: "Contact Us",
      description: "Call (205) 522-1162 or email with your warranty concern and original repair details"
    },
    {
      step: 2, 
      title: "Claim Review",
      description: "We review your warranty claim and determine coverage within 24 hours"
    },
    {
      step: 3,
      title: "Return Shipping", 
      description: "If covered, we provide prepaid shipping labels for return to our facility"
    },
    {
      step: 4,
      title: "Warranty Repair",
      description: "Priority repair service with expedited turnaround for warranty work"
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
                1-Year Warranty & Guarantees
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Every repair is backed by our comprehensive 1-year warranty covering parts and labor. 
                We stand behind our work with industry-leading protection.
              </p>
              
              {/* Warranty Badge */}
              <div className="inline-flex items-center bg-primary-500/10 border border-primary-500/20 rounded-lg px-6 py-3">
                <Shield className="w-6 h-6 text-primary-500 mr-3" />
                <span className="text-primary-500 font-semibold">Protected by 365-Day Warranty</span>
              </div>
            </div>
          </div>
        </section>

        {/* Warranty Features */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Warranty Coverage Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive protection for your investment in professional infotainment repair
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {warrantyFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Covered */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What's Covered vs. Not Covered
              </h2>
              <p className="text-xl text-gray-300">
                Clear understanding of warranty coverage terms
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Covered */}
              <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/20">
                <h3 className="text-2xl font-bold text-green-500 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Warranty Covers
                </h3>
                <ul className="space-y-3">
                  {coveredIssues.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Covered */}
              <div className="bg-red-500/10 rounded-lg p-6 border border-red-500/20">
                <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  Not Covered
                </h3>
                <ul className="space-y-3">
                  {notCoveredIssues.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Warranty Claim Process */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                How to Submit a Warranty Claim
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Simple 4-step process to get your warranty repair started
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {warrantySteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warranty Information */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Important Warranty Information
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">Warranty Period</h3>
                <p className="text-gray-300">
                  Your warranty begins on the date we complete your repair and ship your unit back to you. 
                  The full 365-day warranty period covers both parts and labor for any issues related to our repair work.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">Warranty Registration</h3>
                <p className="text-gray-300">
                  Your warranty is automatically registered when we complete your repair. You'll receive warranty 
                  documentation via email with your repair completion notice. No additional registration required.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">Proof of Purchase</h3>
                <p className="text-gray-300">
                  Keep your original repair invoice and any warranty documentation we provide. This serves as proof 
                  of your warranty coverage. We also maintain records in our system for easy warranty claim verification.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-3">Warranty Transfers</h3>
                <p className="text-gray-300">
                  Warranty coverage is transferable if you sell your vehicle during the warranty period. 
                  Contact us to transfer warranty registration to the new owner with proof of vehicle sale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Guarantees */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Beyond Our Warranty
              </h2>
              <p className="text-xl text-gray-300">
                Additional guarantees that protect your investment
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600 text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">No-Fix, No-Fee Guarantee</h3>
                <p className="text-gray-300">
                  If we can't successfully repair your unit, you don't pay. We only charge for repairs we complete successfully.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600 text-center">
                <Shield className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Satisfaction Guarantee</h3>
                <p className="text-gray-300">
                  Not completely satisfied with your repair? Contact us within 30 days and we'll make it right.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-600 text-center">
                <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Turnaround Guarantee</h3>
                <p className="text-gray-300">
                  We guarantee 2-3 business day turnaround for most repairs, or we'll provide status updates and expedited service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-primary-500/10 rounded-2xl border border-primary-500/20 p-8 lg:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Need Warranty Support?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Questions about your warranty coverage or need to submit a claim? 
                Our warranty support team is here to help.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact for Warranty
                </a>
                <a
                  href="mailto:warranty@oemradiorepair.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-800/50 border border-primary-500/30 text-white font-medium rounded-lg hover:bg-gray-700/50 transition-all duration-300 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  warranty@oemradiorepair.com
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