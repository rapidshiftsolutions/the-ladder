'use client'

import { createElement } from 'react'
import Link from 'next/link'
import { Heart, Shield, Lock, AlertCircle } from 'lucide-react'
import GivebutterScript from '/src/components/GivebutterScript'
import { getGivebutterConfig, isGivebutterConfigured } from '/src/lib/givebutter'

/**
 * GiveButter-powered donation checkout.
 * Amounts and frequency are handled by GiveButter's hosted form.
 * URL prefill (?amount=50&frequency=monthly) is read by the widget from the page URL.
 */
export default function DonateClient({ settings, widgetIdOverride }) {
  const config = getGivebutterConfig(settings)
  const widgetId = widgetIdOverride || config.widgetId
  const showGoalBar = !widgetIdOverride && Boolean(config.goalWidgetId)
  const configured = Boolean(config.accountId && (widgetId || config.campaignCode))
  const taxInfo =
    settings?.taxInfo ||
    'The Ladder is a 501(c)(3) nonprofit organization (EIN: 82-0737087). All donations are tax-deductible to the fullest extent allowed by law.'

  const embed = widgetId
    ? createElement('givebutter-widget', { id: widgetId })
    : createElement('givebutter-giving-form', { campaign: config.campaignCode })

  const goalBar = showGoalBar
    ? createElement('givebutter-widget', { id: config.goalWidgetId })
    : null

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-200 px-8 py-6">
        <h2
          className="text-2xl font-bold text-[var(--color-text-primary)] text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Make Your Donation
        </h2>
        <p className="mt-2 text-center text-sm text-[var(--color-text-secondary)]">
          Secure checkout powered by GiveButter. One-time and monthly gifts welcome.
        </p>
      </div>

      <div className="p-6 sm:p-8">
        {/* Load script if Account ID comes from Sanity (env already loaded in layout) */}
        {config.accountId && <GivebutterScript accountId={config.accountId} />}

        {configured ? (
          <div
            className="givebutter-embed min-h-[420px] space-y-6"
            data-testid="givebutter-embed"
          >
            {goalBar ? (
              <div className="givebutter-goal" data-testid="givebutter-goal">
                {goalBar}
              </div>
            ) : null}
            {embed}
          </div>
        ) : (
          <div
            className="text-center py-10 px-4"
            data-testid="givebutter-not-configured"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-amber-50 flex items-center justify-center">
              <AlertCircle className="w-7 h-7 text-amber-600" />
            </div>
            <h3
              className="text-xl font-bold text-[var(--color-text-primary)] mb-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Donation checkout is being configured
            </h3>
            <p className="text-[var(--color-text-secondary)] max-w-md mx-auto mb-6">
              We&apos;re finishing the GiveButter setup for The Ladder. Please check
              back shortly, or contact us to make a gift in the meantime.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Contact Us to Donate
            </Link>
          </div>
        )}

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-[var(--color-text-secondary)]">
          <span className="inline-flex items-center gap-2">
            <Lock className="w-4 h-4" />
            Secure payment via GiveButter
          </span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <span className="inline-flex items-center gap-2">
            <Shield className="w-4 h-4" />
            501(c)(3) tax-deductible
          </span>
        </div>

        <div className="mt-4 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 text-sm text-[var(--color-text-secondary)]">
            <Heart className="w-4 h-4 text-[var(--color-accent)]" />
            <span>EIN: 82-0737087</span>
          </div>
        </div>

        <p className="mt-6 text-xs text-center text-[var(--color-text-secondary)] leading-relaxed">
          {taxInfo}
        </p>
      </div>
    </div>
  )
}
