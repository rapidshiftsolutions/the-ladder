import {HomeIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const businessInfoType = defineType({
  name: 'businessInfo',
  title: 'Business Information',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'OEM Radio Repair',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Business tagline or slogan',
      initialValue: 'Expert Infotainment Repair at Unbeatable Prices',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: '(205) 522-1162',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: Rule => Rule.email(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        defineField({
          name: 'street',
          title: 'Street Address',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: '2413 1st Ave S',
        }),
        defineField({
          name: 'city',
          title: 'City',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: 'Birmingham',
        }),
        defineField({
          name: 'state',
          title: 'State',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: 'AL',
        }),
        defineField({
          name: 'zip',
          title: 'ZIP Code',
          type: 'string',
          validation: Rule => Rule.required(),
          initialValue: '35233',
        }),
      ],
    }),
    defineField({
      name: 'hours',
      title: 'Business Hours',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'day',
              title: 'Day',
              type: 'string',
              options: {
                list: [
                  {title: 'Monday', value: 'monday'},
                  {title: 'Tuesday', value: 'tuesday'},
                  {title: 'Wednesday', value: 'wednesday'},
                  {title: 'Thursday', value: 'thursday'},
                  {title: 'Friday', value: 'friday'},
                  {title: 'Saturday', value: 'saturday'},
                  {title: 'Sunday', value: 'sunday'},
                ]
              },
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'openTime',
              title: 'Opening Time',
              type: 'string',
              description: 'e.g., "8:00 AM"',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'closeTime',
              title: 'Closing Time',
              type: 'string',
              description: 'e.g., "6:00 PM"',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'closed',
              title: 'Closed',
              type: 'boolean',
              description: 'Is the business closed this day?',
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: 'day',
              open: 'openTime',
              close: 'closeTime',
              closed: 'closed',
            },
            prepare(selection) {
              const {title, open, close, closed} = selection
              const dayTitle = title.charAt(0).toUpperCase() + title.slice(1)
              return {
                title: dayTitle,
                subtitle: closed ? 'Closed' : `${open} - ${close}`,
              }
            },
          },
        }),
      ],
      validation: Rule => Rule.required().length(7),
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        defineField({
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter/X URL',
          type: 'url',
        }),
        defineField({
          name: 'youtube',
          title: 'YouTube URL',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Google Maps URL',
      type: 'url',
      description: 'Link to Google Maps location',
    }),
    defineField({
      name: 'aboutDescription',
      title: 'About Description',
      type: 'blockContent',
      description: 'About the business for the About page',
    }),
    defineField({
      name: 'values',
      title: 'Company Values',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Value Title',
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
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  {title: 'Lock', value: 'LockIcon'},
                  {title: 'Clock', value: 'ClockIcon'},
                  {title: 'Wrench', value: 'WrenchIcon'},
                  {title: 'Star', value: 'StarIcon'},
                  {title: 'Heart', value: 'HeartIcon'},
                  {title: 'Check', value: 'CheckIcon'},
                ]
              },
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'certifications',
      title: 'Certifications',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Certification Name',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'logo',
              title: 'Certification Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'validUntil',
              title: 'Valid Until',
              type: 'date',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              media: 'logo',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'businessName',
      subtitle: 'tagline',
    },
  },
})