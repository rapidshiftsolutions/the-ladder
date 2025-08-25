'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function OfflinePage() {
  const [isOnline, setIsOnline] = useState(false)
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    const checkOnlineStatus = () => {
      setIsOnline(navigator.onLine)
    }

    // Check initial status
    checkOnlineStatus()

    // Listen for online/offline events
    window.addEventListener('online', checkOnlineStatus)
    window.addEventListener('offline', checkOnlineStatus)

    return () => {
      window.removeEventListener('online', checkOnlineStatus)
      window.removeEventListener('offline', checkOnlineStatus)
    }
  }, [])

  const handleRetry = () => {
    setRetryCount(prev => prev + 1)
    if (navigator.onLine) {
      // Attempt to navigate back to home
      window.location.href = '/'
    }
  }
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <Image
            src="/OEMRadioRepair/logo-light.svg"
            alt="OEM Radio Repair"
            width={200}
            height={100}
            className="mx-auto"
            priority
          />
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className="text-sm text-gray-400">
              {isOnline ? 'Back Online!' : 'Offline'}
            </span>
          </div>

          <h1 className="text-3xl font-anton font-black text-white uppercase">
            {isOnline ? 'Connection Restored!' : 'You\'re Offline'}
          </h1>
          
          <p className="text-gray-300 font-inter leading-relaxed">
            {isOnline 
              ? 'Great! Your internet connection has been restored. You can now access all features.'
              : 'It looks like you\'ve lost your internet connection. Don\'t worry - some parts of the site are still available while offline.'
            }
          </p>
          
          <div className="space-y-4">
            <button
              onClick={handleRetry}
              className={`inline-block w-full px-6 py-3 text-white font-inter font-bold rounded-lg transition-colors ${
                isOnline 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-primary-600 hover:bg-primary-700'
              }`}
            >
              {isOnline ? 'Go Back Online' : `Try Again ${retryCount > 0 ? `(${retryCount})` : ''}`}
            </button>
            
            <p className="text-sm text-gray-400 font-inter">
              {isOnline 
                ? 'Click above to return to the main site.'
                : 'Once you\'re back online, all features will be available again.'
              }
            </p>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="text-gray-400 text-sm font-inter space-y-2">
              <p><strong>Location:</strong> 2413 1st Ave S, Birmingham, AL 37821</p>
              <p><strong>Phone:</strong> (205) 522-1162</p>
              <p><strong>Hours:</strong> Mon-Fri 8AM-6PM, Sat 8AM-4PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
