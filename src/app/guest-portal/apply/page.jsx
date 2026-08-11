'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import ApplyForm from './ApplyForm'

export default function GuestPortalApplyPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/guest-portal/auth')
        const data = await response.json()
        if (!data.authenticated) {
          router.push('/guest-portal')
          return
        }
        setAuthenticated(true)
      } catch {
        router.push('/guest-portal')
      } finally {
        setLoading(false)
      }
    }
    checkAuth()
  }, [router])

  const handleLogout = async () => {
    await fetch('/api/guest-portal/auth', { method: 'DELETE' })
    router.push('/guest-portal')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-[var(--color-text-secondary)]">Loading application...</p>
      </div>
    )
  }

  if (!authenticated) return null

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/guest-portal/dashboard"
              className="font-bold text-[var(--color-primary)]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              The Ladder
            </Link>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-[var(--color-text-secondary)]">Sponsorship Application</span>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
          >
            Log out
          </button>
        </div>
      </header>

      <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-8">
          <h1
            className="text-3xl font-bold text-[var(--color-text-primary)] mb-3"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Apply for sponsorship
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            Tell us about the specific barrier you need help climbing over. Your partner
            nonprofit referred you here — we use this form to understand how The Ladder
            can step in.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <ApplyForm />
        </div>
      </main>
    </div>
  )
}
