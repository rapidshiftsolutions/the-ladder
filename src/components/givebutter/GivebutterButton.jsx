'use client'

import { useEffect, useRef } from 'react'

/**
 * Givebutter button widget (opens the donation modal).
 */
export default function GivebutterButton({
  widgetId = 'prW2aY',
  className = '',
}) {
  const hostRef = useRef(null)

  useEffect(() => {
    const host = hostRef.current
    if (!widgetId || !host) return undefined

    host.innerHTML = ''
    const el = document.createElement('givebutter-widget')
    el.setAttribute('id', widgetId)
    host.appendChild(el)

    return undefined
  }, [widgetId])

  return (
    <span className={`gb-button-slot ${className}`}>
      <span
        ref={hostRef}
        className="gb-button-host is-ready"
        data-givebutter-button={widgetId || undefined}
      />
    </span>
  )
}
