'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Phone, Users, FileText, CheckCircle, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: Phone,
    title: "Reach Out",
    description: "Contact us by phone or online. We respond within 24 hours."
  },
  {
    number: 2,
    icon: Users,
    title: "Share Your Story",
    description: "We listen to understand your unique situation and barriers."
  },
  {
    number: 3,
    icon: FileText,
    title: "Build a Plan",
    description: "Together, we create a personalized path forward."
  },
  {
    number: 4,
    icon: CheckCircle,
    title: "Overcome Together",
    description: "We provide direct assistance and ongoing support."
  }
]

export default function HowItWorksRedesigned() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  return (
    <section 
      ref={sectionRef}
      className="py-16 lg:py-20 bg-[var(--color-bg-secondary)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-3">
            Our Process
          </span>
          <h2 
            className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            How We Help
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
            A simple, proven process to help you overcome barriers.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+24px)] right-[-50%] h-px bg-[var(--color-border-dark)]" />
              )}
              
              <div className="relative text-center">
                {/* Step number + icon */}
                <div className="relative inline-flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[var(--color-secondary)] text-white text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                
                {/* Content */}
                <h3 
                  className="text-lg font-bold text-[var(--color-text-primary)] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/get-help"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] text-white px-6 py-3 rounded-lg font-semibold transition-colors min-h-[48px]"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+12055221162"
              className="inline-flex items-center justify-center gap-2 bg-white border border-[var(--color-border-dark)] hover:border-[var(--color-primary)] text-[var(--color-text-primary)] px-6 py-3 rounded-lg font-semibold transition-colors min-h-[48px]"
            >
              <Phone className="w-4 h-4" />
              (205) 522-1162
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
