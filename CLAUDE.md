# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS landing page for IPL betting app. Originally exported from Figma as 14 numbered section folders, now assembled into a single page in `combined/`.

## Architecture

### Source Sections (`sections/`)
Original Figma exports in 14 numbered folders (1-14). Each contains:
- `index.html` - Section markup with auto-generated class names (e.g., `.frame-452656499`, `.group-85046`)
- `style.css` - Section styles with percentage-based absolute positioning
- `styleguide.css` - Design tokens
- `globals.css` - CSS reset
- `img/` - Section images

### Combined Page (`combined/`)
Production-ready assembled page using BEM methodology:
- `index.html` - Complete page with all sections
- `css/` - Modular stylesheets (20 files)
- `js/` - Modular JavaScript (6 files)
- `robots.txt`, `sitemap.xml` - SEO files
- `img/` - Images organized in subdirectories

## Image Architecture (`combined/img/`)

Modular image structure organized by section:

- `hero/` - Hero section: main.png, avatar-1.png to avatar-4.png
- `ipl-slider/` - IPL slider: player.png, badge-icon.svg, arrow-prev.svg, arrow-next.svg
- `app-download/` - App download: phone.png, store-buttons.svg
- `live-betting/` - Live betting: arrow-prev.svg, arrow-next.svg, team logos (chennai-super-kings.svg, kolkata-knight-riders.svg, mumbai-indians.svg, rajasthan-royals.svg, royal-challengers.svg, sunrisers-hyderabad.svg)
- `welcome-bonus/` - Welcome bonus: icon-1.png, icon-2.png, icon-3.png
- `app-features/` - App features: phone-front.png, phone-back.png, icon-support.svg, icon-game.svg, icon-tips.svg, checkmark.svg
- `reviews/` - Reviews: avatar-1.svg, avatar-2.svg, arrow-prev.svg, arrow-next.svg, star-filled.svg, star-empty.svg
- `platforms/` - Platforms: brands.svg
- `how-to-download/` - How to download: android.svg, ios.png
- `icons/` - Shared icons: facebook.svg, telegram.svg, twitter.svg, instagram.svg, accordion-arrow.svg

## CSS Architecture (`combined/css/`)

Modular CSS structure with separate files:

**Foundation:**
- `variables.css` - Design tokens (colors, typography, spacing, layout)
- `reset.css` - Meyer reset + Google Fonts imports
- `base.css` - Layout, typography, buttons, chips, cards, nav, accordion, slider components

**Section styles** (one file per section):
- `header.css`, `hero.css`, `toc.css`
- `ipl-slider.css`, `app-download.css`, `live-betting.css`
- `welcome-bonus.css`, `reasons.css`, `app-features.css`
- `how-to-use.css`, `reviews.css`, `platforms.css`
- `info-table.css`, `how-to-download.css`, `faq.css`, `footer.css`

**Responsive:**
- `responsive.css` - Mobile breakpoints (768px, 480px)

**Design Tokens** (in `variables.css`):
- Colors: `--color-primary` (#ff7d34), `--color-dark`, `--color-gray-*`
- Typography: `--font-heading` (Poppins), `--font-body` (Inter)
- Spacing: `--space-xs` through `--space-4xl`
- Layout: `--container-width` (1920px), `--content-padding` (290px)

## JavaScript Architecture (`combined/js/`)

Modular JS structure with separate files:

- `ipl-slider.js` - IPL slider: auto-advance every 5s, dots navigation, prev/next buttons
- `match-slider.js` - Match cards: horizontal scroll with 424px steps
- `reviews-slider.js` - Reviews carousel: transform-based, 2 cards visible
- `accordion.js` - Collapsible sections: click to toggle, CSS class `accordion__item--closed`
- `mobile-menu.js` - Burger menu toggle for mobile navigation
- `main.js` - Initializes all components on DOMContentLoaded

Each component file exports an `init*()` function called from `main.js`.

## Responsive Design

Mobile breakpoints in `responsive.css`:
- **Tablet/Mobile** (max-width: 768px): Stacked layouts, smaller typography, burger menu, horizontal scroll for sliders
- **Small Mobile** (max-width: 480px): Further reduced sizes, some elements hidden

Key mobile adaptations:
- Header shows burger menu instead of nav links
- Hero and feature sections stack vertically
- Sliders become horizontally scrollable
- Footer is hidden on mobile

## Development

No build step required. Open `combined/index.html` directly in browser.

**Layout**: Desktop-first design at 1920px width with mobile breakpoints. Content padding is 290px on desktop, 16px on mobile.

**Previewing**: Use Live Server extension or `python -m http.server 8000` from `combined/` directory.

## Converting Figma Exports to BEM

When adding sections from `sections/` folder:
1. Figma exports use auto-generated class names (e.g., `.frame-452656499`) - convert to semantic BEM names
2. Figma uses percentage-based absolute positioning - convert to flexbox/grid layouts
3. Create a new CSS file in `css/` folder for section-specific styles
4. Copy images to appropriate `combined/img/{section}/` folder with descriptive lowercase names
