import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env.js'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  // Public published reads do not need a token. Keep write tokens server-only
  // via getSanityWriteClient() so they are never shipped to the browser.
  withCredentials: false,
  requestTimeout: 30000,
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