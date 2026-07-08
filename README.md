# TallyBite legal

Public home for the **TallyBite** app's Privacy Policy and Terms of Use, served via GitHub Pages
(required by Google Play for the privacy-policy URL).

- **Privacy Policy:** [`privacy.html`](privacy.html)
- **Terms of Use:** [`terms.html`](terms.html)
- **Credits & Licenses:** [`credits.html`](credits.html)

Sources live in [`src/`](src) as Markdown; `build.mjs` renders them to styled static HTML.
Regenerate with `node build.mjs`. The `.nojekyll` marker makes GitHub Pages serve the HTML as-is.

The Privacy Policy and Terms here are kept in lockstep with the copy bundled inside the app
(`docs/legal/*.md` in the app repo); Credits mirrors the in-app attribution ledger
(`apps/mobile/src/content/credits.ts`).
