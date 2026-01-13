'use client'

import Link from 'next/link'
import { Building2, Users, FileText, CheckCircle, ArrowRight, Phone } from 'lucide-react'

export default function HowItWorksCompact() {
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
    <section className="py-16 lg:py-24 bg-[var(--color-primary)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            How We Help: A Simple, Proven Process
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            From your first call to successful barrier removal, we guide you through 
            every step. Our process is designed to be straightforward and supportive.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 lg:mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-white/20" />
              )}
              
              {/* Step Card */}
              <div className="bg-white rounded-xl p-6 relative z-10 h-full">
                {/* Step Number */}
                <div className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                
                {/* Content */}
                <h3 
                  className="text-xl font-semibold text-[var(--color-text-primary)] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {step.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Success Story Example */}
        <div className="bg-white rounded-xl p-8 lg:p-10 max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] rounded-full px-3 py-1 text-sm font-medium mb-4">
                <CheckCircle className="w-4 h-4" />
                Success Story
              </div>
              <h3 
                className="text-2xl font-bold text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                From Barrier to Breakthrough
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                &quot;A local housing nonprofit referred Sarah to us. She had secured a new job, 
                but her car needed $800 in repairs she couldn&apos;t afford. Without transportation, 
                she would lose the job before starting. We covered the repair cost within 48 hours. 
                Today, Sarah has held that job for over two years and recently moved into 
                permanent housing.&quot;
              </p>
              <Link
                href="/success-stories"
                className="inline-flex items-center text-[var(--color-primary)] font-semibold hover:underline"
              >
                Read More Success Stories
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="flex-shrink-0">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div 
                    className="text-2xl font-bold text-[var(--color-primary)]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    $800
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)]">Investment</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div 
                    className="text-2xl font-bold text-[var(--color-primary)]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    48hr
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)]">Resolution</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div 
                    className="text-2xl font-bold text-[var(--color-primary)]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    2yr+
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)]">Stable Job</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-white/80 mb-6">
            Ready to take the first step? We&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-help"
              className="btn btn-lg bg-white text-[var(--color-primary)] hover:bg-gray-100"
            >
              Apply for Help
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+12055221162"
              className="btn btn-lg bg-white/10 text-white border-2 border-white/30 hover:bg-white/20"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (205) 522-1162
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
