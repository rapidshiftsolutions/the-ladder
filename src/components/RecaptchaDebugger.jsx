'use client'

import { useEffect, useState } from 'react'

export default function RecaptchaDebugger() {
  const [info, setInfo] = useState({})

  useEffect(() => {
    setInfo({
      siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      secretKey: process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY ? 'SET' : 'NOT SET',
      nodeEnv: process.env.NODE_ENV,
      isClient: typeof window !== 'undefined',
      timestamp: new Date().toISOString()
    })
  }, [])

  if (process.env.NODE_ENV === 'production') {
    return null // Don't show in production
  }

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: '#000',
      color: '#fff',
      padding: '10px',
      fontSize: '12px',
      zIndex: 9999,
      borderRadius: '4px',
      fontFamily: 'monospace'
    }}>
      <div><strong>reCAPTCHA Debug Info:</strong></div>
      <div>Site Key: {info.siteKey}</div>
      <div>Secret Key: {info.secretKey}</div>
      <div>Environment: {info.nodeEnv}</div>
      <div>Client: {info.isClient ? 'Yes' : 'No'}</div>
      <div>Time: {info.timestamp}</div>
    </div>
  )
}