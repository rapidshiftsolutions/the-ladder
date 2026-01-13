// Core content types
import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { authorType } from './authorType'

// Legacy types (from previous project)
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

// The Ladder nonprofit schemas
import { successStoryType } from './successStoryType'
import { teamMemberType } from './teamMemberType'
import { partnerOrganizationType } from './partnerOrganizationType'
import { blogPostType } from './blogPostType'
import { annualReportType } from './annualReportType'
import { siteSettingsType } from './siteSettingsType'
import { donationSettingsType } from './donationSettingsType'
import { guestPortalSettingsType } from './guestPortalSettingsType'

export const schema = {
  types: [
    // Core
    blockContentType,
    categoryType,
    authorType,
    
    // The Ladder nonprofit schemas (primary)
    successStoryType,
    teamMemberType,
    partnerOrganizationType,
    blogPostType,
    annualReportType,
    siteSettingsType,
    donationSettingsType,
    guestPortalSettingsType,
    
    // Legacy types
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
