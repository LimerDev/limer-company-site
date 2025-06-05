# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview build locally
- `eslint .` - Run ESLint for Astro files
- `prettier --write .` - Format code with Prettier

## Project Architecture

This is an Astro-based website with TailwindCSS for styling. The site follows a component-based architecture:

- **Layout Structure**: Uses `src/layouts/Layout.astro` as the main layout wrapper that imports global styles and Head component
- **Page Structure**: `src/pages/index.astro` is the main page that composes components: Hero, Services, About, and CoWorkers
- **Component Organization**: Components are organized by function in `src/components/`:
  - `Hero.astro` - Main hero section with logo and branding
  - `Services.astro`, `About.astro`, `CoWorkers.astro` - Content sections
  - `SectionHead.astro`, `Card.astro`, `Divider.astro` - Reusable UI components
  - `icons/` directory for icon components

## Configuration

- **Astro Config**: Uses TailwindCSS via Vite plugin in `astro.config.mjs`
- **ESLint**: Configured for Astro with `eslint-plugin-astro` and custom rules
- **Prettier**: Configured with `prettier-plugin-astro`, 4-space indentation for .astro files
- **Styling**: Uses TailwindCSS v4 with global styles in `src/styles/` and custom fonts in `public/fonts/`

## Assets

- SVG assets stored in `src/assets/svg/` for components to import
- Images stored in `src/assets/images/` for placeholder content
- Fonts stored in `public/fonts/` and loaded via `src/styles/fonts.css`
