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
      {/* Glass Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="glass-card-strong p-6 rounded-2xl text-center shadow-glass-md hover:shadow-glass-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="text-4xl md:text-5xl font-bold font-heading mb-3 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent">
            150+
          </div>
          <div className="text-sm font-medium text-white/90 uppercase tracking-wider">
            People Helped
          </div>
          <div className="mt-2 w-12 h-1 bg-gradient-to-r from-[var(--ladder-gold)] to-[var(--ladder-red)] mx-auto rounded-full opacity-60"></div>
        </div>
        <div className="glass-card-strong p-6 rounded-2xl text-center shadow-glass-md hover:shadow-glass-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="text-4xl md:text-5xl font-bold font-heading mb-3 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent">
            87%
          </div>
          <div className="text-sm font-medium text-white/90 uppercase tracking-wider">
            Success Rate
          </div>
          <div className="mt-2 w-12 h-1 bg-gradient-to-r from-[var(--ladder-green)] to-[var(--ladder-gold)] mx-auto rounded-full opacity-60"></div>
        </div>
        <div className="glass-card-strong p-6 rounded-2xl text-center shadow-glass-md hover:shadow-glass-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="text-4xl md:text-5xl font-bold font-heading mb-3 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent">
            24hr
          </div>
          <div className="text-sm font-medium text-white/90 uppercase tracking-wider">
            Response Time
          </div>
          <div className="mt-2 w-12 h-1 bg-gradient-to-r from-[var(--ladder-blue)] to-[var(--ladder-green)] mx-auto rounded-full opacity-60"></div>
        </div>
      </div>
    </Hero>
  )
}