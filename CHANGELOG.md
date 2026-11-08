# Changelog

All notable changes to the Family Planner, newest first.

## 1.5.0 - 2026-11-08
- Adding a meal: the last step now has an "Already have it" tick. If ticked, what you add is left off the shopping list (it still counts toward nutrition), same as the snowflake on a meal.
- Planner tab: new "Check" button next to Slides. It shows every day and every meal of the week with a tick (filled) or a cross (empty), and says how many meals are still empty.

## 1.4.0 - 2026-11-05
- Shopping tab: the Week, From and To drop-downs are replaced by one calendar button showing the days you are shopping for (for example "Mon 9 – Wed 11 Nov"). Tap it, then tap a day, or two days in the same week for a range. "Whole week" and "Today" are there too. Days in weeks that have no plan are greyed out. (The old Week drop-down only appears if you still have an older week without dates.)

## 1.3.1 - 2026-11-05
- The footer now shows the app version, where it is hosted (Cloudflare) and a link to this changelog, so you can tell which version is installed.

## 1.3.0 - 2026-11-05
- New "Find an ingredient" box at the bottom of the Planner tab. Type an ingredient (accents and capitals do not matter) and it lists every day and meal in the week on screen that uses it, who it is for and the amount, with the total for the week. The suggestions list helps you pick the name.

## 1.2.2 - 2026-10-31
- In Slides view, today's day in the Mon to Sun strip is softly highlighted (gold) when the week you are viewing contains today.

## 1.2.1 - 2026-10-31
- Planner controls fit on one row: calendar button, A / L switch, prep clock icon and the Slides / List switch. The "this week" tag is gone from the button.
- The calendar is now only the month and its weeks: removed the legend text and the Today, Rename, Copy and Delete buttons.

## 1.2.0 - 2026-10-31
- Planner header decluttered on phones: the week dropdown is replaced by a calendar (tap the date button). Every row is a week; future weeks are there, weeks that already have a plan are marked, "this week" is outlined, and the week you are viewing is filled in. Tapping an empty week starts a new plan for it. Rename, copy and delete for a week moved into the calendar.
- "Things to prepare in advance" now shows as a small clock icon with the count; tap it to see the list.
- People moved to Settings. The person switch shows A and L instead of the full names.
- Removed "Clear a meal".
- In list view on a phone, swipe a meal to the left to delete it (a short swipe shows Delete, a long swipe deletes at once). There is an Undo for a few seconds.

## 1.1.0 - 2026-10-31
- On a phone, the Planner tab has a "Day slides" button: each day fills the screen and you swipe left and right between days, with a Mon to Sun strip to jump around. It opens on today when the week includes it. "List view" brings back the normal layout. The choice is remembered on that device.

## 1.0.1 - 2026-10-31
- The week summary at the bottom of the planner can now be hidden with a Hide / Show button next to its title. The choice is remembered on each device.

## 1.0.0 - 2026-10-31
- Moved hosting from Netlify to Cloudflare Workers (https://family-planner.luca-ferioli95.workers.dev/). All data stays in Supabase, so recipes, ingredients, the weekly plan and photos are unchanged.
- Includes the newer version built after the last Netlify deploy: a one-off tool to put the ingredient list into Italian (review the names before applying).
- Service worker caches bumped so installed copies pick up the new version.
