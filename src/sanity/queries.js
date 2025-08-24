import { groq } from 'next-sanity';
import { client } from './lib/client';

// Query to get all categories
export async function getCategories() {
  return await client.fetch(
    groq`*[_type == "category"] {
      _id,
      title,
      "slug": slug.current,
      description
    }`
  );
}

// Query to get featured posts
export async function getFeaturedPosts() {
  return await client.fetch(
    groq`*[_type == "post" && featured == true] | order(publishedAt desc)[0...3] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      mainImage,
      "categories": categories[]->{ title, "slug": slug.current },
      "author": author->{ name, "slug": slug.current, image }
    }`
  );
}

// Add a new function to get all post years
export async function getAllPostYears() {
  const posts = await client.fetch(`
    *[_type == "post" && defined(publishedAt)] {
      "year": dateTime(publishedAt)
    } | order(year desc)
  `)
  
  // Extract unique years from posts
  const uniqueYears = [...new Set(posts.map(post => 
    new Date(post.year).getFullYear().toString()
  ))]
  
  return uniqueYears
}

// Update the getPosts function to support year filtering and search
export async function getPosts(start = 0, end = 100, category, year, searchTerm) {
  let filter = '*[_type == "post" && defined(slug.current) && defined(title)'
  
  // Base filters
  const conditions = []
  
  if (category) {
    conditions.push(`"${category}" in categories[]->slug.current`)
  }
  
  if (year) {
    conditions.push(`dateTime(publishedAt) >= dateTime("${year}-01-01T00:00:00Z") && dateTime(publishedAt) < dateTime("${parseInt(year)+1}-01-01T00:00:00Z")`)
  }
  
  if (searchTerm) {
    conditions.push(`(title match "*${searchTerm}*" || excerpt match "*${searchTerm}*" || body[].children[].text match "*${searchTerm}*")`)
  }
  
  if (conditions.length > 0) {
    filter += ` && ${conditions.join(' && ')}`
  }
  
  filter += ']'
  
  return client.fetch(
    `${filter} | order(publishedAt desc) [${start}...${end}] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      "categories": categories[]->{ title, "slug": slug.current },
      "author": author->{name, "image": image.asset->},
      "mainImage": mainImage
    }`
  )
}

// Update the getPostsCount function to support year filtering and search
export async function getPostsCount(category, year, searchTerm) {
  let filter = '*[_type == "post" && defined(slug.current) && defined(title)'
  
  const conditions = []
  
  if (category) {
    conditions.push(`"${category}" in categories[]->slug.current`)
  }
  
  if (year) {
    conditions.push(`dateTime(publishedAt) >= dateTime("${year}-01-01T00:00:00Z") && dateTime(publishedAt) < dateTime("${parseInt(year)+1}-01-01T00:00:00Z")`)
  }
  
  if (searchTerm) {
    conditions.push(`(title match "*${searchTerm}*" || excerpt match "*${searchTerm}*" || body[].children[].text match "*${searchTerm}*")`)
  }
  
  if (conditions.length > 0) {
    filter += ` && ${conditions.join(' && ')}`
  }
  
  filter += ']'
  
  return client.fetch(`count(${filter})`)
}

// Query to get a single post by slug
export async function getPost(slug) {
  return await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      body,
      excerpt,
      mainImage,
      "categories": categories[]->{ title, "slug": slug.current },
      "author": author->{ name, "slug": slug.current, image, bio },
      featured
    }`,
    { slug }
  );
}
