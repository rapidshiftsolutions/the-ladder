// components/page-estatements-login.jsx
import React from 'react';
import Link from 'next/link';

const EStatementsLoginComponent = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl mb-6">
          eStatements Login
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Access your account statements securely online. Select the appropriate login option below based on your account type.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="bg-gray-900 text-white px-8 py-6">
            <h2 className="text-xl font-normal tracking-tight">
              Commercial Banking Customers
            </h2>
          </div>
          <div className="p-8 space-y-6">
            <p className="text-gray-700">
              For business accounts, corporate accounts, and commercial treasury management services.
            </p>
            <a 
              href="https://eservis.olbanking.com/onlineMessenger" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium tracking-wide rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors duration-200 ease-in-out shadow-sm"
            >
              Log in to Commercial eStatements
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="bg-gray-900 text-white px-8 py-6">
            <h2 className="text-xl font-normal tracking-tight">
              Personal Banking Customers
            </h2>
          </div>
          <div className="p-8 space-y-6">
            <p className="text-gray-700">
              For personal checking, savings, money market, and individual accounts.
            </p>
            <a 
              href="https://secure.servisfirstbank.com/login" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium tracking-wide rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors duration-200 ease-in-out shadow-sm"
            >
              Log in to Personal eStatements
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EStatementsLoginComponent;