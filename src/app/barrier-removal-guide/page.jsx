import { BookOpen, Users, Home, Briefcase, Heart, DollarSign, Scale, Phone, CheckCircle, ArrowRight, Download, Share2 } from 'lucide-react'
import ShareButton from '@/components/ShareButton'

export const metadata = {
  title: 'Barrier Removal Guide | The Ladder - Overcoming Life Challenges Birmingham',
  description: 'Comprehensive guide to identifying and removing barriers to success. Learn practical strategies for overcoming housing, employment, financial, and social challenges in Birmingham, Alabama.',
  keywords: 'barrier removal guide, overcoming life challenges, Birmingham resources, crisis intervention, emergency assistance Alabama, social work resources, life coaching Birmingham',
  openGraph: {
    title: 'Barrier Removal Guide | The Ladder',
    description: 'Comprehensive guide to identifying and removing barriers to success. Practical strategies for overcoming challenges and accessing resources in Birmingham.',
    type: 'website',
    url: 'https://the-ladder.org/barrier-removal-guide',
  },
  alternates: {
    canonical: 'https://the-ladder.org/barrier-removal-guide'
  }
}

export default function BarrierRemovalGuidePage() {
  const barrierCategories = [
    {
      icon: <Home className="h-8 w-8 text-[var(--ladder-blue)]" />,
      title: 'Housing & Shelter',
      barriers: [
        'Homelessness or housing instability',
        'Lack of rental history or references',
        'Poor credit preventing housing approval',
        'Insufficient income for deposits',
        'Discrimination in housing markets',
        'Unsafe or unhealthy living conditions'
      ],
      solutions: [
        'Emergency shelter and transitional housing programs',
        'Rental assistance and deposit programs',
        'Credit repair and financial counseling',
        'Housing advocacy and discrimination support',
        'Connection to stable housing networks',
        'Landlord mediation services'
      ],
      resources: [
        'Birmingham Housing Authority: (205) 521-0608',
        'Salvation Army Harbor Light: (205) 322-6649',
        'Catholic Social Services Housing: (205) 324-6561',
        'YWCA Central Alabama: (205) 322-9922'
      ]
    },
    {
      icon: <Briefcase className="h-8 w-8 text-[var(--ladder-green)]" />,
      title: 'Employment & Income',
      barriers: [
        'Lack of job skills or education',
        'Criminal background preventing employment',
        'Unreliable transportation to work',
        'Lack of professional clothing or equipment',
        'Mental health challenges affecting work',
        'Childcare needs during work hours'
      ],
      solutions: [
        'Job training and skill development programs',
        'Resume writing and interview coaching',
        'Background-friendly employer connections',
        'Transportation assistance programs',
        'Professional clothing and equipment provision',
        'Flexible childcare solutions'
      ],
      resources: [
        'Alabama Career Center: (205) 325-5627',
        'Goodwill Career Services: (205) 323-6631',
        'UAB WorkLife Program: (205) 934-3347',
        'YWCA Career Development: (205) 322-9922'
      ]
    },
    {
      icon: <DollarSign className="h-8 w-8 text-[var(--ladder-gold)]" />,
      title: 'Financial Stability',
      barriers: [
        'Overwhelming debt and poor credit',
        'Lack of banking relationships',
        'Predatory lending cycles',
        'Insufficient emergency savings',
        'Limited financial literacy',
        'Garnished wages or tax liens'
      ],
      solutions: [
        'Debt consolidation and negotiation',
        'Credit building and repair programs',
        'Financial literacy education',
        'Emergency fund development',
        'Budget creation and management',
        'Legal advocacy for financial issues'
      ],
      resources: [
        'Consumer Credit Counseling: (205) 251-8181',
        'Legal Aid Society Financial: (205) 328-3540',
        'Alabama Saves Program: (334) 242-5100',
        'United Way Financial Coaching: (205) 251-5131'
      ]
    },
    {
      icon: <Heart className="h-8 w-8 text-[var(--ladder-red)]" />,
      title: 'Health & Wellness',
      barriers: [
        'Lack of health insurance or coverage',
        'Mental health and addiction challenges',
        'Chronic medical conditions affecting work',
        'Lack of access to mental health care',
        'Medication costs and accessibility',
        'Transportation to medical appointments'
      ],
      solutions: [
        'Health insurance enrollment assistance',
        'Mental health and substance abuse treatment',
        'Medication assistance programs',
        'Medical transportation services',
        'Wellness and preventive care programs',
        'Crisis intervention and emergency support'
      ],
      resources: [
        'Jefferson County Health Dept: (205) 933-9110',
        'UAB Hospital Financial Aid: (205) 934-4011',
        'Alabama Dept of Mental Health: (334) 242-3454',
        'Crisis Center Inc: (205) 323-7777'
      ]
    },
    {
      icon: <Scale className="h-8 w-8 text-[var(--ladder-purple)]" />,
      title: 'Legal Issues',
      barriers: [
        'Outstanding warrants or legal issues',
        'Family court and custody challenges',
        'Immigration status complications',
        'Landlord-tenant disputes',
        'Consumer debt and collection issues',
        'Criminal record expungement needs'
      ],
      solutions: [
        'Legal representation and advocacy',
        'Court navigation and preparation',
        'Expungement and record clearing',
        'Immigration legal assistance',
        'Family law support services',
        'Consumer protection advocacy'
      ],
      resources: [
        'Legal Aid Society of Birmingham: (205) 328-3540',
        'Birmingham Bar Pro Bono: (205) 251-8006',
        'Alabama Legal Aid: 1-866-456-4995',
        'Hispanic Interest Coalition: (205) 879-3549'
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-[var(--ladder-teal)]" />,
      title: 'Social & Family Support',
      barriers: [
        'Social isolation and lack of support networks',
        'Domestic violence and unsafe relationships',
        'Childcare needs and parenting challenges',
        'Elder care responsibilities',
        'Language and cultural barriers',
        'Lack of community connections'
      ],
      solutions: [
        'Support group facilitation',
        'Domestic violence intervention',
        'Parenting classes and child development',
        'Elder care coordination',
        'Cultural competency and translation services',
        'Community building and networking'
      ],
      resources: [
        'YWCA Domestic Violence: (205) 322-9922',
        'Family Connection: (205) 324-3411',
        'Alabama Coalition Against DV: 1-800-650-6522',
        'United Way Community Resources: 2-1-1'
      ]
    }
  ]

  const barrierAssessmentQuestions = [
    {
      category: 'Housing',
      questions: [
        'Do you have stable, safe housing for the next 30 days?',
        'Are you able to afford your current housing costs?',
        'Do you feel safe in your current living situation?',
        'Do you have utilities (water, electricity, heat) consistently?'
      ]
    },
    {
      category: 'Employment',
      questions: [
        'Do you have reliable income to meet your basic needs?',
        'Are you satisfied with your current employment situation?',
        'Do you have reliable transportation to work?',
        'Do you feel your skills match current job opportunities?'
      ]
    },
    {
      category: 'Financial',
      questions: [
        'Can you cover unexpected expenses of $400 or more?',
        'Are you able to pay all your bills on time each month?',
        'Do you have a savings account or emergency fund?',
        'Are you comfortable with your level of debt?'
      ]
    },
    {
      category: 'Health',
      questions: [
        'Do you have access to healthcare when you need it?',
        'Are you able to afford necessary medications?',
        'Do you feel mentally and emotionally healthy?',
        'Can you get to medical appointments when needed?'
      ]
    }
  ]

  const actionPlan = [
    {
      step: 1,
      title: 'Identify Your Barriers',
      description: 'Use our assessment tool to identify which barriers are most significantly impacting your life',
      action: 'Complete the barrier assessment questionnaire'
    },
    {
      step: 2,
      title: 'Prioritize by Impact',
      description: 'Focus on barriers that have the greatest impact on your daily life and long-term goals',
      action: 'Rank your top 3 barriers to address first'
    },
    {
      step: 3,
      title: 'Create Your Support Plan',
      description: 'Connect with appropriate resources and create a timeline for addressing each barrier',
      action: 'Contact 2-3 resource organizations this week'
    },
    {
      step: 4,
      title: 'Take First Steps',
      description: 'Begin with small, manageable actions that build momentum toward larger changes',
      action: 'Complete one concrete action within 72 hours'
    },
    {
      step: 5,
      title: 'Monitor and Adjust',
      description: 'Regularly assess your progress and adjust your approach based on what\'s working',
      action: 'Weekly check-ins with your support team'
    }
  ]

  const successStories = [
    {
      name: 'Maria S.',
      barriers: ['Housing instability', 'Language barriers', 'Childcare needs'],
      outcome: 'Secured stable housing, enrolled in ESL classes, found reliable childcare, obtained full-time employment',
      timeframe: '8 months',
      quote: 'The Ladder helped me see that my challenges weren\'t permanent roadblocks, but temporary barriers that could be overcome with the right support.'
    },
    {
      name: 'James T.',
      barriers: ['Criminal background', 'Lack of job skills', 'Transportation issues'],
      outcome: 'Completed job training program, found employment with background-friendly employer, purchased reliable vehicle',
      timeframe: '14 months',
      quote: 'I thought my past would always hold me back, but I learned there are employers who value second chances and programs that help you build new skills.'
    },
    {
      name: 'Sandra W.',
      barriers: ['Mental health challenges', 'Financial debt', 'Social isolation'],
      outcome: 'Connected with mental health services, developed debt repayment plan, built strong support network',
      timeframe: '10 months',
      quote: 'The barrier removal approach helped me address my mental health first, which gave me the strength to tackle my other challenges.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--ladder-blue)] via-[var(--ladder-blue-light)] to-[var(--ladder-green)] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Barrier Removal Guide
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              A comprehensive resource for identifying and overcoming the challenges that prevent you from achieving stability and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#barrier-assessment" 
                className="bg-white text-[var(--ladder-blue)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Start Assessment
              </a>
              <a 
                href="#action-plan" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[var(--ladder-blue)] transition-colors"
              >
                View Action Plan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Understanding Barriers to Success
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Barriers are challenges that prevent individuals from achieving stability, independence, and personal goals. 
                They can be temporary or long-term, and often interconnected. The key to overcoming barriers is identifying 
                them clearly and developing strategic approaches for removal.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-[var(--ladder-blue)] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Identify</h3>
                <p className="text-gray-600">Recognize the specific barriers affecting your life and prioritize them by impact.</p>
              </div>
              <div className="text-center">
                <div className="bg-[var(--ladder-green)] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Plan</h3>
                <p className="text-gray-600">Develop a strategic approach using available resources and support systems.</p>
              </div>
              <div className="text-center">
                <div className="bg-[var(--ladder-gold)] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Act</h3>
                <p className="text-gray-600">Take concrete steps to remove barriers and build sustainable solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barrier Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Common Barrier Categories
              </h2>
              <p className="text-lg text-gray-600">
                Understanding the most common barriers and their solutions helps you develop targeted strategies for success.
              </p>
            </div>

            <div className="space-y-12">
              {barrierCategories.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    {category.icon}
                    <h3 className="text-2xl font-bold ml-4">{category.title}</h3>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-semibold text-[var(--ladder-red)] mb-4">Common Barriers:</h4>
                      <ul className="space-y-2">
                        {category.barriers.map((barrier, barrierIndex) => (
                          <li key={barrierIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-[var(--ladder-red)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{barrier}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[var(--ladder-green)] mb-4">Solution Strategies:</h4>
                      <ul className="space-y-2">
                        {category.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-[var(--ladder-green)] mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[var(--ladder-blue)] mb-4">Local Resources:</h4>
                      <ul className="space-y-2">
                        {category.resources.map((resource, resourceIndex) => (
                          <li key={resourceIndex} className="flex items-start">
                            <Phone className="h-4 w-4 text-[var(--ladder-blue)] mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{resource}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Barrier Assessment */}
      <section id="barrier-assessment" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Barrier Assessment Tool
              </h2>
              <p className="text-lg text-gray-600">
                Answer these questions honestly to identify which barriers may be affecting your life. 
                This assessment helps prioritize where to focus your efforts.
              </p>
            </div>

            <div className="space-y-8">
              {barrierAssessmentQuestions.map((section, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-6 text-[var(--ladder-blue)]">{section.category} Assessment</h3>
                  <div className="space-y-4">
                    {section.questions.map((question, questionIndex) => (
                      <div key={questionIndex} className="border-b border-gray-200 pb-4">
                        <p className="text-gray-700 mb-3">{question}</p>
                        <div className="flex gap-4">
                          <label className="flex items-center">
                            <input type="radio" name={`${index}-${questionIndex}`} value="yes" className="mr-2" />
                            <span className="text-green-600">Yes</span>
                          </label>
                          <label className="flex items-center">
                            <input type="radio" name={`${index}-${questionIndex}`} value="somewhat" className="mr-2" />
                            <span className="text-yellow-600">Somewhat</span>
                          </label>
                          <label className="flex items-center">
                            <input type="radio" name={`${index}-${questionIndex}`} value="no" className="mr-2" />
                            <span className="text-red-600">No</span>
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Complete the assessment to get personalized barrier removal recommendations.
              </p>
              <a 
                href="/get-help" 
                className="bg-[var(--ladder-blue)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[var(--ladder-blue)]/90 transition-colors"
              >
                Get Personalized Help
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Action Plan */}
      <section id="action-plan" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Barrier Removal Action Plan
              </h2>
              <p className="text-lg text-gray-600">
                Follow these steps to systematically address the barriers in your life and build sustainable solutions.
              </p>
            </div>

            <div className="space-y-6">
              {actionPlan.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-[var(--ladder-blue)] text-white rounded-full w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="font-bold">{step.step}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <div className="bg-[var(--ladder-blue)]/10 rounded-lg p-4">
                      <div className="flex items-center">
                        <ArrowRight className="h-5 w-5 text-[var(--ladder-blue)] mr-2" />
                        <span className="font-medium text-[var(--ladder-blue)]">Action Step:</span>
                      </div>
                      <p className="text-gray-700 mt-1">{step.action}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Barrier Removal Success Stories
              </h2>
              <p className="text-lg text-gray-600">
                Real examples of individuals who successfully identified and overcame significant life barriers.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-3">{story.name}</h3>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-[var(--ladder-red)] mb-2">Initial Barriers:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {story.barriers.map((barrier, barrierIndex) => (
                        <li key={barrierIndex}>• {barrier}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-[var(--ladder-green)] mb-2">Outcome:</h4>
                    <p className="text-sm text-gray-600">{story.outcome}</p>
                  </div>

                  <div className="mb-4">
                    <span className="text-sm font-medium text-[var(--ladder-blue)]">Timeframe: {story.timeframe}</span>
                  </div>

                  <blockquote className="border-l-4 border-[var(--ladder-gold)] pl-4 text-sm italic text-gray-700">
                    "{story.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resource Download */}
      <section className="py-16 bg-[var(--ladder-blue)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Download the Complete Guide
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Get the complete Barrier Removal Guide as a PDF, including worksheets, resource lists, and action planning templates.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 rounded-lg p-6">
                <Download className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Complete PDF Guide</h3>
                <p className="mb-4">40-page comprehensive guide with worksheets and templates</p>
                <a 
                  href="/downloads/barrier-removal-guide.pdf" 
                  className="bg-white text-[var(--ladder-blue)] px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-block"
                  download
                >
                  Download PDF
                </a>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Share2 className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Share with Others</h3>
                <p className="mb-4">Help others by sharing this resource in your community</p>
                <ShareButton 
                  title="Barrier Removal Guide - The Ladder"
                  text="Check out this comprehensive guide for overcoming life challenges"
                  url="https://the-ladder.org/barrier-removal-guide"
                  className="bg-white text-[var(--ladder-blue)] px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Share Guide
                </ShareButton>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-lg mb-4">
                Need personalized help with your barriers?
              </p>
              <a 
                href="/get-help" 
                className="bg-white text-[var(--ladder-blue)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Get Personal Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Comprehensive Barrier Removal Guide",
          "description": "A complete guide to identifying and overcoming barriers to success including housing, employment, financial, health, legal, and social challenges.",
          "author": {
            "@type": "Organization",
            "name": "The Ladder"
          },
          "publisher": {
            "@type": "Organization",
            "name": "The Ladder",
            "logo": {
              "@type": "ImageObject",
              "url": "https://the-ladder.org/TheLadder/logos/The Ladder - Logo.png"
            }
          },
          "datePublished": new Date().toISOString(),
          "dateModified": new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://the-ladder.org/barrier-removal-guide"
          },
          "about": [
            {
              "@type": "Thing",
              "name": "Barrier Removal"
            },
            {
              "@type": "Thing", 
              "name": "Crisis Intervention"
            },
            {
              "@type": "Thing",
              "name": "Social Services"
            },
            {
              "@type": "Thing",
              "name": "Community Resources"
            }
          ]
        })
      }} />
    </div>
  )
}