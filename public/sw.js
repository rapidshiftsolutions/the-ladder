// OEM Radio Repair Service Worker - Improved Caching Strategy
// Version will be updated automatically on deployment
const CACHE_VERSION = 'v2025.08.22.132805';
const BUILD_TIMESTAMP = 1755869285527;

// Cache names with version
const CACHE_NAME = `oem-radio-${CACHE_VERSION}`;
const RUNTIME_CACHE = `runtime-${CACHE_VERSION}`;

// IMPORTANT: HTML pages should use network-first to always get latest content
const NETWORK_FIRST_PATTERNS = [
  '/',
  '/repair',
  '/cities',
  '/contact',
  '/services',
  '/about',
  '\.html$',
  '\.jsx$',
  '/api/',
  '/__forms.html'
];

// Static assets that can be cached longer
const CACHE_FIRST_PATTERNS = [
  '/_next/static/',
  '/fonts/',
  '\.woff2?$',
  '\.ttf$',
  '\.otf$',
  '/images/',
  '\.png$',
  '\.jpg$',
  '\.jpeg$',
  '\.svg$',
  '\.webp$',
  '\.ico$'
];

// Never cache these
const NEVER_CACHE = [
  '/studio',
  '/_next/webpack-hmr',
  '/admin',
  'chrome-extension://',
  'moz-extension://',
  'safari-extension://',
  'hot-update'
];

// Helper to check if request should be cached
function shouldCache(url) {
  const urlString = typeof url === 'string' ? url : url.href;
  return !NEVER_CACHE.some(pattern => urlString.includes(pattern));
}

// Helper to determine strategy for request
function getStrategy(url) {
  const urlString = typeof url === 'string' ? url : url.href;
  
  // Check if it's a network-first pattern
  for (const pattern of NETWORK_FIRST_PATTERNS) {
    if (pattern.startsWith('.') && pattern.endsWith('$')) {
      // It's a regex pattern
      const regex = new RegExp(pattern);
      if (regex.test(urlString)) return 'network-first';
    } else if (urlString.includes(pattern)) {
      return 'network-first';
    }
  }
  
  // Check if it's a cache-first pattern
  for (const pattern of CACHE_FIRST_PATTERNS) {
    if (pattern.startsWith('.') && pattern.endsWith('$')) {
      // It's a regex pattern
      const regex = new RegExp(pattern);
      if (regex.test(urlString)) return 'cache-first';
    } else if (urlString.includes(pattern)) {
      return 'cache-first';
    }
  }
  
  // Default to network-first for everything else
  return 'network-first';
}

// Install event - minimal caching, just essentials
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing version:', CACHE_VERSION);
  
  // Skip waiting to activate immediately
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Only cache absolutely essential files
      return cache.addAll([
        '/offline',
        '/icon-192x192.png',
        '/icon-512x512.png'
      ]).catch(err => {
        console.log('[Service Worker] Cache addAll error:', err);
      });
    })
  );
});

// Activate event - clean up old caches immediately
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating version:', CACHE_VERSION);
  
  event.waitUntil(
    Promise.all([
      // Delete ALL old caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
              console.log('[Service Worker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Take control of all pages immediately
      self.clients.claim(),
      // Tell all clients to reload
      self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({
            type: 'NEW_VERSION_AVAILABLE',
            version: CACHE_VERSION
          });
        });
      })
    ])
  );
});

// Listen for skip waiting message
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('[Service Worker] Skip waiting requested');
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    console.log('[Service Worker] Clear cache requested');
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
      })
    );
  }
});

// Fetch event - handle requests with appropriate strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-http(s) requests
  if (!url.protocol.startsWith('http')) {
    return;
  }
  
  // Skip if we should never cache this
  if (!shouldCache(url)) {
    return;
  }
  
  // Determine strategy
  const strategy = getStrategy(url);
  
  if (strategy === 'network-first') {
    event.respondWith(networkFirst(request));
  } else if (strategy === 'cache-first') {
    event.respondWith(cacheFirst(request));
  }
});

// Network-first strategy - always try network, fallback to cache
async function networkFirst(request) {
  try {
    // Try network with timeout
    const networkResponse = await fetchWithTimeout(request, 5000);
    
    // Cache successful responses
    if (networkResponse && networkResponse.ok && shouldCache(request.url)) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Network failed, try cache
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      console.log('[Service Worker] Network failed, serving from cache:', request.url);
      return cachedResponse;
    }
    
    // If it's a navigation request, show offline page
    if (request.mode === 'navigate') {
      const offlineResponse = await caches.match('/offline');
      if (offlineResponse) {
        return offlineResponse;
      }
    }
    
    // Return error
    throw error;
  }
}

// Cache-first strategy - try cache, fallback to network
async function cacheFirst(request) {
  // Check cache first
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    // Return cached version immediately
    return cachedResponse;
  }
  
  try {
    // Not in cache, fetch from network
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse && networkResponse.ok && shouldCache(request.url)) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Network failed and no cache
    console.log('[Service Worker] Network failed, no cache available:', request.url);
    
    // If it's a navigation request, show offline page
    if (request.mode === 'navigate') {
      const offlineResponse = await caches.match('/offline');
      if (offlineResponse) {
        return offlineResponse;
      }
    }
    
    throw error;
  }
}

// Fetch with timeout helper
function fetchWithTimeout(request, timeout = 5000) {
  return Promise.race([
    fetch(request),
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timeout')), timeout)
    )
  ]);
}

console.log('[Service Worker] Loaded version:', CACHE_VERSION);