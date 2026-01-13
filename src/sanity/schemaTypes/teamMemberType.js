import { defineType, defineField } from 'sanity'

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  description: 'Board members, staff, and advisory board members. These appear on the Leadership Team page and help build trust with donors and partners.',
  groups: [
    { name: 'profile', title: 'Profile Information', default: true },
    { name: 'role', title: 'Role & Position' },
    { name: 'display', title: 'Display Options' },
  ],
  fields: [
    // Profile Information Group
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      group: 'profile',
      description: 'The person\'s full name as they want it displayed. Example: "John Smith" or "Dr. Jane Doe"',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: 'image',
      title: 'Headshot Photo',
      type: 'image',
      group: 'profile',
      description: 'Professional headshot photo. Recommended: Square crop, at least 400x400px, neutral background. Photos build trust and make your team relatable.',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Describe the photo for accessibility. Example: "John Smith headshot"',
        },
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 5,
      group: 'profile',
      description: 'A brief bio highlighting relevant experience, passion for the mission, and any personal connection to the cause. 2-4 sentences. Write in third person.',
      validation: (Rule) => Rule.max(500).warning('Keep bios under 500 characters'),
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn Profile URL',
      type: 'url',
      group: 'profile',
      description: 'Full URL to their LinkedIn profile. Optional but recommended for professional credibility. Example: https://linkedin.com/in/johnsmith',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      group: 'profile',
      description: 'Optional email for this team member. Only include if they want to be contacted directly.',
      validation: (Rule) => Rule.email().error('Please enter a valid email address'),
    }),

    // Role & Position Group
    defineField({
      name: 'title',
      title: 'Title/Position',
      type: 'string',
      group: 'role',
      description: 'Their role at The Ladder. Examples: "Board Chairman", "Treasurer", "Executive Director", "Advisory Board Member"',
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: 'organization',
      title: 'Day Job / Organization',
      type: 'string',
      group: 'role',
      description: 'Their primary employer or organization (if they want it displayed). Example: "Blue Cross Blue Shield of Alabama" or "Self-employed Consultant"',
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: 'memberType',
      title: 'Member Type',
      type: 'string',
      group: 'role',
      description: 'What type of team member is this? Determines which section they appear in.',
      options: {
        list: [
          { title: 'Board Member (voting member of the board)', value: 'board' },
          { title: 'Staff (paid or volunteer staff)', value: 'staff' },
          { title: 'Advisory Board (non-voting advisor)', value: 'advisory' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    // Display Options Group
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      group: 'display',
      description: 'Controls the order within their member type. Lower numbers appear first. Typically: Chairman=1, Vice Chair=2, Treasurer=3, Secretary=4, then others.',
      initialValue: 10,
      validation: (Rule) => Rule.integer().min(1).max(100),
    }),
    defineField({
      name: 'active',
      title: 'Currently Active',
      type: 'boolean',
      group: 'display',
      description: 'Uncheck when someone leaves the organization. This hides them from the website without deleting their record.',
      initialValue: true,
    }),
    defineField({
      name: 'joinedDate',
      title: 'Date Joined',
      type: 'date',
      group: 'display',
      description: 'When this person joined the team. Optional but useful for tracking tenure.',
    }),
  ],
  orderings: [
    {
      title: 'Member Type, then Order',
      name: 'typeOrder',
      by: [
        { field: 'memberType', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Name (A-Z)',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
  preview: {
    select: { 
      title: 'name', 
      position: 'title',
      memberType: 'memberType',
      media: 'image',
      active: 'active',
    },
    prepare({ title, position, memberType, media, active }) {
      const typeLabels = {
        board: 'Board',
        staff: 'Staff',
        advisory: 'Advisory',
      }
      return {
        title: title,
        subtitle: `${position || 'No title'}${memberType ? ` • ${typeLabels[memberType]}` : ''}${!active ? ' • Inactive' : ''}`,
        media: media,
      }
    },
  },
})
