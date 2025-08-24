"use client";

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

/**
 * Custom hook to lazy load components when they enter the viewport
 * @param {string} importPath - Path to the component to load
 * @param {object} options - Options for the dynamic import
 * @returns {React.ComponentType} - The dynamically loaded component
 */
/**
 * A custom React hook that lazily loads a component when the viewport approaches it.
 * Uses Intersection Observer to detect when the component should be loaded.
 * 
 * @param {string} importPath - The path to the component to be dynamically imported
 * @param {Object} [options={}] - Options to pass to Next.js dynamic import
 * @param {boolean} [options.ssr=false] - Whether to server-side render the component
 * @param {Function} [options.loading] - Custom loading component
 * 
 * @returns {React.ComponentType} A dynamically loaded React component that will only
 * be loaded when the viewport approaches it
 * 
 * @example
 * // Import a component lazily
 * const LazyComponent = useLazyComponent('./components/HeavyComponent');
 * 
 * // In your JSX
 * return <LazyComponent prop1="value" />;
 */
export function useLazyComponent(importPath, options = {}) {
  const [shouldLoad, setShouldLoad] = useState(false);
  
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      // Use Intersection Observer to detect when element is near viewport
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        },
        {
          rootMargin: '200px', // Start loading 200px before it's visible
          threshold: 0.01,
        }
      );
      
      // Observe the root element
      const target = document.getElementById('__next') || document.body;
      observer.observe(target);
      
      return () => {
        observer.disconnect();
      };
    }
  }, []);
  
  // Create a new component that only loads the actual component when shouldLoad is true
  return dynamic(
    () => shouldLoad ? import(importPath) : Promise.resolve(() => null),
    {
      ssr: false,
      loading: () => <div className="min-h-[20px]" />,
      ...options,
    }
  );
}

/**
 * Helper function to dynamically import components with optimized loading
 * @param {string} importPath - Path to the component
 * @param {object} options - Dynamic import options
 * @returns {React.ComponentType} Dynamically imported component
 */
export const loadComponent = (importPath, options = {}) => {
  return dynamic(() => import(importPath), {
    ssr: true, // Enable server-side rendering by default
    loading: () => <div className="min-h-[20px]"></div>, // Minimal loading state
    ...options
  });
};

/**
 * Helper function for components that should only load on client side
 * @param {string} importPath - Path to the component
 * @param {object} options - Dynamic import options
 * @returns {React.ComponentType} Client-side only component
 */
export const loadClientComponent = (importPath, options = {}) => {
  return dynamic(() => import(importPath), {
    ssr: false, // Disable server-side rendering
    loading: () => <div className="min-h-[20px]"></div>, // Minimal loading state
    ...options
  });
};