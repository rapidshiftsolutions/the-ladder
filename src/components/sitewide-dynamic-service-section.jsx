// components/sitewide-dynamic-service-section.jsx
import React from 'react';
import Link from 'next/link';

const ServiceSection = ({ 
  id, 
  title, 
  children, 
  learnMoreLink, 
  learnMoreText = "Learn more",
  accent = "primary" // Can be "primary", "secondary", or "neutral"
}) => {
  // Dynamic accent colors
  const accentColors = {
    primary: {
      header: "bg-gradient-to-r from-primary-700 to-primary-600",
      link: "text-primary-600 hover:text-primary-700",
      button: "bg-primary-600 hover:bg-primary-700 text-white",
      border: "border-primary-100"
    },
    secondary: {
      header: "bg-gradient-to-r from-gray-900 to-gray-800",
      link: "text-gray-700 hover:text-gray-900",
      button: "bg-gray-900 hover:bg-gray-800 text-white",
      border: "border-gray-100"
    },
    neutral: {
      header: "bg-gradient-to-r from-blue-700 to-blue-600",
      link: "text-blue-600 hover:text-blue-700",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
      border: "border-blue-100"
    }
  };

  const colors = accentColors[accent];

  return (
    <section id={id} className="scroll-mt-24 group">
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
        {/* Header with gradient background */}
        <div className={`${colors.header} text-white px-6 sm:px-8 py-5 sm:py-6`}>
          <h2 className="text-xl md:text-2xl font-normal tracking-tight">
            {title}
          </h2>
        </div>
        
        {/* Content area with responsive padding */}
        <div className="p-5 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
          {children}
        </div>
        
        {/* Learn more link with improved styling */}
        {learnMoreLink && (
          <div className={`px-6 sm:px-8 py-4 sm:py-5 bg-gray-50 flex justify-end border-t ${colors.border}`}>
            <Link
              href={learnMoreLink}
              className={`${colors.link} font-medium flex items-center group`}
            >
              <span className="mr-2">{learnMoreText}</span> 
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-gray-200 transition-all duration-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceSection;