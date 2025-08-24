"use client";

import { useEffect } from 'react';
import { useSecurityAcknowledgment } from './SecurityAcknowledgmentContext';

// Global handler that intercepts banking links across the entire site
export const GlobalBankingLinkHandler = () => {
  const { handleBankingLinkClick, requiresAcknowledgment } = useSecurityAcknowledgment();
  
  useEffect(() => {
    const handleEvent = (event) => {
      // Check if it's a link click
      const target = event.target.closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      if (!href) return;
      
      console.log('[DEBUG] Event type:', event.type, 'URL:', href);
      
      // Check if this is a banking URL that requires acknowledgment
      if (requiresAcknowledgment(href)) {
        console.log('[DEBUG] Banking URL detected, preventing navigation');
        // Handle the click and prevent navigation
        const result = handleBankingLinkClick(href, event);
        
        console.log('[DEBUG] handleBankingLinkClick result:', result);
        
        // If handleBankingLinkClick returned false, ensure navigation is blocked
        if (result === false) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
          return false;
        }
      }
    };
    
    // Add event listeners with capture phase to intercept before other handlers
    // Using capture (true) ensures we get the event first
    // Listen to both mousedown and click to catch navigation early
    document.addEventListener('mousedown', handleEvent, true);
    document.addEventListener('click', handleEvent, true);
    
    // Cleanup function
    return () => {
      document.removeEventListener('mousedown', handleEvent, true);
      document.removeEventListener('click', handleEvent, true);
    };
  }, [handleBankingLinkClick, requiresAcknowledgment]);
  
  // This component doesn't render anything
  return null;
};