# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js 15 web application featuring multiple relationship quizzes including the primary Love Language Quiz, plus Soulmate Compatibility, Crush Analysis, and "Am I In Love" assessments. Also includes curated love quotes collections. Built with TypeScript, Tailwind CSS V4, and designed for deployment on Vercel.

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
- `/test` - Love Language Quiz (client component)
- `/soulmate` - Soulmate Compatibility Quiz
- `/crush-quiz` - "Does My Crush Like Me?" Quiz
- `/does-he-love-me` - "Does He Love Me?" Quiz
- `/am-i-in-love` - "Am I In Love?" Quiz
- `/quotes-for-her` - Love quotes collection for her
- `/quotes-for-him` - Love quotes collection for him
- `/articles` - Article listing
- `/articles/[slug]` - Dynamic article pages with static generation
- `/privacy` & `/terms` - Legal pages

### Quiz System Architecture

The application includes multiple quiz types, each with similar patterns but different data models:

**Love Language Quiz** ([lib/quizData.ts](lib/quizData.ts), [app/test/page.tsx](app/test/page.tsx)):
- Defines `Question` and `QuizResult` interfaces
- Contains 10 quiz questions, each with 5 options mapping to love languages (Words of Affirmation, Quality Time, Receiving Gifts, Acts of Service, Physical Touch)
- Exports `loveLanguageDescriptions` with detailed descriptions and tips for each language
- Results persisted to localStorage (`loveLanguageResults` and `loveLanguageTestDate`)

**Soulmate Compatibility Quiz** ([lib/soulmateQuizData.ts](lib/soulmateQuizData.ts), [app/soulmate/page.tsx](app/soulmate/page.tsx)):
- 10 questions across 5 categories: communication, values, lifestyle, emotional, future
- Weighted scoring system (1-4 points per answer)
- Calculates compatibility percentages across all categories
- Determines one of 5 soulmate types: Romantic Idealist, Practical Partner, Adventurous Soul, Deep Connector, or Balanced Seeker
- Includes personalized characteristics, tips, and ideal partner qualities
- Results saved to localStorage (`soulmateResult`, `soulmateTestDate`)

**Crush Quiz** ([lib/crushQuizData.ts](lib/crushQuizData.ts), [app/crush-quiz/page.tsx](app/crush-quiz/page.tsx)):
- Score-based quiz analyzing behavioral signs and communication patterns
- Calculates total score and percentage to determine interest level
- 6 result levels from "Not Interested" to "Definitely Interested"
- Results include advice and next steps

**Additional Quizzes** ([lib/loveMeQuizData.ts](lib/loveMeQuizData.ts), [lib/loveQuizData.ts](lib/loveQuizData.ts)):
- Similar patterns with different questions and result types
- Each follows the same client-side state management approach

**Common Quiz Patterns:**
- Client-side components managing quiz state
- Progress tracking through questions with visual progress bars
- Confetti celebration using `canvas-confetti` on completion (for positive results)
- Animated results reveal with staggered animations
- Share/invite functionality with native Web Share API fallback to clipboard
- Previous question navigation supported (where applicable)
- Results persisted to localStorage with timestamps

### Articles & Content System

**Articles** ([articles/](articles/) directory):
- Markdown files with gray-matter frontmatter
- Required frontmatter: `title`, `description`, `date`, `author`, `slug`
- Server-side utilities in [lib/articles.ts](lib/articles.ts) for reading/parsing
- Static generation using `generateStaticParams()` in [app/articles/[slug]/page.tsx](app/articles/[slug]/page.tsx)
- Custom ReactMarkdown components for consistent styling with Tailwind prose classes
- SEO metadata generated per article via `generateMetadata()`
- 404 handling via Next.js `notFound()`

**Quotes Collections** ([app/quotes-for-her/](app/quotes-for-her/), [app/quotes-for-him/](app/quotes-for-him/)):
- Server components for metadata/SEO, with client components (QuotesClient.tsx) for interactive features
- Quotes data stored in client component state
- Features: category filtering, search, favorites (localStorage), copy to clipboard, social sharing
- Categories include romantic, inspirational, cute, deep, funny quotes
- Native Web Share API with clipboard fallback

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

## Adding New Content

### Adding New Articles

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

### Adding New Quizzes

To add a new quiz type, follow the established pattern:

1. **Create quiz data file** in `lib/` (e.g., `lib/newQuizData.ts`):
   - Define question interfaces with options
   - Define result types and descriptions
   - Export calculation function for determining results

2. **Create route directory** in `app/` (e.g., `app/new-quiz/`):
   - Add `layout.tsx` with SEO metadata
   - Add `page.tsx` as client component (`'use client'`)

3. **Implement quiz component** following common patterns:
   - State management for current question, answers, and results
   - Progress bar showing completion percentage
   - Landing page before quiz starts (with quiz description and benefits)
   - Question display with option buttons
   - Results page with calculated outcomes
   - localStorage persistence (results and timestamp)
   - Share/invite functionality
   - Confetti animation for positive results
   - Links to related quizzes and content

## Deployment Notes

- Optimized for Vercel with automatic Next.js detection
- Static generation used for articles (build-time rendering)
- Client-side localStorage used for quiz results (no backend required)
- All builds use Turbopack for faster compilation
