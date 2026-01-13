'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function GuestPortalDashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [portalData, setPortalData] = useState(null)
  const [loggingOut, setLoggingOut] = useState(false)

  // Check authentication on mount
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
      // Fetch portal content here if needed
      // For now, using placeholder data
      setPortalData({
        welcomeMessage: 'Welcome to The Ladder Guest Portal. We\'re glad you\'re here on your journey toward success.',
        announcements: [
          {
            title: 'Office Hours Update',
            content: 'Our office will have special hours this Friday from 9am-3pm.',
            date: '2024-01-10',
            important: true,
          },
          {
            title: 'New Resources Available',
            content: 'Check out our updated job search resources in the Resources section.',
            date: '2024-01-08',
            important: false,
          },
        ],
        contact: {
          name: 'Your Case Manager',
          email: 'help@the-ladder.org',
          phone: '(205) 555-0123',
          hours: 'Monday-Friday, 9am-5pm',
        },
      })
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
          <p className="text-gray-600">Loading portal...</p>
        </div>
      </div>
    )
  }

  if (!authenticated) {
    return null // Will redirect
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
              {loggingOut ? (
                'Logging out...'
              ) : (
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
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-ladder-blue to-ladder-blue-light rounded-2xl p-6 sm:p-8 text-white mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 font-heading">Welcome Back!</h1>
          <p className="text-white/90">{portalData?.welcomeMessage}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-4 font-heading">Quick Links</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link 
                href="/guest-portal/resources" 
                className="bg-white p-6 rounded-xl shadow-sm border hover:border-ladder-blue hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-ladder-green/10 rounded-xl flex items-center justify-center group-hover:bg-ladder-green/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ladder-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Resources</h3>
                    <p className="text-sm text-gray-500">Forms, guides, and links</p>
                  </div>
                </div>
              </Link>

              <Link 
                href="/contact" 
                className="bg-white p-6 rounded-xl shadow-sm border hover:border-ladder-blue hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-ladder-gold/10 rounded-xl flex items-center justify-center group-hover:bg-ladder-gold/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ladder-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Contact Us</h3>
                    <p className="text-sm text-gray-500">Reach your case manager</p>
                  </div>
                </div>
              </Link>

              <Link 
                href="/success-stories" 
                className="bg-white p-6 rounded-xl shadow-sm border hover:border-ladder-blue hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-ladder-red/10 rounded-xl flex items-center justify-center group-hover:bg-ladder-red/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ladder-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Success Stories</h3>
                    <p className="text-sm text-gray-500">Inspiring journeys</p>
                  </div>
                </div>
              </Link>

              <Link 
                href="/partners" 
                className="bg-white p-6 rounded-xl shadow-sm border hover:border-ladder-blue hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-ladder-blue/10 rounded-xl flex items-center justify-center group-hover:bg-ladder-blue/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ladder-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Partner Resources</h3>
                    <p className="text-sm text-gray-500">Community organizations</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Announcements */}
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 font-heading">Announcements</h2>
            <div className="space-y-4">
              {portalData?.announcements?.map((announcement, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-xl shadow-sm border ${
                    announcement.important ? 'border-l-4 border-l-ladder-red' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                        {announcement.important && (
                          <span className="text-ladder-red">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </span>
                        )}
                        {announcement.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{announcement.content}</p>
                    </div>
                    <span className="text-sm text-gray-400">{announcement.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4 font-heading">Need Help?</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-ladder-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ladder-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">{portalData?.contact?.name}</h3>
              </div>
              <div className="space-y-3">
                <a
                  href={`mailto:${portalData?.contact?.email}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-ladder-blue transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {portalData?.contact?.email}
                </a>
                <a
                  href={`tel:${portalData?.contact?.phone?.replace(/\D/g, '')}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-ladder-blue transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {portalData?.contact?.phone}
                </a>
                <div className="flex items-center gap-3 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {portalData?.contact?.hours}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
