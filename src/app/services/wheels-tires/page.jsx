import Navbar from '/src/components/sitewide-navbar';
import Footer from '/src/components/sitewide-footer-newport';
import ServicePageContent from '/src/components/service-page-content';

export const metadata = {
  title: 'Wheels & Tires in Birmingham, AL | Custom Wheels, Performance Tires & Installation',
  description: 'Premium wheels and performance tires in Birmingham, AL starting at $124.99 per wheel. Professional mounting, balancing, and TPMS service. Custom wheel packages, off-road setups, and tire installation. Call (205) 522-1162 for expert fitment.',
  keywords: [
    'wheels tires Newport TN',
    'custom wheels Newport Tennessee',
    'performance tires Newport TN',
    'wheel installation Newport',
    'tire mounting Newport TN',
    'wheel packages Newport',
    'off road tires Newport TN',
    'tire shop Newport Tennessee',
    'wheel repair Newport TN',
    'tire balancing Newport',
    'wheels and tires Newport TN',
    'tire service Newport Tennessee',
    'aftermarket wheels Newport',
    'tire installation 37821',
    'wheel shop Newport TN'
  ],
  openGraph: {
    title: 'Wheels & Tires in Birmingham, AL | Custom Wheels, Performance Tires & Installation',
    description: 'Premium wheels and performance tires in Birmingham, AL starting at $124.99 per wheel. Professional mounting, balancing, and TPMS service.',
    url: 'https://oemradiorepair.com/services/wheels-tires',
    type: 'website',
    locale: 'en_US',
    siteName: 'OEM Radio Repair',
    images: [
      {
        url: '/NewportPitstop/pexels/wheels_and_tires.webp',
        width: 1200,
        height: 630,
        alt: 'Wheels & Tires in Birmingham, AL - OEM Radio Repair'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wheels & Tires in Birmingham, AL | Custom Wheels, Performance Tires',
    description: 'Premium wheels and performance tires in Birmingham, AL starting at $124.99 per wheel. Professional installation and expert fitment.',
    images: ['/NewportPitstop/pexels/wheels_and_tires.webp']
  },
  alternates: {
    canonical: 'https://oemradiorepair.com/services/wheels-tires'
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

export default function WheelsTiresPage() {
  const serviceData = {
    title: "Wheels & Tires",
    subtitle: "Premium Wheels & Performance Tires",
    description: "Premium wheels and high-performance tires for every vehicle and driving style",
    image: "/NewportPitstop/pexels/wheels_and_tires.webp",
    startingPrice: "$124.99+ per wheel",
    duration: "2-4 hours",
    
    features: [
      "Professional mounting & balancing",
      "TPMS transfer or replacement",
      "Hub-centric ring installation",
      "Torque to spec with documentation",
      "Wheel & tire packages available",
      "Disposal of old tires"
    ],
    
    serviceTypes: [
      {
        name: "Custom Wheel Installation",
        description: "Premium aftermarket wheels with professional mounting and balancing",
        features: [
          "Wheel sizing consultation",
          "Professional mounting",
          "Computer balancing", 
          "TPMS transfer/programming",
          "Lug nut upgrades available"
        ],
        price: "Starting at $125+ per wheel (plus wheels)",
        duration: "2-3 hours",
        warranty: "Lifetime rebalancing on wheels purchased from us"
      },
      {
        name: "High-Performance Tires", 
        description: "Summer, all-season, and track tires for maximum performance",
        features: [
          "Performance tire consultation",
          "Computer mounting and balancing",
          "Road force balancing available",
          "Nitrogen inflation",
          "Tire pressure monitoring"
        ],
        price: "Starting at $75+ per tire (plus tires)",
        duration: "1-2 hours", 
        warranty: "Road hazard protection available"
      },
      {
        name: "Wheel and Tire Packages",
        description: "Complete wheel and tire combinations professionally installed",
        features: [
          "Package pricing discounts",
          "Perfect fitment guaranteed",
          "Professional installation",
          "Balancing and alignment",
          "TPMS setup included"
        ],
        price: "Starting at $1,250+ (complete package)",
        duration: "3-4 hours",
        warranty: "Package warranty on complete setup"
      },
      {
        name: "Tire Installation & Service",
        description: "Professional tire mounting, balancing, and repair services", 
        features: [
          "Computer tire mounting",
          "Precision wheel balancing",
          "Tire rotation service",
          "Patch and plug repairs",
          "Valve stem replacement"
        ],
        price: "Starting at $37.50+ per tire",
        duration: "1 hour",
        warranty: "Tire installation warranty"
      },
      {
        name: "Off-Road Wheel & Tire Setup",
        description: "Aggressive off-road wheels and tires for trucks and SUVs",
        features: [
          "Oversized tire fitment",
          "Beadlock wheel options",
          "Aggressive tread patterns",
          "Load rating consultation", 
          "Lift kit compatibility"
        ],
        price: "Starting at $1,875+ (complete setup)",
        duration: "4-6 hours",
        warranty: "Installation and fitment warranty"
      },
      {
        name: "Wheel Repair & Refinishing",
        description: "Restore damaged wheels to like-new condition",
        features: [
          "Bent wheel straightening",
          "Curb rash repair",
          "Powder coating options",
          "Custom colors available",
          "Structural integrity testing"
        ],
        price: "Starting at $187.50+ per wheel", 
        duration: "1-3 days",
        warranty: "90 days on repair work"
      }
    ],
    benefits: [
      {
        title: "Expert Fitment",
        description: "Proper sizing and offset to ensure perfect fit and performance"
      },
      {
        title: "Premium Brands", 
        description: "We carry top wheel and tire brands for quality and performance"
      },
      {
        title: "Professional Service",
        description: "State-of-the-art mounting and balancing equipment"
      },
      {
        title: "Complete Solutions",
        description: "From daily drivers to show cars, we have the right setup"
      }
    ],
    faqs: [
      {
        question: "What wheel sizes can you fit on my vehicle?",
        answer: "We can determine the optimal wheel size range for your vehicle considering clearance, performance, and aesthetics. Plus sizing is often possible with proper tire selection."
      },
      {
        question: "Do you offer financing on wheel and tire packages?",
        answer: "Yes, we offer financing options on qualifying wheel and tire packages. Contact us for current financing terms and approval."
      },
      {
        question: "Can you match wheels if I only damage one?",
        answer: "We can help source matching wheels or provide repair services to restore damaged wheels to match your set."
      },
      {
        question: "Do you provide tire pressure monitoring system service?",
        answer: "Yes, we can transfer, program, and service TPMS sensors when installing new wheels or tires."
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