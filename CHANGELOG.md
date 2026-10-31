# Changelog

All notable changes to the Family Planner, newest first.

## 1.0.0 - 2026-10-31
- Moved hosting from Netlify to Cloudflare Workers (https://family-planner.luca-ferioli95.workers.dev/). All data stays in Supabase, so recipes, ingredients, the weekly plan and photos are unchanged.
- Includes the newer version built after the last Netlify deploy: a one-off tool to put the ingredient list into Italian (review the names before applying).
- Service worker caches bumped so installed copies pick up the new version.
