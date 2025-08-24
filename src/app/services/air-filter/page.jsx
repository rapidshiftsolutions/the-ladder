import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'
import ServicePageContent from '/src/components/service-page-content'

export const metadata = {
  title: 'Air Filter Replacement | OEM Radio Repair',
  description: 'Engine and cabin air filter replacement services in Birmingham, AL. Improve air quality and engine performance with fresh filters.',
  keywords: [
    'air filter replacement',
    'engine air filter',
    'cabin air filter',
    'Newport TN',
    'air quality',
    'engine performance'
  ],
}

const serviceData = {
  title: "Air Filter Replacement",
  subtitle: "Clean Air for Better Performance",
  description: "Keep your engine breathing clean and your cabin air fresh with our air filter replacement services. Clean filters improve performance, fuel economy, and air quality.",
  image: "/NewportPitstop/pexels/filter_services.webp",
  startingPrice: "Starting at $24.99+",
  duration: "10 minutes",
  
  features: [
    "Engine air filter inspection and replacement",
    "Cabin air filter check and replacement",
    "Filter housing cleaning",
    "Performance and fuel economy benefits", 
    "Improved air quality in cabin",
    "Free filter inspection with any service",
    "Quality OEM or OEM-equivalent filters",
    "Proper installation and sealing"
  ],
  
  serviceTypes: [
    {
      name: "Engine Air Filter",
      price: "$24.99",
      description: "Standard engine air filter replacement with quality filter",
      bestFor: "Regular maintenance, improved engine performance and fuel economy"
    },
    {
      name: "Cabin Air Filter",
      price: "$31.24",
      description: "Cabin air filter replacement for clean interior air",
      bestFor: "Allergy sufferers, improved air quality, odor elimination"
    },
    {
      name: "Performance Air Filter",
      price: "$49.99",
      description: "High-flow performance air filter for enhanced airflow",
      bestFor: "Performance vehicles, modified engines, maximum airflow"
    },
    {
      name: "Both Filters Package",
      price: "$49.99",
      description: "Engine and cabin air filter replacement combo deal",
      bestFor: "Complete air filtration service, best value option"
    }
  ],
  
  process: [
    "Locate and access air filter housing",
    "Remove old filter and inspect housing",
    "Clean filter housing and check for debris",
    "Install new filter with proper orientation", 
    "Ensure proper sealing and secure housing",
    "Test engine operation and airflow",
    "Dispose of old filter responsibly"
  ],
  
  faqs: [
    {
      question: "How often should air filters be replaced?",
      answer: "Engine air filters typically need replacement every 12,000-15,000 miles. Cabin air filters should be replaced every 12,000-15,000 miles or annually."
    },
    {
      question: "What happens if I don't replace my air filter?",
      answer: "Dirty air filters reduce engine performance, decrease fuel economy, and can allow contaminants into your engine. Dirty cabin filters reduce air quality and HVAC efficiency."
    },
    {
      question: "Can I clean my air filter instead of replacing it?",
      answer: "Some performance filters can be cleaned, but standard paper filters should be replaced. Cleaning paper filters can damage them and reduce effectiveness."
    },
    {
      question: "Do performance air filters really improve performance?",
      answer: "High-quality performance filters can improve airflow and provide small performance gains, especially on modified engines. They also typically last longer."
    }
  ],
  
  warranty: "All air filter installations include a 30-day installation warranty for your protection.",
  
  relatedServices: [
    { name: "Oil Change Service", href: "/services/oil-change" },
    { name: "Multi-Point Inspection", href: "/services/inspection" },
    { name: "Engine Performance Service", href: "/services/performance" }
  ]
}

export default function AirFilterPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ServicePageContent serviceData={serviceData} />
      <Footer />
    </main>
  )
}