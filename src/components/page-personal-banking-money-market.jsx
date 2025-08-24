// components/page-personal-banking-money-market.jsx
import React from 'react';
import Link from 'next/link';

const MoneyMarketSection = () => {
  const tiers = [
    "$0 - $99,999",
    "$100,000 - $249,999",
    "$250,000 - $499,999",
    "$500,000 - $999,999",
    "$1,000,000 and up"
  ];

  return (
    <div id="money-market" className="mt-16">

      <div className="bg-white p-8 rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
        <h3 className="text-xl font-medium tracking-tight text-gray-900 mb-6 pb-3 border-b border-gray-200">
          Account Features & Benefits
        </h3>

        <ul className="space-y-4 text-gray-700">
          {['Unlimited "in person" withdrawals', 
            'Free Money Market check orders', 
            'Low monthly service charge can be avoided by maintaining minimum average daily collected balance', 
            'Tiered interest is compounded daily and paid monthly on the daily collected balance',
            'Tiers:'].map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" 
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-4 ml-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {tiers.map((tier, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
              <span className="text-gray-700">{tier}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/personal-banking-money-market"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Learn More About Money Market Accounts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoneyMarketSection;