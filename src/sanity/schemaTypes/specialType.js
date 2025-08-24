import {StarIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const specialType = defineType({
  name: 'special',
  title: 'Special Offer',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Offer Title',
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
      name: 'discount',
      title: 'Discount',
      type: 'string',
      description: 'e.g., "20% OFF", "$10 OFF", "FREE"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Offer Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'details',
      title: 'Offer Details',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Terms, conditions, and what\'s included',
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'image',
      title: 'Offer Image',
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
      name: 'applicableServices',
      title: 'Applicable Services',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'service'}],
        }),
      ],
      description: 'Which services this offer applies to',
    }),
    defineField({
      name: 'couponCode',
      title: 'Coupon Code',
      type: 'string',
      description: 'Optional coupon code for the offer',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Offer',
      type: 'boolean',
      description: 'Show this offer prominently on the site',
      initialValue: false,
    }),
    defineField({
      name: 'validFrom',
      title: 'Valid From',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'expiresAt',
      title: 'Expires At',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'termsAndConditions',
      title: 'Terms and Conditions',
      type: 'text',
      description: 'Fine print for the offer',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which offer appears in listings',
      initialValue: 0,
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Is this offer currently active?',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'discount',
      media: 'image',
      featured: 'featured',
      active: 'active',
      expiresAt: 'expiresAt',
    },
    prepare(selection) {
      const {title, subtitle, featured, active, expiresAt} = selection
      const expires = expiresAt ? new Date(expiresAt).toLocaleDateString() : 'No expiry'
      return {
        ...selection,
        subtitle: `${subtitle} | Expires: ${expires} ${featured ? '⭐' : ''} ${!active ? '(Inactive)' : ''}`,
      }
    },
  },
})