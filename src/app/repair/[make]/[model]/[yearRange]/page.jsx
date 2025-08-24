import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { vehicles, getVehicleBySlug, getAllVehicleSlugs, services, calculateSavings } from '/src/data/vehicles'
import VehicleSelector from '/src/components/VehicleSelector'
import PricingComparison from '/src/components/PricingComparison'
import TrustElements, { WarrantyBadge, FreeShippingBadge, FastTurnaroundBadge } from '/src/components/TrustElements'
import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer'
import ContactForm from '/src/components/ContactForm'
import { CheckCircle, AlertTriangle, Wrench, Shield, Clock, Truck, Phone, Mail, MessageCircle } from 'lucide-react'

// Generate static params for all vehicle pages
export async function generateStaticParams() {
  return vehicles.map((vehicle) => {
    // Use predefined slug if available, otherwise generate one
    if (vehicle.slug) {
      const slugParts = vehicle.slug.split('-')
      // Extract make, model, and year range from slug
      const make = slugParts[0]
      let model, yearRange
      
      // Handle special cases
      if (vehicle.model === "2500/3500 HD") {
        model = "2500-3500-hd"
        yearRange = slugParts.slice(4).join('-') // e.g., "2013-2018"
      } else if (vehicle.model === "Wrangler JL") {
        model = "wrangler-jl"
        yearRange = slugParts.slice(3).join('-')
      } else if (vehicle.model === "Grand Cherokee WK") {
        model = "grand-cherokee-wk"
        yearRange = slugParts.slice(4).join('-')
      } else {
        // Standard format: make-model-year1-year2
        model = slugParts.slice(1, -2).join('-')
        yearRange = slugParts.slice(-2).join('-')
      }
      
      return { make, model, yearRange }
    } else {
      // Fallback to original logic if no slug
      return {
        make: vehicle.make.toLowerCase(),
        model: vehicle.model.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-'),
        yearRange: vehicle.years.length > 1 
          ? `${vehicle.years[0]}-${vehicle.years[vehicle.years.length - 1]}`
          : vehicle.years[0]
      }
    }
  })
}

