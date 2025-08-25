import React from 'react';
import Navbar from '@/components/sitewide-navbar';
import Footer from '@/components/sitewide-footer';
import Link from 'next/link';
import { Heart, Home, HelpingHand, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="relative">
        <div className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <img 
              src="/TheLadder/logos/The Ladder - Logo.png" 
              alt="The Ladder"
              className="h-20 w-auto mx-auto"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Page Not Found</h1>
          <p className="text-gray-600 mb-8 text-center max-w-md">We couldn't find the page you're looking for. The page may have been moved or is no longer available.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/" className="px-6 py-3 bg-[var(--ladder-blue)] text-white font-semibold rounded-lg hover:bg-[var(--ladder-blue)]/90 transition-colors inline-flex items-center justify-center">
              <Home className="w-5 h-5 mr-2" />
              Return to Homepage
            </Link>
            <Link href="/get-help" className="px-6 py-3 border border-[var(--ladder-red)] text-[var(--ladder-red)] font-semibold rounded-lg hover:bg-[var(--ladder-red)] hover:text-white transition-colors inline-flex items-center justify-center">
              <HelpingHand className="w-5 h-5 mr-2" />
              Get Help
            </Link>
          </div>
        </div>
        
        {/* Quick Navigation */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
              Popular Pages
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/how-we-help" className="text-center p-4 bg-white rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-[var(--ladder-blue)] font-semibold text-sm mb-1">How We Help</div>
                <div className="text-gray-600 text-xs">Barrier Removal</div>
              </Link>
              <Link href="/donate" className="text-center p-4 bg-white rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-[var(--ladder-gold)] font-semibold text-sm mb-1">Donate</div>
                <div className="text-gray-600 text-xs">Support Our Mission</div>
              </Link>
              <Link href="/success-stories" className="text-center p-4 bg-white rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-[var(--ladder-green)] font-semibold text-sm mb-1">Success Stories</div>
                <div className="text-gray-600 text-xs">Real Impact</div>
              </Link>
              <Link href="/contact" className="text-center p-4 bg-white rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-[var(--ladder-red)] font-semibold text-sm mb-1">Contact</div>
                <div className="text-gray-600 text-xs">(205) 522-1162</div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}