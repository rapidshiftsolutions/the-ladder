'use client';

import dynamic from 'next/dynamic';

/**
 * Deferred Components Loader
 * 
 * This component dynamically loads non-critical client components
 * to reduce the initial JavaScript bundle size and improve LCP/FCP.
 * 
 * These components are loaded after the main content is rendered.
 */

// Dynamically import non-critical components
const ServiceWorkerRegistration = dynamic(
  () => import('./ServiceWorkerRegistration'),
  { ssr: false }
);

const InstallPrompt = dynamic(
  () => import('./InstallPrompt'),
  { ssr: false }
);

const PerformanceMonitor = dynamic(
  () => import('./PerformanceMonitor'),
  { ssr: false }
);

export default function DeferredComponents() {
  return (
    <>
      {/* Service worker for PWA functionality - deferred */}
      <ServiceWorkerRegistration />
      
      {/* PWA Install prompt - deferred */}
      <InstallPrompt />
      
      {/* Performance monitoring - deferred */}
      <PerformanceMonitor />
    </>
  );
}
