import {PackageIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const servicePackageType = defineType({
  name: 'servicePackage',
  title: 'Service Package',
  type: 'document',
  icon: PackageIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Package Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Package Price',
      type: 'string',
      description: 'e.g., "$149.99"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'originalPrice',
      title: 'Original Price',
      type: 'string',
      description: 'Sum of individual services (e.g., "$199.99")',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'savings',
      title: 'Savings Amount',
      type: 'string',
      description: 'e.g., "$50"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Total Duration',
      type: 'string',
      description: 'e.g., "60-90 minutes"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Package Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'detailedDescription',
      title: 'Detailed Description',
      type: 'blockContent',
      description: 'Full package description for the package page',
    }),
    defineField({
      name: 'image',
      title: 'Package Image',
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
      name: 'services',
      title: 'Included Services',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'service',
              title: 'Service',
              type: 'reference',
              to: [{type: 'service'}],
            }),
            defineField({
              name: 'customDescription',
              title: 'Custom Description',
              type: 'string',
              description: 'Override the default service description if needed',
            }),
          ],
          preview: {
            select: {
              title: 'service.title',
              subtitle: 'customDescription',
            },
          },
        }),
      ],
      validation: Rule => Rule.required().min(2),
    }),
    defineField({
      name: 'benefits',
      title: 'Package Benefits',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of benefits or value propositions',
      validation: Rule => Rule.required().min(3).max(5),
    }),
    defineField({
      name: 'popular',
      title: 'Popular Package',
      type: 'boolean',
      description: 'Mark as a popular/recommended package',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which package appears in listings',
      initialValue: 0,
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Is this package currently offered?',
      initialValue: true,
    }),
    defineField({
      name: 'validFrom',
      title: 'Valid From',
      type: 'datetime',
      description: 'When this package becomes available',
    }),
    defineField({
      name: 'validUntil',
      title: 'Valid Until',
      type: 'datetime',
      description: 'When this package expires (optional)',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
      media: 'image',
      popular: 'popular',
      active: 'active',
    },
    prepare(selection) {
      const {title, subtitle, popular, active} = selection
      return {
        ...selection,
        subtitle: `${subtitle} ${popular ? '⭐ Popular' : ''} ${!active ? '(Inactive)' : ''}`,
      }
    },
  },
})