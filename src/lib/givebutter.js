/**
 * Resolve GiveButter config from Sanity settings with env fallbacks.
 * Account ID + Campaign Code are public widget identifiers (not secrets).
 *
 * Default Account ID comes from GiveButter Settings → Integrations → Widgets
 * (script: widgets.givebutter.com/latest.umd.cjs?acct=...).
 * The widgets library can ship before a campaign widget exists; the donate
 * page shows a configured embed once Campaign Code or Widget ID is set.
 */
export const DEFAULT_GIVEBUTTER_ACCOUNT_ID = 'cj1p7s9MwIXbWFeF'

export function getGivebutterConfig(settings = null) {
  return {
    accountId:
      settings?.givebutterAccountId ||
      process.env.NEXT_PUBLIC_GIVEBUTTER_ACCOUNT_ID ||
      DEFAULT_GIVEBUTTER_ACCOUNT_ID,
    campaignCode:
      settings?.givebutterCampaignCode ||
      process.env.NEXT_PUBLIC_GIVEBUTTER_CAMPAIGN_CODE ||
      '',
    widgetId:
      settings?.givebutterWidgetId ||
      process.env.NEXT_PUBLIC_GIVEBUTTER_WIDGET_ID ||
      '',
  }
}

export function isGivebutterConfigured(config) {
  return Boolean(config?.accountId && (config?.campaignCode || config?.widgetId))
}
