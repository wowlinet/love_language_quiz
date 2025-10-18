import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Hero Section */}
      <section 
        className="relative py-20">
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Pink Badge */}
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              💕 Discover Your Love Language
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              How Do You{' '}
              <span className="text-rose-500">Give & Receive Love?</span>
            </h1>
            
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Take our comprehensive quiz to understand your primary love language and strengthen your relationships through deeper connection and understanding.
            </p>
            
            <Link
              href="/test"
              className="inline-flex items-center gap-2 bg-rose-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-600 transition-colors mb-4"
            >
              Start the Quiz →
            </Link>
            
            <p className="text-gray-500 text-sm">
              Takes only 3-5 minutes · 10 thoughtful questions
            </p>
          </div>
        </div>
      </section>

      {/* What Are Love Languages Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Are the 5 Love Languages?
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Everyone expresses and receives love differently. Understanding your love language helps you communicate better and build stronger connections.
              </p>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Words of Affirmation",
                description: "Verbal expressions of love, appreciation, and encouragement mean everything. Kind words and compliments fill your love tank.",
                iconBg: "bg-rose-500",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                  </svg>
                ),
              },
              {
                title: "Quality Time",
                description: "Undivided attention and meaningful moments together make you feel truly loved and valued in relationships.",
                iconBg: "bg-blue-500",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
                  </svg>
                ),
              },
              {
                title: "Receiving Gifts",
                description: "Thoughtful gifts and tangible symbols of love show you that you're remembered and cherished by others.",
                iconBg: "bg-purple-500",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5,16L3,14V9A1,1 0 0,1 4,8H6.58L8.29,6.29C8.68,5.9 9.32,5.9 9.71,6.29L11.41,8H20A1,1 0 0,1 21,9V14L19,16H5M5,18V16H19V18A1,1 0 0,1 18,19H6A1,1 0 0,1 5,18M12,4L10.5,2.5C10.1,2.1 9.4,2.1 9,2.5L7.5,4H16.5L15,2.5C14.6,2.1 13.9,2.1 13.5,2.5L12,4Z"/>
                  </svg>
                ),
              },
              {
                title: "Acts of Service",
                description: "Actions speak louder than words. When someone helps you or makes your life easier, it shows they care.",
                iconBg: "bg-emerald-500",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
                  </svg>
                ),
              },
              {
                title: "Physical Touch",
                description: "Physical affection and closeness help you feel connected, secure, and deeply loved in your relationships.",
                iconBg: "bg-orange-500",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19,8C20.1,8 21,8.9 21,10V16C21,17.1 20.1,18 19,18H17V16H19V10H17V8H19M15,8V10H13V16H15V18H13C11.9,18 11,17.1 11,16V10C11,8.9 11.9,8 13,8H15M9,8V18H7V10H5V8H9Z"/>
                  </svg>
                ),
              },
            ].map((language, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className={`w-12 h-12 ${language.iconBg} rounded-2xl flex items-center justify-center mb-4`}>
                  {language.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {language.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{language.description}</p>
              </div>
            ))}
            
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Discover Yours</h3>
                <p className="text-white/90 text-sm mb-6 leading-relaxed">
                  Find out which love language resonates most with you and transform your relationships.
                </p>
                <Link
                  href="/test"
                  className="inline-block bg-white text-rose-600 px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-50 transition-colors"
                >
                  Take the Quiz
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Take This Quiz Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why Take This Love Language Quiz?
            </h2>
            <p className="text-gray-600 text-lg">
              Understanding your love language can transform your relationships
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                title: "Improve Communication",
                description: "Learn how to express your needs clearly and understand what your partner truly values in a relationship.",
                iconBg: "bg-rose-100",
                icon: (
                  <svg className="w-6 h-6 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
                  </svg>
                ),
              },
              {
                title: "Deepen Connections",
                description: "Build stronger bonds by understanding how you and your loved ones prefer to give and receive affection.",
                iconBg: "bg-blue-100",
                icon: (
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                  </svg>
                ),
              },
              {
                title: "Resolve Conflicts",
                description: "Reduce misunderstandings and relationship friction by recognizing different ways of showing love.",
                iconBg: "bg-emerald-100",
                icon: (
                  <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2M6,9V7H18V9H6M14,11V13H6V11H14M16,15V17H6V15H16Z"/>
                  </svg>
                ),
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start space-x-4">
                <div className={`w-12 h-12 ${benefit.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            How the Online Love Language Test Works
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Answer Honestly",
                description: "Take your time and choose the responses that truly resonate with you, not what you think is 'right' or what others expect.",
              },
              {
                step: "2",
                title: "Complete All Questions",
                description: "The quiz consists of 10 carefully crafted questions. Answer all of them to get the most accurate results.",
              },
              {
                step: "3",
                title: "Review Your Results",
                description: "See your primary love language and complete breakdown of all five languages. Your results are automatically saved in your browser.",
              },
              {
                step: "4",
                title: "Share & Discuss",
                description: "Encourage your partner, friends, or family to take the quiz too. Compare and discuss your results to better understand each other.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "How long does the quiz take?",
                answer: "The quiz takes approximately 5-7 minutes to complete. There are 10 questions, and you can take your time with each one.",
              },
              {
                question: "Can I have more than one love language?",
                answer: "Yes! While you'll have a primary love language, it's common to relate to multiple love languages. The quiz will show you a breakdown of all five.",
              },
              {
                question: "Will my results be saved?",
                answer: "Yes, your results are automatically saved in your browser's local storage. You can return anytime to view them without retaking the quiz.",
              },
              {
                question: "Can my love language change over time?",
                answer: "Absolutely. Your love language can evolve based on life experiences, relationships, and personal growth. It's healthy to retake the quiz periodically.",
              },
              {
                question: "Should my partner take the quiz too?",
                answer: "Highly recommended! Understanding both your and your partner's love languages can dramatically improve communication and connection in your relationship.",
              },
              {
                question: "What if I don't agree with my results?",
                answer: "The quiz is a guide, not a definitive answer. Use it as a starting point for self-reflection and conversation. You know yourself best!",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Ready to Discover Your Love Language?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Take our comprehensive quiz and get personalized insights into how you express and receive love.
          </p>
          <Link
            href="/test"
            className="inline-block bg-rose-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-rose-700 transition-colors"
          >
            Start the Quiz Now
          </Link>
        </div>
      </section>
    </div>
  );
}
