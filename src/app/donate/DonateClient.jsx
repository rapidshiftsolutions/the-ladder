'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, Shield, CheckCircle, Lock, CreditCard, ExternalLink, Copy, Check } from 'lucide-react'

// Platform configurations for payment links
const platforms = {
  paypal: {
    name: 'PayPal',
    color: '#003087',
    bgColor: 'bg-[#003087]',
    hoverColor: 'hover:bg-[#001F5C]',
    getLink: (username, amount) => `https://paypal.me/${username}${amount ? `/${amount}` : ''}`,
    getDeepLink: (username, amount) => `paypal://paypal.me/${username}${amount ? `/${amount}` : ''}`,
  },
  venmo: {
    name: 'Venmo',
    color: '#008CFF',
    bgColor: 'bg-[#008CFF]',
    hoverColor: 'hover:bg-[#0070CC]',
    getLink: (username, amount) => `https://venmo.com/${username}`,
    getDeepLink: (username, amount, note) => 
      `venmo://paycharge?txn=pay&recipients=${username}${amount ? `&amount=${amount}` : ''}&note=${encodeURIComponent(note || 'Donation to The Ladder')}`,
  },
  cashapp: {
    name: 'Cash App',
    color: '#00D632',
    bgColor: 'bg-[#00D632]',
    hoverColor: 'hover:bg-[#00B82B]',
    getLink: (tag, amount) => `https://cash.app/$${tag}${amount ? `/${amount}` : ''}`,
    getDeepLink: (tag, amount) => `cashapp://cash.app/$${tag}${amount ? `/${amount}` : ''}`,
  },
}

