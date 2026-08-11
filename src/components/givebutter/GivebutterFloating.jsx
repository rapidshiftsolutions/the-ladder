'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'
import { usePathname } from 'next/navigation'

/**
 * Sitewide floating donate control — single branded CTA (avoids duplicate
 * Givebutter button + custom button stacks).
 */
export default function GivebutterFloating() {
  const pathname = usePathname() || ''
  const hidden =
    pathname.startsWith('/guest-portal') ||
    pathname.startsWith('/studio') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/donate') ||
    pathname.startsWith('/monthly-giving')

  if (hidden) return null

  return (
    <div className="givebutter-floating-host fixed bottom-5 right-5 z-[90]">
      <Link
        href="/donate#donate-form"
        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[var(--color-accent-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        aria-label="Donate now"
      >
        <Heart className="h-4 w-4" aria-hidden="true" />
        Donate
      </Link>
    </div>
  )
}
