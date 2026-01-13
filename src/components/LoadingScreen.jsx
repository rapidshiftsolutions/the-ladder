'use client';

import { useEffect, useState, memo } from 'react';
import Image from 'next/image';

/**
 * LoadingScreen Component
 * 
 * A beautifully designed loading screen for The Ladder nonprofit website.
 * Features:
 * - The Ladder logo in original colors
 * - Animated ladder rungs representing progress
 * - Floating particles for visual interest
 * - Progress bar with smooth animation
 * - Smooth fade-out transition when ready
 * - Respects prefers-reduced-motion for accessibility
 */
const LoadingScreen = memo(function LoadingScreen({ isLoading = true, onLoadComplete }) {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulate progress for visual feedback
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev;
          return prev + Math.random() * 15;
        });
      }, 200);
      return () => clearInterval(interval);
    } else {
      setProgress(100);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      // Start fade out animation
      setFadeOut(true);
      
      // Remove from DOM after animation completes
      const timer = setTimeout(() => {
        setVisible(false);
        onLoadComplete?.();
      }, 600);
      
      return () => clearTimeout(timer);
    }
  }, [isLoading, onLoadComplete]);

  // Don't render if not visible
  if (!visible) return null;

  return (
    <div
      className={`loading-screen ${fadeOut ? 'loading-screen--fade-out' : ''}`}
      role="progressbar"
      aria-label="Loading application"
      aria-busy={isLoading}
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Background layers */}
      <div className="loading-screen__background">
        <div className="loading-screen__gradient" />
        <div className="loading-screen__pattern" />
      </div>
      
      {/* Floating particles */}
      <div className="loading-screen__particles" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="loading-screen__particle"
            style={{
              '--delay': `${i * 0.5}s`,
              '--x': `${20 + (i * 12)}%`,
              '--duration': `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div className="loading-screen__content">
        {/* Logo card */}
        <div className="loading-screen__card">
          {/* Logo with glow effect */}
          <div className="loading-screen__logo-wrapper">
            <div className="loading-screen__logo-glow" />
            <Image
              src="/TheLadder/logos/The Ladder - Logo.png"
              alt="The Ladder"
              width={220}
              height={88}
              priority
              className="loading-screen__logo"
            />
          </div>
          
          {/* Animated ladder icon */}
          <div className="loading-screen__ladder" aria-hidden="true">
            <div className="loading-screen__ladder-side loading-screen__ladder-side--left" />
            <div className="loading-screen__ladder-side loading-screen__ladder-side--right" />
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="loading-screen__ladder-rung"
                style={{ '--rung-delay': `${i * 0.15}s` }}
              />
            ))}
          </div>
          
          {/* Progress section */}
          <div className="loading-screen__progress-section">
            {/* Progress bar */}
            <div className="loading-screen__progress-track">
              <div 
                className="loading-screen__progress-fill"
                style={{ width: `${progress}%` }}
              />
              <div className="loading-screen__progress-glow" style={{ left: `${progress}%` }} />
            </div>
            
            {/* Loading text */}
            <p className="loading-screen__text">
              <span className="loading-screen__text-label">Loading</span>
              <span className="loading-screen__dots" aria-hidden="true">
                <span className="loading-screen__dot">.</span>
                <span className="loading-screen__dot">.</span>
                <span className="loading-screen__dot">.</span>
              </span>
            </p>
          </div>
        </div>
        
        {/* Tagline */}
        <p className="loading-screen__tagline">
          <span className="loading-screen__tagline-line">Helping individuals climb over</span>
          <span className="loading-screen__tagline-accent">life&apos;s barriers</span>
        </p>
        
        {/* Trust badge */}
        <div className="loading-screen__badge">
          <svg className="loading-screen__badge-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L4 6V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>501(c)(3) Nonprofit</span>
        </div>
      </div>
    </div>
  );
});

LoadingScreen.displayName = 'LoadingScreen';

export default LoadingScreen;
