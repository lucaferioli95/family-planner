# Family Planner

Weekly meal planner, recipes, nutrition tracking and shopping list for the family. A single `index.html` (vanilla JS) with Supabase as the data backend (recipes, ingredients, weekly plan, photos, Google sign-in with an allow-list).

- Hosting: Cloudflare Workers static assets (`wrangler.jsonc`), deployed on every push to `main`. Moved from Netlify; all data stays in Supabase, so nothing was copied.
- `_headers` keeps the page and service worker from being cached by the browser.
- Each release is listed in [CHANGELOG.md](CHANGELOG.md).
