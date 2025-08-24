// This file contains functions for optimized font loading
// It interfaces with the Next.js font optimization system

import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';

/**
 * Custom hook for prefetching and preloading fonts
 * Improves font loading performance by adding preload links in the document head
 * 
 * @param {Array} fontPaths - Array of font file paths to preload
 * @returns {JSX.Element} - Font preload elements
 */
export function useFontOptimization(fontPaths = [
  '/NewportPitstop/fonts/Inter-VariableFont_opsz,wght.ttf',
  '/NewportPitstop/fonts/Inter-Italic-VariableFont_opsz,wght.ttf',
  '/NewportPitstop/fonts/AntonSC-Regular.ttf',
  '/NewportPitstop/fonts/Lacquer-Regular.ttf'
]) {
  const [preloaded, setPreloaded] = useState(false);

  // Insert font preload tags on the server
  useServerInsertedHTML(() => {
    if (preloaded) return null;
    setPreloaded(true);

    return (
      <>
        {fontPaths.map((path, index) => {
          const format = path.endsWith('.ttf') ? 'font/ttf' : 
                         path.endsWith('.woff') ? 'font/woff' : 
                         path.endsWith('.woff2') ? 'font/woff2' : 'font/ttf';
                         
          return (
            <link
              key={`font-preload-${index}`}
              rel="preload"
              href={path}
              as="font"
              type={format}
              crossOrigin="anonymous"
            />
          );
        })}
      </>
    );
  });
}

/**
 * Font optimization configuration object
 * Use this to configure font loading strategies application-wide
 */
export const fontOptimizationConfig = {
  fonts: {
    inter: {
      normal: '/NewportPitstop/fonts/Inter-VariableFont_opsz,wght.ttf',
      italic: '/NewportPitstop/fonts/Inter-Italic-VariableFont_opsz,wght.ttf',
      variable: '--font-inter',
      fallback: ['Arial', 'sans-serif'],
    },
    anton: {
      normal: '/NewportPitstop/fonts/AntonSC-Regular.ttf',
      variable: '--font-anton',
      fallback: ['Impact', 'Arial Black', 'sans-serif'],
    },
    lacquer: {
      normal: '/NewportPitstop/fonts/Lacquer-Regular.ttf',
      variable: '--font-lacquer',
      fallback: ['cursive', 'serif'],
    }
  },
  preload: true,
  display: 'swap',
  fallback: true,
};