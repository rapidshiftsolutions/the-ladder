'use client'

import { Share2 } from 'lucide-react'

export default function ShareButton({ title, text, url, className, children }) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: text,
          url: url
        })
      } catch (error) {
        // User cancelled or error occurred
        console.log('Share was cancelled or failed')
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(url)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <button 
      onClick={handleShare}
      className={className}
    >
      {children || (
        <>
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </>
      )}
    </button>
  )
}