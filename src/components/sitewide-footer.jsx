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
    <footer className="bg-gray-50 text-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto pt-16 pb-6 px-4 sm:px-6 lg:px-8">
        
        {/* Top section with company info and navigation */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
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
            <div className="space-y-3 mb-6">
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

            {/* Trust Elements */}
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

          {/* Navigation Links */}
          {FooterNavItems.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-bold tracking-wide text-gray-900 uppercase mb-4">
                {section.name}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-primary-600 transition-colors text-sm"
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
        <div className="border-t border-gray-300 pt-8 mb-8">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
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
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
              <Link href="/privacy" className="text-gray-600 hover:text-primary-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-600 hover:text-primary-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-gray-600 hover:text-primary-600 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TheLadderFooter;