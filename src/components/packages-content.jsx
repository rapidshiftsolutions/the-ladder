'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CheckCircle,
  ChevronRight,
  Phone,
  Star,
  Shield,
  Clock,
  DollarSign,
  Package,
  Award,
  Zap
} from 'lucide-react'

export default function PackagesContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const packages = [
    {
      name: "Essential Care Package",
      price: "Starting at $62.49+",
      originalPrice: "$81.24+",
      savings: "Save $15+",
      duration: "25 minutes",
      description: "Perfect for basic maintenance and keeping your vehicle running reliably.",
      image: "/NewportPitstop/pexels/oil_change.webp",
      popular: false,
      services: [
        "Conventional oil change (up to 5 quarts)",
        "New oil filter installation",
        "Engine air filter inspection",
        "Multi-point safety inspection",
        "Fluid level checks and top-offs",
        "Tire pressure adjustment",
        "Battery terminal cleaning",
        "Service reminder sticker"
      ],
      benefits: [
        "Maintains factory warranty",
        "Prevents major breakdowns",
        "Extends engine life"
      ]
    },
    {
      name: "Complete Care Package",
      price: "Starting at $99.99+", 
      originalPrice: "$124.99+",
      savings: "Save $20+",
      duration: "35 minutes",
      description: "Our most popular package - comprehensive care for maximum vehicle protection.",
      image: "/NewportPitstop/pexels/filter_services.webp",
      popular: true,
      services: [
        "Full synthetic oil change (up to 5 quarts)",
        "Premium oil filter installation",
        "Engine air filter replacement",
        "Cabin air filter replacement",
        "Complete multi-point inspection",
        "Battery test and terminal service",
        "Tire pressure optimization",
        "All fluid checks and top-offs",
        "Wiper blade inspection",
        "Belt and hose visual inspection"
      ],
      benefits: [
        "Maximum engine protection",
        "Improved air quality",
        "Enhanced performance",
        "Better fuel economy"
      ]
    },
    {
      name: "Performance Package",
      price: "Starting at $137.49+",
      originalPrice: "$168.74+", 
      savings: "Save $25+",
      duration: "45 minutes",
      description: "Specialized service for performance vehicles and driving enthusiasts.",
      image: "/NewportPitstop/pexels/performance_parts.webp",
      popular: false,
      services: [
        "High-performance synthetic oil change",
        "Performance oil filter installation",
        "High-flow air filter upgrade",
        "Transmission fluid level check",
        "Differential fluid inspection",
        "Cooling system pressure test",
        "Performance battery test",
        "Tire condition analysis",
        "Suspension component inspection",
        "Performance consultation"
      ],
      benefits: [
        "Optimized for performance",
        "Track-ready maintenance", 
        "Expert performance advice",
        "Enhanced reliability"
      ]
    },
    {
      name: "Fleet/Commercial Package",
      price: "Starting at $56.24+",
      originalPrice: "$74.99+",
      savings: "Save $15+ per vehicle",
      duration: "20 minutes",
      description: "Efficient, cost-effective maintenance for commercial fleets and multiple vehicles.",
      image: "/NewportPitstop/pexels/oil_change.webp",
      popular: false,
      services: [
        "Conventional or blend oil change",
        "Commercial-grade oil filter",
        "Basic safety inspection",
        "Fluid level verification",
        "Tire pressure check",
        "Light function test",
        "Fleet documentation",
        "Maintenance scheduling"
      ],
      benefits: [
        "Volume discounts available",
        "Scheduled maintenance",
        "Fleet tracking",
        "Reduced downtime"
      ]
    }
  ]

  const addOnServices = [
    {
      name: "Fuel System Cleaning",
      price: "Starting at $112.49+",
      description: "Professional fuel injector and system cleaning"
    },
    {
      name: "Radiator Flush",
      price: "Starting at $149.99+",
      description: "Complete cooling system flush and refill"
    },
    {
      name: "Brake Fluid Exchange",
      price: "Starting at $99.99+",
      description: "Complete brake fluid replacement service"
    },
    {
      name: "Power Steering Service",
      price: "Starting at $87.49+",
      description: "Power steering fluid exchange and system check"
    }
  ]

  return (
    <div className="bg-gradient-to-b from-background-dark to-surface-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-exo2 font-black italic text-text-primary mb-6">
                Service Packages
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Save money and time with our comprehensive service packages designed to keep your vehicle running at its best. All prices starting at listed amounts and may vary based on vehicle requirements.*
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link
                href="tel:2055221162"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 group"
              >
                Book Package Service
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:2055221162"
                className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                (205) 522-1162
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-exo2 font-bold italic text-text-primary text-center mb-12"
              variants={itemVariants}
            >
              Complete Care Packages
            </motion.h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  className={`relative rounded-2xl overflow-hidden ${
                    pkg.popular 
                      ? 'bg-gradient-to-br from-primary-500/20 to-primary-600/10 border-2 border-primary-500/30' 
                      : 'bg-surface-800/50 border border-primary-500/20'
                  } backdrop-blur-sm`}
                  variants={itemVariants}
                >
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 bg-primary-500 text-black px-3 py-1 rounded-full text-sm font-bold z-10">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-text-primary mb-1">{pkg.name}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-black text-primary-500">{pkg.price}</span>
                        <span className="text-lg text-text-secondary line-through">{pkg.originalPrice}</span>
                        <span className="text-sm bg-primary-500 text-black px-2 py-1 rounded font-bold">{pkg.savings}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-primary-500" />
                          <span className="text-text-secondary text-sm">{pkg.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary-500 text-primary-500" />
                          ))}
                        </div>
                      </div>
                      <p className="text-text-secondary">{pkg.description}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-text-primary mb-3">Included Services:</h4>
                      <ul className="space-y-2">
                        {pkg.services.slice(0, 5).map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                            <span className="text-text-primary text-sm">{service}</span>
                          </li>
                        ))}
                        {pkg.services.length > 5 && (
                          <li className="text-text-secondary text-sm">+ {pkg.services.length - 5} more services</li>
                        )}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-text-primary mb-3">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.benefits.map((benefit, benefitIndex) => (
                          <span 
                            key={benefitIndex}
                            className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-xs font-medium"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="tel:2055221162"
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300"
                    >
                      Book This Package
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-16 bg-surface-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-exo2 font-bold italic text-text-primary text-center mb-12"
              variants={itemVariants}
            >
              Add-On Services
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOnServices.map((addon, index) => (
                <motion.div
                  key={index}
                  className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6 text-center"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{addon.name}</h3>
                  <p className="text-primary-500 font-bold mb-2">{addon.price}</p>
                  <p className="text-text-secondary text-sm">{addon.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Package Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-exo2 font-bold italic text-text-primary text-center mb-12"
              variants={itemVariants}
            >
              Why Choose Service Packages?
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <DollarSign className="w-8 h-8 text-primary-500" />,
                  title: "Save Money",
                  description: "Package deals save you money compared to individual services. Get more value for your maintenance dollar."
                },
                {
                  icon: <Clock className="w-8 h-8 text-primary-500" />,
                  title: "Save Time", 
                  description: "Complete multiple services in one visit. Get everything done efficiently while you wait."
                },
                {
                  icon: <Shield className="w-8 h-8 text-primary-500" />,
                  title: "Complete Protection",
                  description: "Comprehensive care ensures all systems are maintained properly for maximum reliability."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="text-center space-y-4"
                  variants={itemVariants}
                >
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary-500/20 rounded-full">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">{benefit.title}</h3>
                  <p className="text-text-secondary">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimers */}
      <section className="py-16 bg-surface-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center">
                <Award className="w-6 h-6 text-primary-500 mr-2" />
                Important Information & Disclaimers
              </h3>
              <div className="space-y-4 text-text-secondary text-sm">
                <p><strong>*Pricing:</strong> All prices are starting amounts and may vary based on vehicle make, model, engine size, oil capacity, and specific requirements. Final pricing will be provided before service begins.</p>
                <p><strong>Packages:</strong> Package contents may vary based on vehicle specifications. Some services may not be applicable to all vehicles. Additional charges may apply for premium fluids, oversized filters, or additional labor.</p>
                <p><strong>Oil Capacity:</strong> Prices based on standard oil capacity (up to 5 quarts). Vehicles requiring more than 5 quarts will incur additional charges for extra oil.</p>
                <p><strong>Warranties:</strong> All services include applicable warranties. See our warranty page for complete terms and conditions.</p>
                <p><strong>Appointments:</strong> While walk-ins are welcome, appointments are recommended to ensure timely service. Service times are estimates and may vary based on vehicle condition and workload.</p>
                <p><strong>Special Offers:</strong> Package savings compared to individual service pricing. Cannot be combined with other offers unless specified. Subject to change without notice.</p>
                <p><strong>Vehicle Requirements:</strong> Some services may not be available for certain vehicle types, modifications, or conditions. We reserve the right to refuse service on vehicles deemed unsafe or inappropriate for our facility.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl font-exo2 font-bold italic text-text-primary mb-6"
              variants={itemVariants}
            >
              Ready to Save with a Service Package?
            </motion.h2>
            <motion.p 
              className="text-lg text-text-secondary mb-8"
              variants={itemVariants}
            >
              Get more value and complete care with our comprehensive service packages.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link
                href="tel:2055221162"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 group"
              >
                Book Package Service
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:2055221162"
                className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call (205) 522-1162
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}