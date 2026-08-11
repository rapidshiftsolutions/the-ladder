import Script from 'next/script'

const DEFAULT_ACCOUNT_ID = 'cj1p7s9MwIXbWFeF'

/**
 * Loads the Givebutter widgets library once for the whole site.
 */
export default function GivebutterScript({ accountId = DEFAULT_ACCOUNT_ID }) {
  const acct = accountId || DEFAULT_ACCOUNT_ID
  const src = `https://widgets.givebutter.com/latest.umd.cjs?acct=${encodeURIComponent(acct)}&p=other`

  return (
    <Script
      id="givebutter-widgets"
      src={src}
      strategy="afterInteractive"
    />
  )
}

export { DEFAULT_ACCOUNT_ID }
