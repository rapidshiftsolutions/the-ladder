import { defineType, defineField } from 'sanity'

export const partnerOrganizationType = defineType({
  name: 'partnerOrganization',
  title: 'Partner Organization',
  type: 'document',
  description: 'Nonprofit partners, community organizations, and government agencies you work with. These appear on the Partners page and demonstrate your collaborative approach.',
  groups: [
    { name: 'organization', title: 'Organization Info', default: true },
    { name: 'contact', title: 'Contact Details' },
    { name: 'display', title: 'Display Options' },
  ],
  fields: [
    // Organization Info Group
    defineField({
      name: 'name',
      title: 'Organization Name',
      type: 'string',
      group: 'organization',
      description: 'The official name of the partner organization. Example: "Grace Klein Community" or "Birmingham Housing Authority"',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'logo',
      title: 'Organization Logo',
      type: 'image',
      group: 'organization',
      description: 'Their logo. Recommended: PNG with transparent background, at least 200x200px. If no logo is available, an icon will be shown instead.',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Description for accessibility. Example: "Grace Klein Community logo"',
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      group: 'organization',
      description: 'Brief description of what this organization does and how you partner with them. 1-2 sentences. Example: "Provides food assistance and clothing to families in need. Refers clients to The Ladder when facing barriers outside their scope."',
      validation: (Rule) => Rule.max(300).warning('Keep descriptions concise'),
    }),
    defineField({
      name: 'category',
      title: 'Service Category',
      type: 'string',
      group: 'organization',
      description: 'What type of services does this organization primarily provide? This helps organize partners on the page.',
      options: {
        list: [
          { title: 'Housing (shelters, housing programs)', value: 'housing' },
          { title: 'Employment (job training, placement)', value: 'employment' },
          { title: 'Healthcare (medical, mental health)', value: 'healthcare' },
          { title: 'Legal Services (legal aid, advocacy)', value: 'legal' },
          { title: 'Food/Clothing (food banks, clothing closets)', value: 'food' },
          { title: 'Education (schools, training programs)', value: 'education' },
          { title: 'Financial Services (credit counseling, banking)', value: 'financial' },
          { title: 'Transportation (transit, vehicle programs)', value: 'transportation' },
          { title: 'Government Agency (city, county, state)', value: 'government' },
          { title: 'Faith-Based (churches, religious orgs)', value: 'faith' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),

    // Contact Details Group
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
      group: 'contact',
      description: 'Full URL to their website. Example: https://www.gracekleincommunity.com',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      group: 'contact',
      description: 'Main contact phone number. Format: (XXX) XXX-XXXX',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      group: 'contact',
      description: 'General or referral contact email for this organization.',
      validation: (Rule) => Rule.email().error('Please enter a valid email'),
    }),
    defineField({
      name: 'contactName',
      title: 'Primary Contact Name',
      type: 'string',
      group: 'contact',
      description: 'Name of your main contact at this organization. For internal reference.',
    }),

    // Display Options Group
    defineField({
      name: 'featured',
      title: 'Featured Partner',
      type: 'boolean',
      group: 'display',
      description: 'Featured partners appear in the logo bar at the top of the Partners page. Recommend featuring 4-6 key partners.',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      group: 'display',
      description: 'Controls the order within their category. Lower numbers appear first.',
      initialValue: 10,
      validation: (Rule) => Rule.integer().min(1).max(100),
    }),
    defineField({
      name: 'isActive',
      title: 'Active Partnership',
      type: 'boolean',
      group: 'display',
      description: 'Uncheck if the partnership is no longer active. This hides them from the website.',
      initialValue: true,
    }),
    defineField({
      name: 'partnerSince',
      title: 'Partner Since',
      type: 'date',
      group: 'display',
      description: 'When you started partnering with this organization. Optional.',
    }),
  ],
  orderings: [
    {
      title: 'Featured First, then Name',
      name: 'featuredName',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'name', direction: 'asc' },
      ],
    },
    {
      title: 'Category, then Order',
      name: 'categoryOrder',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
    {
      title: 'Name (A-Z)',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
  preview: {
    select: { 
      title: 'name', 
      category: 'category', 
      media: 'logo',
      featured: 'featured',
      isActive: 'isActive',
    },
    prepare({ title, category, media, featured, isActive }) {
      const categoryLabels = {
        housing: 'Housing',
        employment: 'Employment',
        healthcare: 'Healthcare',
        legal: 'Legal',
        food: 'Food/Clothing',
        education: 'Education',
        financial: 'Financial',
        transportation: 'Transportation',
        government: 'Government',
        faith: 'Faith-Based',
        other: 'Other',
      }
      return {
        title: title,
        subtitle: `${categoryLabels[category] || category}${featured ? ' • Featured' : ''}${!isActive ? ' • Inactive' : ''}`,
        media: media,
      }
    },
  },
})
