"use client"

import { useState, useEffect, useRef } from "react"
import { useSpring, animated, config } from "@react-spring/web"
import { useDrag } from "@use-gesture/react"
import { createPortal } from "react-dom"

const NewportMobileNavbar = ({ isOpen, setIsOpen, navItems }) => {
  // State management
  const [isMounted, setIsMounted] = useState(false)
  const [windowHeight, setWindowHeight] = useState(1000) // Default height
  
  // Ensure navItems has a default value
  const safeNavItems = navItems || []
  
  // Refs
  const sheetRef = useRef(null)
  const contentRef = useRef(null)
  const scrollYRef = useRef(0)
  const isScrollingRef = useRef(false)
  
  // Animation for the backdrop
  const backdropAnimation = useSpring({
    opacity: isOpen ? 0.7 : 0,
    config: config.gentle
  })
  
  // Animation for the bottom sheet with improved config
  const [{ y }, sheetApi] = useSpring(() => ({ 
    y: 1000, // Default value without window reference
    config: { mass: 1, tension: 320, friction: 36 }
  }))

  // Update window height on resize
  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight;
      setWindowHeight(vh);
      
      // Apply the actual viewport height as a CSS variable
      document.documentElement.style.setProperty('--vh', `${vh * 0.01}px`);
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Update sheet position when menu opens/closes
  useEffect(() => {
    if (isMounted) {
      const targetY = isOpen ? windowHeight * 0.1 : windowHeight; // 10% from top when open
      sheetApi.start({ y: targetY });
    }
  }, [isOpen, windowHeight, isMounted, sheetApi]);

  // Track component mount state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll events to prevent interference with drag
  useEffect(() => {
    const contentElement = contentRef.current;
    if (!contentElement) return;

    const handleScroll = () => {
      isScrollingRef.current = true;
      // Reset scroll flag after a delay
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 100);
    };

    const handleTouchStart = (e) => {
      // Store initial touch position
      const touch = e.touches[0];
      scrollYRef.current = touch.clientY;
    };

    const handleTouchMove = (e) => {
      if (!isOpen) return;
      
      const touch = e.touches[0];
      const deltaY = touch.clientY - scrollYRef.current;
      
      // If we're at the top and trying to scroll up, allow it to potentially close
      if (contentElement.scrollTop === 0 && deltaY > 0) {
        // Allow the parent drag handler to potentially take over
        return;
      }
      
      // If we're scrolling within content, prevent parent drag
      if (contentElement.scrollTop > 0 || deltaY < 0) {
        e.stopPropagation();
      }
    };

    contentElement.addEventListener('scroll', handleScroll, { passive: true });
    contentElement.addEventListener('touchstart', handleTouchStart, { passive: true });
    contentElement.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      contentElement.removeEventListener('scroll', handleScroll);
      contentElement.removeEventListener('touchstart', handleTouchStart);
      contentElement.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isOpen]);

  // Drag gesture handler with improved physics - only for drag handle
  const bind = useDrag(
    ({ last, movement: [, my], velocity: [, vy], direction: [, dy] }) => {
      if (!isMounted) return;
      
      // Calculate base position (10% from top when open)
      const baseY = windowHeight * 0.1;
      
      // Current y position with drag offset
      const currentY = Math.max(baseY + my, baseY);
      
      if (last) {
        // Determine if we should close based on drag distance or velocity
        const shouldClose = currentY > baseY + 100 || (vy > 0.3 && dy > 0);
        
        if (shouldClose) {
          setIsOpen(false);
        } else {
          // Snap back to open position
          sheetApi.start({ y: baseY });
        }
      } else {
        // Follow the drag
        sheetApi.start({ y: currentY, immediate: true });
      }
    },
    {
      axis: 'y',
      bounds: { top: 0 },
      rubberband: true,
      filterTaps: true,
    }
  );

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Don't render on server
  if (!isMounted) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <animated.div
        style={{
          opacity: backdropAnimation.opacity,
          display: isOpen ? 'block' : 'none'
        }}
        className="fixed inset-0 bg-black z-[9998]"
        onClick={handleBackdropClick}
      />
      
      {/* Bottom Sheet */}
      <animated.div
        ref={sheetRef}
        style={{
          y,
          display: isOpen ? 'block' : 'none'
        }}
        className="fixed bottom-0 left-0 right-0 bg-surface-900 z-[9999] will-change-transform border-t border-primary-500/20 rounded-t-2xl"
      >
        {/* Drag Handle */}
        <div 
          className="flex justify-center py-4 cursor-grab active:cursor-grabbing touch-none"
          style={{ touchAction: 'none' }}
          {...bind()}
        >
          <div className="w-12 h-1.5 bg-primary-500 rounded-full opacity-60 hover:opacity-100 transition-opacity" />
        </div>

        {/* Content */}
        <div 
          ref={contentRef}
          className="px-4 sm:px-6 pb-6 relative mobile-menu-content"
          style={{ 
            maxHeight: `${windowHeight * 0.85}px`,
            overflow: 'auto',
            overflowX: 'hidden',
            touchAction: 'pan-y', // Allow vertical scrolling
            WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
            scrollbarWidth: 'thin', // Firefox
            scrollbarColor: 'rgba(0, 242, 40, 0.3) transparent' // Firefox
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <h2 className="text-lg font-exo2 font-black italic text-text-primary">
                OEM Radio Repair
              </h2>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-surface-800 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Shop Info Banner */}
          <div className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-3 mb-4">
            <div className="text-sm text-text-secondary">
              <a 
                href="https://maps.google.com/?q=513+Cosby+Hwy+7371+Newport+TN+37821" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-primary-500 hover:text-primary-600 font-medium transition-colors"
              >
                2413 1st Ave S, Newport, TN 37821
              </a>
              <p className="mt-1 text-text-secondary">Mon-Fri 8-6, Sat 8-5</p>
            </div>
          </div>

          {/* Main Navigation Links */}
          <nav className="space-y-2 mb-4" aria-label="Main navigation">
            {/* Services Link */}
            <a
              href="/services"
              className="flex items-center justify-between p-3 bg-surface-800/50 hover:bg-surface-700/50 rounded-xl transition-all duration-200 group"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                  <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-text-primary">Services</span>
              </div>
              <svg className="w-5 h-5 text-text-secondary group-hover:text-primary-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            
            {/* Other Navigation Links */}
            {safeNavItems.filter(item => item.href).map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center justify-between p-3 bg-surface-800/50 hover:bg-surface-700/50 rounded-xl transition-all duration-200 group"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                    {item.name === "Services" && (
                      <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                    {item.name === "Parts" && (
                      <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    )}
                    {item.name === "Packages" && (
                      <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                      </svg>
                    )}
                    {item.name === "Financing" && (
                      <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                    {item.name === "About" && (
                      <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {item.name === "Partners" && (
                      <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                    {item.name === "Specials" && (
                      <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    )}
                    {item.name === "Warranty" && (
                      <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {item.name === "Contact" && (
                      <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    )}
                    {/* Default icon for any items without a specific icon */}
                    {!["Services", "Parts", "Packages", "Financing", "About", "Partners", "Specials", "Warranty", "Contact"].includes(item.name) && (
                      <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <span className="font-semibold text-text-primary">{item.name}</span>
                </div>
                <svg className="w-5 h-5 text-text-secondary group-hover:text-primary-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <a
              href="tel:2055221162"
              className="flex flex-col items-center p-3 bg-primary-500 text-black rounded-xl hover:bg-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-5 h-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-xs font-bold font-exo2 uppercase tracking-wide">Book Now</span>
            </a>
            <a
              href="/services"
              className="flex flex-col items-center p-3 bg-surface-800 text-text-primary rounded-xl hover:bg-surface-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-5 h-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xs font-bold font-exo2 uppercase tracking-wide">Services</span>
            </a>
          </div>

          {/* Service Categories */}
          <div className="bg-surface-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-3 mb-4">
            <h3 className="text-sm font-bold text-text-primary mb-2 font-exo2 uppercase tracking-wide">
              Popular Services
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {['Oil Changes', 'Fluid Service', 'Air Filters', 'Battery'].map((serviceName, index) => (
                <div key={index} className="bg-surface-700 rounded px-2 py-1 text-center">
                  <span className="text-text-primary font-medium">{serviceName}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center justify-center space-x-6 pt-3 border-t border-primary-500/20">
            <a
              href="tel:2055221162"
              className="flex items-center space-x-2 text-primary-500 hover:text-primary-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm font-medium">(205) 522-1162</span>
            </a>
          </div>
        </div>
      </animated.div>
    </>,
    document.body
  );
};

export default NewportMobileNavbar;