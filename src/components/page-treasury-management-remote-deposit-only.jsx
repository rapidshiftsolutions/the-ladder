// components/page-treasury-management-online-banking.jsx
import React from 'react';
import FeatureList from './page-treasury-management-feature-list';
import CTAButton from './page-treasury-management-cta-button';

const OnlineBankingSection = () => {

  const remoteDepositFeatures = [
    "Allows you to make check deposits electronically from your office rather than in person at the bank.",
    "Requires only a basic PC and a high-speed Internet connection.",
    "A desktop scanner is provided, allowing check deposits to be made from your office.",
    "All deposited checks are archived for research & report creation."
  ];

  return (
    <>
      <FeatureList 
        title="Remote Deposit Xpress" 
        features={remoteDepositFeatures} 
      />
      <CTAButton 
        href="https://smartpay.profitstars.com/business/login/servisfirstbank" 
        text="Visit Remote Deposit Xpress" 
      />
    </>
  );
};

export default OnlineBankingSection;