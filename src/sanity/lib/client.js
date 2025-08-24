import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env.js'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  // Only use token for authenticated requests (not public reads)
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  withCredentials: false,
  requestTimeout: 30000,
  // Add ignoreBrowserTokenWarning to prevent browser token warnings
  ignoreBrowserTokenWarning: true,
})

// Create a separate client for public reads without token
export const publicClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  // No token for public reads
  withCredentials: false,
  requestTimeout: 30000,
})