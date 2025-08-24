// components/page-personal-banking-account-card.jsx
import React from 'react';
import Image from 'next/image';

const AccountCard = ({ title, features, footnote, isBankOnCertified = false }) => {
  return (
    <div className="bg-white p-6 rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4 pb-3 border-b border-gray-200">
        {title}
      </h3>
      <ul className="space-y-4 text-gray-700 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="h-5 w-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" 
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      {isBankOnCertified && (
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-center">
          <div className="w-32 h-32 relative">
            <Image 
              src="/images/BankOn.jpeg" 
              alt="Bank On Certified Account" 
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
      
      {footnote && (
        <p className="mt-4 text-xs text-gray-700 pt-3 border-t border-gray-100">
          {footnote}
        </p>
      )}
    </div>
  );
};

export default AccountCard;