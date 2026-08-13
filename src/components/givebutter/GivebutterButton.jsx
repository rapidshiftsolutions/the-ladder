'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

/**
 * Survive client navigations so the branded fallback does not remount on top
 * of the Givebutter button after the widget has already initialized once.
 */
let cachedReadyWidgetId = ''

function widgetLooksReady(el) {
  if (!el) return false
  const rect = el.getBoundingClientRect()
  if (rect.height <= 20 || rect.width <= 20) return false
  const shadowCount = el.shadowRoot?.childElementCount || 0
  // Open shadow roots expose children; closed ones still paint a box.
  return shadowCount > 0 || rect.width > 40
}

/**
 * Givebutter button widget (opens the donation modal) with a branded
 * fallback link. Fallback and widget share one grid cell so they never
 * stack ("Donate Now" above Givebutter) while the script initializes.
 */
export default function GivebutterButton({
  widgetId = 'prW2aY',
  fallbackHref = '/donate',
  fallbackLabel = 'Donate Now',
  className = '',
  fallbackClassName = 'btn btn-accent flex items-center gap-2 text-sm',
}) {
  const hostRef = useRef(null)
  const [ready, setReady] = useState(() => cachedReadyWidgetId === widgetId)

  useEffect(() => {
    const host = hostRef.current
    if (!widgetId || !host) return undefined

    host.innerHTML = ''
    const el = document.createElement('givebutter-widget')
    el.setAttribute('id', widgetId)
    host.appendChild(el)

    let settled = false
    const markReady = () => {
      if (settled) return
      settled = true
      cachedReadyWidgetId = widgetId
      setReady(true)
    }

    if (widgetLooksReady(el)) {
      markReady()
      return undefined
    }

    let attempts = 0
    let timer = null

    const observer = new MutationObserver(() => {
      if (widgetLooksReady(el)) {
        markReady()
        if (timer) clearInterval(timer)
        observer.disconnect()
      }
    })
    observer.observe(host, { childList: true, subtree: true, attributes: true })

    timer = setInterval(() => {
      attempts += 1
      if (widgetLooksReady(el)) {
        markReady()
        clearInterval(timer)
        observer.disconnect()
      } else if (attempts > 32) {
        clearInterval(timer)
        observer.disconnect()
      }
    }, 250)

    return () => {
      clearInterval(timer)
      observer.disconnect()
    }
  }, [widgetId])

  return (
    <span className={`gb-button-slot ${className}`}>
      <span
        ref={hostRef}
        className={`gb-button-host${ready ? ' is-ready' : ''}`}
        data-givebutter-button={widgetId || undefined}
        aria-hidden={!ready}
      />
      {!ready && (
        <Link
          href={fallbackHref}
          className={`gb-button-fallback ${fallbackClassName}`}
        >
          <Heart className="w-4 h-4" aria-hidden="true" />
          {fallbackLabel}
        </Link>
      )}
    </span>
  )
}
