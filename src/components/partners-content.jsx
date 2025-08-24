'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, MapPin, Users, Wrench, Trophy } from 'lucide-react'

const partners = [
  {
    name: "English Mountain Raceway",
    description: "Premier drag racing facility in East Tennessee featuring competitive racing events and family entertainment.",
    website: "https://engmtnraceway.com/",
    facebook: null,
    logo: "/NewportPitstop/partners/EnglishMountain.webp",
    services: ["Drag Racing", "Racing Events", "Track Rental", "Family Entertainment"],
    highlight: "Home of Tennessee's fastest drag racing action"
  },
  {
    name: "Ottinger's Automotive Customs & Hydrographics",
    description: "Specializing in custom automotive detailing, hydrographic services, and vehicle customization.",
    website: null,
    facebook: "https://www.facebook.com/Ottingersdetailing/",
    logo: "/NewportPitstop/partners/Ottingers_tint.jpg",
    services: ["Custom Detailing", "Hydrographics", "Vehicle Wraps", "Custom Paint"],
    highlight: "Transform your ride with custom hydrographic designs"
  },
  {
    name: "RapidShift Solutions",
    description: "Technology solutions provider specializing in web development, digital transformation, and business automation for the automotive industry.",
    website: "https://rapidshiftsolutions.com/",
    facebook: null,
    logo: "/NewportPitstop/partners/RapidShift.png",
    services: ["Web Development", "Digital Solutions", "Business Automation", "E-commerce"],
    highlight: "Driving digital innovation in the automotive sector"
  }
]

export default function PartnersContent() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-exo2 font-black italic text-text-primary mb-4">
            Our <span className="text-primary-500">Partners</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
            OEM Radio Repair is proud to partner with these outstanding businesses in the automotive community. 
            Together, we're committed to providing exceptional service and supporting the local car culture.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl overflow-hidden hover:border-primary-500/40 transition-all duration-300"
            >
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Partner Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6">
                  <div className="flex-1 mb-4 sm:mb-0">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-exo2 font-bold text-text-primary mb-2 leading-tight">
                      {partner.name}
                    </h2>
                    {partner.highlight && (
                      <p className="text-primary-500 font-medium text-sm">
                        {partner.highlight}
                      </p>
                    )}
                  </div>
                  {partner.logo && (
                    <div className="flex justify-center sm:justify-end sm:ml-4 flex-shrink-0">
                      <div className="bg-white rounded-lg p-2 sm:p-3">
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          width={120}
                          height={60}
                          className="h-12 sm:h-16 w-auto"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-text-secondary mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  {partner.description}
                </p>

                {/* Services */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-sm font-bold text-text-primary mb-3 flex items-center">
                    <Wrench className="w-4 h-4 mr-2 text-primary-500" />
                    SERVICES OFFERED
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {partner.services.map((service) => (
                      <div
                        key={service}
                        className="bg-surface-800/50 rounded-lg px-3 py-2 text-sm text-text-secondary text-center sm:text-left"
                      >
                        {service}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Links */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-colors duration-200 text-sm sm:text-base"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Website
                    </a>
                  )}
                  {partner.facebook && (
                    <a
                      href={partner.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 bg-surface-800 text-text-primary font-bold rounded-lg hover:bg-surface-700 transition-colors duration-200 border border-primary-500/20 text-sm sm:text-base"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook Page
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-surface/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 sm:p-10">
            <Users className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-exo2 font-bold text-text-primary mb-4">
              Become a Partner
            </h2>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Interested in partnering with OEM Radio Repair? We're always looking to collaborate with 
              businesses that share our commitment to quality service and the automotive community.
            </p>
            <a
              href="tel:2055221162"
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Us About Partnership
            </a>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          <div className="text-center p-4 sm:p-6 bg-surface/30 rounded-xl">
            <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-primary-500" />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-2">Quality First</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              We partner with businesses that maintain the highest standards of quality and service
            </p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-surface/30 rounded-xl">
            <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary-500" />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-2">Community Focus</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Supporting local businesses and building a stronger automotive community together
            </p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-surface/30 rounded-xl">
            <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary-500" />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-2">Local Excellence</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Proudly serving East Tennessee with a network of trusted automotive professionals
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}