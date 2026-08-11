'use client'

import { useEffect, useId, useRef } from 'react'

/**
 * Renders a Givebutter dashboard widget by ID.
 * Script must be loaded sitewide via GivebutterScript.
 */
export default function GivebutterWidget({
  widgetId,
  className = '',
  minHeight = '480px',
}) {
  const reactId = useId()
  const containerRef = useRef(null)
  const hostId = `gb-host-${reactId.replace(/:/g, '')}`

  useEffect(() => {
    if (!widgetId || !containerRef.current) return

    containerRef.current.innerHTML = ''
    const el = document.createElement('givebutter-widget')
    el.setAttribute('id', widgetId)
    containerRef.current.appendChild(el)
  }, [widgetId])

  if (!widgetId) {
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
      id={hostId}
      ref={containerRef}
      className={`givebutter-widget-host w-full max-w-full overflow-hidden ${className}`}
      style={{ minHeight }}
      data-givebutter-widget={widgetId}
    />
  )
}
