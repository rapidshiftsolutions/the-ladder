"use client";

import { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function ImageViewer({ src, alt, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      {/* Clickable Image */}
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-pointer hover:opacity-90 transition-opacity duration-200`}
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsOpen(true);
          }
        }}
      />

      {/* Full Screen Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 p-2 text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="Close image viewer"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Click outside to close overlay */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setIsOpen(false)}
            aria-label="Close image viewer"
          />
        </div>
      )}
    </>
  );
}