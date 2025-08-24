// components/page-treasury-management-estatements.jsx
import React from 'react';
import FeatureList from './page-treasury-management-feature-list';

const EStatementsSection = () => {
  const eStatementsFeatures = [
    "Access your account statements online safely & securely.",
    "View detailed account transactions & check images the first business day after your statement cycle.",
    "Receive email notification when statement is available.",
    "Securely receive information from our online portal to ensure privacy for your financial protection.",
    "Electronic delivery of statements allows for prompt account reconciliation."
  ];

  return (
    <FeatureList 
      title="eStatements" 
      features={eStatementsFeatures} 
    />
  );
};

export default EStatementsSection;