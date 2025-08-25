import Section, { SectionHeader } from './Section'
import Card from './Card'
import { Quote, ArrowRight } from 'lucide-react'

/**
 * Success Stories section showing impact testimonials
 * Used on homepage and success stories page
 */
export default function SuccessStories({ showAll = false, limit = 3 }) {
  const stories = [
    {
      name: "Maria S.",
      situation: "Housing instability with two young children",
      barrier: "Lack of rental deposit and poor credit history",
      outcome: "Secured stable housing and obtained full-time employment",
      timeframe: "8 months",
      quote: "The Ladder helped me see that my challenges weren't permanent roadblocks, but temporary barriers that could be overcome with the right support.",
      impact: "Now helps other single mothers navigate housing challenges"
    },
    {
      name: "James T.",
      situation: "Recently released from incarceration", 
      barrier: "Criminal background preventing employment",
      outcome: "Completed job training and found employment with background-friendly employer",
      timeframe: "14 months",
      quote: "I thought my past would always hold me back, but I learned there are employers who value second chances and programs that help you build new skills.",
      impact: "Mentors others with criminal backgrounds"
    },
    {
      name: "Sandra W.",
      situation: "Overwhelming medical debt and depression",
      barrier: "Mental health challenges and financial stress",
      outcome: "Connected with mental health services and developed debt repayment plan",
      timeframe: "10 months",
      quote: "The barrier removal approach helped me address my mental health first, which gave me the strength to tackle my other challenges.",
      impact: "Volunteers as peer support specialist"
    },
    {
      name: "Robert M.",
      situation: "Disabled veteran struggling with PTSD",
      barrier: "Difficulty navigating VA benefits system",
      outcome: "Received full disability benefits and stable housing",
      timeframe: "6 months",
      quote: "The Ladder connected me with advocates who understood the system. I finally got the benefits I earned and the help I needed.",
      impact: "Helps other veterans access services"
    }
  ]

  const displayStories = showAll ? stories : stories.slice(0, limit)

  return (
    <Section backgroundColor="bg-gray-50" id="success-stories">
      <SectionHeader 
        subtitle="Real Impact"
        title="Success Stories: Barriers Removed, Lives Changed"
        description="Every individual we help has a unique story. Here are just a few examples of how removing specific barriers leads to lasting success."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {displayStories.map((story, index) => (
          <Card key={index} variant="elevated" className="h-full">
            <div className="flex items-start mb-4">
              <Quote className="h-8 w-8 text-[var(--ladder-gold)] mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{story.name}</h3>
                <p className="text-sm text-[var(--ladder-blue)] font-medium">{story.timeframe} journey</p>
              </div>
            </div>
            
            <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
              "{story.quote}"
            </blockquote>
            
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-semibold text-gray-900">Situation: </span>
                <span className="text-gray-600">{story.situation}</span>
              </div>
              <div>
                <span className="font-semibold text-[var(--ladder-red)]">Barrier: </span>
                <span className="text-gray-600">{story.barrier}</span>
              </div>
              <div>
                <span className="font-semibold text-[var(--ladder-green)]">Outcome: </span>
                <span className="text-gray-600">{story.outcome}</span>
              </div>
              {story.impact && (
                <div>
                  <span className="font-semibold text-[var(--ladder-gold)]">Today: </span>
                  <span className="text-gray-600">{story.impact}</span>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {!showAll && (
        <div className="text-center">
          <a 
            href="/success-stories" 
            className="inline-flex items-center justify-center px-6 py-3 bg-[var(--ladder-blue)] text-white font-semibold rounded-lg hover:bg-[var(--ladder-blue)]/90 transition-colors"
          >
            Read More Success Stories
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      )}
    </Section>
  )
}