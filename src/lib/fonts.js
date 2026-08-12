// =============================================================================
// THE LADDER - FONT CONFIGURATION
// Using Next.js next/font for optimal font loading performance
// Self-hosts fonts to eliminate external network requests
// =============================================================================

import { Instrument_Serif, Nunito_Sans } from 'next/font/google'

/**
 * Instrument Serif - display face for headings
 * High stroke contrast and dramatic italics give it a modern elegance that
 * reads as designed rather than institutional.
 *
 * It ships a single weight (400). Headings are pinned to 400 in globals.css so
 * that `font-bold` utilities cannot trigger a synthesized faux bold, and the
 * impact numerals use the sans instead, where 400 would look too delicate.
 */
export const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['400'],
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
export const fontVariables = `${instrumentSerif.variable} ${nunitoSans.variable}`

/**
 * Font class names object for individual use
 */
export const fontClasses = {
  heading: instrumentSerif.className,
  body: nunitoSans.className,
}
