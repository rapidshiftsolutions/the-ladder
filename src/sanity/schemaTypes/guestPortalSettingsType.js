import { defineType, defineField } from 'sanity'

export const guestPortalSettingsType = defineType({
  name: 'guestPortalSettings',
  title: 'Guest Portal Settings',
  type: 'document',
  description:
    'Shared password and content for the invitation-only guest portal. Change the password anytime — people you invite use it to apply for sponsorship.',
  fields: [
    defineField({
      name: 'portalPassword',
      title: 'Portal Access Password',
      type: 'string',
      description:
        'Shared password given to referred individuals. Anyone with this password can log in and submit a sponsorship application. Use at least 6 characters.',
      validation: (Rule) => Rule.required().min(6),
    }),
    defineField({
      name: 'welcomeMessage',
      title: 'Welcome Message',
      type: 'text',
      rows: 3,
      description: 'Shown on the portal dashboard after login.',
      initialValue:
        "Welcome to The Ladder Guest Portal. Use the application form to request sponsorship for a specific barrier you're facing.",
    }),
    defineField({
      name: 'portalResources',
      title: 'Portal Resources',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string', title: 'Resource Title' },
          { name: 'description', type: 'text', title: 'Description', rows: 2 },
          { name: 'file', type: 'file', title: 'Downloadable File' },
          { name: 'externalLink', type: 'url', title: 'External Link' },
        ],
      }],
    }),
    defineField({
      name: 'announcements',
      title: 'Guest Announcements',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string', title: 'Announcement Title' },
          { name: 'content', type: 'text', title: 'Content', rows: 3 },
          { name: 'date', type: 'date', title: 'Date' },
          { name: 'important', type: 'boolean', title: 'Mark as Important' },
        ],
      }],
    }),
    defineField({
      name: 'sessionDuration',
      title: 'Session Duration (Days)',
      type: 'number',
      initialValue: 7,
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Guest Portal Settings' }
    },
  },
})
