// Import Sanity V3 components
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

// Import environment variables
import {apiVersion, dataset, projectId, studioAllowedOrigins} from './src/sanity/env.js'
import {schema} from './src/sanity/schemaTypes/index.js'

// The Ladder logo component
const TheLadderLogo = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontWeight: 'bold',
      padding: '0.5rem'
    }}>
      <div style={{
        width: '32px',
        height: '32px',
        background: '#2C3E50',
        color: '#FFFFFF',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '14px'
      }}>
        TL
      </div>
      <span style={{ 
        color: '#2C3E50',
        fontSize: '18px',
        fontWeight: 'bold'
      }}>
        The Ladder CMS
      </span>
    </div>
  )
}

// Structure definition for The Ladder nonprofit content
const theLadderStructure = (S) => {
  return S.list()
    .title('Content')
    .items([
      // Content Section
      S.listItem()
        .title('Success Stories')
        .child(
          S.documentList()
            .title('Success Stories')
            .filter('_type == "successStory"')
            .defaultOrdering([{field: 'order', direction: 'asc'}, {field: 'featured', direction: 'desc'}])
        ),
      S.listItem()
        .title('Team Members')
        .child(
          S.documentList()
            .title('Team Members')
            .filter('_type == "teamMember"')
            .defaultOrdering([{field: 'order', direction: 'asc'}])
        ),
      S.listItem()
        .title('Partner Organizations')
        .child(
          S.documentList()
            .title('Partner Organizations')
            .filter('_type == "partnerOrganization"')
            .defaultOrdering([{field: 'featured', direction: 'desc'}, {field: 'order', direction: 'asc'}])
        ),
      S.listItem()
        .title('Events')
        .child(
          S.documentList()
            .title('Events')
            .filter('_type == "event"')
            .defaultOrdering([{field: 'date', direction: 'desc'}])
        ),
      S.listItem()
        .title('Blog Posts')
        .child(
          S.documentList()
            .title('Blog Posts')
            .filter('_type == "blogPost"')
            .defaultOrdering([{field: 'publishedAt', direction: 'desc'}])
        ),
      S.listItem()
        .title('Annual Reports')
        .child(
          S.documentList()
            .title('Annual Reports')
            .filter('_type == "annualReport"')
            .defaultOrdering([{field: 'year', direction: 'desc'}])
        ),
      
      // Divider
      S.divider(),
      
      // Settings Section
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Site Settings')
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                ),
              S.listItem()
                .title('Donation Settings')
                .child(
                  S.document()
                    .schemaType('donationSettings')
                    .documentId('donationSettings')
                ),
              S.listItem()
                .title('Guest Portal Settings')
                .child(
                  S.document()
                    .schemaType('guestPortalSettings')
                    .documentId('guestPortalSettings')
                ),
              S.listItem()
                .title('SEO Settings')
                .child(
                  S.document()
                    .schemaType('seoSettings')
                    .documentId('seoSettings')
                ),
            ])
        ),
      
      // Legacy content (can be removed after migration)
      S.divider(),
      S.listItem()
        .title('Legacy Content')
        .child(
          S.list()
            .title('Legacy Content')
            .items([
              S.listItem()
                .title('Posts')
                .child(
                  S.documentList()
                    .title('Posts')
                    .filter('_type == "post"')
                ),
              S.listItem()
                .title('Testimonials')
                .child(
                  S.documentList()
                    .title('Testimonials')
                    .filter('_type == "testimonial"')
                ),
            ])
        ),
    ])
}

// Updated config with The Ladder branding
export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'The Ladder Content Management',
  schema,
  useCdn: false,
  studio: {
    components: {
      logo: TheLadderLogo,
    }
  },
  theme: {
    // The Ladder brand colors
    '--brand-primary': '#2C3E50',
    '--brand-secondary': '#E74C3C',
    '--main-navigation-color': '#FFFFFF',
    '--main-navigation-color--inverted': '#2C3E50',
  },
  plugins: [
    structureTool({
      structure: theLadderStructure
    }),
    // Only include Vision tool in development
    process.env.NODE_ENV === 'development' ? 
      visionTool({defaultApiVersion: apiVersion}) : 
      undefined
  ].filter(Boolean),
  cors: {
    allowOrigins: studioAllowedOrigins || [],
    allowCredentials: true,
  },
  auth: {
    loginMethod: 'token',
    redirectOnSingle: true
  },
})
