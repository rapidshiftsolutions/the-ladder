# CLAUDE.md - Website Rebuild Specification

## Project Overview

Build a competitive infotainment repair service website positioning as a cost-effective alternative to infotainment.com, offering digitizer replacements at $400 (vs. their $799) and LCD replacements at $550 (vs. their $1199).

## Business Information (from OEM Radio Repair)

**Company Details:**
- Phone: +1 (205) 522-1162
- Email: info@oemradiorepair.com
- Address: 2413 1st Ave S, Birmingham, AL 35233
- Founded by: Alex Harmon
- Heritage: Multi-generational family business in car audio industry

## Core Design Requirements (Based on Infotainment.com Analysis)

### 1. Site Architecture

**Single Domain Structure:**
- All services and products under one main domain
- No subdomains required

**Primary Navigation:**
- Shop by Vehicle Make (prioritize Dodge/Chrysler/Jeep/Cadillac)
- Repair Services
- Replacement Services
- Support/Resources
- About Us
- Contact

### 2. Vehicle Selection System

**Implementation Requirements:**
- Year/Make/Model dropdown selectors
- 17-digit VIN verification system
- Automatic compatibility checking
- QR code support for option codes

**Priority Vehicle Coverage:**
- **Dodge**: Charger (2011-2014), Journey (2011-2019), Challenger, Durango
- **Chrysler**: 300 (2011-2014), Pacifica, Voyager
- **Jeep**: Wrangler JL (2018-2023), Grand Cherokee WK (2014-2022), Compass (2017-2021)
- **Cadillac**: CTS, ATS, Escalade (expand based on market research)
- **Ram**: 1500, 2500/3500 HD

### 2.1 Vehicle Database Management

**Centralized Vehicle List:**
- Store a comprehensive vehicle list in the codebase (e.g., `vehicleDatabase.js` or `vehicles.json`)
- Structure should include: Year, Make, Model, Trim levels, Compatible screen types
- This single source of truth will be used for:
  1. **Dynamic Page Generation**: Automatically create individual SEO-optimized pages for each supported vehicle
  2. **Form Population**: Populate all vehicle selection dropdowns throughout the site
  3. **Compatibility Checking**: Validate user selections against supported models

**Example Vehicle Data Structure:**
```javascript
{
  "vehicles": [
    {
      "make": "Dodge",
      "model": "Charger",
      "years": ["2011", "2012", "2013", "2014"],
      "screenType": "Uconnect 8.4",
      "services": ["digitizer", "lcd"],
      "slug": "dodge-charger-2011-2014"
    }
  ]
}
```

**Dynamic Page Generation:**
- Generate SEO-friendly URLs: `/repair/[make]/[model]/[year-range]`
- Example: `/repair/dodge/charger/2011-2014`
- Each page will include vehicle-specific repair information, pricing, and compatibility details

### 3. Service Offerings Structure

**Primary Services:**
1. **Digitizer Replacement - $400**
   - Touchscreen responsiveness issues
   - Cracked digitizer glass
   - Ghost touching problems
   
2. **LCD Replacement - $550**
   - Screen display issues
   - Pixel damage
   - Backlight problems

**Service Process Flow:**
1. Vehicle selection (Year/Make/Model)
2. Problem identification
3. Service selection with transparent pricing
4. Mail-in instructions generation
5. Prepaid shipping label creation
6. Order tracking system

### 4. Key Features to Implement

**Customer Trust Elements:**
- Compatibility Guarantee badge
- 1-year warranty prominently displayed
- Free shipping on repairs (both ways)
- 2-3 day turnaround commitment
- 20-point inspection included

**Technical Features:**
- VIN decoder integration
- Automated repair authorization forms
- Real-time order tracking
- Customer portal for repair status
- Installation difficulty ratings (1-5 scale)

### 5. Design Specifications

**Visual Design:**
- Clean, professional automotive aesthetic
- Mobile-first responsive design
- High-quality product photography
- Technical specification tables
- Star rating system for reviews

**UI Components:**
- Sticky navigation header
- Vehicle selector widget
- Price comparison table (You vs. Competitors)
- Trust badges and certifications
- Live chat widget

### 6. Content Requirements

**Product/Service Pages Must Include:**
- Compatible vehicle list with years
- Technical specifications
- Installation difficulty rating
- Common problems solved
- Before/after repair examples
- Customer reviews section
- Video tutorials (YouTube embeds)

