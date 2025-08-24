import { notFound } from 'next/navigation';
import Link from 'next/link';
import TrustElements from '/src/components/TrustElements';
import Navbar from '/src/components/sitewide-navbar';
import Footer from '/src/components/sitewide-footer';

// Dynamic import of cities data to ensure it's available at runtime
const getCities = async () => {
  const citiesModule = await import('/src/data/cities');
  return citiesModule.default;
};

// Enable dynamic rendering for all city pages
export const dynamicParams = true;

// Generate metadata for each city page
export async function generateMetadata({ params }) {
  const { state, city } = params;
  
  // Get cities data
  const cities = await getCities();
  
  // Find the city in our database
  const cityData = cities.find(
    c => c.state.toLowerCase() === state.toLowerCase() && c.slug === city
  );

  if (!cityData) {
    return {
      title: 'City Not Found | OEM Radio Repair',
    };
  }

  const cityName = cityData.name;
  const stateName = getStateName(cityData.state);

  return {
    title: `${cityName}, ${cityData.state} Infotainment Repair | Uconnect Screen Fix Near Me | OEM Radio Repair`,
    description: `Top-rated infotainment repair in ${cityName}, ${stateName}! Mail-in Uconnect, Dodge, Chrysler, Jeep & Cadillac screen repair. $400 digitizer, $550 LCD replacement. Free shipping from ${cityName}. 1-year warranty, 2-3 day turnaround.`,
    keywords: [
      `infotainment repair ${cityName.toLowerCase()} ${cityData.state.toLowerCase()}`,
      `uconnect repair ${cityName.toLowerCase()}`,
      `radio repair near me ${cityName.toLowerCase()}`,
      `car screen repair ${cityName.toLowerCase()} ${stateName.toLowerCase()}`,
      `dodge radio repair ${cityName.toLowerCase()}`,
      `chrysler uconnect repair ${cityName.toLowerCase()}`,
      `jeep infotainment repair ${cityName.toLowerCase()}`,
      `cadillac cue repair ${cityName.toLowerCase()}`,
      `ram uconnect repair ${cityName.toLowerCase()}`,
      `${cityName.toLowerCase()} touchscreen repair`,
      `${cityName.toLowerCase()} digitizer replacement`,
      `${cityName.toLowerCase()} lcd screen repair`,
      `automotive electronics repair ${cityName.toLowerCase()}`,
      `car radio service ${cityName.toLowerCase()} ${cityData.state.toLowerCase()}`,
      `infotainment repair near me ${cityName.toLowerCase()}`,
      `${cityName.toLowerCase()} ${stateName.toLowerCase()} auto radio repair`,
      `mail in radio repair ${cityName.toLowerCase()}`,
      `${cityData.state.toLowerCase()} infotainment repair service`
    ],
    openGraph: {
      title: `${cityName}, ${cityData.state} Infotainment Repair | OEM Radio Repair`,
      description: `Professional mail-in infotainment repair serving ${cityName}, ${stateName}. Expert Dodge, Chrysler, Jeep, Cadillac screen repair with free shipping.`,
      url: `https://oemradiorepair.com/locations/${state}/${city}`,
      type: 'website',
      locale: 'en_US',
    },
    alternates: {
      canonical: `https://oemradiorepair.com/locations/${state}/${city}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Helper function to get full state name
function getStateName(stateCode) {
  const stateNames = {
    'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas', 'CA': 'California',
    'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware', 'FL': 'Florida', 'GA': 'Georgia',
    'HI': 'Hawaii', 'ID': 'Idaho', 'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa',
    'KS': 'Kansas', 'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
    'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi', 'MO': 'Missouri',
    'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada', 'NH': 'New Hampshire', 'NJ': 'New Jersey',
    'NM': 'New Mexico', 'NY': 'New York', 'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio',
    'OK': 'Oklahoma', 'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
    'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah', 'VT': 'Vermont',
    'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia', 'WI': 'Wisconsin', 'WY': 'Wyoming',
    'DC': 'District of Columbia', 'PR': 'Puerto Rico', 'VI': 'US Virgin Islands', 'GU': 'Guam'
  };
  return stateNames[stateCode] || stateCode;
}

export default async function CityLocationPage({ params }) {
  const { state, city } = params;
  
  // Validate parameters
  if (!state || !city) {
    notFound();
  }

  // Get cities data
  const cities = await getCities();

  // Find the city in our database
  const cityData = cities.find(
    c => c.state.toLowerCase() === state.toLowerCase() && c.slug === city
  );

  if (!cityData) {
    console.warn(`City not found: ${city} in state ${state}`);
    notFound();
  }

  const cityName = cityData.name;
  const stateName = getStateName(cityData.state);
  const stateCode = cityData.state;

  // Find other cities in the same state
  const otherCitiesInState = cities
    .filter(c => c.state === stateCode && c.slug !== city)
    .slice(0, 12); // Show up to 12 other cities

  // Structured data for local business SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `OEM Radio Repair - ${cityName}, ${stateCode}`,
    "description": `Professional infotainment repair service in ${cityName}, ${stateName}. Mail-in Uconnect, Dodge, Chrysler, Jeep, and Cadillac screen repair.`,
    "url": `https://oemradiorepair.com/locations/${state}/${city}`,
    "telephone": "+1-205-522-1162",
    "email": "info@oemradiorepair.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2413 1st Ave S",
      "addressLocality": "Birmingham",
      "addressRegion": "AL",
      "postalCode": "35233",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.5185892",
      "longitude": "-86.8103567"
    },
    "areaServed": {
      "@type": "City",
      "name": cityName,
      "addressRegion": stateCode,
      "addressCountry": "US"
    },
    "serviceType": [
      "Infotainment Repair",
      "Uconnect Repair", 
      "Car Radio Repair",
      "Touchscreen Repair",
      "Digitizer Replacement",
      "LCD Screen Repair"
    ],
    "priceRange": "$400-$550",
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
    "currenciesAccepted": "USD",
    "openingHours": "Mo-Fr 08:00-18:00, Sa 08:00-17:00",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Infotainment Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digitizer Replacement"
          },
          "price": "400",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LCD Screen Replacement"
          },
          "price": "550",
          "priceCurrency": "USD"
        }
      ]
    }
  };

  return (
    <main className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <div className="flex-1 bg-gradient-to-b from-background-dark to-surface-900 text-text-primary">
        
        {/* Breadcrumb */}
        <section className="py-6 px-4 sm:px-6 lg:px-8 bg-surface-800">
          <div className="max-w-7xl mx-auto">
            <nav className="flex text-sm">
              <Link href="/" className="text-primary-400 hover:text-primary-300">
                Home
              </Link>
              <span className="mx-2 text-text-secondary">/</span>
              <Link href="/locations" className="text-primary-400 hover:text-primary-300">
                Locations
              </Link>
              <span className="mx-2 text-text-secondary">/</span>
              <Link href={`/locations/state/${state}`} className="text-primary-400 hover:text-primary-300">
                {stateName}
              </Link>
              <span className="mx-2 text-text-secondary">/</span>
              <span className="text-text-secondary">{cityName}</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              <span className="text-text-primary">Infotainment Repair</span>
              <br />
              <span className="text-primary-400">{cityName}, {stateCode}</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-text-secondary mb-8 max-w-4xl mx-auto">
              Professional mail-in infotainment repair service serving {cityName}, {stateName}. 
              Expert Dodge, Chrysler, Jeep, and Cadillac screen repair with free shipping both ways.
            </p>

            <TrustElements variant="badges" className="justify-center mb-12" />

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+12055221162"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Call (205) 522-1162
              </a>
              <a 
                href="mailto:info@oemradiorepair.com"
                className="border border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Email for Quote
              </a>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4 text-primary-400">
                Mail-In Service to {cityName}
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                No matter where you are in {cityName}, we make infotainment repair simple with our nationwide mail-in service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-surface-700 p-6 rounded-xl text-center">
                <div className="text-primary-400 text-2xl font-bold mb-2">$400</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Digitizer Replacement</h3>
                <p className="text-text-secondary text-sm">
                  Fix touchscreen responsiveness, cracked glass, ghost touching
                </p>
              </div>

              <div className="bg-surface-700 p-6 rounded-xl text-center">
                <div className="text-primary-400 text-2xl font-bold mb-2">$550</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">LCD Replacement</h3>
                <p className="text-text-secondary text-sm">
                  Repair display issues, pixel damage, backlight problems
                </p>
              </div>

              <div className="bg-surface-700 p-6 rounded-xl text-center">
                <div className="text-primary-400 text-2xl font-bold mb-2">Free</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Shipping Both Ways</h3>
                <p className="text-text-secondary text-sm">
                  Prepaid labels to {cityName} and return shipping included
                </p>
              </div>

              <div className="bg-surface-700 p-6 rounded-xl text-center">
                <div className="text-primary-400 text-2xl font-bold mb-2">2-3</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Day Turnaround</h3>
                <p className="text-text-secondary text-sm">
                  Fast repair service gets you back on the road quickly
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4 text-primary-400">
                How It Works from {cityName}
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Simple 4-step process to get your infotainment system repaired from anywhere in {stateName}.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary-500 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Contact Us</h3>
                <p className="text-text-secondary text-sm">
                  Call or email from {cityName} to describe your infotainment issue and get a quote.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-500 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Ship Your Unit</h3>
                <p className="text-text-secondary text-sm">
                  We send you a prepaid shipping label to ship from {cityName} to our Birmingham facility.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-500 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Expert Repair</h3>
                <p className="text-text-secondary text-sm">
                  Our technicians perform professional diagnosis and repair within 2-3 business days.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-500 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Return Shipping</h3>
                <p className="text-text-secondary text-sm">
                  We ship your repaired unit back to {cityName} with free return shipping and 1-year warranty.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Other Cities in State */}
        {otherCitiesInState.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-800">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-primary-400">
                  Other Cities in {stateName}
                </h2>
                <p className="text-lg text-text-secondary">
                  We serve all cities throughout {stateName} with the same professional service.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {otherCitiesInState.map((otherCity) => (
                  <Link
                    key={`${otherCity.state}-${otherCity.slug}`}
                    href={`/locations/${otherCity.state.toLowerCase()}/${otherCity.slug}`}
                    className="block p-3 bg-surface-700 hover:bg-primary-500 hover:bg-opacity-20 rounded-lg transition-colors group text-center"
                  >
                    <span className="text-text-secondary group-hover:text-primary-400 font-medium text-sm">
                      {otherCity.name}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link
                  href="/locations"
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium"
                >
                  View All Locations
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Local SEO Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-heading font-bold text-primary-400 mb-6">
                Infotainment Repair Service in {cityName}, {stateName}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Local {cityName} Service Benefits</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• <strong>Free Shipping from {cityName}:</strong> Prepaid labels for secure transport</li>
                    <li>• <strong>Fast {cityName} Turnaround:</strong> 2-3 day repair + shipping time</li>
                    <li>• <strong>{cityName} Residents Save 50%+:</strong> vs. local dealership costs</li>
                    <li>• <strong>Trusted by {cityName} Drivers:</strong> Family-owned business since generations</li>
                    <li>• <strong>{cityName} Warranty Coverage:</strong> 1-year comprehensive protection</li>
                    <li>• <strong>Expert {stateName} Service:</strong> Certified infotainment technicians</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-4">{cityName} Vehicle Models We Repair</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• <strong>Dodge Vehicles in {cityName}:</strong> Charger, Challenger, Journey, Durango</li>
                    <li>• <strong>Chrysler Models in {cityName}:</strong> 300, Pacifica, Voyager</li>
                    <li>• <strong>Jeep Repairs in {cityName}:</strong> Wrangler JL, Grand Cherokee, Compass</li>
                    <li>• <strong>Cadillac CUE in {cityName}:</strong> CTS, ATS, Escalade systems</li>
                    <li>• <strong>Ram Trucks in {cityName}:</strong> 1500, 2500, 3500 HD models</li>
                    <li>• <strong>All Uconnect Systems:</strong> 4C, 8.4", and newer generations</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Why {cityName} Customers Choose OEM Radio Repair
              </h3>
              <p className="text-text-secondary mb-4">
                Residents of {cityName}, {stateName} trust OEM Radio Repair for professional infotainment system repairs 
                because we understand the unique needs of {stateName} drivers. Our mail-in service eliminates the need 
                to drive to Birmingham, saving {cityName} customers time and travel costs while providing the same 
                expert repair quality you'd expect from a local {cityName} shop.
              </p>
              
              <p className="text-text-secondary mb-4">
                Whether your {cityName} vehicle has a cracked Uconnect screen, unresponsive touchscreen, or complete 
                display failure, our certified technicians have the expertise to restore your infotainment system 
                to like-new condition. We service all major automotive brands popular in {cityName} and throughout {stateName}, 
                including Dodge, Chrysler, Jeep, Cadillac, and Ram vehicles.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Easy Mail-In Process from {cityName}
              </h3>
              <p className="text-text-secondary mb-6">
                Getting your infotainment system repaired from {cityName} is simple. Contact us for a free quote, 
                and we'll email you a prepaid shipping label within hours. Carefully package your unit (we provide 
                instructions), drop it off at any FedEx or UPS location in {cityName}, and track your repair online. 
                Most {cityName} customers receive their repaired unit back within a week of shipping.
              </p>

              <div className="bg-surface-800 p-6 rounded-lg mb-8">
                <h4 className="text-lg font-semibold text-primary-400 mb-3">
                  {cityName} Service Area Coverage
                </h4>
                <p className="text-text-secondary">
                  Our mail-in repair service covers all of {cityName} and surrounding {stateName} communities. 
                  No matter what part of {cityName} you're located in, our free shipping service ensures you get 
                  the same professional repair quality and fast turnaround time. Join hundreds of satisfied 
                  {cityName} customers who have saved money with our affordable infotainment repair service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6 text-primary-400">
              Ready to Fix Your {cityName} Infotainment System?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Get professional repair service delivered right to {cityName}. Trusted by {cityName} residents!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+12055221162"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Call (205) 522-1162
              </a>
              <a 
                href="mailto:info@oemradiorepair.com"
                className="border border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Email for {cityName} Quote
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}