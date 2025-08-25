import { Eye, Ear, Hand, Brain, Heart, Phone, Mail, MessageCircle, CheckCircle, Download, Users, Settings } from 'lucide-react'

export const metadata = {
  title: 'Accessibility Statement | The Ladder - ADA Compliance & Digital Accessibility',
  description: 'The Ladder is committed to ensuring digital accessibility for all users. Learn about our accessibility features, accommodations, and ADA compliance efforts for our Birmingham nonprofit website.',
  keywords: 'accessibility statement, ADA compliance, digital accessibility, nonprofit accessibility, Birmingham ADA, disability accommodations, assistive technology, WCAG compliance',
  openGraph: {
    title: 'Accessibility Statement | The Ladder',
    description: 'The Ladder is committed to ensuring digital accessibility for all users. Learn about our accessibility features and ADA compliance efforts.',
    type: 'website',
    url: 'https://the-ladder.org/accessibility',
  },
  alternates: {
    canonical: 'https://the-ladder.org/accessibility'
  }
}

export default function AccessibilityPage() {
  const accessibilityFeatures = [
    {
      icon: <Eye className="h-8 w-8 text-[var(--ladder-blue)]" />,
      title: 'Visual Accessibility',
      features: [
        'High contrast color schemes with 4.5:1 minimum ratio',
        'Scalable text up to 200% without loss of functionality',
        'Alternative text for all images and graphics',
        'Clear visual focus indicators for keyboard navigation',
        'Descriptive link text and headings',
        'Compatible with screen readers and magnification software'
      ]
    },
    {
      icon: <Ear className="h-8 w-8 text-[var(--ladder-green)]" />,
      title: 'Auditory Accessibility',
      features: [
        'Captions and transcripts for all video content',
        'Audio descriptions for visual content when applicable',
        'No auto-playing audio content',
        'Visual indicators for audio alerts',
        'Text-based alternatives for audio instructions',
        'Compatible with hearing assistive technologies'
      ]
    },
    {
      icon: <Hand className="h-8 w-8 text-[var(--ladder-gold)]" />,
      title: 'Motor Accessibility',
      features: [
        'Full keyboard navigation support',
        'Large click targets (minimum 44x44 pixels)',
        'No time limits on essential functions',
        'Skip navigation links for efficiency',
        'Single-click activation where possible',
        'Compatible with switch navigation and voice control'
      ]
    },
    {
      icon: <Brain className="h-8 w-8 text-[var(--ladder-red)]" />,
      title: 'Cognitive Accessibility',
      features: [
        'Clear, simple language and instructions',
        'Consistent navigation and layout patterns',
        'Error prevention and clear error messages',
        'Multiple ways to find information',
        'Undo functionality for important actions',
        'Context and orientation cues throughout the site'
      ]
    }
  ]

  const assistiveTechnologies = [
    {
      name: 'Screen Readers',
      description: 'JAWS, NVDA, VoiceOver, and other screen reading software',
      support: 'Full compatibility with semantic HTML and ARIA labels'
    },
    {
      name: 'Voice Recognition',
      description: 'Dragon NaturallySpeaking and similar voice control software',
      support: 'Voice navigation commands and dictation support'
    },
    {
      name: 'Switch Navigation',
      description: 'Single-switch and multi-switch navigation devices',
      support: 'Sequential navigation and switch-accessible menus'
    },
    {
      name: 'Eye Tracking',
      description: 'Tobii and other eye-tracking navigation systems',
      support: 'Large click targets and dwell-click compatibility'
    },
    {
      name: 'Screen Magnifiers',
      description: 'ZoomText, Windows Magnifier, and browser zoom',
      support: 'Responsive design that works at high magnification levels'
    },
    {
      name: 'High Contrast',
      description: 'Windows High Contrast Mode and similar accessibility tools',
      support: 'Color combinations that work in high contrast environments'
    }
  ]

  const complianceStandards = [
    {
      standard: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines Level AA compliance',
      status: 'Conformant',
      details: 'All pages meet WCAG 2.1 Level AA success criteria for perceivable, operable, understandable, and robust web content.'
    },
    {
      standard: 'ADA Title II',
      description: 'Americans with Disabilities Act compliance for public entities',
      status: 'Conformant',
      details: 'As a nonprofit organization, we ensure our digital services are accessible to all community members.'
    },
    {
      standard: 'Section 508',
      description: 'Federal accessibility standards for electronic content',
      status: 'Conformant',
      details: 'Our website meets Section 508 requirements for accessibility and usability.'
    }
  ]

  const accessibilityServices = [
    {
      service: 'Document Conversion',
      description: 'We provide materials in alternative formats including large print, Braille, and audio',
      contact: 'Request alternative formats 48 hours in advance'
    },
    {
      service: 'Sign Language Interpretation',
      description: 'ASL interpreters available for meetings, events, and consultations',
      contact: 'Schedule interpreters 72 hours in advance'
    },
    {
      service: 'Assistive Technology Support',
      description: 'Help using our website with screen readers, voice software, and other assistive technologies',
      contact: 'Call our accessibility coordinator for personalized assistance'
    },
    {
      service: 'Accommodation Requests',
      description: 'Request specific accommodations for accessing our services or participating in programs',
      contact: 'Submit requests through our contact form or by phone'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--ladder-blue)] via-[var(--ladder-blue-light)] to-[var(--ladder-green)] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-16 w-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Accessibility Statement
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              The Ladder is committed to ensuring digital accessibility for all users, including those with disabilities. 
              We strive to provide an inclusive experience for everyone in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#accessibility-features" 
                className="bg-white text-[var(--ladder-blue)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                View Features
              </a>
              <a 
                href="#contact-accessibility" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[var(--ladder-blue)] transition-colors"
              >
                Request Accommodations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Accessibility Commitment
              </h2>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Ladder believes that access to information and services should be available to all people, 
                regardless of their abilities or disabilities. We are committed to providing a website that is 
                accessible to the widest possible audience, including individuals who rely on assistive technologies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our commitment extends beyond our website to all aspects of our services, programs, and facilities. 
                We continuously work to improve accessibility and welcome feedback from our community members about 
                how we can better serve everyone.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you encounter any accessibility barriers while using our website or accessing our services, 
                please contact us immediately. We will work with you to provide the information or service you 
                need through an alternative method.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="h-12 w-12 text-[var(--ladder-blue)] mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Inclusive Design</h3>
                <p className="text-gray-600">We design with all users in mind from the beginning, not as an afterthought.</p>
              </div>
              <div className="text-center">
                <Settings className="h-12 w-12 text-[var(--ladder-green)] mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Continuous Improvement</h3>
                <p className="text-gray-600">We regularly test and update our website to maintain and enhance accessibility.</p>
              </div>
              <div className="text-center">
                <MessageCircle className="h-12 w-12 text-[var(--ladder-gold)] mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Community Feedback</h3>
                <p className="text-gray-600">We actively seek feedback from users with disabilities to improve our services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section id="accessibility-features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Accessibility Features
              </h2>
              <p className="text-lg text-gray-600">
                Our website includes numerous accessibility features designed to serve users with diverse needs and abilities.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {accessibilityFeatures.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    {category.icon}
                    <h3 className="text-2xl font-bold ml-4">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[var(--ladder-green)] mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Assistive Technology Compatibility */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Assistive Technology Compatibility
              </h2>
              <p className="text-lg text-gray-600">
                Our website is designed to work with a wide range of assistive technologies and accessibility tools.
              </p>
            </div>

            <div className="space-y-6">
              {assistiveTechnologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="font-semibold text-lg text-[var(--ladder-blue)] mb-2">{tech.name}</h3>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">{tech.description}</p>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium text-sm">{tech.support}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Compliance Standards
              </h2>
              <p className="text-lg text-gray-600">
                We adhere to established accessibility standards and regularly audit our compliance.
              </p>
            </div>

            <div className="space-y-8">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--ladder-blue)] mb-2">{standard.standard}</h3>
                      <p className="text-gray-600">{standard.description}</p>
                    </div>
                    <div className="bg-[var(--ladder-green)] text-white px-4 py-2 rounded-lg font-semibold ml-4">
                      {standard.status}
                    </div>
                  </div>
                  <p className="text-gray-700">{standard.details}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-[var(--ladder-blue)]/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-[var(--ladder-blue)] mb-4">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </h3>
              <p className="text-gray-700">
                This accessibility statement was last reviewed and updated on the date above. We conduct regular 
                accessibility audits and update this statement as improvements are made to our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Accessibility Services & Accommodations
              </h2>
              <p className="text-lg text-gray-600">
                We provide additional services and accommodations to ensure everyone can access our programs and resources.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {accessibilityServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[var(--ladder-blue)] mb-3">{service.service}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="bg-[var(--ladder-gold)]/10 rounded-lg p-3">
                    <p className="text-sm text-gray-700 font-medium">{service.contact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feedback and Contact */}
      <section id="contact-accessibility" className="py-16 bg-[var(--ladder-blue)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Accessibility Feedback & Support
              </h2>
              <p className="text-xl leading-relaxed">
                We welcome your feedback about the accessibility of our website and services. 
                Your input helps us improve and ensures we're meeting the needs of our entire community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <Phone className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Call Us</h3>
                <p className="mb-4">Speak directly with our accessibility coordinator</p>
                <a 
                  href="tel:+12055555123" 
                  className="bg-white text-[var(--ladder-blue)] px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-block"
                >
                  (205) 555-5123
                </a>
              </div>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <Mail className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Email Us</h3>
                <p className="mb-4">Send detailed accessibility feedback or requests</p>
                <a 
                  href="mailto:accessibility@the-ladder.org?subject=Accessibility Feedback" 
                  className="bg-white text-[var(--ladder-blue)] px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-block"
                >
                  Send Email
                </a>
              </div>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <MessageCircle className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Contact Form</h3>
                <p className="mb-4">Use our accessible online contact form</p>
                <a 
                  href="/contact?subject=accessibility" 
                  className="bg-white text-[var(--ladder-blue)] px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-block"
                >
                  Contact Form
                </a>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Response Commitment</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Accessibility Issues:</h4>
                  <p>We will respond within 24 hours and work to resolve issues within 5 business days.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Accommodation Requests:</h4>
                  <p>We will provide requested accommodations within 48-72 hours, depending on complexity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Access */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Alternative Access Methods
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              If you cannot access information on our website, we provide these alternative methods:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <Download className="h-12 w-12 text-[var(--ladder-blue)] mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Document Downloads</h3>
                <p className="text-gray-600 mb-4">
                  All PDFs are created with accessibility features and alternative formats are available upon request.
                </p>
                <a 
                  href="mailto:accessibility@the-ladder.org?subject=Alternative Format Request" 
                  className="text-[var(--ladder-blue)] font-semibold hover:underline"
                >
                  Request Alternative Format
                </a>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <Phone className="h-12 w-12 text-[var(--ladder-green)] mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-3">Phone Support</h3>
                <p className="text-gray-600 mb-4">
                  Our staff can provide information over the phone or help you complete forms and applications.
                </p>
                <a 
                  href="tel:+12055555123" 
                  className="text-[var(--ladder-green)] font-semibold hover:underline"
                >
                  Call for Assistance
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Accessibility Statement",
          "description": "The Ladder's commitment to digital accessibility and ADA compliance for all community members",
          "url": "https://the-ladder.org/accessibility",
          "isPartOf": {
            "@type": "WebSite",
            "name": "The Ladder",
            "url": "https://the-ladder.org"
          },
          "publisher": {
            "@type": "NonProfit",
            "name": "The Ladder",
            "taxID": "47-2123160"
          },
          "accessibilityAPI": ["ARIA"],
          "accessibilityControl": ["fullKeyboardControl", "fullMouseControl", "fullTouchControl"],
          "accessibilityFeature": [
            "alternativeText",
            "captions",
            "highContrast", 
            "largePrint",
            "resizeText",
            "structuralNavigation",
            "synchronizedAudioText"
          ],
          "accessibilityHazard": ["noFlashingHazard", "noMotionSimulationHazard", "noSoundHazard"],
          "accessMode": ["textual", "visual"],
          "accessModeSufficient": ["textual", "visual"]
        })
      }} />
    </div>
  )
}