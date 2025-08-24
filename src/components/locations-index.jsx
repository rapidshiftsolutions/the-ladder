'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  MapPin,
  Clock,
  Navigation,
  ChevronRight,
  Phone,
  Users,
  Building
} from 'lucide-react'
import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'

export default function LocationsIndex({ locations, type }) {
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

  const isCity = type === 'cities'
  const pageTitle = isCity ? 'Cities We Serve' : 'Counties We Serve'
  const description = isCity 
    ? 'OEM Radio Repair proudly serves cities throughout East Tennessee with professional automotive services. Find your city below to learn more about our local service offerings.'
    : 'OEM Radio Repair serves counties throughout East Tennessee with comprehensive automotive services. Find your county below for detailed service information.'

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="bg-gradient-to-b from-background-dark to-surface-900 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center space-y-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  {isCity ? <Building className="w-6 h-6 text-primary-500" /> : <MapPin className="w-6 h-6 text-primary-500" />}
                  <span className="text-primary-500 font-medium">Service Areas</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-exo2 font-black italic text-text-primary mb-6">
                  {pageTitle}
                </h1>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                  {description}
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
                  Book Service Online
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

        {/* Locations Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {locations.map((location, index) => (
                  <motion.div
                    key={location.slug}
                    variants={itemVariants}
                  >
                    <Link
                      href={`/${type}/${location.slug}`}
                      className="block bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6 hover:bg-surface-700/50 hover:border-primary-500/40 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary-500 transition-colors">
                            {isCity ? `${location.name}, ${location.state}` : location.name}
                          </h3>
                          <p className="text-text-secondary text-sm mb-3">
                            {location.description}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-primary-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-primary-500" />
                          <span className="text-text-primary text-sm">{location.driveTime}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Navigation className="w-4 h-4 text-primary-500" />
                          <span className="text-text-primary text-sm">{location.distance}</span>
                        </div>
                        {isCity && location.county && (
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-primary-500" />
                            <span className="text-text-primary text-sm">{location.county}</span>
                          </div>
                        )}
                        {!isCity && location.cities && (
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-primary-500" />
                            <span className="text-text-primary text-sm">
                              {location.cities.slice(0, 3).join(', ')}
                              {location.cities.length > 3 && ` +${location.cities.length - 3} more`}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* Local Features */}
                      {location.localFeatures && (
                        <div className="flex flex-wrap gap-1">
                          {location.localFeatures.slice(0, 3).map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-primary-500/20 text-primary-500 text-xs rounded"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-surface-800/30">
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
                Professional Auto Services for All Locations
              </motion.h2>
              <motion.p 
                className="text-lg text-text-secondary mb-8"
                variants={itemVariants}
              >
                No matter which {isCity ? 'city' : 'county'} you're located in, OEM Radio Repair provides the same high-quality automotive services with professional installation and comprehensive warranties.
              </motion.p>
              
              <motion.div 
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
                variants={itemVariants}
              >
                {[
                  'Oil Changes Starting at $37.49',
                  'Transmission Service',
                  'Brake & Fluid Services', 
                  'Aftermarket Installations'
                ].map((service, index) => (
                  <div
                    key={index}
                    className="bg-surface-800/50 rounded-lg p-4"
                  >
                    <p className="text-text-primary font-medium">{service}</p>
                  </div>
                ))}
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={itemVariants}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 group"
                >
                  View All Services
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300"
                >
                  Get Directions
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  )
}