**Essential Pages:**
- Homepage with value proposition
- How It Works (step-by-step process)
- Pricing (transparent comparison)
- Shipping Information
- Warranty & Guarantees
- About Us (family heritage story)
- Contact (multiple methods)
- FAQ Section

### 7. Competitive Advantages to Highlight

**Pricing Comparison Table:**
| Service | Your Price | Infotainment.com | Savings |
|---------|-----------|------------------|---------|
| Digitizer Replacement | $400 | $799 | $399 (50%) |
| LCD Replacement | $550 | $1199 | $649 (54%) |

**Additional Value Props:**
- Family-owned with decades of experience
- Free 2-way shipping
- 2-3 day turnaround
- 1-year warranty
- No core charges
- Nationwide service

### 8. Technical Implementation

**Backend Requirements:**
- VIN decoder API integration
- Shipping label generation (FedEx/UPS API)
- Order management system
- Customer communication system
- Inventory tracking
- Repair ticket system
- Dynamic route generation from vehicle database

**Frontend Stack Recommendations:**
- React/Next.js for performance and dynamic page generation
- Tailwind CSS for styling
- Headless CMS for content
- Cloudinary for image optimization
- Stripe/PayPal for payments

**Vehicle Database Implementation:**
- Centralized vehicle configuration file
- Build-time page generation for all supported vehicles
- Runtime form population from the same data source
- Automatic sitemap generation for vehicle pages
- Type-safe vehicle data handling

### 9. SEO & Marketing Strategy

**Target Keywords:**
- "[Vehicle Make] infotainment repair"
- "[Vehicle Model] touchscreen replacement"
- "Uconnect screen repair"
- "Cheap infotainment repair"
- "[City] car radio repair"

**Dynamic SEO Pages:**
- Auto-generated pages for each vehicle in the database
- URL structure: `/repair/[make]/[model]/[year-range]`
- Each page optimized for "[Year] [Make] [Model] infotainment repair"
- Programmatic meta descriptions and titles
- Schema markup for automotive repair services

**Content Marketing:**
- DIY troubleshooting guides
- Common infotainment problems blog
- Video repair tutorials
- Customer success stories

### 10. Customer Service Integration

**Multi-Channel Support:**
- Phone: Prominent display of (205) 522-1162
- Email: info@oemradiorepair.com
- Live chat during business hours
- Support ticket system
- FAQ with search functionality

### 11. Conversion Optimization

**Trust Signals:**
- BBB accreditation badge
- Google reviews widget
- Security badges (SSL, payment)
- Warranty guarantee badges
- Free shipping banners
- Money-back guarantee

**Call-to-Actions:**
- "Get Free Repair Quote"
- "Check Your Vehicle Compatibility"
- "Start Your Repair"
- "Calculate Your Savings"

### 12. Performance Requirements

- Page load time < 3 seconds
- Mobile score > 90 (Google PageSpeed)
- Accessibility WCAG 2.1 AA compliant
- Cross-browser compatibility
- CDN implementation for images

## Implementation Priority

1. **Phase 1 (MVP):**
   - Basic site with vehicle selector
   - Service pages with pricing
   - Order flow with shipping labels
   - Contact information

2. **Phase 2:**
   - Customer portal
   - Advanced vehicle compatibility
   - Review system
   - Live chat

3. **Phase 3:**
   - Video tutorials
   - Advanced diagnostics tools
   - Affiliate program
   - B2B portal

## Success Metrics

- Conversion rate > 3%
- Average order value > $450
- Customer satisfaction > 95%
- Repeat customer rate > 20%
- Average turnaround time < 3 days

## Notes for Development Team

1. Emphasize the 50%+ savings throughout the site
2. Use infotainment.com's vehicle compatibility system as reference but simplify the UX
3. Implement A/B testing for pricing display formats
4. Ensure mobile experience is flawless (50%+ traffic expected)
5. Build email automation for order updates
6. Create shareable success stories for social proof
7. **Vehicle Database Maintenance:**
   - Keep the vehicle list in a single, version-controlled file
   - Use TypeScript interfaces for type safety
   - Include a admin tool or script to validate vehicle data
   - Set up automated tests to ensure all vehicle pages generate correctly
   - Plan for easy addition of new vehicles as the business expands

This specification provides a comprehensive blueprint for building a competitive infotainment repair service that undercuts major competitors while maintaining quality and building trust through transparency and excellent service.
