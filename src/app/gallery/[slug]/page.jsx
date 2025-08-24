"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Navbar from '/src/components/sitewide-navbar';
import Footer from '/src/components/sitewide-footer';
import ImageViewer from '/src/components/ImageViewer';
import { getGallery } from '/src/sanity/galleryQueries';
import { ChevronLeftIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function GalleryDetailPage() {
  const params = useParams();
  const [gallery, setGallery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    if (params.slug) {
      loadGallery();
    }
  }, [params.slug]);

  const loadGallery = async () => {
    try {
      setLoading(true);
      const galleryData = await getGallery(params.slug);
      setGallery(galleryData);
    } catch (error) {
      console.error('Error loading gallery:', error);
    } finally {
      setLoading(false);
    }
  };

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

  const categoryMap = {
    'all': 'All Photos',
    'race-cars': 'Race Cars',
    'racers': 'Racers',
    'action': 'Action Shots',
    'winners': 'Winners',
    'pit': 'Pit Area',
    'crowd': 'Crowd',
    'track': 'Track',
    'other': 'Other'
  };

  // Get unique categories from photos
  const getCategories = () => {
    if (!gallery?.photos) return [];
    
    const categories = ['all'];
    const uniqueCategories = [...new Set(gallery.photos.map(photo => photo.category).filter(Boolean))];
    return [...categories, ...uniqueCategories];
  };

  // Filter photos by selected category
  const getFilteredPhotos = () => {
    if (!gallery?.photos) return [];
    
    if (selectedCategory === 'all') {
      return gallery.photos;
    }
    
    return gallery.photos.filter(photo => photo.category === selectedCategory);
  };

  const handleDownload = async (imageUrl, filename) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename || 'race-photo.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
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
        staggerChildren: 0.05
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

  if (loading) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="flex justify-center items-center py-32">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!gallery) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="flex flex-col justify-center items-center py-32 text-white">
          <h1 className="text-4xl font-bold mb-4">Gallery Not Found</h1>
          <p className="text-white/70 mb-8">The photo gallery you're looking for doesn't exist.</p>
          <Link
            href="/gallery"
            className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            Back to Gallery
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const filteredPhotos = getFilteredPhotos();
  const categories = getCategories();

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Gallery Header */}
      <section className="pt-24 pb-8 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            {/* Breadcrumb */}
            <nav className="flex text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{gallery.title}</span>
            </nav>

            {/* Gallery Info */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-block bg-primary-500/20 text-primary-400 text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide">
                  {formatEventType(gallery.eventType)}
                </span>
                {gallery.featured && (
                  <span className="inline-block bg-gradient-to-r from-accent-500 to-secondary-500 text-white text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wide">
                    Featured
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 font-anton tracking-wide">
                {gallery.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-white/70 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{formatDate(gallery.eventDate)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{gallery.photos?.length || 0} photos</span>
                </div>
              </div>

              {gallery.description && (
                <p className="text-lg text-white/80 leading-relaxed max-w-4xl">
                  {gallery.description}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/gallery"
                className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                <ChevronLeftIcon className="w-5 h-5 mr-2" />
                Back to Gallery
              </Link>
              
              {gallery.downloadEnabled && (
                <button
                  onClick={() => {
                    // Download all photos functionality could be implemented here
                    alert('Bulk download feature coming soon! Click individual photos to download.');
                  }}
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
                  Download Info
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      {categories.length > 1 && (
        <section className="py-6 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeInUp}
              className="flex justify-center"
            >
              <div className="flex flex-wrap gap-2 bg-white/5 backdrop-blur-sm rounded-full p-2 border border-white/10">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {categoryMap[category] || category}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Photo Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPhotos.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-white/70 text-lg">
                No photos found in this category.
              </p>
            </div>
          ) : (
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerChildren}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="group relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-primary-500/30 transition-all duration-300"
                >
                  <div className="relative aspect-square">
                    {photo.asset ? (
                      <ImageViewer
                        src={photo.asset.url}
                        alt={photo.alt || 'Race photo'}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                        <span className="text-white/50">No Image</span>
                      </div>
                    )}
                    
                    {/* Overlay with actions */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      {gallery.downloadEnabled && photo.asset && (
                        <button
                          onClick={() => handleDownload(photo.asset.url, `${gallery.title}-${index + 1}.jpg`)}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                          title="Download photo"
                        >
                          <ArrowDownTrayIcon className="w-5 h-5" />
                        </button>
                      )}
                    </div>

                    {/* Photo info overlay */}
                    {(photo.caption || photo.photographer) && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        {photo.caption && (
                          <p className="text-white text-sm font-medium mb-1">
                            {photo.caption}
                          </p>
                        )}
                        {photo.photographer && (
                          <p className="text-white/70 text-xs">
                            Photo by: {photo.photographer}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
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