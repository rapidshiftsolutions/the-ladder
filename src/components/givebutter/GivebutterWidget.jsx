'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Full Givebutter donation form.
 * Mounts the native giving-form widget first (best UX: auto-height, inline
 * flow) and automatically falls back to the official iframe embed if the
 * widget fails to initialize (blocked script, ad blocker, etc.).
 */
export default function GivebutterWidget({
  widgetId,
  embedUrl,
  campaignCode,
  className = '',
  minHeight = '600px',
  title = 'Donate to The Ladder',
  maxWidth = '640px',
}) {
  const src =
    embedUrl ||
    (campaignCode
      ? `https://givebutter.com/embed/c/${encodeURIComponent(campaignCode)}`
      : null)

  const [mode, setMode] = useState(widgetId ? 'widget' : src ? 'iframe' : 'empty')
  const hostRef = useRef(null)

  useEffect(() => {
    if (mode !== 'widget') return undefined
    const host = hostRef.current
    if (!host) return undefined

    host.innerHTML = ''
    const el = document.createElement('givebutter-widget')
    el.setAttribute('id', widgetId)
    host.appendChild(el)

    let attempts = 0
    const timer = setInterval(() => {
      attempts += 1
      const rect = el.getBoundingClientRect()
      const hasContent = (el.shadowRoot?.childElementCount || 0) > 0
      if (hasContent && rect.height > 100) {
        clearInterval(timer)
      } else if (attempts > 32) {
        clearInterval(timer)
        if (src) setMode('iframe')
      }
    }, 250)

    return () => clearInterval(timer)
  }, [mode, widgetId, src])

  if (mode === 'empty') {
    return (
      <div
        className={`rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-[var(--color-text-secondary)] ${className}`}
        role="status"
      >
        Donation form is being configured. Please check back shortly.
      </div>
    )
  }

  return (
    <div
      className={`givebutter-widget-host w-full max-w-full ${className}`}
      data-givebutter-widget={widgetId || campaignCode || 'embed'}
      data-givebutter-mode={mode}
    >
      {mode === 'widget' ? (
        <div ref={hostRef} style={{ minHeight }} className="mx-auto w-full" />
      ) : (
        <iframe
          src={src}
          title={title}
          className="givebutter-embed-iframe"
          style={{
            width: '100%',
            maxWidth,
            minHeight: '720px',
            height: '720px',
            border: 0,
            borderRadius: '12px',
            display: 'block',
            margin: '0 auto',
            background: 'transparent',
          }}
          loading="lazy"
          allow="payment *"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}
      {src && (
        <p className="mt-3 text-center text-xs text-[var(--color-text-muted)]">
          Having trouble with the form?{' '}
          <a
            href={src.includes('/embed/c/') ? src.replace('/embed/c/', '/') : src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)] underline-offset-2 hover:underline"
          >
            Open the secure Givebutter page
          </a>
          .
        </p>
      )}
    </div>
  )
}
