"use client";

import React from 'react';
import { SecurityAcknowledgmentProvider, useSecurityAcknowledgment } from './SecurityAcknowledgmentContext';
import { SecurityAcknowledgmentModal } from './SecurityAcknowledgmentModal';
import { GlobalBankingLinkHandler } from './GlobalBankingLinkHandler';
import { useRouterIntercept } from './useRouterIntercept';

// Component that renders the modal when needed
const SecurityModalRenderer = () => {
  const {
    isOpen,
    confirmAcknowledgment,
    cancelAcknowledgment,
    bankingType
  } = useSecurityAcknowledgment();

  // Use the router intercept hook
  useRouterIntercept();

  return (
    <>
      <GlobalBankingLinkHandler />
      <SecurityAcknowledgmentModal
        isOpen={isOpen}
        onConfirm={confirmAcknowledgment}
        onCancel={cancelAcknowledgment}
        bankingType={bankingType}
      />
    </>
  );
};

// Wrapper component that provides context and modal
export const SecurityAcknowledgmentWrapper = ({ children }) => {
  return (
    <SecurityAcknowledgmentProvider>
      {children}
      <SecurityModalRenderer />
    </SecurityAcknowledgmentProvider>
  );
};