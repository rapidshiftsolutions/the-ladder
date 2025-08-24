'use client'

import { useState, useMemo } from 'react';
import Link from 'next/link';
import cities from '/src/data/cities';
import TrustElements from '/src/components/TrustElements';
import Navbar from '/src/components/sitewide-navbar';
import Footer from '/src/components/sitewide-footer';
import { Search, MapPin } from 'lucide-react';

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter cities based on search term
  const filteredCities = useMemo(() => {
    if (!searchTerm.trim()) return cities;
    
    const searchLower = searchTerm.toLowerCase();
    return cities.filter(city => 
      city.name.toLowerCase().includes(searchLower) ||
      city.state.toLowerCase().includes(searchLower)
    );
  }, [searchTerm]);

  // Group filtered cities alphabetically for better organization
  const groupedCities = useMemo(() => {
    return filteredCities.reduce((groups, city) => {
      const firstLetter = city.name[0].toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(city);
      return groups;
    }, {});
  }, [filteredCities]);

  const sortedLetters = Object.keys(groupedCities).sort();
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 bg-gradient-to-b from-background-dark to-surface-900 text-text-primary">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="text-primary-400">Nationwide</span>
            <br />
            <span className="text-text-primary">Mail-In Service</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-text-secondary mb-8 max-w-4xl mx-auto">
            Professional infotainment repair service available throughout all 50 states. 
            No matter where you're located, we provide convenient mail-in repairs with free shipping both ways.
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

      {/* Service Area Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6 text-primary-400">
                Nationwide Coverage
              </h2>
              <p className="text-lg text-text-secondary mb-6">
                Based in Birmingham, Alabama, we serve customers throughout all 50 states with our 
                convenient mail-in repair service. From coast to coast, 
                we make professional infotainment repairs accessible to everyone.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-surface-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary-400 mb-3">Free Shipping</h3>
                  <p className="text-text-secondary">
                    We provide prepaid shipping labels and cover return shipping costs nationwide.
                  </p>
                </div>
                
                <div className="bg-surface-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary-400 mb-3">Fast Turnaround</h3>
                  <p className="text-text-secondary">
                    2-3 day repair time means you'll have your unit back quickly, no matter your location.
                  </p>
                </div>
                
                <div className="bg-surface-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary-400 mb-3">Expert Service</h3>
                  <p className="text-text-secondary">
                    Multi-generational family business with decades of automotive electronics experience.
                  </p>
                </div>
                
                <div className="bg-surface-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary-400 mb-3">1-Year Warranty</h3>
                  <p className="text-text-secondary">
                    All repairs backed by comprehensive warranty coverage nationwide.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-500 bg-opacity-10 p-8 rounded-xl border border-primary-500 border-opacity-20">
              <h3 className="text-2xl font-heading font-bold mb-6 text-center text-primary-400">
                Our Birmingham Facility
              </h3>
              
              <div className="space-y-4 text-center">
                <div>
                  <h4 className="font-semibold text-primary-400 mb-2">Address</h4>
                  <p className="text-text-secondary">
                    2413 1st Ave S<br />
                    Birmingham, AL 35233
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary-400 mb-2">Contact</h4>
                  <p className="text-text-secondary">
                    Phone: <a href="tel:+12055221162" className="text-primary-400 hover:text-primary-300">(205) 522-1162</a><br />
                    Email: <a href="mailto:info@oemradiorepair.com" className="text-primary-400 hover:text-primary-300">info@oemradiorepair.com</a>
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary-400 mb-2">Hours</h4>
                  <p className="text-text-secondary">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 8:00 AM - 5:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4 text-primary-400">
              Find Your City
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              We serve all {cities.length} cities and towns throughout the United States. 
              Click on your city to learn more about our service in your area.
            </p>
            
            {/* Search Input */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-6 w-6 text-text-secondary" />
                </div>
                <input
                  type="text"
                  placeholder="Search for your city or state..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 text-lg bg-surface-800 border border-surface-600 rounded-xl text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-text-secondary hover:text-primary-400 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              
              {/* Search Results Count */}
              {searchTerm && (
                <div className="mt-3 text-center">
                  <p className="text-text-secondary">
                    {filteredCities.length === 0 
                      ? `No cities found matching "${searchTerm}"` 
                      : `Found ${filteredCities.length} ${filteredCities.length === 1 ? 'city' : 'cities'} matching "${searchTerm}"`
                    }
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Alphabetical City Grid */}
          {filteredCities.length === 0 && searchTerm ? (
            // No results state
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <MapPin className="h-16 w-16 text-text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-text-primary mb-2">
                  No cities found
                </h3>
                <p className="text-text-secondary mb-6">
                  We couldn't find any cities matching "{searchTerm}". Try a different search term or browse all locations below.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  View All Cities
                </button>
              </div>
            </div>
          ) : (
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
                          {city.name}, {city.state}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6 text-primary-400">
            Don't See Your Location?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            We serve all 50 states! Even if your city isn't specifically listed, 
            our mail-in service is available to you with the same great pricing and warranty coverage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+12055221162"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call to Confirm Service
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
      </div>
      <Footer />
    </main>
  );
}