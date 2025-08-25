// Shared navigation data for The Ladder nonprofit
// Used by both navbar and footer components

export const NavItems = [
  {
    name: "How We Help",
    sections: [
      {
        heading: "Our Services",
        links: [
          { name: "Crisis Intervention", href: "/how-we-help" },
          { name: "Barrier Removal Process", href: "/how-we-help#process" },
          { name: "Emergency Assistance", href: "/get-help" },
          { name: "Individual Support", href: "/how-we-help#support" },
        ]
      },
      {
        heading: "Common Barriers",
        links: [
          { name: "Housing & Shelter", href: "/barrier-removal-guide#housing" },
          { name: "Employment & Income", href: "/barrier-removal-guide#employment" },
          { name: "Financial Stability", href: "/barrier-removal-guide#financial" },
          { name: "Health & Wellness", href: "/barrier-removal-guide#health" },
        ]
      },
      {
        heading: "Success Stories",
        links: [
          { name: "Read Impact Stories", href: "/success-stories" },
          { name: "Barrier Removal Guide", href: "/barrier-removal-guide" },
          { name: "Community Resources", href: "/birmingham-resources" },
        ]
      }
    ]
  },
  {
    name: "Get Involved",
    sections: [
      {
        heading: "Support Our Mission",
        links: [
          { name: "Donate Now", href: "/donate" },
          { name: "Monthly Giving", href: "/monthly-giving" },
          { name: "Volunteer Opportunities", href: "/volunteer" },
          { name: "Corporate Partnerships", href: "/corporate-partnerships" },
        ]
      },
      {
        heading: "Partner With Us",
        links: [
          { name: "Nonprofit Partners", href: "/partners" },
          { name: "Refer Someone", href: "/get-help#refer" },
          { name: "Board Service", href: "/board-governance" },
        ]
      },
      {
        heading: "Stay Connected",
        links: [
          { name: "Newsletter Signup", href: "/contact#newsletter" },
          { name: "Annual Reports", href: "/annual-reports" },
          { name: "Impact Updates", href: "/success-stories" },
        ]
      }
    ]
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Get Help",
    href: "/get-help",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

// Simple navigation items for footer (no nested sections)
export const FooterNavItems = [
  {
    name: "Our Services",
    links: [
      { name: "Crisis Intervention", href: "/how-we-help" },
      { name: "Barrier Removal", href: "/barrier-removal-guide" },
      { name: "Emergency Assistance", href: "/get-help" },
      { name: "Community Resources", href: "/birmingham-resources" },
    ]
  },
  {
    name: "Get Involved",
    links: [
      { name: "Donate Now", href: "/donate" },
      { name: "Monthly Giving", href: "/monthly-giving" },
      { name: "Volunteer", href: "/volunteer" },
      { name: "Corporate Partnerships", href: "/corporate-partnerships" },
    ]
  },
  {
    name: "About",
    links: [
      { name: "Our Mission", href: "/about" },
      { name: "Leadership Team", href: "/board-governance" },
      { name: "Success Stories", href: "/success-stories" },
      { name: "Partners", href: "/partners" },
    ]
  },
  {
    name: "Transparency",
    links: [
      { name: "Annual Reports", href: "/annual-reports" },
      { name: "Financials", href: "/financials" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms-of-service" },
    ]
  }
];