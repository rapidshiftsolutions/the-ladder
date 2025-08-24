import { NextResponse } from 'next/server';

// File extension groups for efficient matching
const STATIC_ASSETS = {
  FONTS: /\.(woff2|woff|ttf|otf)$/i,
  STYLES: /\.css$/i,
  SCRIPTS: /\.js$/i,
  IMAGES: /\.(jpg|jpeg|png|webp|avif|gif|svg)$/i,
  DOCUMENTS: /\.(pdf|doc|docx|xls|xlsx)$/i,
  MEDIA: /\.(mp4|webm|mp3)$/i
};

/**
 * Optimized middleware for handling headers and redirects
 */
export function middleware(request) {
  const url = new URL(request.url);
  const path = url.pathname;
  
  // Skip middleware for sitemaps, robots.txt, and form submissions
  if (path.includes('sitemap') || path === '/robots.txt' || request.method === 'POST') {
    return NextResponse.next();
  }
  
  // Fast path for static assets (skips case normalization)
  const isStaticAsset = Object.values(STATIC_ASSETS).some(regex => regex.test(path));
  
  // Case normalization only for non-static paths
  if (!isStaticAsset && /[A-Z]/.test(path)) {
    return NextResponse.redirect(
      new URL(path.toLowerCase(), request.url),
      301
    );
  }
  
  const response = NextResponse.next();
  
  // Set Vary header for all responses
  response.headers.set('Vary', 'Accept-Encoding');
  
  // Apply optimized caching headers based on file type
  if (isStaticAsset) {
    if (STATIC_ASSETS.FONTS.test(path)) {
      // Font optimizations
      response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'GET');
    } else if (STATIC_ASSETS.STYLES.test(path) || STATIC_ASSETS.SCRIPTS.test(path)) {
      // CSS/JS optimizations
      response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    } else if (STATIC_ASSETS.IMAGES.test(path)) {
      // Image optimizations
      response.headers.set('Cache-Control', 'public, max-age=604800');
    } else if (STATIC_ASSETS.DOCUMENTS.test(path)) {
      // Document optimizations
      response.headers.set('Cache-Control', 'public, max-age=86400');
      response.headers.set('Content-Disposition', 'inline');
    } else if (STATIC_ASSETS.MEDIA.test(path)) {
      // Media file optimizations
      response.headers.set('Cache-Control', 'public, max-age=86400');
      response.headers.set('Accept-Ranges', 'bytes');
    }
    
    // Common security header for all static assets
    response.headers.set('X-Content-Type-Options', 'nosniff');
  }
  
  return response;
}

// Optimized matcher configuration
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap|robots.txt).*)',
    '/(fonts|_next/static/media)/(.*)',
    '/_next/static/(.*)',
  ],
};