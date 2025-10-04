import { getAllArticles } from '@/lib/articles'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Love Language Articles - Learn More About Love Languages',
  description: 'Read our comprehensive articles about the five love languages and how to improve your relationships.',
}

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
        Articles About Love Languages
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Explore our collection of articles to learn more about the five love languages
        and how to apply them in your relationships.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group"
          >
            <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 h-full flex flex-col">
              <div className="flex-grow">
                <h2 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-rose-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.description}
                </p>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                <span>{article.author}</span>
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <div className="mt-4 text-rose-600 font-semibold group-hover:underline">
                Read More →
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
