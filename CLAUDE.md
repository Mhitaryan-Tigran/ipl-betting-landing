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
- `index.html` - Complete page with all sections (~1080 lines)
- `styles.css` - Unified stylesheet (~1660 lines)
- `robots.txt`, `sitemap.xml` - SEO files
- `img/` - All images consolidated

## CSS Architecture (combined/styles.css)

**Design Tokens** (lines 1-71): CSS variables defined in `:root`
- Colors: `--color-primary` (#ff7d34), `--color-dark`, `--color-gray-*`
- Typography: `--font-heading` (Poppins), `--font-body` (Inter)
- Spacing: `--space-xs` through `--space-4xl`
- Layout: `--container-width` (1920px), `--content-padding` (290px)

**Base Components**:
- `.btn` / `.btn--primary` / `.btn--outline` - Buttons (60px height, full radius)
- `.chip` / `.chip--light` - TOC chips
- `.accordion` / `.accordion__item` - Collapsible sections with CSS transitions
- `.card` / `.bonus-card` / `.match-card` / `.review-card` - Card variants

**Section Classes** (BEM naming):
- `.header` / `.hero` / `.toc`
- `.ipl-slider` / `.app-download` / `.live-betting`
- `.welcome-bonus` / `.reasons` / `.app-features`
- `.how-to-use` / `.reviews` / `.platforms`
- `.info-table` / `.how-to-download` / `.faq` / `.footer`

## JavaScript

Inline `<script>` at end of `combined/index.html` (lines 937-1107) handles:
- **IPL Slider**: Auto-advance every 5s, dots navigation, prev/next buttons
- **Match Slider**: Horizontal scroll with 424px card width steps
- **Reviews Slider**: Transform-based sliding, 2 cards visible at a time
- **Accordion**: Click anywhere on item to toggle, CSS class `accordion__item--closed`
- **Mobile Menu**: Burger toggle for mobile navigation

## Responsive Design

The page includes mobile responsive styles (combined/styles.css lines 1729-2238):
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
3. Each section comment in `styles.css` follows format: `/* SECTION: NAME */`
4. Copy images to `combined/img/` with descriptive lowercase names
