'use client'

import { ArrowRight, Heart, TrendingUp } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

export default function HeroCompact() {
  const [isVisible, setIsVisible] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState('')
  const videoRef = useRef(null)

  // Available background videos - easily maintainable list
  const backgroundVideos = [
    {
      filename: 'Graduate.mp4',
      description: 'Graduation ceremony - representing achievement and success'
    },
    {
      filename: 'Handing_Keys.mp4', 
      description: 'Handing over keys - representing new opportunities and housing'
    },
    {
      filename: 'Driving.mp4',
      description: 'Driving - representing mobility, independence, and moving forward'
    },
    {
      filename: 'Dress_For_Success.mp4',
      description: 'Professional dress preparation - representing career readiness and confidence'
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    
    // Randomly select a video on component mount
    const randomIndex = Math.floor(Math.random() * backgroundVideos.length)
    const randomVideo = backgroundVideos[randomIndex]
    setSelectedVideo(randomVideo.filename)
    
    // Development logging
    if (process.env.NODE_ENV === 'development') {
      console.log(`🎥 Selected background video: ${randomVideo.filename} (${randomIndex + 1}/${backgroundVideos.length})`)
      console.log(`   Description: ${randomVideo.description}`)
    }
    
    // Lazy load video after critical content is loaded
    const timer = setTimeout(() => {
      if (videoRef.current && randomVideo.filename) {
        videoRef.current.load()
      }
    }, 1500) // Wait 1.5s for critical content to load

    return () => clearTimeout(timer)
  }, [])

  const handleVideoLoad = () => {
    setVideoLoaded(true)
  }

  const handleVideoError = (e) => {
    if (selectedVideo) {
      console.log(`Video failed to load: ${selectedVideo}`, e)
      console.log('Using fallback background instead')
    }
    // Don't set videoLoaded to true on error - keeps fallback visible
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%231a1a1a'/%3E%3Cstop offset='100%25' style='stop-color:%232d2d2d'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad)'/%3E%3C/svg%3E"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          style={{
            opacity: videoLoaded ? 0.4 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
        >
          {selectedVideo && (
            <>
              {/* Try WebM version first (better compression) if available */}
              <source 
                src={`/TheLadder/videos/${selectedVideo.replace('.mp4', '.webm')}`} 
                type="video/webm" 
              />
              {/* MP4 version for broader compatibility */}
              <source 
                src={`/TheLadder/videos/${selectedVideo}`} 
                type="video/mp4" 
              />
            </>
          )}
        </video>
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(26, 26, 26, 0.8) 0%, 
                rgba(45, 45, 45, 0.7) 50%,
                rgba(26, 26, 26, 0.9) 100%
              ),
              linear-gradient(
                to bottom,
                rgba(0, 122, 255, 0.05) 0%,
                transparent 40%,
                transparent 60%,
                rgba(52, 199, 89, 0.05) 100%
              )
            `
          }}
        />
        
        {/* Fallback Background (loads immediately) */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            opacity: videoLoaded ? 0 : 1,
            transition: 'opacity 1s ease-in-out'
          }}
        >
          {/* Subtle animated elements for fallback */}
          <div 
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
            style={{ 
              background: 'radial-gradient(circle, #007AFF, transparent)',
              animation: 'float 6s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full opacity-5 blur-3xl animate-pulse"
            style={{ 
              background: 'radial-gradient(circle, #34C759, transparent)',
              animation: 'float 8s ease-in-out infinite reverse'
            }}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Brand Badge */}
        <div className={`mb-8 ${isVisible ? 'animate-in' : 'opacity-0'}`}>
          <div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <TrendingUp className="w-4 h-4" style={{ color: '#34C759' }} />
            Birmingham's Bridge to Success
          </div>
        </div>

        {/* Main Headline */}
        <div className={`mb-8 ${isVisible ? 'animate-in-delayed' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            The <span style={{ color: '#EF4444' }}>Missing</span>
            <br />
            <span style={{ color: '#007AFF' }}>Rung</span>
          </h1>
          
          <p className="text-2xl sm:text-3xl text-white/90 font-medium mb-6 leading-relaxed">
            When life barriers prevent success, we help individuals 
            <strong className="text-white"> climb over what's blocking them.</strong>
          </p>

          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Partnering with Birmingham nonprofits to address the specific, individual obstacles 
            that fall outside traditional service boundaries.
          </p>
        </div>

        {/* Key Stats */}
        <div className={`mb-12 ${isVisible ? 'animate-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { number: '500+', label: 'Helped' },
              { number: '95%', label: 'Success' },
              { number: '24hr', label: 'Response' }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-2xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Primary CTAs */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto ${isVisible ? 'animate-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <a 
            href="/get-help"
            className="group flex-1 inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #007AFF, #0056CC)',
              color: 'white',
              boxShadow: '0 8px 32px rgba(0, 122, 255, 0.3)'
            }}
          >
            <Heart className="w-5 h-5 mr-3" />
            Get Help
            <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
          </a>
          
          <a 
            href="/donate"
            className="group flex-1 inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            Support Mission
            <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes animate-in-delayed {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes animate-up {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.05;
          }
          50% {
            transform: translateY(-20px) scale(1.1);
            opacity: 0.08;
          }
        }

        .animate-in {
          animation: animate-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-in-delayed {
          animation: animate-in-delayed 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-up {
          animation: animate-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* iOS system font stack */
        * {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
        }

        /* Preload hint for video */
        video {
          will-change: opacity;
        }
      `}</style>
    </section>
  )
}