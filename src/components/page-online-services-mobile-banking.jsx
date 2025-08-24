// components/page-online-services-mobile-banking.jsx
import React from "react";
import ServiceSection from "/src/components/sitewide-dynamic-service-section";
import FeatureList from "/src/components/page-treasury-management-feature-list";

const MobileBankingSection = () => {
  const mobileBankingFeatures = [
    "Check account balances",
    "Deposit checks (Consumer Accounts Only)",
    "Review account history",
    "View check images",
    "Transfer funds between accounts",
    "BillPay**",
    "Find the nearest banking center using the GPS system provided by your device",
  ];

  return (
    <ServiceSection
      id="mobile-banking"
      title="Mobile Banking"
      learnMoreLink="/mobile-banking"
    >
      <p className="text-gray-700 mb-6">
        English Mountain Raceway's Mobile Banking allows you to access your accounts
        anytime, anywhere with your Android, iPhone or iPad device. Our Mobile
        Banking app is free, secure, and easy to use. Simply install the
        appropriate app for your device and login using your English Mountain Raceway
        Online Banking* User ID and Password.
      </p>

      <FeatureList
        title="Features include:"
        features={mobileBankingFeatures}
      />

      <div className="mt-6">
        <p className="text-gray-600 text-sm italic mb-2">
          * Must be a English Mountain Raceway NetTeller Online Banking Customer to use
          mobile banking
        </p>
        <p className="text-gray-600 text-sm italic mb-6">
          ** Online customers must first setup BillPay accounts prior to using
          this feature
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href="https://apps.apple.com/us/app/servisfirst-bank/id6503630884"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-5 py-2.5 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <svg
            className="h-5 w-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="currentColor"
          >
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
          </svg>
          App Store
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.servisfirstbankal.grip&pcampaignid=web_share"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-5 py-2.5 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <svg
            className="h-5 w-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
          </svg>
          Google Play
        </a>
      </div>
    </ServiceSection>
  );
};

export default MobileBankingSection;
