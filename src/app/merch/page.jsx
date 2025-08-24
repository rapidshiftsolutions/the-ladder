"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '/src/components/sitewide-navbar';
import Footer from '/src/components/sitewide-footer';
import { 
  getAllMerch, 
  getMerchByCategory, 
  getFeaturedMerch, 
  getMerchCategories 
} from '/src/sanity/merchQueries';

export default function MerchPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [merchItems, setMerchItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
    loadMerchData();
  }, []);

  const loadMerchData = async () => {
    try {
      setLoading(true);
      
      // Load categories and all merchandise
      const [categoriesData, allMerchData] = await Promise.all([
        getMerchCategories(),
        getAllMerch()
      ]);

      // Set categories with "All" option
      setCategories([{ value: 'all', title: 'All' }, ...categoriesData]);
      setMerchItems(allMerchData);
      
    } catch (error) {
      console.error('Error loading merchandise:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = async (category) => {
    setSelectedCategory(category);
    setLoading(true);
    
    try {
      let items;
      if (category === "All" || category === "all") {
        items = await getAllMerch();
      } else {
        items = await getMerchByCategory(category);
      }
      setMerchItems(items);
    } catch (error) {
      console.error('Error filtering merchandise:', error);
    } finally {
      setLoading(false);
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

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
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

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/NewportPitstop/pexels/spectators.webp"
            alt="Racing merchandise background"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          {/* Dynamic Racing Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/50" />
        </div>

        {/* Racing Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h60v1H0zM0 59h60v1H0zM0 0v60h1V0zM59 0v60h1V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerChildren}
              className="text-center space-y-8"
            >
              {/* Main Title */}
              <motion.div variants={slideInLeft}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.9] tracking-wide font-anton">
                  <span className="block">TRACK</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400">
                    MERCHANDISE
                  </span>
                </h1>
              </motion.div>

              {/* Tagline */}
              <motion.div variants={slideInLeft}>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white/90 font-inter leading-tight max-w-4xl mx-auto">
                  Gear up with official English Mountain Raceway merchandise
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Speed Lines Effect */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
          <div className="h-full bg-gradient-to-r from-transparent via-primary-500/20 to-transparent transform -skew-y-2" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter */}
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeInUp}
            className="flex justify-center mb-12"
          >
            <div className="flex flex-wrap gap-4 bg-white/5 backdrop-blur-sm rounded-full p-2 border border-white/10">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => handleCategoryChange(category.value)}
                  disabled={loading}
                  className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 disabled:opacity-50 ${
                    selectedCategory === category.value || (selectedCategory === "All" && category.value === "all")
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
            </div>
          )}

          {/* No Items Message */}
          {!loading && merchItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-white/70 text-lg">
                No merchandise available in this category yet. Check back soon!
              </p>
            </div>
          )}

          {/* Merchandise Grid */}
          {!loading && merchItems.length > 0 && (
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {merchItems.map((item, index) => (
                <Link
                  key={item._id}
                  href={`/merch/${item.slug?.current || item._id}`}
                  className="block"
                >
                  <motion.div
                    variants={scaleIn}
                    className="group relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                  >
                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-accent-500 to-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Featured
                    </div>
                  )}

                  {/* Popular Badge */}
                  {item.popular && !item.featured && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Popular
                    </div>
                  )}

                  {/* Product Image */}
                  <div className="relative h-48 mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
                    {item.mainImage?.asset ? (
                      <Image
                        src={item.mainImage.asset.url}
                        alt={item.mainImage.alt || item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src="/NewportPitstop/logo-dark.webp"
                          alt={item.title}
                          width={120}
                          height={60}
                          className="object-contain opacity-80"
                        />
                      </div>
                    )}
                    {/* Product overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>

                  {/* Product Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white font-anton tracking-wide mb-2">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-white/70 font-inter text-sm leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary-400 font-anton">
                        {formatPrice(item.price)}
                      </span>
                      
                      {/* Category Badge */}
                      <span className="inline-block bg-primary-500/20 text-primary-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                        {categories.find(cat => cat.value === item.category)?.title || item.category}
                      </span>
                    </div>

                    {/* Sizes and Colors */}
                    <div className="space-y-2 text-xs text-white/60">
                      {item.sizes && item.sizes.length > 0 && (
                        <div>
                          <span className="font-semibold">Sizes: </span>
                          <span>{formatSizes(item.sizes)}</span>
                        </div>
                      )}
                      {item.colors && item.colors.length > 0 && (
                        <div>
                          <span className="font-semibold">Colors: </span>
                          <span>{formatColors(item.colors)}</span>
                        </div>
                      )}
                    </div>

                    {/* Stock Status */}
                    {!item.inStock && (
                      <div className="text-red-400 text-sm font-semibold">
                        Out of Stock
                      </div>
                    )}
                  </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          )}

          {/* Call to Action Message */}
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-secondary-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
              <h2 className="text-3xl font-black text-white mb-4 font-anton tracking-wide">
                SEE SOMETHING YOU LIKE?
              </h2>
              <p className="text-xl text-white/90 font-inter leading-relaxed mb-6">
                Pick it up at the track! All merchandise is available for purchase on race days. 
                Visit our merchandise booth in the pits area or ask any track staff member.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <span className="font-semibold">Available at Track Events</span>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span className="font-semibold">Cash & Card Accepted</span>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <a href="tel:8652588184" className="font-semibold hover:text-white transition-colors">
                    (865) 258-8184
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}