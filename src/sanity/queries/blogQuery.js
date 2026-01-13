import { groq } from 'next-sanity'

// Query to get all blog posts
export const allBlogPostsQuery = groq`
  *[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    "author": author-> {
      _id,
      name,
      image {
        asset-> {
          _id,
          url
        }
      }
    },
    category,
    publishedAt,
    featured
  }
`

// Query to get featured blog posts
export const featuredBlogPostsQuery = groq`
  *[_type == "blogPost" && featured == true && defined(slug.current)] | order(publishedAt desc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    "author": author-> {
      name
    },
    category,
    publishedAt
  }
`

// Query to get a single blog post by slug
export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    content,
    "author": author-> {
      _id,
      name,
      title,
      image {
        asset-> {
          _id,
          url
        }
      }
    },
    category,
    publishedAt,
    featured
  }
`

// Query to get recent blog posts
export const recentBlogPostsQuery = groq`
  *[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc) [0...$limit] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    mainImage {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    category,
    publishedAt
  }
`