// Payment button component
function PaymentButton({ platform, username, amount, note }) {
  const [copied, setCopied] = useState(false)
  const config = platforms[platform]
  
  if (!config || !username) return null

  const handleClick = () => {
    // Check if mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    
    if (isMobile) {
      // Try deep link first on mobile
      const deepLink = config.getDeepLink(username, amount, note)
      window.location.href = deepLink
      
      // Fallback to web after a short delay if deep link doesn't work
      setTimeout(() => {
        window.open(config.getLink(username, amount), '_blank')
      }, 500)
    } else {
      // Desktop: open web link
      window.open(config.getLink(username, amount), '_blank')
    }
  }

  const handleCopy = (e) => {
    e.stopPropagation()
    const text = platform === 'cashapp' ? `$${username}` : `@${username}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const displayUsername = platform === 'cashapp' ? `$${username}` : `@${username}`

  return (
    <div className="relative group">
      <button
        onClick={handleClick}
        className={`
          w-full ${config.bgColor} ${config.hoverColor} 
          text-white font-semibold rounded-lg
          flex items-center justify-center gap-3
          px-6 py-4 text-lg
          transition-all duration-200 transform hover:scale-[1.02]
          shadow-md hover:shadow-lg
        `}
        aria-label={`Donate ${amount ? `$${amount}` : ''} via ${config.name}`}
      >
        <span className="font-bold">{config.name}</span>
        <ExternalLink className="w-4 h-4 opacity-70" />
      </button>
      
      {/* Username tooltip with copy */}
      <button
        onClick={handleCopy}
        className="
          absolute -bottom-7 left-1/2 -translate-x-1/2
          text-xs text-[var(--color-text-secondary)] 
          flex items-center gap-1
          opacity-0 group-hover:opacity-100 transition-opacity
          hover:text-[var(--color-text-primary)]
        "
        aria-label={`Copy ${config.name} username`}
      >
        {copied ? (
          <>
            <Check className="w-3 h-3 text-[var(--color-secondary)]" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-3 h-3" />
            {displayUsername}
          </>
        )}
      </button>
    </div>
  )
}

export default function DonateClient({ settings }) {
  const [givingType, setGivingType] = useState('one-time')
  const [selectedAmount, setSelectedAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState('')
  const [gdprConsent, setGdprConsent] = useState(false)
  const [emailUpdates, setEmailUpdates] = useState(false)

  // Use settings from Sanity or defaults
  const suggestedAmounts = settings?.suggestedAmounts || [25, 50, 100, 250]
  const impactStatements = settings?.impactStatements || []
  const paypalUsername = settings?.paypalLink?.replace('https://paypal.me/', '') || settings?.paypalUsername
  const venmoUsername = settings?.venmoUsername
  const cashAppTag = settings?.cashAppTag

  // Get current amount (custom or selected)
  const currentAmount = customAmount ? parseInt(customAmount, 10) : selectedAmount

  // Get impact statement for current amount
  const currentImpact = impactStatements.find(s => s.amount === currentAmount)

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (e) => {
    const value = e.target.value
    setCustomAmount(value)
    if (value) {
      setSelectedAmount(null)
    }
  }

  const hasPaymentMethods = paypalUsername || venmoUsername || cashAppTag

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Donation Form Header */}
      <div className="bg-gray-50 border-b border-gray-200 px-8 py-6">
        <h2 
          className="text-2xl font-bold text-[var(--color-text-primary)] text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Make Your Donation
        </h2>
      </div>
      
      <div className="p-8">
        {/* Giving Type Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 p-1 rounded-lg">
            <button 
              onClick={() => setGivingType('one-time')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                givingType === 'one-time'
                  ? 'bg-white shadow-sm text-[var(--color-primary)]'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              One-Time Gift
            </button>
            <button 
              onClick={() => setGivingType('monthly')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                givingType === 'monthly'
                  ? 'bg-white shadow-sm text-[var(--color-primary)]'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              Monthly Giving
            </button>
          </div>
        </div>

        {/* Suggested Amounts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {suggestedAmounts.map((amount) => (
            <button 
              key={amount}
              onClick={() => handleAmountClick(amount)}
              className={`p-4 border-2 rounded-lg font-bold text-xl transition-all ${
                selectedAmount === amount && !customAmount
                  ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5 text-[var(--color-primary)] scale-105' 
                  : 'border-gray-200 text-[var(--color-text-primary)] hover:border-[var(--color-primary)]'
              }`}
            >
              ${amount}
              {givingType === 'monthly' && <span className="text-sm font-normal">/mo</span>}
            </button>
          ))}
        </div>

        {/* Custom Amount */}
        <div className="mb-6">
          <label htmlFor="custom-amount" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
            Or enter a custom amount
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="text-[var(--color-text-secondary)] text-lg">$</span>
            </div>
            <input
              type="number"
              id="custom-amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
              className="block w-full pl-8 pr-4 py-4 border border-gray-200 rounded-lg text-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition-colors"
              placeholder="0.00"
              min="1"
              step="1"
            />
          </div>
        </div>

        {/* Impact Statement */}
        {currentImpact && (
          <div className="mb-6 p-4 bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 rounded-lg text-center">
            <p className="text-[var(--color-text-secondary)]">
              <span className="font-semibold text-[var(--color-secondary)]">${currentAmount}</span>
              {' '}{currentImpact.impact}
            </p>
          </div>
        )}

        {/* Consent Checkboxes */}
        <div className="space-y-4 mb-8 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-start">
            <input
              id="gdpr-consent"
              name="gdpr-consent"
              type="checkbox"
              checked={gdprConsent}
              onChange={(e) => setGdprConsent(e.target.checked)}
              required
              className="mt-1 h-5 w-5 text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-gray-300 rounded cursor-pointer"
            />
            <label htmlFor="gdpr-consent" className="ml-3 text-sm text-[var(--color-text-secondary)]">
              I consent to The Ladder storing and processing my personal data for donation processing. 
              <Link href="/privacy" className="text-[var(--color-primary)] hover:underline ml-1">
                View Privacy Policy
              </Link>
            </label>
          </div>
          <div className="flex items-start">
            <input
              id="email-updates"
              name="email-updates"
              type="checkbox"
              checked={emailUpdates}
              onChange={(e) => setEmailUpdates(e.target.checked)}
              className="mt-1 h-5 w-5 text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-gray-300 rounded cursor-pointer"
            />
            <label htmlFor="email-updates" className="ml-3 text-sm text-[var(--color-text-secondary)]">
              I would like to receive updates about The Ladder&apos;s impact (you can unsubscribe at any time)
            </label>
          </div>
        </div>

        {/* Payment Buttons */}
        {hasPaymentMethods ? (
          <div className="space-y-4">
            {/* Monthly giving note */}
            {givingType === 'monthly' && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-center text-sm text-amber-800">
                <strong>Note:</strong> After clicking a payment option, please set up recurring payments in your account settings.
              </div>
            )}

            {paypalUsername && (
              <PaymentButton
                platform="paypal"
                username={paypalUsername}
                amount={currentAmount}
                note={`${givingType === 'monthly' ? 'Monthly ' : ''}Donation to The Ladder - $${currentAmount}`}
              />
            )}
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              {venmoUsername && (
                <PaymentButton
                  platform="venmo"
                  username={venmoUsername}
                  amount={currentAmount}
                  note={`${givingType === 'monthly' ? 'Monthly ' : ''}Donation to The Ladder - $${currentAmount}`}
                />
              )}
              {cashAppTag && (
                <PaymentButton
                  platform="cashapp"
                  username={cashAppTag}
                  amount={currentAmount}
                />
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <Heart className="w-12 h-12 text-[var(--color-ladder-red)] mx-auto mb-4" />
            <p className="text-[var(--color-text-secondary)]">
              Payment methods are being configured. Please check back soon or contact us directly to donate.
            </p>
          </div>
        )}

        {/* Security Notice */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-[var(--color-text-secondary)]">
          <Lock className="w-4 h-4" />
          <span>Secure payment links • 501(c)(3) tax-deductible</span>
        </div>

        {/* Trust Badge */}
        <div className="mt-4 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 text-sm text-[var(--color-text-secondary)]">
            <Shield className="w-4 h-4" />
            <span>EIN: 82-0737087</span>
          </div>
        </div>
      </div>
    </div>
  )
}
