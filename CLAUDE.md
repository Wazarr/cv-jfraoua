# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

- `npm run dev` - Start the development server
- `npm run build` - Run type check and build the project
- `npm run preview` - Preview the built project

### Build & Deployment

- `astro check` - Type check Astro files
- `astro build` - Build the production site
- Deployed to Vercel (configured in astro.config.mjs)

## Architecture

This is a personal portfolio website built with Astro, a static site generator with server-side rendering enabled.

### Tech Stack

- **Astro** - Main framework with MDX support
- **Tailwind CSS** - Styling with @tailwindcss/typography for markdown
- **TypeScript** - Type safety
- **Bun** - Package manager (bun.lockb present)
- **Vercel** - Deployment platform with web analytics

### Project Structure

- `/src/pages/` - Astro pages that define routes
  - `index.astro` - Homepage with navigation cards
  - `resume.astro` - Resume page
  - `projects.astro` - Projects listing
  - `projects/` - Individual project pages
  - `blog/` - Blog functionality with dynamic routing
- `/src/layouts/` - Reusable page layouts
  - `Layout.astro` - Main layout with header, footer, and theme toggle
  - `ProjectLayout.astro` - Layout for project pages
- `/src/components/` - Reusable components
  - `Badge.astro`, `Code.astro`, `ProjectCard.astro`
- `/src/content/` - Content collections configuration
  - Blog posts use Astro content collections with schema validation

### Key Features

- Dark mode support with persistence
- View transitions for smooth page navigation
- Blog system with MDX support and content collections
- Responsive design with mobile-first approach
- Server-side rendering enabled for dynamic content
