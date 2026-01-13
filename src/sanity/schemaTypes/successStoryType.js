import { defineType, defineField } from 'sanity'

export const successStoryType = defineType({
  name: 'successStory',
  title: 'Success Story',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
      description: 'First name only or pseudonym for privacy',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'story',
      title: 'Their Story',
      type: 'text',
      rows: 6,
      description: 'The full story of how The Ladder helped this person',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'barrier',
      title: 'Barrier Type',
      type: 'string',
      options: {
        list: [
          { title: 'Housing', value: 'housing' },
          { title: 'Employment', value: 'employment' },
          { title: 'Transportation', value: 'transportation' },
          { title: 'Education/Training', value: 'education' },
          { title: 'Healthcare', value: 'healthcare' },
          { title: 'Legal', value: 'legal' },
          { title: 'Financial', value: 'financial' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'outcome',
      title: 'Outcome',
      type: 'string',
      description: 'Brief description of the positive outcome',
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Story',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'barrier', media: 'image' },
  },
})
