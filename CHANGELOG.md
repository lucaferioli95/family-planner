# Changelog

All notable changes to the Family Planner, newest first.

## 1.1.0 - 2026-10-31
- On a phone, the Planner tab has a "Day slides" button: each day fills the screen and you swipe left and right between days, with a Mon to Sun strip to jump around. It opens on today when the week includes it. "List view" brings back the normal layout. The choice is remembered on that device.

## 1.0.1 - 2026-10-31
- The week summary at the bottom of the planner can now be hidden with a Hide / Show button next to its title. The choice is remembered on each device.

## 1.0.0 - 2026-10-31
- Moved hosting from Netlify to Cloudflare Workers (https://family-planner.luca-ferioli95.workers.dev/). All data stays in Supabase, so recipes, ingredients, the weekly plan and photos are unchanged.
- Includes the newer version built after the last Netlify deploy: a one-off tool to put the ingredient list into Italian (review the names before applying).
- Service worker caches bumped so installed copies pick up the new version.
