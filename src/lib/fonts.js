// =============================================================================
// THE LADDER - FONT CONFIGURATION
// Using Next.js next/font for optimal font loading performance
// Self-hosts fonts to eliminate external network requests
// =============================================================================

import { Newsreader, Nunito_Sans } from 'next/font/google'

/**
 * Newsreader - Serif font for headings
 * A contemporary editorial serif: higher stroke contrast and refined
 * terminals read as elegant, while the open shapes keep it modern on screen.
 */
export const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  fallback: ['Georgia', 'Times New Roman', 'serif'],
  preload: true,
  adjustFontFallback: true,
})

/**
 * Nunito Sans - Sans-serif font for body text
 * Friendly, approachable, and highly readable
 * Excellent for accessibility and long-form content
 * 
 * Note: adjustFontFallback is disabled because Next.js doesn't have
 * font metrics for Nunito Sans in its database. The fallback fonts
 * are still specified and work correctly.
 */
export const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  preload: true,
  adjustFontFallback: false,
})

/**
 * Combined font class names for easy application
 * Apply to <html> or <body> element: className={fontVariables}
 */
export const fontVariables = `${newsreader.variable} ${nunitoSans.variable}`

/**
 * Font class names object for individual use
 */
export const fontClasses = {
  heading: newsreader.className,
  body: nunitoSans.className,
}
