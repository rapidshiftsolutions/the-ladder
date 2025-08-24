import {ImagesIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Photo Gallery',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Gallery Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          {title: 'No Prep Racing', value: 'no-prep'},
          {title: 'Grudge Racing', value: 'grudge'},
          {title: 'Bracket Racing', value: 'bracket'},
          {title: 'Test & Tune', value: 'test-tune'},
          {title: 'Jr. Dragster', value: 'jr-dragster'},
          {title: 'Car Show', value: 'car-show'},
          {title: 'Special Event', value: 'special'},
        ]
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
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
      name: 'photos',
      title: 'Gallery Photos',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Describe what is in the photo (e.g., "Red Camaro at starting line", "Winner celebrating")',
            }),
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Optional caption for the photo',
            }),
            defineField({
              name: 'photographer',
              type: 'string',
              title: 'Photographer',
              description: 'Photo credit (optional)',
            }),
            defineField({
              name: 'category',
              type: 'string',
              title: 'Photo Category',
              options: {
                list: [
                  {title: 'Race Cars', value: 'race-cars'},
                  {title: 'Racers', value: 'racers'},
                  {title: 'Action Shots', value: 'action'},
                  {title: 'Winners', value: 'winners'},
                  {title: 'Pit Area', value: 'pit'},
                  {title: 'Crowd', value: 'crowd'},
                  {title: 'Track', value: 'track'},
                  {title: 'Other', value: 'other'},
                ]
              },
              initialValue: 'race-cars',
            }),
          ]
        })
      ],
      validation: Rule => Rule.min(1).error('At least one photo is required'),
    }),
    defineField({
      name: 'description',
      title: 'Event Description',
      type: 'text',
      rows: 3,
      description: 'Brief description of the event and photos',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Gallery',
      type: 'boolean',
      description: 'Show this gallery prominently on the gallery page',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'downloadEnabled',
      title: 'Enable Downloads',
      type: 'boolean',
      description: 'Allow visitors to download high-resolution versions of photos',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      eventDate: 'eventDate',
      eventType: 'eventType',
      photoCount: 'photos',
      media: 'coverImage',
    },
    prepare(selection) {
      const {title, eventDate, eventType, photoCount} = selection
      
      const date = eventDate ? new Date(eventDate).toLocaleDateString() : 'No date'
      const count = photoCount ? photoCount.length : 0
      const subtitle = `${date} - ${eventType || 'No type'} - ${count} photos`
      
      return {...selection, subtitle}
    },
  },
  orderings: [
    {
      title: 'Event Date (Newest First)',
      name: 'eventDateDesc',
      by: [
        {field: 'eventDate', direction: 'desc'}
      ]
    },
    {
      title: 'Event Date (Oldest First)',
      name: 'eventDateAsc',
      by: [
        {field: 'eventDate', direction: 'asc'}
      ]
    },
    {
      title: 'Published Date',
      name: 'publishedAt',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    },
    {
      title: 'Event Type',
      name: 'eventType',
      by: [
        {field: 'eventType', direction: 'asc'},
        {field: 'eventDate', direction: 'desc'}
      ]
    }
  ]
})