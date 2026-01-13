'use client'

import { Users, Target, Heart, Handshake, ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  containerVariants, 
  cardVariants, 
  iconVariants, 
  headerVariants,
  badgeVariants
} from '@/utils/animations'

export default function HowWeHelpRedesigned() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const steps = [
    {
      icon: Users,
      title: "Partner Identifies Need",
      description: "A nonprofit partner identifies someone facing a barrier they can't overcome.",
      accent: "#007AFF"
    },
    {
      icon: Target,
      title: "We Assess the Barrier",
      description: "The Ladder interviews the person to identify the specific 'missing rung.'",
      accent: "#FF9500"
    },
    {
      icon: Heart,
      title: "Provide Targeted Support", 
      description: "We work with the individual to remove their specific barrier.",
      accent: "#FF3B30"
    },
    {
      icon: Handshake,
      title: "Follow Up for Success",
      description: "Ongoing support and accountability to ensure sustainable progress.",
      accent: "#34C759"
    }
  ]

  return (
    <section 
      ref={sectionRef} 
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-80 h-80 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
            <Target className="w-5 h-5 text-[var(--color-primary)]" />
            <span className="text-sm font-semibold text-[var(--color-primary)]">Our Process</span>
          </motion.div>
          <h2 
            className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-center" 
            style={{ color: '#1d1d1f', fontFamily: 'var(--font-heading)' }}
          >
            How We Help People
            <br />
            <span style={{ color: '#007AFF' }}>Climb Over Barriers</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl lg:text-2xl leading-relaxed text-center" style={{ color: '#86868b' }}>
              We focus on people over problems, addressing individual roadblocks 
              rather than specific issues. Each person has unique barriers preventing their progress.
            </p>
          </div>
        </motion.div>

        {/* Process cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
            >
              {/* Glass card */}
              <motion.div 
                className="relative p-8 rounded-3xl overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(30px)',
                  WebkitBackdropFilter: 'blur(30px)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  boxShadow: `
                    0 8px 32px rgba(0, 0, 0, 0.12),
                    inset 0 1px 0 rgba(255, 255, 255, 0.3)
                  `
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${step.accent}05, ${step.accent}10)`
                  }}
                />
                
                {/* Decorative corner accent */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-bl-full blur-2xl opacity-20"
                  style={{ background: step.accent }}
                />

                {/* Step number */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg z-10"
                  style={{
                    background: `linear-gradient(135deg, ${step.accent}, ${step.accent}dd)`,
                    boxShadow: `0 4px 20px ${step.accent}40`
                  }}
                  variants={badgeVariants}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {index + 1}
                </motion.div>

                {/* Icon container */}
                <motion.div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                  style={{
                    background: `${step.accent}10`,
                    border: `1px solid ${step.accent}20`
                  }}
                  variants={iconVariants}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <step.icon 
                    className="w-8 h-8" 
                    style={{ color: step.accent }}
                  />
                </motion.div>

                {/* Content */}
                <h3 
                  className="text-xl lg:text-2xl font-bold mb-4 relative z-10" 
                  style={{ color: '#1d1d1f', fontFamily: 'var(--font-heading)' }}
                >
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed relative z-10" style={{ color: '#86868b' }}>
                  {step.description}
                </p>

                {/* Subtle indicator */}
                <motion.div 
                  className="absolute bottom-6 left-8 h-1 rounded-full z-10"
                  style={{ background: step.accent }}
                  initial={{ width: '32px' }}
                  whileHover={{ width: '48px' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-gray-300 to-transparent z-0" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Mission card */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div 
            className="relative p-12 lg:p-16 rounded-3xl text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.9), rgba(0, 122, 255, 0.8))',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: `
                0 20px 60px rgba(0, 122, 255, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2)
              `
            }}
          >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div 
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full"
                style={{ background: 'radial-gradient(circle, white, transparent)' }}
              />
              <div 
                className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full"
                style={{ background: 'radial-gradient(circle, white, transparent)' }}
              />
            </div>

            <div className="relative z-10">
              {/* Quote icon */}
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(20px)'
                }}
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              >
                <Heart className="w-8 h-8 text-white" />
              </motion.div>

              {/* Quote */}
              <blockquote className="text-3xl lg:text-4xl font-bold text-white mb-12 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                "We focus on{' '}
                <span 
                  className="px-3 py-1 rounded-xl"
                  style={{ background: 'rgba(255, 59, 48, 0.8)' }}
                >
                  people over problems
                </span>
                , helping individuals one by one climb over very specific barriers."
              </blockquote>

              {/* Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                <motion.a
                  href="/how-we-help"
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold"
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    color: '#007AFF',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 4px 20px rgba(255, 255, 255, 0.3)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Our Services
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                </motion.a>
                <motion.a
                  href="/partners"
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white"
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Partner Organizations
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}