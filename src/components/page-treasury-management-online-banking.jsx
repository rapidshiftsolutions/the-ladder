// components/page-treasury-management-online-banking.jsx
import React from 'react';
import FeatureList from './page-treasury-management-feature-list';
import CTAButton from './page-treasury-management-cta-button';

const OnlineBankingSection = () => {
  const eServisFeatures = [
    "Conveniently access your account information safely and securely from your PC or mobile devices.",
    "View real time account balances and detailed activity on your checking & money market account, as well as loans, lines of credit and certificate of deposits (CDs).",
    "Search for transactions by date, amount, or check number or transaction type.",
    "View and print front & back of check images from one screen.",
    "Account transactions can be downloaded to software such as Quicken, Quickbooks or other financial software.",
    "Transfer funds between multiple accounts to one or from one to multiple accounts.",
    "Place stop payments on checks, multiples or range of checks at one time.",
    "Make online payments with ease with English Mountain Raceway BillPay.",
    "Single sign-on capabilities to other bank products, like remote deposit and eStatements."
  ];

  const advancedFeatures = [
    "Same capabilities as eServis Business Online with more comprehensive features designed for business clients.",
    "User can set their own home page based on the functions they utilize most.",
    "Create custom balance and activity reports, download reports in HTML, PDF, BA12 or CSV formats.",
    "Pay your employees, concentrate or disburse funds via ACH origination services.",
    "Initiate domestic and international wire transfers.",
    "Secure browser technology to protect your online banking session from viruses and malware; no need for tokens, IP restrictions or other cumbersome security processes.",
    "Dual-control capabilities to have secondary approval of monetary transactions before processing.",
    "Fraud Analytics that monitors your session to alert the bank of any abnormal activity."
  ];

  const remoteDepositFeatures = [
    "Allows you to make check deposits electronically from your office rather than in person at the bank.",
    "Requires only a basic PC and a high-speed Internet connection.",
    "A desktop scanner is provided, allowing check deposits to be made from your office.",
    "All deposited checks are archived for research & report creation."
  ];

  return (
    <>
      <FeatureList 
        title="eServis Business Online" 
        features={eServisFeatures} 
      />
      <CTAButton 
        href="https://eservis.olbanking.com/" 
        text="Visit eServis Business Online" 
      />

      <FeatureList 
        title="Advanced eServis Business Online" 
        features={advancedFeatures} 
      />
      <CTAButton 
        href="https://eservis.olbanking.com/" 
        text="Visit Advanced eServis Business Online" 
      />

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