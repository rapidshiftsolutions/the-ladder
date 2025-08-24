"use client";

import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

/**
 * OptimizedScript component
 * Delays loading non-critical scripts until after page load
 * or when the user interacts with the page
 * 
 * @param {Object} props
 * @param {string} props.id - Script unique identifier
 * @param {string} props.src - Script source URL
 * @param {string} props.strategy - Loading strategy (default: 'lazyOnload')
 * @param {Function} props.onLoad - Callback for when script loads
 * @param {boolean} props.waitForInteraction - Wait for user interaction before loading
 * @returns {JSX.Element}
 */
export function OptimizedScript({ 
  id, 
  src, 
  strategy = 'lazyOnload', 
  onLoad, 
  waitForInteraction = false,
  ...props 
}) {
  const [shouldLoad, setShouldLoad] = useState(!waitForInteraction);
  const interactionRef = useRef(false);

  useEffect(() => {
    if (waitForInteraction && !interactionRef.current) {
      // Load script after user interaction
      const handleInteraction = () => {
        if (!interactionRef.current) {
          interactionRef.current = true;
          setShouldLoad(true);
          
          // Remove listeners after first interaction
          ['mousemove', 'scroll', 'keydown', 'click', 'touchstart'].forEach(event => {
            document.removeEventListener(event, handleInteraction);
          });
        }
      };

      // Add listeners for user interactions
      ['mousemove', 'scroll', 'keydown', 'click', 'touchstart'].forEach(event => {
        document.addEventListener(event, handleInteraction, { passive: true });
      });

      // Set a maximum delay - load after 5 seconds regardless of interaction
      const timer = setTimeout(() => {
        if (!interactionRef.current) {
          interactionRef.current = true;
          setShouldLoad(true);
        }
      }, 5000);

      return () => {
        // Clean up
        clearTimeout(timer);
        ['mousemove', 'scroll', 'keydown', 'click', 'touchstart'].forEach(event => {
          document.removeEventListener(event, handleInteraction);
        });
      };
    }
  }, [waitForInteraction]);

  if (!shouldLoad) {
    return null;
  }

  return (
    <Script
      id={id}
      src={src}
      strategy={strategy}
      onLoad={onLoad}
      {...props}
    />
  );
}

export default OptimizedScript;