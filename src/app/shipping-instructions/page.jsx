import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer'
import { Package, AlertTriangle, CheckCircle, Truck, Shield, Phone } from 'lucide-react'

export const metadata = {
  title: 'Shipping Instructions - UConnect & OEM Radio Repair Mail-In Service',
  description: 'Detailed shipping instructions for UConnect and OEM radio repair mail-in service. Safe packing guide for Dodge, Ford, GM, Toyota radios. Free prepaid shipping labels.',
  keywords: [
    'uconnect radio repair mail in service',
    'oem radio repair shipping',
    'dodge radio repair shipping',
    'ford oem radio repair mail in',
    'gm oem radio repair shipping',
    'toyota oem radio repair mail in',
    'radio repair shipping instructions',
    'mail in radio repair packing',
    'oem car radio repair shipping'
  ],
}

export default function ShippingInstructionsPage() {
  const packingSteps = [
    {
      step: 1,
      title: "Remove Unit from Vehicle",
      description: "Carefully disconnect and remove your infotainment unit from the dashboard",
      tips: ["Take photos before disconnecting", "Keep all mounting hardware", "Note any special brackets or adapters"]
    },
    {
      step: 2,
      title: "Clean and Inspect",
      description: "Clean the unit exterior and note any visible damage",
      tips: ["Use soft cloth to clean", "Document scratches or cracks", "Check all connection ports"]
    },
    {
      step: 3,
      title: "Wrap in Anti-Static Material",
      description: "Protect electronic components from static electricity",
      tips: ["Use anti-static bubble wrap if available", "Regular bubble wrap is acceptable", "Avoid newspaper or cloth"]
    },
    {
      step: 4,
      title: "Secure in Box",
      description: "Place wrapped unit in sturdy box with padding on all sides",
      tips: ["Use original box if available", "Minimum 2 inches padding all around", "Fill empty spaces to prevent movement"]
    },
    {
      step: 5,
      title: "Include Required Forms",
      description: "Add completed repair form and contact information",
      tips: ["Print and fill out repair authorization", "Include backup contact number", "Note any special instructions"]
    },
    {
      step: 6,
      title: "Seal and Label",
      description: "Securely seal box and attach prepaid shipping label",
      tips: ["Use strong packing tape", "Attach label flat and secure", "Remove old shipping labels"]
    }
  ]

  const dosDonts = {
    dos: [
      "Use sturdy cardboard box",
      "Wrap unit in protective material",
      "Fill empty spaces with padding",
      "Include completed paperwork",
      "Take photos before packing",
      "Use provided shipping label",
      "Get tracking receipt"
    ],
    donts: [
      "Don't use newspaper for wrapping",
      "Don't leave unit loose in box",
      "Don't include personal items",
      "Don't forget required forms",
      "Don't use damaged boxes",
      "Don't ship without insurance",
      "Don't forget to get receipt"
    ]
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 bg-gradient-to-b from-background-dark to-surface-900">
        
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Shipping Instructions
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto">
                Follow these detailed instructions to safely ship your infotainment unit for repair. 
                Proper packing ensures your unit arrives safely and is returned in perfect condition.
              </p>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Free Prepaid Shipping Label Included</h3>
                  <p className="text-gray-300 text-sm">
                    We provide a prepaid FedEx shipping label with full insurance coverage. 
                    No shipping costs to you, and your unit is fully protected during transport.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packing Steps */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Step-by-Step Packing Guide
              </h2>
              <p className="text-xl text-gray-300">
                Follow these steps carefully to ensure safe transport
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {packingSteps.map((step, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-600">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 mb-3">{step.description}</p>
                      <ul className="space-y-1">
                        {step.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-400 text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dos and Don'ts */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Packing Dos and Don'ts
              </h2>
              <p className="text-xl text-gray-300">
                Quick reference guide for safe packing
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Dos */}
              <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/20">
                <h3 className="text-2xl font-bold text-green-500 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  DO These Things
                </h3>
                <ul className="space-y-3">
                  {dosDonts.dos.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Don'ts */}
              <div className="bg-red-500/10 rounded-lg p-6 border border-red-500/20">
                <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  DON'T Do These
                </h3>
                <ul className="space-y-3">
                  {dosDonts.donts.map((item, index) => (
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

        {/* Shipping Address */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Repair Facility Address
              </h2>
              <p className="text-lg text-gray-300">
                This address will be pre-printed on your shipping label
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-600 text-center">
              <div className="text-2xl font-bold text-white mb-4">OEM Radio Repair</div>
              <div className="space-y-2 text-gray-300">
                <p>2413 1st Ave S</p>
                <p>Birmingham, AL 35233</p>
                <p className="text-primary-500 font-medium">(205) 522-1162</p>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What Happens After You Ship
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Truck className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Package Received</h3>
                <p className="text-gray-300">
                  We'll email you confirmation when your package arrives at our facility
                </p>
              </div>
              <div className="text-center">
                <Package className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Professional Repair</h3>
                <p className="text-gray-300">
                  Expert technicians perform diagnosis and repair with regular updates
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Return Shipping</h3>
                <p className="text-gray-300">
                  Fully repaired unit ships back with tracking and 1-year warranty
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-primary-500/10 rounded-2xl border border-primary-500/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Questions About Shipping?
              </h2>
              <p className="text-gray-300 mb-6">
                Contact us if you need help with packing, have special circumstances, 
                or need clarification on any shipping requirements.
              </p>
              <a 
                href="tel:2055221162"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (205) 522-1162
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}