import {CommentIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: CommentIcon,
  fields: [
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., "Newport, TN"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5),
      options: {
        list: [
          {title: '5 Stars', value: 5},
          {title: '4 Stars', value: 4},
          {title: '3 Stars', value: 3},
          {title: '2 Stars', value: 2},
          {title: '1 Star', value: 1},
        ]
      },
    }),
    defineField({
      name: 'date',
      title: 'Review Date',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'review',
      title: 'Review Text',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'serviceUsed',
      title: 'Service Used',
      type: 'reference',
      to: [{type: 'service'}],
      description: 'Which service did the customer use?',
    }),
    defineField({
      name: 'servicePackageUsed',
      title: 'Service Package Used',
      type: 'reference',
      to: [{type: 'servicePackage'}],
      description: 'Or which package did they purchase?',
    }),
    defineField({
      name: 'customerImage',
      title: 'Customer Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ],
      description: 'Optional customer photo',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      description: 'Show this testimonial prominently',
      initialValue: false,
    }),
    defineField({
      name: 'verified',
      title: 'Verified Customer',
      type: 'boolean',
      description: 'Has this review been verified?',
      initialValue: false,
    }),
    defineField({
      name: 'source',
      title: 'Review Source',
      type: 'string',
      options: {
        list: [
          {title: 'Direct', value: 'direct'},
          {title: 'Google', value: 'google'},
          {title: 'Facebook', value: 'facebook'},
          {title: 'Yelp', value: 'yelp'},
        ]
      },
      initialValue: 'direct',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which testimonial appears',
      initialValue: 0,
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Show this testimonial on the site?',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'customerName',
      subtitle: 'review',
      rating: 'rating',
      featured: 'featured',
      active: 'active',
    },
    prepare(selection) {
      const {title, subtitle, rating, featured, active} = selection
      const stars = '⭐'.repeat(rating || 0)
      return {
        title,
        subtitle: `${stars} ${featured ? '(Featured)' : ''} ${!active ? '(Hidden)' : ''} - ${subtitle?.substring(0, 50)}...`,
      }
    },
  },
})