"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Mail, MapPin, Users, Calendar, Award } from 'lucide-react';
import { FooterNavItems } from '/src/data/navigation';

const TheLadderFooter = () => {
  const [currentYear, setCurrentYear] = useState('');
  const [mounted, setMounted] = useState(false);
  
  // Handle hydration issues and set current year client-side only to avoid mismatch
  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
    setMounted(true);
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800 overflow-hidden">
      {/* Glass morphism background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--ladder-blue)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--ladder-green)]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-[var(--ladder-gold)]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto pt-16 pb-6 px-4 sm:px-6 lg:px-8">
        
        {/* Top section with company info and navigation */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="glass-card bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6 mb-6 shadow-xl">
              <div className="mb-4">
                <img 
                  src="/TheLadder/logos/The Ladder - Logo.png" 
                  alt="The Ladder - A Helping Hand To People Who Are Climbing Up"
                  className="h-16 w-auto mb-2"
                />
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Birmingham's 501(c)(3) nonprofit organization helping individuals overcome specific barriers preventing their success through crisis intervention and community partnerships.
              </p>
            </div>

            {/* Contact Info */}
            <div className="glass-card bg-white/50 backdrop-blur-xl border border-white/30 rounded-xl p-4 mb-6 shadow-lg">
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Heart className="w-4 h-4 text-[var(--ladder-red)] mr-3 flex-shrink-0" />
                  <a href="/get-help" className="text-gray-600 hover:text-[var(--ladder-gold)] transition-colors">
                    Apply for Help
                  </a>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="w-4 h-4 text-[var(--ladder-blue)] mr-3 flex-shrink-0" />
                  <a href="mailto:info@the-ladder.org" className="text-gray-600 hover:text-[var(--ladder-gold)] transition-colors">
                    info@the-ladder.org
                  </a>
                </div>
                <div className="flex items-start text-sm">
                  <MapPin className="w-4 h-4 text-[var(--ladder-green)] mr-3 flex-shrink-0 mt-0.5" />
                  <div className="text-gray-600">
                    Serving Birmingham, Alabama<br />
                    and surrounding communities
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Elements */}
            <div className="glass-card bg-white/40 backdrop-blur-xl border border-white/30 rounded-xl p-4 shadow-lg">
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Users className="w-4 h-4 text-[var(--ladder-green)] mr-2" />
                  <span className="text-gray-600">150+ People Helped</span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="w-4 h-4 text-[var(--ladder-blue)] mr-2" />
                  <span className="text-gray-600">24 Hour Response</span>
                </div>
                <div className="flex items-center text-sm">
                  <Award className="w-4 h-4 text-[var(--ladder-gold)] mr-2" />
                  <span className="text-gray-600">501(c)(3) Nonprofit</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {FooterNavItems.map((section, index) => (
            <div key={index} className="glass-card bg-white/50 backdrop-blur-xl border border-white/30 rounded-xl p-6 shadow-lg hover:bg-white/60 transition-all duration-300">
              <h3 className="text-sm font-bold tracking-wide text-gray-900 uppercase mb-4">
                {section.name}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-[var(--ladder-blue)] transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mission Banner */}
        <div className="border-t border-white/30 pt-8 mb-8">
          <div className="glass-card bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl p-6 text-center shadow-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm mb-4">
              Helping individuals one by one climb over very specific, personal barriers that are otherwise keeping them from moving forward in life.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <span>• Housing Support</span>
              <span>• Employment Assistance</span>
              <span>• Financial Stability</span>
              <span>• Health & Wellness</span>
              <span>• Crisis Intervention</span>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Legal footer */}
      <div className="border-t border-white/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="glass-card bg-white/40 backdrop-blur-xl border border-white/30 rounded-xl p-4 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Copyright */}
              <div className="flex items-center flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
                <span className="text-gray-600 text-sm">
                  &copy; {currentYear} The Ladder
                </span>
                <span className="text-gray-600 text-sm">
                  501(c)(3) Nonprofit • EIN: 47-2123160
                </span>
                <span className="text-gray-600 text-sm">
                  Birmingham, AL
                </span>
              </div>
              
              {/* Legal Links */}
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-600 hover:text-[var(--ladder-blue)] transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-gray-600 hover:text-[var(--ladder-blue)] transition-colors">
                  Terms of Service
                </Link>
                <Link href="/accessibility" className="text-gray-600 hover:text-[var(--ladder-blue)] transition-colors">
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TheLadderFooter;