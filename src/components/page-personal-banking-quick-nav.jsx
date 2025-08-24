// components/page-personal-banking-quick-nav.jsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const PersonalQuickNavigation = () => {
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const scrollContainerRef = useRef(null);
  
  const navLinks = [
    { href: "/personal-banking-checking", text: "Checking Accounts" },
    { href: "/personal-banking-savings", text: "Savings Accounts" },
    { href: "/personal-banking-money-market", text: "Money Market" },
    { href: "/personal-banking-fee-schedule-and-requirements", text: "Fee Schedule" },
    { href: "/personal-banking-debit-card-monitoring", text: "Debit Card Monitoring" }
  ];

  // Check if scroll buttons should be shown
  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowScrollButtons(scrollWidth > clientWidth);
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  // Set the active link based on the current URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      const current = navLinks.find(link => currentPath.includes(link.href));
      if (current) setActiveLink(current.href);
    }
  }, [navLinks]);

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Touch scroll indicators
  const [showLeftIndicator, setShowLeftIndicator] = useState(false);
  const [showRightIndicator, setShowRightIndicator] = useState(true);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const isAtStart = container.scrollLeft === 0;
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 5;
      
      setShowLeftIndicator(!isAtStart);
      setShowRightIndicator(!isAtEnd);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="top-0 z-30 py-2 pt-4 px-4 sm:px-6 border-b border-gray-100 shadow-sm bg-gray-100">
      <div className="relative max-w-7xl mx-auto">
        <h2 className="sr-only">Personal Banking Services Navigation</h2>
        
        {/* Scroll buttons for mobile */}
        {showScrollButtons && (
          <>
            {showLeftIndicator && (
              <button 
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md border border-gray-100 hover:bg-gray-50 transition-colors duration-150"
                aria-label="Scroll left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            
            {showRightIndicator && (
              <button 
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md border border-gray-100 hover:bg-gray-50 transition-colors duration-150"
                aria-label="Scroll right"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </>
        )}
        
        {/* Scrollable container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide pb-1.5 px-6 scroll-smooth hide-scrollbar"
          style={{ 
            msOverflowStyle: 'none', 
            scrollbarWidth: 'none'
          }}
        >
          <div className="flex space-x-2 mx-auto">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`inline-flex items-center whitespace-nowrap px-5 py-2.5 text-sm font-medium tracking-wide rounded-md border ${
                  activeLink === link.href 
                    ? 'border-gray-900 bg-gray-900 text-white' 
                    : 'border-gray-100 bg-white text-gray-900 hover:bg-gray-50 hover:text-primary-700 hover:border-primary-600'
                } transition-colors duration-200 ease-in-out shadow-sm flex-shrink-0`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Gradient fade effect on edges */}
        {showScrollButtons && (
          <>
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none"></div>
          </>
        )}

        {/* Mobile swipe hint - briefly shown on component mount */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-80 pointer-events-none md:hidden animate-fade-out">
          Swipe to see more
        </div>
      </div>
    </div>
  );
};

export default PersonalQuickNavigation;