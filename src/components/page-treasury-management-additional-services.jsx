// components/page-treasury-management-additional-services.jsx
import React from 'react';

const AdditionalServices = () => {
  const services = [
    "Account Reconciliation",
    "Courier Services",
    "Paycard Services",
    "Retail and Wholesale Lockbox",
    "Cash Vault Services"
  ];

  return (
    <section id="additional-services" className="scroll-mt-24">
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="bg-gray-900 text-white px-8 py-6">
          <h2 className="text-2xl font-normal tracking-tight">
            Additional Treasury Management Services
          </h2>
        </div>
        <div className="p-8 space-y-6">
          <p className="text-gray-700">
            Please contact us for further details regarding:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-sm">
                <h3 className="font-medium text-gray-900">{service}</h3>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6">*Subject to Credit Approval</p>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;