/**
 * Image optimization utilities for English Mountain Raceway
 * Provides consistent image sizing and loading strategies
 */

// Standard image sizes for racing website
export const imageSizes = {
  // Hero backgrounds - full viewport
  hero: "100vw",
  
  // Gallery images - responsive grid
  gallery: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  
  // Content images - two column layout
  content: "(max-width: 1024px) 100vw, 50vw",
  
  // Card images - three column grid
  card: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  
  // Logo and small assets
  logo: "(max-width: 640px) 200px, 300px",
  
  // Merchandise images
  merch: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
};

// Quality settings for different image types
export const imageQuality = {
  // Hero images - high quality for impact
  hero: 90,
  
  // Gallery images - high quality for detail
  gallery: 85,
  
  // Content images - balanced quality
  content: 80,
  
  // Thumbnails and cards - optimized for loading
  thumbnail: 75,
  
  // Background images - lower quality acceptable
  background: 70
};

// Loading strategies
export const loadingStrategy = {
  // Above the fold - load immediately
  priority: true,
  
  // Below the fold - lazy load
  lazy: false
};

/**
 * Get optimized image props for different contexts
 */
export function getImageProps(context, src, alt) {
  const props = {
    src,
    alt,
    sizes: imageSizes[context] || imageSizes.content,
    quality: imageQuality[context] || imageQuality.content,
  };

  // Add priority for hero images
  if (context === 'hero') {
    props.priority = true;
  }

  return props;
}

/**
 * Racing-specific image optimization
 */
export const racingImageConfig = {
  // Event images - optimized for social sharing
  event: {
    sizes: "(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 600px",
    quality: 85,
    priority: false
  },
  
  // Car images - high detail for racing enthusiasts
  car: {
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px",
    quality: 90,
    priority: false
  },
  
  // Track images - wide viewport coverage
  track: {
    sizes: "100vw",
    quality: 85,
    priority: false
  }
};