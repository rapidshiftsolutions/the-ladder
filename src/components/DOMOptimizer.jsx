'use client';
import { useEffect } from 'react';
import { SecurityAcknowledgmentWrapper } from './SecurityAcknowledgmentWrapper';

/**
 * This component performs DOM optimization by implementing lazy rendering
 * for off-screen content, reducing the initial DOM size
 */
export default function DOMOptimizer({ children }) {
  // Use useEffect to run script only on client side
  // This prevents hydration mismatches between server and client
  useEffect(() => {
    // Simple DOM optimizer that runs after initial render
    const optimizeDom = () => {
      // Lazy load images that are off-screen
      const lazyImages = document.querySelectorAll('img:not([loading])');
      lazyImages.forEach(img => {
        if (!img.hasAttribute('loading') && !img.hasAttribute('data-nimg')) {
          img.setAttribute('loading', 'lazy');
        }
      });
      
      // Defer parsing of non-critical scripts
      const scripts = document.querySelectorAll('script:not([async]):not([defer])');
      scripts.forEach(script => {
        if (!script.hasAttribute('async') && !script.hasAttribute('defer') && !script.hasAttribute('type')) {
          script.setAttribute('defer', '');
        }
      });
      
      // Performance optimization for large lists
      const largeLists = document.querySelectorAll('ul > li, ol > li');
      if (largeLists.length > 50) {
        // Implement virtualization for large lists to reduce DOM nodes
        console.log('Large list detected, optimizing...');
        const listContainers = new Set();
        largeLists.forEach(li => listContainers.add(li.parentElement));
        
        listContainers.forEach(container => {
          if (container.children.length > 30) {
            const visibleCount = 20;
            const children = Array.from(container.children);
            const hiddenChildren = children.slice(visibleCount);
            
            // Hide non-visible items initially
            hiddenChildren.forEach(child => {
              child.style.display = 'none';
              child.setAttribute('data-lazy-item', 'true');
            });
            
            // Add load more functionality
            if (hiddenChildren.length > 0) {
              const loadMoreBtn = document.createElement('button');
              loadMoreBtn.textContent = 'Load More';
              loadMoreBtn.className = 'text-primary-600 hover:text-primary-700 text-sm font-medium';
              loadMoreBtn.onclick = function() {
                hiddenChildren.slice(0, 10).forEach(child => {
                  child.style.display = '';
                  child.removeAttribute('data-lazy-item');
                });
                
                // Remove button if all items are shown
                if (container.querySelectorAll('[data-lazy-item]').length === 0) {
                  loadMoreBtn.remove();
                }
              };
              container.parentNode.insertBefore(loadMoreBtn, container.nextSibling);
            }
          }
        });
      }
    };

    // Execute the DOM optimization after DOM is fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeDom);
    } else {
      optimizeDom();
    }

    // Cleanup function
    return () => {
      document.removeEventListener('DOMContentLoaded', optimizeDom);
    };
  }, []);  // Empty dependency array ensures this runs only once after mounting

  // Return children wrapped with security acknowledgment system
  return (
    <SecurityAcknowledgmentWrapper>
      {children}
    </SecurityAcknowledgmentWrapper>
  );
}