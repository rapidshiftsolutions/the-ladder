'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ChevronRight, Phone, Play, Volume2, VolumeX } from 'lucide-react'

export default function RacewayHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleVideoLoad = () => {
    setIsVideoLoaded(true)
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Bristol-inspired animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  return (
    <section ref={heroRef} className="relative h-[120vh] lg:h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0">
        {/* Fallback Image */}
        <Image
          src="/NewportPitstop/pexels/racecar_big_turbos.webp"
          alt="OEM Radio Repair Auto Service"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        
        {/* Video Element - Ready for when you provide the video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onLoadedData={handleVideoLoad}
          style={{ display: isVideoLoaded ? 'block' : 'none' }}
        >
          {/* Video source will be added when provided */}
          {/* <source src="/path-to-your-video.mp4" type="video/mp4" /> */}
        </video>

        {/* Bristol-style Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-accent-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-primary-900/40" />
      </div>

      {/* Video Controls */}
      {isVideoLoaded && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={toggleMute}
          className="absolute top-6 right-6 z-30 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </motion.button>
      )}

      {/* Content Container - Bristol Style */}
      <div className="relative z-20 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center h-full min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen"
          >
            {/* Left Column - Main Content */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">

              {/* Main Headline - Bristol Style */}
              <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
                <h1 className=" font-black text-white uppercase ">
                  <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl block font-inter">Professional</span>
                  <span className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl block font-anton tracking-wide leading-tight">Infotainment Repair</span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 font-inter leading-relaxed max-w-xl">
                  Expert touchscreen and LCD repair for your vehicle's infotainment system. 50% less than competitors.
                </p>
              </motion.div>

              {/* CTA Buttons - Bristol Style */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-primary-600 text-white font-inter font-bold text-sm sm:text-base lg:text-lg rounded-lg hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-primary-600/30"
                >
                  <Calendar className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
                  <span>View Our Services</span>
                  <ChevronRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a
                  href="tel:205-522-1162"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-white font-inter font-bold text-sm sm:text-base lg:text-lg rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <Phone className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
                  <span>(205) 522-1162</span>
                </a>
              </motion.div>

              {/* Racing Stats - Bristol Inspired */}
              <motion.div variants={itemVariants} className="pt-4 sm:pt-6">
                <div className="flex flex-wrap gap-6 sm:gap-8">
                  <div className="text-center">
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-anton font-black text-primary-400">$400</p>
                    <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-inter">Digitizer Repair</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-anton font-black text-accent-400">$550</p>
                    <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-inter">LCD Replacement</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-anton font-black text-secondary-400">2-3</p>
                    <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-inter">Day Turnaround</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Feature Card */}
            <motion.div 
              variants={itemVariants}
              className="lg:justify-self-end w-full max-w-md mt-8 lg:mt-0"
            >
              <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl font-anton font-black text-white uppercase tracking-wide">
                      Service Hours
                    </h3>
                    <div className="w-12 sm:w-16 h-1 bg-primary-500 mx-auto mt-3 sm:mt-4"></div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="text-center py-3 sm:py-4 border-b border-white/20">
                      <p className="text-2xl sm:text-3xl font-anton font-black text-primary-400">WEEKDAYS</p>
                      <p className="text-base sm:text-lg text-white font-inter">Full Service</p>
                      <p className="text-xs sm:text-sm text-gray-400">8:00 AM - 6:00 PM</p>
                    </div>
                    
                    <div className="text-center py-3 sm:py-4">
                      <p className="text-2xl sm:text-3xl font-anton font-black text-accent-400">SATURDAY</p>
                      <p className="text-base sm:text-lg text-white font-inter">Express Service</p>
                      <p className="text-xs sm:text-sm text-gray-400">8:00 AM - 4:00 PM</p>
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <p className="text-white font-inter font-semibold text-sm sm:text-base">2413 1st Ave S</p>
                    <p className="text-gray-400 text-sm sm:text-base">Birmingham, AL 35233</p>
                    <a 
                      href="https://www.google.com/maps/place/513+Cosby+Hwy+%237371,+Newport,+TN+37821/@35.9606,-83.1943,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors font-inter text-sm sm:text-base"
                    >
                      Get Directions
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  )
}