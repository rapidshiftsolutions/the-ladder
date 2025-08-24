import Navbar from '/src/components/sitewide-navbar';
import Footer from '/src/components/sitewide-footer-newport';
import ServicePageContent from '/src/components/service-page-content';

export const metadata = {
  title: 'Suspension Services in Birmingham, AL | Coilovers, Lowering Springs & Lift Kits',
  description: 'Professional suspension services in Birmingham, AL including coilovers, lowering springs, lift kits, and air suspension starting at $624.99. Expert installation with alignment included. Call (205) 522-1162 for custom suspension solutions.',
  keywords: [
    'suspension services Newport TN',
    'coilovers Newport Tennessee',
    'lowering springs Newport TN',
    'lift kits Newport',
    'air suspension Newport TN',
    'suspension installation Newport',
    'performance suspension Newport',
    'custom suspension Newport TN',
    'shock struts Newport',
    'suspension work Newport Tennessee',
    'suspension shop Newport TN',
    'suspension upgrade Newport',
    'suspension modification Newport TN',
    'handling upgrade Newport',
    'suspension 37821'
  ],
  openGraph: {
    title: 'Suspension Services in Birmingham, AL | Coilovers, Lowering Springs & Lift Kits',
    description: 'Professional suspension services in Birmingham, AL including coilovers, lowering springs, lift kits, and air suspension starting at $624.99.',
    url: 'https://oemradiorepair.com/services/suspension',
    type: 'website',
    locale: 'en_US',
    siteName: 'OEM Radio Repair',
    images: [
      {
        url: '/NewportPitstop/pexels/suspension.webp',
        width: 1200,
        height: 630,
        alt: 'Suspension Services in Birmingham, AL - OEM Radio Repair'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suspension Services in Birmingham, AL | Coilovers, Lowering Springs & Lift Kits',
    description: 'Professional suspension services in Birmingham, AL including coilovers, lowering springs, lift kits, and air suspension starting at $624.99.',
    images: ['/NewportPitstop/pexels/suspension.webp']
  },
  alternates: {
    canonical: 'https://oemradiorepair.com/services/suspension'
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

export default function SuspensionPage() {
  const serviceData = {
    title: "Suspension Services",
    subtitle: "Performance Suspension Solutions",
    description: "Complete suspension solutions for improved handling, comfort, and performance",
    image: "/NewportPitstop/pexels/suspension.webp",
    startingPrice: "$624.99+",
    duration: "4-8 hours",
    
    features: [
      "Professional installation",
      "Alignment included",
      "Ride height adjustment",
      "Corner balancing available",
      "Test drive & adjustments",
      "12-month installation warranty"
    ],
    
    serviceTypes: [
      {
        name: "Coilover Installation",
        description: "Premium adjustable coilover systems for ultimate handling control",
        features: [
          "Adjustable ride height",
          "Damping adjustability", 
          "Corner balancing",
          "Alignment included",
          "Performance spring rates"
        ],
        price: "Starting at $1,250+ (plus parts)",
        duration: "1-2 days",
        warranty: "12 months / 12,000 miles on installation"
      },
      {
        name: "Lowering Springs", 
        description: "Sport spring installation for improved handling and appearance",
        features: [
          "1-3 inch drop options",
          "Maintained ride quality",
          "Progressive spring rates",
          "Alignment included",
          "OEM+ performance"
        ],
        price: "Starting at $625+ (plus parts)",
        duration: "4-6 hours", 
        warranty: "12 months / 12,000 miles on installation"
      },
      {
        name: "Lift Kit Installation",
        description: "Professional lift kit installation for trucks and SUVs",
        features: [
          "2-6 inch lift options",
          "Complete hardware included",
          "Differential service",
          "Alignment and adjustment",
          "Off-road capability"
        ],
        price: "Starting at $1,875+ (plus parts)",
        duration: "1-2 days",
        warranty: "12 months / 12,000 miles on installation"
      },
      {
        name: "Shock & Strut Replacement",
        description: "High-quality shock and strut replacement for all vehicles", 
        features: [
          "OEM and performance options",
          "Complete assembly replacement",
          "Spring compressor service",
          "Alignment check",
          "Road test included"
        ],
        price: "Starting at $750+ (plus parts)",
        duration: "3-5 hours",
        warranty: "12 months / 12,000 miles on installation"
      },
      {
        name: "Air Suspension",
        description: "Custom air suspension systems for adjustable ride height",
        features: [
          "Wireless control systems",
          "Multiple height presets",
          "Fast inflation/deflation",
          "Show-quality installations",
          "Professional wiring"
        ],
        price: "Starting at $3,125+ (plus parts)", 
        duration: "2-3 days",
        warranty: "12 months / 12,000 miles on installation"
      },
      {
        name: "Performance Upgrades",
        description: "Sway bars, bushings, and handling enhancement components",
        features: [
          "Polyurethane bushings",
          "Performance sway bars",
          "Strut tower braces",
          "Control arm upgrades", 
          "Handling packages"
        ],
        price: "Starting at $375+ (plus parts)",
        duration: "2-4 hours",
        warranty: "12 months / 12,000 miles on installation"
      }
    ],
    benefits: [
      {
        title: "Improved Handling",
        description: "Enhanced cornering ability and reduced body roll"
      },
      {
        title: "Custom Stance", 
        description: "Achieve the perfect look and ride height for your vehicle"
      },
      {
        title: "Quality Components",
        description: "We only install premium suspension components from trusted brands"
      },
      {
        title: "Professional Installation",
        description: "Proper installation and alignment ensures optimal performance"
      }
    ],
    faqs: [
      {
        question: "Will lowering my car affect ride quality?",
        answer: "Modern performance springs and coilovers are designed to maintain good ride quality while improving handling. We'll help you choose the right setup for your needs."
      },
      {
        question: "Do I need an alignment after suspension work?",
        answer: "Yes, we always recommend an alignment after any suspension modifications to ensure proper tire wear and handling characteristics."
      },
      {
        question: "Can you install customer-supplied parts?",
        answer: "Yes, we can install suspension components you provide, though we recommend purchasing through us for warranty coverage on both parts and labor."
      },
      {
        question: "How much can I lower my car?",
        answer: "Drop amounts vary by vehicle, but typically 1-3 inches is common. We'll advise on optimal drop for your specific vehicle and use case."
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