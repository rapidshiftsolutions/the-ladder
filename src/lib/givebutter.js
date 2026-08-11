/**
 * Resolve GiveButter config from Sanity settings with env fallbacks.
 * Account ID + Campaign Code are public widget identifiers (not secrets).
 */
export function getGivebutterConfig(settings = null) {
  return {
    accountId:
      settings?.givebutterAccountId ||
      process.env.NEXT_PUBLIC_GIVEBUTTER_ACCOUNT_ID ||
      '',
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
