// Import Sanity V3 components
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
// import {recurringDates} from 'sanity-plugin-recurring-dates'

// Import environment variables
import {apiVersion, dataset, projectId, studioAllowedOrigins} from './src/sanity/env.js'
import {schema} from './src/sanity/schemaTypes/index.js'

// Simple logo component
const OEMRadioRepairLogo = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontWeight: 'bold',
      padding: '0.5rem'
    }}>
      <div style={{
        width: '28px',
        height: '28px',
        background: '#00F228',
        color: '#111827',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
      }}>
        OR
      </div>
      <span style={{ 
        color: '#00F228',
        fontSize: '18px',
        fontWeight: 'bold'
      }}>
        OEM Radio Repair CMS
      </span>
    </div>
  )
}

// Structure definition for OEM Radio Repair content using the V3 API
const oemRadioRepairStructure = (S) => {
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Services')
        .child(
          S.documentList()
            .title('Services')
            .filter('_type == "service"')
        ),
      S.listItem()
        .title('Service Packages')
        .child(
          S.documentList()
            .title('Service Packages')
            .filter('_type == "servicePackage"')
        ),
      S.listItem()
        .title('Special Offers')
        .child(
          S.documentList()
            .title('Special Offers')
            .filter('_type == "special"')
        ),
      S.listItem()
        .title('Warranties')
        .child(
          S.documentList()
            .title('Warranties')
            .filter('_type == "warranty"')
        ),
      S.listItem()
        .title('Testimonials')
        .child(
          S.documentList()
            .title('Testimonials')
            .filter('_type == "testimonial"')
        ),
      S.listItem()
        .title('Business Info')
        .child(
          S.documentList()
            .title('Business Info')
            .filter('_type == "businessInfo"')
        ),
      S.listItem()
        .title('Posts')
        .child(
          S.documentList()
            .title('Posts')
            .filter('_type == "post"')
        ),
      S.listItem()
        .title('Categories')
        .child(
          S.documentList()
            .title('Categories')
            .filter('_type == "category"')
        ),
      S.listItem()
        .title('Authors')
        .child(
          S.documentList()
            .title('Authors')
            .filter('_type == "author"')
        ),
    ])
}

// Updated config with proper Sanity V3 structure
export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Content Management',
  schema,
  useCdn: false,
  studio: {
    components: {
      logo: OEMRadioRepairLogo,
    }
  },
  theme: {
    // Brand colors
    '--brand-primary': '#00F228',
    '--main-navigation-color': '#FFFFFF',
    '--main-navigation-color--inverted': '#00F228',
  },
  plugins: [
    structureTool({
      structure: oemRadioRepairStructure
    }),
    // recurringDates(),
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