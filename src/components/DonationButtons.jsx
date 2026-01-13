'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, ExternalLink, QrCode, Copy, Check } from 'lucide-react'

// Platform configurations
const platforms = {
  paypal: {
    name: 'PayPal',
    color: '#003087',
    bgColor: 'bg-[#003087]',
    hoverColor: 'hover:bg-[#001F5C]',
    icon: '/images/paypal-logo.svg',
    getLink: (username) => `https://paypal.me/${username}`,
    getDeepLink: (username) => `paypal://paypal.me/${username}`,
  },
  venmo: {
    name: 'Venmo',
    color: '#008CFF',
    bgColor: 'bg-[#008CFF]',
    hoverColor: 'hover:bg-[#0070CC]',
    icon: '/images/venmo-logo.svg',
    getLink: (username) => `https://venmo.com/${username}`,
    getDeepLink: (username, amount, note) => 
      `venmo://paycharge?txn=pay&recipients=${username}${amount ? `&amount=${amount}` : ''}&note=${encodeURIComponent(note || 'Donation to The Ladder')}`,
  },
  cashapp: {
    name: 'Cash App',
    color: '#00D632',
    bgColor: 'bg-[#00D632]',
    hoverColor: 'hover:bg-[#00B82B]',
    icon: '/images/cashapp-logo.svg',
    getLink: (tag) => `https://cash.app/${tag}`,
    getDeepLink: (tag, amount, note) => 
      `cashapp://cash.app/${tag}${amount ? `/${amount}` : ''}`,
  },
}

// Individual donation button
function DonationButton({ platform, username, amount, note, size = 'default' }) {
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
        window.open(config.getLink(username), '_blank')
      }, 500)
    } else {
      // Desktop: open web link
      window.open(config.getLink(username), '_blank')
    }
  }

  const handleCopy = (e) => {
    e.stopPropagation()
    const text = platform === 'cashapp' ? `$${username}` : `@${username}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    default: 'px-6 py-3',
    large: 'px-8 py-4 text-lg',
  }

  const displayUsername = platform === 'cashapp' ? `$${username}` : `@${username}`

  return (
    <div className="relative group">
      <button
        onClick={handleClick}
        className={`
          w-full ${config.bgColor} ${config.hoverColor} 
          text-white font-semibold rounded-xl
          flex items-center justify-center gap-3
          ${sizeClasses[size]}
          transition-all duration-200 transform hover:scale-[1.02]
          shadow-lg hover:shadow-xl
        `}
        aria-label={`Donate via ${config.name}`}
      >
        <span className="text-xl font-bold">{config.name}</span>
        <ExternalLink className="w-4 h-4 opacity-70" />
      </button>
      
      {/* Username tooltip with copy */}
      <button
        onClick={handleCopy}
        className="
          absolute -bottom-8 left-1/2 -translate-x-1/2
          text-xs text-[var(--color-text-secondary)] 
          flex items-center gap-1
          opacity-0 group-hover:opacity-100 transition-opacity
          hover:text-[var(--color-text-primary)]
        "
        aria-label={`Copy ${config.name} username`}
      >
        {copied ? (
          <>
            <Check className="w-3 h-3 text-[var(--color-ladder-green)]" />
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

// Suggested amounts
function SuggestedAmounts({ amounts, selectedAmount, onSelect }) {
  if (!amounts || amounts.length === 0) return null

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
      {amounts.map((amount) => (
        <button
          key={amount}
          onClick={() => onSelect(amount)}
          className={`
            py-3 px-4 rounded-lg font-semibold text-lg
            transition-all duration-200
            ${selectedAmount === amount 
              ? 'bg-[var(--color-ladder-blue)] text-white shadow-md' 
              : 'bg-[var(--color-surface)] border-2 border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-ladder-blue)]'
            }
          `}
        >
          ${amount}
        </button>
      ))}
    </div>
  )
}

// Impact statement
function ImpactStatement({ amount, statements }) {
  if (!amount || !statements) return null
  
  const statement = statements.find(s => s.amount === amount)
  if (!statement) return null

  return (
    <p className="text-center text-[var(--color-text-secondary)] mb-6 text-sm sm:text-base">
      <span className="font-semibold text-[var(--color-ladder-green)]">${amount}</span>
      {' '}{statement.impact}
    </p>
  )
}

// Main donation buttons component
export default function DonationButtons({
  paypalUsername,
  venmoUsername,
  cashAppTag,
  suggestedAmounts = [25, 50, 100, 250],
  impactStatements,
  showSuggestedAmounts = true,
  showImpact = true,
  size = 'default',
  layout = 'stack', // 'stack' or 'row'
  className = '',
}) {
  const [selectedAmount, setSelectedAmount] = useState(suggestedAmounts[1] || 50)

  const hasPaymentMethods = paypalUsername || venmoUsername || cashAppTag

  if (!hasPaymentMethods) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <Heart className="w-12 h-12 text-[var(--color-ladder-red)] mx-auto mb-4" />
        <p className="text-[var(--color-text-secondary)]">
          Donation methods coming soon. Contact us directly to give.
        </p>
      </div>
    )
  }

  return (
    <div className={className}>
      {/* Suggested Amounts */}
      {showSuggestedAmounts && (
        <SuggestedAmounts
          amounts={suggestedAmounts}
          selectedAmount={selectedAmount}
          onSelect={setSelectedAmount}
        />
      )}

      {/* Impact Statement */}
      {showImpact && (
        <ImpactStatement
          amount={selectedAmount}
          statements={impactStatements}
        />
      )}

      {/* Payment Buttons */}
      <div className={`
        ${layout === 'row' ? 'flex flex-col sm:flex-row gap-4' : 'space-y-4'}
      `}>
        {paypalUsername && (
          <DonationButton
            platform="paypal"
            username={paypalUsername}
            amount={selectedAmount}
            size={size}
          />
        )}
        {venmoUsername && (
          <DonationButton
            platform="venmo"
            username={venmoUsername}
            amount={selectedAmount}
            note={`Donation to The Ladder - $${selectedAmount}`}
            size={size}
          />
        )}
        {cashAppTag && (
          <DonationButton
            platform="cashapp"
            username={cashAppTag}
            amount={selectedAmount}
            size={size}
          />
        )}
      </div>

      {/* Trust Badge */}
      <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
        <div className="trust-badge mx-auto w-fit">
          <Heart className="w-4 h-4" />
          <span>501(c)(3) Tax-Deductible • EIN: 47-2123160</span>
        </div>
      </div>
    </div>
  )
}
