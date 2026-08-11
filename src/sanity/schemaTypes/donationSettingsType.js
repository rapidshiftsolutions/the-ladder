import { defineType, defineField } from 'sanity'

export const donationSettingsType = defineType({
  name: 'donationSettings',
  title: 'Donation Settings',
  type: 'document',
  description:
    'Configure Givebutter widgets, donation page copy, and monthly giving. Changes here update /donate, /monthly-giving, and the sitewide donate button.',
  groups: [
    { name: 'givebutter', title: 'Givebutter', default: true },
    { name: 'pageCopy', title: 'Donate Page Copy' },
    { name: 'givingLevels', title: 'Giving Levels' },
    { name: 'monthlyGiving', title: 'Monthly Giving' },
    { name: 'messaging', title: 'Messaging & Legal' },
    { name: 'otherWays', title: 'Other Ways to Give' },
  ],
  fields: [
    // Givebutter
    defineField({
      name: 'givebutterAccountId',
      title: 'Givebutter Account ID',
      type: 'string',
      group: 'givebutter',
      description:
        'From Givebutter Dashboard → Settings → Integrations (Widgets). Used to load the donation widgets on every page.',
      initialValue: 'cj1p7s9MwIXbWFeF',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'donateWidgetId',
      title: 'Donate Page Widget ID',
      type: 'string',
      group: 'givebutter',
      description:
        'Paste the Widget ID from Givebutter Sharing → Widgets for the main donate form. Example: prW2aY',
      initialValue: 'prW2aY',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'monthlyWidgetId',
      title: 'Monthly Giving Widget ID',
      type: 'string',
      group: 'givebutter',
      description:
        'Paste the Widget ID for the monthly giving form on /monthly-giving. Example: g8M3W2',
      initialValue: 'g8M3W2',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'floatingWidgetId',
      title: 'Floating Donate Button Widget ID',
      type: 'string',
      group: 'givebutter',
      description:
        'Paste the Widget ID for the sitewide floating donate button. Example: LZovEY. Leave blank to hide.',
      initialValue: 'LZovEY',
    }),

    // Donate page copy
    defineField({
      name: 'heroTitle',
      title: 'Donate Hero Title',
      type: 'string',
      group: 'pageCopy',
      description: 'Main headline at the top of the donate page.',
      initialValue: 'Help Someone Overcome a Barrier Today',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Donate Hero Subtitle',
      type: 'text',
      rows: 2,
      group: 'pageCopy',
      description: 'Short supporting line under the hero title.',
      initialValue:
        'Your gift removes a specific obstacle keeping someone in Birmingham from moving forward.',
    }),
    defineField({
      name: 'donationPageIntro',
      title: 'Donation Page Introduction',
      type: 'text',
      rows: 3,
      group: 'pageCopy',
      description: 'Introductory text near the donation form.',
      initialValue:
        'Your donation directly supports Birmingham residents in crisis. Every contribution removes real obstacles and creates lasting change.',
    }),
    defineField({
      name: 'formSectionTitle',
      title: 'Form Section Title',
      type: 'string',
      group: 'pageCopy',
      description: 'Heading above the Givebutter donation form.',
      initialValue: 'Make a Secure Donation',
    }),

    // Giving levels (marketing copy beside widget)
    defineField({
      name: 'suggestedAmounts',
      title: 'Suggested Donation Amounts',
      type: 'array',
      group: 'givingLevels',
      description:
        'Shown as impact context on the donate page. Actual payment amounts are selected inside Givebutter.',
      of: [
        {
          type: 'number',
          validation: (Rule) => Rule.positive().integer(),
        },
      ],
      initialValue: [25, 50, 100, 250, 500, 1000],
    }),
    defineField({
      name: 'defaultAmount',
      title: 'Highlighted Amount',
      type: 'number',
      group: 'givingLevels',
      description: 'Amount to emphasize in impact messaging (should match a suggested amount).',
      initialValue: 100,
    }),

    // Monthly giving
    defineField({
      name: 'monthlyGivingEnabled',
      title: 'Enable Monthly Giving Section',
      type: 'boolean',
      group: 'monthlyGiving',
      description: 'Show monthly giving CTA on the donate page and enable /monthly-giving content.',
      initialValue: true,
    }),
    defineField({
      name: 'monthlyHeroTitle',
      title: 'Monthly Page Hero Title',
      type: 'string',
      group: 'monthlyGiving',
      initialValue: 'Become a Ladder Climber',
    }),
    defineField({
      name: 'monthlyHeroSubtitle',
      title: 'Monthly Page Hero Subtitle',
      type: 'text',
      rows: 2,
      group: 'monthlyGiving',
      initialValue:
        'Monthly gifts give us the stability to respond the moment someone hits a missing rung.',
    }),
    defineField({
      name: 'monthlyGivingTiers',
      title: 'Monthly Giving Tiers',
      type: 'array',
      group: 'monthlyGiving',
      description: 'Named tiers shown as impact context next to the monthly Givebutter form.',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'amount',
              type: 'number',
              title: 'Monthly Amount',
              description: 'Dollar amount per month',
              validation: (Rule) => Rule.required().positive().integer(),
            },
            {
              name: 'name',
              type: 'string',
              title: 'Tier Name',
              description: 'Example: "Supporter", "Advocate", "Champion"',
              validation: (Rule) => Rule.required().max(30),
            },
            {
              name: 'description',
              type: 'string',
              title: 'Tier Description',
              description: 'Optional benefits or description',
            },
            {
              name: 'isHighlighted',
              type: 'boolean',
              title: 'Highlight This Tier',
              description: 'Visually emphasize this as the recommended tier',
              initialValue: false,
            },
          ],
          preview: {
            select: { amount: 'amount', name: 'name' },
            prepare({ amount, name }) {
              return { title: `$${amount}/month - ${name}` }
            },
          },
        },
      ],
      initialValue: [
        { amount: 25, name: 'Supporter', isHighlighted: false },
        { amount: 50, name: 'Advocate', isHighlighted: true },
        { amount: 100, name: 'Champion', isHighlighted: false },
      ],
    }),
    defineField({
      name: 'monthlyGivingHeadline',
      title: 'Monthly Giving Section Headline',
      type: 'string',
      group: 'monthlyGiving',
      description: 'Headline for the monthly giving section on the donation page.',
      initialValue: 'Become a Monthly Donor',
    }),
    defineField({
      name: 'monthlyGivingDescription',
      title: 'Monthly Giving Description',
      type: 'text',
      rows: 3,
      group: 'monthlyGiving',
      description: 'Explain the benefits of monthly giving.',
      initialValue:
        'Monthly donors provide the stable, predictable support that allows us to respond immediately when someone needs help.',
    }),

    // Messaging & legal
    defineField({
      name: 'taxInfo',
      title: 'Tax Deductibility Notice',
      type: 'text',
      rows: 3,
      group: 'messaging',
      description: 'Legal notice about tax deductibility. Include your EIN.',
      initialValue:
        'The Ladder is a 501(c)(3) nonprofit organization (EIN: 82-0737087). All donations are tax-deductible to the fullest extent allowed by law.',
    }),
    defineField({
      name: 'thankYouMessage',
      title: 'Thank You Message',
      type: 'text',
      rows: 4,
      group: 'messaging',
      description: 'Message reinforcing gratitude and impact near the form.',
      initialValue:
        'Thank you for your generous donation! Your gift directly helps Birmingham residents overcome barriers and build better lives.',
    }),
    defineField({
      name: 'matchingGiftInfo',
      title: 'Matching Gift Information',
      type: 'text',
      rows: 3,
      group: 'messaging',
      description: 'Optional employer matching tip shown on the donate page.',
      initialValue:
        'Many employers match charitable donations. Check with your HR department to potentially double your impact!',
    }),
    defineField({
      name: 'trustBadgeText',
      title: 'Trust Badge Text',
      type: 'string',
      group: 'messaging',
      description: 'Short trust line near the form (501c3 status).',
      initialValue: '501(c)(3) Tax-Exempt Organization · EIN 82-0737087',
    }),

    // Other ways to give (optional / secondary)
    defineField({
      name: 'showOtherWaysToGive',
      title: 'Show Other Ways to Give',
      type: 'boolean',
      group: 'otherWays',
      description:
        'If enabled and any alternate method below is filled in, show a collapsed “Other ways to give” section. Online gifts still go through Givebutter.',
      initialValue: false,
    }),
    defineField({
      name: 'paypalLink',
      title: 'PayPal Donation Link',
      type: 'url',
      group: 'otherWays',
      description: 'Optional alternate. Prefer Givebutter for all online donations.',
    }),
    defineField({
      name: 'venmoUsername',
      title: 'Venmo Username',
      type: 'string',
      group: 'otherWays',
      description: 'Optional. Username WITHOUT the @ symbol.',
    }),
    defineField({
      name: 'cashAppTag',
      title: 'Cash App Tag',
      type: 'string',
      group: 'otherWays',
      description: 'Optional. Tag WITHOUT the $ symbol.',
    }),
    defineField({
      name: 'zelleEmail',
      title: 'Zelle Email/Phone',
      type: 'string',
      group: 'otherWays',
    }),
    defineField({
      name: 'checkInstructions',
      title: 'Check/Mail Instructions',
      type: 'text',
      rows: 3,
      group: 'otherWays',
      description: 'Instructions for donors who want to mail a check.',
      initialValue:
        'Make checks payable to "The Ladder" and mail to:\nThe Ladder\nBirmingham, AL',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Donation Settings',
        subtitle: 'Givebutter widgets, giving levels, and messaging',
      }
    },
  },
})
