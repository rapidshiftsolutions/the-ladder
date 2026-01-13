import { defineType, defineField } from 'sanity'

export const seoSettingsType = defineType({
  name: 'seoSettings',
  title: 'SEO Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'defaultTitle',
      title: 'Default Page Title',
      type: 'string',
      description: 'Default title template for pages without specific SEO titles',
      initialValue: 'The Ladder - Birmingham Nonprofit Removing Barriers to Success',
    }),
    defineField({
      name: 'defaultDescription',
      title: 'Default Meta Description',
      type: 'text',
      rows: 2,
      description: 'Default description for pages without specific SEO descriptions (155 chars max)',
      validation: (Rule) => Rule.max(155),
      initialValue: 'The Ladder helps Birmingham residents overcome specific barriers preventing their success. 501(c)(3) nonprofit providing crisis intervention, emergency assistance, and individual support through community partnerships.',
    }),
    defineField({
      name: 'ogImage',
      title: 'Default Open Graph Image',
      type: 'image',
      description: 'Default image for social media sharing (1200x630px recommended)',
      options: { hotspot: true },
    }),
    defineField({
      name: 'keywords',
      title: 'Default Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Default SEO keywords for the site',
      initialValue: [
        'Birmingham nonprofit',
        'donate to nonprofit Birmingham',
        'Birmingham Alabama charity',
        'crisis intervention Alabama',
        'emergency assistance Birmingham',
        'barrier removal',
        'nonprofit Birmingham AL',
      ],
    }),
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
      description: 'Canonical site URL',
      initialValue: 'https://the-ladder.org',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'SEO Settings' }
    },
  },
})
