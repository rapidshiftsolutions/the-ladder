"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { FooterNavItems } from '/src/data/navigation';

const NewportPitstopFooter = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <footer className="bg-surface-900 text-text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Company Info - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image
                src="/OEMRadioRepair/logo-light.svg"
                alt="OEM Radio Repair"
                width={200}
                height={70}
                className="h-12 w-auto"
              />
            </Link>

            {/* Description */}
            <p className="text-text-secondary text-sm leading-relaxed max-w-md">
              Professional infotainment repair services in Birmingham, AL. 
              Expert digitizer and LCD replacements with nationwide mail-in service.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:2055221162"
                    className="text-text-primary hover:text-primary-500 transition-colors font-medium"
                  >
                    (205) 522-1162
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-text-primary">2413 1st Ave S</p>
                  <p className="text-text-secondary">Birmingham, AL 35233</p>
                  <Link 
                    href="https://maps.google.com/?q=2413+1st+Ave+S+Birmingham+AL+35233"
                    className="text-primary-500 hover:text-primary-600 text-sm font-medium inline-block mt-1"
                  >
                    Get Directions →
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-text-primary font-medium">Business Hours</p>
                  <p className="text-text-secondary">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-text-secondary">Saturday: 8:00 AM - 5:00 PM</p>
                  <p className="text-text-secondary">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links - Takes 3 columns on large screens */}
          <div className="lg:col-span-3">
            {/* Desktop Navigation */}
            <div className="hidden md:grid md:grid-cols-4 gap-6">
              {FooterNavItems.map((item, index) => (
                <div key={index}>
                  <h4 className="text-text-primary font-bold text-lg mb-4">{item.name}</h4>
                  <ul className="space-y-2">
                    {item.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-text-secondary hover:text-primary-500 transition-colors text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mobile Navigation - Accordions */}
            <div className="md:hidden space-y-4">
              {FooterNavItems.map((item, index) => (
                <div key={index} className="border border-primary-500/20 rounded-lg">
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <h4 className="text-text-primary font-bold">{item.name}</h4>
                    <span className={`transform transition-transform ${
                      expandedSection === index ? 'rotate-180' : ''
                    }`}>
                      ▼
                    </span>
                  </button>
                  {expandedSection === index && (
                    <div className="px-4 pb-4">
                      <ul className="space-y-2">
                        {item.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link
                              href={link.href}
                              className="text-text-secondary hover:text-primary-500 transition-colors text-sm"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom section with copyright and CTA */}
      <div className="border-t border-primary-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-text-secondary text-sm">
                © {currentYear} OEM Radio Repair. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <Link href="/privacy" className="text-text-secondary hover:text-primary-500 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-text-secondary hover:text-primary-500 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex space-x-3">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-2 bg-primary-500 text-black font-bold rounded-lg hover:bg-primary-600 transition-all duration-300 text-sm"
              >
                Get Quote
              </Link>
              <a
                href="tel:2055221162"
                className="inline-flex items-center px-4 py-2 border border-primary-500/30 text-primary-500 font-medium rounded-lg hover:bg-primary-500/10 transition-all duration-300 text-sm"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewportPitstopFooter;