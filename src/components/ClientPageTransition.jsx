'use client';

import PageTransition from '/src/components/PageTransition';

/**
 * Client component wrapper for PageTransition
 * This allows us to use PageTransition in server components
 */
export default function ClientPageTransition({ children }) {
  return <PageTransition>{children}</PageTransition>;
}