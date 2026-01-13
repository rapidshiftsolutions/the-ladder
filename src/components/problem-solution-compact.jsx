'use client'

import Link from 'next/link'
import { AlertCircle, CheckCircle, ArrowRight, Users, Handshake } from 'lucide-react'

export default function ProblemSolutionCompact() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Bridging the Gap in Birmingham&apos;s Safety Net
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Birmingham has excellent nonprofit organizations, but sometimes individuals 
            face barriers that don&apos;t fit neatly into any single organization&apos;s services. 
            That&apos;s where The Ladder steps in.
          </p>
        </div>

        {/* Problem / Solution Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* The Challenge */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 
                className="text-2xl font-bold text-[var(--color-text-primary)]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                The Challenge
              </h3>
            </div>
            
            <p className="text-[var(--color-text-secondary)] mb-6">
              Individuals often face specific obstacles that fall outside traditional 
              nonprofit service boundaries, leaving them stuck despite seeking help.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-[var(--color-text-primary)]">Housing program</strong>
                  <span className="text-[var(--color-text-secondary)]"> can&apos;t help with car repairs needed for work</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-[var(--color-text-primary)]">Job training</strong>
                  <span className="text-[var(--color-text-secondary)]"> can&apos;t address childcare barriers during classes</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-[var(--color-text-primary)]">Healthcare services</strong>
                  <span className="text-[var(--color-text-secondary)]"> can&apos;t solve transportation to appointments</span>
                </div>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-lg">
              <p className="text-red-800 font-medium text-sm">
                Result: Individual barriers block entire progress toward stability
              </p>
            </div>
          </div>

          {/* Our Approach */}
          <div className="bg-[var(--color-primary)]/5 rounded-xl p-8 border border-[var(--color-primary)]/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 
                className="text-2xl font-bold text-[var(--color-text-primary)]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Our Approach
              </h3>
            </div>
            
            <p className="text-[var(--color-text-secondary)] mb-6">
              The Ladder works alongside existing nonprofits to address the specific, 
              individual obstacles that are preventing someone from moving forward.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-[var(--color-text-primary)]">Partner referrals:</strong>
                  <span className="text-[var(--color-text-secondary)]"> Nonprofits send us clients facing barriers outside their scope</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-[var(--color-text-primary)]">Individual focus:</strong>
                  <span className="text-[var(--color-text-secondary)]"> We address your exact obstacle with personalized support</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-[var(--color-text-primary)]">Quick response:</strong>
                  <span className="text-[var(--color-text-secondary)]"> 24-hour initial response, typically resolved within 30 days</span>
                </div>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 rounded-lg">
              <p className="text-[var(--color-secondary)] font-medium text-sm">
                Result: Barriers removed, lives transformed, progress achieved
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="bg-gray-50 rounded-xl p-8 lg:p-12 border border-gray-200 text-center">
          <div className="flex justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
              <Handshake className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
          </div>
          
          <h3 
            className="text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            We&apos;re Partners, Not Competitors
          </h3>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-8">
            Birmingham&apos;s nonprofits do exceptional work in their areas of expertise. 
            The Ladder exists to complement their services by handling the unique, 
            individual barriers that don&apos;t fit traditional program categories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/how-we-help"
              className="btn btn-primary"
            >
              Learn How We Help
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/partners"
              className="btn btn-secondary"
            >
              View Our Partners
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
