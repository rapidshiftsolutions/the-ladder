import { defineType, defineField } from 'sanity'

export const homepageContentType = defineType({
  name: 'homepageContent',
  title: 'Homepage Content',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section', default: true },
    { name: 'trustBadge', title: 'Trust Badge' },
    { name: 'problemSolution', title: 'Problem/Solution Section' },
    { name: 'featuredTestimonial', title: 'Featured Testimonial' },
    { name: 'finalCta', title: 'Final Call-to-Action' },
  ],
  fields: [
    // Hero Section
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      group: 'hero',
      description: 'The main headline visitors see first. Make it compelling and action-oriented. Example: "Helping Individuals Overcome Barriers to Success"',
      initialValue: 'Helping Individuals Overcome',
      validation: (Rule) => Rule.required().max(60).warning('Headlines work best under 60 characters'),
    }),
    defineField({
      name: 'heroHeadlineAccent',
      title: 'Hero Headline Accent Text',
      type: 'string',
      group: 'hero',
      description: 'The highlighted/accent portion of the headline (shown in a different color). Example: "Barriers to Success"',
      initialValue: 'Barriers to Success',
      validation: (Rule) => Rule.max(40),
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Subheadline',
      type: 'text',
      rows: 3,
      group: 'hero',
      description: 'Supporting text below the headline. Explain your value proposition in 2-3 sentences. Be specific about what you do and who you help.',
      initialValue: 'When life\'s obstacles stand in your way, The Ladder partners with you to find solutions. We provide personalized crisis intervention and connect you with the resources you need.',
      validation: (Rule) => Rule.required().max(250).warning('Keep subheadlines under 250 characters'),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Photo',
      type: 'image',
      group: 'hero',
      description: 'The photo shown beside the headline. Use a real person or family you have helped. It appears in a framed panel roughly 700x460px, so upload at least 1400x920px for a sharp result.',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Describe the image for accessibility. Example: "Jamil - a success story from The Ladder"',
        },
      ],
    }),
    defineField({
      name: 'heroImageCaption',
      title: 'Hero Photo Caption',
      type: 'string',
      group: 'hero',
      description: 'Short caption on the small card over the photo. Name the person and what changed for them. Example: "Jamil - back on the road and back to work". Keep it under 60 characters.',
      initialValue: 'Jamil — back on the road and back to work',
      validation: (Rule) => Rule.max(60).warning('Short captions fit the card best'),
    }),
    defineField({
      name: 'heroPrimaryCta',
      title: 'Primary CTA Button Text',
      type: 'string',
      group: 'hero',
      description: 'Text for the main call-to-action button. Example: "Get Help Today"',
      initialValue: 'Get Help Today',
      validation: (Rule) => Rule.required().max(25),
    }),
    defineField({
      name: 'heroPrimaryCtaLink',
      title: 'Primary CTA Button Link',
      type: 'string',
      group: 'hero',
      description: 'Where the primary button links to. Example: "/get-help"',
      initialValue: '/get-help',
    }),
    defineField({
      name: 'heroSecondaryCta',
      title: 'Secondary CTA Button Text',
      type: 'string',
      group: 'hero',
      description: 'Text for the secondary call-to-action button. Example: "Make a Donation"',
      initialValue: 'Make a Donation',
      validation: (Rule) => Rule.max(25),
    }),
    defineField({
      name: 'heroSecondaryCtaLink',
      title: 'Secondary CTA Button Link',
      type: 'string',
      group: 'hero',
      description: 'Where the secondary button links to. Example: "/donate"',
      initialValue: '/donate',
    }),
    defineField({
      name: 'heroQuickContact',
      title: 'Quick Contact Text',
      type: 'string',
      group: 'hero',
      description: 'Short reassurance text shown below buttons. Example: "All services are free and confidential"',
      initialValue: 'All services are free and confidential',
    }),

    // Trust Badge Section
    defineField({
      name: 'trustBadgeText',
      title: 'Trust Badge Text',
      type: 'string',
      group: 'trustBadge',
      description: 'Text shown in the trust badge at the top of the hero. Example: "501(c)(3) Nonprofit • Serving Birmingham Since 2021"',
      initialValue: '501(c)(3) Nonprofit • Serving Birmingham Since 2021',
      validation: (Rule) => Rule.max(80),
    }),

    // Problem/Solution Section
    defineField({
      name: 'problemSectionBadge',
      title: 'Section Badge Text',
      type: 'string',
      group: 'problemSolution',
      description: 'Small badge text above the section headline. Example: "The Missing Rung"',
      initialValue: 'The Missing Rung',
    }),
    defineField({
      name: 'problemSectionHeadline',
      title: 'Section Headline',
      type: 'string',
      group: 'problemSolution',
      description: 'Main headline for this section. Example: "Bridging the Gap in Birmingham\'s Safety Net"',
      initialValue: 'Bridging the Gap in Birmingham\'s Safety Net',
    }),
    defineField({
      name: 'problemSectionSubheadline',
      title: 'Section Subheadline',
      type: 'text',
      rows: 3,
      group: 'problemSolution',
      description: 'Supporting text explaining the problem you solve.',
      initialValue: 'Birmingham has excellent nonprofit organizations, but sometimes individuals face barriers that don\'t fit neatly into any single organization\'s services. That\'s where The Ladder steps in.',
    }),
    defineField({
      name: 'challengeItems',
      title: 'Challenge Examples',
      type: 'array',
      group: 'problemSolution',
      description: 'List of specific challenges/gaps. Show 3 examples of how traditional services fall short.',
      of: [{
        type: 'object',
        fields: [
          { 
            name: 'service', 
            type: 'string', 
            title: 'Service Type',
            description: 'Example: "Housing program"',
          },
          { 
            name: 'gap', 
            type: 'string', 
            title: 'Gap/Limitation',
            description: 'Example: "can\'t help with car repairs needed for work"',
          },
        ],
        preview: {
          select: { title: 'service', subtitle: 'gap' },
        },
      }],
    }),
    defineField({
      name: 'solutionItems',
      title: 'Solution Points',
      type: 'array',
      group: 'problemSolution',
      description: 'List of how your organization addresses these gaps. Show 3 key differentiators.',
      of: [{
        type: 'object',
        fields: [
          { 
            name: 'title', 
            type: 'string', 
            title: 'Point Title',
            description: 'Example: "Partner referrals:"',
          },
          { 
            name: 'description', 
            type: 'string', 
            title: 'Description',
            description: 'Example: "Nonprofits send us clients facing barriers outside their scope"',
          },
        ],
        preview: {
          select: { title: 'title', subtitle: 'description' },
        },
      }],
    }),

    // Featured Testimonial (for How It Works section)
    defineField({
      name: 'featuredTestimonialBadge',
      title: 'Testimonial Badge',
      type: 'string',
      group: 'featuredTestimonial',
      description: 'Small badge above the testimonial. Example: "Success Story"',
      initialValue: 'Success Story',
    }),
    defineField({
      name: 'featuredTestimonialHeadline',
      title: 'Testimonial Section Headline',
      type: 'string',
      group: 'featuredTestimonial',
      description: 'Headline for this testimonial block. Example: "From Barrier to Breakthrough"',
      initialValue: 'From Barrier to Breakthrough',
    }),
    defineField({
      name: 'featuredTestimonialQuote',
      title: 'Featured Testimonial Quote',
      type: 'text',
      rows: 5,
      group: 'featuredTestimonial',
      description: 'A compelling success story quote. This is prominently displayed on the homepage. Use quotes and keep it personal but protect privacy.',
      initialValue: '"A local housing nonprofit referred Sarah to us. She had secured a new job, but her car needed $800 in repairs she couldn\'t afford. Without transportation, she would lose the job before starting. We covered the repair cost within 48 hours. Today, Sarah has held that job for over two years and recently moved into permanent housing."',
      validation: (Rule) => Rule.max(600),
    }),
    defineField({
      name: 'featuredTestimonialStats',
      title: 'Testimonial Impact Stats',
      type: 'array',
      group: 'featuredTestimonial',
      description: 'Key stats from this success story. Show 3 numbers that demonstrate impact.',
      of: [{
        type: 'object',
        fields: [
          { 
            name: 'value', 
            type: 'string', 
            title: 'Stat Value',
            description: 'Example: "$800" or "48hr" or "2yr+"',
          },
          { 
            name: 'label', 
            type: 'string', 
            title: 'Stat Label',
            description: 'Example: "Investment" or "Resolution" or "Stable Job"',
          },
        ],
        preview: {
          select: { title: 'value', subtitle: 'label' },
        },
      }],
      validation: (Rule) => Rule.max(3),
    }),

    // Impact/Trust Section Testimonial
    defineField({
      name: 'impactTestimonialQuote',
      title: 'Impact Section Testimonial',
      type: 'text',
      rows: 4,
      group: 'featuredTestimonial',
      description: 'A testimonial quote for the Impact & Trust section. This is a direct quote from someone you\'ve helped.',
      initialValue: '"When I lost my car in an accident, I thought I would lose everything. The Ladder provided a rental car so I could keep working until I found a replacement. Today I have a new job I love and just moved into a beautiful new home. They gave me the support I needed exactly when I needed it."',
    }),
    defineField({
      name: 'impactTestimonialName',
      title: 'Testimonial Attribution',
      type: 'string',
      group: 'featuredTestimonial',
      description: 'Name of the person (first name and last initial). Example: "Maria T."',
      initialValue: 'Maria T.',
    }),
    defineField({
      name: 'impactTestimonialContext',
      title: 'Testimonial Context',
      type: 'string',
      group: 'featuredTestimonial',
      description: 'Additional context. Example: "Birmingham Resident, Helped in 2023"',
      initialValue: 'Birmingham Resident, Helped in 2023',
    }),

    // Final CTA Section
    defineField({
      name: 'finalCtaHeadline',
      title: 'Final CTA Headline',
      type: 'string',
      group: 'finalCta',
      description: 'Main headline for the final call-to-action section at the bottom of the page.',
      initialValue: 'Ready to Climb Over',
    }),
    defineField({
      name: 'finalCtaHeadlineAccent',
      title: 'Final CTA Headline Accent',
      type: 'string',
      group: 'finalCta',
      description: 'Highlighted portion of the headline.',
      initialValue: "Life's Barriers?",
    }),
    defineField({
      name: 'finalCtaSubheadline',
      title: 'Final CTA Subheadline',
      type: 'text',
      rows: 2,
      group: 'finalCta',
      description: 'Supporting text for the final CTA.',
      initialValue: 'Whether you need help, want to help others, or represent a nonprofit organization, there\'s a place for you in our mission.',
    }),
    defineField({
      name: 'finalCtaClosingHeadline',
      title: 'Closing Message Headline',
      type: 'string',
      group: 'finalCta',
      description: 'The headline in the closing box.',
      initialValue: 'Together, We Can Remove Every Barrier',
    }),
    defineField({
      name: 'finalCtaClosingText',
      title: 'Closing Message Text',
      type: 'text',
      rows: 3,
      group: 'finalCta',
      description: 'Inspiring closing message.',
      initialValue: 'Every person deserves the chance to succeed. Every barrier can be overcome. Every community is stronger when we work together. Let\'s climb higher, together.',
    }),

    // Action Options for Final CTA
    defineField({
      name: 'ctaOptions',
      title: 'CTA Action Cards',
      type: 'array',
      group: 'finalCta',
      description: 'The three main action cards in the final CTA section (Need Help, Want to Help, Partner).',
      of: [{
        type: 'object',
        fields: [
          { 
            name: 'title', 
            type: 'string', 
            title: 'Card Title',
            description: 'Example: "Need Help Right Now?"',
          },
          { 
            name: 'description', 
            type: 'text', 
            title: 'Description',
            rows: 2,
            description: 'Brief description of this option.',
          },
          { 
            name: 'ctaText', 
            type: 'string', 
            title: 'Button Text',
            description: 'Example: "Apply for Assistance"',
          },
          { 
            name: 'ctaLink', 
            type: 'string', 
            title: 'Button Link',
            description: 'Example: "/get-help"',
          },
          { 
            name: 'urgencyText', 
            type: 'string', 
            title: 'Urgency/Benefit Text',
            description: 'Example: "We typically respond within 24 hours"',
          },
          { 
            name: 'statsText', 
            type: 'string', 
            title: 'Supporting Stats',
            description: 'Example: "500+ people helped • 95% success rate"',
          },
          { 
            name: 'iconName', 
            type: 'string', 
            title: 'Icon Name',
            description: 'Lucide icon name: "Heart", "HandHeart", or "Building2"',
            options: {
              list: [
                { title: 'Heart', value: 'Heart' },
                { title: 'HandHeart', value: 'HandHeart' },
                { title: 'Building', value: 'Building2' },
              ],
            },
          },
          { 
            name: 'accentColor', 
            type: 'string', 
            title: 'Accent Color',
            description: 'Color for the card accent',
            options: {
              list: [
                { title: 'Red', value: '#FF3B30' },
                { title: 'Green', value: '#34C759' },
                { title: 'Blue', value: '#007AFF' },
              ],
            },
          },
        ],
        preview: {
          select: { title: 'title', subtitle: 'ctaText' },
        },
      }],
      validation: (Rule) => Rule.max(3),
    }),
  ],
  preview: {
    prepare() {
      return { 
        title: 'Homepage Content',
        subtitle: 'Hero section, testimonials, and CTAs',
      }
    },
  },
})
