'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function ServiceWorkerRegistration() {
  const pathname = usePathname() || ''
  const [updateAvailable, setUpdateAvailable] = useState(false)
  const [registration, setRegistration] = useState(null)
  const refreshingRef = useRef(false)
  const suppressBanner =
    pathname.startsWith('/donate') || pathname.startsWith('/monthly-giving')

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      !('serviceWorker' in navigator) ||
      process.env.NODE_ENV !== 'production'
    ) {
      return undefined
    }

    let cancelled = false

    navigator.serviceWorker
      .register('/sw.js', {
        scope: '/',
        updateViaCache: 'none',
      })
      .then((reg) => {
        if (cancelled) return
        console.log('[ServiceWorkerRegistration] Service Worker registered:', reg.scope)
        setRegistration(reg)
        reg.update().catch(() => {})
      })
      .catch((error) => {
        console.error('[ServiceWorkerRegistration] Service Worker registration failed:', error)
      })

    const onMessage = (event) => {
      if (event.data && event.data.type === 'NEW_VERSION_AVAILABLE') {
        setUpdateAvailable(true)
      }
    }

    // Avoid reload loops: only reload once when a waiting worker takes control
    // after the user explicitly accepts an update (or we soft-prompt).
    const onControllerChange = () => {
      if (refreshingRef.current) return
      // Soft update only — do not force-reload during donation checkout
      setUpdateAvailable(true)
    }

    navigator.serviceWorker.addEventListener('message', onMessage)
    navigator.serviceWorker.addEventListener('controllerchange', onControllerChange)

    return () => {
      cancelled = true
      navigator.serviceWorker.removeEventListener('message', onMessage)
      navigator.serviceWorker.removeEventListener('controllerchange', onControllerChange)
    }
  }, [])

  const updateServiceWorker = () => {
    if (registration?.waiting) {
      refreshingRef.current = true
      registration.waiting.postMessage({ type: 'SKIP_WAITING' })
      window.location.reload()
    } else {
      window.location.reload()
    }
  }

  if (!updateAvailable || suppressBanner) return null

  return (
    <div className="fixed bottom-4 left-4 z-[100] max-w-sm rounded-lg bg-[var(--color-primary)] p-4 text-white shadow-lg">
      <p className="mb-2 font-semibold">Update available</p>
      <p className="mb-3 text-sm text-white/90">
        A newer version of the site is ready. Refresh when you are not in the middle of donating.
      </p>
      <button
        type="button"
        onClick={updateServiceWorker}
        className="rounded bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)] hover:bg-white/90"
      >
        Refresh now
      </button>
    </div>
  )
}
