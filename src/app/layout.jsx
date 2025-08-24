// layout.jsx (Server Component)
import '/src/styles/tailwind.css';
import localFont from 'next/font/local';
import Script from 'next/script';
import DOMOptimizer from '/src/components/DOMOptimizer';
import ErrorBoundary from '/src/components/ErrorBoundary';
import ServiceWorkerRegistration from '/src/components/ServiceWorkerRegistration';
import InstallPrompt from '/src/components/InstallPrompt';
import PerformanceMonitor from '/src/components/PerformanceMonitor';


// Load OEM Radio Repair fonts
const inter = localFont({
  src: [
    {
      path: '../../public/OEMRadioRepair/fonts/Inter-VariableFont_opsz,wght.ttf',
      style: 'normal',
    },
    {
      path: '../../public/OEMRadioRepair/fonts/Inter-Italic-VariableFont_opsz,wght.ttf',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
});

const tiltWarp = localFont({
  src: [
    {
      path: '../../public/OEMRadioRepair/fonts/TiltWarp-Regular-VariableFont_XROT,YROT.ttf',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-tiltwarp',
  preload: true,
  fallback: ['Arial', 'sans-serif'],
});

// Use TiltWarp for headings and decorative text
const headingFont = {
  variable: '--font-heading',
};

// Keep legacy variables for compatibility
const exo2 = tiltWarp; // Map old exo2 to TiltWarp
const anton = tiltWarp; // Map old anton to TiltWarp
const lacquer = tiltWarp; // Map old lacquer to TiltWarp

export const metadata = {
  title: {
    template: '%s | OEM Radio Repair',
    default: 'OEM Radio Repair - Save 50% on Infotainment Screen Repair',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.oemradiorepair.com'),
  description: 'Professional infotainment repair: Digitizer replacement $400 (vs $799), LCD replacement $550 (vs $1199). Free shipping, 2-3 day turnaround, 1-year warranty. Dodge, Chrysler, Jeep, Cadillac specialists.',
  keywords: ['infotainment repair', 'touchscreen repair', 'Uconnect repair', 'car screen repair', 'digitizer replacement', 'LCD replacement', 'Dodge infotainment', 'Chrysler infotainment', 'Jeep infotainment', 'Cadillac CUE repair'],
  authors: [{ name: 'OEM Radio Repair', url: 'https://www.oemradiorepair.com' }],
  creator: 'OEM Radio Repair',
  publisher: 'OEM Radio Repair',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.oemradiorepair.com',
    siteName: 'OEM Radio Repair',
    title: 'OEM Radio Repair - Save 50% on Infotainment Screen Repair',
    description: 'Professional infotainment repair: Digitizer $400, LCD $550. Free shipping, 2-3 day turnaround, 1-year warranty. Call (205) 522-1162',
    images: [
      {
        url: '/meta.png',
        width: 1200,
        height: 630,
        alt: 'OEM Radio Repair - Professional Infotainment Screen Repair Service',
        type: 'image/png',
      },
      {
        url: '/meta.png',
        width: 1200,
        height: 1200,
        alt: 'OEM Radio Repair Square Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OEM Radio Repair - Save 50% on Infotainment Repair',
    description: 'Digitizer $400 | LCD $550 | Free Shipping | 2-3 Day Turnaround | 1-Year Warranty',
    site: '@oemradiorepair',
    creator: '@oemradiorepair',
    images: {
      url: '/meta.png',
      alt: 'OEM Radio Repair - Professional Infotainment Screen Repair',
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
    title: 'OEM Radio Repair',
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
        color: '#1890ff',
      },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://www.oemradiorepair.com',
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
  category: 'automotive',
};

// Add viewport export with themeColor
// Use on-demand revalidation instead of force-dynamic
// This is more stable and less prone to serialization errors
export const revalidate = 60; // Revalidate once per minute at most

export const viewport = {
  themeColor: '#1890ff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${tiltWarp.variable} ${exo2.variable} ${anton.variable} ${lacquer.variable}`}>
      <head>
        {/* Premium Sharing Meta Tags for Text/SMS/Social */}
        <meta property="og:rich_attachment" content="true" />
        <meta name="format-detection" content="telephone=yes" />
        
        {/* Apple-specific enhancements for iMessage */}
        <meta name="apple-mobile-web-app-title" content="OEM Radio Repair" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <link rel="apple-touch-startup-image" href="/meta.png" />
        
        {/* WhatsApp & Telegram specific */}
        <meta property="og:image:secure_url" content="https://www.oemradiorepair.com/meta.png" />
        <meta property="og:video" content="" />
        
        {/* LinkedIn specific */}
        <meta name="linkedin:owner" content="OEM Radio Repair" />
        
        {/* Pinterest Rich Pins */}
        <meta property="article:author" content="OEM Radio Repair" />
        
        {/* Facebook specific */}
        <meta property="fb:app_id" content="" />
        <meta property="og:see_also" content="https://www.oemradiorepair.com/services" />
        
        {/* Additional Twitter Tags */}
        <meta name="twitter:app:name:iphone" content="OEM Radio Repair" />
        <meta name="twitter:app:name:ipad" content="OEM Radio Repair" />
        <meta name="twitter:app:name:googleplay" content="OEM Radio Repair" />
        
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
        <meta name="theme-color" content="#1890ff" />
        <meta name="msapplication-TileColor" content="#1890ff" />
        <meta name="msapplication-TileImage" content="/meta.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="OEM Radio Repair" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="OEM Radio Repair" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Apple touch icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data for Auto Service Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "OEM Radio Repair",
              "alternateName": "OEM Radio Repair - Infotainment Specialists",
              "description": "OEM Radio Repair is Birmingham, AL's premier infotainment repair specialist offering digitizer and LCD replacements for Dodge, Chrysler, Jeep, and Cadillac vehicles at 50% less than competitors. Expert mail-in service nationwide.",
              "url": "https://oemradiorepair.com",
              "logo": "https://oemradiorepair.com/OEMRadioRepair/logo-light.svg",
              "image": "https://oemradiorepair.com/meta.png",
              "telephone": "(205) 522-1162",
              "email": "info@oemradiorepair.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2413 1st Ave S",
                "addressLocality": "Birmingham",
                "addressRegion": "AL",
                "postalCode": "35233",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "33.5018",
                "longitude": "-86.8024"
              },
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 08:00-17:00"
              ],
              "priceRange": "$",
              "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
              "currenciesAccepted": "USD",
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "United States"
                },
                {
                  "@type": "City",
                  "name": "Birmingham",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Alabama"
                  }
                }
              ],
              "serviceType": [
                "Infotainment System Repair",
                "Digitizer Replacement",
                "LCD Screen Replacement",
                "Touchscreen Repair",
                "Uconnect Repair",
                "CUE System Repair",
                "Vehicle Electronics Repair",
                "Mail-in Repair Service",
                "Automotive Display Repair"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Auto Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Digitizer Replacement",
                      "description": "Professional digitizer replacement for touchscreen responsiveness issues, cracked glass, and ghost touching problems"
                    },
                    "price": "400",
                    "priceCurrency": "USD"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "LCD Replacement",
                      "description": "Expert LCD screen replacement for display issues, pixel damage, and backlight problems"
                    },
                    "price": "550",
                    "priceCurrency": "USD"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mail-in Repair Service",
                      "description": "Convenient nationwide mail-in service with free shipping both ways and 2-3 day turnaround"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "1-Year Warranty",
                      "description": "Comprehensive 1-year warranty on all repairs with free re-service if issues arise"
                    }
                  }
                ]
              },
              "founder": {
                "@type": "Person",
                "name": "Alex Harmon"
              },
              "sameAs": []
            })
          }}
        />
        
        {/* Critical CSS for Core Web Vitals optimization */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* Critical CSS for above-the-fold content */
          body {
            margin: 0;
            background-color: #1a1a1a;
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