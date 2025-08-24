'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, MapPin, Clock, Mail, ChevronRight } from 'lucide-react'

export default function ContactContent() {
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

  return (
    <div className="bg-gradient-to-b from-background-dark to-surface-900 min-h-screen py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-exo2 font-black italic text-text-primary mb-6">
              Contact OEM Radio Repair
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Ready to schedule your service or have questions? We're here to help!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <h2 className="text-2xl font-exo2 font-bold italic text-text-primary mb-6">
                Get In Touch
              </h2>

              {/* Phone */}
              <div className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-primary-500/20 rounded-full">
                    <Phone className="w-6 h-6 text-primary-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-text-primary mb-2">Phone</h3>
                    <a 
                      href="tel:2055221162"
                      className="text-2xl font-bold text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      (205) 522-1162
                    </a>
                    <p className="text-text-secondary text-sm mt-1">
                      Call us directly for immediate assistance or to schedule an appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-primary-500/20 rounded-full">
                    <MapPin className="w-6 h-6 text-primary-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-text-primary mb-2">Address</h3>
                    <div className="text-text-primary mb-2">
                      <p className="font-medium">2413 1st Ave S</p>
                      <p>Birmingham, AL 35233</p>
                    </div>
                    <Link 
                      href="https://maps.google.com/?q=2413+1st+Ave+S+Birmingham+AL+35233"
                      className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors"
                    >
                      Get Directions
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-primary-500/20 rounded-full">
                    <Clock className="w-6 h-6 text-primary-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-text-primary mb-4">Business Hours</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-text-secondary">Monday - Friday:</span>
                        <span className="text-text-primary font-medium">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-text-secondary">Saturday:</span>
                        <span className="text-text-primary font-medium">8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-text-secondary">Sunday:</span>
                        <span className="text-text-primary font-medium">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions & Map */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <h2 className="text-2xl font-exo2 font-bold italic text-text-primary mb-6">
                Quick Actions
              </h2>

              {/* Book Appointment */}
              <div className="bg-gradient-to-r from-primary-500/20 to-primary-600/10 backdrop-blur-sm border border-primary-500/30 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Schedule Your Service
                </h3>
                <p className="text-text-secondary mb-6">
                  Book your appointment online for fast, convenient scheduling
                </p>
                <Link
                  href="tel:2055221162"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 group w-full sm:w-auto"
                >
                  Book Online
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Services */}
              <div className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Our Services
                </h3>
                <p className="text-text-secondary mb-6">
                  View our complete range of automotive services and pricing
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-surface-700 border border-primary-500/30 text-primary-500 font-medium rounded-lg hover:bg-surface-600 transition-all duration-300 group w-full sm:w-auto"
                >
                  View Services
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Emergency Contact */}
              <div className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-text-primary mb-3">
                  Need Same-Day Service?
                </h3>
                <p className="text-text-secondary mb-4">
                  Call us directly for urgent service needs or same-day appointments.
                </p>
                <a
                  href="tel:2055221162"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 w-full"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now: (205) 522-1162
                </a>
              </div>
            </motion.div>
          </div>

          {/* Additional Information */}
          <motion.div 
            className="mt-16 grid md:grid-cols-3 gap-8"
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Call Us</h3>
              <p className="text-text-secondary">
                Speak directly with our team for immediate assistance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Visit Us</h3>
              <p className="text-text-secondary">
                Conveniently located on 1st Avenue South in Birmingham
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Fast Service</h3>
              <p className="text-text-secondary">
                Most services completed in 30 minutes or less
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}