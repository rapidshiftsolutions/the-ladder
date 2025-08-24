import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'
import ServicePageContent from '/src/components/service-page-content'

export const metadata = {
  title: 'Cabin Air Filter Replacement | OEM Radio Repair',
  description: 'Cabin air filter replacement services in Birmingham, AL. Improve interior air quality and HVAC performance with a fresh cabin air filter.',
  keywords: [
    'cabin air filter',
    'cabin filter replacement',
    'air quality',
    'Newport TN',
    'HVAC filter',
    'interior air filter'
  ],
}

const serviceData = {
  title: "Cabin Air Filter Replacement",
  subtitle: "Clean Air for a Healthier Drive",
  description: "Breathe easier with our cabin air filter replacement service. A fresh cabin filter improves interior air quality, reduces allergens, and keeps your HVAC system running efficiently.",
  image: "/NewportPitstop/pexels/filter_services.webp",
  startingPrice: "Starting at $31.24+",
  duration: "15 minutes",
  
  features: [
    "Cabin air filter inspection and replacement",
    "HVAC system performance check", 
    "Filter housing cleaning",
    "Airflow improvement verification",
    "Allergen and odor reduction",
    "Quality OEM or premium filters",
    "Proper installation and sealing",
    "Service reminder sticker"
  ],
  
  serviceTypes: [
    {
      name: "Standard Cabin Filter",
      price: "$31.24",
      description: "Quality cabin air filter replacement for most vehicles",
      bestFor: "Regular maintenance, standard air filtration needs"
    },
    {
      name: "Premium HEPA Filter", 
      price: "$49.99",
      description: "High-efficiency filter that captures smaller particles and allergens",
      bestFor: "Allergy sufferers, maximum air quality, urban driving"
    },
    {
      name: "Activated Carbon Filter",
      price: "$43.74",
      description: "Charcoal filter that removes odors and harmful gases",
      bestFor: "Odor elimination, city driving, maximum protection"
    }
  ],
  
  process: [
    "Locate and access cabin filter housing",
    "Remove old filter and inspect housing condition",
    "Clean filter housing and remove debris",
    "Install new filter with proper orientation", 
    "Ensure proper sealing and secure housing",
    "Test HVAC airflow and performance",
    "Provide maintenance recommendations"
  ],
  
  faqs: [
    {
      question: "How often should cabin filters be replaced?",
      answer: "Most manufacturers recommend cabin filter replacement every 12,000-15,000 miles or annually. Heavy city driving or dusty conditions may require more frequent replacement."
    },
    {
      question: "What happens if I don't replace my cabin filter?",
      answer: "Dirty cabin filters reduce airflow, strain the HVAC system, allow allergens and odors into the cabin, and can cause windows to fog up more easily."
    },
    {
      question: "Can I clean my cabin filter instead of replacing it?",
      answer: "Cabin filters should be replaced, not cleaned. Cleaning can damage the filter material and reduce its effectiveness at trapping particles and allergens."
    },
    {
      question: "Will a new cabin filter help with allergies?",
      answer: "Yes, especially premium HEPA filters. They capture pollen, dust, and other allergens before they enter your vehicle's interior."
    }
  ],
  
  warranty: "All cabin filter installations include a 30-day installation warranty.",
  
  relatedServices: [
    { name: "Engine Air Filter", href: "/services/air-filter" },
    { name: "Oil Change Service", href: "/services/oil-change" },
    { name: "Multi-Point Inspection", href: "/services/inspection" }
  ]
}

export default function CabinFilterPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ServicePageContent serviceData={serviceData} />
      <Footer />
    </main>
  )
}