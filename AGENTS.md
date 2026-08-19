# AGENTS.md

## Cursor Cloud specific instructions

This repo is **The Ladder** — a Next.js 14 (App Router) marketing/content site for a Birmingham nonprofit, with an embedded **Sanity Studio** at `/studio`. Content (blog posts, donation settings, success stories, guest-portal settings) is read from the hosted Sanity API using the credentials in `.env.local` (already present in the repo working tree). There is no separate backend service to run — the only service is the Next.js app.

### Running the app (single service)

- Dev server: `npm run dev` (Next.js on `http://localhost:3000`). This is the command to use during development; hot reload is enabled.
- Production build/verify: `npm run build` then `npm start`.
- Sanity Studio is served by the same Next.js app at `http://localhost:3000/studio` (no separate process).

Standard scripts live in `package.json` (`dev`, `build`, `start`, `lint`, `test`). Environment variables are in `.env.local` (git-ignored but present in the tree).

### Non-obvious caveats

- **`postinstall` patches Next.js.** `npm install` runs `scripts/patch-next.cjs`, which edits `node_modules/next/dist/build/generate-build-id.js`. This is idempotent and required for `next build` to succeed. If you ever hand-manage `node_modules`, re-run `node scripts/patch-next.cjs`.
- **Lint is not wired up in the committed repo.** There is a `lint` script (`next lint`) and `eslint-config-next` is installed, but **no ESLint config file is committed**, so `npm run lint` drops into an interactive setup prompt. To run it non-interactively, create a temporary `.eslintrc.json` containing `{ "extends": "next/core-web-vitals" }`. Do **not** commit that file: with an ESLint config present, `next build` also lints and **fails** on pre-existing `react/no-unescaped-entities` / parsing errors that live under `src/components/unused-components/` and `src/app/unused-pages/` (dead code). Without the config, `next build` skips linting and passes.
- **Playwright tests need browser binaries.** `npm test` runs Playwright (`playwright.config.ts` auto-starts `npm run dev` and reuses an already-running server). Browsers are not installed by `npm install`; run `npx playwright install --with-deps chromium` once per fresh VM before `npm test`. The config also defines Mobile Safari (WebKit) — install WebKit too if you need that project, or scope runs with `--project="Desktop Chrome"`.
- **Some committed Playwright tests fail against the current site** (e.g. homepage shows an initial "Loading application" screen, and layout-overflow / header-visibility assertions in `tests/e2e/navigation.spec.ts` and `tests/mobile/`). These failures pre-date environment setup (see committed `test-results/` and `playwright-report/`); they are app/test mismatches, not environment problems.
- **Forms only work in production.** `ContactForm` POSTs to Netlify Forms at `/`; locally this returns an error state (Netlify handles it only on deploy). The donation flow on `/donate` is fully client-side and works locally.
- **Guest portal auth** (`/api/guest-portal/auth`, protecting `/guest-portal/dashboard` via `src/middleware.js`) reads a password from a `guestPortalSettings` document in Sanity. If that document is absent from the dataset, the API returns `Portal configuration error` — expected unless the dataset is seeded.
