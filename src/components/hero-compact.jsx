'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Heart, Phone, Shield, Users, Clock } from 'lucide-react'

export default function HeroCompact() {
  return (
    <section className="relative bg-white">
      {/* Hero Content */}
      <div className="relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/TheLadder/photos/LadderImage.jpg"
            alt="Community members supporting each other"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/95 via-[var(--color-primary)]/85 to-[var(--color-primary)]/75" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">
                501(c)(3) Nonprofit • Serving Birmingham Since 2021
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Helping Individuals Overcome{' '}
              <span className="text-[var(--color-accent-light)]">Barriers to Success</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              When life&apos;s obstacles stand in your way, The Ladder partners with you 
              to find solutions. We provide personalized crisis intervention and 
              connect you with the resources you need.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/get-help"
                className="btn btn-lg bg-white text-[var(--color-primary)] hover:bg-gray-100 font-semibold"
              >
                Get Help Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/donate"
                className="btn btn-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] font-semibold flex items-center gap-2"
              >
                <Heart className="w-5 h-5" />
                Make a Donation
              </Link>
            </div>

            {/* Quick Contact */}
            <div className="flex items-center gap-6 text-white/80 text-sm">
              <a 
                href="tel:+12055221162" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                (205) 522-1162
              </a>
              <span className="text-white/40">|</span>
              <span>All services are free and confidential</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar / Stats Section */}
      <div className="bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div 
                className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                500+
              </div>
              <div className="text-sm text-[var(--color-text-secondary)]">
                Individuals Helped
              </div>
            </div>
            <div className="text-center">
              <div 
                className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                95%
              </div>
              <div className="text-sm text-[var(--color-text-secondary)]">
                Success Rate
              </div>
            </div>
            <div className="text-center">
              <div 
                className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                24hr
              </div>
              <div className="text-sm text-[var(--color-text-secondary)]">
                Response Time
              </div>
            </div>
            <div className="text-center">
              <div 
                className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                100%
              </div>
              <div className="text-sm text-[var(--color-text-secondary)]">
                Confidential
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
