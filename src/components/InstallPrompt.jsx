'use client'

import { useState, useEffect } from 'react'
import { X, Download } from 'lucide-react'

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault()
      
      // Stash the event so it can be triggered later
      setDeferredPrompt(e)
      
      // Show our custom install prompt after a delay
      setTimeout(() => {
        setShowInstallPrompt(true)
      }, 3000) // Show after 3 seconds
    }

    const handleAppInstalled = () => {
      console.log('PWA was installed')
      setShowInstallPrompt(false)
      setDeferredPrompt(null)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    // Show the install prompt
    deferredPrompt.prompt()

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice
    
    console.log(`User response to the install prompt: ${outcome}`)
    
    // We no longer need the prompt. Clear it up.
    setDeferredPrompt(null)
    setShowInstallPrompt(false)
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
    
    // Don't show again for this session
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem('installPromptDismissed', 'true')
    }
  }

  // Check if running on client and if user has already dismissed this session
  if (typeof window !== 'undefined' && window.sessionStorage && sessionStorage.getItem('installPromptDismissed')) {
    return null
  }

  if (!showInstallPrompt || !deferredPrompt) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-sm">
      <div className="bg-black/95 backdrop-blur-sm border border-primary-500/30 rounded-lg p-4 shadow-2xl">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Download className="w-4 h-4 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-inter font-bold text-sm mb-1">
              Install OEM Radio Repair
            </h3>
            <p className="text-gray-300 text-xs font-inter leading-relaxed mb-3">
              Add our app to your home screen for quick access to services, parts, and appointment booking!
            </p>
            
            <div className="flex gap-2">
              <button
                onClick={handleInstallClick}
                className="px-3 py-1.5 bg-primary-600 text-white text-xs font-inter font-bold rounded hover:bg-primary-700 transition-colors"
              >
                Install
              </button>
              <button
                onClick={handleDismiss}
                className="px-3 py-1.5 text-gray-400 text-xs font-inter rounded hover:text-white transition-colors"
              >
                Maybe Later
              </button>
            </div>
          </div>
          
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
