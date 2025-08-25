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
              <div className="bg-[var(--ladder-blue)] rounded-lg p-2">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  The Ladder
                </h2>
                <p className="text-xs text-[var(--ladder-gold)] font-medium">Birmingham Nonprofit</p>
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

          {/* Impact Banner */}
          <div className="bg-gradient-to-r from-[var(--ladder-blue)] to-[var(--ladder-green)] rounded-xl p-4 mb-6 shadow-lg">
            <div className="text-white text-center">
              <div className="text-xl font-bold mb-1">Help Someone Today</div>
              <div className="text-sm mb-3">Your support removes barriers to success</div>
              <div className="flex justify-center gap-3">
                <a href="/get-help" className="bg-white/20 rounded-lg px-3 py-2 hover:bg-white/30 transition-colors" onClick={() => setIsOpen(false)}>
                  <div className="text-xs">Need Help?</div>
                  <div className="font-bold text-sm">Apply Now</div>
                </a>
                <a href="/donate" className="bg-white/20 rounded-lg px-3 py-2 hover:bg-white/30 transition-colors" onClick={() => setIsOpen(false)}>
                  <div className="text-xs">Support Us</div>
                  <div className="font-bold text-sm">Donate</div>
                </a>
              </div>
            </div>
          </div>

          {/* Ways We Help */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide flex items-center">
              <svg className="w-4 h-4 mr-2 text-[var(--ladder-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Ways We Help
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'Housing', description: 'Shelter & stability', href: '/barrier-removal-guide#housing' },
                { name: 'Employment', description: 'Job & income support', href: '/barrier-removal-guide#employment' },
                { name: 'Financial', description: 'Emergency assistance', href: '/barrier-removal-guide#financial' },
                { name: 'Health', description: 'Wellness support', href: '/barrier-removal-guide#health' },
                { name: 'Legal', description: 'Advocacy & guidance', href: '/barrier-removal-guide#legal' },
                { name: 'Social', description: 'Community & family', href: '/barrier-removal-guide#social' }
              ].map((area, index) => (
                <a
                  key={index}
                  href={area.href}
                  className="bg-gray-50 hover:bg-[var(--ladder-blue)]/5 rounded-lg p-3 transition-colors group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="font-semibold text-gray-900 group-hover:text-[var(--ladder-blue)] text-sm">{area.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{area.description}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Action Links */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide flex items-center">
              <svg className="w-4 h-4 mr-2 text-[var(--ladder-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {[
                { name: 'Apply for Help', description: 'Get assistance today', href: '/get-help', color: 'text-[var(--ladder-red)]' },
                { name: 'Donate Now', description: 'Support our mission', href: '/donate', color: 'text-[var(--ladder-gold)]' },
                { name: 'Volunteer', description: 'Join our team', href: '/volunteer', color: 'text-[var(--ladder-green)]' },
                { name: 'Monthly Giving', description: 'Sustained support', href: '/monthly-giving', color: 'text-[var(--ladder-blue)]' }
              ].map((action, index) => (
                <a
                  key={index}
                  href={action.href}
                  className="bg-gray-50 hover:bg-gray-100 rounded-lg p-3 transition-colors group flex justify-between items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <div>
                    <div className={`font-medium group-hover:${action.color} text-gray-900`}>{action.name}</div>
                    <div className="text-xs text-gray-500">{action.description}</div>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Main Navigation Links */}
          <nav className="space-y-3 mb-6" aria-label="Main navigation">
            {safeNavItems.filter(item => item.href).map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200 group"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    {(item.name === "About Us" || item.name === "About") && (
                      <svg className="w-4 h-4 text-[var(--ladder-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {item.name === "Get Help" && (
                      <svg className="w-4 h-4 text-[var(--ladder-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )}
                    {(item.name === "Contact" || item.name === "Contact Us") && (
                      <svg className="w-4 h-4 text-[var(--ladder-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

          {/* Primary CTAs */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <a
              href="/get-help"
              className="flex flex-col items-center p-4 bg-[var(--ladder-red)] text-white rounded-xl hover:bg-[var(--ladder-red)]/90 transition-colors shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-6 h-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-sm font-bold">Get Help</span>
              <span className="text-xs opacity-90">Apply for Assistance</span>
            </a>
            <a
              href="/donate"
              className="flex flex-col items-center p-4 bg-[var(--ladder-gold)] text-white rounded-xl hover:bg-[var(--ladder-gold)]/90 transition-colors shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-6 h-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.268-.268-1.707-.707a2.828 2.828 0 010-4l.879-.659C11.536 6.781 12.268 7 12 7s.464-.219.828-.366c1.172-.879 3.07-.879 4.242 0C18.243 7.513 18.243 8.937 17.071 9.816l-.879.659" />
              </svg>
              <span className="text-sm font-bold">Donate</span>
              <span className="text-xs opacity-90">Support Our Mission</span>
            </a>
          </div>

          {/* Impact Stats */}
          <div className="bg-gradient-to-r from-[var(--ladder-blue)]/10 to-[var(--ladder-green)]/10 rounded-xl p-4 mb-6">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-2xl font-bold text-[var(--ladder-blue)]">150+</div>
                <div className="text-xs text-gray-600">People Helped</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--ladder-green)]">87%</div>
                <div className="text-xs text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--ladder-gold)]">24hr</div>
                <div className="text-xs text-gray-600">Response Time</div>
              </div>
            </div>
          </div>

          {/* How We Help Process */}
          <div className="bg-[var(--ladder-blue)]/5 rounded-xl p-4 mb-6">
            <h3 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
              How We Help
            </h3>
            <div className="space-y-2">
              {[
                '1. Partner Refers Someone in Need',
                '2. We Interview & Assess Barriers',
                '3. Create Customized Support Plan',
                '4. Remove Specific Roadblocks',
                '5. Follow Up for Long-term Success'
              ].map((step, index) => (
                <div key={index} className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 mr-2 text-[var(--ladder-green)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Organization Info */}
          <div className="bg-[var(--ladder-blue)] text-white rounded-xl p-4">
            <div className="text-center mb-3">
              <div className="text-xs uppercase tracking-wide opacity-75 mb-1">501(c)(3) Nonprofit • EIN: 47-2123160</div>
              <div className="font-bold">Birmingham's Barrier Removal Experts</div>
            </div>
            <div className="space-y-2 text-sm">
              <a href="/contact" className="flex items-center justify-center hover:text-[var(--ladder-gold)] transition-colors" onClick={() => setIsOpen(false)}>
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8" />
                </svg>
                Contact Us
              </a>
              <a href="mailto:info@the-ladder.org" className="flex items-center justify-center hover:text-[var(--ladder-gold)] transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@the-ladder.org
              </a>
              <div className="flex items-center justify-center text-white/90">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Birmingham, Alabama
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </>,
    document.body
  );
};

export default MobileNavbar;