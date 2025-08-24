'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  MapPin,
  Clock,
  Phone,
  DollarSign,
  CheckCircle,
  ChevronRight,
  Star,
  Shield,
  Wrench,
  Navigation,
  Car,
  Users,
  Award,
  Zap
} from 'lucide-react'
import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'

export default function LocationPageContent({ location, locationType, content, services }) {
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

  const locationName = locationType === 'city' ? `${location.name}, ${location.state}` : location.name
  const isCurrentLocation = location.name === 'Newport' || location.name === 'Cocke County'

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <div className="bg-gradient-to-b from-background-dark to-surface-900 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Content */}
              <motion.div className="space-y-6" variants={itemVariants}>
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary-500" />
                    <span className="text-primary-500 font-medium">
                      {locationType === 'city' ? 'City' : 'County'} Service Area
                    </span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-exo2 font-black italic text-text-primary mb-4">
                    {content.heroTitle}
                  </h1>
                  <p className="text-xl text-text-secondary leading-relaxed mb-6">
                    {content.heroSubtitle}
                  </p>
                  
                  {/* Location Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-surface-800/50 rounded-lg p-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-primary-500" />
                        <div>
                          <p className="text-text-secondary text-sm">Drive Time</p>
                          <p className="text-text-primary font-bold">{location.driveTime}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-surface-800/50 rounded-lg p-4">
                      <div className="flex items-center space-x-2">
                        <Navigation className="w-5 h-5 text-primary-500" />
                        <div>
                          <p className="text-text-secondary text-sm">Distance</p>
                          <p className="text-text-primary font-bold">{location.distance}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
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
                </div>

                {/* Local Context */}
                <div className="bg-surface-800/30 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-text-primary mb-3 flex items-center">
                    <MapPin className="w-5 h-5 text-primary-500 mr-2" />
                    About {locationName}
                  </h3>
                  <p className="text-text-secondary">
                    {content.localContext}
                  </p>
                  
                  {/* Location Features */}
                  {location.localFeatures && (
                    <div className="mt-4">
                      <p className="text-text-primary font-medium mb-2">Local Features:</p>
                      <div className="flex flex-wrap gap-2">
                        {location.localFeatures.slice(0, 4).map((feature, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary-500/20 text-primary-500 text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Image */}
              <motion.div 
                className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden"
                variants={itemVariants}
              >
                <Image
                  src="/NewportPitstop/pexels/oil_change.webp"
                  alt={`Auto service in ${locationName}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/40 to-transparent" />
                
                {/* Location Badge */}
                <div className="absolute top-4 left-4 bg-primary-500 text-black px-4 py-2 rounded-lg font-bold">
                  Serving {locationName}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div className="text-center mb-12" variants={itemVariants}>
                <h2 className="text-3xl sm:text-4xl font-exo2 font-bold italic text-text-primary mb-4">
                  {content.servicesTitle}
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  {content.servicesIntro}
                </p>
              </motion.div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.slug}
                    className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6 hover:bg-surface-700/50 transition-all duration-300"
                    variants={itemVariants}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-text-primary mb-2">{service.name}</h3>
                        <p className="text-text-secondary text-sm mb-3">{service.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-primary-500 font-bold text-lg">
                          {service.startingPrice === 'Free' ? 'FREE' : `$${service.startingPrice}+`}
                        </p>
                        <p className="text-text-secondary text-sm">{service.duration}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                          <span className="text-text-primary text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-primary-500 hover:text-primary-400 transition-colors"
                    >
                      Learn More
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div className="text-center mb-12" variants={itemVariants}>
                <h2 className="text-3xl sm:text-4xl font-exo2 font-bold italic text-text-primary mb-4">
                  {content.whyChooseTitle}
                </h2>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.whyChooseReasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    variants={itemVariants}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                      {index === 0 && <MapPin className="w-6 h-6 text-primary-500" />}
                      {index === 1 && <Clock className="w-6 h-6 text-primary-500" />}
                      {index === 2 && <Award className="w-6 h-6 text-primary-500" />}
                      {index === 3 && <Shield className="w-6 h-6 text-primary-500" />}
                      {index === 4 && <DollarSign className="w-6 h-6 text-primary-500" />}
                      {index === 5 && <Star className="w-6 h-6 text-primary-500" />}
                    </div>
                    <div>
                      <p className="text-text-primary font-medium">{reason}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Location Info Section */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-exo2 font-bold italic text-text-primary mb-6">
                  Visit OEM Radio Repair Today
                </h2>
                <p className="text-lg text-text-secondary mb-8">
                  {content.callToAction}
                </p>
                
                {/* Business Info */}
                <div className="bg-surface-800/50 rounded-xl p-8 mb-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-4">OEM Radio Repair Location</h3>
                      <div className="space-y-3 text-left">
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-primary-500" />
                          <div>
                            <p className="text-text-primary">2413 1st Ave S</p>
                            <p className="text-text-secondary">Birmingham, AL 35233</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-primary-500" />
                          <p className="text-text-primary">(205) 522-1162</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-primary-500" />
                          <div>
                            <p className="text-text-primary">Mon-Fri: 8:00 AM - 6:00 PM</p>
                            <p className="text-text-secondary">Sat: 8:00 AM - 5:00 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-4">Distance from {locationName}</h3>
                      <div className="space-y-3 text-left">
                        <div className="flex items-center space-x-3">
                          <Navigation className="w-5 h-5 text-primary-500" />
                          <div>
                            <p className="text-text-primary">{location.distance}</p>
                            <p className="text-text-secondary">{location.driveTime} drive</p>
                          </div>
                        </div>
                        {locationType === 'city' && location.zipCodes && (
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-5 h-5 text-primary-500" />
                            <div>
                              <p className="text-text-primary">Serving ZIP codes:</p>
                              <p className="text-text-secondary">{location.zipCodes.join(', ')}</p>
                            </div>
                          </div>
                        )}
                        {locationType === 'county' && location.cities && (
                          <div className="flex items-center space-x-3">
                            <Users className="w-5 h-5 text-primary-500" />
                            <div>
                              <p className="text-text-primary">Major cities served:</p>
                              <p className="text-text-secondary">{location.cities.join(', ')}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Final CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                    Call (205) 522-1162
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300"
                  >
                    Get Directions
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  )
}