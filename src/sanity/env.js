// Ensure these values are accessible in both development and production
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'rwpb957l'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2021-06-07'

// Add this function to check if we're in production environment
export const isProduction = process.env.NODE_ENV === 'production'

// Add a list of allowed CORS origins for your Sanity Studio
export const studioAllowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3333',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:3001',
  'http://127.0.0.1:3333',
  'https://oemradiorepair.com',
  'https://www.oemradiorepair.com'
]
