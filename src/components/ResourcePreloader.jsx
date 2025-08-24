'use client'

import { useEffect } from 'react'

// Component that manages intelligent resource preloading
// It ensures resources are only preloaded when needed and 
// with appropriate priority to avoid browser warnings
const ResourcePreloader = () => {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return
    
    // Track what we've already loaded to avoid duplicates
    const loadedResources = new Set()
    
    // Helper to intelligently prefetch resources
    const prefetchResource = (url, options = {}) => {
      if (loadedResources.has(url)) return
      
      const { priority = 'low', as = 'fetch', viewportCheck = true } = options
      
      // For images, use normal fetch to cache without warnings
      if (url.match(/\.(jpg|jpeg|png|gif|webp|avif|svg)$/i)) {
        // Add to loaded set immediately
        loadedResources.add(url)
        
        fetch(url, { 
          method: 'GET',
          priority,
          cache: 'force-cache',
          mode: 'no-cors'
        }).catch(() => {
          // Silently handle errors for prefetch
        })
        return
      }
      
      // For scripts and other resources, use more appropriate methods
      if (url.match(/\.(js)$/i)) {
        loadedResources.add(url)
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.as = 'script'
        link.href = url
        document.head.appendChild(link)
        return
      }
      
      // For stylesheets
      if (url.match(/\.(css)$/i)) {
        loadedResources.add(url)
        const link = document.createElement('link')
        link.rel = 'prefetch' // Use prefetch instead of preload
        link.as = 'style'
        link.href = url
        document.head.appendChild(link)
        return
      }
      
      // For HTML pages
      if (!url.match(/\.[a-z]+$/i) || url.match(/\.(html)$/i)) {
        loadedResources.add(url)
        
        // Use prefetch for pages, not preload
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = url
        document.head.appendChild(link)
        return
      }
    }
    
    // Set up intersection observer to load resources when in viewport
    const setupIntersectionObserver = () => {
      // Find all images that might be good candidates for preloading
      const images = document.querySelectorAll('img[src]:not([loading="lazy"])')
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target
            const src = img.getAttribute('src')
            
            // Find and preload next images
            if (src && !loadedResources.has(src)) {
              // For numbered images, try to preload the next one
              const match = src.match(/(\d+)\.(jpg|jpeg|png|gif|webp|avif)$/i)
              if (match) {
                const num = parseInt(match[1])
                const ext = match[2]
                const baseUrl = src.substring(0, src.lastIndexOf('/') + 1)
                const nextSrc = `${baseUrl}${num + 1}.${ext}`
                
                // Prefetch the next image with low priority
                prefetchResource(nextSrc, { priority: 'low', as: 'image' })
              }
            }
            
            // Stop observing this image
            observer.unobserve(img)
          }
        })
      }, {
        rootMargin: '100px' // Start loading a bit before they come into view
      })
      
      images.forEach(img => observer.observe(img))
    }
    
    // Wait for page load before setting up observers
    if (document.readyState === 'complete') {
      setupIntersectionObserver()
    } else {
      window.addEventListener('load', setupIntersectionObserver)
      return () => window.removeEventListener('load', setupIntersectionObserver)
    }
  }, [])
  
  // This component doesn't render anything
  return null
}

export default ResourcePreloader
