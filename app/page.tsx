import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/love_language_quiz_tiny.jpg')"
        }}
      >
        {/* Background overlay for text readability */}
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Discover Your Love Language with Our Free Quiz
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Take the Love Language Quiz online and find out how you give and receive love. In just 5 minutes, you&apos;ll discover your primary love language and learn practical tips to improve your relationships.
            </p>
            <Link
              href="/test"
              className="inline-block bg-white text-rose-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Start the Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* What Are Love Languages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What Are the 5 Love Languages?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Words of Affirmation",
                description: "Expressing love through verbal compliments and encouragement.",
                icon: "💬",
              },
              {
                title: "Quality Time",
                description: "Giving someone your undivided attention and being fully present.",
                icon: "⏰",
              },
              {
                title: "Receiving Gifts",
                description: "Giving thoughtful gifts as a symbol of love and appreciation.",
                icon: "🎁",
              },
              {
                title: "Acts of Service",
                description: "Doing helpful things to show you care and support.",
                icon: "🤝",
              },
              {
                title: "Physical Touch",
                description: "Expressing love through physical affection and closeness.",
                icon: "🤗",
              },
            ].map((language, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{language.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {language.title}
                </h3>
                <p className="text-gray-600">{language.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Take This Quiz Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-gray-900 text-center">
            <h2 className="text-3xl font-bold mb-4">
            Why Take This Love Language Quiz?
          </h2>
          <p>The Love Language Quiz is a free online test inspired by Dr. Gary Chapman’s best-selling book The 5 Love Languages. </p>
          <p>The quiz helps you identify your unique way of expressing and receiving love.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Improve Communication",
                description: "Learn how to express love in ways your partner understands.",
              },
              {
                title: "Strengthen Relationships",
                description: "Build deeper connections by understanding each other's needs.",
              },
              {
                title: "Reduce Conflicts",
                description: "Avoid misunderstandings by knowing how you each receive love.",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
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
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
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
