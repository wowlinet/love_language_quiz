import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Love Language Quiz
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Discover how you express and receive love. Understanding your love language
              can transform your relationships and help you connect on a deeper level.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-rose-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/test" className="hover:text-rose-400 transition-colors">
                  Take the Quiz
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-rose-400 transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/quotes-for-her" className="hover:text-rose-400 transition-colors">
                  Love Quotes for Her
                </Link>
              </li>
              <li>
                <Link href="/quotes-for-him" className="hover:text-rose-400 transition-colors">
                  Love Quotes for Him
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Learn More</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/articles/understanding-love-languages"
                  className="hover:text-rose-400 transition-colors"
                >
                  About Love Languages
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/words-of-affirmation"
                  className="hover:text-rose-400 transition-colors"
                >
                  Words of Affirmation
                </Link>
              </li>
              <li>
                <Link
                  href="/articles/quality-time"
                  className="hover:text-rose-400 transition-colors"
                >
                  Quality Time
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Love Language Quiz. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-rose-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-rose-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