// Generate metadata for each vehicle page
export async function generateMetadata({ params }) {
  const { make, model, yearRange } = params
  
  // Find the vehicle by matching URL params to vehicle data
  const vehicle = vehicles.find(v => {
    if (v.slug) {
      const slugParts = v.slug.split('-')
      const slugMake = slugParts[0]
      let slugModel, slugYearRange
      
      // Handle special cases
      if (v.model === "2500/3500 HD") {
        slugModel = "2500-3500-hd"
        slugYearRange = slugParts.slice(4).join('-')
      } else if (v.model === "Wrangler JL") {
        slugModel = "wrangler-jl"
        slugYearRange = slugParts.slice(3).join('-')
      } else if (v.model === "Grand Cherokee WK") {
        slugModel = "grand-cherokee-wk"
        slugYearRange = slugParts.slice(4).join('-')
      } else {
        slugModel = slugParts.slice(1, -2).join('-')
        slugYearRange = slugParts.slice(-2).join('-')
      }
      
      return slugMake === make && slugModel === model && slugYearRange === yearRange
    } else {
      // Fallback matching
      const vehicleMake = v.make.toLowerCase()
      const vehicleModel = v.model.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-')
      const vehicleYearRange = v.years.length > 1 
        ? `${v.years[0]}-${v.years[v.years.length - 1]}`
        : v.years[0]
      
      return vehicleMake === make && vehicleModel === model && vehicleYearRange === yearRange
    }
  })

  if (!vehicle) {
    return {
      title: 'Vehicle Not Found',
      description: 'The requested vehicle repair information could not be found.'
    }
  }

  const yearDisplay = vehicle.years.length > 1 
    ? `${vehicle.years[0]}-${vehicle.years[vehicle.years.length - 1]}`
    : vehicle.years[0]

  const title = `${yearDisplay} ${vehicle.make} ${vehicle.model} OEM Radio Repair | UConnect Service`
  const description = `Professional OEM radio repair for ${yearDisplay} ${vehicle.make} ${vehicle.model}. UConnect radio repair, ${vehicle.screenType} repair. Digitizer $400, LCD $550. Mail-in service with free shipping nationwide.`

  // Generate targeted keywords based on vehicle make
  const baseKeywords = [
    `${vehicle.make.toLowerCase()} radio repair`,
    `${vehicle.make.toLowerCase()} oem radio repair`,
    `oem radio repair ${vehicle.make.toLowerCase()}`,
    `${yearDisplay} ${vehicle.make.toLowerCase()} ${vehicle.model.toLowerCase()} radio repair`,
    `${vehicle.make.toLowerCase()} ${vehicle.model.toLowerCase()} radio repair`,
    'oem radio repair near me',
    'radio repair near me'
  ]

  // Add specific keywords based on make
  if (vehicle.make.toLowerCase() === 'dodge') {
    baseKeywords.push(
      'dodge radio repair',
      'dodge ram radio repair',
      'dodge charger radio repair', 
      'dodge caravan radio repair',
      'dodge radio not working',
      'uconnect radio repair',
      'uconnect repair near me'
    )
  } else if (vehicle.make.toLowerCase() === 'ford') {
    baseKeywords.push(
      'ford oem radio repair',
      '1990 ford mustang oem radio repair'
    )
  } else if (vehicle.make.toLowerCase() === 'gm' || vehicle.make.toLowerCase() === 'cadillac') {
    baseKeywords.push(
      'gm oem radio repair'
    )
  } else if (vehicle.make.toLowerCase() === 'toyota') {
    baseKeywords.push(
      'toyota oem radio repair',
      'oem toyota radio repair'
    )
  } else if (vehicle.make.toLowerCase() === 'chrysler' || vehicle.make.toLowerCase() === 'jeep') {
    baseKeywords.push(
      'uconnect radio repair',
      'uconnect repair near me',
      'jeep dodge chrysler radio mail in repair service'
    )
  }

  return {
    title,
    description,
    keywords: baseKeywords.join(', '),
    openGraph: {
      title,
      description,
      type: 'website',
      url: `/repair/${make}/${model}/${yearRange}`,
    },
    alternates: {
      canonical: `/repair/${make}/${model}/${yearRange}`,
    },
  }
}

