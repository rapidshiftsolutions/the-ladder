'use client'

import { useEffect, useState } from 'react'

export default function ServiceWorkerRegistration() {
  const [updateAvailable, setUpdateAvailable] = useState(false)
  const [registration, setRegistration] = useState(null)

  useEffect(() => {
    // Only run in production and in browsers that support service workers
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      process.env.NODE_ENV === 'production'
    ) {
      // Register service worker
      navigator.serviceWorker
        .register('/sw.js', {
          scope: '/',
          // Check for updates more frequently
          updateViaCache: 'none'
        })
        .then((reg) => {
          console.log('[ServiceWorkerRegistration] Service Worker registered:', reg.scope)
          setRegistration(reg)
          
          // Check for updates immediately and periodically
          reg.update()
          
          // Check for updates every 30 seconds in production
          setInterval(() => {
            reg.update()
          }, 30000)
          
          // Handle update found
          reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing
            console.log('[ServiceWorkerRegistration] New service worker found')
            
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New version available
                  console.log('[ServiceWorkerRegistration] New version installed and ready')
                  setUpdateAvailable(true)
                  
                  // Auto-reload after 2 seconds to show new content
                  setTimeout(() => {
                    console.log('[ServiceWorkerRegistration] Auto-reloading to show new content')
                    window.location.reload()
                  }, 2000)
                }
              })
            }
          })
        })
        .catch((error) => {
          console.error('[ServiceWorkerRegistration] Service Worker registration failed:', error)
        })
        
      // Handle service worker messages
      navigator.serviceWorker.addEventListener('message', (event) => {
        console.log('[ServiceWorkerRegistration] Message from service worker:', event.data)
        
        if (event.data && event.data.type === 'NEW_VERSION_AVAILABLE') {
          console.log('[ServiceWorkerRegistration] New version message received:', event.data.version)
          setUpdateAvailable(true)
          
          // Auto-reload to get new content
          setTimeout(() => {
            window.location.reload()
          }, 1000)
        }
        
        if (event.data && event.data.type === 'CACHE_UPDATED') {
          console.log('[ServiceWorkerRegistration] Cache updated:', event.data.payload)
        }
      })
      
      // Handle controller change (new service worker took over)
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('[ServiceWorkerRegistration] Controller changed, reloading page')
        window.location.reload()
      })
      
      // Listen for app installation
      let deferredPrompt
      
      window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault()
        
        // Stash the event so it can be triggered later
        deferredPrompt = e
        
        console.log('[ServiceWorkerRegistration] App can be installed')
      })
      
      window.addEventListener('appinstalled', (e) => {
        console.log('[ServiceWorkerRegistration] App was installed')
        deferredPrompt = null
      })
    }
  }, [])

  // Function to manually update service worker
  const updateServiceWorker = () => {
    if (registration && registration.waiting) {
      // Tell waiting service worker to skip waiting
      registration.waiting.postMessage({ type: 'SKIP_WAITING' })
    }
  }

  // Show update notification if available (optional UI)
  if (updateAvailable && false) { // Disabled since we auto-reload
    return (
      <div className="fixed bottom-4 right-4 bg-primary-500 text-black p-4 rounded-lg shadow-lg z-50">
        <p className="font-bold mb-2">Update Available!</p>
        <p className="text-sm mb-3">New content is available.</p>
        <button
          onClick={updateServiceWorker}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Refresh Now
        </button>
      </div>
    )
  }

  return null // This component doesn't render anything normally
}