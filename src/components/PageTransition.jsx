'use client';

import { useEffect, useState, memo } from 'react';
import { usePathname } from 'next/navigation';

/**
 * PageTransition component handles smooth transitions between pages
 * - Improves perceived performance by maintaining visual continuity
 * - Reduces the jarring feeling of hard refreshes between pages
 * - Uses minimal CSS transitions for better performance
 */
const PageTransition = memo(function PageTransition({ children }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mountedPath, setMountedPath] = useState('');
  
  // Initialize mountedPath after component mounts to prevent hydration mismatch
  useEffect(() => {
    if (pathname) {
      setMountedPath(pathname);
    }
  }, []);
  
  useEffect(() => {
    // Don't run on initial page load to avoid transition on first render
    if (pathname && mountedPath && pathname !== mountedPath) {
      // Mark that we're starting a transition
      setIsTransitioning(true);
      
      // Store the new path
      setMountedPath(pathname);
      
      // After transition completes, reset transition state
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 200); // Slightly longer than CSS transition to ensure completion
      
      return () => clearTimeout(timer);
    }
  }, [pathname, mountedPath]);
  
  // Optimize page load with instant resource loading
  useEffect(() => {
    if (!pathname) return; // Guard against null pathname
    
    // Prefetch critical resources for common pages
    const prefetchResources = () => {
      const commonPages = [
        '/', 
        '/about-us', 
        '/contact-us',
        '/commercial-banking'
      ];
      
      const pagesToPrefetch = commonPages.filter(page => page !== pathname);
      
      pagesToPrefetch.forEach(path => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = path;
        link.as = 'document';
        document.head.appendChild(link);
      });
    };
    
    // Use requestIdleCallback for better performance
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      requestIdleCallback(prefetchResources, { timeout: 2000 });
    } else if (typeof window !== 'undefined') {
      setTimeout(prefetchResources, 1000);
    }
    
    // Set up navigation progress indicator - ensure we're in the browser
    if (typeof document !== 'undefined') {
      try {
        const nprogress = document.createElement('style');
        nprogress.textContent = `
          .nprogress {
            pointer-events: none;
          }
          .nprogress .bar {
            background: #0047BA;
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
          }
        `;
        document.head.appendChild(nprogress);
        
        // Clean up
        return () => {
          try {
            if (document.head.contains(nprogress)) {
              document.head.removeChild(nprogress);
            }
          } catch (error) {
            if (process.env.NODE_ENV === 'development') {
              console.warn('Error cleaning up nprogress style:', error);
            }
          }
        };
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Error setting up nprogress style:', error);
        }
        return undefined;
      }
    }
  }, [pathname]);
  
  // Handle transitions between pages
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleRouteChangeStart = () => {
      // Guard against server-side execution
      if (typeof document === 'undefined') return;
      
      try {
        // Create and display progress bar
        const progressBar = document.createElement('div');
        progressBar.className = 'nprogress';
        progressBar.innerHTML = '<div class="bar"></div>';
        document.body.appendChild(progressBar);
        
        // Add transition class to body
        document.body.classList.add('page-transition-enter');
        document.body.style.opacity = '0.95';
        document.body.style.transition = 'opacity 180ms ease-out';
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Error handling route change start:', error);
        }
      }
    };
    
    const handleRouteChangeComplete = () => {
      // Guard against server-side execution
      if (typeof document === 'undefined') return;
      
      try {
        // Remove progress bar
        const progressBar = document.querySelector('.nprogress');
        if (progressBar && document.body.contains(progressBar)) {
          document.body.removeChild(progressBar);
        }
        
        // Complete the transition
        document.body.classList.remove('page-transition-enter');
        document.body.classList.add('page-transition-enter-active');
        
        setTimeout(() => {
          document.body.style.opacity = '';
          document.body.style.transition = '';
          document.body.classList.remove('page-transition-enter-active');
        }, 180);
        
        // Scroll to top with smooth animation
        window.scrollTo({
          top: 0,
          behavior: 'auto' // Use 'auto' instead of 'smooth' for faster transitions
        });
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Error handling route change complete:', error);
        }
      }
    };
    
    // Set up event listeners for route changes
    window.addEventListener('beforeunload', handleRouteChangeStart);
    window.addEventListener('pageshow', handleRouteChangeComplete);
    
    // Clean up
    return () => {
      window.removeEventListener('beforeunload', handleRouteChangeStart);
      window.removeEventListener('pageshow', handleRouteChangeComplete);
    };
  }, []);
  
  return <>{children}</>;
});

PageTransition.displayName = 'PageTransition';

export default PageTransition;