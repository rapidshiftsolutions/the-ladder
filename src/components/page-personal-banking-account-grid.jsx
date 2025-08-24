// components/page-personal-banking-account-grid.jsx
import React from 'react';
import AccountCard from './page-personal-banking-account-card';

const AccountGrid = () => {
  const accounts = [
    {
      title: "ServisFirst Checking",
      features: [
        "Unlimited check writing",
        "Up to 5 foreign ATM service charges will be automatically reimbursed per month",
        "Low monthly service charge can be avoided by maintaining minimum average daily collected balance"
      ]
    },
    {
      title: "Foundation Checking",
      features: [
        "Designed for individuals age 50 and up",
        "No minimum daily balance required",
        "No monthly service charge regardless of balance",
        "Unlimited check writing",
        "Free custom wallet checks",
        "Unlimited foreign ATM/Debit transactions (English Mountain Raceway will reimburse up to $5.00 per transaction on foreign ATM charges)",
        "Interest is compounded daily and paid on 100% of the daily collected balance",
        "Free Notary Services",
        "Free Direct Deposit"
      ]
    },
    {
      title: "Executive Checking",
      features: [
        "Unlimited check writing",
        "Free custom wallet checks",
        "Up to 5 foreign ATM service charges will be automatically reimbursed per month",
        "Interest is compounded daily and paid on 100% of the daily collected balance",
        "Low monthly service charge can be avoided by maintaining minimum average daily collected balance",
        "Free Notary Services"
      ]
    },
    {
      title: "Student Checking",
      features: [
        "Available to students up to age 24",
        "No daily minimum balance required",
        "Low monthly service charge",
        "Up to 5 foreign ATM service charges will be automatically reimbursed per month",
        "Unlimited check writing",
        "Free first order of customer wallet checks"
      ],
      footnote: "On the student's 25th birthday, the account will automatically convert to a ServisFirst Checking account"
    },
    {
      title: "Simple Access Account",
      features: [
        "Use your ServisFirst Debit Card to access your personal checking account, make purchases, and withdraw cash from ATMs",
        "Free Internet and Mobile Banking",
        "Up to 5 foreign ATM service charges will be automatically reimbursed per month",
        "Low monthly service charge"
      ],
      isBankOnCertified: true
    }
  ];

  return (
    <div id="checking-accounts" className="mt-16">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map((account, index) => (
          <AccountCard 
            key={index}
            title={account.title}
            features={account.features}
            footnote={account.footnote}
            isBankOnCertified={account.isBankOnCertified}
          />
        ))}
      </div>
    </div>
  );
};

export default AccountGrid;