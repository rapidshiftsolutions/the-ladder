import {LockIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const warrantyType = defineType({
  name: 'warranty',
  title: 'Warranty',
  type: 'document',
  icon: LockIcon,
  fields: [
    defineField({
      name: 'service',
      title: 'Service Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'service',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'warrantyPeriod',
      title: 'Warranty Period',
      type: 'string',
      description: 'e.g., "12 months/12,000 miles", "90 days"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'coverage',
      title: 'What\'s Covered',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Detailed Description',
      type: 'blockContent',
      description: 'Full warranty terms and conditions',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon to represent this warranty type',
      options: {
        list: [
          {title: 'Lock', value: 'LockIcon'},
          {title: 'Checkmark Circle', value: 'CheckmarkCircleIcon'},
          {title: 'Checkmark', value: 'CheckmarkIcon'},
          {title: 'Clock', value: 'ClockIcon'},
          {title: 'Wrench', value: 'WrenchIcon'},
        ]
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'conditions',
      title: 'Warranty Conditions',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of conditions that must be met',
    }),
    defineField({
      name: 'exclusions',
      title: 'Exclusions',
      type: 'array',
      of: [{type: 'string'}],
      description: 'What\'s not covered by the warranty',
    }),
    defineField({
      name: 'relatedServices',
      title: 'Related Services',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'service'}],
        }),
      ],
      description: 'Services this warranty applies to',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which warranty appears in listings',
      initialValue: 0,
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Is this warranty currently offered?',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'service',
      subtitle: 'warrantyPeriod',
      active: 'active',
    },
    prepare(selection) {
      const {title, subtitle, active} = selection
      return {
        ...selection,
        subtitle: `${subtitle} ${!active ? '(Inactive)' : ''}`,
      }
    },
  },
})