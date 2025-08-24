// components/page-commercial-banking-common-features.jsx
import React from 'react';
import Link from 'next/link';

const CommonFeatures = () => {
  const features = [
    "Free Monthly Email Statements",
    "Free Notary Services",
    "Free Internet Banking*"
  ];

  return (
    <div className="mt-10 bg-white p-8 rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-2xl font-normal tracking-tight text-gray-900 mb-6">
        All of our Commercial Checking Accounts include:
      </h3>
      <ul className="mt-6 space-y-5">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg 
              className="h-5 w-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 pt-5 border-t border-gray-100 text-sm text-gray-600">
        <p className="mb-1">
          For more information on commercial fee Schedules and account
          requirements, view our <Link className="text-primary-600 hover:text-primary-800 underline transition-colors" href="/commercial-banking-fee-schedule-and-requirements">Comparison Chart</Link>.
        </p>
        <p>
          <sup>*</sup> Internet Banking is view account transactions only.
        </p>
      </div>
    </div>
  );
};

export default CommonFeatures;