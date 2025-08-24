"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '/src/components/sitewide-navbar';
import Footer from '/src/components/sitewide-footer';
import { 
  getAllGalleries, 
  getFeaturedGalleries, 
  getGalleryEventTypes, 
  getAllGalleryYears 
} from '/src/sanity/galleryQueries';

export default function GalleryPage() {
  const [galleries, setGalleries] = useState([]);
  const [featuredGalleries, setFeaturedGalleries] = useState([]);
  const [eventTypes, setEventTypes] = useState([]);
  const [years, setYears] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEventType, setSelectedEventType] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    loadGalleryData();
  }, []);

  const loadGalleryData = async () => {
    try {
      setLoading(true);
      
      const [galleriesData, featuredData, eventTypesData, yearsData] = await Promise.all([
        getAllGalleries(),
        getFeaturedGalleries(3),
        getGalleryEventTypes(),
        getAllGalleryYears()
      ]);

      setGalleries(galleriesData);
      setFeaturedGalleries(featuredData);
      setEventTypes(eventTypesData);
      setYears(yearsData);
      
    } catch (error) {
      console.error('Error loading gallery data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = async () => {
    try {
      setLoading(true);
      
      let filteredGalleries = await getAllGalleries();
      
      // Apply filters
      if (selectedEventType) {
        filteredGalleries = filteredGalleries.filter(gallery => 
          gallery.eventType === selectedEventType
        );
      }
      
      if (selectedYear) {
        filteredGalleries = filteredGalleries.filter(gallery => {
          const galleryYear = new Date(gallery.eventDate).getFullYear().toString();
          return galleryYear === selectedYear;
        });
      }
      
      setGalleries(filteredGalleries);
      
    } catch (error) {
      console.error('Error filtering galleries:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedEventType || selectedYear) {
      handleFilterChange();
    } else {
      loadGalleryData();
    }
  }, [selectedEventType, selectedYear]);

  const formatEventType = (eventType) => {
    const eventTypeMap = {
      'no-prep': 'No Prep Racing',
      'grudge': 'Grudge Racing',
      'bracket': 'Bracket Racing',
      'test-tune': 'Test & Tune',
      'jr-dragster': 'Jr. Dragster',
      'car-show': 'Car Show',
      'special': 'Special Event'
    };
    return eventTypeMap[eventType] || eventType;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/NewportPitstop/pexels/car_show.webp"
            alt="Racing gallery background"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/50" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-center space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.9] tracking-wide font-anton">
                <span className="block">RACE</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400">
                  GALLERY
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white/90 font-inter leading-tight max-w-4xl mx-auto">
                Capture the speed, power, and excitement of English Mountain Raceway
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <select
              value={selectedEventType}
              onChange={(e) => setSelectedEventType(e.target.value)}
              className="px-4 py-2 bg-white/10 text-white rounded-lg border border-white/20 focus:border-primary-500 focus:outline-none backdrop-blur-sm"
            >
              <option value="">All Event Types</option>
              {eventTypes.map((type) => (
                <option key={type.value} value={type.value} className="text-black">
                  {type.title}
                </option>
              ))}
            </select>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 bg-white/10 text-white rounded-lg border border-white/20 focus:border-primary-500 focus:outline-none backdrop-blur-sm"
            >
              <option value="">All Years</option>
              {years.map((year) => (
                <option key={year} value={year} className="text-black">
                  {year}
                </option>
              ))}
            </select>

            {(selectedEventType || selectedYear) && (
              <button
                onClick={() => {
                  setSelectedEventType('');
                  setSelectedYear('');
                }}
                className="px-4 py-2 text-white/70 hover:text-white transition-colors"
              >
                Clear Filters
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Featured Galleries */}
      {featuredGalleries.length > 0 && !selectedEventType && !selectedYear && (
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-black text-white mb-4 font-anton tracking-wide uppercase">
                Featured Galleries
              </h2>
              <p className="text-white/70 text-lg">
                Our most exciting racing moments captured
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            >
              {featuredGalleries.map((gallery) => (
                <motion.div key={gallery._id} variants={scaleIn}>
                  <Link
                    href={`/gallery/${gallery.slug?.current}`}
                    className="group block bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="relative h-64">
                      {gallery.coverImage?.asset ? (
                        <Image
                          src={gallery.coverImage.asset.url}
                          alt={gallery.coverImage.alt || gallery.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                          <span className="text-white/50">No Image</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-accent-500 to-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                          Featured
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm">
                          {gallery.photos?.length || 0} photos
                        </p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white font-anton tracking-wide mb-2 group-hover:text-primary-400 transition-colors">
                        {gallery.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-white/60 mb-3">
                        <span>{formatDate(gallery.eventDate)}</span>
                        <span>{formatEventType(gallery.eventType)}</span>
                      </div>
                      {gallery.description && (
                        <p className="text-white/70 text-sm line-clamp-2">
                          {gallery.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* All Galleries */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-black text-white mb-4 font-anton tracking-wide uppercase">
              {selectedEventType || selectedYear ? 'Filtered' : 'All'} Galleries
            </h2>
          </motion.div>

          {loading && (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
            </div>
          )}

          {!loading && galleries.length === 0 && (
            <div className="text-center py-16">
              <p className="text-white/70 text-lg">
                No galleries found. Check back soon for new racing photos!
              </p>
            </div>
          )}

          {!loading && galleries.length > 0 && (
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {galleries.map((gallery) => (
                <motion.div key={gallery._id} variants={scaleIn}>
                  <Link
                    href={`/gallery/${gallery.slug?.current}`}
                    className="group block bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="relative h-48">
                      {gallery.coverImage?.asset ? (
                        <Image
                          src={gallery.coverImage.asset.url}
                          alt={gallery.coverImage.alt || gallery.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                          <span className="text-white/50">No Image</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      {gallery.featured && (
                        <div className="absolute top-3 right-3">
                          <span className="bg-gradient-to-r from-accent-500 to-secondary-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                            Featured
                          </span>
                        </div>
                      )}
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-white text-sm">
                          {gallery.photos?.length || 0} photos
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-white font-anton tracking-wide mb-2 group-hover:text-primary-400 transition-colors">
                        {gallery.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-white/60 mb-2">
                        <span>{formatDate(gallery.eventDate)}</span>
                        <span>{formatEventType(gallery.eventType)}</span>
                      </div>
                      {gallery.description && (
                        <p className="text-white/70 text-sm line-clamp-2">
                          {gallery.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}