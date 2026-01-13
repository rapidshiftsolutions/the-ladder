import { defineType, defineField } from 'sanity'

export const successStoryType = defineType({
  name: 'successStory',
  title: 'Success Story',
  type: 'document',
  description: 'Stories of individuals whose barriers were removed by The Ladder. These inspire donors and help those seeking assistance see what\'s possible.',
  groups: [
    { name: 'story', title: 'Story Details', default: true },
    { name: 'display', title: 'Display Options' },
  ],
  fields: [
    // Story Details Group
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
      group: 'story',
      description: 'First name and last initial only (e.g., "Sarah M." or "James W.") to protect privacy. You can also use a pseudonym with their permission.',
      validation: (Rule) => Rule.required().max(50).warning('Keep names brief for privacy'),
    }),
    defineField({
      name: 'barrier',
      title: 'Barrier Type',
      type: 'string',
      group: 'story',
      description: 'What category of barrier did this person face? This helps visitors find relevant stories and helps you track impact across categories.',
      options: {
        list: [
          { title: 'Housing (rent, deposits, repairs)', value: 'housing' },
          { title: 'Employment (work requirements, training)', value: 'employment' },
          { title: 'Transportation (car repairs, bus passes)', value: 'transportation' },
          { title: 'Education/Training (tuition, certifications)', value: 'education' },
          { title: 'Healthcare (medical costs, equipment)', value: 'healthcare' },
          { title: 'Legal (documents, fees)', value: 'legal' },
          { title: 'Financial (debt, banking)', value: 'financial' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'story',
      title: 'Their Story',
      type: 'text',
      rows: 6,
      group: 'story',
      description: 'Write 2-4 sentences describing their situation, what barrier they faced, and how The Ladder helped. Keep it personal but protect sensitive details. Example: "Sarah was working hard to get back on her feet when her car broke down unexpectedly. The Ladder covered her car repair costs within 48 hours, allowing her to keep working..."',
      validation: (Rule) => Rule.required()
        .min(100).error('Please provide at least 100 characters to tell their story')
        .max(800).warning('Consider keeping stories under 800 characters for readability'),
    }),
    defineField({
      name: 'outcome',
      title: 'Outcome',
      type: 'string',
      group: 'story',
      description: 'Brief summary of the positive result. Focus on where they are now. Example: "Maintained employment, purchased home, now mentors others"',
      validation: (Rule) => Rule.max(150).warning('Keep outcomes concise'),
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      group: 'story',
      description: 'Optional photo of the client (with their written permission). Recommended: Head/shoulders shot, at least 400x400px. Photos with faces are more impactful but not required.',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Describe the photo for accessibility. Example: "Sarah smiling in front of her new home"',
        },
        {
          name: 'hasConsent',
          type: 'boolean',
          title: 'Photo consent obtained',
          description: 'Confirm that the client has given written permission to use their photo.',
        },
      ],
    }),

    // Display Options Group
    defineField({
      name: 'featured',
      title: 'Featured Story',
      type: 'boolean',
      group: 'display',
      description: 'Featured stories appear prominently on the homepage and success stories page. Recommend featuring 2-3 of your most compelling stories.',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      group: 'display',
      description: 'Controls the order stories appear in lists. Lower numbers appear first. Leave blank to sort by date.',
      validation: (Rule) => Rule.integer().min(1).max(100),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      group: 'display',
      description: 'When this story was published. Used for sorting and displaying "Helped in 2023" context.',
      initialValue: () => new Date().toISOString().split('T')[0],
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      group: 'display',
      description: 'Uncheck to hide this story from the website without deleting it. Useful if a client requests removal.',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Featured First, then Date',
      name: 'featuredDate',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'publishedAt', direction: 'desc' },
      ],
    },
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { 
      title: 'name', 
      barrier: 'barrier', 
      media: 'image',
      featured: 'featured',
      isActive: 'isActive',
    },
    prepare({ title, barrier, media, featured, isActive }) {
      const barrierLabels = {
        housing: 'Housing',
        employment: 'Employment',
        transportation: 'Transportation',
        education: 'Education',
        healthcare: 'Healthcare',
        legal: 'Legal',
        financial: 'Financial',
        other: 'Other',
      }
      return {
        title: title,
        subtitle: `${barrierLabels[barrier] || barrier}${featured ? ' • Featured' : ''}${!isActive ? ' • Hidden' : ''}`,
        media: media,
      }
    },
  },
})
