// components/page-online-services-estatements.jsx
import React from 'react';
import ServiceSection from "/src/components/sitewide-dynamic-service-section";
import FeatureList from "/src/components/page-treasury-management-feature-list";

const EStatementsSection = () => {
  const eStatementsFeatures = [
    "Access your account statements online safely & securely.",
    "View detailed account transactions & check images the first business day after your statement cycle.",
    "Receive email notification when statement is available.",
    "Securely receive information from our online portal to ensure privacy for your financial protection.",
    "Electronic delivery of statements allows for prompt account reconciliation."
  ];

  return (
    <ServiceSection
      id="estatements"
      title="eStatements"
      learnMoreLink="/estatements"
    >
      <FeatureList 
        features={eStatementsFeatures} 
      />
    </ServiceSection>
  );
};

export default EStatementsSection;