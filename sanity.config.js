// Import Sanity V3 components
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {
  StarIcon,
  UsersIcon,
  CogIcon,
  DocumentTextIcon,
  CalendarIcon,
  ChartUpwardIcon,
  HomeIcon,
  HelpCircleIcon,
  CreditCardIcon,
  BlockContentIcon,
  RocketIcon,
  LinkIcon,
  EarthGlobeIcon,
  LockIcon,
  WarningOutlineIcon,
} from '@sanity/icons'

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
        background: 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)',
        color: '#FFFFFF',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '14px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        TL
      </div>
      <span style={{ 
        color: '#2C3E50',
        fontSize: '16px',
        fontWeight: '600'
      }}>
        The Ladder CMS
      </span>
    </div>
  )
}

// Structure definition for The Ladder nonprofit content
const theLadderStructure = (S) => {
  return S.list()
    .title('The Ladder')
    .items([
      // ==========================================
      // CONTENT SECTION - Stories, People, Partners
      // ==========================================
      S.listItem()
        .title('Content')
        .icon(BlockContentIcon)
        .child(
          S.list()
            .title('Content')
            .items([
              S.listItem()
                .title('Success Stories')
                .icon(StarIcon)
                .schemaType('successStory')
                .child(
                  S.documentList()
                    .title('Success Stories')
                    .filter('_type == "successStory"')
                    .defaultOrdering([{field: 'featured', direction: 'desc'}, {field: 'order', direction: 'asc'}])
                    .menuItems([
                      S.orderingMenuItem({title: 'Featured First', by: [{field: 'featured', direction: 'desc'}]}),
                      S.orderingMenuItem({title: 'Display Order', by: [{field: 'order', direction: 'asc'}]}),
                      S.orderingMenuItem({title: 'Newest First', by: [{field: 'publishedAt', direction: 'desc'}]}),
                    ])
                ),
              S.listItem()
                .title('Team Members')
                .icon(UsersIcon)
                .schemaType('teamMember')
                .child(
                  S.documentList()
                    .title('Team Members')
                    .filter('_type == "teamMember"')
                    .defaultOrdering([{field: 'memberType', direction: 'asc'}, {field: 'order', direction: 'asc'}])
                    .menuItems([
                      S.orderingMenuItem({title: 'By Type & Order', by: [{field: 'memberType', direction: 'asc'}, {field: 'order', direction: 'asc'}]}),
                      S.orderingMenuItem({title: 'Name (A-Z)', by: [{field: 'name', direction: 'asc'}]}),
                    ])
                ),
              S.listItem()
                .title('Partner Organizations')
                .icon(LinkIcon)
                .schemaType('partnerOrganization')
                .child(
                  S.documentList()
                    .title('Partner Organizations')
                    .filter('_type == "partnerOrganization"')
                    .defaultOrdering([{field: 'featured', direction: 'desc'}, {field: 'category', direction: 'asc'}, {field: 'order', direction: 'asc'}])
                    .menuItems([
                      S.orderingMenuItem({title: 'Featured First', by: [{field: 'featured', direction: 'desc'}]}),
                      S.orderingMenuItem({title: 'By Category', by: [{field: 'category', direction: 'asc'}]}),
                      S.orderingMenuItem({title: 'Name (A-Z)', by: [{field: 'name', direction: 'asc'}]}),
                    ])
                ),
              S.divider(),
              S.listItem()
                .title('Blog Posts')
                .icon(DocumentTextIcon)
                .schemaType('blogPost')
                .child(
                  S.documentList()
                    .title('Blog Posts')
                    .filter('_type == "blogPost"')
                    .defaultOrdering([{field: 'publishedAt', direction: 'desc'}])
                ),
              S.listItem()
                .title('Annual Reports')
                .icon(ChartUpwardIcon)
                .schemaType('annualReport')
                .child(
                  S.documentList()
                    .title('Annual Reports')
                    .filter('_type == "annualReport"')
                    .defaultOrdering([{field: 'year', direction: 'desc'}])
                ),
              S.listItem()
                .title('Events')
                .icon(CalendarIcon)
                .schemaType('event')
                .child(
                  S.documentList()
                    .title('Events')
                    .filter('_type == "event"')
                    .defaultOrdering([{field: 'date', direction: 'desc'}])
                ),
            ])
        ),

      S.divider(),
      
      // ==========================================
      // HOMEPAGE & PAGES - Page-specific content
      // ==========================================
      S.listItem()
        .title('Homepage & Pages')
        .icon(HomeIcon)
        .child(
          S.list()
            .title('Homepage & Pages')
            .items([
              S.listItem()
                .title('Homepage Content')
                .icon(HomeIcon)
                .child(
                  S.document()
                    .schemaType('homepageContent')
                    .documentId('homepageContent')
                    .title('Homepage Content')
                ),
              S.listItem()
                .title('Process Steps')
                .icon(RocketIcon)
                .schemaType('processStep')
                .child(
                  S.documentList()
                    .title('Process Steps ("How It Works")')
                    .filter('_type == "processStep"')
                    .defaultOrdering([{field: 'stepNumber', direction: 'asc'}])
                ),
              S.listItem()
                .title('FAQs')
                .icon(HelpCircleIcon)
                .schemaType('faq')
                .child(
                  S.documentList()
                    .title('Frequently Asked Questions')
                    .filter('_type == "faq"')
                    .defaultOrdering([{field: 'category', direction: 'asc'}, {field: 'order', direction: 'asc'}])
                    .menuItems([
                      S.orderingMenuItem({title: 'By Category', by: [{field: 'category', direction: 'asc'}, {field: 'order', direction: 'asc'}]}),
                      S.orderingMenuItem({title: 'Display Order', by: [{field: 'order', direction: 'asc'}]}),
                    ])
                ),
              S.listItem()
                .title('Donation Impact Examples')
                .icon(CreditCardIcon)
                .schemaType('impactExample')
                .child(
                  S.documentList()
                    .title('Donation Impact Examples')
                    .filter('_type == "impactExample"')
                    .defaultOrdering([{field: 'amount', direction: 'asc'}])
                ),
            ])
        ),
      
      S.divider(),
      
      // ==========================================
      // SETTINGS - Global site configuration
      // ==========================================
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Site Settings')
                .icon(CogIcon)
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                    .title('Site Settings')
                ),
              S.listItem()
                .title('Donation Settings')
                .icon(CreditCardIcon)
                .child(
                  S.document()
                    .schemaType('donationSettings')
                    .documentId('donationSettings')
                    .title('Donation Settings')
                ),
              S.listItem()
                .title('SEO Settings')
                .icon(EarthGlobeIcon)
                .child(
                  S.document()
                    .schemaType('seoSettings')
                    .documentId('seoSettings')
                    .title('SEO Settings')
                ),
              S.listItem()
                .title('Guest Portal Settings')
                .icon(LockIcon)
                .child(
                  S.document()
                    .schemaType('guestPortalSettings')
                    .documentId('guestPortalSettings')
                    .title('Guest Portal Settings')
                ),
            ])
        ),
      
      S.divider(),
      
      // ==========================================
      // LEGACY CONTENT - Old schemas (hidden by default)
      // ==========================================
      S.listItem()
        .title('Legacy Content')
        .icon(WarningOutlineIcon)
        .child(
          S.list()
            .title('Legacy Content (Can Be Removed)')
            .items([
              S.listItem()
                .title('Posts (Legacy)')
                .child(
                  S.documentList()
                    .title('Posts')
                    .filter('_type == "post"')
                ),
              S.listItem()
                .title('Testimonials (Legacy)')
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
