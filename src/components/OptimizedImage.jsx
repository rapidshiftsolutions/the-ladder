"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

/**
 * OptimizedImage component
 * Improves image loading with proper aspect ratio preservation,
 * blur-up loading effect, and lazy loading
 * 
 * @param {Object} props
 * @param {string} props.src - Image source
 * @param {number} props.width - Image width
 * @param {number} props.height - Image height
 * @param {string} props.alt - Image alt text
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element}
 */
export default function OptimizedImage({
  src,
  width,
  height,
  alt,
  className = '',
  priority = false,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const aspectRatio = width && height ? width / height : null;

  useEffect(() => {
    if (typeof window !== 'undefined' && !priority) {
      // Use Intersection Observer for lazy loading
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        {
          rootMargin: '200px', // Start loading 200px before it enters viewport
          threshold: 0.01,
        }
      );
      
      // Create a dummy element to observe
      const element = document.createElement('div');
      element.style.height = '1px';
      element.style.width = '1px';
      element.style.position = 'absolute';
      document.body.appendChild(element);
      
      observer.observe(element);
      
      return () => {
        observer.disconnect();
        document.body.removeChild(element);
      };
    } else {
      setIsInView(true);
    }
  }, [priority]);
  
  // Calculate classes for image container and transitions
  const containerClass = `relative overflow-hidden ${className}`;
  const imageClass = `transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`;
  
  // Skip rendering until in view (unless priority is true)
  if (!isInView && !priority) {
    return (
      <div 
        className={containerClass}
        style={aspectRatio ? { aspectRatio: `${aspectRatio}` } : {}}
        aria-label={alt}
        role="img"
      />
    );
  }

  return (
    <div 
      className={containerClass}
      style={aspectRatio ? { aspectRatio: `${aspectRatio}` } : {}}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt || ''}
        className={imageClass}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoaded(true)}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        {...props}
      />
    </div>
  );
}