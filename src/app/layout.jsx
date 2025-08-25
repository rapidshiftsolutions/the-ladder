// layout.jsx (Server Component)
import '/src/styles/tailwind.css';
import Script from 'next/script';
import DOMOptimizer from '/src/components/DOMOptimizer';
import ErrorBoundary from '/src/components/ErrorBoundary';
import ServiceWorkerRegistration from '/src/components/ServiceWorkerRegistration';
import InstallPrompt from '/src/components/InstallPrompt';
import PerformanceMonitor from '/src/components/PerformanceMonitor';


// Use system fonts for The Ladder nonprofit

export const metadata = {
  title: {
    template: '%s | The Ladder',
    default: 'The Ladder - Birmingham Nonprofit Removing Barriers to Success',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://the-ladder.org'),
  description: 'The Ladder helps Birmingham residents overcome specific barriers preventing their success. 501(c)(3) nonprofit providing crisis intervention, emergency assistance, and individual support through community partnerships.',
  keywords: ['Birmingham nonprofit', 'crisis intervention Alabama', 'emergency assistance Birmingham', 'barrier removal', 'individual support', 'community partnerships', 'nonprofit Birmingham AL', 'crisis help', 'emergency aid'],
  authors: [{ name: 'The Ladder', url: 'https://the-ladder.org' }],
  creator: 'The Ladder',
  publisher: 'The Ladder',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://the-ladder.org',
    siteName: 'The Ladder',
    title: 'The Ladder - Birmingham Nonprofit Removing Barriers to Success',
    description: 'Birmingham 501(c)(3) helping individuals overcome barriers through crisis intervention and community partnerships. Apply for help or donate today.',
    images: [
      {
        url: '/meta.png',
        width: 1200,
        height: 630,
        alt: 'The Ladder - Birmingham Nonprofit Barrier Removal Organization',
        type: 'image/png',
      },
      {
        url: '/meta.png',
        width: 1200,
        height: 1200,
        alt: 'The Ladder Nonprofit Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ladder - Birmingham Nonprofit Removing Barriers',
    description: 'Crisis Intervention | Emergency Assistance | Individual Support | Community Partnerships | 501(c)(3)',
    site: '@theladder_bham',
    creator: '@theladder_bham',
    images: {
      url: '/meta.png',
      alt: 'The Ladder - Birmingham Nonprofit Barrier Removal',
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'The Ladder',
    startupImage: [
      {
        url: '/meta.png',
        media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#0066CC',
      },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://the-ladder.org',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'nonprofit',
};

// Add viewport export with themeColor
// Use on-demand revalidation instead of force-dynamic
// This is more stable and less prone to serialization errors
export const revalidate = 60; // Revalidate once per minute at most

export const viewport = {
  themeColor: '#0066CC',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Premium Sharing Meta Tags for Text/SMS/Social */}
        <meta property="og:rich_attachment" content="true" />
        <meta name="format-detection" content="telephone=yes" />
        
        {/* Apple-specific enhancements for iMessage */}
        <meta name="apple-mobile-web-app-title" content="The Ladder" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <link rel="apple-touch-startup-image" href="/meta.png" />
        
        {/* WhatsApp & Telegram specific */}
        <meta property="og:image:secure_url" content="https://the-ladder.org/meta.png" />
        <meta property="og:video" content="" />
        
        {/* LinkedIn specific */}
        <meta name="linkedin:owner" content="The Ladder" />
        
        {/* Pinterest Rich Pins */}
        <meta property="article:author" content="The Ladder" />
        
        {/* Facebook specific */}
        <meta property="fb:app_id" content="" />
        <meta property="og:see_also" content="https://the-ladder.org/how-we-help" />
        
        {/* Additional Twitter Tags */}
        <meta name="twitter:app:name:iphone" content="The Ladder" />
        <meta name="twitter:app:name:ipad" content="The Ladder" />
        <meta name="twitter:app:name:googleplay" content="The Ladder" />
        
        {/* DNS prefetch for critical domains */}
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        <link rel="preconnect" href="https://www.facebook.com" crossOrigin="anonymous" />

        {/* Development mode indicator to disable prefetching in components */}
        {process.env.NODE_ENV === 'development' && (
          <meta name="dev-mode" content="true" />
        )}

        {/* Note: Font preloading is handled by Next.js localFont */}
        {/* Only preload images that are actually used on the current page */}
        
        {/* Resource hints for performance */}
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
        
        {/* PWA meta tags */}
        <meta name="theme-color" content="#0066CC" />
        <meta name="msapplication-TileColor" content="#0066CC" />
        <meta name="msapplication-TileImage" content="/meta.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="The Ladder" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="The Ladder" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Apple touch icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data for Nonprofit Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              "name": "The Ladder",
              "alternateName": "The Ladder Birmingham",
              "description": "The Ladder is a Birmingham, Alabama 501(c)(3) nonprofit organization that helps individuals overcome specific barriers preventing their success through crisis intervention, emergency assistance, and community partnerships.",
              "url": "https://the-ladder.org",
              "logo": "https://the-ladder.org/TheLadder/logos/The Ladder - Logo.png",
              "image": "https://the-ladder.org/meta.png",
              "email": "info@the-ladder.org",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Birmingham",
                "addressRegion": "AL",
                "addressCountry": "US"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Birmingham",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Alabama"
                  }
                }
              ],
              "nonprofitStatus": "NonprofitType501c3",
              "taxID": "47-2123160",
              "foundingDate": "2021",
              "knowsAbout": [
                "Crisis Intervention",
                "Barrier Removal",
                "Emergency Assistance",
                "Individual Support",
                "Community Partnerships",
                "Housing Support",
                "Employment Assistance",
                "Financial Stability",
                "Health and Wellness Support"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Nonprofit Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Crisis Intervention",
                      "description": "Immediate support for individuals facing personal crises and barriers to success"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Barrier Removal Support",
                      "description": "Targeted assistance to help individuals overcome specific obstacles preventing their progress"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Emergency Assistance",
                      "description": "Immediate help with housing, employment, financial, health, and legal barriers"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Community Partnerships",
                      "description": "Collaborative approach working with other nonprofits to provide comprehensive support"
                    }
                  }
                ]
              },
              "slogan": "Helping people climb over life's barriers, one rung at a time",
              "mission": "The Ladder helps individuals one by one climb over very specific, personal barriers that are otherwise keeping them from moving forward in life.",
              "sameAs": [
                "https://instagram.com/theladder_bham"
              ]
            })
          }}
        />
        
        {/* Critical CSS for Core Web Vitals optimization */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* Critical CSS for above-the-fold content */
          body {
            margin: 0;
            background-color: #1F2937;
            color: #f9fafb;
            font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
            line-height: 1.6;
            overflow-x: hidden;
          }
          
          /* Prevent layout shift */
          html {
            scrollbar-gutter: stable;
          }
          
          /* Hero section critical styles */
          .hero-section {
            min-height: 600px;
            position: relative;
            display: flex;
            align-items: center;
          }
          
          /* Simple fade-in animation for page transitions */
          @keyframes fadeIn {
            from { opacity: 0.98; }
            to { opacity: 1; }
          }
          
          body {
            animation: fadeIn 0.2s ease-out;
          }
          
          /* Faster tap response on mobile (remove 300ms delay) */
          @media (pointer: coarse) {
            a, button {
              touch-action: manipulation;
            }
          }
          
          /* Font display optimization */
          @font-face {
            font-family: 'Inter';
            font-display: swap;
          }
          
          @font-face {
            font-family: 'TiltWarp';
            font-display: swap;
          }
        `}} />

      </head>
      <body className="text-light-950 antialiased">
        <ErrorBoundary>
          <DOMOptimizer>
            
            {children}
          </DOMOptimizer>
        </ErrorBoundary>
        
        
        {/* Load accessibility script with optimization - production only */}
        {process.env.NODE_ENV === 'production' && (
          <Script
            id="accessibe-widget"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                // Accessibility script removed - site not registered with acsbapp.com
                console.log('Accessibility features built into semantic HTML');
              `
            }}
          />
        )}
        
        {/* Simple page transition script - more reliable than components */}
        <Script
          id="page-transitions"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window !== 'undefined') {
                  // Only setup prefetching if we're not in development mode
                  const isDev = window.location.hostname === 'localhost' || 
                              window.location.hostname === '127.0.0.1' ||
                              window.location.hostname.includes('.gitpod.io') ||
                              window.location.hostname.includes('.github.dev') ||
                              window.location.port === '3001' ||
                              window.location.port === '3000';
                  
                  if (!isDev && 'requestIdleCallback' in window) {
                    // Delay prefetching to avoid multiple page loads on initial load
                    setTimeout(() => {
                      requestIdleCallback(() => {
                        // Only prefetch navigation menu links (header/footer), not all links on the page
                        const navLinks = document.querySelectorAll('header a[href^="/"], footer a[href^="/"]');
                        const visibleLinks = Array.from(navLinks).filter(link => {
                          // Focus on main navigation links
                          return !link.getAttribute('href').includes('#') && // Exclude anchor links
                                  link.offsetParent !== null; // Only visible links
                        });
                        
                        // Limit to max 3 prefetched links at a time
                        const linksToObserve = visibleLinks.slice(0, 3);
                        
                        linksToObserve.forEach(link => {
                          // Skip current page links
                          if (link.getAttribute('href') === window.location.pathname) return;
                          
                          // Create observer with large root margin so it triggers before links are visible
                          const observer = new IntersectionObserver(entries => {
                            entries.forEach(entry => {
                              if (entry.isIntersecting) {
                                const href = link.getAttribute('href');
                                
                                // Only prefetch once and avoid duplicates
                                if (href && 
                                    href.startsWith('/') && 
                                    !document.querySelector('link[rel="prefetch"][href="' + href + '"]')) {
                                  console.log('Prefetching on viewport entry:', href);
                                  const prefetchLink = document.createElement('link');
                                  prefetchLink.rel = 'prefetch';
                                  prefetchLink.href = href;
                                  prefetchLink.as = 'document';
                                  document.head.appendChild(prefetchLink);
                                }
                                // Once prefetched, stop observing
                                observer.unobserve(link);
                              }
                            });
                          }, {
                            rootMargin: '200px', // Start observing when link is within 200px of viewport
                            threshold: 0.1
                          });
                          
                          // Start observing
                          observer.observe(link);
                        });
                        
                        // Add click handler for subtle transition effect
                        document.body.addEventListener('click', (e) => {
                          // Find closest anchor tag
                          const link = e.target.closest('a');
                          if (!link) return;
                          
                          // Only for internal links and non-modified clicks
                          if (
                            link.href && 
                            link.href.startsWith(window.location.origin) && 
                            !e.ctrlKey && 
                            !e.metaKey &&
                            !e.shiftKey
                          ) {
                            // Add a very subtle fade effect
                            document.body.style.opacity = '0.98';
                            
                            // Reset after navigation
                            setTimeout(() => {
                              document.body.style.opacity = '';
                            }, 300);
                          }
                        });
                      }, { timeout: 5000 }); // Extended timeout
                    }, 3000); // Add initial delay
                  }
                  
                  // Ensure pages always start scrolled at the top for better UX
                  window.addEventListener('beforeunload', () => {
                    if ('scrollTo' in window) {
                      window.scrollTo(0, 0);
                    }
                  });
                }
              })();
            `
          }}
        />
        
        {/* Add browser cache management for faster revisits - production only */}
        {process.env.NODE_ENV === 'production' && (
          <Script
            id="cache-control"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                // Check if browser supports the Cache API
                if ('caches' in window && window.location.protocol === 'https:') {
                  // Pre-cache critical resources
                  caches.open('critical-assets').then(cache => {
                    cache.addAll([
                      '/apple-touch-icon.png',
                      '/icon.svg',
                      '/meta.png'
                    ]).catch(error => {
                      console.log('Cache addAll failed:', error);
                    });
                  }).catch(error => {
                    console.log('Cache open failed:', error);
                  });
                }
              `
            }}
          />
        )}
        
        {/* Register service worker for PWA functionality */}
        <ServiceWorkerRegistration />
        
        {/* PWA Install Prompt */}
        <InstallPrompt />
        
        {/* Performance Monitoring */}
        <PerformanceMonitor />
      </body>
    </html>
  );
}