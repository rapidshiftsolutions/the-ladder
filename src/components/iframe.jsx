'use client'

import { useEffect, useState } from 'react'

export function SafeIframe({ src, title, className, height = '510px', ...props }) {
  // Use state to control when to render the iframe to avoid hydration mismatch
  const [isMounted, setIsMounted] = useState(false)
  
  // Only render the iframe after the component mounts on the client
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  // Default styles to apply consistently
  const defaultStyle = {
    width: '100%',
    height,
    border: 'none',
    borderRadius: '8px',
  }
  
  // During SSR or before mount, render a placeholder with the same dimensions
  if (!isMounted) {
    return (
      <div 
        className={`bg-gray-100 animate-pulse ${className}`}
        style={defaultStyle}
        aria-hidden="true"
      />
    )
  }
  
  // After client-side hydration, render the actual iframe
  return (
    <iframe
      src={src}
      title={title}
      className={className}
      style={defaultStyle}
      loading="lazy"
      {...props}
    />
  )
}
