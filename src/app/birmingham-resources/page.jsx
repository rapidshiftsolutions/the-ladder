import GlassNavigation from '/src/components/GlassNavigation'
import Footer from '/src/components/sitewide-footer'
import { Phone, Mail, MapPin, Clock, ExternalLink, Search, Heart, Home, Briefcase, GraduationCap, Shield, Users, Stethoscope } from 'lucide-react'

export const metadata = {
  title: 'Birmingham Resources Directory | The Ladder Community Resource Guide',
  description: 'Comprehensive directory of Birmingham, Alabama community resources. Find emergency assistance, housing help, healthcare, employment services, and crisis intervention resources.',
  keywords: [
    'Birmingham Alabama resources',
    'Birmingham community services',
    'emergency assistance Birmingham',
    'Birmingham nonprofit directory',
    'crisis resources Birmingham AL',
    'Birmingham social services',
    'community resources Alabama',
    'Birmingham assistance programs',
    'local help Birmingham',
    'Birmingham emergency services',
    'community support Birmingham',
    'Birmingham resource guide',
    'Jefferson County resources',
    'Birmingham crisis help'
  ],
  openGraph: {
    title: 'Birmingham Resources Directory | The Ladder Community Resource Guide',
    description: 'Find emergency assistance, housing help, healthcare, and crisis intervention resources in Birmingham, Alabama.',
    url: 'https://www.the-ladder.org/birmingham-resources',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Ladder'
  },
  alternates: {
    canonical: 'https://www.the-ladder.org/birmingham-resources'
  }
}

