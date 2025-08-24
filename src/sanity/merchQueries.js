import { groq } from 'next-sanity'
import { client } from './lib/client'

// Base merch projection
const merchProjection = `{
  _id,
  title,
  slug {
    current
  },
  price,
  category,
  sizes,
  colors,
  description,
  featured,
  inStock,
  popular,
  sortOrder,
  publishedAt,
  mainImage {
    asset->,
    alt
  },
  gallery[] {
    asset->,
    alt
  }
}`

// Get all merchandise
export async function getAllMerch() {
  return client.fetch(
    groq`*[_type == "merch" && inStock == true] | order(sortOrder asc, title asc) ${merchProjection}`
  )
}

// Get merchandise by category
export async function getMerchByCategory(category) {
  return client.fetch(
    groq`*[_type == "merch" && category == $category && inStock == true] | order(sortOrder asc, title asc) ${merchProjection}`,
    { category }
  )
}

// Get featured merchandise
export async function getFeaturedMerch(limit = 6) {
  return client.fetch(
    groq`*[_type == "merch" && featured == true && inStock == true] | order(sortOrder asc, title asc) [0...$limit] ${merchProjection}`,
    { limit }
  )
}

// Get popular merchandise
export async function getPopularMerch(limit = 8) {
  return client.fetch(
    groq`*[_type == "merch" && popular == true && inStock == true] | order(sortOrder asc, title asc) [0...$limit] ${merchProjection}`,
    { limit }
  )
}

// Get all merchandise categories
export async function getMerchCategories() {
  const categories = await client.fetch(
    groq`*[_type == "merch" && inStock == true] {
      category
    } | order(category asc)`
  )
  
  // Get unique categories
  const uniqueCategories = [...new Set(categories.map(item => item.category).filter(Boolean))]
  
  // Return formatted categories with titles
  const categoryMap = {
    'tshirts': 'T-Shirts',
    'hoodies': 'Hoodies & Sweatshirts', 
    'hats': 'Hats & Caps',
    'decals': 'Decals & Stickers',
    'accessories': 'Accessories',
    'kids': 'Kids'
  }
  
  return uniqueCategories.map(cat => ({
    value: cat,
    title: categoryMap[cat] || cat
  }))
}

// Get single merchandise item by slug
export async function getMerchItem(slug) {
  return client.fetch(
    groq`*[_type == "merch" && slug.current == $slug][0] ${merchProjection}`,
    { slug }
  )
}

// Get merchandise count
export async function getMerchCount() {
  return client.fetch(
    groq`count(*[_type == "merch" && inStock == true])`
  )
}

// Get merchandise count by category
export async function getMerchCountByCategory(category) {
  return client.fetch(
    groq`count(*[_type == "merch" && category == $category && inStock == true])`,
    { category }
  )
}