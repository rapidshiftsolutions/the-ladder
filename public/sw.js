// The Ladder Service Worker — network-first for pages, cache for static assets.
// Version bump forces a clean activate after deploy.
const CACHE_VERSION = 'v2026.08.11.givebutter-fix'
const CACHE_NAME = `the-ladder-${CACHE_VERSION}`
const RUNTIME_CACHE = `the-ladder-runtime-${CACHE_VERSION}`

const CACHE_FIRST_PATTERNS = [
  '/_next/static/',
  '/fonts/',
  '.woff2',
  '.woff',
  '.ttf',
  '.otf',
  '/images/',
  '.png',
  '.jpg',
  '.jpeg',
  '.svg',
  '.webp',
  '.ico',
]

const NEVER_CACHE = [
  '/studio',
  '/_next/webpack-hmr',
  '/admin',
  'chrome-extension://',
  'moz-extension://',
  'safari-extension://',
  'hot-update',
  '.rsc',
  '?_rsc=',
  '/api/',
  'givebutter.com',
  'sanity.io',
  'google-analytics.com',
  'googletagmanager.com',
]

function shouldNeverIntercept(url) {
  const urlString = typeof url === 'string' ? url : url.href
  // Never touch cross-origin requests (Givebutter, analytics, CMS, etc.)
  try {
    const parsed = typeof url === 'string' ? new URL(url) : url
    if (parsed.origin !== self.location.origin) return true
  } catch {
    return true
  }
  return NEVER_CACHE.some((pattern) => urlString.includes(pattern))
}

function isCacheFirst(urlString) {
  return CACHE_FIRST_PATTERNS.some((pattern) => urlString.includes(pattern))
}

self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing version:', CACHE_VERSION)
  self.skipWaiting()
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(['/offline', '/icon-192x192.png', '/icon-512x512.png']).catch((err) => {
        console.log('[Service Worker] Cache addAll error:', err)
      })
    )
  )
})

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating version:', CACHE_VERSION)
  event.waitUntil(
    Promise.all([
      caches.keys().then((cacheNames) =>
        Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
              console.log('[Service Worker] Deleting old cache:', cacheName)
              return caches.delete(cacheName)
            }
            return undefined
          })
        )
      ),
      self.clients.claim(),
    ])
  )
})

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) =>
        Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)))
      )
    )
  }
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  if (!url.protocol.startsWith('http')) return

  // Let the browser handle RSC / prefetch / API / third-party traffic
  if (
    request.headers.get('RSC') ||
    request.headers.get('Next-Router-Prefetch') ||
    url.searchParams.has('_rsc') ||
    shouldNeverIntercept(url)
  ) {
    return
  }

  if (isCacheFirst(url.href)) {
    event.respondWith(cacheFirst(request))
  } else {
    event.respondWith(networkFirst(request))
  }
})

async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request)
    if (networkResponse && networkResponse.ok && request.method === 'GET') {
      const cache = await caches.open(RUNTIME_CACHE)
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    const cachedResponse = await caches.match(request)
    if (cachedResponse) return cachedResponse
    if (request.mode === 'navigate') {
      const offlineResponse = await caches.match('/offline')
      if (offlineResponse) return offlineResponse
    }
    throw error
  }
}

async function cacheFirst(request) {
  const cachedResponse = await caches.match(request)
  if (cachedResponse) return cachedResponse
  try {
    const networkResponse = await fetch(request)
    if (networkResponse && networkResponse.ok && request.method === 'GET') {
      const cache = await caches.open(RUNTIME_CACHE)
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    if (request.mode === 'navigate') {
      const offlineResponse = await caches.match('/offline')
      if (offlineResponse) return offlineResponse
    }
    throw error
  }
}

console.log('[Service Worker] Loaded version:', CACHE_VERSION)
