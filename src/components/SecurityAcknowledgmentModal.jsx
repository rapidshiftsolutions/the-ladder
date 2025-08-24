"use client";

import { Dialog, DialogPanel } from '@headlessui/react';
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/solid';

export const SecurityAcknowledgmentModal = ({ 
  isOpen, 
  onConfirm,
  onCancel
}) => {
  return (
    <Dialog 
      open={isOpen} 
      onClose={() => {}} // Prevent closing on backdrop click
      className="relative z-[10000]"
    >
      {/* Backdrop with blur effect */}
      <div className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm z-[10000]" aria-hidden="true" />
      
      {/* Full-screen container for centering the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4 z-[10001]">
        <DialogPanel className="mx-auto max-w-2xl w-full bg-white rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
          {/* Alert Header Bar */}
          <div className="bg-red-600 px-6 py-3 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ExclamationTriangleIcon className="h-6 w-6 text-white mr-2" />
                <span className="text-white font-semibold uppercase tracking-wide text-sm">Security Alert</span>
              </div>
              <button
                onClick={onCancel}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close security alert"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          {/* Scrollable Content */}
          <div className="px-6 sm:px-8 py-6 sm:py-10 overflow-y-auto flex-1">
            {/* Main Heading */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
              Fraud Alert: English Mountain Raceway Will Not Call You Asking for Your Secure Access Code or Token
            </h2>
            
            {/* Body Text with enhanced styling */}
            <div className="bg-gray-50 border-l-4 border-red-500 p-4 sm:p-6 mb-6 sm:mb-8 rounded-r-lg">
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                <span className="font-bold text-red-600">NEVER</span> give out your username, password, secure access code, or token. 
                This is a serious threat. English Mountain Raceway will <span className="font-bold text-red-600">NEVER</span> ask for this information. 
                Any caller who asks for this information is not calling from English Mountain Raceway. Protect yourself. 
                Hang up and call <span className="font-semibold text-primary-600 whitespace-nowrap">1-866-317-0810</span>. Do NOT call the number back that was on your call log.
              </p>
            </div>
            
            {/* Confirmation Text */}
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 text-center font-medium">
              Please confirm you have read and understand.
            </p>
            
            {/* Button with enhanced styling */}
            <div className="flex justify-center">
              <button
                type="button"
                className="px-8 sm:px-10 py-3 sm:py-4 bg-primary-600 text-white font-semibold text-base sm:text-lg rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-500/50 transform transition-all duration-200 hover:scale-105 shadow-lg"
                onClick={onConfirm}
              >
                I understand
              </button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};