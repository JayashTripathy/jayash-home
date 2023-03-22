---
title: 🌑 next.js dark mode
slug: nextjs-dark-mode
date: "2023-02-27"
topic: coding
---

The dark mode on my website was always pretty half baked, so while I was [converting to Tailwind][tailwind-migration], I spent some time improving it. There were a few major requirements I wanted to implement.

-   The color theme can be modified by the user.
-   The color theme is persisted across reloads.
-   The color theme is persisted across page transitions.
-   There is no light mode flicker.

The rest of the post will go into more detail explaining how I accomplished this. You can also reference the [pull request][pull-request] for the full implementation.

## ♟️ strategy

My overall strategy involved a few different aspects. First, I maintained the `theme` state in a [React context][context]. Next, I persisted the theme across reloads using [local storage][local-storage]. Finally, I applied the theme by adding a `dark` class to the `html` element, and [Tailwind][tailwind] handled the rest of the styling.

![dark mode diagram][dark-mode-diagram]

Anytime the `theme` changes, both `localStorage` and the `html` class are updated to reflect the current value. When the application loads, it checks `localStorage` for an existing user preference before defaulting to light mode. And last but not least, a prerender script is run to initialize the `html` class to match the value in `localStorage` in order to prevent light mode flicker.

## 🤲🏼 theme provider

I started by creating the `ThemeContext` and `ThemeProvider` so that the theme could be used freely throughout the application without prop drilling. At it's core, it just holds the `theme` value in state.

