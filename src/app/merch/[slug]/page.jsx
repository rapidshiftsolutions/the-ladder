"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '/src/components/sitewide-navbar';
import Footer from '/src/components/sitewide-footer';
import { getMerchItem, getAllMerch } from '/src/sanity/merchQueries';

export default function MerchItemPage() {
  const params = useParams();
  const [item, setItem] = useState(null);
  const [relatedItems, setRelatedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    if (params.slug) {
      loadMerchItem();
    }
  }, [params.slug]);

  const loadMerchItem = async () => {
    try {
      setLoading(true);
      
      // Load the specific item and all items for related products
      const [itemData, allItems] = await Promise.all([
        getMerchItem(params.slug),
        getAllMerch()
      ]);

      if (itemData) {
        setItem(itemData);
        
        // Find related items (same category, different product)
        const related = allItems
          .filter(relatedItem => 
            relatedItem.category === itemData.category && 
            relatedItem._id !== itemData._id
          )
          .slice(0, 3);
        
        setRelatedItems(related);
      }
      
    } catch (error) {
      console.error('Error loading merchandise item:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const formatSizes = (sizes) => {
    if (!sizes || sizes.length === 0) return '';
    return sizes.map(size => size.toUpperCase()).join(', ');
  };

  const formatColors = (colors) => {
    if (!colors || colors.length === 0) return '';
    return colors.join(', ');
  };

  const categoryMap = {
    'tshirts': 'T-Shirts',
    'hoodies': 'Hoodies & Sweatshirts', 
    'hats': 'Hats & Caps',
    'decals': 'Decals & Stickers',
    'accessories': 'Accessories',
    'kids': 'Kids'
  };

  const allImages = item ? [
    item.mainImage,
    ...(item.gallery || [])
  ].filter(Boolean) : [];

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

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
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
        staggerChildren: 0.2
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

  if (!item) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="flex flex-col justify-center items-center py-32 text-white">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-white/70 mb-8">The merchandise item you're looking for doesn't exist.</p>
          <Link
            href="/merch"
            className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            Back to Merchandise
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Breadcrumb */}
      <section className="pt-8 pb-4 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/merch" className="hover:text-white transition-colors">Merchandise</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{item.title}</span>
          </nav>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={staggerChildren}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Product Images */}
            <motion.div variants={slideInLeft} className="space-y-6">
              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
                {allImages.length > 0 && allImages[selectedImageIndex]?.asset ? (
                  <Image
                    src={allImages[selectedImageIndex].asset.url}
                    alt={allImages[selectedImageIndex].alt || item.title}
                    width={600}
                    height={600}
                    className="w-full h-96 lg:h-[500px] object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-96 lg:h-[500px] flex items-center justify-center">
                    <Image
                      src="/NewportPitstop/logo-dark.webp"
                      alt={item.title}
                      width={200}
                      height={100}
                      className="object-contain opacity-80"
                    />
                  </div>
                )}
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {item.featured && (
                    <div className="bg-gradient-to-r from-accent-500 to-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Featured
                    </div>
                  )}
                  {item.popular && !item.featured && (
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Popular
                    </div>
                  )}
                  {!item.inStock && (
                    <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Out of Stock
                    </div>
                  )}
                </div>
              </div>

              {/* Image Gallery Thumbnails */}
              {allImages.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {allImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        selectedImageIndex === index 
                          ? 'border-primary-500 scale-105' 
                          : 'border-gray-600 hover:border-gray-400'
                      }`}
                    >
                      {image?.asset ? (
                        <Image
                          src={image.asset.url}
                          alt={image.alt || `${item.title} ${index + 1}`}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400 text-xs">No Image</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div variants={slideInRight} className="space-y-8">
              {/* Category */}
              <div className="inline-block bg-primary-500/20 text-primary-400 text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide">
                {categoryMap[item.category] || item.category}
              </div>

              {/* Title and Price */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 font-anton tracking-wide">
                  {item.title}
                </h1>
                <div className="text-4xl font-black text-primary-400 font-anton">
                  {formatPrice(item.price)}
                </div>
              </div>

              {/* Description */}
              {item.description && (
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )}

              {/* Product Details */}
              <div className="space-y-4">
                {item.sizes && item.sizes.length > 0 && (
                  <div className="flex items-center gap-4">
                    <span className="text-white font-semibold min-w-[80px]">Sizes:</span>
                    <div className="flex flex-wrap gap-2">
                      {item.sizes.map((size, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/10 text-white rounded-md text-sm font-medium"
                        >
                          {size.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {item.colors && item.colors.length > 0 && (
                  <div className="flex items-center gap-4">
                    <span className="text-white font-semibold min-w-[80px]">Colors:</span>
                    <div className="flex flex-wrap gap-2">
                      {item.colors.map((color, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/10 text-white rounded-md text-sm font-medium"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Purchase Info */}
              <div className="bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-secondary-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-black text-white mb-4 font-anton tracking-wide">
                  How to Purchase
                </h3>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <span>Available at track events and race days</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span>Cash and card payments accepted</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <a href="tel:8652588184" className="hover:text-white transition-colors">
                      Call (865) 258-8184 for availability
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/events"
                  className="flex-1 group inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-lg font-anton tracking-wide uppercase text-center"
                >
                  View Race Schedule
                  <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <Link
                  href="/merch"
                  className="flex-1 inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white hover:bg-white/10 transition-all duration-300 text-center"
                >
                  Back to Merchandise
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      {relatedItems.length > 0 && (
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-black text-white mb-12 text-center font-anton tracking-wide uppercase">
                Related Products
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedItems.map((relatedItem) => (
                  <Link
                    key={relatedItem._id}
                    href={`/merch/${relatedItem.slug.current}`}
                    className="group bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    {/* Product Image */}
                    <div className="relative h-48 mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
                      {relatedItem.mainImage?.asset ? (
                        <Image
                          src={relatedItem.mainImage.asset.url}
                          alt={relatedItem.mainImage.alt || relatedItem.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            src="/NewportPitstop/logo-dark.webp"
                            alt={relatedItem.title}
                            width={120}
                            height={60}
                            className="object-contain opacity-80"
                          />
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-white font-anton tracking-wide group-hover:text-primary-400 transition-colors">
                        {relatedItem.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-primary-400 font-anton">
                          {formatPrice(relatedItem.price)}
                        </span>
                        <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full">
                          {categoryMap[relatedItem.category] || relatedItem.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}