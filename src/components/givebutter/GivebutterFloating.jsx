'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

/**
 * Mounts the sitewide floating Givebutter button, hidden on portal/studio routes.
 */
export default function GivebutterFloating({ widgetId }) {
  const pathname = usePathname() || ''
  const containerRef = useRef(null)
  const hidden =
    pathname.startsWith('/guest-portal') ||
    pathname.startsWith('/studio') ||
    pathname.startsWith('/api')

  useEffect(() => {
    if (!widgetId || !containerRef.current) return

    containerRef.current.innerHTML = ''
    if (hidden) return

    const el = document.createElement('givebutter-widget')
    el.setAttribute('id', widgetId)
    containerRef.current.appendChild(el)
  }, [widgetId, hidden])

  if (!widgetId || hidden) {
    return null
  }

  return (
    <div
      ref={containerRef}
      className="givebutter-floating-host"
      aria-hidden="false"
      data-givebutter-floating={widgetId}
    />
  )
}
