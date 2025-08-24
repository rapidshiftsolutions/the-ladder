// Shared navigation data for OEM Radio Repair
// Used by both navbar and footer components

export const NavItems = [
  {
    name: "Shop by Vehicle",
    sections: [
      {
        heading: "Dodge",
        links: [
          { name: "Charger (2011-2014)", href: "/repair/dodge/charger/2011-2014" },
          { name: "Journey (2011-2019)", href: "/repair/dodge/journey/2011-2019" },
          { name: "Challenger (2011-2020)", href: "/repair/dodge/challenger/2011-2020" },
          { name: "Durango (2011-2021)", href: "/repair/dodge/durango/2011-2021" },
        ]
      },
      {
        heading: "Chrysler",
        links: [
          { name: "300 (2011-2014)", href: "/repair/chrysler/300/2011-2014" },
          { name: "Pacifica (2017-2023)", href: "/repair/chrysler/pacifica/2017-2023" },
          { name: "Voyager (2020-2023)", href: "/repair/chrysler/voyager/2020-2023" },
        ]
      },
      {
        heading: "Jeep",
        links: [
          { name: "Wrangler JL (2018-2023)", href: "/repair/jeep/wrangler-jl/2018-2023" },
          { name: "Grand Cherokee WK (2014-2022)", href: "/repair/jeep/grand-cherokee-wk/2014-2022" },
          { name: "Compass (2017-2021)", href: "/repair/jeep/compass/2017-2021" },
        ]
      },
      {
        heading: "Cadillac",
        links: [
          { name: "CTS (2013-2019)", href: "/repair/cadillac/cts/2013-2019" },
          { name: "ATS (2013-2019)", href: "/repair/cadillac/ats/2013-2019" },
          { name: "Escalade (2015-2020)", href: "/repair/cadillac/escalade/2015-2020" },
        ]
      },
      {
        heading: "Ram",
        links: [
          { name: "1500 (2013-2018)", href: "/repair/ram/1500/2013-2018" },
          { name: "2500/3500 HD (2013-2018)", href: "/repair/ram/2500-3500-hd/2013-2018" },
        ]
      }
    ]
  },
  {
    name: "Repair Services",
    sections: [
      {
        heading: "Screen Repairs",
        links: [
          { name: "Digitizer Replacement - $400", href: "/services/digitizer-replacement" },
          { name: "LCD Replacement - $550", href: "/services/lcd-replacement" },
          { name: "Complete Screen Assembly", href: "/services/complete-screen" },
        ]
      },
      {
        heading: "Common Issues",
        links: [
          { name: "Touchscreen Not Responding", href: "/services/touchscreen-repair" },
          { name: "Screen Flickering/Black", href: "/services/display-repair" },
          { name: "Cracked Screen Glass", href: "/services/glass-repair" },
          { name: "Ghost Touch Problems", href: "/services/ghost-touch" },
        ]
      },
      {
        heading: "Service Process",
        links: [
          { name: "Mail-In Service", href: "/services/mail-in-service" },
          { name: "How It Works", href: "/how-it-works" },
          { name: "Shipping Instructions", href: "/shipping-instructions" },
          { name: "Warranty Coverage", href: "/warranty" },
        ]
      }
    ]
  },
  {
    name: "Locations",
    href: "/locations",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

// Simple navigation items for footer (no nested sections)
export const FooterNavItems = [
  {
    name: "Services",
    links: [
      { name: "Digitizer Replacement", href: "/services/digitizer-replacement" },
      { name: "LCD Replacement", href: "/services/lcd-replacement" },
      { name: "Mail-In Service", href: "/services/mail-in-service" },
      { name: "Warranty Coverage", href: "/warranty" },
    ]
  },
  {
    name: "Vehicles",
    links: [
      { name: "Dodge Repairs", href: "/repair/dodge" },
      { name: "Chrysler Repairs", href: "/repair/chrysler" },
      { name: "Jeep Repairs", href: "/repair/jeep" },
      { name: "Cadillac Repairs", href: "/repair/cadillac" },
      { name: "Ram Repairs", href: "/repair/ram" },
    ]
  },
  {
    name: "Support",
    links: [
      { name: "How It Works", href: "/how-it-works" },
      { name: "Shipping Instructions", href: "/shipping-instructions" },
      { name: "FAQ", href: "/contact#faq" },
      { name: "Contact", href: "/contact" },
    ]
  },
  {
    name: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Service Locations", href: "/locations" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ]
  }
];