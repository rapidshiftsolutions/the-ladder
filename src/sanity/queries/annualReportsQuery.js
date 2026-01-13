import { groq } from 'next-sanity'

// Query to get all annual reports
export const allAnnualReportsQuery = groq`
  *[_type == "annualReport"] | order(year desc) {
    _id,
    year,
    title,
    pdfFile {
      asset-> {
        _id,
        url,
        originalFilename,
        size
      }
    },
    coverImage {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    highlights,
    summary,
    publishedAt
  }
`

// Query to get the most recent annual report
export const latestAnnualReportQuery = groq`
  *[_type == "annualReport"] | order(year desc) [0] {
    _id,
    year,
    title,
    pdfFile {
      asset-> {
        _id,
        url,
        originalFilename,
        size
      }
    },
    coverImage {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    highlights,
    summary,
    publishedAt
  }
`

// Query to get annual report by year
export const annualReportByYearQuery = groq`
  *[_type == "annualReport" && year == $year][0] {
    _id,
    year,
    title,
    pdfFile {
      asset-> {
        _id,
        url,
        originalFilename,
        size
      }
    },
    coverImage {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    highlights,
    summary,
    publishedAt
  }
`
