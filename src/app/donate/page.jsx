import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import {
  Heart,
  Shield,
  ArrowRight,
  Lock,
  BadgeCheck,
  Building2,
  Mail,
  Phone,
} from 'lucide-react'
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
    url: '/donate',
    type: 'website',
  },
  alternates: {
    canonical: '/donate',
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
      url: '/',
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
        <section className="relative overflow-hidden bg-[var(--color-primary)] py-10 lg:py-12">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(26,188,156,0.35), transparent 40%)',
            }}
          />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
                <Shield className="w-4 h-4 text-white" />
                <span className="text-xs font-medium text-white sm:text-sm">
                  {settings.trustBadgeText || '501(c)(3) Tax-Exempt Organization'}
                </span>
              </div>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {settings.heroTitle}
              </h1>
              <p className="text-lg sm:text-xl text-white/90 text-pretty">
                {settings.heroSubtitle}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-gray-50 to-white py-10 lg:py-14">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(300px,1fr)] lg:gap-10">
              <DonateClient settings={settings} />

              <aside className="space-y-6 lg:sticky lg:top-28">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2
                    className="mb-4 text-lg font-bold text-[var(--color-text-primary)]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Your Gift in Action
                  </h2>
                  <ul className="space-y-4">
                    {impactExamples.slice(0, 3).map((example) => (
                      <li key={example._id} className="flex items-start gap-4">
                        <span
                          className="mt-0.5 inline-flex h-12 w-16 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/5 text-base font-bold text-[var(--color-primary)]"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          ${example.amount}
                        </span>
                        <div className="min-w-0">
                          <p className="font-semibold text-[var(--color-text-primary)]">
                            {example.title}
                          </p>
                          <p className="text-sm leading-snug text-[var(--color-text-secondary)]">
                            {example.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {settings.monthlyGivingEnabled && (
                  <div className="rounded-2xl border border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/5 p-6">
                    <div className="mb-2 inline-flex items-center gap-2 text-[var(--color-secondary)]">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm font-semibold">Give monthly</span>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      Monthly donors give us the stability to act the moment someone hits a
                      missing rung. Choose “Monthly” in the form, or learn more first.
                    </p>
                    <Link
                      href="/monthly-giving"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-secondary)] underline-offset-4 hover:underline"
                    >
                      About monthly giving
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2
                    className="mb-4 text-lg font-bold text-[var(--color-text-primary)]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Why Donors Trust Us
                  </h2>
                  <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                    <li className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-secondary)]" />
                      <span>
                        501(c)(3) tax-exempt nonprofit — EIN 82-0737087
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Lock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                      <span>Payments processed securely by Givebutter</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                      <span>100% of donations fund direct barrier removal</span>
                    </li>
                    {settings.matchingGiftInfo && (
                      <li className="flex items-start gap-3">
                        <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                        <span>{settings.matchingGiftInfo}</span>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <p className="mb-3 text-sm font-semibold text-[var(--color-text-primary)]">
                    Questions about giving?
                  </p>
                  <div className="space-y-2 text-sm">
                    <a
                      href="mailto:info@the-ladder.org"
                      className="flex items-center gap-2 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
                    >
                      <Mail className="h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                      info@the-ladder.org
                    </a>
                    <a
                      href="tel:+12055221162"
                      className="flex items-center gap-2 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                      (205) 522-1162
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {settings.monthlyGivingEnabled && (
          <section className="py-12 lg:py-16 bg-[var(--color-secondary)]/10 border-y border-[var(--color-secondary)]/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-[var(--color-secondary-dark)] text-white rounded-full px-4 py-2 mb-6 shadow-sm">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-semibold">Recommended</span>
                </div>
                <h2
                  className="heading-rule heading-rule--centered text-3xl font-bold text-[var(--color-text-primary)] mb-4"
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
