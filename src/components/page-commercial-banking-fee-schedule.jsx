"use client";

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

// Complete data structure for fee schedule with all values from the website
const feeScheduleData = [
  {
    category: 'Minimum Balance to Open',
    businessChecking: '$250.00',
    corporateChecking: '$250.00',
    ioltaChecking: '$1,000.00',
    iotaChecking: '$1,000.00',
    nowChecking: '$1,000.00',
    commercialMMA: '$1,500.00',
  },
  {
    category: 'Monthly Service Charge',
    businessChecking: '$20.00 fee can be avoided by maintaining a $2,000.00 average daily collected balance',
    corporateChecking: '$20.00 fee may be reduced by earnings credit**',
    ioltaChecking: 'No monthly fee regardless of balance',
    iotaChecking: 'No monthly fee regardless of balance',
    nowChecking: '$15.00 fee can be avoided by maintaining a $1,000.00 average daily collected balance',
    commercialMMA: '$20.00 fee can be avoided by maintaining a daily minimum balance of $1,500.00',
  },
  {
    category: 'Interest Paid',
    businessChecking: 'None',
    corporateChecking: 'None',
    ioltaChecking: 'Interest is compounded daily and paid monthly on 90% of the daily collected balance (less a 10% reserve requirement)',
    iotaChecking: 'Interest is compounded daily and paid monthly on 90% of the daily collected balance (less a 10% reserve requirement)',
    nowChecking: 'Interest is compounded daily and paid monthly on 100% of the daily collected balance',
    commercialMMA: 'Tiered interest is compounded daily and paid monthly on 100% of the daily collected balance',
  },
  {
    category: 'Deposit Fee',
    businessChecking: 'None',
    corporateChecking: '$0.50 per deposit',
    ioltaChecking: 'None',
    iotaChecking: 'None',
    nowChecking: 'None',
    commercialMMA: 'None',
  },
  {
    category: 'Per Credit Item Fee',
    businessChecking: '125 credit items processed free each month. Items processed in excess of 125 are $0.25 per item',
    corporateChecking: '$0.15 electronic credit\n$0.10 per check deposited',
    ioltaChecking: 'None',
    iotaChecking: 'None',
    nowChecking: 'None',
    commercialMMA: 'None',
  },
  {
    category: 'Per Debit (Check) Item Fee',
    businessChecking: '125 debit (check) items processed free each month. Items processed in excess of 125 are $0.25 per item.',
    corporateChecking: '$0.15 electronic debit\n$0.24 per debit (check) item',
    ioltaChecking: 'None',
    iotaChecking: 'None',
    nowChecking: 'None',
    commercialMMA: 'Six withdrawals allowed per month (checks and/or electronic transfers), $15.00 service charge per item exceeding limit***',
  },
  {
    category: 'Overdraft Fee',
    businessChecking: '$35.00',
    corporateChecking: '$35.00',
    ioltaChecking: '$35.00',
    iotaChecking: '$35.00',
    nowChecking: '$35.00',
    commercialMMA: '$35.00',
  },
  {
    category: 'Non-Sufficient Funds (NSF) Fee',
    businessChecking: '$35.00',
    corporateChecking: '$35.00',
    ioltaChecking: '$35.00',
    iotaChecking: '$35.00',
    nowChecking: '$35.00',
    commercialMMA: '$35.00',
  },
  {
    category: 'Return Deposit Item Fee',
    businessChecking: '$10.00',
    corporateChecking: '$10.00',
    ioltaChecking: '$10.00',
    iotaChecking: '$10.00',
    nowChecking: '$6.00',
    commercialMMA: '$10.00',
  },
  {
    category: 'Stop Payment Fee',
    businessChecking: '$25.00',
    corporateChecking: '$25.00',
    ioltaChecking: '$25.00',
    iotaChecking: '$25.00',
    nowChecking: '$20.00',
    commercialMMA: 'Free Stop Payments',
  },
  {
    category: 'Domestic Wire Transfer Fee',
    businessChecking: 'Incoming - $10.00\nOutgoing (In-person) - $100.00\nOutgoing (Phone/email) - $100.00',
    corporateChecking: 'Incoming - $10.00\nOutgoing (In-person) - $100.00\nOutgoing (Phone/email) - $100.00',
    ioltaChecking: 'Incoming - $10.00\nOutgoing (In-person) - $100.00\nOutgoing (Phone/email) - $100.00',
    iotaChecking: 'Incoming - $10.00\nOutgoing (In-person) - $100.00\nOutgoing (Phone/email) - $100.00',
    nowChecking: 'Incoming – None\nOutgoing - $100.00',
    commercialMMA: 'Incoming - $10.00\nOutgoing (In-person) - $100.00\nOutgoing (Phone/email) - $100.00',
  },
  {
    category: 'International Wire Transfer Fee (US Dollar)',
    businessChecking: 'Incoming - $20.00\nOutgoing (In-person) - $100.00\nOutgoing (Phone/email) - $100.00',
    corporateChecking: 'Incoming - $20.00\nOutgoing (In-person) - $100.00\nOutgoing (Phone/email) - $100.00',
    ioltaChecking: 'Incoming - $20.00\nOutgoing (In-person) - $100.00\nOutgoing (Phone/email) - $100.00',
    iotaChecking: 'Incoming - $20.00\nOutgoing (In-person) - $100.00\nOutgoing (Phone/email) - $100.00',
    nowChecking: 'Incoming - $20.00\nOutgoing - $100.00',
    commercialMMA: 'Incoming - $20.00\nOutgoing (In-person) - $100.00\nOutgoing (Phone/email) - $100.00',
  },
];

