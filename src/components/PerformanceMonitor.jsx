'use client'

import { useEffect } from 'react'

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production and in browser
    if (process.env.NODE_ENV !== 'production' || typeof window === 'undefined') {
      return
    }

    // Web Vitals monitoring
    const reportWebVitals = (metric) => {
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Performance] ${metric.name}:`, metric.value, metric)
      }

      // Send to analytics service (optional)
      if (typeof gtag !== 'undefined') {
        gtag('event', metric.name, {
          custom_parameter_1: metric.value,
          custom_parameter_2: metric.label,
          custom_parameter_3: metric.id,
        })
      }
    }

    // Cumulative Layout Shift (CLS)
    const observeCLS = () => {
      let clsValue = 0
      let clsEntries = []

      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            clsEntries.push(entry)
          }
        }
        
        reportWebVitals({
          name: 'CLS',
          value: clsValue,
          label: clsValue > 0.1 ? 'poor' : clsValue > 0.05 ? 'needs-improvement' : 'good',
          id: 'cls',
          entries: clsEntries,
        })
      })

      observer.observe({ entryTypes: ['layout-shift'] })
      return observer
    }

    // First Input Delay (FID)
    const observeFID = () => {
      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          reportWebVitals({
            name: 'FID',
            value: entry.processingStart - entry.startTime,
            label: entry.processingStart - entry.startTime > 100 ? 'poor' : 
                   entry.processingStart - entry.startTime > 25 ? 'needs-improvement' : 'good',
            id: 'fid',
            entry,
          })
        }
      })

      observer.observe({ entryTypes: ['first-input'] })
      return observer
    }

    // Largest Contentful Paint (LCP)
    const observeLCP = () => {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1]
        
        reportWebVitals({
          name: 'LCP',
          value: lastEntry.startTime,
          label: lastEntry.startTime > 4000 ? 'poor' : 
                 lastEntry.startTime > 2500 ? 'needs-improvement' : 'good',
          id: 'lcp',
          entry: lastEntry,
        })
      })

      observer.observe({ entryTypes: ['largest-contentful-paint'] })
      return observer
    }

    // First Contentful Paint (FCP)
    const observeFCP = () => {
      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            reportWebVitals({
              name: 'FCP',
              value: entry.startTime,
              label: entry.startTime > 3000 ? 'poor' : 
                     entry.startTime > 1800 ? 'needs-improvement' : 'good',
              id: 'fcp',
              entry,
            })
          }
        }
      })

      observer.observe({ entryTypes: ['paint'] })
      return observer
    }

    // Time to First Byte (TTFB)
    const observeTTFB = () => {
      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.responseStart > 0) {
            reportWebVitals({
              name: 'TTFB',
              value: entry.responseStart,
              label: entry.responseStart > 800 ? 'poor' : 
                     entry.responseStart > 200 ? 'needs-improvement' : 'good',
              id: 'ttfb',
              entry,
            })
          }
        }
      })

      observer.observe({ entryTypes: ['navigation'] })
      return observer
    }

    // Initialize observers
    const observers = []
    
    try {
      if ('PerformanceObserver' in window) {
        observers.push(observeCLS())
        observers.push(observeFID())
        observers.push(observeLCP())
        observers.push(observeFCP())
        observers.push(observeTTFB())
      }
    } catch (error) {
      console.warn('[Performance Monitor] Error initializing observers:', error)
    }

    // Cleanup function
    return () => {
      observers.forEach(observer => {
        try {
          observer.disconnect()
        } catch (error) {
          console.warn('[Performance Monitor] Error disconnecting observer:', error)
        }
      })
    }
  }, [])

  // Resource timing monitoring
  useEffect(() => {
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') {
      return
    }

    const monitorResourceTiming = () => {
      const resources = performance.getEntriesByType('resource')
      const slowResources = resources.filter(resource => resource.duration > 1000)
      
      if (slowResources.length > 0) {
        console.warn('[Performance] Slow resources detected:', slowResources)
      }

      // Monitor image loading performance
      const images = resources.filter(resource => 
        resource.name.includes('.webp') || 
        resource.name.includes('.jpg') || 
        resource.name.includes('.png') ||
        resource.name.includes('.avif')
      )
      
      const slowImages = images.filter(img => img.duration > 500)
      if (slowImages.length > 0) {
        console.warn('[Performance] Slow image loading:', slowImages)
      }
    }

    // Run after page load
    if (document.readyState === 'complete') {
      setTimeout(monitorResourceTiming, 2000)
    } else {
      window.addEventListener('load', () => {
        setTimeout(monitorResourceTiming, 2000)
      })
    }
  }, [])

  return null // This component doesn't render anything
}

export default PerformanceMonitor