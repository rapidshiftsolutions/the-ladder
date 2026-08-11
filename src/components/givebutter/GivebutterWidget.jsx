'use client'

/**
 * Renders a Givebutter donation experience.
 * Prefers the official iframe embed (reliable across CSP/SW), with an optional
 * custom-element fallback when only a dashboard widget ID is available.
 */
export default function GivebutterWidget({
  widgetId,
  embedUrl,
  campaignCode,
  className = '',
  minHeight = '720px',
  title = 'Donate to The Ladder',
  maxWidth = '560px',
}) {
  const src =
    embedUrl ||
    (campaignCode
      ? `https://givebutter.com/embed/c/${encodeURIComponent(campaignCode)}`
      : null)

  if (!src && !widgetId) {
    return (
      <div
        className={`rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-[var(--color-text-secondary)] ${className}`}
        role="status"
      >
        Donation form is being configured. Please check back shortly.
      </div>
    )
  }

  if (src) {
    return (
      <div
        className={`givebutter-widget-host w-full max-w-full ${className}`}
        data-givebutter-widget={widgetId || campaignCode || 'embed'}
        data-givebutter-embed={src}
      >
        <iframe
          src={src}
          title={title}
          className="givebutter-embed-iframe"
          style={{
            width: '100%',
            maxWidth,
            minHeight,
            height: minHeight,
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
      </div>
    )
  }

  // Dashboard widget ID fallback (custom element)
  return (
    <GivebutterCustomElement
      widgetId={widgetId}
      className={className}
      minHeight={minHeight}
    />
  )
}

function GivebutterCustomElement({ widgetId, className, minHeight }) {
  return (
    <div
      className={`givebutter-widget-host w-full max-w-full overflow-hidden ${className}`}
      style={{ minHeight }}
      data-givebutter-widget={widgetId}
      ref={(node) => {
        if (!node || !widgetId) return
        if (node.querySelector('givebutter-widget')) return
        const el = document.createElement('givebutter-widget')
        el.setAttribute('id', widgetId)
        node.appendChild(el)
      }}
    />
  )
}
