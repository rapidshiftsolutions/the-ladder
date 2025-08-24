'use client';

import { useState, useEffect } from 'react';
import MobileLocationFinder from './page-locations-map-mobile';
import DesktopLocationFinder from './page-locations-map-desktop';

const ResponsiveLocationFinder = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Effect for detecting viewport size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Using 1024px as the breakpoint (lg in Tailwind)
    };

    // Set the initial value
    checkIfMobile();

    // Add event listener
    window.addEventListener('resize', checkIfMobile);

    // Update document class based on view
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('overflow-hidden', isMobile);
      document.documentElement.classList.toggle('h-full', isMobile);
      
      if (isMobile) {
        document.body.classList.add('h-full', 'fixed', 'inset-0');
      } else {
        document.body.classList.remove('h-full', 'fixed', 'inset-0');
      }
    }

    // Clean up
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('overflow-hidden');
        document.body.classList.remove('h-full', 'fixed', 'inset-0');
      }
    };
  }, [isMobile]);

  return (
    <div className={isMobile ? "h-screen w-full" : ""}>
      {isMobile ? <MobileLocationFinder /> : <DesktopLocationFinder />}
    </div>
  );
};

export default ResponsiveLocationFinder;
