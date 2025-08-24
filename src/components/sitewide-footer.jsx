"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Shield, Clock, Truck } from 'lucide-react';
import { FooterNavItems } from '/src/data/navigation';

const OEMRadioRepairFooter = () => {
  const [currentYear, setCurrentYear] = useState('');
  const [mounted, setMounted] = useState(false);
  
  // Handle hydration issues and set current year client-side only to avoid mismatch
  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
    setMounted(true);
  }, []);

  return (
    <footer className="bg-surface-900/95 backdrop-blur-sm text-white relative overflow-hidden">
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
              <h3 className="text-2xl font-bold text-white mb-2">OEM Radio Repair</h3>
              <p className="text-text-secondary text-sm mb-4">
                Professional infotainment screen repair service. Family-owned business with decades of experience in the car audio industry.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" />
                <a href="/contact" className="text-text-secondary hover:text-primary-400 transition-colors">
                  Contact Us
                </a>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@oemradiorepair.com" className="text-text-secondary hover:text-primary-400 transition-colors">
                  info@oemradiorepair.com
                </a>
              </div>
              <div className="flex items-start text-sm">
                <MapPin className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                <div className="text-text-secondary">
                  2413 1st Ave S<br />
                  Birmingham, AL 35233
                </div>
              </div>
            </div>

            {/* Trust Elements */}
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Shield className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-text-secondary">1 Year Warranty</span>
              </div>
              <div className="flex items-center text-sm">
                <Truck className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-text-secondary">Free 2-Way Shipping</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-text-secondary">2-3 Day Turnaround</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {FooterNavItems.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-bold tracking-wide text-white uppercase mb-4">
                {section.name}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-text-secondary hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Area Banner */}
        <div className="border-t border-surface-600 pt-8 mb-8">
          <div className="bg-surface-800/50 rounded-lg p-6 text-center">
            <h3 className="text-lg font-bold text-white mb-2">Nationwide Service</h3>
            <p className="text-text-secondary text-sm mb-4">
              We repair infotainment screens for customers across the United States with our convenient mail-in service.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-text-secondary">
              <span>• Dodge</span>
              <span>• Chrysler</span>
              <span>• Jeep</span>
              <span>• Cadillac</span>
              <span>• Ram</span>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Legal footer */}
      <div className="border-t border-surface-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="flex items-center flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
              <span className="text-text-secondary text-sm">
                &copy; {currentYear} OEM Radio Repair
              </span>
              <span className="text-text-secondary text-sm">
                Founded by Alex Harmon
              </span>
              <span className="text-text-secondary text-sm">
                Birmingham, AL
              </span>
            </div>
            
            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-text-secondary hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-text-secondary hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default OEMRadioRepairFooter;