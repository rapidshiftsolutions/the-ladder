'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

/**
 * Sitewide floating donate control.
 * Uses a branded CTA by default (reliable). Optionally mounts a Givebutter
 * button widget when a button-type widget ID is provided.
 */
export default function GivebutterFloating({ widgetId }) {
  const pathname = usePathname() || ''
  const containerRef = useRef(null)
  const hidden =
    pathname.startsWith('/guest-portal') ||
    pathname.startsWith('/studio') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/donate') ||
    pathname.startsWith('/monthly-giving')

  useEffect(() => {
    if (!widgetId || !containerRef.current || hidden) return

    containerRef.current.innerHTML = ''
    const el = document.createElement('givebutter-widget')
    el.setAttribute('id', widgetId)
    containerRef.current.appendChild(el)
  }, [widgetId, hidden])

  if (hidden) return null

  // Branded fallback always available; Givebutter button mounts beside/above if configured
  return (
    <div className="givebutter-floating-host fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-3">
      {widgetId ? (
        <div
          ref={containerRef}
          aria-hidden="false"
          data-givebutter-floating={widgetId}
        />
      ) : null}
      <Link
        href="/donate#donate-form"
        className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[var(--color-accent-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        aria-label="Donate now"
      >
        <Heart className="h-4 w-4" aria-hidden="true" />
        Donate
      </Link>
    </div>
  )
}
