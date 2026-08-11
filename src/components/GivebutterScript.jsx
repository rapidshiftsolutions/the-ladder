'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

/**
 * Loads the GiveButter widgets script once account ID is known.
 * Used from the root layout (env) and as a safety net on /donate when
 * the Account ID is provided only via Sanity.
 */
export default function GivebutterScript({ accountId }) {
  const [readyAccountId, setReadyAccountId] = useState(accountId || '')

  useEffect(() => {
    if (accountId) {
      setReadyAccountId(accountId)
    }
  }, [accountId])

  if (!readyAccountId) {
    return null
  }

  return (
    <Script
      id="givebutter-widgets"
      src={`https://widgets.givebutter.com/latest.umd.cjs?acct=${encodeURIComponent(readyAccountId)}`}
      strategy="afterInteractive"
    />
  )
}
