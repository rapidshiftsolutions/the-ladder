// components/page-commercial-banking-account-grid.jsx
import React from 'react';
import AccountCard from './page-commercial-banking-account-card';

const AccountGrid = () => {
  const accounts = [
    {
      title: "Business Checking",
      features: [
        "Free Visa Business Check Card",
        "Low monthly service charge can be avoided by maintaining minimum average daily collected balance",
        "Expanded business check package at no cost",
        "125 credit items included each month",
        "125 debit items included each month"
      ]
    },
    {
      title: "Corporate Checking",
      features: [
        "Free Visa Business Check Card",
        "Analysis Account: monthly service charge calculated by account activity level",
        "Service charges may be reduced by earnings credit",
        "Earnings credit accrued on 90% of the daily balance"
      ]
    },
    {
      title: "IOLTA* Checking",
      features: [
        "No monthly service charge regardless of balance",
        "Interest is compounded daily and paid monthly on 90% of the daily collected balance",
        "Interest earned is paid directly to benefit to the Bar foundation in the state where the account is opened"
      ],
      footnote: <><sup>+</sup> Interest on Lawyer's Trust Accounts</>
    },
    {
      title: "IOTA* Checking",
      features: [
        "No monthly service charge regardless of balance",
        "Interest is compounded daily and paid monthly on 90% of the daily collected balance",
        "Interest earned is paid directly to the Florida Bar Association"
      ],
      footnote: <><sup>+</sup> Interest on Trust Accounts (Florida only)</>
    },
    {
      title: "NOW Checking",
      features: [
        "Designed for Sole Proprietors, Non-Profit Organizations & Public Funds",
        "Low monthly service charge can be avoided by maintaining minimum average daily collected balance",
        "Interest is compounded daily and paid monthly on 100% of the daily collected balance"
      ]
    }
  ];

  return (
    <div id="checking-accounts" className="mt-16">
      <h2 className="text-2xl font-normal tracking-tight text-gray-900 mb-8">
        Commercial Checking Accounts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map((account, index) => (
          <AccountCard 
            key={index}
            title={account.title}
            features={account.features}
            footnote={account.footnote}
          />
        ))}
      </div>
    </div>
  );
};

export default AccountGrid;