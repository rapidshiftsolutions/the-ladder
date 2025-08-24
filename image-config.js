// This file configures automated image optimization for Netlify deployments
// It will automatically compress and convert images to WebP format when possible

const imageConfig = {
  images: {
    // Use modern image formats with better compression
    formats: ['image/webp', 'image/avif'],
    // Set reasonable default qualities
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 768, 1024, 1280, 1600],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Configure quality settings
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default imageConfig;