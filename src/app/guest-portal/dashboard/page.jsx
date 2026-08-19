'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const FALLBACK_WELCOME =
  "Welcome to The Ladder Guest Portal. Use the application form to request sponsorship for a specific barrier you're facing."

export default function GuestPortalDashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [portalData, setPortalData] = useState(null)
  const [loggingOut, setLoggingOut] = useState(false)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/guest-portal/auth')
      const data = await response.json()

      if (!data.authenticated) {
        router.push('/guest-portal')
        return
      }

      setAuthenticated(true)

      try {
        const contentRes = await fetch('/api/guest-portal/content')
        if (contentRes.ok) {
          const content = await contentRes.json()
          setPortalData(content)
        } else {
          setPortalData({ welcomeMessage: FALLBACK_WELCOME, announcements: [] })
        }
      } catch {
        setPortalData({ welcomeMessage: FALLBACK_WELCOME, announcements: [] })
      }
    } catch (error) {
      console.error('Auth check failed:', error)
      router.push('/guest-portal')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    setLoggingOut(true)
    try {
      await fetch('/api/guest-portal/auth', { method: 'DELETE' })
      router.push('/guest-portal')
    } catch (error) {
      console.error('Logout failed:', error)
      setLoggingOut(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-[var(--color-text-secondary)]">Loading portal...</p>
      </div>
    )
  }

  if (!authenticated) return null

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-[var(--color-primary)] font-bold text-xl"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                The Ladder
              </Link>
              <span className="text-gray-300">|</span>
              <span className="text-[var(--color-text-secondary)] font-medium">Guest Portal</span>
            </div>
            <button
              onClick={handleLogout}
              disabled={loggingOut}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors disabled:opacity-50"
            >
              {loggingOut ? 'Logging out...' : 'Log Out'}
            </button>
          </div>
        </div>
      </header>

      <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[var(--color-primary)] rounded-2xl p-6 sm:p-8 text-white mb-8">
          <h1
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Welcome
          </h1>
          <p className="text-white/90">
            {portalData?.welcomeMessage || FALLBACK_WELCOME}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <Link
              href="/guest-portal/apply"
              className="block bg-white p-6 rounded-xl border-2 border-[var(--color-accent)] shadow-sm hover:shadow-md transition-all"
            >
              <h2
                className="text-xl font-bold text-[var(--color-text-primary)] mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Apply for sponsorship
              </h2>
              <p className="text-[var(--color-text-secondary)]">
                Share your story and the specific barrier you need help overcoming.
              </p>
            </Link>

            <Link
              href="/guest-portal/resources"
              className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-[var(--color-primary)] transition-all"
            >
              <h2 className="font-semibold text-[var(--color-text-primary)] mb-1">Resources</h2>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Guides and links shared by The Ladder team
              </p>
            </Link>

            <div>
              <h2
                className="text-xl font-bold text-[var(--color-text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Announcements
              </h2>
              {portalData?.announcements?.length ? (
                <div className="space-y-4">
                  {portalData.announcements.map((announcement, index) => (
                    <div
                      key={`${announcement.title}-${index}`}
                      className={`bg-white p-6 rounded-xl border ${
                        announcement.important
                          ? 'border-l-4 border-l-[var(--color-accent)]'
                          : 'border-gray-200'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-[var(--color-text-primary)]">
                            {announcement.title}
                          </h3>
                          <p className="text-[var(--color-text-secondary)] mt-1">
                            {announcement.content}
                          </p>
                        </div>
                        {announcement.date && (
                          <span className="text-sm text-[var(--color-text-muted)] shrink-0">
                            {announcement.date}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[var(--color-text-secondary)] bg-white border border-gray-200 rounded-xl p-6">
                  No announcements right now. Check back soon.
                </p>
              )}
            </div>
          </div>

          <aside>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h2
                className="text-lg font-bold text-[var(--color-text-primary)] mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Need help?
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                Questions about your application? Reach out and we&apos;ll respond as soon as we can.
              </p>
              <a
                href="mailto:info@the-ladder.org"
                className="text-[var(--color-primary)] font-semibold underline-offset-2 hover:underline"
              >
                info@the-ladder.org
              </a>
              <div className="mt-3">
                <a
                  href="tel:+12053061690"
                  className="text-[var(--color-primary)] font-semibold underline-offset-2 hover:underline"
                >
                  (205) 306-1690
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
