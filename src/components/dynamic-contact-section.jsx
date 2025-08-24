// components/dynamic-contact-section.jsx
import React from 'react';
import Link from 'next/link';

const DynamicContactSection = ({ 
  id = "contact",
  title = "Contact Us",
  description = "Ready to learn more? Contact our team to discuss your specific needs and discover the right solutions.",
  phoneNumber = "866.317.0810",
  phoneLabel = "Customer Service",
  email = "info@servisfirstbank.com",
  emailLabel = "Email Us",
  ctaText = "Request Information",
  ctaSubtext = "Schedule a consultation with one of our experts to explore solutions tailored to your needs.",
  ctaLinkText = "Contact Us",
  ctaLinkHref = "/contact-us"
}) => {
  return (
    <section
      id={id}
      className="scroll-mt-24"
    >
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 mt-16">
        {/* Header - Full width on all screens */}
        <div className="bg-gray-900 text-white px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          <h2 className="text-xl sm:text-2xl font-normal tracking-tight">
            {title}
          </h2>
        </div>
        
        {/* Content section with responsive padding */}
        <div className="p-4 sm:p-6 md:p-8">
          {/* Description with max width for readability */}
          <p className="text-gray-700 mb-6 md:mb-8 max-w-3xl text-sm sm:text-base">
            {description}
          </p>
          
          {/* Grid layout that stacks on mobile, side-by-side on tablet+ */}
          <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2">
            {/* Contact Information Card */}
            <div className="bg-gray-50 p-4 sm:p-5 md:p-6 rounded-lg border border-gray-200">
              <div className="flex items-start">
                <div className="bg-white p-2 sm:p-3 rounded-full mr-3 sm:mr-4 border border-gray-200 shadow-sm flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-3">
                    Contact Information
                  </h3>
                  <div className="text-sm sm:text-base text-gray-700 space-y-2">
                    <div>
                      <strong></strong>{" "}
                      <a
                        href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                        className="text-primary-600 hover:text-primary-800 underline transition-colors"
                      >
                        {phoneNumber}
                      </a>
                      <br />
                      <span className="text-xs sm:text-sm text-gray-600">{phoneLabel}</span>
                    </div>
                    <div>
                      <strong></strong>{" "}
                      <a
                        href={`mailto:${email}`}
                        className="text-primary-600 hover:text-primary-800 hover:underline transition-colors break-words"
                      >
                        {email}
                      </a>
                      <br />
                      <span className="text-xs sm:text-sm text-gray-600">{emailLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Card */}
            <div className="bg-gray-50 p-4 sm:p-5 md:p-6 rounded-lg border border-gray-200 flex flex-col justify-between">
              <div className="flex items-start mb-4 sm:mb-6">
                <div className="bg-white p-2 sm:p-3 rounded-full mr-3 sm:mr-4 border border-gray-200 shadow-sm flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-3">
                    {ctaText}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    {ctaSubtext}
                  </p>
                </div>
              </div>
              
              {/* CTA Button with responsive sizing */}
              <Link
                href={ctaLinkHref}
                className="w-full inline-flex justify-center items-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium tracking-wide rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors duration-200 ease-in-out shadow-sm"
              >
                <span>{ctaLinkText}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-1.5 sm:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicContactSection;