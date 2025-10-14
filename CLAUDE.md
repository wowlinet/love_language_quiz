# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js 15 web application that provides an interactive quiz to help users discover their love language. Built with TypeScript, Tailwind CSS V4, and designed for deployment on Vercel.

## Commands

### Development
```bash
npm run dev    # Start dev server with Turbopack (http://localhost:3000)
npm run build  # Build for production with Turbopack
npm start      # Start production server
npm run lint   # Run ESLint
```

### Environment Variables
Optional Google Analytics tracking via `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env.local`. See [docs/GOOGLE_ANALYTICS_SETUP.md](docs/GOOGLE_ANALYTICS_SETUP.md) for setup instructions.

## Architecture

### Application Structure

**App Router (Next.js 15)**
- Root layout ([app/layout.tsx](app/layout.tsx)) includes global Navigation, Footer, and conditional Google Analytics
- Uses `@next/third-parties/google` for GA4 integration
- Geist fonts loaded at root level

**Key Routes:**
- `/` - Landing page
- `/test` - Quiz flow (client component)
- `/articles` - Article listing
- `/articles/[slug]` - Dynamic article pages with static generation
- `/privacy` & `/terms` - Legal pages

### Quiz System Architecture

**Data Layer** ([lib/quizData.ts](lib/quizData.ts)):
- Defines `Question` and `QuizResult` interfaces
- Contains 10 quiz questions, each with 5 options mapping to love languages
- Exports `loveLanguageDescriptions` with detailed descriptions and tips for each language

**Quiz Component** ([app/test/page.tsx](app/test/page.tsx)):
- Client-side component managing quiz state
- Progress tracking through questions
- Scores calculated by counting language frequencies across answers
- Results persisted to localStorage (`loveLanguageResults` and `loveLanguageTestDate`)
- Confetti celebration using `canvas-confetti` on completion
- Animated percentage bars with staggered reveal
- Share/invite functionality with native Web Share API fallback to clipboard
- Previous question navigation supported

### Articles System

**Content Management**:
- Markdown files in [articles/](articles/) directory with gray-matter frontmatter
- Required frontmatter: `title`, `description`, `date`, `author`, `slug`
- Server-side utilities in [lib/articles.ts](lib/articles.ts) for reading/parsing

**Article Rendering** ([app/articles/[slug]/page.tsx](app/articles/[slug]/page.tsx)):
- Static generation using `generateStaticParams()`
- Custom ReactMarkdown components for consistent styling with Tailwind prose classes
- SEO metadata generated per article via `generateMetadata()`
- 404 handling via Next.js `notFound()`

### Styling & Components

**Tailwind CSS V4**:
- Global styles in [app/globals.css](app/globals.css)
- Uses `@tailwindcss/postcss` with Tailwind V4 syntax
- Color scheme: Rose/pink gradients for primary actions, gray for secondary

**Navigation** ([components/Navigation.tsx](components/Navigation.tsx)):
- Sticky header with active route highlighting
- Uses `usePathname()` hook for client-side route detection
- Responsive with mobile menu (visible on mobile, hidden on desktop)

**Client Components**:
- Quiz page and Navigation require `'use client'` directive
- Most other pages are server components for performance

### TypeScript Configuration

Path alias `@/*` maps to repository root for clean imports:
```typescript
import { questions } from '@/lib/quizData'
import Navigation from '@/components/Navigation'
```

## Adding New Articles

1. Create `.md` file in [articles/](articles/) directory
2. Include frontmatter:
```markdown
---
title: "Article Title"
description: "Brief description for SEO"
date: "2024-01-15"
author: "Author Name"
slug: "article-slug"
---
```
3. Article automatically appears in listings and generates static page at `/articles/[slug]`

## Deployment Notes

- Optimized for Vercel with automatic Next.js detection
- Static generation used for articles (build-time rendering)
- Client-side localStorage used for quiz results (no backend required)
- All builds use Turbopack for faster compilation
