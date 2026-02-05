# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS landing page for IPL betting app. Originally exported from Figma as 14 numbered section folders, now assembled into a single page in `combined/`.

## Architecture

### Source Sections (`sections/`)
Original Figma exports in 14 numbered folders. Each contains:
- `index.html` - Section markup with auto-generated class names
- `style.css` - Section styles with percentage-based positioning
- `styleguide.css` - Design tokens
- `globals.css` - CSS reset
- `img/` - Section images

### Combined Page (`combined/`)
Production-ready assembled page using BEM methodology:
- `index.html` - Complete page with all 16 sections
- `styles.css` - Unified stylesheet (~1600 lines)
- `robots.txt`, `sitemap.xml` - SEO files
- `img/` - All images consolidated

## CSS Architecture (combined/styles.css)

**Design Tokens** (lines 1-71): CSS variables for colors, typography, spacing, radii

**Base Components**:
- `.btn` / `.btn--primary` / `.btn--outline` - Buttons
- `.chip` / `.chip--light` - TOC chips
- `.accordion` / `.accordion__item` - Collapsible FAQ/How-to sections
- `.card` / `.bonus-card` / `.match-card` / `.review-card` - Card variants

**Section Classes** (BEM naming):
- `.header` / `.hero` / `.toc`
- `.ipl-slider` / `.app-download` / `.live-betting`
- `.welcome-bonus` / `.reasons` / `.app-features`
- `.how-to-use` / `.reviews` / `.platforms`
- `.info-table` / `.how-to-download` / `.faq` / `.footer`

## JavaScript

Inline `<script>` at end of `combined/index.html` handles:
- IPL slider (auto-advance, dots navigation)
- Match cards horizontal scroll
- Reviews slider (prev/next buttons)
- Accordion toggle (click anywhere on item)

## Development

No build step. Open `combined/index.html` in browser. Page width is fixed at 1920px.

## Adding New Sections

1. Read source from `sections/` folder (e.g., `sections/14. Footer/`)
2. Convert to BEM class names
3. Add HTML to `combined/index.html` in correct position
4. Add CSS to `combined/styles.css` with section comment header
5. Copy images to `combined/img/`
