'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Heart, HelpingHand, Building2, Phone, Mail } from 'lucide-react'
import { 
  containerVariants, 
  cardVariants, 
  iconVariants, 
  headerVariants,
  fadeInUpVariants
} from '@/utils/animations'

export default function FinalActionCompact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const actionPaths = [
    {
      icon: HelpingHand,
      title: 'Need Assistance?',
      description: 'Facing a barrier that\'s preventing your progress? We offer free, confidential support.',
      cta: 'Apply for Help',
      href: '/get-help',
      variant: 'primary',
      features: ['24-hour response time', 'Completely confidential', 'No cost to you']
    },
    {
      icon: Heart,
      title: 'Support Our Mission',
      description: 'Your donation directly helps individuals overcome barriers and achieve stability.',
      cta: 'Make a Donation',
      href: '/donate',
      variant: 'accent',
      features: ['100% tax-deductible', 'Funds direct assistance', 'Create immediate impact']
    },
    {
      icon: Building2,
      title: 'Partner Organizations',
      description: 'Refer clients with barriers outside your scope. Together, we can fill the gaps.',
      cta: 'Partner with Us',
      href: '/partners',
      variant: 'secondary',
      features: ['Collaborative approach', 'Warm referral process', 'Shared success tracking']
    }
  ]

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
            <ArrowRight className="w-5 h-5 text-[var(--color-primary)]" />
            <span className="text-sm font-semibold text-[var(--color-primary)]">Get Involved</span>
          </motion.div>
          <h2 
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--color-text-primary)] mb-6 leading-tight text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Take the Next Step
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl lg:text-2xl text-[var(--color-text-secondary)] leading-relaxed text-center">
              Whether you need help, want to give, or represent a partner organization, 
              there&apos;s a meaningful way for you to be part of our mission.
            </p>
          </div>
        </motion.div>

        {/* Action Cards */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {actionPaths.map((action, index) => {
            const colorVar = action.variant === 'primary' 
              ? 'var(--color-primary)' 
              : action.variant === 'accent' 
              ? 'var(--color-accent)' 
              : 'var(--color-secondary)'
            
            return (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 lg:p-10 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden"
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Animated background gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${colorVar}05, ${colorVar}10)` }}
                />
                
                {/* Decorative corner accent */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-bl-full blur-2xl opacity-20"
                  style={{ background: colorVar }}
                />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    style={{
                      background: `linear-gradient(135deg, ${colorVar}, ${colorVar}dd)`
                    }}
                    variants={iconVariants}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <action.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 
                    className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {action.title}
                  </h3>
                  
                  <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                    {action.description}
                  </p>

                  {/* Features */}
                  <motion.ul 
                    className="space-y-3 mb-8 flex-grow"
                    variants={containerVariants}
                  >
                    {action.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-start gap-3 text-base text-[var(--color-text-secondary)]"
                        variants={fadeInUpVariants}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className={`w-2 h-2 rounded-full mt-2 flex-shrink-0`}
                          style={{ background: colorVar }}
                          whileHover={{ scale: 1.5 }}
                        />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* CTA Button */}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={action.href}
                      className={`btn w-full justify-center text-lg px-6 py-4 ${
                        action.variant === 'primary' ? 'btn-primary' :
                        action.variant === 'accent' ? 'btn-accent' :
                        'btn-secondary'
                      }`}
                    >
                      {action.cta}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-2xl p-10 lg:p-14 text-center text-white overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Decorative background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10">
            <motion.h3 
              className="text-3xl lg:text-4xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              Have Questions? We&apos;re Here to Help
            </motion.h3>
            <motion.p 
              className="text-xl text-white/90 mb-10 max-w-2xl mx-auto text-center leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              Our team is available to answer your questions about our services, 
              donation process, or partnership opportunities.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <motion.a 
                href="tel:+12055221162" 
                className="flex items-center gap-3 bg-white/20 backdrop-filter backdrop-blur-lg px-6 py-4 rounded-xl border border-white/30 hover:bg-white/30 transition-all text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold text-lg text-white">(205) 522-1162</span>
              </motion.a>
              <motion.a 
                href="mailto:info@the-ladder.org" 
                className="flex items-center gap-3 bg-white/20 backdrop-filter backdrop-blur-lg px-6 py-4 rounded-xl border border-white/30 hover:bg-white/30 transition-all text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold text-lg text-white">info@the-ladder.org</span>
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="text-white/90 text-base"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
            >
              <p>The Ladder • Birmingham, Alabama</p>
              <p className="mt-2">501(c)(3) Nonprofit Organization • EIN: 82-0737087</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="max-w-3xl mx-auto">
            <p 
              className="text-2xl lg:text-3xl text-[var(--color-text-secondary)] italic text-center leading-relaxed"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              &quot;Every barrier can be overcome. Every person deserves the opportunity to succeed.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
