import {CalendarIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'title',
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
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'isRecurring',
      title: 'Is Recurring Event',
      type: 'boolean',
      description: 'Check this if the event repeats on a regular schedule',
      initialValue: false,
    }),
    // defineField({
    //   name: 'recurringDates',
    //   title: 'Recurring Dates',
    //   type: 'recurringDates',
    //   description: 'Configure when this event repeats',
    //   hidden: ({document}) => !document?.isRecurring,
    // }),
    defineField({
      name: 'endDate',
      title: 'Recurring End Date',
      type: 'date',
      description: 'When should the recurring event stop? (optional)',
      hidden: ({document}) => !document?.isRecurring,
    }),
    defineField({
      name: 'eventTime',
      title: 'Event Time',
      type: 'string',
      description: 'Time of day for the event (e.g., "7:00 PM", "Gates open at 5:00 PM")',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'racingType',
      title: 'Racing Type',
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
      name: 'status',
      title: 'Event Status',
      type: 'string',
      options: {
        list: [
          {title: 'Upcoming', value: 'upcoming'},
          {title: 'In Progress', value: 'in-progress'},
          {title: 'Completed', value: 'completed'},
          {title: 'Cancelled', value: 'cancelled'},
          {title: 'Postponed', value: 'postponed'},
        ]
      },
      initialValue: 'upcoming',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'registrationUrl',
      title: 'Registration URL',
      type: 'url',
      description: 'Link to event registration form or page',
    }),
    defineField({
      name: 'resultsUrl',
      title: 'Results URL',
      type: 'url',
      description: 'Link to event results (for completed events)',
    }),
    defineField({
      name: 'mainImage',
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
      ]
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      rows: 3,
      description: 'Brief description of the event',
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured Event',
      description: 'Show this event in the featured section',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      eventDate: 'eventDate',
      status: 'status',
      racingType: 'racingType',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title, eventDate, status, racingType} = selection
      
      const date = eventDate ? new Date(eventDate).toLocaleDateString() : 'No date'
      const subtitle = `${date} - ${racingType || 'No type'} - ${status}`
      return {...selection, subtitle}
    },
  },
})