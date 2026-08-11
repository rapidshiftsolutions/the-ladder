import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import { Heart, Shield, CheckCircle, ArrowRight, Lock } from 'lucide-react'
import { client } from '@/sanity/lib/client'
import { donationSettingsQuery } from '@/sanity/queries/donationSettingsQuery'
import { impactExamplesByAmountQuery } from '@/sanity/queries/impactExamplesQuery'
import { donateFaqsQuery } from '@/sanity/queries/faqQuery'
import DonateClient from './DonateClient'
import {
  DEFAULT_DONATE_FAQS,
  DEFAULT_IMPACT_EXAMPLES,
  mergeDonationSettings,
} from '@/lib/donationDefaults'

export const metadata = {
  title: 'Donate | Support Birmingham Residents in Need',
  description:
    'Your donation helps Birmingham residents overcome barriers to success. The Ladder is a 501(c)(3) nonprofit. Donate securely through Givebutter today.',
  keywords: [
    'donate Birmingham Alabama',
    'Birmingham nonprofit donation',
    'crisis assistance donations',
    'barrier removal donations',
    'emergency assistance donations Birmingham',
    'Birmingham charity donations',
    'monthly giving Birmingham',
    'tax deductible donation Birmingham',
    '501c3 donation Alabama',
  ],
  openGraph: {
    title: 'Donate | Support Birmingham Residents in Need | The Ladder',
    description:
      'Your tax-deductible donation provides direct crisis intervention and barrier removal assistance to Birmingham residents.',
    url: 'https://the-ladder.org/donate',
    type: 'website',
  },
  alternates: {
    canonical: 'https://the-ladder.org/donate',
  },
}

export const revalidate = 3600

export default async function DonatePage() {
  let settingsRaw = null
  let impactExamples = DEFAULT_IMPACT_EXAMPLES
  let faqs = DEFAULT_DONATE_FAQS

  try {
    const [settingsResult, impactResult, faqResult] = await Promise.all([
      client.fetch(donationSettingsQuery),
      client.fetch(impactExamplesByAmountQuery),
      client.fetch(donateFaqsQuery),
    ])
    settingsRaw = settingsResult
    if (impactResult?.length) impactExamples = impactResult.slice(0, 6)
    if (faqResult?.length) faqs = faqResult
  } catch (error) {
    console.error('Error fetching donation page content:', error)
  }

  const settings = mergeDonationSettings(settingsRaw)
  const monthlyTiers =
    settings.monthlyGivingTiers?.length > 0
      ? settings.monthlyGivingTiers
      : mergeDonationSettings(null).monthlyGivingTiers

  const donateJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DonateAction',
    name: 'Donate to The Ladder',
    target: 'https://the-ladder.org/donate',
    recipient: {
      '@type': 'NGO',
      name: 'The Ladder',
      taxID: '82-0737087',
      url: 'https://the-ladder.org',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donateJsonLd) }}
      />
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-white">
        <section className="relative overflow-hidden bg-[var(--color-primary)] py-14 lg:py-20">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(26,188,156,0.35), transparent 40%)',
            }}
          />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  {settings.trustBadgeText || '501(c)(3) Tax-Exempt Organization'}
                </span>
              </div>
              <h1
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {settings.heroTitle}
              </h1>
              <p className="text-xl text-white/90 mb-8">{settings.heroSubtitle}</p>

              <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Direct barrier removal
                </span>
                <span className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Secure via Givebutter
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  EIN: 82-0737087
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <DonateClient settings={settings} />
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2
                  className="text-3xl font-bold text-[var(--color-text-primary)] mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Your Impact in Action
                </h2>
                <p className="text-lg text-[var(--color-text-secondary)]">
                  Every dollar you give creates real, measurable change in someone&apos;s life.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {impactExamples.slice(0, 3).map((example) => (
                  <div
                    key={example._id}
                    className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200"
                  >
                    <div
                      className="text-4xl font-bold text-[var(--color-primary)] mb-2"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      ${example.amount}
                    </div>
                    <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                      {example.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {example.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {settings.monthlyGivingEnabled && (
          <section className="py-12 lg:py-16 bg-[var(--color-secondary)]/10 border-y border-[var(--color-secondary)]/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] rounded-full px-4 py-2 mb-6">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">Recommended</span>
                </div>
                <h2
                  className="text-3xl font-bold text-[var(--color-text-primary)] mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {settings.monthlyGivingHeadline}
                </h2>
                <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
                  {settings.monthlyGivingDescription}
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {monthlyTiers.slice(0, 3).map((tier) => (
                    <div
                      key={`${tier.name}-${tier.amount}`}
                      className={`p-6 bg-white rounded-xl border ${
                        tier.isHighlighted
                          ? 'border-2 border-[var(--color-secondary)]'
                          : 'border-gray-200'
                      }`}
                    >
                      <div
                        className={`text-2xl font-bold mb-1 ${
                          tier.isHighlighted
                            ? 'text-[var(--color-secondary)]'
                            : 'text-[var(--color-primary)]'
                        }`}
                      >
                        ${tier.amount}/mo
                      </div>
                      <div className="text-sm text-[var(--color-text-secondary)]">{tier.name}</div>
                    </div>
                  ))}
                </div>

                <Link href="/monthly-giving" className="btn btn-primary btn-lg inline-flex items-center">
                  Learn About Monthly Giving
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </section>
        )}

        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl font-bold text-[var(--color-text-primary)] text-center mb-12"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div
                    key={faq._id}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                  >
                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-[var(--color-text-secondary)]">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
