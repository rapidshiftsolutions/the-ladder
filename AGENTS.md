# AGENTS.md

## Cursor Cloud specific instructions

This repo is **The Ladder** — a Next.js 14 (App Router) marketing/content site for a Birmingham nonprofit, with an embedded **Sanity Studio** at `/studio`. Content is read from the hosted Sanity API using credentials in `.env.local`. There is no separate backend service — the only service is the Next.js app.

### Running the app

- Dev: `npm run dev` → `http://localhost:3000`
- Build/verify: `npm run build` then `npm start`
- Scripts: see `package.json`

### Donations (GiveButter only)

GiveButter is the **sole** donation method. Do not reintroduce PayPal / Venmo / Cash App CTAs on live pages.

- Env (preferred): `NEXT_PUBLIC_GIVEBUTTER_ACCOUNT_ID`, `NEXT_PUBLIC_GIVEBUTTER_CAMPAIGN_CODE`, optional `NEXT_PUBLIC_GIVEBUTTER_WIDGET_ID` (see `.env.example`)
- CMS override: Sanity singleton **Donation Settings** fields `givebutterAccountId`, `givebutterCampaignCode`, `givebutterWidgetId`
- Widget script is loaded once via [`src/components/GivebutterScript.jsx`](src/components/GivebutterScript.jsx) from the root layout
- Checkout UI: [`src/app/donate/DonateClient.jsx`](src/app/donate/DonateClient.jsx) renders `<givebutter-giving-form>` (or `<givebutter-widget>` if Widget ID is set)
- Monthly path: `/monthly-giving` CTAs go to `/donate?frequency=monthly` (GiveButter URL prefill). Tier cards also pass `amount`.
- If Account ID / Campaign Code are missing, `/donate` shows a “being configured” fallback with a contact link — not a hard crash.
- Netlify CSP in [`netlify.toml`](netlify.toml) allowlists `widgets.givebutter.com` / `*.givebutter.com`.

### Non-obvious caveats

- **`postinstall` patches Next.js** via `scripts/patch-next.cjs` (required for `next build`).
- **Lint is not wired in the committed repo** (no ESLint config). Adding `{ "extends": "next/core-web-vitals" }` makes `next lint` runnable but causes `next build` to fail on pre-existing issues under `unused-components` / `unused-pages`.
- **Playwright** needs `npx playwright install --with-deps chromium` once per VM. Prefer `--project="Desktop Chrome"`.
- **Contact forms** POST to Netlify Forms — they only succeed on Netlify deploys, not on local `next dev`.
