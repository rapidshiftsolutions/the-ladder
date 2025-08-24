// components/page-personal-banking-savings-mm-fee-schedule.jsx
"use client";

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

const SavingsMoneyMarketFeeSchedule = () => {
  // Initialize all rows to be expanded by default on mobile
  const [expandedRows, setExpandedRows] = useState({
    'minimum': true,
    'monthly': true,
    'interest': true,
    'additional': true
  });

  const toggleRow = (rowKey) => {
    setExpandedRows((prev) => ({
      ...prev,
      [rowKey]: !prev[rowKey],
    }));
  };

  return (
    <div id="savings-mm-fee-schedule" className="mt-16 max-w-full">
      
      {/* Desktop view - full table */}
      <div className="hidden lg:block overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="w-1/4 py-4 px-4 text-left text-sm font-medium tracking-wider bg-gray-50 text-gray-600 border-b border-gray-200">
                Savings/MMA Accounts
              </th>
              <th className="w-1/4 py-4 px-4 text-center text-sm font-medium tracking-wider bg-blue-800 text-white">
                Minor Savings
              </th>
              <th className="w-1/4 py-4 px-4 text-center text-sm font-medium tracking-wider bg-blue-800 text-white">
                ServisFirst Savings
              </th>
              <th className="w-1/4 py-4 px-4 text-center text-sm font-medium tracking-wider bg-blue-800 text-white">
                Money Market Account
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr>
              <td className="py-4 px-4 text-sm font-medium text-gray-900 bg-gray-50">
                Minimum Balance to Open
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                $25.00
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                $100.00
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                $1,500.00
              </td>
            </tr>
            <tr>
              <td className="py-4 px-4 text-sm font-medium text-gray-900 bg-gray-50">
                Monthly Maintenance Fee
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                None
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                None
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                $10.00 fee can be avoided by maintaining a $1,500.00 average daily collected balance
              </td>
            </tr>
            <tr>
              <td className="py-4 px-4 text-sm font-medium text-gray-900 bg-gray-50">
                Interest Paid
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                Interest is compounded daily and paid on 100% of the daily collected balance
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                Interest is compounded daily and paid on 100% of the daily collected balance
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                Tiered interest is compounded daily and paid on 100% of the daily collected balance
              </td>
            </tr>
            <tr>
              <td className="py-4 px-4 text-sm font-medium text-gray-900 bg-gray-50">
                Additional Service Charges
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                None
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                None
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                Six withdrawals allowed per month (checks and/or electronic transfers), $15.00 service charge per item exceeding limit*
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile view - accordion */}
      <div className="lg:hidden">
        <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
          {/* Account selector tabs */}
          <div className="grid grid-cols-3 border-b border-gray-200">
            <button className="py-3 px-2 text-xs font-medium text-center bg-blue-800 text-white">
              Minor Savings
            </button>
            <button className="py-3 px-2 text-xs font-medium text-center bg-blue-800 text-white">
              ServisFirst Savings
            </button>
            <button className="py-3 px-2 text-xs font-medium text-center bg-blue-800 text-white">
              Money Market Account
            </button>
          </div>

          {/* Accordion content */}
          <div className="divide-y divide-gray-200">
            {/* Minimum Balance row */}
            <div>
              <button
                onClick={() => toggleRow('minimum')}
                className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="text-sm font-medium text-gray-900">Minimum Balance to Open</span>
                {expandedRows.minimum ? (
                  <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedRows.minimum && (
                <div className="px-4 py-3 bg-gray-50 grid grid-cols-3 gap-2 text-xs">
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">Minor Savings</div>
                    <div>$25.00</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">ServisFirst Savings</div>
                    <div>$100.00</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">Money Market</div>
                    <div>$1,500.00</div>
                  </div>
                </div>
              )}
            </div>

            {/* Monthly Maintenance Fee row */}
            <div>
              <button
                onClick={() => toggleRow('monthly')}
                className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="text-sm font-medium text-gray-900">Monthly Maintenance Fee</span>
                {expandedRows.monthly ? (
                  <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedRows.monthly && (
                <div className="px-4 py-3 bg-gray-50 space-y-4 text-xs">
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">Minor Savings</div>
                    <div>None</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">ServisFirst Savings</div>
                    <div>None</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">Money Market</div>
                    <div>$10.00 fee can be avoided by maintaining a $1,500.00 average daily collected balance</div>
                  </div>
                </div>
              )}
            </div>

            {/* Interest Paid row */}
            <div>
              <button
                onClick={() => toggleRow('interest')}
                className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="text-sm font-medium text-gray-900">Interest Paid</span>
                {expandedRows.interest ? (
                  <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedRows.interest && (
                <div className="px-4 py-3 bg-gray-50 space-y-4 text-xs">
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">Minor Savings</div>
                    <div>Interest is compounded daily and paid on 100% of the daily collected balance</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">ServisFirst Savings</div>
                    <div>Interest is compounded daily and paid on 100% of the daily collected balance</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">Money Market</div>
                    <div>Tiered interest is compounded daily and paid on 100% of the daily collected balance</div>
                  </div>
                </div>
              )}
            </div>

            {/* Additional Service Charges row */}
            <div>
              <button
                onClick={() => toggleRow('additional')}
                className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="text-sm font-medium text-gray-900">Additional Service Charges</span>
                {expandedRows.additional ? (
                  <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedRows.additional && (
                <div className="px-4 py-3 bg-gray-50 space-y-4 text-xs">
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">Minor Savings</div>
                    <div>None</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">ServisFirst Savings</div>
                    <div>None</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">Money Market</div>
                    <div>Six withdrawals allowed per month (checks and/or electronic transfers), $15.00 service charge per item exceeding limit*</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <p>* This is a limited transaction account. Exceeding these limitations may result in account closure, change of account type, termination of transfer capability or other remedial action.</p>
      </div>
    </div>
  );
};

export default SavingsMoneyMarketFeeSchedule;