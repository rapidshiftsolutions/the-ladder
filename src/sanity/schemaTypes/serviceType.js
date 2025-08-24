import {WrenchIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: WrenchIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Service Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Service Subtitle',
      type: 'string',
      description: 'Brief tagline for the service',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Brief description for service cards',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'longDescription',
      title: 'Detailed Description',
      type: 'blockContent',
      description: 'Full service description for the service page',
    }),
    defineField({
      name: 'startingPrice',
      title: 'Starting Price',
      type: 'string',
      description: 'e.g., "$29.99" or "Starting at $49.99"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Service Duration',
      type: 'string',
      description: 'e.g., "15 minutes", "30-45 minutes"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Service Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: Rule => Rule.required(),
        })
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Service Icon',
      type: 'string',
      description: 'Icon name for the service (e.g., "OilIcon", "BatteryIcon")',
      options: {
        list: [
          {title: 'Oil Icon', value: 'OilIcon'},
          {title: 'Filter Icon', value: 'FilterIcon'},
          {title: 'Battery Icon', value: 'BatteryIcon'},
          {title: 'Tire Icon', value: 'TireIcon'},
          {title: 'Fluid Icon', value: 'FluidIcon'},
          {title: 'Wrench Icon', value: 'WrenchIcon'},
          {title: 'Car Icon', value: 'CarIcon'},
          {title: 'Lock Icon', value: 'LockIcon'},
          {title: 'Performance Icon', value: 'PerformanceIcon'},
        ]
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of key features or benefits',
      validation: Rule => Rule.required().min(3).max(8),
    }),
    defineField({
      name: 'serviceTypes',
      title: 'Service Variations',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Type Name',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'price',
              title: 'Price',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'bestFor',
              title: 'Best For',
              type: 'string',
              description: 'e.g., "Daily drivers", "High-performance vehicles"',
              validation: Rule => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'price',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'process',
      title: 'Service Process',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'step',
              title: 'Step Title',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Step Description',
              type: 'text',
              rows: 2,
              validation: Rule => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'step',
              subtitle: 'description',
            },
          },
        }),
      ],
      description: 'Steps in the service process',
    }),
    defineField({
      name: 'faqs',
      title: 'Frequently Asked Questions',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
              validation: Rule => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'question',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'warranty',
      title: 'Warranty Information',
      type: 'object',
      fields: [
        defineField({
          name: 'period',
          title: 'Warranty Period',
          type: 'string',
          description: 'e.g., "12 months/12,000 miles"',
        }),
        defineField({
          name: 'coverage',
          title: 'What\'s Covered',
          type: 'text',
          rows: 3,
        }),
      ],
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
      validation: Rule => Rule.max(6),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which service appears in listings',
      initialValue: 0,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Service',
      type: 'boolean',
      description: 'Show this service in featured sections',
      initialValue: false,
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Is this service currently offered?',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'startingPrice',
      media: 'mainImage',
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