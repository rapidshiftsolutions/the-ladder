// components/page-treasury-management-feature-list.jsx
import React from 'react';

const FeatureList = ({ features, title }) => {
  return (
    <div className="space-y-5">
      {title && <h3 className="text-xl font-medium text-gray-900 tracking-tight pb-2 border-b border-gray-200">{title}</h3>}
      <ul className="space-y-3.5 pl-6">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-700 flex items-start">
            <svg className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;