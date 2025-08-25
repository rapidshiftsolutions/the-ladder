import Section, { SectionHeader } from './Section'
import Card from './Card'
import { Users, Target, Heart, Handshake } from 'lucide-react'

/**
 * How We Help section for homepage
 * Explains The Ladder's service model and approach
 */
export default function HowWeHelpSection() {
  const steps = [
    {
      icon: <Users className="h-6 w-6 text-[var(--ladder-blue)]" />,
      title: "Partner Identifies Need",
      description: "A nonprofit partner identifies someone facing a barrier they can't overcome - something preventing success but outside their scope."
    },
    {
      icon: <Target className="h-6 w-6 text-[var(--ladder-green)]" />,
      title: "We Assess the Barrier",
      description: "The Ladder interviews the person to understand their story and identify the specific 'missing rung' preventing their progress."
    },
    {
      icon: <Heart className="h-6 w-6 text-[var(--ladder-red)]" />,
      title: "Provide Targeted Support",
      description: "We work with the individual to remove their specific barrier through direct assistance, resources, or advocacy."
    },
    {
      icon: <Handshake className="h-6 w-6 text-[var(--ladder-gold)]" />,
      title: "Follow Up for Success",
      description: "Ongoing support and accountability to ensure sustainable progress and connection to additional resources as needed."
    }
  ]

  return (
    <Section backgroundColor="bg-white" id="how-we-help">
      <SectionHeader 
        subtitle="Our Approach"
        title="How We Help People Climb Over Barriers"
        description="We focus on people over problems, addressing individual roadblocks rather than specific issues. Each person has unique barriers preventing their progress."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {steps.map((step, index) => (
          <Card key={index} variant="bordered" className="text-center">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-50 rounded-lg mb-3">
                {step.icon}
              </div>
              <div className="w-8 h-8 bg-[var(--ladder-blue)] text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                {index + 1}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
          </Card>
        ))}
      </div>

      {/* Mission Statement */}
      <div className="bg-[var(--ladder-blue)]/5 rounded-2xl p-8 lg:p-12 text-center">
        <blockquote className="text-xl md:text-2xl font-medium text-gray-900 mb-6">
          "We focus on people over problems, helping individuals one by one climb over very specific, personal barriers that are otherwise keeping them from moving forward in life."
        </blockquote>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/how-we-help" 
            className="inline-flex items-center justify-center px-6 py-3 bg-[var(--ladder-blue)] text-white font-semibold rounded-lg hover:bg-[var(--ladder-blue)]/90 transition-colors"
          >
            Learn More About Our Services
          </a>
          <a 
            href="/partners" 
            className="inline-flex items-center justify-center px-6 py-3 border border-[var(--ladder-blue)] text-[var(--ladder-blue)] font-semibold rounded-lg hover:bg-[var(--ladder-blue)] hover:text-white transition-colors"
          >
            Partner Organizations
          </a>
        </div>
      </div>
    </Section>
  )
}