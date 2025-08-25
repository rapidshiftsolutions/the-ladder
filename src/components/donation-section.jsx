import Section, { SectionHeader } from './Section'
import { DollarSign, Heart, Users, TrendingUp } from 'lucide-react'

/**
 * Donation section for homepage showing impact of giving
 * Encourages both one-time and monthly donations
 */
export default function DonationSection() {
  const impactLevels = [
    {
      amount: "$25",
      impact: "Emergency transportation assistance for job interviews or medical appointments",
      icon: <Heart className="h-6 w-6 text-[var(--ladder-red)]" />
    },
    {
      amount: "$75",
      impact: "Utility deposit assistance to prevent eviction and maintain housing stability", 
      icon: <Users className="h-6 w-6 text-[var(--ladder-green)]" />
    },
    {
      amount: "$150",
      impact: "Job training program enrollment to overcome employment barriers",
      icon: <TrendingUp className="h-6 w-6 text-[var(--ladder-blue)]" />
    },
    {
      amount: "$300+",
      impact: "Comprehensive barrier removal support including housing deposits and certification costs",
      icon: <DollarSign className="h-6 w-6 text-[var(--ladder-gold)]" />
    }
  ]

  return (
    <Section backgroundColor="bg-white" id="donate">
      <SectionHeader 
        subtitle="Make a Difference"
        title="Your Donation Directly Removes Barriers"
        description="Every dollar you give goes directly to helping individuals overcome the specific obstacles preventing their success. See the real impact of your generosity."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {impactLevels.map((level, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-lg mb-4">
              {level.icon}
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">{level.amount}</div>
            <p className="text-gray-600 text-sm leading-relaxed">{level.impact}</p>
          </div>
        ))}
      </div>

      {/* Donation options */}
      <div className="bg-gradient-to-r from-[var(--ladder-blue)] to-[var(--ladder-green)] rounded-2xl p-8 lg:p-12 text-white text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Choose How You'd Like to Help
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* One-time donation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-3">One-Time Donation</h4>
            <p className="text-white/90 mb-6">
              Make an immediate impact by helping someone overcome a specific barrier today.
            </p>
            <a 
              href="/donate" 
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-[var(--ladder-blue)] font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Donate Now
            </a>
          </div>

          {/* Monthly giving */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-3">Monthly Giving</h4>
            <p className="text-white/90 mb-6">
              Join our "Ladder Climbers" and provide sustainable support for ongoing barrier removal.
            </p>
            <a 
              href="/monthly-giving" 
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-[var(--ladder-gold)] text-white font-semibold rounded-lg hover:bg-[var(--ladder-gold)]/90 transition-colors"
            >
              Become a Ladder Climber
            </a>
          </div>
        </div>

        {/* Tax deductible notice */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <p className="text-white/90 text-sm">
            <strong>The Ladder is a 501(c)(3) tax-exempt organization (EIN: 47-2123160)</strong><br />
            Your donation is tax-deductible to the extent allowed by law
          </p>
        </div>
      </div>
    </Section>
  )
}