// components/page-debit-card-monitoring.jsx
import React from 'react';

const DebitCardMonitoring = () => {
  return (
    <div className="mt-16">
      {/* Main Debit Card Monitoring Section */}
      <section className="bg-white p-8 rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="md:w-1/6 flex justify-center">
            <div className="bg-gray-50 rounded-full p-5 border border-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          
          <div className="md:w-5/6">
            <h2 className="text-2xl font-normal tracking-tight text-gray-900 mb-4">
              Debit Card Monitoring
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We are continuously monitoring your ATM and debit card transactions to protect your accounts using state-of-the-art intelligence technology and skilled fraud experts. If suspicious transactions are detected, a fraud specialist will immediately attempt to contact you. If fraud is confirmed, a hold will be placed on your card until we contact you with a resolution.
            </p>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 mb-3">How Our Monitoring Works:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">24/7 transaction monitoring</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Real-time fraud alerts</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-gray-700">Immediate specialist contact</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Temporary protective card holds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DebitCardMonitoring;