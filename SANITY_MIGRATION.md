# Sanity CMS Migration Guide

## Overview
This guide documents the migration of Newport Pitstop's hardcoded content to Sanity CMS for better content management.

## What Was Migrated

### 1. Services Content
- **Source**: `/src/components/services-overview-content.jsx` (lines 44-185)
- **Schema**: `serviceType.js`
- **Query**: `serviceQueries.js`
- **New Component**: `services-overview-content-cms.jsx`

**Content Migrated:**
- 14 different services with icon, title, description
- Starting price and duration
- Image paths and href links
- Features lists (3 items each)
- Service variations (4 types per service)
- Process steps (6 items)
- FAQs (3 Q&A pairs per service)
- Warranty information
- Related services

### 2. Service Packages
- **Source**: `/src/components/packages-content.jsx` (lines 39-147)
- **Schema**: `servicePackageType.js`
- **Query**: `packageQueries.js`

**Content Migrated:**
- 4 service packages with name, price, original price, savings
- Duration and description
- Image paths and popular flags
- Services lists (8-10 items each)
- Benefits lists (3-4 items each)
- Add-on services (4 items)

### 3. Special Offers
- **Source**: `/src/components/specials-content.jsx` (lines 38-66)
- **Schema**: `specialType.js`
- **Query**: `specialQueries.js`
- **New Component**: `specials-content-cms.jsx`

**Content Migrated:**
- 3 special offers with title, discount, description
- Details and expiration dates
- Image paths and featured flags
- Coupon codes and terms

### 4. Testimonials/Reviews
- **Source**: `/src/components/testimonials-reviews.jsx` (lines 5-78)
- **Schema**: `testimonialType.js`
- **Query**: `testimonialQueries.js`

**Content Migrated:**
- 8 customer reviews with customer name and location
- Rating, date, review text
- Service used information

### 5. Warranty Information
- **Source**: `/src/components/warranty-content.jsx` (lines 39-82)
- **Schema**: `warrantyType.js`
- **Query**: `warrantyQueries.js`

**Content Migrated:**
- 6 warranty types with service name and warranty period
- Coverage details and descriptions
- Icons and conditions
- Exclusions (14 items)

### 6. Business Information
- **Source**: Various files containing contact info
- **Schema**: `businessInfoType.js`
- **Query**: `businessQueries.js`

**Content Migrated:**
- Business name, tagline, phone, email, address
- Business hours (7 days)
- Social media links
- About description
- Company values (4 items)
- Certifications (4 items)

## Schema Architecture

### Core Schemas Created

1. **serviceType.js** - Main service offerings
2. **servicePackageType.js** - Bundled service packages
3. **specialType.js** - Promotional offers
4. **warrantyType.js** - Warranty information
5. **testimonialType.js** - Customer reviews
6. **businessInfoType.js** - Business details

### Schema Features

- **Validation Rules**: Required fields, min/max values
- **Rich Content**: Block content for detailed descriptions
- **Image Management**: Optimized image handling with alt text
- **Reference Relations**: Links between services, packages, and testimonials
- **Status Management**: Active/inactive flags for content
- **SEO Fields**: Slugs and meta descriptions
- **Display Control**: Order fields and featured flags

## Query System

### Query Files Created

- `serviceQueries.js` - All service-related queries
- `packageQueries.js` - Service package queries
- `specialQueries.js` - Special offer queries
- `testimonialQueries.js` - Customer review queries
- `businessQueries.js` - Business information queries
- `warrantyQueries.js` - Warranty information queries

### Query Features

- **GROQ Syntax**: Efficient GraphQL-like querying
- **Image Optimization**: Automatic image asset resolution
- **Reference Population**: Automatic relationship resolution
- **Filtering**: Active content only, date-based filtering
- **Sorting**: Configurable display order

## Helper Utilities

### `sanityHelpers.js` Functions

