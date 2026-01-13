'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Users, CheckCircle, Clock, DollarSign, Award, Shield, Handshake, Star, ArrowRight } from 'lucide-react'
import { 
  containerVariants, 
  cardVariants, 
  iconVariants, 
  fadeInUpVariants,
  headerVariants 
} from '@/utils/animations'

// Default impact stats (used when CMS data is not available)
const defaultImpactStats = [
  {
    icon: Users,
    number: '500+',
    label: 'Individuals Helped',
    description: 'Birmingham residents who have overcome barriers with our support'
  },
  {
    icon: CheckCircle,
    number: '95%',
    label: 'Success Rate',
    description: 'Barriers successfully removed, enabling forward progress'
  },
  {
    icon: Clock,
    number: '24hr',
    label: 'Response Time',
    description: 'Average time from initial contact to first response'
  },
  {
    icon: DollarSign,
    number: '100%',
    label: 'Direct Impact',
    description: 'Of donations go directly to barrier removal assistance'
  }
]

// Default trust elements
const defaultTrustElements = [
  {
    icon: Shield,
    title: '501(c)(3) Tax Exempt',
    description: 'Registered nonprofit organization (EIN: 82-0737087). All donations are tax-deductible.'
  },
  {
    icon: Award,
    title: 'Experienced Leadership',
    description: 'Board members with extensive nonprofit, healthcare, and business experience.'
  },
  {
    icon: Handshake,
    title: 'Trusted Partners',
    description: 'Collaborated with by Birmingham\'s leading nonprofit organizations.'
  }
]

// Default testimonial
const defaultTestimonial = {
  quote: '"When I lost my car in an accident, I thought I would lose everything. The Ladder provided a rental car so I could keep working until I found a replacement. Today I have a new job I love and just moved into a beautiful new home. They gave me the support I needed exactly when I needed it."',
  name: 'Maria T.',
  context: 'Birmingham Resident, Helped in 2023'
}

export default function ImpactTrustCompact({ 
  impactStats: cmsStats = null,
  testimonial: cmsTestimonial = null,
  siteSettings = {}
}) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Build impact stats from CMS data or use defaults
  const impactStats = cmsStats ? [
    {
      icon: Users,
      number: cmsStats.individualsHelped || '500+',
      label: cmsStats.individualsHelpedLabel || 'Individuals Helped',
      description: 'Birmingham residents who have overcome barriers with our support'
    },
    {
      icon: CheckCircle,
      number: cmsStats.successRate || '95%',
      label: cmsStats.successRateLabel || 'Success Rate',
      description: 'Barriers successfully removed, enabling forward progress'
    },
    {
      icon: Clock,
      number: cmsStats.responseTime || '24hr',
      label: cmsStats.responseTimeLabel || 'Response Time',
      description: 'Average time from initial contact to first response'
    },
    {
      icon: DollarSign,
      number: cmsStats.directImpact || '100%',
      label: cmsStats.directImpactLabel || 'Direct Impact',
      description: 'Of donations go directly to barrier removal assistance'
    }
  ] : defaultImpactStats

  // Build trust elements with EIN from site settings
  const ein = siteSettings?.ein || '82-0737087'
  const trustElements = [
    {
      icon: Shield,
      title: '501(c)(3) Tax Exempt',
      description: `Registered nonprofit organization (EIN: ${ein}). All donations are tax-deductible.`
    },
    {
      icon: Award,
      title: 'Experienced Leadership',
      description: 'Board members with extensive nonprofit, healthcare, and business experience.'
    },
    {
      icon: Handshake,
      title: 'Trusted Partners',
      description: 'Collaborated with by Birmingham\'s leading nonprofit organizations.'
    }
  ]

  // Use CMS testimonial or default
  const testimonial = cmsTestimonial ? {
    quote: cmsTestimonial.impactTestimonialQuote || defaultTestimonial.quote,
    name: cmsTestimonial.impactTestimonialName || defaultTestimonial.name,
    context: cmsTestimonial.impactTestimonialContext || defaultTestimonial.context
  } : defaultTestimonial

  return (
    <section 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-secondary)]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[var(--color-primary)]/10 rounded-full"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Award className="w-5 h-5 text-[var(--color-primary)]" />
            <span className="text-sm font-semibold text-[var(--color-primary)]">Our Impact</span>
          </motion.div>
          <h2 
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--color-text-primary)] mb-6 leading-tight text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Measurable Impact, Trusted Results
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl lg:text-2xl text-[var(--color-text-secondary)] leading-relaxed text-center">
              Our outcomes speak for themselves. Every statistic represents a real person 
              who overcame a barrier and moved forward in life.
            </p>
          </div>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-white to-[var(--color-primary)]/5 rounded-2xl p-6 lg:p-8 text-center border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/0 to-[var(--color-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/10 rounded-bl-full blur-2xl" />
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  variants={iconVariants}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Number */}
                <div 
                  className="text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {stat.number}
                </div>

                {/* Label */}
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm lg:text-base text-[var(--color-text-secondary)] leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-10 lg:p-14 border-2 border-gray-200 shadow-xl mb-16 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/5 via-transparent to-[var(--color-secondary)]/5" />
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 
                className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Why Trust The Ladder?
              </h3>
              <p className="text-lg text-[var(--color-text-secondary)]">
                Transparency, accountability, and a commitment to our community.
              </p>
            </div>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {trustElements.map((element, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group/item"
                  variants={cardVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                    variants={iconVariants}
                    whileHover={{ rotate: [0, 10, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <element.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {element.title}
                  </h4>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                    {element.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div 
          className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10 lg:p-14 border-2 border-gray-200 shadow-xl max-w-4xl mx-auto overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)]/5 via-transparent to-[var(--color-primary)]/5" />
          
          <div className="relative z-10">
            <motion.div 
              className="flex justify-center gap-1 mb-8"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ 
                    delay: 0.9 + i * 0.1, 
                    type: "spring", 
                    stiffness: 200,
                    damping: 15
                  }}
                >
                  <Star className="w-6 h-6 fill-current text-amber-400" />
                </motion.div>
              ))}
            </motion.div>
            
            <blockquote className="text-center mb-10">
              <p 
                className="text-xl lg:text-2xl text-[var(--color-text-primary)] leading-relaxed mb-8 italic"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {testimonial.quote}
              </p>
              <footer>
                <cite className="not-italic">
                  <span className="block font-bold text-lg text-[var(--color-text-primary)]">
                    {testimonial.name}
                  </span>
                  <span className="text-[var(--color-text-secondary)]">
                    {testimonial.context}
                  </span>
                </cite>
              </footer>
            </blockquote>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/success-stories"
                  className="btn btn-primary inline-flex items-center justify-center text-lg px-8 py-4"
                >
                  Read More Stories
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/annual-reports"
                  className="btn btn-secondary inline-flex items-center justify-center text-lg px-8 py-4"
                >
                  View Our Reports
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
