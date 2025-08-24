'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Clock, 
  Star, 
  Tag,
  ChevronRight,
  Phone,
  Calendar,
  Gift,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Copy,
  Share2
} from 'lucide-react'
import { getImageUrl } from '../utils/sanityHelpers'
import { useState } from 'react'

export default function SpecialDetailContent({ special }) {
  const [copiedCode, setCopiedCode] = useState(false)

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

  const formatExpiryDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  const formatExpirationText = (expiresAt) => {
    const now = new Date()
    const expiry = new Date(expiresAt)
    const daysUntilExpiry = Math.ceil((expiry - now) / (1000 * 60 * 60 * 24))
    
    if (daysUntilExpiry <= 0) {
      return { text: 'Expired', urgent: true, expired: true }
    } else if (daysUntilExpiry === 1) {
      return { text: 'Expires Tomorrow', urgent: true, expired: false }
    } else if (daysUntilExpiry <= 7) {
      return { text: `Expires in ${daysUntilExpiry} days`, urgent: true, expired: false }
    } else {
      return { text: `Expires ${formatExpiryDate(expiresAt)}`, urgent: false, expired: false }
    }
  }

  const copyCode = async () => {
    if (special.couponCode) {
      try {
        await navigator.clipboard.writeText(special.couponCode)
        setCopiedCode(true)
        setTimeout(() => setCopiedCode(false), 2000)
      } catch (err) {
        console.error('Failed to copy code:', err)
      }
    }
  }

  const shareSpecial = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: special.title,
          text: `Check out this special: ${special.discount} - ${special.description}`,
          url: window.location.href,
        })
      } catch (err) {
        console.error('Error sharing:', err)
      }
    } else {
      // Fallback to copy URL
      try {
        await navigator.clipboard.writeText(window.location.href)
        alert('Link copied to clipboard!')
      } catch (err) {
        console.error('Failed to copy URL:', err)
      }
    }
  }

  const expirationInfo = formatExpirationText(special.expiresAt)

  return (
    <div className="bg-gradient-to-b from-background-dark to-surface-900 min-h-screen">
      {/* Back Navigation */}
      <section className="py-4 sm:py-6 border-b border-primary-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/specials"
            className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Specials
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center"
          >
            {/* Special Image */}
            <motion.div variants={itemVariants} className="relative order-2 lg:order-1">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-surface-800/50 to-surface-900/50 backdrop-blur-sm border border-primary-500/20">
                {special.image ? (
                  <Image
                    src={getImageUrl(special.image, 800, 600)}
                    alt={special.image.alt || special.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-surface-800/50 flex items-center justify-center">
                    <Gift className="w-24 h-24 text-primary-500" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
                
                {/* Featured Badge */}
                {special.featured && (
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10">
                    <div className="bg-primary-500 text-black px-3 sm:px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                      <Star className="w-4 h-4 mr-2 fill-current" />
                      FEATURED
                    </div>
                  </div>
                )}
                
                {/* Discount Badge */}
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-10">
                  <div className="bg-primary-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-black text-xl sm:text-2xl shadow-lg border-2 border-black/20">
                    {special.discount}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Special Details */}
            <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-exo2 font-black italic text-text-primary mb-4 sm:mb-6">
                  {special.title}
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary font-medium leading-relaxed">
                  {special.description}
                </p>
              </div>

              {/* Expiration Info */}
              <div className={`flex items-center p-4 rounded-xl ${
                expirationInfo.expired 
                  ? 'bg-error/10 border border-error/20 text-error' 
                  : expirationInfo.urgent 
                    ? 'bg-warning/10 border border-warning/20 text-warning'
                    : 'bg-primary-500/10 border border-primary-500/20 text-primary-500'
              }`}>
                {expirationInfo.expired ? (
                  <AlertCircle className="w-5 h-5 mr-3" />
                ) : (
                  <Calendar className="w-5 h-5 mr-3" />
                )}
                <span className="font-medium">{expirationInfo.text}</span>
              </div>

              {/* Coupon Code */}
              {special.couponCode && (
                <div className="bg-primary-500/10 rounded-xl p-6 border border-primary-500/20 backdrop-blur-sm">
                  <div className="text-sm text-text-secondary mb-2">Use Coupon Code:</div>
                  <div className="flex items-center gap-3">
                    <div className="font-mono font-bold text-primary-500 text-xl bg-background-dark px-4 py-3 rounded-lg border border-primary-500/30 flex-1">
                      {special.couponCode}
                    </div>
                    <button
                      onClick={copyCode}
                      className="flex items-center justify-center w-12 h-12 bg-primary-500 text-black rounded-lg hover:bg-primary-600 transition-colors shadow-lg"
                      title="Copy code"
                    >
                      {copiedCode ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {copiedCode && (
                    <div className="text-sm text-success mt-2">Code copied to clipboard!</div>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:2055221162"
                  className="flex-1 inline-flex items-center justify-center bg-primary-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Claim This Offer
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
                <button
                  onClick={shareSpecial}
                  className="inline-flex items-center justify-center border-2 border-primary-500 text-primary-500 px-6 py-4 rounded-lg font-bold hover:bg-primary-500 hover:text-black transition-all duration-300"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Special Details */}
      <section className="py-12 sm:py-16 lg:py-20 bg-surface-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-exo2 font-black italic text-text-primary text-center mb-12"
            >
              Special <span className="text-primary-500">Details</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* What's Included */}
              {special.details && special.details.length > 0 && (
                <motion.div 
                  variants={itemVariants}
                  className="bg-gradient-to-br from-surface-800/50 to-surface-900/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6 sm:p-8 shadow-lg"
                >
                  <h3 className="text-xl sm:text-2xl font-exo2 font-bold text-text-primary mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 text-success mr-3" />
                    What's Included
                  </h3>
                  <div className="space-y-3">
                    {special.details.map((detail, index) => (
                      <div key={index} className="flex items-start">
                        <Tag className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-text-secondary">{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Applicable Services */}
              {special.applicableServices && special.applicableServices.length > 0 && (
                <motion.div 
                  variants={itemVariants}
                  className="bg-gradient-to-br from-surface-800/50 to-surface-900/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6 sm:p-8 shadow-lg"
                >
                  <h3 className="text-xl sm:text-2xl font-exo2 font-bold text-text-primary mb-6 flex items-center">
                    <Gift className="w-6 h-6 text-primary-500 mr-3" />
                    Applicable Services
                  </h3>
                  <div className="space-y-3">
                    {special.applicableServices.map((service) => (
                      <Link
                        key={service._id}
                        href={`/services/${service.slug?.current || '#'}`}
                        className="flex items-center justify-between p-3 rounded-lg border border-primary-500/20 hover:border-primary-500/40 hover:bg-primary-500/5 transition-all group"
                      >
                        <span className="text-text-primary group-hover:text-primary-500 transition-colors">
                          {service.title}
                        </span>
                        {service.startingPrice && (
                          <span className="text-text-secondary text-sm">
                            from {service.startingPrice}
                          </span>
                        )}
                        <ChevronRight className="w-4 h-4 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Terms and Conditions */}
            {special.termsAndConditions && (
              <motion.div 
                variants={itemVariants}
                className="mt-8 bg-gradient-to-br from-surface-800/50 to-surface-900/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6 sm:p-8 shadow-lg"
              >
                <h3 className="text-xl sm:text-2xl font-exo2 font-bold text-text-primary mb-6 flex items-center">
                  <AlertCircle className="w-6 h-6 text-warning mr-3" />
                  Terms & Conditions
                </h3>
                <div className="text-text-secondary whitespace-pre-line leading-relaxed">
                  {special.termsAndConditions}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
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
              Don't miss out on this {special.featured ? 'featured ' : ''}special offer. 
              Call now to schedule your service and claim your discount!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a
                href="tel:2055221162"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (205) 522-1162
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/specials"
                className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-500 hover:text-black transition-all duration-300"
              >
                View All Specials
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}