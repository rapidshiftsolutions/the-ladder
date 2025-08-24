"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context to manage security acknowledgment for online banking
const SecurityAcknowledgmentContext = createContext();

// Only the secure online banking URL requires security acknowledgment
const BANKING_URLS = [
  'secure.servisfirstbank.com'
];

// Storage key for remembering acknowledgment (optional - could be session-based)
const STORAGE_KEY = 'sfb_security_acknowledged';

export const SecurityAcknowledgmentProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingUrl, setPendingUrl] = useState(null);
  const [bankingType, setBankingType] = useState('Online Banking');
  const [hasAcknowledged, setHasAcknowledged] = useState(false);
  
  // Check if user has already acknowledged in this session
  useEffect(() => {
    const acknowledged = sessionStorage.getItem(STORAGE_KEY);
    setHasAcknowledged(!!acknowledged);
  }, []);
  
  // Function to determine the banking type based on URL
  const getBankingType = (url) => {
    try {
      const urlObj = new URL(url);
      
      if (urlObj.hostname.includes('secure.servisfirstbank')) {
        return 'Online Banking';
      }
      
      return 'Online Banking';
    } catch (e) {
      return 'Online Banking';
    }
  };
  
  // Function to check if a URL requires security acknowledgment
  const requiresAcknowledgment = (url) => {
    try {
      // Handle relative URLs by adding window.location.origin
      let urlObj;
      if (url.startsWith('http://') || url.startsWith('https://')) {
        urlObj = new URL(url);
      } else if (typeof window !== 'undefined') {
        urlObj = new URL(url, window.location.origin);
      } else {
        return false;
      }
      
      const requires = BANKING_URLS.some(domain => {
        // Check if the hostname matches the banking domain
        const matches = urlObj.hostname === domain || 
                       urlObj.hostname.includes(domain) ||
                       urlObj.hostname.endsWith(`.${domain}`);
        return matches;
      });
      
      return requires;
    } catch (e) {
      return false;
    }
  };
  
  // Function to handle banking link clicks
  const handleBankingLinkClick = (url, event) => {
    if (requiresAcknowledgment(url)) {
      // If user hasn't acknowledged in this session, show modal
      if (!hasAcknowledged) {
        // Aggressively prevent navigation
        if (event) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
        }
        
        // Store the URL and show modal
        setPendingUrl(url);
        setBankingType(getBankingType(url));
        setIsOpen(true);
        
        // Return false to signal that navigation was prevented
        return false;
      }
    }
    // Return true to signal navigation can proceed
    return true;
  };
  
  // Function to confirm acknowledgment and navigate
  const confirmAcknowledgment = () => {
    if (pendingUrl) {
      // Remember acknowledgment for this session
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setHasAcknowledged(true);
      
      // Navigate to the banking URL
      window.open(pendingUrl, '_blank', 'noopener,noreferrer');
      
      // Reset state
      setPendingUrl(null);
      setIsOpen(false);
    }
  };
  
  // Function to cancel acknowledgment
  const cancelAcknowledgment = () => {
    setPendingUrl(null);
    setIsOpen(false);
  };
  
  // Function to reset acknowledgment (for testing or admin purposes)
  const resetAcknowledgment = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setHasAcknowledged(false);
  };
  
  // Context value to be provided
  const contextValue = {
    isOpen,
    handleBankingLinkClick,
    confirmAcknowledgment,
    cancelAcknowledgment,
    resetAcknowledgment,
    bankingType,
    hasAcknowledged,
    requiresAcknowledgment
  };
  
  return (
    <SecurityAcknowledgmentContext.Provider value={contextValue}>
      {children}
    </SecurityAcknowledgmentContext.Provider>
  );
};

// Custom hook to use the security acknowledgment context
export const useSecurityAcknowledgment = () => {
  const context = useContext(SecurityAcknowledgmentContext);
  if (!context) {
    throw new Error('useSecurityAcknowledgment must be used within a SecurityAcknowledgmentProvider');
  }
  return context;
};