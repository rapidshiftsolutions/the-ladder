'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Phone, Shield, Truck, Clock, Star, Award, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react'
import VehicleSelector from './VehicleSelector'

export default function OEMRadioRepairHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState(null)
  const router = useRouter()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle(vehicle)
    if (vehicle) {
      // Use the slug directly to construct the URL
      // The slug already contains the proper format: "make-model-year-range"
      const slugParts = vehicle.slug.split('-')
      
      // Extract parts based on the slug structure
      let make, model, yearRange;
      
      if (vehicle.model === "Wrangler JL") {
        // jeep-wrangler-jl-2018-2023
        make = slugParts[0]
        model = slugParts.slice(1, 3).join('-') // wrangler-jl
        yearRange = slugParts.slice(3).join('-') // 2018-2023
      } else if (vehicle.model === "Grand Cherokee WK") {
        // jeep-grand-cherokee-wk-2014-2022
        make = slugParts[0]
        model = slugParts.slice(1, 4).join('-') // grand-cherokee-wk
        yearRange = slugParts.slice(4).join('-') // 2014-2022
      } else if (vehicle.model === "2500/3500 HD") {
        // ram-2500-3500-hd-2013-2018
        make = slugParts[0]
        model = slugParts.slice(1, 4).join('-') // 2500-3500-hd
        yearRange = slugParts.slice(4).join('-') // 2013-2018
      } else {
        // Standard format: make-model-year1-year2
        make = slugParts[0]
        model = slugParts.slice(1, -2).join('-')
        yearRange = slugParts.slice(-2).join('-')
      }
      
      router.push(`/repair/${make}/${model}/${yearRange}`)
    }
  }

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

  const trustElements = [
    { icon: Shield, text: "1 Year Warranty", subtext: "All repairs guaranteed", color: "text-green-500" },
    { icon: Truck, text: "Free 2-Way Shipping", subtext: "Prepaid label included", color: "text-blue-500" },
    { icon: Clock, text: "2-3 Day Turnaround", subtext: "Fast repair service", color: "text-orange-500" },
  ]

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Single Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/OEMRadioRepair/pexels/pexels-107932638-18437096.webp"
          alt="Green Dodge Challenger SRT with infotainment system"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        {/* Optimized gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/50" />
        
        {/* Central focus overlay */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 70%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header Section */}
          <div className="text-center mb-20">
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500/20 to-yellow-500/20 backdrop-blur-sm border border-primary-500/30 rounded-full">
                <Award className="w-5 h-5 text-primary-500" />
                <span className="text-primary-500 font-semibold text-lg">Save 50% vs. Competitors</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="font-bold leading-tight mb-8"
              variants={itemVariants}
            >
              <span className="text-white text-3xl sm:text-4xl lg:text-7xl block drop-shadow-lg">
                Infotainment Screen
              </span>
              <span className="bg-gradient-to-r from-primary-500 to-yellow-500 bg-clip-text text-transparent text-4xl sm:text-5xl lg:text-8xl block mt-2">
                Repair Experts
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto mb-10 leading-relaxed"
              variants={itemVariants}
            >
              Professional repair service for <span className="text-primary-500 font-semibold">Dodge, Chrysler, Jeep, Cadillac, and Ram</span> infotainment screens. 
              Touchscreen not working? Display issues? <span className="text-white font-semibold">We fix it all</span> with a 1-year warranty.
            </motion.p>

            {/* Enhanced Trust Elements */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 mb-16"
              variants={itemVariants}
            >
              {trustElements.map((element, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-3 bg-black/60 backdrop-blur-md px-6 py-4 rounded-2xl border border-gray-500/40 hover:border-primary-500/70 hover:bg-black/80 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <element.icon className={`w-8 h-8 ${element.color} drop-shadow-sm`} />
                  <div className="text-left">
                    <p className="text-white font-semibold text-lg drop-shadow-sm">{element.text}</p>
                    <p className="text-gray-100 text-sm">{element.subtext}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Vehicle Selector */}
            <motion.div variants={itemVariants}>
              <div className="relative">
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                
                <div className="relative bg-black/70 backdrop-blur-xl rounded-2xl p-8 border border-gray-500/50 shadow-2xl hover:bg-black/80 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h2 className="text-3xl font-bold text-white">
                      Get Started
                    </h2>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">
                    Select your vehicle to see compatible repair options and get instant pricing
                  </p>
                  <VehicleSelector onVehicleSelect={handleVehicleSelect} />
                  
                  {/* Quick stats */}
                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-primary-500">1000+</p>
                        <p className="text-gray-400 text-sm">Repairs Done</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-500">98%</p>
                        <p className="text-gray-400 text-sm">Success Rate</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-blue-500">4.9★</p>
                        <p className="text-gray-400 text-sm">Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Enhanced Pricing & Services */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Pricing Showcase */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-primary-500/20 rounded-2xl blur-xl"></div>
                
                <div className="relative bg-black/70 backdrop-blur-xl rounded-2xl p-8 border border-gray-500/50 shadow-2xl hover:bg-black/80 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white">Our Repair Services</h3>
                    <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                      50% Savings
                    </div>
                  </div>
                  
                  {/* Digitizer Service - Enhanced */}
                  <div className="mb-8 p-6 bg-gray-900/60 rounded-xl border border-gray-500/60 hover:border-primary-500/70 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-2">Digitizer Replacement</h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-xs">Touchscreen Issues</span>
                          <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">Ghost Touching</span>
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">Cracked Glass</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-1">
                          <p className="text-3xl font-bold text-primary-500">$400</p>
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </div>
                        <p className="text-lg text-gray-400 line-through">$799</p>
                        <p className="text-green-400 font-bold">Save $399</p>
                      </div>
                    </div>
                  </div>

                  {/* LCD Service - Enhanced */}
                  <div className="p-6 bg-gray-900/60 rounded-xl border border-gray-500/60 hover:border-primary-500/70 transition-all duration-300">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-2">LCD Replacement</h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-xs">Black Screen</span>
                          <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Display Issues</span>
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Pixel Damage</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-1">
                          <p className="text-3xl font-bold text-primary-500">$550</p>
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </div>
                        <p className="text-lg text-gray-400 line-through">$1,199</p>
                        <p className="text-green-400 font-bold">Save $649</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Contact Section */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500/30 rounded-2xl blur-xl"></div>
                
                <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-primary-500/40 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <Phone className="w-6 h-6 text-primary-500" />
                    <h3 className="text-2xl font-bold text-primary-500">Ready to Save Hundreds?</h3>
                  </div>
                  <p className="text-gray-200 mb-6 text-lg">
                    Get your <span className="text-primary-500 font-semibold">free quote</span> and start your repair process today
                  </p>
                  
                  <div className="space-y-4">
                    <motion.a
                      href="/contact"
                      className="flex items-center justify-center w-full px-8 py-4 bg-primary-500 text-black font-bold rounded-xl hover:from-primary-600 hover:to-yellow-600 transition-all duration-300 text-lg shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageCircle className="mr-3 w-6 h-6" />
                      Get Free Quote
                      <ArrowRight className="ml-3 w-5 h-5" />
                    </motion.a>
                    
                    <div className="text-center">
                      <p className="text-gray-300 text-sm">
                        <span className="text-green-400">●</span> Fast Response Time
                      </p>
                      <p className="text-gray-400 text-sm mt-2">
                        We'll respond within 24 hours • Free quotes
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Heritage */}
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-4 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Family Business</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Since 2010</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Birmingham, AL</span>
                  </div>
                </div>
                <p className="text-gray-400 text-lg">
                  Trusted by thousands nationwide • Multi-generational expertise
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}