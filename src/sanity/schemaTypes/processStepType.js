import { defineType, defineField } from 'sanity'

export const processStepType = defineType({
  name: 'processStep',
  title: 'Process Step',
  type: 'document',
  description:
    'Steps in The Ladder partnership process. These already exist in the dataset and can be edited here.',
  fields: [
    defineField({
      name: 'stepNumber',
      title: 'Step Number',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'iconName',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name, e.g. Users, Target, CheckCircle',
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Step Number',
      name: 'stepNumberAsc',
      by: [{ field: 'stepNumber', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', stepNumber: 'stepNumber' },
    prepare({ title, stepNumber }) {
      return {
        title: title || 'Untitled step',
        subtitle: stepNumber ? `Step ${stepNumber}` : 'Process step',
      }
    },
  },
})
