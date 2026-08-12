'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Heart, HandHeart, Building2, ArrowRight } from 'lucide-react'

const iconMap = { Heart, HandHeart, Building2 }

const defaultActionOptions = [
  {
    icon: Heart,
    title: "Need Help?",
    description: "Facing a barrier that's preventing your success? We're here to help.",
    cta: "Apply for Assistance",
    href: "/get-help"
  },
  {
    icon: HandHeart,
    title: "Want to Give?",
    description: "Your donation goes directly to removing barriers for those in need.",
    cta: "Donate Today",
    href: "/donate"
  },
  {
    icon: Building2,
    title: "Nonprofit Partner?",
    description: "Have clients with barriers outside your scope? Let's work together.",
    cta: "Partner With Us",
    href: "/partners"
  }
]

export default function FinalActionRedesigned({ content = null }) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })
  const headline = content?.finalCtaHeadline || 'Ready to Take the Next Step?'
  const accent = content?.finalCtaHeadlineAccent
  const subheadline =
    content?.finalCtaSubheadline || "There's a place for everyone in our mission."

  const actionOptions = content?.ctaOptions?.length
    ? content.ctaOptions.map((option, index) => {
        const Icon =
          iconMap[option.iconName] ||
          defaultActionOptions[index]?.icon ||
          Heart
        return {
          icon: Icon,
          title: option.title,
          description: option.description,
          cta: option.ctaText,
          href: option.ctaLink || '/contact',
        }
      })
    : defaultActionOptions

  return (
    <section 
      ref={sectionRef}
      className="py-16 lg:py-20 bg-[var(--color-primary)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {headline}
            {accent ? <span className="block text-white/90">{accent}</span> : null}
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            {subheadline}
          </p>
        </motion.div>

        {/* Action Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {actionOptions.map((action, index) => (
            <motion.div
              key={action.title}
              className="bg-white rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4">
                <action.icon className="w-7 h-7 text-[var(--color-primary)]" />
              </div>
              
              <h3 
                className="text-xl font-bold text-[var(--color-text-primary)] mb-2"
              >
                {action.title}
              </h3>
              
              <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                {action.description}
              </p>
              
              <Link
                href={action.href}
                className="inline-flex items-center justify-center gap-2 text-[var(--color-primary)] font-semibold hover:text-[var(--color-primary-light)] transition-colors"
              >
                {action.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div 
          className="text-center text-white/80 text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <p>
            Questions? Contact us at{' '}
            <a href="mailto:info@the-ladder.org" className="text-white underline hover:no-underline">
              info@the-ladder.org
            </a>
          </p>
          <p className="mt-1">Birmingham, Alabama • 501(c)(3) Nonprofit • EIN: 82-0737087</p>
        </motion.div>
      </div>
    </section>
  )
}
