import { defineType, defineField } from 'sanity'

export const processStepType = defineType({
  name: 'processStep',
  title: 'Process Step',
  type: 'document',
  description: 'Steps in the "How It Works" / "Our Process" section. These explain how someone gets help from The Ladder.',
  fields: [
    defineField({
      name: 'stepNumber',
      title: 'Step Number',
      type: 'number',
      description: 'The order of this step (1, 2, 3, 4). This determines display order.',
      validation: (Rule) => Rule.required().min(1).max(10).integer(),
    }),
    defineField({
      name: 'title',
      title: 'Step Title',
      type: 'string',
      description: 'Short, action-oriented title for this step. Example: "Contact Us" or "Personal Assessment"',
      validation: (Rule) => Rule.required().max(30).warning('Keep titles short and punchy'),
    }),
    defineField({
      name: 'description',
      title: 'Step Description',
      type: 'text',
      rows: 3,
      description: 'Brief explanation of what happens in this step. 1-2 sentences. Example: "Reach out by phone, email, or through our website. We respond to all inquiries within 24 hours."',
      validation: (Rule) => Rule.required().max(200).warning('Keep descriptions concise'),
    }),
    defineField({
      name: 'iconName',
      title: 'Icon',
      type: 'string',
      description: 'Choose an icon that represents this step. These are Lucide icon names.',
      options: {
        list: [
          { title: 'Phone (Contact)', value: 'Phone' },
          { title: 'Users (Assessment/Meeting)', value: 'Users' },
          { title: 'FileText (Plan/Documentation)', value: 'FileText' },
          { title: 'CheckCircle (Completion/Success)', value: 'CheckCircle' },
          { title: 'MessageSquare (Communication)', value: 'MessageSquare' },
          { title: 'ClipboardCheck (Review)', value: 'ClipboardCheck' },
          { title: 'Handshake (Partnership)', value: 'Handshake' },
          { title: 'Target (Goal)', value: 'Target' },
          { title: 'Calendar (Scheduling)', value: 'Calendar' },
          { title: 'Heart (Care/Support)', value: 'Heart' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'CheckCircle',
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Uncheck to hide this step from the website without deleting it.',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Step Number',
      name: 'stepNumberAsc',
      by: [{ field: 'stepNumber', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      stepNumber: 'stepNumber',
      isActive: 'isActive',
    },
    prepare({ title, stepNumber, isActive }) {
      return {
        title: `Step ${stepNumber}: ${title}`,
        subtitle: isActive ? 'Active' : 'Hidden',
      }
    },
  },
})
