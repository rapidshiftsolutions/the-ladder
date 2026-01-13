import Link from 'next/link'
import { Heart, ArrowRight } from 'lucide-react'

export default function CTASection({
  title = 'Help Someone Climb Higher',
  description = 'Your donation removes real barriers for real people in Birmingham. Every dollar makes a difference.',
  primaryCta = { text: 'Donate Now', href: '/donate' },
  secondaryCta = { text: 'Learn How We Help', href: '/how-we-help' },
  variant = 'default', // 'default', 'dark', 'light'
}) {
  const variants = {
    default: {
      bg: 'bg-gradient-to-br from-[var(--color-ladder-red)] to-[var(--color-ladder-red-dark)]',
      text: 'text-white',
      subtext: 'text-white/90',
      primaryBtn: 'bg-white text-[var(--color-ladder-red)] hover:bg-white/90',
      secondaryBtn: 'border-2 border-white text-white hover:bg-white/10',
    },
    dark: {
      bg: 'bg-gradient-to-br from-[var(--color-ladder-blue)] to-[var(--color-ladder-blue-dark)]',
      text: 'text-white',
      subtext: 'text-white/90',
      primaryBtn: 'bg-[var(--color-ladder-red)] text-white hover:bg-[var(--color-ladder-red-dark)]',
      secondaryBtn: 'border-2 border-white text-white hover:bg-white/10',
    },
    light: {
      bg: 'bg-[var(--color-surface)]',
      text: 'text-[var(--color-text-primary)]',
      subtext: 'text-[var(--color-text-secondary)]',
      primaryBtn: 'bg-[var(--color-ladder-red)] text-white hover:bg-[var(--color-ladder-red-dark)]',
      secondaryBtn: 'border-2 border-[var(--color-ladder-blue)] text-[var(--color-ladder-blue)] hover:bg-[var(--color-ladder-blue)] hover:text-white',
    },
  }

  const v = variants[variant]

  return (
    <section className={`${v.bg} py-16 sm:py-20`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${v.text} mb-4`}>
          {title}
        </h2>
        <p className={`text-lg ${v.subtext} mb-8 max-w-2xl mx-auto`}>
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCta.href}
            className={`${v.primaryBtn} inline-flex items-center justify-center gap-2 rounded-lg font-semibold px-6 py-3 min-h-[44px] transition-all`}
          >
            <Heart className="w-5 h-5" />
            {primaryCta.text}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={`${v.secondaryBtn} inline-flex items-center justify-center gap-2 rounded-lg font-semibold px-6 py-3 min-h-[44px] transition-all`}
            >
              {secondaryCta.text}
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
