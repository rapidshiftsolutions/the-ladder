"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Mail, MapPin, Users, Calendar, Award, ArrowRight, Phone } from 'lucide-react';
import { FooterNavItems } from '../data/navigation';

const TheLadderFooter = () => {
  const [currentYear, setCurrentYear] = useState('');
  const [mounted, setMounted] = useState(false);
  
  // Handle hydration issues and set current year client-side only to avoid mismatch
  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
    setMounted(true);
  }, []);

  return (
    <footer 
      className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1d1d1f 0%, #2d2d2f 100%)'
      }}
    >
      {/* iOS-style ambient background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #007AFF15, transparent)' }}
        />
        <div 
          className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #34C75915, transparent)' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-5 blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, #FF3B3015, transparent)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* iOS-style Main Section */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          
          {/* Company Info - Enhanced */}
          <div className="lg:col-span-2 space-y-6">
            <div 
              className="p-8 rounded-3xl"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: `
                  0 8px 32px rgba(0, 0, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `
              }}
            >
              <div className="mb-6">
                <img 
                  src="/TheLadder/logos/The Ladder - Logo.png" 
                  alt="The Ladder - A Helping Hand To People Who Are Climbing Up"
                  className="h-12 w-auto mb-4"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <h3 className="text-2xl font-bold text-white mb-3">
                  The Ladder
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Birmingham's 501(c)(3) nonprofit organization helping individuals overcome specific barriers preventing their success through crisis intervention and community partnerships.
                </p>
              </div>
              
              {/* Contact Actions */}
              <div className="space-y-4">
                <a
                  href="/get-help"
                  className="group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'rgba(255, 59, 48, 0.9)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-white" />
                    <span className="font-semibold text-white">Apply for Help</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
                </a>
                
                <a
                  href="/donate"
                  className="group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'rgba(52, 199, 89, 0.9)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-white" />
                    <span className="font-semibold text-white">Support Our Mission</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Trust Elements */}
            <div 
              className="p-6 rounded-3xl"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: `
                  0 4px 16px rgba(0, 0, 0, 0.2),
                  inset 0 1px 0 rgba(255, 255, 255, 0.05)
                `
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">500+</div>
                  <div className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Lives Changed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">95%</div>
                  <div className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">30 Days</div>
                  <div className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Avg Resolution</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links - Simplified */}
          {FooterNavItems.slice(0, 2).map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">
                {section.name}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-base transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2 group"
                      style={{ 
                        color: 'rgba(255, 255, 255, 0.8)',
                      }}
                    >
                      <span className="group-hover:text-white transition-colors">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* iOS-style Mission Banner */}
        <div className="mb-16">
          <div 
            className="relative p-12 rounded-3xl text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.15), rgba(52, 199, 89, 0.15))',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: `
                0 20px 60px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `
            }}
          >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div 
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full"
                style={{ background: 'radial-gradient(circle, white, transparent)' }}
              />
              <div 
                className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full"
                style={{ background: 'radial-gradient(circle, white, transparent)' }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">
                "We focus on people over problems"
              </h3>
              <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Helping individuals one by one climb over very specific, personal barriers that are otherwise keeping them from moving forward in life.
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-base">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" style={{ color: '#34C759' }} />
                  <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Birmingham, Alabama</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" style={{ color: '#007AFF' }} />
                  <a 
                    href="mailto:info@the-ladder.org" 
                    className="transition-colors hover:text-white"
                    style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                  >
                    info@the-ladder.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* iOS-style Legal footer */}
      <div 
        className="border-t py-8"
        style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div 
            className="p-6 rounded-3xl"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center lg:text-left">
                <span className="text-base font-medium text-white">
                  &copy; {currentYear} The Ladder
                </span>
                <span className="text-base" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  501(c)(3) Nonprofit • EIN: 47-2123160
                </span>
                <span className="text-base" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Birmingham, Alabama
                </span>
              </div>
              
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-6 text-base">
                <Link 
                  href="/privacy" 
                  className="transition-all duration-300 hover:text-white hover:translate-y-[-1px]"
                  style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms-of-service" 
                  className="transition-all duration-300 hover:text-white hover:translate-y-[-1px]"
                  style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                >
                  Terms of Service
                </Link>
                <Link 
                  href="/accessibility" 
                  className="transition-all duration-300 hover:text-white hover:translate-y-[-1px]"
                  style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                >
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