const FeeSchedule = () => {
  const [activeAccount, setActiveAccount] = useState('businessChecking');
  // Initialize all rows to be expanded by default on mobile
  const [expandedRows, setExpandedRows] = useState(
    Object.fromEntries(feeScheduleData.map((_, index) => [index, true]))
  );

  const accountOptions = [
    { id: 'businessChecking', label: 'Business Checking' },
    { id: 'corporateChecking', label: 'Corporate Checking' },
    { id: 'ioltaChecking', label: 'IOLTA Checking' },
    { id: 'iotaChecking', label: 'IOTA Checking*' },
    { id: 'nowChecking', label: 'NOW Checking' },
    { id: 'commercialMMA', label: 'Commercial MMA' }
  ];

  const toggleRow = (index) => {
    setExpandedRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Desktop view renders a traditional table
  const renderDesktopView = () => (
    <div className="hidden lg:block overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="py-4 px-4 text-left text-sm font-medium tracking-wider">
              Checking Accounts
            </th>
            {accountOptions.map((option) => (
              <th key={option.id} className="py-4 px-4 text-left text-sm font-medium tracking-wider">
                {option.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {feeScheduleData.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="py-4 px-4 text-sm font-medium text-gray-900">
                {row.category}
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 whitespace-pre-line">
                {row.businessChecking}
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 whitespace-pre-line">
                {row.corporateChecking}
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 whitespace-pre-line">
                {row.ioltaChecking}
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 whitespace-pre-line">
                {row.iotaChecking}
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 whitespace-pre-line">
                {row.nowChecking}
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 whitespace-pre-line">
                {row.commercialMMA}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Mobile view renders an accordion with account selector
  const renderMobileView = () => (
    <div className="lg:hidden">
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
        {/* Account selector */}
        <div className="p-5 bg-gray-50 border-b border-gray-200">
          <label htmlFor="account-selector" className="block mb-2 text-sm font-medium text-gray-700">
            Select Account Type
          </label>
          <select
            id="account-selector"
            value={activeAccount}
            onChange={(e) => setActiveAccount(e.target.value)}
            className="block w-full px-4 py-2.5 border border-gray-300 rounded-md bg-white shadow-sm focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
          >
            {accountOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Fee items as accordions - all expanded by default */}
        <div className="divide-y divide-gray-200">
          {feeScheduleData.map((row, index) => (
            <div key={index} className="bg-white">
              <button
                onClick={() => toggleRow(index)}
                className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none transition-colors duration-150"
              >
                <span className="text-sm font-medium text-gray-900">{row.category}</span>
                {expandedRows[index] ? (
                  <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedRows[index] && (
                <div className="px-5 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-sm text-gray-700 whitespace-pre-line">
                    {row[activeAccount]}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div id="fee-schedule" className="mt-16 max-w-full">
      <h2 className="text-2xl font-normal tracking-tight text-gray-900 mb-6">
        Commercial Fee Schedule and Account Requirements
      </h2>
      
      {renderDesktopView()}
      {renderMobileView()}
      
      <div className="mt-5 space-y-1 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg border border-gray-200">
        <p>* Florida only</p>
        <p>** Earnings credit rate will be accrued on 100% of the average daily collected balance less a 10% reserve.</p>
        <p>*** This is a limited transaction account. Exceeding these limitations may result in account closure, change of account type, termination of transfer capability or other remedial action.</p>
      </div>
    </div>
  );
};

export default FeeSchedule;