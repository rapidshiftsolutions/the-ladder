'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { publicClient } from '../sanity/lib/client'
import { servicesQuery } from '../sanity/serviceQueries'
import { getImageUrl, formatPrice, getIconComponent } from '../utils/sanityHelpers'
import { 
  Droplets, 
  Filter, 
  Battery, 
  Gauge, 
  Wrench, 
  Shield,
  Clock,
  CheckCircle,
  ChevronRight,
  Phone,
  Star,
  Zap,
  Volume2,
  Truck,
  Settings,
  WrenchIcon,
  FunnelIcon,
  BoltIcon,
  CircleStackIcon,
  BeakerIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  ShieldCheckIcon,
  StarIcon,
  ClockIcon,
  HeartIcon,
  CheckIcon
} from 'lucide-react'

// Icon mapping for dynamic icon rendering
const iconComponents = {
  Droplets, Filter, Battery, Gauge, Wrench, Shield, Clock, CheckCircle, 
  ChevronRight, Phone, Star, Zap, Volume2, Truck, Settings,
  WrenchIcon, FunnelIcon, BoltIcon, CircleStackIcon, BeakerIcon,
  WrenchScrewdriverIcon, TruckIcon, ShieldCheckIcon, StarIcon,
  ClockIcon, HeartIcon, CheckIcon
}

function getIconFromName(iconName) {
  const IconComponent = iconComponents[iconName] || WrenchScrewdriverIcon
  return <IconComponent className="w-8 h-8" />
}

export default function ServicesOverviewContentCMS() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchServices() {
      try {
        const servicesData = await publicClient.fetch(servicesQuery)
        setServices(servicesData)
      } catch (err) {
        console.error('Error fetching services:', err)
        setError('Failed to load services')
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-surface">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center text-primary">Loading services...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-surface">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center text-error">{error}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-surface">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-anton font-black text-text-primary mb-6 tracking-wide">
              Auto Services
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Professional automotive maintenance with a passion for performance vehicles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:205-522-1162"
                className="inline-flex items-center justify-center bg-primary text-background px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (205) 522-1162
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-background transition-all duration-200"
              >
                Schedule Service
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service._id}
                variants={itemVariants}
                className="group"
              >
                <Link href={`/services/${service.slug.current}`}>
                  <div className="bg-surface rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-accent-gray/20 hover:border-primary/30 h-full">
                    {/* Service Image */}
                    <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                      {service.mainImage ? (
                        <Image
                          src={getImageUrl(service.mainImage, 400, 300)}
                          alt={service.mainImage.alt || service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-accent-gray/20 flex items-center justify-center">
                          {getIconFromName(service.icon)}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                    </div>

                    {/* Service Info */}
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="text-primary mb-3">
                          {getIconFromName(service.icon)}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-200">
                        {service.title}
                      </h3>
                      
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features List */}
                      {service.features && service.features.length > 0 && (
                        <div className="space-y-2">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-text-secondary">
                              <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Pricing and Duration */}
                      <div className="pt-4 border-t border-accent-gray/20">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-primary font-bold text-lg">
                              {formatPrice(service.startingPrice)}
                            </div>
                            <div className="text-text-secondary text-sm flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {service.duration}
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-surface to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-anton font-black text-text-primary mb-4">
              Need Expert Auto Service?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Our certified technicians are ready to keep your vehicle running at peak performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:205-522-1162"
                className="inline-flex items-center justify-center bg-primary text-background px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Link>
              <Link
                href="/packages"
                className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-background transition-all duration-200"
              >
                View Packages
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}