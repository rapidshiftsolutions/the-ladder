'use client'

import { useState } from 'react'
import { Shield, Lock, CheckCircle, ChevronDown, ChevronUp, Copy, Check } from 'lucide-react'
import GivebutterWidget from '@/components/givebutter/GivebutterWidget'

function OtherWaysToGive({ settings }) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState('')

  const items = []
  if (settings.paypalLink) {
    items.push({ label: 'PayPal', value: settings.paypalLink, href: settings.paypalLink })
  }
  if (settings.venmoUsername) {
    items.push({
      label: 'Venmo',
      value: `@${settings.venmoUsername}`,
      href: `https://venmo.com/${settings.venmoUsername}`,
    })
  }
  if (settings.cashAppTag) {
    items.push({
      label: 'Cash App',
      value: `$${settings.cashAppTag}`,
      href: `https://cash.app/$${settings.cashAppTag}`,
    })
  }
  if (settings.zelleEmail) {
    items.push({ label: 'Zelle', value: settings.zelleEmail })
  }
  if (settings.checkInstructions) {
    items.push({ label: 'Check / Mail', value: settings.checkInstructions, multiline: true })
  }

  if (!settings.showOtherWaysToGive || items.length === 0) return null

  const copyValue = async (value, key) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(key)
      setTimeout(() => setCopied(''), 2000)
    } catch {
      // ignore
    }
  }

  return (
    <div className="mt-8 border-t border-gray-200 pt-6">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left text-[var(--color-text-primary)] font-semibold"
        aria-expanded={open}
      >
        <span>Other ways to give</span>
        {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {open && (
        <div className="mt-4 space-y-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--color-primary)] underline-offset-2 hover:underline break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      className={`text-sm text-[var(--color-text-secondary)] ${
                        item.multiline ? 'whitespace-pre-line' : ''
                      }`}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
                {!item.multiline && (
                  <button
                    type="button"
                    onClick={() => copyValue(item.value, item.label)}
                    className="shrink-0 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                    aria-label={`Copy ${item.label}`}
                  >
                    {copied === item.label ? (
                      <Check className="w-4 h-4 text-[var(--color-secondary)]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function DonateClient({ settings }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 lg:p-10">
      <div className="text-center mb-6">
        <h2
          className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mb-3"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {settings.formSectionTitle}
        </h2>
        {settings.donationPageIntro && (
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            {settings.donationPageIntro}
          </p>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-sm text-[var(--color-text-secondary)] mb-6">
        <span className="inline-flex items-center gap-2">
          <Shield className="w-4 h-4 text-[var(--color-primary)]" />
          {settings.trustBadgeText || '501(c)(3) · EIN 82-0737087'}
        </span>
        <span className="inline-flex items-center gap-2">
          <Lock className="w-4 h-4 text-[var(--color-primary)]" />
          Secure checkout via Givebutter
        </span>
        <span className="inline-flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-[var(--color-secondary)]" />
          Tax-deductible
        </span>
      </div>

      <GivebutterWidget
        widgetId={settings.donateWidgetId}
        className="mx-auto"
        minHeight="520px"
      />

      {settings.taxInfo && (
        <p className="mt-6 text-sm text-center text-[var(--color-text-muted)]">
          {settings.taxInfo}
        </p>
      )}

      {settings.matchingGiftInfo && (
        <p className="mt-3 text-sm text-center text-[var(--color-text-secondary)]">
          {settings.matchingGiftInfo}
        </p>
      )}

      <OtherWaysToGive settings={settings} />
    </div>
  )
}
