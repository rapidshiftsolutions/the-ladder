// components/page-treasury-management-sweep-services.jsx
import React from 'react';
import FeatureList from './page-treasury-management-feature-list';

const SweepServicesSection = () => {
  const creditLineSweepFeatures = [
    "Minimize your company's interest expenses.",
    "Reduce administrative hassles of manual transfers.",
    "Transfers interact between a business line of credit and Corporate Checking, providing automatic funding & payments.",
    "Funds are automatically swept to reduce a line of credit balance or swept to cover a checking account."
  ];

  const moneyMarketSweepFeatures = [
    "Excess collected funds are automatically swept from your Corporate Checking & invested in your Money Market Account.",
    "Funds are also advanced from the Money Market Account to cover checks.",
    "Eliminates need to physically transfer funds between accounts.",
    "Can be used in conjunction with the Credit Line Sweep Service.",
    "Increase interest income or reduce interest expense.",
    "Maximize use of idle funds."
  ];

  const zeroBalanceFeatures = [
    "Available for commercial clients with multiple depository accounts to ensure the most efficient use of funds.",
    "Designates one account as the primary master account for investments and loans, while sub-accounts either advance or draw from the master account daily.",
    "Reduces idle balances in multiple accounts.",
    "Increases control over deposit & disbursement activities.",
    "Helps avoid cost of overdrafts."
  ];

  return (
    <>
      <FeatureList 
        title="Commercial Credit Line Sweep" 
        features={creditLineSweepFeatures} 
      />
      
      <FeatureList 
        title="Commercial Money Market Investment Sweep" 
        features={moneyMarketSweepFeatures} 
      />
      
      <FeatureList 
        title="Zero Balance Accounts" 
        features={zeroBalanceFeatures} 
      />
    </>
  );
};

export default SweepServicesSection;