// Core content types
import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { authorType } from './authorType'

// Legacy types (from previous project - can be removed after full migration)
import { postType } from './postType'
import { eventType } from './eventType'
import { eventCategoryType } from './eventCategoryType'
import { merchType } from './merchType'
import { galleryType } from './galleryType'
import { serviceType } from './serviceType'
import { servicePackageType } from './servicePackageType'
import { specialType } from './specialType'
import { warrantyType } from './warrantyType'
import { testimonialType } from './testimonialType'
import { businessInfoType } from './businessInfoType'

// The Ladder nonprofit schemas - Content
import { successStoryType } from './successStoryType'
import { teamMemberType } from './teamMemberType'
import { partnerOrganizationType } from './partnerOrganizationType'
import { blogPostType } from './blogPostType'
import { annualReportType } from './annualReportType'

// The Ladder nonprofit schemas - Homepage & Pages
import { homepageContentType } from './homepageContentType'
import { processStepType } from './processStepType'
import { faqType } from './faqType'
import { impactExampleType } from './impactExampleType'

// The Ladder nonprofit schemas - Settings (singleton documents)
import { siteSettingsType } from './siteSettingsType'
import { donationSettingsType } from './donationSettingsType'
import { guestPortalSettingsType } from './guestPortalSettingsType'
import { seoSettingsType } from './seoSettingsType'

export const schema = {
  types: [
    // Core
    blockContentType,
    categoryType,
    authorType,
    
    // The Ladder nonprofit schemas - Content (primary)
    successStoryType,
    teamMemberType,
    partnerOrganizationType,
    blogPostType,
    annualReportType,
    
    // The Ladder nonprofit schemas - Homepage & Pages
    homepageContentType,
    processStepType,
    faqType,
    impactExampleType,
    
    // The Ladder nonprofit schemas - Settings
    siteSettingsType,
    donationSettingsType,
    guestPortalSettingsType,
    seoSettingsType,
    
    // Legacy types (hidden in studio, kept for data migration)
    postType,
    eventType,
    eventCategoryType,
    merchType,
    galleryType,
    serviceType,
    servicePackageType,
    specialType,
    warrantyType,
    testimonialType,
    businessInfoType,
  ],
}
