'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Clock, MapPin, ChevronRight } from 'lucide-react'

export default function OEMRadioRepairHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const services = [
    "Oil Changes",
    "Motor Building", 
    "Suspension",
    "Wheels & Tires",
    "Alignments",
    "LED Lighting",
    "Performance Parts"
  ]

  return (
    <section className="relative pb-24 sm:pb-0 h-[90vh] sm:h-[70vh] lg:h-[70vh] min-h-[600px] overflow-hidden bg-gradient-to-br from-background-dark via-surface-800 to-background-dark">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/NewportPitstop/pexels/oil_change.webp"
          alt="Professional infotainment screen repair service - OEM Radio Repair technicians"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark/95 via-background-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="h-full flex items-center"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="w-full lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-6 sm:space-y-8">

              <motion.h1 
                className=" font-exo2 font-black italic leading-tight"
                variants={itemVariants}
              >
                <span className="text-text-primary text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Professional Auto Care</span>
                <br />
                <span className="text-primary-500 text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">With Performance Passion</span>
              </motion.h1>

              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-xl"
                variants={itemVariants}
              >
                Complete automotive services from basic maintenance to custom performance builds.
                Motor building, suspension, wheels & tires, alignments, and premium parts installation.
              </motion.p>

              {/* Quick Services */}
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={itemVariants}
              >
                {services.map((service, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 rounded-full text-sm text-text-primary"
                  >
                    {service}
                  </span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col gap-3 sm:flex-row sm:gap-4"
                variants={itemVariants}
              >
                <Link
                  href="tel:2055221162"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 group w-full sm:w-auto text-center min-h-[48px]"
                >
                  Book Service Now
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:2055221162"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300 w-full sm:w-auto text-center min-h-[48px]"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  (205) 522-1162
                </a>
              </motion.div>
            </div>

            {/* Right Column - Info Cards */}
            <motion.div 
              className="hidden lg:block space-y-4"
              variants={itemVariants}
            >
              {/* Hours Card */}
              <div className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">Business Hours</h3>
                    <div className="space-y-1 text-text-secondary">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">Location</h3>
                    <p className="text-text-secondary">
                      2413 1st Ave S<br />
                      Newport, TN 37821
                    </p>
                    <Link 
                      href="https://maps.google.com/?q=513+Cosby+Hwy+7371+Newport+TN+37821"
                      className="inline-flex items-center text-primary-500 hover:text-primary-600 mt-2 text-sm font-medium"
                    >
                      Get Directions
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Special Offer Card */}
              <div className="bg-gradient-to-r from-primary-500/20 to-primary-600/20 backdrop-blur-sm border border-primary-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-primary-500 mb-2">New Customer Special</h3>
                <p className="text-text-primary font-medium">$10 OFF Your First Oil Change</p>
                <p className="text-text-secondary text-sm mt-1">Valid for first-time customers only</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Info Strip */}
      <motion.div 
        className="lg:hidden absolute bottom-0 left-0 right-0 bg-surface-800/95 backdrop-blur-sm border-t border-primary-500/20"
        variants={itemVariants}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-primary-500 flex-shrink-0" />
            <span className="text-text-secondary">Mon-Fri 8-6, Sat 8-5</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
            <span className="text-text-secondary">Newport, TN</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}