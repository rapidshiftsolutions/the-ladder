import { defineType, defineField } from 'sanity'

export const donationSettingsType = defineType({
  name: 'donationSettings',
  title: 'Donation Settings',
  type: 'document',
  description: 'Configure GiveButter donations and giving programs. GiveButter is the only donation method on the site.',
  groups: [
    { name: 'paymentMethods', title: 'GiveButter', default: true },
    { name: 'givingLevels', title: 'Giving Levels' },
    { name: 'monthlyGiving', title: 'Monthly Giving' },
    { name: 'messaging', title: 'Messaging & Legal' },
  ],
  fields: [
    // GiveButter (sole payment method)
    defineField({
      name: 'givebutterAccountId',
      title: 'GiveButter Account ID',
      type: 'string',
      group: 'paymentMethods',
      description:
        'From GiveButter: Settings → Integrations → Widgets. Falls back to NEXT_PUBLIC_GIVEBUTTER_ACCOUNT_ID if empty.',
    }),
    defineField({
      name: 'givebutterCampaignCode',
      title: 'GiveButter Campaign Code',
      type: 'string',
      group: 'paymentMethods',
      description:
        'Short campaign code shown near the campaign title. Falls back to NEXT_PUBLIC_GIVEBUTTER_CAMPAIGN_CODE if empty. Campaign must be Live.',
    }),
    defineField({
      name: 'givebutterWidgetId',
      title: 'GiveButter Widget ID (optional)',
      type: 'string',
      group: 'paymentMethods',
      description:
        'Optional. From campaign Sharing → Widgets → Embed. When set, the page uses <givebutter-widget> instead of the giving form.',
    }),

    // Legacy fields — hidden so editors cannot reintroduce old methods
    defineField({
      name: 'paypalLink',
      title: 'PayPal Donation Link (deprecated)',
      type: 'url',
      group: 'paymentMethods',
      hidden: true,
      deprecated: {
        reason: 'GiveButter is the only donation method. This field is no longer used.',
      },
    }),
    defineField({
      name: 'paypalButtonId',
      title: 'PayPal Button ID (deprecated)',
      type: 'string',
      group: 'paymentMethods',
      hidden: true,
      deprecated: {
        reason: 'GiveButter is the only donation method. This field is no longer used.',
      },
    }),
    defineField({
      name: 'venmoUsername',
      title: 'Venmo Username (deprecated)',
      type: 'string',
      group: 'paymentMethods',
      hidden: true,
      deprecated: {
        reason: 'GiveButter is the only donation method. This field is no longer used.',
      },
    }),
    defineField({
      name: 'venmoQrCode',
      title: 'Venmo QR Code Image (deprecated)',
      type: 'image',
      group: 'paymentMethods',
      hidden: true,
      deprecated: {
        reason: 'GiveButter is the only donation method. This field is no longer used.',
      },
      options: { hotspot: false },
    }),
    defineField({
      name: 'cashAppTag',
      title: 'Cash App Tag (deprecated)',
      type: 'string',
      group: 'paymentMethods',
      hidden: true,
      deprecated: {
        reason: 'GiveButter is the only donation method. This field is no longer used.',
      },
    }),
    defineField({
      name: 'zelleEmail',
      title: 'Zelle Email/Phone (deprecated)',
      type: 'string',
      group: 'paymentMethods',
      hidden: true,
      deprecated: {
        reason: 'GiveButter is the only donation method. This field is no longer used.',
      },
    }),
    defineField({
      name: 'checkInstructions',
      title: 'Check/Mail Instructions (deprecated)',
      type: 'text',
      rows: 3,
      group: 'paymentMethods',
      hidden: true,
      deprecated: {
        reason: 'GiveButter is the only donation method. This field is no longer used.',
      },
    }),

    // Giving Levels Group
    defineField({
      name: 'suggestedAmounts',
      title: 'Suggested Donation Amounts',
      type: 'array',
      group: 'givingLevels',
      description: 'Informational amounts shown in marketing copy. Checkout amounts are controlled in GiveButter.',
      of: [{ 
        type: 'number',
        validation: (Rule) => Rule.positive().integer(),
      }],
      initialValue: [25, 50, 100, 250, 500, 1000],
    }),
    defineField({
      name: 'defaultAmount',
      title: 'Default Selected Amount',
      type: 'number',
      group: 'givingLevels',
      description: 'Reference default for marketing; GiveButter controls checkout defaults.',
      initialValue: 100,
    }),
    defineField({
      name: 'minimumDonation',
      title: 'Minimum Donation Amount',
      type: 'number',
      group: 'givingLevels',
      description: 'Reference minimum for marketing; configure the real minimum in GiveButter.',
      initialValue: 5,
    }),

    // Monthly Giving Group
    defineField({
      name: 'monthlyGivingEnabled',
      title: 'Enable Monthly Giving',
      type: 'boolean',
      group: 'monthlyGiving',
      description: 'Turn on/off monthly giving CTAs. Recurring must also be enabled on the GiveButter campaign.',
      initialValue: true,
    }),
    defineField({
      name: 'monthlyGivingTiers',
      title: 'Monthly Giving Tiers',
      type: 'array',
      group: 'monthlyGiving',
      description: 'Define named tiers for monthly donors. This creates a sense of belonging and recognition.',
      of: [{
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
      }],
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
      description: 'Explain the benefits of monthly giving. Emphasize predictable support and sustained impact.',
      initialValue: 'Monthly donors provide the stable, predictable support that allows us to respond immediately when someone needs help. Your recurring gift has 8x the lifetime impact of a one-time donation.',
    }),

    // Messaging & Legal Group
    defineField({
      name: 'taxInfo',
      title: 'Tax Deductibility Notice',
      type: 'text',
      rows: 3,
      group: 'messaging',
      description: 'Legal notice about tax deductibility. Include your EIN. This appears at the bottom of donation forms.',
      initialValue: 'The Ladder is a 501(c)(3) nonprofit organization (EIN: 82-0737087). All donations are tax-deductible to the fullest extent allowed by law.',
    }),
    defineField({
      name: 'thankYouMessage',
      title: 'Thank You Message',
      type: 'text',
      rows: 4,
      group: 'messaging',
      description: 'Reference thank-you copy. GiveButter also sends its own receipts/thank-you emails.',
      initialValue: 'Thank you for your generous donation! Your gift directly helps Birmingham residents overcome barriers and build better lives. You\'ll receive a receipt for your tax records shortly.',
    }),
    defineField({
      name: 'donationPageIntro',
      title: 'Donation Page Introduction',
      type: 'text',
      rows: 3,
      group: 'messaging',
      description: 'Introductory text at the top of the donation page.',
      initialValue: 'Your donation directly supports Birmingham residents in crisis. Every contribution removes real obstacles and creates lasting change.',
    }),
    defineField({
      name: 'matchingGiftInfo',
      title: 'Matching Gift Information',
      type: 'text',
      rows: 3,
      group: 'messaging',
      description: 'Information about employer matching programs. Encourage donors to check if their employer matches.',
      initialValue: 'Many employers match charitable donations. Check with your HR department to potentially double your impact!',
    }),
  ],
  preview: {
    prepare() {
      return { 
        title: 'Donation Settings',
        subtitle: 'GiveButter, giving levels, and messaging',
      }
    },
  },
})
