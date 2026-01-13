'use client';

import { createContext, useContext, useState, useEffect, useCallback, memo } from 'react';
import LoadingScreen from './LoadingScreen';

/**
 * AppLoadingContext
 * Provides global loading state management for the application
 */
const AppLoadingContext = createContext({
  isLoading: true,
  fontsLoaded: false,
  dataLoaded: false,
  setDataLoaded: () => {},
});

/**
 * useAppLoading hook
 * Access the loading state from any component
 */
export const useAppLoading = () => {
  const context = useContext(AppLoadingContext);
  if (!context) {
    throw new Error('useAppLoading must be used within AppLoadingProvider');
  }
  return context;
};

/**
 * AppLoadingProvider Component
 * 
 * Manages the global loading state including:
 * - Font loading detection via Font Loading API
 * - Data loading state for Sanity CMS content
 * - Minimum display time to prevent flash of loading screen
 * 
 * Usage:
 * Wrap your app with this provider in layout.jsx
 * Components can use useAppLoading() to access/update state
 */
const AppLoadingProvider = memo(function AppLoadingProvider({ children, minLoadTime = 800 }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [loadComplete, setLoadComplete] = useState(false);

  // Calculate overall loading state
  const isLoading = !fontsLoaded || !minTimeElapsed;

  // Track font loading using the Font Loading API
  useEffect(() => {
    // Check if fonts are already loaded
    if (typeof document !== 'undefined' && document.fonts) {
      // Check if fonts are ready
      if (document.fonts.status === 'loaded') {
        setFontsLoaded(true);
      } else {
        // Wait for fonts to load
        document.fonts.ready
          .then(() => {
            setFontsLoaded(true);
          })
          .catch((error) => {
            // Even if font loading fails, continue with fallback fonts
            console.warn('Font loading error:', error);
            setFontsLoaded(true);
          });
      }
    } else {
      // Fallback for browsers without Font Loading API
      // Wait a reasonable time then assume fonts are loaded
      const fallbackTimer = setTimeout(() => {
        setFontsLoaded(true);
      }, 1000);
      
      return () => clearTimeout(fallbackTimer);
    }
  }, []);

  // Enforce minimum loading time to prevent flash
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, minLoadTime);

    return () => clearTimeout(timer);
  }, [minLoadTime]);

  // Handle load complete callback
  const handleLoadComplete = useCallback(() => {
    setLoadComplete(true);
  }, []);

  // Mark data as loaded (called by components when Sanity data is ready)
  const markDataLoaded = useCallback(() => {
    setDataLoaded(true);
  }, []);

  // Context value
  const contextValue = {
    isLoading,
    fontsLoaded,
    dataLoaded,
    setDataLoaded: markDataLoaded,
    loadComplete,
  };

  return (
    <AppLoadingContext.Provider value={contextValue}>
      {/* Loading screen overlay */}
      <LoadingScreen 
        isLoading={isLoading} 
        onLoadComplete={handleLoadComplete}
      />
      
      {/* Main content - rendered but hidden until loaded */}
      <div 
        className={`app-content ${loadComplete ? 'app-content--loaded' : 'app-content--loading'}`}
        style={{
          opacity: loadComplete ? 1 : 0,
          visibility: loadComplete ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease-out',
        }}
      >
        {children}
      </div>
    </AppLoadingContext.Provider>
  );
});

AppLoadingProvider.displayName = 'AppLoadingProvider';

export default AppLoadingProvider;
