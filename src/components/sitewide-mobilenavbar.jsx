"use client"

import { useState, useEffect, useRef } from "react"
import { useSpring, animated, config } from "@react-spring/web"
import { useDrag } from "@use-gesture/react"
import { createPortal } from "react-dom"

const MobileNavbar = ({ isOpen, setIsOpen, navItems }) => {
  // State management
  const [isMounted, setIsMounted] = useState(false)
  const [windowHeight, setWindowHeight] = useState(1000) // Default height
  
  // Ensure navItems has a default value
  const safeNavItems = navItems || []
  
  // Refs
  const sheetRef = useRef(null)
  const contentRef = useRef(null)
  const scrollYRef = useRef(0);
  
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
      sheetApi.start({
        y: isOpen ? 0 : windowHeight,
        config: { mass: 1, tension: 320, friction: 36 }
      });
    }
  }, [isOpen, sheetApi, windowHeight, isMounted]);

  // Set mounted state after component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = '100%';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollYRef.current) {
        window.scrollTo(0, scrollYRef.current);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  // Drag gesture for closing
  const bind = useDrag(
    ({ last, velocity: [, vy], direction: [, dy], movement: [, my] }) => {
      if (my < -50) return;
      
      if (last) {
        const shouldClose = my > windowHeight * 0.2 || (vy > 0.5 && dy > 0);
        if (shouldClose) {
          setIsOpen(false);
        } else {
          sheetApi.start({ y: 0 });
        }
      } else {
        sheetApi.start({ y: my, immediate: true });
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
          display: isOpen ? 'block' : 'none',
          touchAction: 'none'
        }}
        className="fixed bottom-0 left-0 right-0 bg-white z-[9999] will-change-transform"
        {...bind()}
      >
        {/* Drag Handle */}
        <div className="flex justify-center py-3 cursor-grab active:cursor-grabbing">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Content */}
        <div 
          ref={contentRef}
          className="px-6 pb-8"
          style={{ 
            maxHeight: `${windowHeight * 0.85}px`,
            overflow: 'auto'
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h2 className="text-lg font-anton font-black text-gray-900 uppercase tracking-wide">
                  OEM Radio Repair
                </h2>
                <p className="text-xs text-gray-500">Infotainment Specialists</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Savings Banner */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 mb-6 shadow-lg">
            <div className="text-white text-center">
              <div className="text-2xl font-bold mb-1">SAVE 50%</div>
              <div className="text-sm">vs. Dealer & Competitors</div>
              <div className="flex justify-center gap-4 mt-3">
                <div className="bg-white/20 rounded px-3 py-1">
                  <div className="text-xs">Digitizer</div>
                  <div className="font-bold">$400</div>
                </div>
                <div className="bg-white/20 rounded px-3 py-1">
                  <div className="text-xs">LCD</div>
                  <div className="font-bold">$550</div>
                </div>
              </div>
            </div>
          </div>

          {/* Shop by Vehicle Make */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide flex items-center">
              <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Shop by Vehicle Make
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'Dodge', models: 'Charger, Journey, Challenger' },
                { name: 'Chrysler', models: '300, Pacifica, Voyager' },
                { name: 'Jeep', models: 'Wrangler, Grand Cherokee' },
                { name: 'Ram', models: '1500, 2500/3500' },
                { name: 'Cadillac', models: 'CTS, ATS, Escalade' }
              ].map((make, index) => (
                <a
                  key={index}
                  href={`/repair/${make.name.toLowerCase()}`}
                  className="bg-gray-50 hover:bg-primary-50 rounded-lg p-3 transition-colors group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="font-semibold text-gray-900 group-hover:text-primary-600">{make.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{make.models}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Service Links */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide flex items-center">
              <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Repair Services
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {[
                { name: 'Digitizer Replacement', price: '$400', href: '/services/digitizer-replacement' },
                { name: 'LCD Replacement', price: '$550', href: '/services/lcd-replacement' },
                { name: 'Mail-In Service', price: 'Free Shipping', href: '/services/mail-in-service' },
                { name: 'How It Works', price: '2-3 Days', href: '/how-it-works' }
              ].map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="bg-gray-50 hover:bg-primary-50 rounded-lg p-3 transition-colors group flex justify-between items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="font-medium text-gray-900 group-hover:text-primary-600">{service.name}</div>
                  <div className="text-sm font-bold text-primary-600">{service.price}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Main Navigation Links */}
          <nav className="space-y-3 mb-6" aria-label="Main navigation">
            {safeNavItems.filter(item => item.href && item.name !== "Locations").map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200 group"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    {item.name === "Locations" && (
                      <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                    {(item.name === "About" || item.name === "About Us") && (
                      <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {(item.name === "Contact" || item.name === "Contact Us") && (
                      <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    )}
                  </div>
                  <span className="font-semibold text-gray-900">{item.name}</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </nav>

          {/* Quick Actions CTAs */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <a
              href="/contact"
              className="flex flex-col items-center p-4 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-6 h-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-bold">Contact Us</span>
              <span className="text-xs opacity-90">Get Free Quote</span>
            </a>
            <a
              href="/contact"
              className="flex flex-col items-center p-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-6 h-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <span className="text-sm font-bold">Free Quote</span>
              <span className="text-xs opacity-90">Get Started</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 mb-6">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-600">1yr</div>
                <div className="text-xs text-gray-600">Warranty</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">2-3</div>
                <div className="text-xs text-gray-600">Day Turnaround</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">Free</div>
                <div className="text-xs text-gray-600">Shipping</div>
              </div>
            </div>
          </div>

          {/* Service Process */}
          <div className="bg-blue-50 rounded-xl p-4 mb-6">
            <h3 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
              How It Works
            </h3>
            <div className="space-y-2">
              {[
                '1. Select Your Vehicle',
                '2. Describe the Problem',
                '3. Get Free Shipping Label',
                '4. Mail Your Screen',
                '5. We Fix & Return in 2-3 Days'
              ].map((step, index) => (
                <div key={index} className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Business Info */}
          <div className="bg-gray-800 text-white rounded-xl p-4">
            <div className="text-center mb-3">
              <div className="text-xs uppercase tracking-wide opacity-75 mb-1">Family Owned Since 1985</div>
              <div className="font-bold">Birmingham's Infotainment Experts</div>
            </div>
            <div className="space-y-2 text-sm">
              <a href="/contact" className="flex items-center justify-center hover:text-primary-300 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8" />
                </svg>
                Contact Form
              </a>
              <a href="mailto:info@oemradiorepair.com" className="flex items-center justify-center hover:text-primary-300 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@oemradiorepair.com
              </a>
              <a href="https://maps.google.com/?q=2413+1st+Ave+S+Birmingham+AL+35233" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center hover:text-primary-300 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                2413 1st Ave S, Birmingham, AL
              </a>
            </div>
          </div>
        </div>
      </animated.div>
    </>,
    document.body
  );
};

export default MobileNavbar;