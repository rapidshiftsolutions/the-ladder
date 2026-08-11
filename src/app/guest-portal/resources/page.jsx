'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function GuestPortalResources() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [loggingOut, setLoggingOut] = useState(false)
  const [resources, setResources] = useState([])

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
          setResources(content.portalResources || [])
        }
      } catch {
        setResources([])
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
        <p className="text-[var(--color-text-secondary)]">Loading resources...</p>
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
                href="/guest-portal/dashboard"
                className="text-[var(--color-primary)] font-bold text-xl"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                The Ladder
              </Link>
              <span className="text-gray-300">|</span>
              <span className="text-[var(--color-text-secondary)] font-medium">Resources</span>
            </div>
            <button
              onClick={handleLogout}
              disabled={loggingOut}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] disabled:opacity-50"
            >
              {loggingOut ? 'Logging out...' : 'Log Out'}
            </button>
          </div>
        </div>
      </header>

      <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1
              className="text-3xl font-bold text-[var(--color-text-primary)] mb-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Resources
            </h1>
            <p className="text-[var(--color-text-secondary)]">
              Materials shared by The Ladder team to support your journey.
            </p>
          </div>
          <Link
            href="/guest-portal/apply"
            className="btn btn-primary inline-flex self-start"
          >
            Apply for sponsorship
          </Link>
        </div>

        {resources.length ? (
          <div className="grid sm:grid-cols-2 gap-4">
            {resources.map((resource, index) => {
              const href = resource.fileUrl || resource.externalLink
              const content = (
                <>
                  <h2 className="font-semibold text-[var(--color-text-primary)] mb-1">
                    {resource.title}
                  </h2>
                  {resource.description && (
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {resource.description}
                    </p>
                  )}
                  {href && (
                    <p className="text-sm text-[var(--color-primary)] mt-3 font-medium">
                      Open resource →
                    </p>
                  )}
                </>
              )

              if (href) {
                return (
                  <a
                    key={`${resource.title}-${index}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[var(--color-primary)] transition-colors"
                  >
                    {content}
                  </a>
                )
              }

              return (
                <div
                  key={`${resource.title}-${index}`}
                  className="bg-white p-6 rounded-xl border border-gray-200"
                >
                  {content}
                </div>
              )
            })}
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
            <p className="text-[var(--color-text-secondary)] mb-4">
              No resources have been published yet. You can still submit your sponsorship
              application.
            </p>
            <Link href="/guest-portal/apply" className="btn btn-primary">
              Go to application
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}
