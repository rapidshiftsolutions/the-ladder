'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

/**
 * Disable Next.js draft mode (preview mode) and redirect to home.
 */
// disableDraftMode removed as unneeded
export function disableDraftMode() {
  // no-op
}
