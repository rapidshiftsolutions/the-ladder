import { groq } from 'next-sanity'

// Query to get all team members
export const allTeamMembersQuery = groq`
  *[_type == "teamMember" && active == true] | order(order asc, memberType asc) {
    _id,
    name,
    title,
    organization,
    bio,
    image {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    linkedin,
    email,
    memberType,
    order,
    active
  }
`

// Query to get board members only
export const boardMembersQuery = groq`
  *[_type == "teamMember" && memberType == "board" && active == true] | order(order asc) {
    _id,
    name,
    title,
    organization,
    bio,
    image {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    linkedin,
    email,
    order
  }
`

// Query to get staff members only
export const staffMembersQuery = groq`
  *[_type == "teamMember" && memberType == "staff" && active == true] | order(order asc) {
    _id,
    name,
    title,
    organization,
    bio,
    image {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    linkedin,
    email,
    order
  }
`

// Query to get a single team member by ID
export const teamMemberByIdQuery = groq`
  *[_type == "teamMember" && _id == $id][0] {
    _id,
    name,
    title,
    organization,
    bio,
    image {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    linkedin,
    email,
    memberType,
    order
  }
`
