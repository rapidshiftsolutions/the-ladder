'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { AlertCircle, CheckCircle, ArrowRight } from 'lucide-react'

const defaultChallenges = [
  { service: "Housing program", gap: "can't help with car repairs needed for work" },
  { service: "Job training", gap: "can't address childcare barriers during classes" },
  { service: "Healthcare services", gap: "can't solve transportation to appointments" }
]

const defaultSolutions = [
  { title: "Partner referrals", description: "Nonprofits send us clients facing barriers outside their scope" },
  { title: "Individual focus", description: "We address your exact obstacle with personalized support" },
  { title: "Quick response", description: "24-hour initial response, typically resolved within 30 days" }
]

export default function ProblemSolutionRedesigned({ content = null }) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })
  const challenges = content?.challengeItems?.length ? content.challengeItems : defaultChallenges
  const solutions = content?.solutionItems?.length ? content.solutionItems : defaultSolutions
  const badge = content?.problemSectionBadge || 'The Missing Rung'
  const headline = content?.problemSectionHeadline || 'Bridging the Gap'
  const subheadline =
    content?.problemSectionSubheadline ||
    "Sometimes individuals face barriers that don't fit into any single organization's services. That's where we step in."

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-3">
            {badge}
          </span>
          <h2 
            className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {headline}
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            {subheadline}
          </p>
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {/* The Challenge */}
          <motion.div 
            className="p-6 lg:p-8 bg-red-50 rounded-xl border border-red-100"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <h3 
                className="text-xl font-bold text-[var(--color-text-primary)]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                The Challenge
              </h3>
            </div>
            
            <ul className="space-y-3">
              {challenges.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                  <span>
                    <strong className="text-[var(--color-text-primary)]">{item.service}</strong>
                    <span className="text-[var(--color-text-secondary)]"> {item.gap}</span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Approach */}
          <motion.div 
            className="p-6 lg:p-8 bg-[var(--color-secondary)]/5 rounded-xl border border-[var(--color-secondary)]/20"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-secondary)] flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <h3 
                className="text-xl font-bold text-[var(--color-text-primary)]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Our Approach
              </h3>
            </div>
            
            <ul className="space-y-3">
              {solutions.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-[var(--color-text-primary)]">{item.title}:</strong>
                    <span className="text-[var(--color-text-secondary)]"> {item.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link
            href="/how-we-help"
            className="inline-flex items-center justify-center gap-2 text-[var(--color-primary)] font-semibold hover:text-[var(--color-primary-light)] transition-colors"
          >
            Learn how we help
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
