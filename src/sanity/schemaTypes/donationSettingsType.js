import { defineType, defineField } from 'sanity'

export const donationSettingsType = defineType({
  name: 'donationSettings',
  title: 'Donation Settings',
  type: 'document',
  description: 'Configure donation options, payment links, and giving programs. Changes here affect the Donate page and donation CTAs across the site.',
  groups: [
    { name: 'paymentMethods', title: 'Payment Methods', default: true },
    { name: 'givingLevels', title: 'Giving Levels' },
    { name: 'monthlyGiving', title: 'Monthly Giving' },
    { name: 'messaging', title: 'Messaging & Legal' },
  ],
  fields: [
    // Payment Methods Group
    defineField({
      name: 'paypalLink',
      title: 'PayPal Donation Link',
      type: 'url',
      group: 'paymentMethods',
      description: 'Your PayPal.me link or PayPal donation page URL. Example: https://paypal.me/theladder or your PayPal Giving Fund link.',
    }),
    defineField({
      name: 'paypalButtonId',
      title: 'PayPal Button ID',
      type: 'string',
      group: 'paymentMethods',
      description: 'If using an embedded PayPal donation button, enter the button ID here. Leave blank if using a link instead.',
    }),
    defineField({
      name: 'venmoUsername',
      title: 'Venmo Username',
      type: 'string',
      group: 'paymentMethods',
      description: 'Your Venmo username WITHOUT the @ symbol. Example: "TheLadderBham" not "@TheLadderBham"',
    }),
    defineField({
      name: 'venmoQrCode',
      title: 'Venmo QR Code Image',
      type: 'image',
      group: 'paymentMethods',
      description: 'Optional: Upload your Venmo QR code image for mobile users.',
      options: { hotspot: false },
    }),
    defineField({
      name: 'cashAppTag',
      title: 'Cash App Tag',
      type: 'string',
      group: 'paymentMethods',
      description: 'Your Cash App tag WITHOUT the $ symbol. Example: "TheLadder" not "$TheLadder"',
    }),
    defineField({
      name: 'zelleEmail',
      title: 'Zelle Email/Phone',
      type: 'string',
      group: 'paymentMethods',
      description: 'Email or phone number registered with Zelle for donations.',
    }),
    defineField({
      name: 'checkInstructions',
      title: 'Check/Mail Instructions',
      type: 'text',
      rows: 3,
      group: 'paymentMethods',
      description: 'Instructions for donors who want to mail a check. Include mailing address and who to make checks payable to.',
      initialValue: 'Make checks payable to "The Ladder" and mail to:\nThe Ladder\nBirmingham, AL',
    }),

    // Giving Levels Group
    defineField({
      name: 'suggestedAmounts',
      title: 'Suggested Donation Amounts',
      type: 'array',
      group: 'givingLevels',
      description: 'Pre-set donation amount buttons. Recommend 4-6 amounts spanning small to large donations. Order matters - first amount is often selected by default.',
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
      description: 'Which amount should be pre-selected? Should match one of your suggested amounts. Tip: A mid-range amount often works best.',
      initialValue: 100,
    }),
    defineField({
      name: 'minimumDonation',
      title: 'Minimum Donation Amount',
      type: 'number',
      group: 'givingLevels',
      description: 'Minimum accepted donation. Consider payment processing fees when setting this.',
      initialValue: 5,
    }),

    // Monthly Giving Group
    defineField({
      name: 'monthlyGivingEnabled',
      title: 'Enable Monthly Giving',
      type: 'boolean',
      group: 'monthlyGiving',
      description: 'Turn on/off the monthly giving option on the donation page.',
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
      description: 'Message shown after a successful donation. Express gratitude and reinforce impact.',
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
        subtitle: 'Payment methods, giving levels, and messaging',
      }
    },
  },
})
