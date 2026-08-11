import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import { Heart, CheckCircle, Calendar, Shield, Star, Users } from 'lucide-react'
import { client } from '@/sanity/lib/client'
import { donationSettingsQuery } from '@/sanity/queries/donationSettingsQuery'
import GivebutterWidget from '@/components/givebutter/GivebutterWidget'
import { mergeDonationSettings } from '@/lib/donationDefaults'

export const metadata = {
  title: 'Monthly Giving | Sustaining Support',
  description:
    'Become a monthly donor and provide sustained support for barrier removal in Birmingham. Give securely through Givebutter.',
  openGraph: {
    title: 'Monthly Giving | The Ladder Birmingham',
    description: 'Join our community of monthly donors and create lasting impact.',
    url: 'https://the-ladder.org/monthly-giving',
    type: 'website',
  },
  alternates: {
    canonical: 'https://the-ladder.org/monthly-giving',
  },
}

export const revalidate = 3600

export default async function MonthlyGivingPage() {
  let settingsRaw = null
  try {
    settingsRaw = await client.fetch(donationSettingsQuery)
  } catch (error) {
    console.error('Error fetching monthly giving settings:', error)
  }

  const settings = mergeDonationSettings(settingsRaw)
  const tiers =
    settings.monthlyGivingTiers?.length > 0
      ? settings.monthlyGivingTiers
      : mergeDonationSettings(null).monthlyGivingTiers

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-white">
        <section className="relative overflow-hidden bg-[var(--color-primary)] py-14 lg:py-20">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 15% 30%, rgba(255,255,255,0.2), transparent 40%), radial-gradient(circle at 85% 10%, rgba(230,126,34,0.35), transparent 35%)',
            }}
          />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                <Heart className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Monthly Giving</span>
              </div>
              <h1
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {settings.monthlyHeroTitle}
              </h1>
              <p className="text-xl text-white/90">{settings.monthlyHeroSubtitle}</p>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 lg:p-10">
                <div className="text-center mb-6">
                  <h2
                    className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mb-3"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Start Your Monthly Gift
                  </h2>
                  <p className="text-[var(--color-text-secondary)]">
                    {settings.monthlyGivingDescription}
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 text-sm text-[var(--color-text-secondary)] mb-6">
                  <span className="inline-flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[var(--color-primary)]" />
                    Secure via Givebutter
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-secondary)]" />
                    Cancel anytime
                  </span>
                </div>

                <GivebutterWidget
                  widgetId={settings.monthlyWidgetId}
                  embedUrl={settings.embedUrl}
                  campaignCode={settings.campaignCode}
                  className="mx-auto"
                  minHeight="720px"
                  title="Monthly giving to The Ladder"
                />

                {settings.taxInfo && (
                  <p className="mt-6 text-sm text-center text-[var(--color-text-muted)]">
                    {settings.taxInfo}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-bold text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Choose Your Impact Level
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                These levels help you understand impact. Select your amount inside the form above.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {tiers.map((tier) => (
                <div
                  key={`${tier.name}-${tier.amount}`}
                  className={`bg-gray-50 rounded-xl p-6 border-2 ${
                    tier.isHighlighted
                      ? 'border-[var(--color-secondary)]'
                      : 'border-gray-200'
                  }`}
                >
                  {tier.isHighlighted && (
                    <div className="bg-[var(--color-secondary-dark)] text-white text-xs font-medium px-2 py-1 rounded-full inline-block mb-3">
                      Most Popular
                    </div>
                  )}
                  <div
                    className="text-3xl font-bold text-[var(--color-primary)] mb-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    ${tier.amount}
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)] mb-3">per month</div>
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                    {tier.name}
                  </h3>
                  {tier.description && (
                    <p className="text-sm text-[var(--color-text-secondary)]">{tier.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                  Quarterly Updates
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Impact reports with stories of lives you&apos;ve helped change
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">Recognition</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Annual acknowledgment in our impact reporting
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">Community</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Join a dedicated community of Ladder Climbers
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link
                href="/donate"
                className="text-[var(--color-primary)] font-semibold underline-offset-2 hover:underline"
              >
                Prefer a one-time gift? Donate once instead
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
