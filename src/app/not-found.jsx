import React from 'react';
import Navbar from '/src/components/sitewide-navbar';
import Footer from '/src/components/sitewide-footer-newport';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main className="relative">
        <div className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 sm:px-6 lg:px-8">
          <img src="/OEMRadioRepair/logo-small-light-bg.png" alt="OEM Radio Repair" className="h-12 w-auto mb-8" />
          <h1 className="text-4xl font-black mb-4 text-white font-exo2 tracking-wide uppercase">Page Not Found</h1>
          <p className="text-white/80 mb-8 text-center max-w-md font-inter">We couldn't find the page you're looking for. The page may have been moved or is no longer available.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/" className="px-6 py-3 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-colors inline-flex items-center justify-center font-inter">
              Return to Homepage
            </Link>
            <Link href="/services" className="px-6 py-3 bg-black/50 border border-primary-500/30 text-white font-bold rounded-lg hover:bg-black/70 transition-colors inline-flex items-center justify-center font-inter">
              View Our Services
            </Link>
          </div>
        </div>
        
        {/* Quick Navigation */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20">
            <h2 className="text-xl sm:text-2xl font-black text-white mb-6 font-exo2 tracking-wide uppercase text-center">
              Popular Pages
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/services" className="text-center p-4 bg-surface-800/50 rounded-lg hover:bg-surface-700/50 transition-colors">
                <div className="text-primary-400 font-bold font-inter text-sm mb-1">Digitizer Repair</div>
                <div className="text-white/60 text-xs font-inter">$400 Flat Rate</div>
              </Link>
              <Link href="/services" className="text-center p-4 bg-surface-800/50 rounded-lg hover:bg-surface-700/50 transition-colors">
                <div className="text-primary-400 font-bold font-inter text-sm mb-1">LCD Replacement</div>
                <div className="text-white/60 text-xs font-inter">$550 Flat Rate</div>
              </Link>
              <Link href="/warranty" className="text-center p-4 bg-surface-800/50 rounded-lg hover:bg-surface-700/50 transition-colors">
                <div className="text-primary-400 font-bold font-inter text-sm mb-1">Warranty</div>
                <div className="text-white/60 text-xs font-inter">1-Year Guarantee</div>
              </Link>
              <Link href="/contact" className="text-center p-4 bg-surface-800/50 rounded-lg hover:bg-surface-700/50 transition-colors">
                <div className="text-primary-400 font-bold font-inter text-sm mb-1">Contact</div>
                <div className="text-white/60 text-xs font-inter">(205) 522-1162</div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}