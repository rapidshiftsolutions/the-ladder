import Navbar from '/src/components/sitewide-navbar'
import Footer from '/src/components/sitewide-footer-newport'
import ServicePageContent from '/src/components/service-page-content'

export const metadata = {
  title: 'LED Lighting & Underglow Installation | OEM Radio Repair',
  description: 'Professional LED lighting and underglow installation in Birmingham, AL. Light bars, underglow kits, interior lighting, and custom automotive lighting solutions.',
  keywords: [
    'LED lighting installation',
    'underglow installation',
    'light bar installation',
    'Newport TN',
    'automotive lighting',
    'custom lighting'
  ],
}

const serviceData = {
  title: "LED Lighting & Underglow Installation",
  subtitle: "Professional Automotive Lighting Solutions",
  description: "Illuminate your ride with our professional lighting installation services. From LED light bars and underglow kits to interior lighting and accent lights, we create stunning lighting setups that turn heads.",
  image: "/NewportPitstop/pexels/lighting_and_underglow.webp",
  startingPrice: "Starting at $249.99+",
  duration: "2-3 hours",
  
  features: [
    "LED light bar installation and wiring",
    "Underglow kit installation and programming", 
    "Interior accent lighting",
    "Custom wiring and switch installation",
    "Waterproof connections and protection",
    "RGB color-changing systems",
    "Remote control and app integration",
    "Professional wire management and hiding"
  ],
  
  serviceTypes: [
    {
      name: "Basic LED Light Bar",
      price: "$249.99",
      description: "Single LED light bar installation with switch and wiring",
      bestFor: "Off-road lighting, work trucks, basic enhancement"
    },
    {
      name: "Underglow Kit Installation", 
      price: "$374.99",
      description: "Complete underglow system with color changing and remote control",
      bestFor: "Show cars, cruising, street style, car shows"
    },
    {
      name: "Interior Lighting Package",
      price: "$312.49",
      description: "Custom interior LED lighting with multiple colors and zones",
      bestFor: "Interior ambiance, show vehicles, luxury feel"
    },
    {
      name: "Complete Lighting Package",
      price: "$624.99",
      description: "Comprehensive lighting setup with exterior and interior LEDs",
      bestFor: "Maximum impact, show vehicles, complete transformation"
    }
  ],
  
  process: [
    "Lighting design consultation and placement planning",
    "Professional wiring and switch installation",
    "Mount LED components with proper waterproofing",
    "Install control modules and programming systems", 
    "Test all lighting functions and color changes",
    "Conceal and protect all wiring",
    "Final inspection and customer demonstration"
  ],
  
  faqs: [
    {
      question: "Are underglow lights legal in Tennessee?",
      answer: "Tennessee allows underglow lighting with certain restrictions. We ensure all installations comply with state regulations and can advise on legal usage."
    },
    {
      question: "Can I control my lights with my phone?",
      answer: "Yes, many of our lighting systems include smartphone app control for colors, patterns, and brightness adjustment."
    },
    {
      question: "How long do LED lights typically last?",
      answer: "Quality LED lights can last 50,000+ hours with proper installation. We use high-quality components for maximum longevity."
    },
    {
      question: "Can you add lighting to any vehicle?",
      answer: "We can install lighting on most vehicles. We'll assess your specific vehicle and recommend the best lighting options for your needs."
    }
  ],
  
  warranty: "We provide a 12-month warranty on lighting installations and a 2-year warranty on LED components.",
  
  relatedServices: [
    { name: "Sound System Installation", href: "/services/sound-systems" },
    { name: "Bumper Installation", href: "/services/bumpers" },
    { name: "Performance Services", href: "/services/performance-oil" }
  ]
}

export default function LightingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ServicePageContent serviceData={serviceData} />
      <Footer />
    </main>
  )
}