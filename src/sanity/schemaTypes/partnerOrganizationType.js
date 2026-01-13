import { defineType, defineField } from 'sanity'

export const partnerOrganizationType = defineType({
  name: 'partnerOrganization',
  title: 'Partner Organization',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Organization Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Housing', value: 'housing' },
          { title: 'Employment', value: 'employment' },
          { title: 'Healthcare', value: 'healthcare' },
          { title: 'Legal Services', value: 'legal' },
          { title: 'Food/Clothing', value: 'food' },
          { title: 'Education', value: 'education' },
          { title: 'Financial Services', value: 'financial' },
          { title: 'Transportation', value: 'transportation' },
          { title: 'Government Agency', value: 'government' },
          { title: 'Faith-Based', value: 'faith' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Partner',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'category', media: 'logo' },
  },
})