- `getImageUrl()` - Optimized image URLs with WebP format
- `getResponsiveImageUrls()` - Multiple sizes for responsive images
- `formatPrice()` - Consistent price formatting
- `isSpecialValid()` - Check if offers are currently valid
- `formatBusinessHours()` - Business hours display
- `getTodaysHours()` - Current day's hours
- `isBusinessOpen()` - Real-time open/closed status
- `getIconComponent()` - Dynamic icon rendering
- `truncateText()` - Text truncation for previews

## Studio Configuration

### Updated Files

- `sanity.config.js` - Updated branding and structure
- `src/sanity/schemaTypes/index.js` - Added new schemas

### Studio Features

- **Newport Pitstop Branding**: Custom logo and colors (#00F228)
- **Organized Navigation**: Grouped content types
- **Preview Fields**: Rich previews with status indicators
- **Validation**: Comprehensive field validation

## Component Migration

### Before (Hardcoded)
```jsx
const services = [
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Oil Change Services",
    description: "Professional oil changes...",
    price: "Starting at $37.49",
    // ... more hardcoded data
  }
]
```

### After (CMS-Driven)
```jsx
const [services, setServices] = useState([])

useEffect(() => {
  async function fetchServices() {
    const servicesData = await client.fetch(servicesQuery)
    setServices(servicesData)
  }
  fetchServices()
}, [])
```

## Benefits of Migration

### For Developers
- **No More Hardcoded Data**: All content managed through CMS
- **Type Safety**: Sanity schemas provide structure
- **Image Optimization**: Automatic WebP conversion and sizing
- **Real-time Updates**: Content changes reflect immediately

### For Content Managers
- **User-Friendly Interface**: Visual content editing
- **Rich Text Editing**: Block content with formatting
- **Image Management**: Upload and crop images
- **Scheduling**: Set valid dates for specials
- **Preview**: See changes before publishing

### For Business
- **Faster Updates**: No developer needed for content changes
- **Consistency**: Enforced content structure
- **SEO Optimization**: Better meta data management
- **Performance**: Optimized images and queries

## Migration Steps Completed

1. ✅ **Analyzed existing content structure**
2. ✅ **Designed Sanity schemas** 
3. ✅ **Created query system**
4. ✅ **Built helper utilities**
5. ✅ **Updated Sanity studio configuration**
6. ✅ **Created example CMS-driven components**

## Next Steps for Full Implementation

### 1. Component Updates Required
Replace these hardcoded components with CMS versions:

- [ ] `packages-content.jsx` → `packages-content-cms.jsx`
- [ ] `testimonials-reviews.jsx` → `testimonials-reviews-cms.jsx`
- [ ] `warranty-content.jsx` → `warranty-content-cms.jsx`
- [ ] `about-content.jsx` → `about-content-cms.jsx`
- [ ] Individual service pages in `/src/app/services/`

### 2. Data Population
- [ ] Access Sanity Studio at `/studio`
- [ ] Create business information document
- [ ] Add all services with images and details
- [ ] Create service packages
- [ ] Add special offers
- [ ] Input customer testimonials
- [ ] Configure warranty information

### 3. Testing
- [ ] Verify all content displays correctly
- [ ] Test image optimization
- [ ] Check mobile responsiveness
- [ ] Validate SEO meta data

### 4. Deployment
- [ ] Update production environment variables
- [ ] Train content managers on Sanity Studio
- [ ] Set up content workflows

## Studio Access

1. **Development**: `http://localhost:3001/studio`
2. **Production**: `https://yourdomain.com/studio`

## Environment Variables Required

```bash
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
SANITY_API_READ_TOKEN=your_read_token
SANITY_API_WRITE_TOKEN=your_write_token
```

## Content Management Workflow

### Adding New Services
1. Go to Studio → Services
2. Click "Create New"
3. Fill in service details
4. Upload service image
5. Add features and process steps
6. Set pricing and duration
7. Publish

### Managing Specials
1. Go to Studio → Special Offers
2. Set valid date ranges
3. Add discount details
4. Upload promotional images
5. Set featured status
6. Monitor expiration dates

### Updating Business Info
1. Go to Studio → Business Info
2. Update contact information
3. Modify business hours
4. Add certifications
5. Update social media links

This migration provides a solid foundation for content management while maintaining the performance and design quality of the Newport Pitstop website.