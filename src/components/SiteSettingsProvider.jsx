'use client'

import { createContext, useContext } from 'react'

const SiteSettingsContext = createContext(null)

export function SiteSettingsProvider({ settings, children }) {
  return (
    <SiteSettingsContext.Provider value={settings || null}>
      {children}
    </SiteSettingsContext.Provider>
  )
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext) || {}
}
