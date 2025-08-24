'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { publicClient } from '../sanity/lib/client'
import { specialsQuery, featuredSpecialsQuery } from '../sanity/specialQueries'
import { getImageUrl, isSpecialValid } from '../utils/sanityHelpers'
import SpecialsListingStructuredData from './specials-listing-structured-data'
import { 
  Clock, 
  Star, 
  Tag,
  ChevronRight,
  Phone,
  Calendar,
  Gift
} from 'lucide-react'

export default function SpecialsContentCMS() {
  const [specials, setSpecials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchSpecials() {
      try {
        const specialsData = await publicClient.fetch(specialsQuery)
        setSpecials(specialsData)
      } catch (err) {
        console.error('Error fetching specials:', err)
        setError('Failed to load specials')
      } finally {
        setLoading(false)
      }
    }

    fetchSpecials()
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

  function formatExpiryDate(dateString) {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-surface">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center text-primary">Loading special offers...</div>
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

  const validSpecials = specials.filter(isSpecialValid)

  return (
    <div className="bg-gradient-to-b from-background-dark to-surface-900 min-h-screen">
      <SpecialsListingStructuredData specials={validSpecials} />
      {/* Hero Section - Mobile-First Design */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-newport-gradient opacity-5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center space-y-6 sm:space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-exo2 font-black italic text-text-primary mb-4 sm:mb-6">
                Current <span className="text-primary-500">Specials</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Save money on professional auto services with our exclusive deals and promotions
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto"
              variants={itemVariants}
            >
              <a
                href="tel:2055221162"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call to Claim Deal
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300"
              >
                View All Services
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Specials Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {validSpecials.length > 0 ? (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {validSpecials.map((special, index) => (
                <motion.div
                  key={special._id}
                  variants={itemVariants}
                  className="group relative"
                >
                  <Link
                    href={`/specials/${special.slug?.current || '#'}`}
                    className="block relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-800/50 to-surface-900/50 backdrop-blur-sm border border-primary-500/20 hover:border-primary-500/40 shadow-lg hover:shadow-2xl transition-all duration-300 group h-full"
                  >
                    {/* Featured Badge */}
                    {special.featured && (
                      <div className="absolute top-4 left-4 z-20">
                        <div className="bg-primary-500 text-black px-3 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                          <Star className="w-4 h-4 mr-1 fill-current" />
                          FEATURED
                        </div>
                      </div>
                    )}

                    {/* Special Image */}
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      {special.image ? (
                        <Image
                          src={getImageUrl(special.image, 600, 400)}
                          alt={special.image.alt || special.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-surface-800/50 flex items-center justify-center">
                          <Gift className="w-16 h-16 text-primary-500" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
                      
                      {/* Discount Badge */}
                      <div className="absolute bottom-4 right-4 z-10">
                        <div className="bg-primary-500 text-black px-4 py-3 rounded-xl font-black text-xl shadow-lg border-2 border-black/20">
                          {special.discount}
                        </div>
                      </div>
                    </div>

                    {/* Special Info */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl sm:text-2xl font-exo2 font-bold text-text-primary group-hover:text-primary-500 transition-colors duration-200">
                        {special.title}
                      </h3>
                      
                      <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                        {special.description}
                      </p>

                      {/* Details List - Show only first 2 on mobile */}
                      {special.details && special.details.length > 0 && (
                        <div className="space-y-2">
                          {special.details.slice(0, 2).map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start text-sm text-text-secondary">
                              <Tag className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </div>
                          ))}
                          {special.details.length > 2 && (
                            <div className="text-sm text-primary-500 font-medium">
                              +{special.details.length - 2} more details
                            </div>
                          )}
                        </div>
                      )}

                      {/* Coupon Code */}
                      {special.couponCode && (
                        <div className="bg-primary-500/10 rounded-lg p-3 border border-primary-500/20">
                          <div className="text-sm text-text-secondary mb-1">Use Code:</div>
                          <div className="font-mono font-bold text-primary-500 text-lg">
                            {special.couponCode}
                          </div>
                        </div>
                      )}

                      {/* Expiry Date and CTA */}
                      <div className="pt-4 border-t border-primary-500/20">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center text-text-secondary text-sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            Expires: {formatExpiryDate(special.expiresAt)}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-primary-500 font-exo2 font-bold group-hover:text-primary-600 transition-colors">
                            View Full Details
                          </span>
                          <ChevronRight className="w-5 h-5 text-primary-500 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16 sm:py-20"
            >
              <div className="bg-gradient-to-br from-surface-800/50 to-surface-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 sm:p-12 max-w-md mx-auto">
                <Gift className="w-16 h-16 text-primary-500 mx-auto mb-6" />
                <h3 className="text-xl sm:text-2xl font-exo2 font-bold text-text-primary mb-4">
                  No Active Specials
                </h3>
                <p className="text-text-secondary mb-6">
                  Check back soon for new special offers and promotions!
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300"
                >
                  View Our Services
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-surface-800/30 to-surface-900/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-exo2 font-black italic text-text-primary mb-6">
              Ready to <span className="text-primary-500">Save</span>?
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Don't miss out on these exclusive deals. Call now to schedule your service and start saving today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a
                href="tel:2055221162"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (205) 522-1162
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-500 hover:text-black transition-all duration-300"
              >
                Book Appointment
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}