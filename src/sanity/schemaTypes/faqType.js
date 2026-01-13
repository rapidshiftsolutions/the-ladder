import { defineType, defineField } from 'sanity'

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  description: 'Frequently Asked Questions. These can be organized by category and displayed on different pages throughout the site.',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      description: 'The question as someone might ask it. Write in natural language. Example: "Is my donation tax-deductible?"',
      validation: (Rule) => Rule.required().max(150).warning('Keep questions concise and clear'),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 5,
      description: 'A clear, helpful answer. Be thorough but concise. Include specific details like your EIN for tax questions.',
      validation: (Rule) => Rule.required().max(800).warning('Keep answers under 800 characters for readability'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Which page/section should this FAQ appear on? Select the most relevant category.',
      options: {
        list: [
          { title: 'Donations & Giving', value: 'donate' },
          { title: 'Getting Help', value: 'get-help' },
          { title: 'About Us', value: 'about' },
          { title: 'For Partners', value: 'partners' },
          { title: 'Volunteering', value: 'volunteer' },
          { title: 'General', value: 'general' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order FAQs appear within their category. Lower numbers appear first. Example: 1, 2, 3...',
      initialValue: 10,
      validation: (Rule) => Rule.integer().min(1).max(100),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured FAQ',
      type: 'boolean',
      description: 'Featured FAQs may be shown more prominently or on the homepage.',
      initialValue: false,
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Uncheck to hide this FAQ from the website without deleting it.',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Category, then Order',
      name: 'categoryOrder',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'order', direction: 'asc' },
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
      title: 'question',
      category: 'category',
      isActive: 'isActive',
      isFeatured: 'isFeatured',
    },
    prepare({ title, category, isActive, isFeatured }) {
      const categoryLabels = {
        donate: 'Donations',
        'get-help': 'Getting Help',
        about: 'About',
        partners: 'Partners',
        volunteer: 'Volunteering',
        general: 'General',
      }
      return {
        title: title,
        subtitle: `${categoryLabels[category] || category}${isFeatured ? ' • Featured' : ''}${!isActive ? ' • Hidden' : ''}`,
      }
    },
  },
})