export default function VehicleRepairPage({ params }) {
  const { make, model, yearRange } = params
  
  // Find the vehicle by matching URL params to vehicle data
  const vehicle = vehicles.find(v => {
    if (v.slug) {
      const slugParts = v.slug.split('-')
      const slugMake = slugParts[0]
      let slugModel, slugYearRange
      
      // Handle special cases
      if (v.model === "2500/3500 HD") {
        slugModel = "2500-3500-hd"
        slugYearRange = slugParts.slice(4).join('-')
      } else if (v.model === "Wrangler JL") {
        slugModel = "wrangler-jl"
        slugYearRange = slugParts.slice(3).join('-')
      } else if (v.model === "Grand Cherokee WK") {
        slugModel = "grand-cherokee-wk"
        slugYearRange = slugParts.slice(4).join('-')
      } else {
        slugModel = slugParts.slice(1, -2).join('-')
        slugYearRange = slugParts.slice(-2).join('-')
      }
      
      return slugMake === make && slugModel === model && slugYearRange === yearRange
    } else {
      // Fallback matching
      const vehicleMake = v.make.toLowerCase()
      const vehicleModel = v.model.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-')
      const vehicleYearRange = v.years.length > 1 
        ? `${v.years[0]}-${v.years[v.years.length - 1]}`
        : v.years[0]
      
      return vehicleMake === make && vehicleModel === model && vehicleYearRange === yearRange
    }
  })

  if (!vehicle) {
    notFound()
  }

  const yearDisplay = vehicle.years.length > 1 
    ? `${vehicle.years[0]}-${vehicle.years[vehicle.years.length - 1]}`
    : vehicle.years[0]

  const digitizerSavings = calculateSavings('digitizer')
  const lcdSavings = calculateSavings('lcd')

  // Get related vehicles (same make)
  const relatedVehicles = vehicles
    .filter(v => v.make === vehicle.make && v.slug !== vehicle.slug)
    .slice(0, 3)

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
            <a href={`/repair/${make}`} className="text-text-secondary hover:text-primary-500 capitalize">{make}</a>
            <span className="mx-2 text-text-secondary">/</span>
            <span className="text-text-primary capitalize">{model.replace('-', ' ')} ({yearDisplay})</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-exo2 font-black italic text-text-primary mb-6">
                  {yearDisplay} {vehicle.make} {vehicle.model}
                  <br />
                  <span className="text-primary-500">Infotainment Repair</span>
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed mb-6">
                  Professional {vehicle.screenType} repair service for your {vehicle.make} {vehicle.model}. 
                  Save 50%+ compared to dealership and competitor pricing with our expert mail-in service.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-800/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-500">$400</div>
                  <div className="text-sm text-text-secondary">Digitizer Replacement</div>
                  <div className="text-xs text-green-400">Save $399 vs competitors</div>
                </div>
                <div className="bg-surface-800/30 backdrop-blur-sm border border-blue-500/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-500">$550</div>
                  <div className="text-sm text-text-secondary">LCD Replacement</div>
                  <div className="text-xs text-blue-400">Save $649 vs competitors</div>
                </div>
              </div>

              {/* Trust Elements */}
              <div className="flex flex-wrap gap-4">
                <WarrantyBadge />
                <FreeShippingBadge />
                <FastTurnaroundBadge />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300"
                >
                  Contact Us
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

            {/* Vehicle Info Card */}
            <div className="bg-surface-800/30 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-text-primary mb-6">Vehicle Specifications</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Vehicle:</span>
                  <span className="text-text-primary font-medium">{yearDisplay} {vehicle.make} {vehicle.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Screen Type:</span>
                  <span className="text-text-primary font-medium">{vehicle.screenType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Screen Size:</span>
                  <span className="text-text-primary font-medium">{vehicle.screenSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Repair Time:</span>
                  <span className="text-text-primary font-medium">{vehicle.estimatedRepairTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Difficulty:</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full mr-1 ${
                          i < vehicle.installDifficulty ? 'bg-primary-500' : 'bg-surface-600'
                        }`}
                      />
                    ))}
                    <span className="text-text-primary text-sm ml-2">
                      {vehicle.installDifficulty}/5
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-surface-600">
                <h4 className="text-lg font-bold text-text-primary mb-4">Available Services</h4>
                <div className="space-y-3">
                  {vehicle.services.includes('digitizer') && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-text-primary">Digitizer Replacement</span>
                      </div>
                      <span className="text-green-500 font-bold">$400</span>
                    </div>
                  )}
                  {vehicle.services.includes('lcd') && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-text-primary">LCD Replacement</span>
                      </div>
                      <span className="text-green-500 font-bold">$550</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 bg-surface-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-exo2 font-bold italic text-text-primary mb-4">
              Common {vehicle.make} {vehicle.model} Issues We Fix
            </h2>
            <p className="text-lg text-text-secondary">
              Expert solutions for the most frequent {vehicle.screenType} problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicle.commonIssues.map((issue, index) => (
              <div
                key={index}
                className="bg-surface-800/50 backdrop-blur-sm border border-red-500/20 rounded-lg p-6 text-center"
              >
                <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-text-primary mb-2">{issue}</h3>
                <p className="text-text-secondary text-sm">
                  Professional repair available for this common {vehicle.screenType} issue
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-exo2 font-bold italic text-text-primary mb-4">
              How Our Mail-In Service Works
            </h2>
            <p className="text-lg text-text-secondary">
              Simple 4-step process to get your {vehicle.make} {vehicle.model} repaired
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">1. Contact Us</h3>
              <p className="text-text-secondary text-sm">
                Call or email us with your {vehicle.make} {vehicle.model} details and issue description
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">2. Ship to Us</h3>
              <p className="text-text-secondary text-sm">
                We provide prepaid shipping labels and secure packaging instructions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">3. Expert Repair</h3>
              <p className="text-text-secondary text-sm">
                Professional {vehicle.screenType} repair in 2-3 business days
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">4. Return Shipping</h3>
              <p className="text-text-secondary text-sm">
                Free return shipping with 1-year warranty on all repairs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison - Vehicle Specific */}
      <section className="py-16 bg-surface-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-exo2 font-bold italic text-text-primary mb-4">
              {vehicle.make} {vehicle.model} Repair Pricing
            </h2>
            <p className="text-lg text-text-secondary">
              Compare our unbeatable prices for {vehicle.screenType} repairs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-surface-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-text-primary mb-4">Digitizer Replacement</h3>
              <div className="space-y-4">
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <div className="text-green-400 text-sm font-medium">OEM Radio Repair</div>
                  <div className="text-3xl font-bold text-green-500">${digitizerSavings.ourPrice}</div>
                </div>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <div className="text-red-400 text-sm font-medium">Competitors</div>
                  <div className="text-2xl font-bold text-red-500 line-through">${digitizerSavings.competitorPrice}</div>
                </div>
                <div className="bg-primary-500/20 border border-primary-500/30 rounded-lg p-4">
                  <div className="text-primary-400 text-sm font-medium">Your Savings</div>
                  <div className="text-2xl font-bold text-primary-500">${digitizerSavings.savings}</div>
                  <div className="text-primary-400 text-sm">({digitizerSavings.percentage}% off)</div>
                </div>
              </div>
            </div>

            <div className="bg-surface-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-text-primary mb-4">LCD Replacement</h3>
              <div className="space-y-4">
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <div className="text-green-400 text-sm font-medium">OEM Radio Repair</div>
                  <div className="text-3xl font-bold text-green-500">${lcdSavings.ourPrice}</div>
                </div>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <div className="text-red-400 text-sm font-medium">Competitors</div>
                  <div className="text-2xl font-bold text-red-500 line-through">${lcdSavings.competitorPrice}</div>
                </div>
                <div className="bg-primary-500/20 border border-primary-500/30 rounded-lg p-4">
                  <div className="text-primary-400 text-sm font-medium">Your Savings</div>
                  <div className="text-2xl font-bold text-primary-500">${lcdSavings.savings}</div>
                  <div className="text-primary-400 text-sm">({lcdSavings.percentage}% off)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Vehicles */}
      {relatedVehicles.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-exo2 font-bold italic text-text-primary mb-4">
                Other {vehicle.make} Repairs
              </h2>
              <p className="text-lg text-text-secondary">
                We also service these popular {vehicle.make} models
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedVehicles.map((relatedVehicle) => {
                const relatedYearDisplay = relatedVehicle.years.length > 1 
                  ? `${relatedVehicle.years[0]}-${relatedVehicle.years[relatedVehicle.years.length - 1]}`
                  : relatedVehicle.years[0]

                return (
                  <a
                    key={relatedVehicle.slug}
                    href={`/repair/${relatedVehicle.make.toLowerCase()}/${relatedVehicle.model.toLowerCase().replace(/\s+/g, '-')}/${relatedYearDisplay}`}
                    className="group bg-surface-800/30 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6 hover:bg-surface-700/30 transition-all duration-300"
                  >
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-primary-500 transition-colors mb-2">
                      {relatedVehicle.make} {relatedVehicle.model}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4">
                      {relatedYearDisplay} • {relatedVehicle.screenType}
                    </p>
                    <div className="text-primary-500 text-sm font-medium group-hover:translate-x-1 transition-transform">
                      View Repair Options →
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 bg-surface-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-exo2 font-bold italic text-text-primary mb-6">
            Ready to Repair Your {vehicle.make} {vehicle.model}?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Get expert {vehicle.screenType} repair with unbeatable pricing and warranty
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300"
            >
              Start Your Repair
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact for Quote
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-surface-900 to-background-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-exo2 font-bold italic text-text-primary mb-4">
              Get Your Free {vehicle.make} {vehicle.model} Repair Quote
            </h2>
            <p className="text-lg text-text-secondary">
              Fill out the form below for a free quote on your {vehicle.screenType} repair
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
      </div>
      <Footer />
    </main>
  )
}