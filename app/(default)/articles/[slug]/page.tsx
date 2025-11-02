import { getAllArticles, getArticleBySlug } from '@/lib/articles'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} - Love Language Quiz`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/articles"
        className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-8"
      >
        ← Back to Articles
      </Link>

      <article className="bg-white rounded-lg shadow-lg p-8">
        <header className="mb-8 border-b pb-6">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            {article.title}
          </h1>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>By {article.author}</span>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </header>

        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold mt-6 mb-3 text-gray-900">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                  {children}
                </ol>
              ),
              li: ({ children }) => <li className="text-gray-700">{children}</li>,
              strong: ({ children }) => (
                <strong className="font-semibold text-gray-900">{children}</strong>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-rose-500 pl-4 italic my-4 text-gray-600">
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-rose-600">
                  {children}
                </code>
              ),
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>
      </article>

      <div className="mt-8 text-center">
        <Link
          href="/test"
          className="inline-block bg-rose-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-700 transition-colors"
        >
          Take the Love Language Quiz
        </Link>
      </div>
    </div>
  )
}
