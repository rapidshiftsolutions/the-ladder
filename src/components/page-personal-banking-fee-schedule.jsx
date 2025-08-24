// components/page-personal-banking-fee-schedule.jsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

const FeeSchedule = () => {
  // Initialize all rows to be expanded by default on mobile
  const [expandedRows, setExpandedRows] = useState({
    'minimum': true,
    'monthly': true,
    'interest': true,
    'additional': true,
    'common': true,
  });

  const toggleRow = (rowKey) => {
    setExpandedRows((prev) => ({
      ...prev,
      [rowKey]: !prev[rowKey],
    }));
  };

  return (
    <div id="checking-fee-schedule" className="mt-16 max-w-full">
      <h3 className="text-xl font-medium text-gray-900 mb-6">Checking Account Fee Schedule</h3>
      
      {/* Desktop view - full table */}
      <div className="hidden lg:block overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="w-1/6 py-4 px-4 text-left text-sm font-medium tracking-wider bg-gray-50 text-gray-600 border-b border-gray-200">
                Checking Accounts
              </th>
              <th className="w-1/6 py-4 px-4 text-center text-sm font-medium tracking-wider bg-blue-800 text-white">
                ServisFirst Checking
              </th>
              <th className="w-1/6 py-4 px-4 text-center text-sm font-medium tracking-wider bg-blue-800 text-white">
                Foundation Checking
              </th>
              <th className="w-1/6 py-4 px-4 text-center text-sm font-medium tracking-wider bg-blue-800 text-white">
                Executive Checking
              </th>
              <th className="w-1/6 py-4 px-4 text-center text-sm font-medium tracking-wider bg-blue-800 text-white">
                Student Checking
              </th>
              <th className="w-1/6 py-4 px-4 text-center text-sm font-medium tracking-wider bg-blue-900 text-white">
                Simple Access
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            <tr>
              <td className="py-4 px-4 text-sm font-medium text-gray-900 bg-gray-50">
                Minimum Balance to Open
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                $100.00
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                $250.00
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                $250.00
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                $100.00
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                $25.00
              </td>
            </tr>
            <tr>
              <td className="py-4 px-4 text-sm font-medium text-gray-900 bg-gray-50">
                Monthly Service Charge
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                $8.00 fee can be avoided by maintaining a $1,500.00 average daily collected balance
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                No monthly fee regardless of balance
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                $10.00 fee can be avoided by maintaining a $1,500.00 average daily collected balance
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                $2.00 maintenance fee regardless of balance
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                $5.00 maintenance fee regardless of balance
              </td>
            </tr>
            <tr>
              <td className="py-4 px-4 text-sm font-medium text-gray-900 bg-gray-50">
                Interest Paid
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                None
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                Interest is compounded daily and paid on 100% of the daily collected balance
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                Interest is compounded daily and paid on 100% of the daily collected balance
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                None
              </td>
              <td className="py-4 px-4 text-sm text-gray-700 text-center">
                None
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile view - accordion */}
      <div className="lg:hidden">
        <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
          {/* Account selector tabs */}
          <div className="grid grid-cols-5 border-b border-gray-200 text-xs">
            <button className="py-3 px-2 font-medium text-center bg-blue-800 text-white">
              ServisFirst
            </button>
            <button className="py-3 px-2 font-medium text-center bg-blue-800 text-white">
              Foundation
            </button>
            <button className="py-3 px-2 font-medium text-center bg-blue-800 text-white">
              Executive
            </button>
            <button className="py-3 px-2 font-medium text-center bg-blue-800 text-white">
              Student
            </button>
            <button className="py-3 px-2 font-medium text-center bg-blue-900 text-white">
              Simple Access
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
                  <ChevronUpIcon className="h-5 w-5 text-gray-700" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-gray-700" />
                )}
              </button>
              {expandedRows.minimum && (
                <div className="px-4 py-3 bg-gray-50 grid grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">ServisFirst Checking</div>
                    <div>$100.00</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">Foundation Checking</div>
                    <div>$250.00</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">Executive Checking</div>
                    <div>$250.00</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">Student Checking</div>
                    <div>$100.00</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-900">Simple Access</div>
                    <div>$25.00</div>
                  </div>
                </div>
              )}
            </div>

            {/* Monthly Service Charge row */}
            <div>
              <button
                onClick={() => toggleRow('monthly')}
                className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="text-sm font-medium text-gray-900">Monthly Service Charge</span>
                {expandedRows.monthly ? (
                  <ChevronUpIcon className="h-5 w-5 text-gray-700" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-gray-700" />
                )}
              </button>
              {expandedRows.monthly && (
                <div className="px-4 py-3 bg-gray-50 space-y-4 text-xs">
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">ServisFirst Checking</div>
                    <div>$8.00 fee can be avoided by maintaining a $1,500.00 average daily collected balance</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">Foundation Checking</div>
                    <div>No monthly fee regardless of balance</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">Executive Checking</div>
                    <div>$10.00 fee can be avoided by maintaining a $1,500.00 average daily collected balance</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">Student Checking</div>
                    <div>$2.00 maintenance fee regardless of balance</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-900">Simple Access</div>
                    <div>$5.00 maintenance fee regardless of balance</div>
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
                  <ChevronUpIcon className="h-5 w-5 text-gray-700" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-gray-700" />
                )}
              </button>
              {expandedRows.interest && (
                <div className="px-4 py-3 bg-gray-50 space-y-4 text-xs">
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">ServisFirst Checking</div>
                    <div>None</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">Foundation Checking</div>
                    <div>Interest is compounded daily and paid on 100% of the daily collected balance</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">Executive Checking</div>
                    <div>Interest is compounded daily and paid on 100% of the daily collected balance</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-800">Student Checking</div>
                    <div>None</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold text-blue-900">Simple Access</div>
                    <div>None</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Common fees section */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Fees that Apply to All Accounts</h3>
        
        {/* Desktop view */}
        <div className="hidden lg:block overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Item
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Fees
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Stop Payment Fee
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  $20.00
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Domestic Wire Transfer Fees
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Incoming - $10.00<br />
                  Outgoing - $20.00
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  International Wire Transfer Fees
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Incoming - $20.00<br />
                  Outgoing - $20.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Mobile view */}
        <div className="lg:hidden">
          <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <button
              onClick={() => toggleRow('common')}
              className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50"
            >
              <span className="text-sm font-medium text-gray-900">Common Account Fees</span>
              {expandedRows.common ? (
                <ChevronUpIcon className="h-5 w-5 text-gray-700" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-gray-700" />
              )}
            </button>
            {expandedRows.common && (
              <div className="px-4 py-3 bg-gray-50 space-y-4 text-xs">
                <div className="space-y-1">
                  <div className="font-semibold">Stop Payment Fee</div>
                  <div>$20.00</div>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold">Domestic Wire Transfer Fees</div>
                  <div>Incoming - $10.00<br />Outgoing - $20.00</div>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold">International Wire Transfer Fees</div>
                  <div>Incoming - $20.00<br />Outgoing - $20.00</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeSchedule;