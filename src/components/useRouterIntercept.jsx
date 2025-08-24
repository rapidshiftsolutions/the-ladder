"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSecurityAcknowledgment } from './SecurityAcknowledgmentContext';

// Custom hook to intercept Next.js router navigation
export const useRouterIntercept = () => {
  const router = useRouter();
  const { requiresAcknowledgment, handleBankingLinkClick } = useSecurityAcknowledgment();
  
  useEffect(() => {
    // Store the original push method
    const originalPush = router.push;
    
    // Override router.push to intercept navigation
    router.push = (url, ...args) => {
      console.log('[DEBUG] Router push intercepted:', url);
      
      // Check if this URL requires acknowledgment
      if (requiresAcknowledgment(url)) {
        console.log('[DEBUG] Banking URL in router, checking acknowledgment');
        
        // Create a fake event for the handler
        const fakeEvent = {
          preventDefault: () => {},
          stopPropagation: () => {},
          stopImmediatePropagation: () => {}
        };
        
        const result = handleBankingLinkClick(url, fakeEvent);
        
        // If navigation was prevented, don't call the original push
        if (result === false) {
          console.log('[DEBUG] Navigation prevented by security acknowledgment');
          return;
        }
      }
      
      // Otherwise, proceed with the original navigation
      return originalPush.call(router, url, ...args);
    };
    
    // Cleanup: restore original method
    return () => {
      router.push = originalPush;
    };
  }, [router, requiresAcknowledgment, handleBankingLinkClick]);
};