// components/page-treasury-management-zescrow.jsx
import React from 'react';
import FeatureList from './page-treasury-management-feature-list';
import CTAButton from './page-treasury-management-cta-button';

const ZEscrowSection = () => {
  const zescrowFeatures = [
    "Pain-free escrow and subaccounting service, unlike anything you've ever seen.",
    "Secure online access allowing your organization to manage virtually all escrow and subaccounting tasks without sending faxes, handling paper tax forms, or calling customer service.",
    "Seamless integration with our internal banking software, providing access to critical information from your online business banking portal.",
    "Fast access to monitor and manage your escrow and subaccounts online, 24/7.",
    "Efficient workflow eliminates faxing signed forms and phone calls to check balances or make changes.",
    "Built-in regulatory compliance, including W-9s and other tax paperwork.",
    "Flexible platform that excels at unusual and complex workflows for specialized use cases."
  ];

  const keyFeatures = [
    "100% online, anytime access for designated team members",
    "Open, fund, manage or close escrow accounts in just 30 seconds",
    "Create 1-1000+ digital folders to match your internal filing system",
    "Access detailed reports and historical statements with just 2 button clicks",
    "Gather and store W-9s online in 60 seconds with DocuSign integration",
    "Precise, customizable interest calculation and splitting",
    "API-first platform that can connect to your in-house software"
  ];

  return (
    <>
      <div className="mb-8">
        <h3 className="text-xl font-medium text-gray-900 tracking-tight pb-2 border-b border-gray-200 mb-5">ZEscrow</h3>
        <p className="text-gray-700 mb-5">
          Move & grow your business faster with modern cash management tools. ZEscrow is a modern escrow and subaccounting service that accommodates a wide range of businesses and special use cases.
        </p>
        <FeatureList 
          features={zescrowFeatures} 
        />
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-medium text-gray-900 tracking-tight pb-2 border-b border-gray-200 mb-5">Key Features</h3>
        <FeatureList 
          features={keyFeatures} 
        />
      </div>
      
    </>
  );
};

export default ZEscrowSection;