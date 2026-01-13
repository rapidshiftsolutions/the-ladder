import { groq } from 'next-sanity'

// Query to get all success stories
export const allSuccessStoriesQuery = groq`
  *[_type == "successStory"] | order(order asc, featured desc, publishedAt desc) {
    _id,
    name,
    story,
    barrier,
    outcome,
    image {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    featured,
    order,
    publishedAt
  }
`

// Query to get featured success stories for homepage
export const featuredSuccessStoriesQuery = groq`
  *[_type == "successStory" && featured == true] | order(order asc, publishedAt desc) [0...3] {
    _id,
    name,
    story,
    barrier,
    outcome,
    image {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    publishedAt
  }
`

// Query to get a single success story by ID
export const successStoryByIdQuery = groq`
  *[_type == "successStory" && _id == $id][0] {
    _id,
    name,
    story,
    barrier,
    outcome,
    image {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    featured,
    publishedAt
  }
`
