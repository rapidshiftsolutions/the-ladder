'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function GuestPortalResources() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [loggingOut, setLoggingOut] = useState(false)

  // Placeholder resources - in production, fetch from Sanity
  const resources = [
    {
      category: 'Forms',
      items: [
        { title: 'Intake Application', description: 'Complete this form for new assistance requests', type: 'pdf' },
        { title: 'Progress Update Form', description: 'Track your journey milestones', type: 'pdf' },
      ],
    },
    {
      category: 'Guides',
      items: [
        { title: 'Job Search Guide', description: 'Tips and strategies for finding employment', type: 'pdf' },
        { title: 'Housing Resources Guide', description: 'Local housing assistance programs', type: 'pdf' },
        { title: 'Financial Planning Basics', description: 'Budgeting and saving strategies', type: 'link' },
      ],
    },
    {
      category: 'Contacts',
      items: [
        { title: 'Emergency Services', description: 'Important emergency contact numbers', type: 'link' },
        { title: 'Partner Organizations', description: 'Organizations that can help', type: 'link', href: '/partners' },
      ],
    },
  ]

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
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ladder-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Loading resources...</p>
        </div>
      </div>
    )
  }

  if (!authenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-ladder-blue font-bold text-xl font-heading">
                The Ladder
              </Link>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600 font-medium">Guest Portal</span>
            </div>
            <button
              onClick={handleLogout}
              disabled={loggingOut}
              className="text-gray-600 hover:text-ladder-red transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              {loggingOut ? 'Logging out...' : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                  </svg>
                  Log Out
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/guest-portal/dashboard" className="text-ladder-blue hover:underline">
                Dashboard
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600">Resources</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 font-heading">Resources</h1>
          <p className="text-gray-600 mt-2">
            Forms, guides, and helpful information to support your journey
          </p>
        </div>

        {/* Resources Grid */}
        <div className="space-y-8">
          {resources.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                {category.category}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        item.type === 'pdf' ? 'bg-red-100' : 'bg-blue-100'
                      }`}>
                        {item.type === 'pdf' ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                        {item.href ? (
                          <Link
                            href={item.href}
                            className="inline-flex items-center gap-1 text-sm text-ladder-blue hover:underline mt-3"
                          >
                            View
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </Link>
                        ) : (
                          <button className="inline-flex items-center gap-1 text-sm text-ladder-blue hover:underline mt-3">
                            {item.type === 'pdf' ? 'Download' : 'Open'}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-ladder-blue/5 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 bg-ladder-blue/10 rounded-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ladder-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-center sm:text-left flex-1">
              <h3 className="font-semibold text-gray-900">Need something else?</h3>
              <p className="text-gray-600 text-sm">
                If you can't find what you're looking for, contact your case manager for assistance.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-ladder-blue text-white px-6 py-2 rounded-lg font-medium hover:bg-ladder-blue-light transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
