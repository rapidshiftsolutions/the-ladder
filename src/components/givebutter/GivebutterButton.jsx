'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

/**
 * Givebutter button widget (opens the donation modal) with a branded
 * fallback link that shows until the widget initializes — and stays if
 * the widget script is blocked or fails.
 */
export default function GivebutterButton({
  widgetId = 'prW2aY',
  fallbackHref = '/donate',
  fallbackLabel = 'Donate Now',
  className = '',
  fallbackClassName = 'btn btn-accent flex items-center gap-2 text-sm',
}) {
  const hostRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const host = hostRef.current
    if (!widgetId || !host) return undefined

    host.innerHTML = ''
    const el = document.createElement('givebutter-widget')
    el.setAttribute('id', widgetId)
    host.appendChild(el)

    let attempts = 0
    const timer = setInterval(() => {
      attempts += 1
      const rect = el.getBoundingClientRect()
      const hasContent = (el.shadowRoot?.childElementCount || 0) > 0
      if (hasContent && rect.height > 20) {
        setReady(true)
        clearInterval(timer)
      } else if (attempts > 32) {
        clearInterval(timer)
      }
    }, 250)

    return () => clearInterval(timer)
  }, [widgetId])

  return (
    <span className={`gb-button-slot ${className}`}>
      <span
        ref={hostRef}
        className="gb-button-host"
        data-givebutter-button={widgetId || undefined}
      />
      {!ready && (
        <Link href={fallbackHref} className={fallbackClassName}>
          <Heart className="w-4 h-4" aria-hidden="true" />
          {fallbackLabel}
        </Link>
      )}
    </span>
  )
}
