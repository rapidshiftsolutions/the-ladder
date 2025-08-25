"use client";

import React from 'react';

export default function ContinueLink({ url, className, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <a
      href={url}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}