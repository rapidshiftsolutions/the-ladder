import { defineType, defineField } from 'sanity'

export const impactExampleType = defineType({
  name: 'impactExample',
  title: 'Donation Impact Example',
  type: 'document',
  description: 'Shows donors what their money can do. These "Your $X can..." statements appear on the donation page and help donors understand the concrete impact of different giving levels.',
  fields: [
    defineField({
      name: 'amount',
      title: 'Dollar Amount',
      type: 'number',
      description: 'The donation amount for this example. Example: 50, 150, 300. Do NOT include the "$" sign.',
      validation: (Rule) => Rule.required().min(1).max(10000).integer(),
    }),
    defineField({
      name: 'title',
      title: 'Impact Title',
      type: 'string',
      description: 'Short title for this impact level. Example: "Transportation" or "Housing Barrier" or "Career Access"',
      validation: (Rule) => Rule.required().max(30),
    }),
    defineField({
      name: 'description',
      title: 'Impact Description',
      type: 'text',
      rows: 3,
      description: 'Explain what this amount can do. Be specific and relatable. Example: "Provides transportation so someone can get to a job interview or medical appointment"',
      validation: (Rule) => Rule.required().max(200).warning('Keep descriptions under 200 characters'),
    }),
    defineField({
      name: 'iconName',
      title: 'Icon',
      type: 'string',
      description: 'Choose an icon that represents this type of impact.',
      options: {
        list: [
          { title: 'Car (Transportation)', value: 'Car' },
          { title: 'Home (Housing)', value: 'Home' },
          { title: 'Briefcase (Employment)', value: 'Briefcase' },
          { title: 'GraduationCap (Education)', value: 'GraduationCap' },
          { title: 'Heart (Healthcare)', value: 'Heart' },
          { title: 'Utensils (Food)', value: 'Utensils' },
          { title: 'Shield (Safety/Security)', value: 'Shield' },
          { title: 'Users (Family Support)', value: 'Users' },
          { title: 'Wrench (Repairs)', value: 'Wrench' },
          { title: 'DollarSign (Financial)', value: 'DollarSign' },
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order examples appear. Lower numbers first. Typically order by amount (lowest to highest).',
      initialValue: 10,
      validation: (Rule) => Rule.integer().min(1).max(100),
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Uncheck to hide this example without deleting it.',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Amount (Low to High)',
      name: 'amountAsc',
      by: [{ field: 'amount', direction: 'asc' }],
    },
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      amount: 'amount',
      isActive: 'isActive',
    },
    prepare({ title, amount, isActive }) {
      return {
        title: `$${amount} - ${title}`,
        subtitle: isActive ? 'Active' : 'Hidden',
      }
    },
  },
})
