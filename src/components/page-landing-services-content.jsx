'use client'
import { useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion'
import { ChevronRight, Clock, Shield, Gauge, Wrench, Car, Filter, Battery, Droplets, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const ServicesContentSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  const [activeService, setActiveService] = useState('oil-change')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const services = {
    'oil-change': {
      title: "Oil Change Services",
      description: "Keep your engine running smoothly with our comprehensive oil change services. We use quality oils and filters to ensure optimal performance.",
      image: "/NewportPitstop/pexels/oil_change.webp",
      icon: <Droplets className="w-6 h-6" />,
      features: [
        "Conventional, synthetic, and high-mileage options",
        "Multi-point inspection included",
        "Filter replacement",
        "Fluid top-offs",
        "Tire pressure check"
      ],
      startingPrice: "$37.49",
      time: "15 minutes"
    },
    'fluid-services': {
      title: "Fluid Services",
      description: "Maintain your vehicle's vital systems with our complete fluid service offerings. From transmission to brake fluid, we've got you covered.",
      image: "/NewportPitstop/pexels/oil_change.webp",
      icon: <Gauge className="w-6 h-6" />,
      features: [
        "Transmission fluid exchange",
        "Coolant system service",
        "Brake fluid replacement",
        "Power steering fluid",
        "Differential fluid service"
      ],
      startingPrice: "$62.49",
      time: "30-45 minutes"
    },
    'filters': {
      title: "Filter Replacement",
      description: "Clean air and fluids are essential for vehicle health. We replace all types of filters to keep your car breathing easy.",
      image: "/NewportPitstop/pexels/filter_services.webp",
      icon: <Filter className="w-6 h-6" />,
      features: [
        "Engine air filter",
        "Cabin air filter",
        "Oil filter",
        "Fuel filter service",
        "Free filter inspection"
      ],
      startingPrice: "$24.99",
      time: "10-20 minutes"
    },
    'battery': {
      title: "Battery Services",
      description: "Don't get stranded with a dead battery. Our battery services ensure you're always ready to go.",
      image: "/NewportPitstop/pexels/battery_services.webp",
      icon: <Battery className="w-6 h-6" />,
      features: [
        "Free battery testing",
        "Battery replacement",
        "Terminal cleaning",
        "Charging system check",
        "3-year warranty options"
      ],
      startingPrice: "$112.49",
      time: "20 minutes"
    }
  }

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background-dark to-surface-900">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-exo2 font-black italic text-text-primary mb-4">
            Professional Auto Services
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            From basic maintenance to performance upgrades, we provide quality service for all vehicles
          </p>
        </motion.div>

        {/* Service Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          {Object.entries(services).map(([key, service]) => (
            <button
              key={key}
              onClick={() => setActiveService(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeService === key
                  ? 'bg-primary-500 text-black'
                  : 'bg-surface-800/50 text-text-secondary hover:bg-surface-700/50 hover:text-text-primary'
              }`}
            >
              {service.icon}
              <span>{service.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Active Service Content */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={itemVariants}
          key={activeService}
        >
          {/* Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden">
            <Image
              src={services[activeService].image}
              alt={`${services[activeService].title} in Newport, TN - ${services[activeService].description}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={activeService === 'oil-change'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent" />
            
            {/* Price Badge */}
            <div className="absolute bottom-4 left-4 bg-primary-500/90 backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="text-sm text-black font-medium">Starting at</p>
              <p className="text-2xl font-black text-black">{services[activeService].startingPrice}</p>
            </div>

            {/* Time Badge */}
            <div className="absolute bottom-4 right-4 bg-surface-800/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center space-x-2">
              <Clock className="w-4 h-4 text-primary-500" />
              <span className="text-text-primary font-medium">{services[activeService].time}</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-exo2 font-bold italic text-text-primary mb-3">
                {services[activeService].title}
              </h3>
              <p className="text-text-secondary text-lg">
                {services[activeService].description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {services[activeService].features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-text-primary">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="tel:2055221162"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 group"
              >
                Book This Service
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={`/services/${activeService}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div 
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {[
            {
              icon: <Shield className="w-8 h-8 text-primary-500" />,
              title: "Quality Parts",
              description: "We use only high-quality oils, filters, and parts"
            },
            {
              icon: <Clock className="w-8 h-8 text-primary-500" />,
              title: "Fast Service",
              description: "Most services completed in 30 minutes or less"
            },
            {
              icon: <Wrench className="w-8 h-8 text-primary-500" />,
              title: "Expert Technicians",
              description: "ASE-certified professionals you can trust"
            },
            {
              icon: <Car className="w-8 h-8 text-primary-500" />,
              title: "All Vehicles",
              description: "Service for all makes and models, including performance cars"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6 text-center"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">{item.title}</h4>
              <p className="text-text-secondary text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ServicesContentSection