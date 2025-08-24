'use client'

import { useState, useEffect } from 'react'
import { WifiOff, CheckCircle, XCircle, Send, Clock } from 'lucide-react'

export default function EnhancedContactForm() {
  const [status, setStatus] = useState(null)
  const [error, setError] = useState(null)
  const [isOnline, setIsOnline] = useState(true)
  const [pendingSubmissions, setPendingSubmissions] = useState(0)
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)

  // Check online/offline status
  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine)
    }

    const checkPendingSubmissions = async () => {
      if ('indexedDB' in window) {
        try {
          const db = await openDB()
          const tx = db.transaction(['pendingForms'], 'readonly')
          const store = tx.objectStore('pendingForms')
          const count = await store.count()
          setPendingSubmissions(count)
        } catch (error) {
          console.log('Error checking pending submissions:', error)
        }
      }
    }

    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)
    
    updateOnlineStatus()
    checkPendingSubmissions()

    return () => {
      window.removeEventListener('online', updateOnlineStatus)
      window.removeEventListener('offline', updateOnlineStatus)
    }
  }, [])

  // Load reCAPTCHA
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) return

    const loadRecaptcha = () => {
      const script = document.createElement('script')
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`
      script.onload = () => setRecaptchaLoaded(true)
      script.onerror = () => console.log('Failed to load reCAPTCHA')
      document.body.appendChild(script)
    }

    loadRecaptcha()

    return () => {
      const scripts = document.querySelectorAll(`script[src*="recaptcha/api.js"]`)
      scripts.forEach(script => script.remove())
    }
  }, [])

  // IndexedDB helper
  const openDB = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('EMRDatabase', 1)
      
      request.onerror = () => reject(request.error)
      request.onsuccess = () => resolve(request.result)
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result
        if (!db.objectStoreNames.contains('pendingForms')) {
          db.createObjectStore('pendingForms', { keyPath: 'id', autoIncrement: true })
        }
      }
    })
  }

  const saveFormOffline = async (formData) => {
    try {
      const db = await openDB()
      const tx = db.transaction(['pendingForms'], 'readwrite')
      const store = tx.objectStore('pendingForms')
      
      await store.add({
        data: Object.fromEntries(formData),
        timestamp: Date.now(),
        status: 'pending'
      })
      
      setPendingSubmissions(prev => prev + 1)
      
      // Register for background sync if available
      if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
        const registration = await navigator.serviceWorker.ready
        await registration.sync.register('contact-form')
      }
      
      return true
    } catch (error) {
      console.log('Error saving form offline:', error)
      return false
    }
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    setStatus('pending')
    setError(null)

    const form = event.target
    const formData = new FormData(form)

    try {
      // If offline, save for later
      if (!isOnline) {
        const saved = await saveFormOffline(formData)
        if (saved) {
          setStatus('offline')
          form.reset()
        } else {
          throw new Error('Unable to save form data for offline submission')
        }
        return
      }

      // Get reCAPTCHA token if available
      if (recaptchaLoaded && window.grecaptcha) {
        try {
          const token = await window.grecaptcha.execute(
            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
            { action: 'submit_contact_form' }
          )
          formData.append('g-recaptcha-token', token)
        } catch (error) {
          console.log('reCAPTCHA error:', error)
          // Continue without reCAPTCHA if it fails
        }
      }

      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })

      if (res.ok) {
        setStatus('ok')
        form.reset()
      } else {
        const errorData = await res.json().catch(() => null)
        const errorMessage = errorData?.message || `Error: ${res.status} ${res.statusText}`
        throw new Error(errorMessage)
      }
    } catch (e) {
      // If network error and we can save offline, do that
      if (!isOnline || e.message.includes('Failed to fetch')) {
        const saved = await saveFormOffline(formData)
        if (saved) {
          setStatus('offline')
          form.reset()
        } else {
          setStatus('error')
          setError('Unable to submit form. Please try again later.')
        }
      } else {
        setStatus('error')
        setError(e.message)
      }
    }
  }

  return (
    <div className="space-y-4">
      {/* Connection Status */}
      {!isOnline && (
        <div className="bg-yellow-900/50 border border-yellow-600/50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-yellow-200">
            <WifiOff className="w-4 h-4" />
            <span className="text-sm font-inter">
              You're offline. Forms will be saved and submitted when connection is restored.
            </span>
          </div>
        </div>
      )}

      {/* Pending Submissions */}
      {pendingSubmissions > 0 && (
        <div className="bg-blue-900/50 border border-blue-600/50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-blue-200">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-inter">
              {pendingSubmissions} form{pendingSubmissions > 1 ? 's' : ''} waiting to be submitted
            </span>
          </div>
        </div>
      )}

      {/* Status Messages */}
      {status === 'ok' && (
        <div className="bg-green-900/50 border border-green-600/50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-green-200">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-inter">Message sent successfully!</span>
          </div>
        </div>
      )}

      {status === 'offline' && (
        <div className="bg-blue-900/50 border border-blue-600/50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-blue-200">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-inter">
              Form saved! It will be submitted automatically when you're back online.
            </span>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-900/50 border border-red-600/50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-red-200">
            <XCircle className="w-4 h-4" />
            <span className="text-sm font-inter">{error || 'An error occurred. Please try again.'}</span>
          </div>
        </div>
      )}

      {/* Contact Form */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
        netlify-honeypot="bot-field"
        onSubmit={handleFormSubmit}
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="hidden">
          <label>Don't fill this out: <input name="bot-field" /></label>
        </div>

        {/* Name Field */}
        <div>
          <label className="block text-sm font-bold text-white mb-2 font-inter tracking-wide">
            Name <span className="text-red-400">*</span>
          </label>
          <input 
            type="text" 
            name="name" 
            required 
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-all duration-300 backdrop-blur-sm" 
            placeholder="Your full name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-bold text-white mb-2 font-inter tracking-wide">
            Email <span className="text-red-400">*</span>
          </label>
          <input 
            type="email" 
            name="email" 
            required 
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-all duration-300 backdrop-blur-sm" 
            placeholder="your.email@example.com"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label className="block text-sm font-bold text-white mb-2 font-inter tracking-wide">
            Phone
          </label>
          <input 
            type="tel" 
            name="phone" 
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-all duration-300 backdrop-blur-sm" 
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Subject Field */}
        <div>
          <label className="block text-sm font-bold text-white mb-2 font-inter tracking-wide">
            Subject <span className="text-red-400">*</span>
          </label>
          <select 
            name="subject" 
            required 
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-all duration-300 backdrop-blur-sm"
          >
            <option value="">Select a topic</option>
            <option value="racing-schedule">Racing Schedule</option>
            <option value="pit-rental">Pit Rental</option>
            <option value="track-rental">Track Rental</option>
            <option value="sponsorship">Sponsorship Opportunities</option>
            <option value="general">General Information</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-sm font-bold text-white mb-2 font-inter tracking-wide">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea 
            name="message" 
            required 
            rows="5"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-all duration-300 backdrop-blur-sm resize-vertical" 
            placeholder="Tell us about your question or how we can help..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'pending'}
          className="w-full px-6 py-3 bg-primary-600 text-white font-inter font-bold rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
        >
          {status === 'pending' ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              {isOnline ? 'Sending...' : 'Saving...'}
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              {isOnline ? 'Send Message' : 'Save for Later'}
            </>
          )}
        </button>

        {/* Offline Notice */}
        {!isOnline && (
          <p className="text-xs text-gray-400 font-inter text-center">
            Your message will be saved and sent automatically when you're back online.
          </p>
        )}
      </form>
    </div>
  )
}
