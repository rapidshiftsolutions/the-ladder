"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, Mail, MapPin, ArrowRight, TrendingUp } from 'lucide-react';

const FooterCompact = () => {
  const [currentYear, setCurrentYear] = useState('');
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const quickLinks = [
    { name: 'Get Help', href: '/get-help' },
    { name: 'Donate', href: '/donate' },
    { name: 'Partners', href: '/partners' },
    { name: 'About', href: '/about' }
  ];

  const legalLinks = [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms-of-service' },
    { name: 'Reports', href: '/annual-reports' }
  ];

  return (
    <footer 
      className="relative py-12 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 items-start mb-8">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: 'rgba(52, 199, 89, 0.2)',
                  border: '1px solid rgba(52, 199, 89, 0.3)'
                }}
              >
                <TrendingUp className="w-6 h-6" style={{ color: '#34C759' }} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">The Ladder</h3>
                <p className="text-sm text-white/70">Birmingham, Alabama</p>
              </div>
            </div>
            
            <p className="text-white/80 text-sm leading-relaxed mb-4 max-w-md">
              Helping individuals overcome specific barriers preventing their success through 
              nonprofit partnerships and community support.
            </p>
            
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white/60" />
                <a 
                  href="mailto:info@the-ladder.org" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  info@the-ladder.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white/60" />
                <span className="text-white/80">Birmingham, AL</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Stats */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wide">
              Organization
            </h4>
            <div className="space-y-2 mb-4">
              <p className="text-sm text-white/70">501(c)(3) Nonprofit</p>
              <p className="text-sm text-white/70">EIN: 47-2123160</p>
              <p className="text-sm text-white/70">Founded: 2021</p>
            </div>
            
            <ul className="space-y-1">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-xs text-white/60 hover:text-white/80 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Strip */}
        <div 
          className="p-4 rounded-2xl mb-6"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold mb-1">Ready to Remove Barriers?</p>
              <p className="text-sm text-white/70">Every person deserves the chance to succeed.</p>
            </div>
            
            <div className="flex gap-3">
              <a
                href="/get-help"
                className="inline-flex items-center px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: '#007AFF',
                  color: 'white'
                }}
              >
                <Heart className="w-4 h-4 mr-2" />
                Get Help
              </a>
              <a
                href="/donate"
                className="inline-flex items-center px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                Donate
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-6 border-t text-center"
          style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              &copy; {currentYear} The Ladder. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4 text-xs text-white/50">
              <span>500+ Lives Changed</span>
              <span>•</span>
              <span>95% Success Rate</span>
              <span>•</span>
              <span>24hr Response</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCompact;