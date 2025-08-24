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

// Enable dynamic rendering for all state pages
export const dynamicParams = true;

// Generate metadata for each state page
export async function generateMetadata({ params }) {
  const { state } = params;
  
  // Get cities data
  const cities = await getCities();
  
  // Find cities in this state
  const stateCities = cities.filter(
    c => c.state.toLowerCase() === state.toLowerCase()
  );

  if (stateCities.length === 0) {
    return {
      title: 'State Not Found | OEM Radio Repair',
    };
  }

  const stateCode = stateCities[0].state;
  const stateName = getStateName(stateCode);
  const cityCount = stateCities.length;

  return {
    title: `${stateName} Infotainment Repair Service | Uconnect Screen Fix | OEM Radio Repair`,
    description: `#1 ${stateName} infotainment repair service! Mail-in Uconnect, Dodge, Chrysler, Jeep & Cadillac screen repair. $400 digitizer, $550 LCD replacement. Free shipping to all ${cityCount} cities in ${stateName}. 1-year warranty.`,
    keywords: [
      `${stateName.toLowerCase()} infotainment repair`,
      `${stateName.toLowerCase()} uconnect repair`,
      `${stateName.toLowerCase()} radio repair service`,
      `${stateName.toLowerCase()} car screen repair`,
      `dodge radio repair ${stateName.toLowerCase()}`,
      `chrysler uconnect repair ${stateName.toLowerCase()}`,
      `jeep infotainment repair ${stateName.toLowerCase()}`,
      `cadillac cue repair ${stateName.toLowerCase()}`,
      `ram uconnect repair ${stateName.toLowerCase()}`,
      `${stateCode.toLowerCase()} touchscreen repair`,
      `${stateCode.toLowerCase()} digitizer replacement`,
      `${stateCode.toLowerCase()} lcd screen repair`,
      `infotainment repair near me ${stateName.toLowerCase()}`,
      `car radio repair ${stateName.toLowerCase()}`,
      `automotive electronics repair ${stateName.toLowerCase()}`,
      `mail in radio repair ${stateName.toLowerCase()}`,
      `${stateName.toLowerCase()} auto radio service`
    ],
    openGraph: {
      title: `${stateName} Infotainment Repair Service | OEM Radio Repair`,
      description: `Professional mail-in infotainment repair throughout ${stateName}. Serving ${cityCount} cities with expert Dodge, Chrysler, Jeep, Cadillac screen repair. Free shipping statewide.`,
      url: `https://oemradiorepair.com/locations/state/${state}`,
      type: 'website',
      locale: 'en_US',
    },
    alternates: {
      canonical: `https://oemradiorepair.com/locations/state/${state}`,
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

export default async function StateLocationPage({ params }) {
  const { state } = params;
  
  // Validate state parameter
  if (!state) {
    notFound();
  }

  // Get cities data
  const cities = await getCities();

  // Find cities in this state
  const stateCities = cities.filter(
    c => c.state.toLowerCase() === state.toLowerCase()
  );

  if (stateCities.length === 0) {
    console.warn(`No cities found for state: ${state}`);
    notFound();
  }

  const stateCode = stateCities[0].state;
  const stateName = getStateName(stateCode);

  // Group cities alphabetically
  const groupedCities = stateCities.reduce((groups, city) => {
    const firstLetter = city.name[0].toUpperCase();
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    groups[firstLetter].push(city);
    return groups;
  }, {});

  const sortedLetters = Object.keys(groupedCities).sort();

  // Structured data for local business SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `OEM Radio Repair - ${stateName}`,
    "description": `Professional infotainment repair service serving ${stateName}. Mail-in Uconnect, Dodge, Chrysler, Jeep, and Cadillac screen repair.`,
    "url": `https://oemradiorepair.com/locations/state/${state}`,
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
      "@type": "State",
      "name": stateName,
      "containsPlace": stateCities.slice(0, 10).map(city => ({
        "@type": "City",
        "name": city.name,
        "addressRegion": stateCode
      }))
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
    "openingHours": "Mo-Fr 08:00-18:00, Sa 08:00-17:00"
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
              <span className="text-text-secondary">{stateName}</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              <span className="text-text-primary">Infotainment Repair</span>
              <br />
              <span className="text-primary-400">{stateName}</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-text-secondary mb-8 max-w-4xl mx-auto">
              Professional mail-in infotainment repair service serving all {stateCities.length} cities throughout {stateName}. 
              Expert Dodge, Chrysler, Jeep, and Cadillac screen repair with free shipping.
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

        {/* Cities Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4 text-primary-400">
                Cities We Serve in {stateName}
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                We serve all {stateCities.length} cities throughout {stateName}. 
                Click on your city to learn more about our service in your area.
              </p>
            </div>

            {/* Alphabetical City Grid */}
            <div className="space-y-8">
              {sortedLetters.map((letter) => (
                <div key={letter} className="bg-surface-800 p-6 rounded-xl">
                  <h3 className="text-2xl font-heading font-bold text-primary-400 mb-6 border-b border-primary-500 border-opacity-20 pb-2">
                    {letter}
                  </h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                    {groupedCities[letter].map((city) => (
                      <Link
                        key={`${city.state}-${city.slug}`}
                        href={`/locations/${city.state.toLowerCase()}/${city.slug}`}
                        className="block p-3 bg-surface-700 hover:bg-primary-500 hover:bg-opacity-20 rounded-lg transition-colors group"
                      >
                        <span className="text-text-secondary group-hover:text-primary-400 font-medium">
                          {city.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6 text-primary-400">
              Ready to Fix Your {stateName} Infotainment System?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Get professional repair service delivered anywhere in {stateName}. Start your repair today!
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
                Email for {stateName} Quote
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}