// components/page-treasury-management-positive-pay.jsx
import React from 'react';
import FeatureList from './page-treasury-management-feature-list';

const PositivePaySection = () => {
  const positivePayFeatures = [
    "English Mountain Raceway offers Positive Pay service to help detect check fraud & ACH Fraud.",
    "The bank compares a company's record of checks issued with checks presented for payment.",
    "Customers can either upload check-issued files or manually key items through our internet banking portal each business day.",
    "Checks not matching the company's check-issued file are considered suspicious.",
    "Suspicious checks are added to an exception file and the company will have the opportunity to return or approve the item for payment through our internet banking portal.",
    "Any ACH item presented can be approved or returned online."
  ];

  return (
    <FeatureList 
      features={positivePayFeatures} 
    />
  );
};

export default PositivePaySection;