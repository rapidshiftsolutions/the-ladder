// This script helps clear client-side caches that may be causing issues
// with specific problematic pages
(function() {
  // Only run on problematic pages
  const path = window.location.pathname;
  if (path === '/commercial-banking' || path === '/credit-card-services-commercial-purchasing-card') {
    // Check if we've already attempted to clear cache during this session
    const clearedKey = `sfb_cache_cleared_${path}`;
    
    if (!sessionStorage.getItem(clearedKey)) {
      // Clear all possible browser caches that might be causing issues
      if ('caches' in window) {
        caches.keys().then(names => {
          names.forEach(name => {
            caches.delete(name);
          });
        });
      }
      
      // Clear session storage but maintain our "cleared" flag
      const sessionKeys = Object.keys(sessionStorage);
      sessionKeys.forEach(key => {
        if (!key.startsWith('sfb_cache_cleared_')) {
          sessionStorage.removeItem(key);
        }
      });
      
      // Set flag to prevent repeated clearing in the same session
      sessionStorage.setItem(clearedKey, Date.now().toString());
      
      // We're no longer using query parameters as they cause serialization issues
    }
  }
})();