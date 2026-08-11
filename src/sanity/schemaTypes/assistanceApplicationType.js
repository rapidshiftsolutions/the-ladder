import { defineType, defineField } from 'sanity'

export const assistanceApplicationType = defineType({
  name: 'assistanceApplication',
  title: 'Assistance Application',
  type: 'document',
  description:
    'Sponsorship / barrier-removal applications submitted through the password-protected guest portal. Staff can update status and add notes here.',
  groups: [
    { name: 'applicant', title: 'Applicant', default: true },
    { name: 'request', title: 'Request Details' },
    { name: 'review', title: 'Staff Review' },
  ],
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      group: 'applicant',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'applicant',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      group: 'applicant',
    }),
    defineField({
      name: 'referringPartner',
      title: 'Referring Partner Organization',
      type: 'string',
      group: 'applicant',
      description: 'The nonprofit or agency that referred this individual.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'barrierDescription',
      title: 'Barrier / Need Description',
      type: 'text',
      rows: 5,
      group: 'request',
      description: 'What specific barrier is preventing progress?',
      validation: (Rule) => Rule.required().min(20),
    }),
    defineField({
      name: 'helpRequested',
      title: 'Type or Amount of Help Requested',
      type: 'text',
      rows: 3,
      group: 'request',
      description: 'Optional: what kind of help or approximate amount is needed.',
    }),
    defineField({
      name: 'consentGiven',
      title: 'Privacy Consent Given',
      type: 'boolean',
      group: 'request',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      group: 'review',
      readOnly: true,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      group: 'review',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'In Review', value: 'in_review' },
          { title: 'Approved', value: 'approved' },
          { title: 'Declined', value: 'declined' },
          { title: 'Closed', value: 'closed' },
        ],
        layout: 'radio',
      },
      initialValue: 'new',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'staffNotes',
      title: 'Staff Notes',
      type: 'text',
      rows: 4,
      group: 'review',
      description: 'Internal notes — not shown to applicants.',
    }),
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
    {
      title: 'Status',
      name: 'statusAsc',
      by: [{ field: 'status', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'referringPartner',
      status: 'status',
      submittedAt: 'submittedAt',
    },
    prepare({ title, subtitle, status, submittedAt }) {
      const date = submittedAt ? new Date(submittedAt).toLocaleDateString() : 'No date'
      return {
        title: title || 'Untitled application',
        subtitle: `${status || 'new'} · ${subtitle || 'No partner'} · ${date}`,
      }
    },
  },
})
