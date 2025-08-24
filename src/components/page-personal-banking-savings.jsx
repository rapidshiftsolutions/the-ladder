// components/page-personal-banking-savings.jsx
import React from 'react';
import Link from 'next/link';

const SavingsSection = () => {
  const savingsAccounts = [
    {
      title: "Minor Savings",
      features: [
        "Structured for individuals through the age of 18 with parent or guardian (At age 19 account will automatically converts to ServisFirst Savings)",
        "No monthly service charge regardless of balance",
        "Quarterly statements",
        "Interest is compounded daily and paid on 100% of the daily collected balance"
      ]
    },
    {
      title: "ServisFirst Savings",
      features: [
        "No monthly service charge regardless of balance",
        "Quarterly statements",
        "Interest is compounded daily and paid on 100% of the daily collected balance"
      ]
    }
  ];

  return (
    <div id="savings-accounts" className="mt-16">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {savingsAccounts.map((account, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
          >
            <h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4 pb-3 border-b border-gray-200">
              {account.title}
            </h3>
            <ul className="space-y-4 text-gray-700 flex-grow">
              {account.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className="h-5 w-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" 
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/personal-banking-savings"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Learn More About Savings Accounts
        </Link>
      </div>
    </div>
  );
};

export default SavingsSection;