'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Building2, Users, FileText, CheckCircle, ArrowRight, Phone } from 'lucide-react'
import { 
  containerVariants, 
  cardVariants, 
  iconVariants, 
  headerVariants,
  fadeInUpVariants
} from '@/utils/animations'

export default function HowItWorksCompact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const steps = [
    {
      number: 1,
      icon: Phone,
      title: "Contact Us",
      description: "Reach out by phone, email, or through our website. We respond to all inquiries within 24 hours."
    },
    {
      number: 2,
      icon: Users,
      title: "Personal Assessment",
      description: "We schedule a confidential conversation to understand your specific situation and barriers."
    },
    {
      number: 3,
      icon: FileText,
      title: "Create a Plan",
      description: "We develop a personalized action plan and connect you with appropriate resources."
    },
    {
      number: 4,
      icon: CheckCircle,
      title: "Remove the Barrier",
      description: "We provide direct assistance and follow up to ensure lasting success."
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)'
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/20 backdrop-filter backdrop-blur-lg rounded-full"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white">Our Process</span>
          </motion.div>
          <h2 
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            How We Help: A Simple, Proven Process
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed text-center">
              From your first call to successful barrier removal, we guide you through 
              every step. Our process is designed to be straightforward and supportive.
            </p>
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="relative group"
              variants={cardVariants}
            >
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-white/20 z-0" />
              )}
              
              {/* Step Card */}
              <motion.div 
                className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full z-10"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/0 to-[var(--color-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/10 rounded-bl-full blur-2xl" />
                
                <div className="relative z-10">
                  {/* Step Number */}
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-6 shadow-lg"
                    variants={iconVariants}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.number}
                  </motion.div>
                  
                  {/* Icon */}
                  <motion.div 
                    className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-2xl flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon className="w-8 h-8 text-[var(--color-primary)]" />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 
                    className="text-xl lg:text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Story Example */}
        <motion.div 
          className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-10 lg:p-14 border-2 border-white/20 shadow-xl max-w-4xl mx-auto overflow-hidden mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10" />
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <motion.div 
                  className="inline-flex items-center gap-2 bg-[var(--color-secondary)]/20 backdrop-filter backdrop-blur-lg text-[var(--color-secondary)] rounded-full px-4 py-2 text-sm font-semibold mb-6 border border-[var(--color-secondary)]/30"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="w-4 h-4" />
                  Success Story
                </motion.div>
                <h3 
                  className="text-3xl font-bold text-[var(--color-text-primary)] mb-6"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  From Barrier to Breakthrough
                </h3>
                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
                  &quot;A local housing nonprofit referred Sarah to us. She had secured a new job, 
                  but her car needed $800 in repairs she couldn&apos;t afford. Without transportation, 
                  she would lose the job before starting. We covered the repair cost within 48 hours. 
                  Today, Sarah has held that job for over two years and recently moved into 
                  permanent housing.&quot;
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/success-stories"
                    className="inline-flex items-center text-[var(--color-primary)] font-semibold hover:text-[var(--color-primary-dark)] transition-colors"
                  >
                    Read More Success Stories
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </motion.div>
              </div>
              
              <motion.div 
                className="flex-shrink-0"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: '$800', label: 'Investment' },
                    { value: '48hr', label: 'Resolution' },
                    { value: '2yr+', label: 'Stable Job' }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white/20 backdrop-filter backdrop-blur-lg rounded-xl p-6 border border-white/20"
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div 
                        className="text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] mb-2"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-xs text-[var(--color-text-secondary)]">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="text-white/90 text-xl mb-8">
            Ready to take the first step? We&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/get-help"
                className="btn btn-lg bg-white text-[var(--color-primary)] hover:bg-gray-100 inline-flex items-center justify-center px-8 py-4 shadow-lg"
              >
                Apply for Help
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="tel:+12055221162"
                className="btn btn-lg bg-white/20 backdrop-filter backdrop-blur-lg text-white border-2 border-white/30 hover:bg-white/30 inline-flex items-center justify-center px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (205) 522-1162
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
