# Love Language Quiz

A comprehensive online quiz to help people discover their love language. Built with Next.js 15, TypeScript, and Tailwind CSS V4.

## 🌟 Features

- **Interactive Quiz**: 10 carefully crafted questions to determine your love language
- **Detailed Results**: Complete breakdown of all five love languages with personalized insights
- **Articles**: Educational content about the 5 love languages
- **Local Storage**: Results are automatically saved in the browser
- **Share & Invite**: Share your results or invite others to take the quiz
- **SEO Optimized**: Custom metadata for better search engine visibility
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Google Analytics**: Track user engagement and quiz completions (optional)

## 📋 The 5 Love Languages

1. **Words of Affirmation** - Expressing love through verbal compliments and encouragement
2. **Quality Time** - Giving undivided attention and being fully present
3. **Receiving Gifts** - Thoughtful gifts as symbols of love and appreciation
4. **Acts of Service** - Showing care through helpful actions
5. **Physical Touch** - Expressing love through physical affection and closeness

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/love_language_quiz.git
cd love_language_quiz
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.local.example .env.local
```

4. (Optional) Add your Google Analytics Measurement ID to `.env.local`:
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS V4](https://tailwindcss.com/)
- **Markdown**: [react-markdown](https://github.com/remarkjs/react-markdown) & [gray-matter](https://github.com/jonschlinkert/gray-matter)
- **Analytics**: [Google Analytics 4](https://analytics.google.com/) via [@next/third-parties](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)
- **Deployment**: Optimized for [Vercel](https://vercel.com)

## 📁 Project Structure

```
love_language_quiz/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with navigation & footer
│   ├── page.tsx             # Home page
│   ├── test/                # Quiz pages
│   │   ├── layout.tsx       # Quiz layout with metadata
│   │   └── page.tsx         # Quiz component
│   └── articles/            # Articles section
│       ├── page.tsx         # Articles list
│       └── [slug]/          # Dynamic article pages
│           └── page.tsx
├── components/              # React components
│   ├── Navigation.tsx       # Header navigation (sticky)
│   └── Footer.tsx          # Footer component
├── lib/                     # Utility functions and data
│   ├── quizData.ts         # Quiz questions and results data
│   └── articles.ts         # Article fetching utilities
├── articles/                # Markdown articles
│   ├── understanding-love-languages.md
│   ├── words-of-affirmation.md
│   └── quality-time.md
├── docs/                    # Documentation
│   └── GOOGLE_ANALYTICS_SETUP.md
├── .env.local.example       # Environment variables template
└── README.md               # This file
```

## 🎨 Key Components

### Quiz System (`app/test/page.tsx`)
- Interactive question flow with progress tracking
- Answer persistence across sessions
- Detailed results with visual charts
- Share and invite functionality

### Articles System (`app/articles/`)
- Markdown-based content management
- Dynamic routing for article pages
- SEO-friendly with custom metadata per article

### Navigation (`components/Navigation.tsx`)
- Sticky header that remains visible while scrolling
- Active page highlighting
- Responsive mobile menu

## 📊 Google Analytics Setup

See [docs/GOOGLE_ANALYTICS_SETUP.md](./docs/GOOGLE_ANALYTICS_SETUP.md) for detailed instructions on:
- Getting your GA4 Measurement ID
- Configuration steps
- Testing and verification
- Privacy considerations

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional)
4. Deploy!

### Build for Production

```bash
npm run build
npm start
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Adding New Articles

1. Create a new Markdown file in the `articles/` directory
2. Add frontmatter with metadata:

```markdown
---
title: "Your Article Title"
description: "Brief description"
date: "2024-01-15"
author: "Author Name"
slug: "article-slug"
---

# Your Article Content Here
```

3. The article will automatically appear in the articles list

## 🎯 Features Roadmap

- [ ] Multiple language support (i18n)
- [ ] Print/PDF results export
- [ ] Couples comparison feature
- [ ] Quiz completion certificates
- [ ] Dark mode support
- [ ] Progressive Web App (PWA)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Love Language concept by Dr. Gary Chapman
- Icons from [Heroicons](https://heroicons.com/)
- Hosted on [Vercel](https://vercel.com)

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

Made with ❤️ to help people understand and improve their relationships.
