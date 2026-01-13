import { defineType, defineField } from 'sanity'

export const annualReportType = defineType({
  name: 'annualReport',
  title: 'Annual Report',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required().min(2020).max(2030),
    }),
    defineField({
      name: 'title',
      title: 'Report Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF File',
      type: 'file',
      options: { accept: '.pdf' },
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'highlights',
      title: 'Key Highlights',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'stat', type: 'string', title: 'Statistic' },
          { name: 'label', type: 'string', title: 'Label' },
        ],
      }],
    }),
    defineField({
      name: 'summary',
      title: 'Executive Summary',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
    }),
  ],
  preview: {
    select: { title: 'title', year: 'year', media: 'coverImage' },
  },
})
