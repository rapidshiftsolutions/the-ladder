'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { AlertCircle, CheckCircle, ArrowRight, Users, Handshake, X, ArrowLeftRight } from 'lucide-react'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
}

// Default content (used when CMS data is not available)
const defaultContent = {
  badge: 'The Missing Rung',
  headline: "Bridging the Gap in Birmingham's Safety Net",
  subheadline: "Birmingham has excellent nonprofit organizations, but sometimes individuals face barriers that don't fit neatly into any single organization's services. That's where The Ladder steps in.",
  challengeItems: [
    { service: "Housing program", gap: " can't help with car repairs needed for work" },
    { service: "Job training", gap: " can't address childcare barriers during classes" },
    { service: "Healthcare services", gap: " can't solve transportation to appointments" }
  ],
  solutionItems: [
    { title: "Partner referrals:", description: " Nonprofits send us clients facing barriers outside their scope" },
    { title: "Individual focus:", description: " We address your exact obstacle with personalized support" },
    { title: "Quick response:", description: " 24-hour initial response, typically resolved within 30 days" }
  ]
}

export default function ProblemSolutionCompact({ content: cmsContent = null }) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  // Merge with defaults
  const content = {
    badge: cmsContent?.problemSectionBadge || defaultContent.badge,
    headline: cmsContent?.problemSectionHeadline || defaultContent.headline,
    subheadline: cmsContent?.problemSectionSubheadline || defaultContent.subheadline,
    challengeItems: cmsContent?.challengeItems && cmsContent.challengeItems.length > 0 
      ? cmsContent.challengeItems 
      : defaultContent.challengeItems,
    solutionItems: cmsContent?.solutionItems && cmsContent.solutionItems.length > 0
      ? cmsContent.solutionItems
      : defaultContent.solutionItems,
  }

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[var(--color-primary)]/10 rounded-full"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <ArrowLeftRight className="w-5 h-5 text-[var(--color-primary)]" />
            <span className="text-sm font-semibold text-[var(--color-primary)]">{content.badge}</span>
          </motion.div>
          
          <h2 
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--color-text-primary)] mb-6 leading-tight text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {content.headline.includes("Birmingham's") 
              ? <>Bridging the Gap in<br className="hidden sm:block" /> Birmingham&apos;s Safety Net</>
              : content.headline
            }
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl lg:text-2xl text-[var(--color-text-secondary)] leading-relaxed text-center">
              {content.subheadline}
            </p>
          </div>
        </motion.div>

        {/* Problem / Solution Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* The Challenge */}
          <motion.div 
            className="group relative bg-gradient-to-br from-white to-red-50/30 rounded-2xl p-8 lg:p-10 border-2 border-red-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-200/20 rounded-bl-full blur-2xl" />
            
            <div className="relative z-10">
              <motion.div 
                className="flex items-center gap-4 mb-6"
                variants={iconVariants}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <AlertCircle className="w-8 h-8 text-white" />
                </motion.div>
                <h3 
                  className="text-3xl font-bold text-[var(--color-text-primary)]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  The Challenge
                </h3>
              </motion.div>
              
              <motion.p 
                className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Individuals often face specific obstacles that fall outside traditional 
                nonprofit service boundaries, leaving them stuck despite seeking help.
              </motion.p>
              
              <motion.ul 
                className="space-y-5 mb-8"
                variants={containerVariants}
              >
                {content.challengeItems.map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-4 group/item"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-gradient-to-br from-red-400 to-red-600 mt-2 flex-shrink-0 shadow-sm"
                      whileHover={{ scale: 1.5 }}
                    />
                    <div className="flex-1">
                      <strong className="text-[var(--color-text-primary)] font-semibold">{item.service}</strong>
                      <span className="text-[var(--color-text-secondary)]">{item.gap}</span>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div 
                className="p-5 bg-gradient-to-r from-red-50 to-red-100/50 border-2 border-red-200 rounded-xl shadow-md"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-red-900 font-bold text-base flex items-center gap-2">
                  <X className="w-5 h-5" />
                  Result: Individual barriers block entire progress toward stability
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Our Approach */}
          <motion.div 
            className="group relative bg-gradient-to-br from-white to-[var(--color-secondary)]/10 rounded-2xl p-8 lg:p-10 border-2 border-[var(--color-secondary)]/30 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/0 to-[var(--color-secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Decorative corner accent */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[var(--color-secondary)]/20 rounded-br-full blur-2xl" />
            
            <div className="relative z-10">
              <motion.div 
                className="flex items-center gap-4 mb-6"
                variants={iconVariants}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-dark)] rounded-2xl flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: [0, 10, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>
                <h3 
                  className="text-3xl font-bold text-[var(--color-text-primary)]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Our Approach
                </h3>
              </motion.div>
              
              <motion.p 
                className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed"
                variants={itemVariants}
              >
                The Ladder works alongside existing nonprofits to address the specific, 
                individual obstacles that are preventing someone from moving forward.
              </motion.p>
              
              <motion.ul 
                className="space-y-5 mb-8"
                variants={containerVariants}
              >
                {content.solutionItems.map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-4 group/item"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="w-6 h-6 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    </motion.div>
                    <div className="flex-1">
                      <strong className="text-[var(--color-text-primary)] font-semibold">{item.title}</strong>
                      <span className="text-[var(--color-text-secondary)]">{item.description}</span>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div 
                className="p-5 bg-gradient-to-r from-[var(--color-secondary)]/10 to-[var(--color-secondary)]/20 border-2 border-[var(--color-secondary)]/30 rounded-xl shadow-md"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-[var(--color-secondary-dark)] font-bold text-base flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Result: Barriers removed, lives transformed, progress achieved
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div 
          className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10 lg:p-14 border-2 border-gray-200 shadow-xl text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/5 via-transparent to-[var(--color-secondary)]/5" />
          
          <div className="relative z-10">
            <motion.div 
              className="flex justify-center gap-6 mb-8"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Users className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-dark)] rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: -360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Handshake className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
            
            <h3 
              className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              We&apos;re Partners, Not Competitors
            </h3>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-[var(--color-text-secondary)] mb-10 leading-relaxed text-center">
                Birmingham&apos;s nonprofits do exceptional work in their areas of expertise. 
                The Ladder exists to complement their services by handling the unique, 
                individual barriers that don&apos;t fit traditional program categories.
              </p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/how-we-help"
                  className="btn btn-primary inline-flex items-center justify-center text-lg px-8 py-4"
                >
                  Learn How We Help
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/partners"
                  className="btn btn-secondary inline-flex items-center justify-center text-lg px-8 py-4"
                >
                  View Our Partners
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
