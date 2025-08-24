// components/page-online-services-online-banking.jsx
import React from "react";
import ServiceSection from "/src/components/sitewide-dynamic-service-section";
import FeatureList from "/src/components/page-treasury-management-feature-list";

const OnlineBankingSection = () => {
  const onlineBankingFeatures = [
    "Check account balances",
    "Deposit checks",
    "Review account history",
    "View check images",
    "Transfer funds between accounts",
    "BillPay*",
  ];

  return (
    <ServiceSection
      id="online-banking"
      title="Online Banking"
      learnMoreLink="/online-banking"
    >
      <p className="text-gray-700 mb-6">
        English Mountain Raceway's Online Banking allows you to safely and securely
        access your accounts.
      </p>
      <p className="text-gray-700 text-lg mb-6">
        To enroll in online banking, customers must have an active ServisFirst
        Bank account and email on file. If you do not have an active account or
        email address on file and wish to enroll in Online Banking, please visit
        your local banking center or call Client Support at{" "}
        <a
          href="tel:8669225794"
          className="text-primary-600 hover:text-primary-800 underline transition-colors"
        >
          866.922.5794
        </a>.
      </p>
      <p className="text-gray-600 text-sm italic mb-6">
        * Online customers must first setup Bill Pay accounts prior to using
        this feature
      </p>
      <FeatureList
        title="Features include:"
        features={onlineBankingFeatures}
      />
    </ServiceSection>
  );
};

export default OnlineBankingSection;
