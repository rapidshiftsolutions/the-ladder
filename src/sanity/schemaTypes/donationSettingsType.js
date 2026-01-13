import { defineType, defineField } from 'sanity'

export const donationSettingsType = defineType({
  name: 'donationSettings',
  title: 'Donation Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'paypalLink',
      title: 'PayPal Donation Link',
      type: 'url',
    }),
    defineField({
      name: 'venmoUsername',
      title: 'Venmo Username',
      type: 'string',
      description: 'Without the @ symbol',
    }),
    defineField({
      name: 'cashAppTag',
      title: 'Cash App Tag',
      type: 'string',
      description: 'Without the $ symbol',
    }),
    defineField({
      name: 'suggestedAmounts',
      title: 'Suggested Donation Amounts',
      type: 'array',
      of: [{ type: 'number' }],
    }),
    defineField({
      name: 'impactStatements',
      title: 'Impact Statements',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'amount', type: 'number', title: 'Amount' },
          { name: 'impact', type: 'string', title: 'Impact Statement' },
        ],
      }],
    }),
    defineField({
      name: 'monthlyGivingEnabled',
      title: 'Enable Monthly Giving',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'taxInfo',
      title: 'Tax Deductibility Notice',
      type: 'text',
      rows: 2,
      initialValue: 'The Ladder is a 501(c)(3) nonprofit organization (EIN: 47-2123160). All donations are tax-deductible to the extent allowed by law.',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Donation Settings' }
    },
  },
})
