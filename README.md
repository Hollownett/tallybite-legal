# Gramwise legal

Public home for the **Gramwise** app's Privacy Policy and Terms of Use, served via GitHub Pages
(required by Google Play for the privacy-policy URL).

The repository and its `tallybite-legal` URL keep the app's previous name deliberately: this URL is
the privacy-policy link registered in Play Console, so renaming the repo is a coordinated owner
action, not a cleanup (see ADR-0062 in the app repository).

- **Privacy Policy:** [`privacy.html`](privacy.html)
- **Terms of Use:** [`terms.html`](terms.html)
- **Credits & Licenses:** [`credits.html`](credits.html)

Sources live in [`src/`](src) as Markdown; `build.mjs` renders them to styled static HTML.
Regenerate with `node build.mjs`. The `.nojekyll` marker makes GitHub Pages serve the HTML as-is.

The files in `src/` mirror the canonical `docs/legal/*.md` files in the app repository. Copy all
three sources, run `node build.mjs`, and publish the generated HTML in the same commit so the public
policy cannot drift from the binary under review.
