'use client'
import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import { ChevronRight, Shield, Volume2, Truck, Zap, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const CustomizationServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Lift Kit Installation",
      price: "Starting at $1,124+",
      description: "Professional lift kit installation for trucks and SUVs",
      href: "/services/lift-kits"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bumper Installation",
      price: "Starting at $374+",
      description: "Aftermarket bumper installation and modifications",
      href: "/services/bumpers"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "LED Lighting",
      price: "Starting at $187+",
      description: "Light bars, rock lights, and custom LED installations",
      href: "/services/lighting"
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: "Sound Systems",
      price: "Starting at $187+",
      description: "Car audio installation and sound system upgrades",
      href: "/services/sound-systems"
    }
  ]

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-gradient-to-b from-background-dark to-surface-900">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-exo2 font-black italic text-text-primary mb-4">
                Vehicle Customization
              </h2>
              <p className="text-lg text-text-secondary">
                Transform your ride with our professional customization services. From lift kits to sound systems, we'll help you create the vehicle of your dreams.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6 hover:bg-surface-700/50 hover:border-primary-500/40 transition-all duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="text-primary-500 mt-1">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-text-primary mb-1 group-hover:text-primary-500 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-text-secondary text-sm mb-2">
                          {service.description}
                        </p>
                        <p className="text-primary-500 font-bold">
                          {service.price}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={service.href}
                      className="text-primary-500 hover:text-primary-400 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="tel:2055221162"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 group"
              >
                Schedule Installation
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:2055221162"
                className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call for Quote
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/NewportPitstop/pexels/lift_kits.webp"
                alt="Vehicle Customization"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent" />
              
              {/* Feature Cards Overlay */}
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                <div className="bg-surface-800/90 backdrop-blur-sm rounded-lg p-4 border border-primary-500/30">
                  <p className="text-primary-500 font-bold text-2xl">500+</p>
                  <p className="text-text-secondary text-sm">Vehicles Customized</p>
                </div>
                <div className="bg-surface-800/90 backdrop-blur-sm rounded-lg p-4 border border-primary-500/30">
                  <p className="text-primary-500 font-bold text-2xl">12mo</p>
                  <p className="text-text-secondary text-sm">Installation Warranty</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default CustomizationServicesSection