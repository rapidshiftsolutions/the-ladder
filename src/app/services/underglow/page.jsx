import Navbar from '/src/components/sitewide-navbar';
import Footer from '/src/components/sitewide-footer-newport';
import ServicePageContent from '/src/components/service-page-content';

export const metadata = {
  title: 'Underglow & LED Lighting in Birmingham, AL | Custom Car Lighting Installation',
  description: 'Professional underglow and LED lighting installation in Birmingham, AL starting at $249.99. RGB underglow kits, interior lighting, rock lights, and custom LED projects. Expert installation with 12-month warranty. Call (205) 522-1162.',
  keywords: [
    'underglow Newport TN',
    'LED lighting Newport Tennessee',
    'custom car lighting Newport',
    'underglow installation Newport TN',
    'LED underglow Newport',
    'car lighting Newport Tennessee',
    'custom lighting Newport TN',
    'LED installation Newport',
    'underglow kit Newport TN',
    'rock lights Newport',
    'interior lighting Newport TN',
    'light bar installation Newport',
    'custom LED Newport Tennessee',
    'car lighting 37821',
    'underglow shop Newport TN'
  ],
  openGraph: {
    title: 'Underglow & LED Lighting in Birmingham, AL | Custom Car Lighting Installation',
    description: 'Professional underglow and LED lighting installation in Birmingham, AL starting at $249.99. RGB underglow kits, interior lighting, and custom LED projects.',
    url: 'https://oemradiorepair.com/services/underglow',
    type: 'website',
    locale: 'en_US',
    siteName: 'OEM Radio Repair',
    images: [
      {
        url: '/NewportPitstop/pexels/lighting_and_underglow.webp',
        width: 1200,
        height: 630,
        alt: 'Underglow & LED Lighting in Birmingham, AL - OEM Radio Repair'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Underglow & LED Lighting in Birmingham, AL | Custom Car Lighting',
    description: 'Professional underglow and LED lighting installation in Birmingham, AL starting at $249.99. Expert installation with 12-month warranty.',
    images: ['/NewportPitstop/pexels/lighting_and_underglow.webp']
  },
  alternates: {
    canonical: 'https://oemradiorepair.com/services/underglow'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function UnderglowPage() {
  const serviceData = {
    title: "Underglow & LED Lighting",
    subtitle: "Custom Lighting Solutions",
    description: "Professional LED underglow and custom lighting installations for the ultimate show car look",
    image: "/NewportPitstop/pexels/lighting_and_underglow.webp",
    startingPrice: "$249.99+",
    duration: "2-6 hours",
    
    features: [
      "Professional installation",
      "Weatherproof connections",
      "Custom mounting solutions",
      "Control system setup",
      "Legal compliance check",
      "12-month installation warranty"
    ],
    
    serviceTypes: [
      {
        name: "Full Underglow Kit Installation",
        description: "Complete RGB underglow system with wireless control and multiple effects",
        features: [
          "RGB color-changing LEDs",
          "Smartphone app control",
          "Multiple lighting patterns", 
          "Music sync capability",
          "Weatherproof installation"
        ],
        price: "Starting at $625+ (plus kit)",
        duration: "4-6 hours",
        warranty: "12 months on installation, kit warranty varies"
      },
      {
        name: "Single Color Underglow", 
        description: "Simple single-color underglow for a clean, classic look",
        features: [
          "Choice of colors",
          "On/off switch control",
          "Professional wiring",
          "Waterproof connectors",
          "Clean installation"
        ],
        price: "Starting at $375+ (plus kit)",
        duration: "3-4 hours", 
        warranty: "12 months on installation"
      },
      {
        name: "Interior LED Package",
        description: "Complete interior lighting makeover with custom LED strips and accents",
        features: [
          "Footwell lighting",
          "Door panel illumination",
          "Dashboard accent lighting",
          "Cup holder lighting",
          "Color-changing options"
        ],
        price: "Starting at $500+ (plus parts)",
        duration: "4-5 hours",
        warranty: "12 months on installation"
      },
      {
        name: "Rock Light Installation",
        description: "Off-road LED rock lights for trucks and SUVs", 
        features: [
          "High-output LED pods",
          "Rock-solid mounting",
          "Waterproof design",
          "Switch control",
          "Multiple pod options"
        ],
        price: "Starting at $312.50+ (plus lights)",
        duration: "2-3 hours",
        warranty: "12 months on installation"
      },
      {
        name: "Custom LED Projects",
        description: "One-off custom lighting projects for unique applications",
        features: [
          "Custom design consultation",
          "Unique mounting solutions",
          "Professional fabrication",
          "Advanced control systems", 
          "Show-quality finish"
        ],
        price: "Quote based on project scope",
        duration: "Varies by project",
        warranty: "12 months on installation"
      },
      {
        name: "Light Bar Installation",
        description: "LED light bars for work trucks and off-road vehicles",
        features: [
          "Roof and bumper mounting",
          "Relay and switch wiring",
          "Spot and flood patterns",
          "Various sizes available",
          "Professional installation"
        ],
        price: "Starting at $250+ (plus light bar)", 
        duration: "2-4 hours",
        warranty: "12 months on installation"
      }
    ],
    benefits: [
      {
        title: "Show-Quality Installation",
        description: "Clean, professional wiring with hidden connections"
      },
      {
        title: "Legal Compliance", 
        description: "We ensure installations meet local lighting regulations"
      },
      {
        title: "Weatherproof Design",
        description: "All connections properly sealed against moisture"
      },
      {
        title: "Custom Solutions",
        description: "Tailored installations for your specific vehicle and vision"
      }
    ],
    faqs: [
      {
        question: "Is underglow legal in Tennessee?",
        answer: "Tennessee allows underglow lighting with some restrictions. We ensure all installations comply with state regulations regarding colors and visibility."
      },
      {
        question: "Can underglow be installed on any vehicle?",
        answer: "Most vehicles can accommodate underglow installation. We'll assess your vehicle and recommend the best approach for your specific make and model."
      },
      {
        question: "How long do LED underglow kits last?",
        answer: "Quality LED kits typically last 3-5 years or longer with proper installation. We use weatherproof connections to ensure maximum longevity."
      },
      {
        question: "Can I control the underglow from my phone?",
        answer: "Yes, many modern kits include smartphone app control with features like color changing, patterns, music sync, and brightness adjustment."
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ServicePageContent serviceData={serviceData} />
      <Footer />
    </main>
  );
}