export default function BirminghamResourcesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <GlassNavigation />
      <div className="flex-1 bg-gradient-to-b from-background-dark to-surface-900">
        
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-tiltwarp font-bold text-text-primary mb-6">
                Birmingham <span className="text-primary-400">Resources</span>
              </h1>
              <p className="text-xl sm:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                A comprehensive directory of community resources in Birmingham and Jefferson County. 
                Find the help you need or discover organizations where you can make a difference.
              </p>
            </div>

            {/* Emergency Resources Banner */}
            <div className="mb-16 max-w-4xl mx-auto">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Phone className="w-8 h-8 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      Emergency Resources
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-text-secondary mb-2"><strong className="text-text-primary">Crisis:</strong></p>
                        <p className="text-text-secondary">• 911 - Emergency Services</p>
                        <p className="text-text-secondary">• 988 - Suicide & Crisis Lifeline</p>
                        <p className="text-text-secondary">• 211 - Community Resources Hotline</p>
                      </div>
                      <div>
                        <p className="text-text-secondary mb-2"><strong className="text-text-primary">The Ladder:</strong></p>
                        <p className="text-text-secondary">• (205) 522-1162 - Crisis Support</p>
                        <p className="text-text-secondary">• help@the-ladder.org</p>
                        <p className="text-text-secondary">• 24/7 voicemail for priority response</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Resource Categories
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Browse by category to find the specific type of assistance you need
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Housing & Utilities */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Home className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Housing & Utilities</h3>
                </div>
                <p className="text-text-secondary mb-4">
                  Emergency rental assistance, utility help, homeless services, and housing programs
                </p>
                <a 
                  href="#housing-utilities" 
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                >
                  View Resources <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>

              {/* Employment */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Briefcase className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Employment & Training</h3>
                </div>
                <p className="text-text-secondary mb-4">
                  Job search assistance, skills training, career development, and workforce programs
                </p>
                <a 
                  href="#employment-training" 
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                >
                  View Resources <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>

              {/* Healthcare */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Stethoscope className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Healthcare & Mental Health</h3>
                </div>
                <p className="text-text-secondary mb-4">
                  Medical services, mental health support, substance abuse treatment, and prescription help
                </p>
                <a 
                  href="#healthcare-mental" 
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                >
                  View Resources <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>

              {/* Food Security */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Food & Basic Needs</h3>
                </div>
                <p className="text-text-secondary mb-4">
                  Food pantries, meal programs, clothing assistance, and basic necessities
                </p>
                <a 
                  href="#food-basic-needs" 
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                >
                  View Resources <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>

              {/* Family Services */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Family & Children</h3>
                </div>
                <p className="text-text-secondary mb-4">
                  Childcare assistance, family counseling, youth programs, and parenting support
                </p>
                <a 
                  href="#family-children" 
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                >
                  View Resources <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>

              {/* Legal Services */}
              <div className="bg-surface-800/50 rounded-xl p-6 border border-primary-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Legal & Financial</h3>
                </div>
                <p className="text-text-secondary mb-4">
                  Legal aid, immigration help, financial counseling, and debt management
                </p>
                <a 
                  href="#legal-financial" 
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                >
                  View Resources <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Housing & Utilities Resources */}
        <section id="housing-utilities" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-12">
              <Home className="w-8 h-8 text-primary-400 mr-3" />
              <h2 className="text-3xl font-tiltwarp font-bold text-text-primary">
                Housing & Utilities
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Emergency Housing */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Emergency Housing & Assistance</h3>
                
                <div className="bg-surface-800/50 rounded-lg p-6 border border-primary-500/20">
                  <h4 className="font-semibold text-text-primary mb-2">United Way of Central Alabama</h4>
                  <p className="text-text-secondary text-sm mb-3">Emergency rental and utility assistance</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">(205) 251-5131</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">2900 18th St S, Birmingham, AL</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">Mon-Fri 8:30 AM - 5:00 PM</span>
                    </div>
                  </div>
                  <p className="text-xs text-text-secondary mt-3">
                    Call 211 for assistance application or visit website for eligibility requirements
                  </p>
                </div>

                <div className="bg-surface-800/50 rounded-lg p-6 border border-primary-500/20">
                  <h4 className="font-semibold text-text-primary mb-2">Birmingham Housing Authority</h4>
                  <p className="text-text-secondary text-sm mb-3">Public housing and Section 8 rental assistance</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">(205) 521-0501</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">1826 3rd Ave N, Birmingham, AL</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-primary-400" />
                      <a href="https://www.habd.org" className="text-primary-400 hover:text-primary-300">habd.org</a>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-800/50 rounded-lg p-6 border border-primary-500/20">
                  <h4 className="font-semibold text-text-primary mb-2">Habitat for Humanity Birmingham</h4>
                  <p className="text-text-secondary text-sm mb-3">Affordable homeownership and home repairs</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">(205) 942-8949</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">2304 12th St N, Birmingham, AL</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Homeless Services */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Homeless Services</h3>
                
                <div className="bg-surface-800/50 rounded-lg p-6 border border-primary-500/20">
                  <h4 className="font-semibold text-text-primary mb-2">Birmingham Health Care for the Homeless</h4>
                  <p className="text-text-secondary text-sm mb-3">Healthcare and case management for homeless individuals</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">(205) 930-0775</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">3420 4th Ave S, Birmingham, AL</span>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-800/50 rounded-lg p-6 border border-primary-500/20">
                  <h4 className="font-semibold text-text-primary mb-2">The Firehouse Shelter</h4>
                  <p className="text-text-secondary text-sm mb-3">Emergency shelter and transitional housing</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">(205) 252-8250</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">626 2nd St S, Birmingham, AL</span>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-800/50 rounded-lg p-6 border border-primary-500/20">
                  <h4 className="font-semibold text-text-primary mb-2">Family Promise of Greater Birmingham</h4>
                  <p className="text-text-secondary text-sm mb-3">Family homeless prevention and shelter</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">(205) 879-3988</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">2516 12th Ave N, Birmingham, AL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Employment & Training Resources */}
        <section id="employment-training" className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-12">
              <Briefcase className="w-8 h-8 text-primary-400 mr-3" />
              <h2 className="text-3xl font-tiltwarp font-bold text-text-primary">
                Employment & Training
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Job Services */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Job Search & Placement</h3>
                
                <div className="bg-surface-800/50 rounded-lg p-6 border border-primary-500/20">
                  <h4 className="font-semibold text-text-primary mb-2">Alabama Department of Labor - Birmingham</h4>
                  <p className="text-text-secondary text-sm mb-3">Unemployment benefits, job search assistance</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">(205) 933-7660</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">1195 Reverend Abraham Woods Jr Blvd</span>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-800/50 rounded-lg p-6 border border-primary-500/20">
                  <h4 className="font-semibold text-text-primary mb-2">Birmingham Works</h4>
                  <p className="text-text-secondary text-sm mb-3">Workforce development and job training programs</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">(205) 578-5627</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">1900 3rd Ave N, Birmingham, AL</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Training */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Skills Training & Education</h3>
                
                <div className="bg-surface-800/50 rounded-lg p-6 border border-primary-500/20">
                  <h4 className="font-semibold text-text-primary mb-2">Jefferson State Community College</h4>
                  <p className="text-text-secondary text-sm mb-3">Workforce training and continuing education</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">(205) 853-1200</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">2601 Carson Rd, Birmingham, AL</span>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-800/50 rounded-lg p-6 border border-primary-500/20">
                  <h4 className="font-semibold text-text-primary mb-2">Goodwill Career Center</h4>
                  <p className="text-text-secondary text-sm mb-3">Job training, placement, and career services</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">(205) 323-6611</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">2350 Green Springs Hwy, Birmingham, AL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare & Mental Health Resources */}
        <section id="healthcare-mental" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-12">
              <Stethoscope className="w-8 h-8 text-primary-400 mr-3" />
              <h2 className="text-3xl font-tiltwarp font-bold text-text-primary">
                Healthcare & Mental Health
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Healthcare */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Healthcare Services</h3>
                
                <div className="bg-surface-800/50 rounded-lg p-6 border border-primary-500/20">
                  <h4 className="font-semibold text-text-primary mb-2">Jefferson County Health Department</h4>
                  <p className="text-text-secondary text-sm mb-3">Primary care, immunizations, health screenings</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">(205) 933-9110</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">1400 6th Ave S, Birmingham, AL</span>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-800/50 rounded-lg p-6 border border-primary-500/20">
                  <h4 className="font-semibold text-text-primary mb-2">Community Care Plan</h4>
                  <p className="text-text-secondary text-sm mb-3">Free and low-cost healthcare for uninsured</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">(205) 930-0848</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">908 20th St S, Birmingham, AL</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mental Health */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Mental Health & Crisis Services</h3>
                
                <div className="bg-surface-800/50 rounded-lg p-6 border border-primary-500/20">
                  <h4 className="font-semibold text-text-primary mb-2">Jefferson-Blount-St. Clair Mental Health</h4>
                  <p className="text-text-secondary text-sm mb-3">Mental health services and crisis intervention</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">(205) 901-1351</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-red-400" />
                      <span className="text-text-secondary">Crisis Line: (205) 323-7777</span>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-800/50 rounded-lg p-6 border border-primary-500/20">
                  <h4 className="font-semibold text-text-primary mb-2">Crisis Center Birmingham</h4>
                  <p className="text-text-secondary text-sm mb-3">24/7 crisis counseling and suicide prevention</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-red-400" />
                      <span className="text-text-secondary">Crisis Line: (205) 323-7777</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary-400" />
                      <span className="text-text-secondary">National: 988</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Quick Reference */}
        <section className="py-16 bg-surface-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-tiltwarp font-bold text-text-primary mb-4">
                Quick Reference Numbers
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Important phone numbers to keep handy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-surface-800/50 rounded-lg p-4 text-center border border-primary-500/20">
                <Phone className="w-6 h-6 text-red-400 mx-auto mb-2" />
                <p className="font-semibold text-text-primary">911</p>
                <p className="text-sm text-text-secondary">Emergency Services</p>
              </div>

              <div className="bg-surface-800/50 rounded-lg p-4 text-center border border-primary-500/20">
                <Phone className="w-6 h-6 text-red-400 mx-auto mb-2" />
                <p className="font-semibold text-text-primary">988</p>
                <p className="text-sm text-text-secondary">Suicide & Crisis Lifeline</p>
              </div>

              <div className="bg-surface-800/50 rounded-lg p-4 text-center border border-primary-500/20">
                <Phone className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                <p className="font-semibold text-text-primary">211</p>
                <p className="text-sm text-text-secondary">Community Resources</p>
              </div>

              <div className="bg-surface-800/50 rounded-lg p-4 text-center border border-primary-500/20">
                <Phone className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                <p className="font-semibold text-text-primary">(205) 522-1162</p>
                <p className="text-sm text-text-secondary">The Ladder Crisis Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-primary-500/10 rounded-2xl border border-primary-500/20 p-8 lg:p-12">
              <h2 className="text-3xl sm:text-4xl font-tiltwarp font-bold text-text-primary mb-4">
                Need Help Navigating These Resources?
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Don't know where to start? The Ladder can help you navigate this directory and connect 
                you directly with the organizations that can best help your specific situation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/get-help"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 text-lg"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Get Personal Navigation Help
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-surface-800/50 backdrop-blur-sm border border-primary-500/30 text-text-primary font-medium rounded-lg hover:bg-surface-700/50 transition-all duration-300 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (205) 522-1162
                </a>
              </div>

              <div className="text-sm text-text-secondary">
                <strong className="text-text-primary">Free Resource Navigation:</strong> 
                We'll help you find the right organization and make the connection for you.
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-surface-800/30 rounded-lg p-6 text-center">
              <p className="text-sm text-text-secondary">
                <strong className="text-text-primary">Resource Directory Disclaimer:</strong> This directory is maintained as a community service. 
                Organizations may change their services, hours, or contact information. For the most current information, 
                please contact organizations directly. Last updated: January 2025. 
                <a href="/contact" className="text-primary-400 hover:text-primary-300">Report outdated information</a>.
              </p>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  )
}