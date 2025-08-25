import Hero from './Hero'
import { Heart } from 'lucide-react'

/**
 * Main hero section for The Ladder homepage
 * Uses the reusable Hero component with nonprofit-specific content
 */
export default function LadderHero() {
  return (
    <Hero
      title="Helping People Climb Over Life's Barriers"
      description="Birmingham's 501(c)(3) nonprofit partnering with organizations to help individuals overcome specific obstacles preventing their success. Crisis intervention, emergency assistance, and barrier removal support."
      primaryCTA={{
        text: "Apply for Help",
        href: "/get-help",
        icon: Heart
      }}
      secondaryCTA={{
        text: "Donate Now",
        href: "/donate"
      }}
      backgroundGradient="from-[var(--ladder-blue)] via-[var(--ladder-blue-light)] to-[var(--ladder-green)]"
    >
      {/* Additional hero content */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-2xl font-bold mb-2">150+</div>
          <div className="text-sm opacity-90">People Helped</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold mb-2">87%</div>
          <div className="text-sm opacity-90">Success Rate</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold mb-2">24hr</div>
          <div className="text-sm opacity-90">Response Time</div>
        </div>
      </div>
    </Hero>
  )
}