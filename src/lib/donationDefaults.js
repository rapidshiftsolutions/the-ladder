export const DEFAULT_DONATION_SETTINGS = {
  givebutterAccountId: 'cj1p7s9MwIXbWFeF',
  donateWidgetId: 'prW2aY',
  monthlyWidgetId: 'g8M3W2',
  floatingWidgetId: 'LZovEY',
  heroTitle: 'Help Someone Overcome a Barrier Today',
  heroSubtitle:
    'Your gift removes a specific obstacle keeping someone in Birmingham from moving forward.',
  donationPageIntro:
    'Your donation directly supports Birmingham residents in crisis. Every contribution removes real obstacles and creates lasting change.',
  formSectionTitle: 'Make a Secure Donation',
  suggestedAmounts: [25, 50, 100, 250, 500, 1000],
  defaultAmount: 100,
  monthlyGivingEnabled: true,
  monthlyHeroTitle: 'Become a Ladder Climber',
  monthlyHeroSubtitle:
    'Monthly gifts give us the stability to respond the moment someone hits a missing rung.',
  monthlyGivingTiers: [
    {
      amount: 25,
      name: 'Supporter',
      description: 'Provides transportation assistance for individuals in crisis',
      isHighlighted: false,
    },
    {
      amount: 50,
      name: 'Advocate',
      description: 'Removes one major barrier per month for a Birmingham resident',
      isHighlighted: true,
    },
    {
      amount: 100,
      name: 'Champion',
      description: 'Supports comprehensive barrier removal throughout the year',
      isHighlighted: false,
    },
  ],
  monthlyGivingHeadline: 'Become a Monthly Donor',
  monthlyGivingDescription:
    'Monthly donors provide the stable, predictable support that allows us to respond immediately when someone needs help.',
  taxInfo:
    'The Ladder is a 501(c)(3) nonprofit organization (EIN: 82-0737087). All donations are tax-deductible to the fullest extent allowed by law.',
  thankYouMessage:
    'Thank you for your generous donation! Your gift directly helps Birmingham residents overcome barriers and build better lives.',
  matchingGiftInfo:
    'Many employers match charitable donations. Check with your HR department to potentially double your impact!',
  trustBadgeText: '501(c)(3) Tax-Exempt Organization · EIN 82-0737087',
  showOtherWaysToGive: false,
}

export const DEFAULT_IMPACT_EXAMPLES = [
  {
    _id: 'fallback-50',
    amount: 50,
    title: 'Transportation',
    description:
      'Provides transportation so someone can get to a job interview or medical appointment',
  },
  {
    _id: 'fallback-150',
    amount: 150,
    title: 'Housing Barrier',
    description:
      'Helps with a deposit, documentation, or other barrier preventing stable housing',
  },
  {
    _id: 'fallback-300',
    amount: 300,
    title: 'Career Access',
    description:
      'Removes barriers to education, certification, or job training opportunities',
  },
]

export const DEFAULT_DONATE_FAQS = [
  {
    _id: 'faq-tax',
    question: 'Is my donation tax-deductible?',
    answer:
      'Yes. The Ladder is a 501(c)(3) tax-exempt organization (EIN: 82-0737087). All donations are tax-deductible to the fullest extent allowed by law. You will receive a receipt for your records.',
  },
  {
    _id: 'faq-where',
    question: 'Where does my donation go?',
    answer:
      '100% of your donation goes directly to barrier removal assistance for individuals in crisis. We maintain financial transparency and publish annual reports showing exactly how funds are used.',
  },
  {
    _id: 'faq-honor',
    question: 'Can I donate in honor or memory of someone?',
    answer:
      'Yes. During the donation process, you can specify if your gift is in honor or memory of someone special.',
  },
  {
    _id: 'faq-impact',
    question: 'How can I see the impact of my donation?',
    answer:
      'All donors can view our success stories and annual reports. Monthly donors receive quarterly impact updates with specific stories of how their gifts made a difference.',
  },
]

export function mergeDonationSettings(settings) {
  return { ...DEFAULT_DONATION_SETTINGS, ...(settings || {}) }
}
