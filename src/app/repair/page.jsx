import { Metadata } from 'next'
import VehicleSelector from '/src/components/VehicleSelector'
import PricingComparison from '/src/components/PricingComparison'
import TrustElements from '/src/components/TrustElements'
import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'
import { vehicles, allMakes } from '/src/data/vehicles'

export const metadata = {
  title: 'Vehicle Infotainment Repair Services',
  description: 'Professional infotainment system repair for Dodge, Chrysler, Jeep, Cadillac, and Ram vehicles. Digitizer and LCD replacements with 1-year warranty and free shipping.',
  keywords: [
    'infotainment repair',
    'car screen repair',
    'vehicle touchscreen repair',
    'digitizer replacement',
    'LCD replacement',
    'Uconnect repair',
    'CUE system repair',
    'automotive electronics repair'
  ].join(', '),
  openGraph: {
    title: 'Vehicle Infotainment Repair Services | OEM Radio Repair',
    description: 'Expert repair services for car infotainment systems. Save 50%+ vs competitors with our mail-in repair service.',
    type: 'website',
  },
}

export default function RepairServicesPage() {
  const featuredVehicles = vehicles.slice(0, 8) // Show first 8 vehicles as featured

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 bg-gradient-to-b from-background-dark to-surface-900">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-exo2 font-black italic text-text-primary mb-6">
              Professional Infotainment Repair
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Expert digitizer and LCD replacement services for your vehicle's infotainment system. 
              Save 50%+ compared to major competitors with our nationwide mail-in service.
            </p>
            
            <TrustElements variant="inline" className="justify-center" />
          </div>
        </div>
      </section>

      {/* Vehicle Selector */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-exo2 font-bold italic text-text-primary mb-4">
              Find Your Vehicle
            </h2>
            <p className="text-lg text-text-secondary">
              Select your vehicle to check compatibility and get accurate repair pricing
            </p>
          </div>
          
          <VehicleSelector />
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-16 bg-surface-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-exo2 font-bold italic text-text-primary mb-4">
              Popular Vehicle Repairs
            </h2>
            <p className="text-lg text-text-secondary">
              Browse our most common infotainment repair services by vehicle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVehicles.map((vehicle) => (
              <a
                key={vehicle.slug}
                href={`/repair/${vehicle.make.toLowerCase()}/${vehicle.model.toLowerCase()}/${vehicle.slug.split('-').slice(-1)[0]}`}
                className="group bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6 hover:bg-surface-700/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-primary-500 transition-colors">
                      {vehicle.make} {vehicle.model}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {vehicle.years[0]} - {vehicle.years[vehicle.years.length - 1]}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-text-primary text-sm">
                      <span className="font-medium">Screen:</span> {vehicle.screenType}
                    </p>
                    <p className="text-text-primary text-sm">
                      <span className="font-medium">Repair Time:</span> {vehicle.estimatedRepairTime}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {vehicle.services.map((service) => (
                      <span
                        key={service}
                        className="px-2 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full"
                      >
                        {service === 'digitizer' ? 'Digitizer' : 'LCD'} Repair
                      </span>
                    ))}
                  </div>

                  <div className="text-primary-500 text-sm font-medium group-hover:translate-x-1 transition-transform">
                    View Repair Options →
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-secondary mb-4">
              Don't see your vehicle? We support many more makes and models.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-colors"
            >
              Contact Us for Compatibility
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <PricingComparison />

      {/* Trust Elements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustElements variant="badges" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-surface-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-exo2 font-bold italic text-text-primary mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Select your vehicle above or contact us directly for expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2055221162"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300"
            >
              Call (205) 522-1162
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300"
            >
              Contact Us Online
            </a>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </main>
  )
}