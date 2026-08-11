// layout.jsx (Server Component)
import './globals.css';
import DOMOptimizer from '/src/components/DOMOptimizer';
import ErrorBoundary from '/src/components/ErrorBoundary';
import AppLoadingProvider from '/src/components/AppLoadingProvider';
import DeferredComponents from '/src/components/DeferredComponents';
import { fontVariables } from '/src/lib/fonts';
import GivebutterScript from '@/components/givebutter/GivebutterScript';
import GivebutterFloating from '@/components/givebutter/GivebutterFloating';
import { client } from '@/sanity/lib/client';
import { donationSettingsQuery } from '@/sanity/queries/donationSettingsQuery';
import { DEFAULT_DONATION_SETTINGS } from '@/lib/donationDefaults';

// Friendly & Approachable Design - Lora + Nunito Sans
// Fonts are now self-hosted via next/font for optimal performance

export const metadata = {
  title: {
    template: '%s | The Ladder',
    default: 'The Ladder - Birmingham Nonprofit Helping Individuals Overcome Barriers',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://the-ladder.org'),
  description: 'The Ladder is a Birmingham, Alabama 501(c)(3) nonprofit helping individuals overcome barriers to success. We partner with local organizations to provide crisis intervention, emergency assistance, and personalized support.',
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
    title: 'The Ladder - Birmingham Nonprofit Helping Individuals Overcome Barriers',
    description: 'Birmingham 501(c)(3) helping individuals overcome barriers through crisis intervention and community partnerships. Apply for help or donate today.',
    images: [
      {
        url: '/meta.png',
        width: 1200,
        height: 630,
        alt: 'The Ladder - Birmingham Nonprofit',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ladder - Birmingham Nonprofit Helping Individuals Overcome Barriers',
    description: 'Crisis Intervention | Emergency Assistance | Individual Support | 501(c)(3)',
    site: '@theladder_bham',
    creator: '@theladder_bham',
    images: {
      url: '/meta.png',
      alt: 'The Ladder - Birmingham Nonprofit',
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'The Ladder',
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
        color: '#1B4F72',
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

export const revalidate = 60;

export const viewport = {
  themeColor: '#1B4F72',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default async function RootLayout({ children }) {
  let givebutterAccountId = DEFAULT_DONATION_SETTINGS.givebutterAccountId

  try {
    const donationSettings = await client.fetch(donationSettingsQuery)
    if (donationSettings?.givebutterAccountId) {
      givebutterAccountId = donationSettings.givebutterAccountId
    }
  } catch (error) {
    console.error('Error fetching Givebutter settings for layout:', error)
  }

  return (
    <html lang="en" className={fontVariables}>
      <head>
        {/* Character encoding - must be in first 1024 bytes */}
        <meta charSet="utf-8" />
        
        
        {/* Premium Sharing Meta Tags */}
        <meta property="og:rich_attachment" content="true" />
        <meta name="format-detection" content="telephone=yes" />
        
        {/* Apple-specific enhancements */}
        <meta name="apple-mobile-web-app-title" content="The Ladder" />
        <meta name="apple-touch-fullscreen" content="yes" />
        
        {/* Social sharing images */}
        <meta property="og:image:secure_url" content="https://the-ladder.org/meta.png" />

        {/* Resource hints for Sanity CDN + Givebutter */}
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://widgets.givebutter.com" />
        <link rel="preconnect" href="https://widgets.givebutter.com" />

        {/* Without JS the splash can never fade out — hide it */}
        <noscript>
          <style>{`.loading-screen{display:none!important}`}</style>
        </noscript>
        
        {/* PWA meta tags */}
        <meta name="theme-color" content="#1B4F72" />
        <meta name="msapplication-TileColor" content="#1B4F72" />
        <meta name="msapplication-TileImage" content="/meta.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="The Ladder" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="The Ladder" />
        
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
              "telephone": "+1-205-522-1162",
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
              "taxID": "82-0737087",
              "foundingDate": "2021",
              "knowsAbout": [
                "Crisis Intervention",
                "Barrier Removal",
                "Emergency Assistance",
                "Individual Support",
                "Community Partnerships"
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
                      "description": "Immediate support for individuals facing personal crises"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Emergency Assistance",
                      "description": "Help with housing, employment, financial, health, and legal barriers"
                    }
                  }
                ]
              },
              "slogan": "Helping individuals overcome barriers to success",
              "sameAs": [
                "https://instagram.com/theladder_bham"
              ]
            })
          }}
        />
        
        {/* Critical CSS - Uses CSS variables from next/font */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* Critical CSS for above-the-fold content.
             Scoped to @layer base so Tailwind utilities still win. */
          @layer base {
          body {
            margin: 0;
            background-color: #FFFFFF;
            color: #1C2833;
            font-family: var(--font-body), 'Nunito Sans', system-ui, -apple-system, sans-serif;
            line-height: 1.625;
            overflow-x: hidden;
            font-size: 16px;
            -webkit-text-size-adjust: 100%;
            -webkit-font-smoothing: antialiased;
          }
          
          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-heading), 'Lora', Georgia, serif;
            font-weight: 700;
            line-height: 1.25;
            color: inherit;
            margin: 0;
          }
          
          html {
            scrollbar-gutter: stable;
          }
          
          /* Prevent layout shift */
          img, video {
            max-width: 100%;
            height: auto;
          }
          
          /* Touch targets */
          a, button, [role="button"], input, select, textarea {
            min-height: 44px;
          }
          
          }

          /* Screen reader only */
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }
        `}} />

      </head>
      <body className="bg-white text-gray-900 antialiased">
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <ErrorBoundary>
          <AppLoadingProvider minLoadTime={600}>
            <DOMOptimizer>
              {children}
            </DOMOptimizer>
          </AppLoadingProvider>
        </ErrorBoundary>

        <GivebutterScript accountId={givebutterAccountId} />
        <GivebutterFloating />
        
        {/* Deferred non-critical components (PWA, analytics, etc.) */}
        <DeferredComponents />
      </body>
    </html>
  );
}
