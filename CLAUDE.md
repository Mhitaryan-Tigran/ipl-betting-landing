# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS landing page exported from Figma, organized into 14 numbered section folders (1-14) that combine to form a complete page.

## Architecture

Each section folder contains:
- `index.html` - Section markup
- `style.css` - Section-specific styles
- `styleguide.css` - Design tokens (colors, typography CSS variables)
- `globals.css` - CSS reset
- `img/` - Section images

## Design System

CSS variables in `styleguide.css` define the design tokens:
- Colors: `--brand-color{10-95}`, `--neutral-gray{10-95}`, `--ultra-orange30`
- Typography: Poppins (headings), Inter (body), Outfit (display)

## Development

No build step required. Open any `index.html` in a browser to view that section. To assemble the full page, combine HTML content from sections 1-14 in order.
