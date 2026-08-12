/**
 * Canonical origin for absolute URLs (Open Graph images, canonical tags,
 * sitemap entries, JSON-LD).
 *
 * Hardcoding the-ladder.org broke link previews: that domain redirects to
 * www and returns a 400, so texted links could not load og:image and fell
 * back to the browser favicon. Netlify sets URL to whichever domain is
 * actually serving, so previews work today on the Netlify address and switch
 * over automatically once the custom domain is pointed here.
 *
 * Set NEXT_PUBLIC_SITE_URL to override.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  'https://theladder.netlify.app'
).replace(/\/$/, '')

export default SITE_URL
