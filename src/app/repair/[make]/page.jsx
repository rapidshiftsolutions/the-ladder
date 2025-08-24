import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { vehicles, allMakes } from '/src/data/vehicles'
import VehicleSelector from '/src/components/VehicleSelector'
import TrustElements from '/src/components/TrustElements'
import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'
import { Car, Calendar, Settings, ChevronRight, MessageCircle } from 'lucide-react'

// Generate static params for all vehicle makes
export async function generateStaticParams() {
  return allMakes.map((make) => ({
    make: make.toLowerCase()
  }))
}

// Generate metadata for each make page
export async function generateMetadata({ params }) {
  const { make } = params
  const makeName = make.charAt(0).toUpperCase() + make.slice(1)
  
  if (!allMakes.map(m => m.toLowerCase()).includes(make)) {
    return {
      title: 'Vehicle Make Not Found',
      description: 'The requested vehicle make could not be found.'
    }
  }

  const makeVehicles = vehicles.filter(v => v.make.toLowerCase() === make)
  const modelCount = makeVehicles.length

  const title = `${makeName} Infotainment Repair Services | OEM Radio Repair`
  const description = `Professional ${makeName} infotainment system repair. ${modelCount} models supported including digitizer and LCD replacements. Save 50%+ vs competitors with 1-year warranty.`

  return {
    title,
    description,
    keywords: [
      `${makeName} infotainment repair`,
      `${makeName} screen repair`,
      `${makeName} touchscreen replacement`,
      `${makeName} digitizer replacement`,
      `${makeName} LCD replacement`,
      `${makeName} Uconnect repair`,
      `${makeName} CUE repair`,
      'car screen repair',
      'automotive electronics repair'
    ].join(', '),
    openGraph: {
      title,
      description,
      type: 'website',
      url: `/repair/${make}`,
    },
    alternates: {
      canonical: `/repair/${make}`,
    },
  }
}

export default function MakeRepairPage({ params }) {
  const { make } = params
  const makeName = make.charAt(0).toUpperCase() + make.slice(1)
  
  if (!allMakes.map(m => m.toLowerCase()).includes(make)) {
    notFound()
  }

  const makeVehicles = vehicles.filter(v => v.make.toLowerCase() === make)
  
  // Group vehicles by model
  const vehiclesByModel = makeVehicles.reduce((acc, vehicle) => {
    if (!acc[vehicle.model]) {
      acc[vehicle.model] = []
    }
    acc[vehicle.model].push(vehicle)
    return acc
  }, {})

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 bg-gradient-to-b from-background-dark to-surface-900">
      
      {/* Breadcrumb */}
      <div className="bg-surface-800/30 border-b border-surface-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm">
            <a href="/" className="text-text-secondary hover:text-primary-500">Home</a>
            <span className="mx-2 text-text-secondary">/</span>
            <a href="/repair" className="text-text-secondary hover:text-primary-500">Repair Services</a>
            <span className="mx-2 text-text-secondary">/</span>
            <span className="text-text-primary">{makeName}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-exo2 font-black italic text-text-primary mb-6">
              {makeName} Infotainment Repair
              <br />
              <span className="text-primary-500">Expert Service</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Professional infotainment system repair for all {makeName} models. 
              We specialize in {makeName === 'Cadillac' ? 'CUE system' : 'Uconnect'} repairs with 
              50%+ savings compared to competitors and dealership pricing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#models"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300"
              >
                View {makeName} Models
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Selector */}
      <section className="py-16 bg-surface-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-exo2 font-bold italic text-text-primary mb-4">
              Check Your {makeName} Compatibility
            </h2>
            <p className="text-lg text-text-secondary">
              Select your specific {makeName} model to get accurate pricing and repair information
            </p>
          </div>
          
          <VehicleSelector />
        </div>
      </section>

      {/* Supported Models */}
      <section id="models" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-exo2 font-bold italic text-text-primary mb-4">
              Supported {makeName} Models
            </h2>
            <p className="text-lg text-text-secondary">
              We service {Object.keys(vehiclesByModel).length} different {makeName} models with expert care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(vehiclesByModel).map(([model, modelVehicles]) => {
              const vehicle = modelVehicles[0] // Get the first vehicle for display info
              const allYears = [...new Set(modelVehicles.flatMap(v => v.years))].sort()
              const yearRange = allYears.length > 1 
                ? `${allYears[0]} - ${allYears[allYears.length - 1]}`
                : allYears[0]

              const vehicleSlug = modelVehicles[0].slug
              const yearRangeSlug = vehicle.years.length > 1 
                ? `${vehicle.years[0]}-${vehicle.years[vehicle.years.length - 1]}`
                : vehicle.years[0]

              return (
                <a
                  key={model}
                  href={`/repair/${make}/${model.toLowerCase().replace(/\s+/g, '-')}/${yearRangeSlug}`}
                  className="group bg-surface-800/30 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8 hover:bg-surface-700/30 transition-all duration-300"
                >
                  <div className="space-y-6">
                    <div className="text-center">
                      <Car className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-text-primary group-hover:text-primary-500 transition-colors mb-2">
                        {makeName} {model}
                      </h3>
                      <p className="text-text-secondary">
                        {yearRange}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-text-secondary">Screen Type:</span>
                        <span className="text-text-primary font-medium">{vehicle.screenType}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-text-secondary">Screen Size:</span>
                        <span className="text-text-primary font-medium">{vehicle.screenSize}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-text-secondary">Repair Time:</span>
                        <span className="text-text-primary font-medium">{vehicle.estimatedRepairTime}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-text-primary">Available Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {vehicle.services.map((service) => (
                          <span
                            key={service}
                            className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full"
                          >
                            {service === 'digitizer' ? 'Digitizer ($400)' : 'LCD ($550)'}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-primary-500 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                        View Repair Details
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us for [Make] */}
      <section className="py-16 bg-surface-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-exo2 font-bold italic text-text-primary mb-4">
              Why Choose Us for {makeName} Repairs?
            </h2>
            <p className="text-lg text-text-secondary">
              Specialized expertise in {makeName} infotainment systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto">
                <Car className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-lg font-bold text-text-primary">{makeName} Specialists</h3>
              <p className="text-text-secondary text-sm">
                Deep expertise in {makeName === 'Cadillac' ? 'CUE systems' : 'Uconnect technology'} and common issues
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <Settings className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-bold text-text-primary">OEM Quality Parts</h3>
              <p className="text-text-secondary text-sm">
                Genuine {makeName} compatible components for lasting repairs
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-text-primary">Fast Turnaround</h3>
              <p className="text-text-secondary text-sm">
                2-3 day repair time for all {makeName} infotainment systems
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                <ChevronRight className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-bold text-text-primary">50%+ Savings</h3>
              <p className="text-text-secondary text-sm">
                Significantly less than {makeName} dealership pricing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustElements variant="badges" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-surface-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-exo2 font-bold italic text-text-primary mb-6">
            Ready to Repair Your {makeName}?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Get expert {makeName} infotainment repair with unbeatable pricing and warranty
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300"
            >
              Contact Us
            </a>
            <a
              href="tel:2055221162"
              className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300"
            >
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