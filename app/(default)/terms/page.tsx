import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service - Love Language Quiz',
  description: 'Terms of Service for Love Language Quiz. Read our terms and conditions for using the website.',
}

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last Updated: January 4, 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using Love Language Quiz (&quot;the Website,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of these terms, you may not access the Website.
            </p>
            <p className="text-gray-700">
              These Terms apply to all visitors, users, and others who access or use the Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Use of the Website</h2>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">Permitted Use</h3>
            <p className="text-gray-700 mb-4">
              You are permitted to use the Website for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Taking the Love Language Quiz</li>
              <li>Reading educational articles about love languages</li>
              <li>Sharing your quiz results with others</li>
              <li>Personal, non-commercial purposes</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">Prohibited Use</h3>
            <p className="text-gray-700 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Use the Website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any portion of the Website</li>
              <li>Interfere with or disrupt the Website or servers</li>
              <li>Use automated systems (bots, scrapers, etc.) without permission</li>
              <li>Reproduce, duplicate, copy, or resell any part of the Website without permission</li>
              <li>Transmit any viruses, malware, or harmful code</li>
              <li>Impersonate any person or entity</li>
              <li>Collect or harvest personal information from the Website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Intellectual Property Rights</h2>
            <p className="text-gray-700 mb-4">
              The Website and its original content, features, and functionality are owned by Love Language Quiz and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="text-gray-700 mb-4">
              The Love Language concept was created by Dr. Gary Chapman. Our quiz and content are created independently and are not officially affiliated with Dr. Chapman or The 5 Love Languages®.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Quiz Results and Accuracy</h2>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">Educational Purpose</h3>
            <p className="text-gray-700 mb-4">
              The Love Language Quiz is provided for educational and entertainment purposes only. It is not:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Professional psychological assessment</li>
              <li>Medical or therapeutic advice</li>
              <li>A substitute for professional counseling or therapy</li>
              <li>Guaranteed to be accurate or complete</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">No Guarantees</h3>
            <p className="text-gray-700">
              While we strive to provide accurate and helpful information, we make no representations or warranties about the accuracy, reliability, or completeness of the quiz results or any content on the Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">User-Generated Content</h2>
            <p className="text-gray-700 mb-4">
              When you use the &quot;Share Results&quot; or &quot;Invite Others&quot; features, the content is generated locally on your device. We do not store, monitor, or control this shared content.
            </p>
            <p className="text-gray-700">
              You are responsible for any content you choose to share through these features and agree not to share content that is offensive, illegal, or violates the rights of others.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Third-Party Links</h2>
            <p className="text-gray-700 mb-4">
              Our Website may contain links to third-party websites or services that are not owned or controlled by Love Language Quiz.
            </p>
            <p className="text-gray-700">
              We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by your use of any such content or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Disclaimer of Warranties</h2>
            <p className="text-gray-700 mb-4">
              THE WEBSITE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>The Website will be uninterrupted, secure, or error-free</li>
              <li>The results obtained from using the Website will be accurate or reliable</li>
              <li>Any defects in the Website will be corrected</li>
            </ul>
            <p className="text-gray-700">
              Your use of the Website is at your sole risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, LOVE LANGUAGE QUIZ SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Indemnification</h2>
            <p className="text-gray-700">
              You agree to defend, indemnify, and hold harmless Love Language Quiz and its affiliates from any claims, damages, obligations, losses, liabilities, costs, or debt arising from:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2 mt-4">
              <li>Your use of and access to the Website</li>
              <li>Your violation of any term of these Terms</li>
              <li>Your violation of any third-party right</li>
              <li>Any content you share through the Website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Changes to the Website</h2>
            <p className="text-gray-700">
              We reserve the right to withdraw or amend the Website, and any service or material we provide on the Website, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Website is unavailable at any time or for any period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Modifications to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify or replace these Terms at any time. We will provide notice of any material changes by:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Updating the &quot;Last Updated&quot; date at the top of this page</li>
              <li>Posting a notice on our Website</li>
            </ul>
            <p className="text-gray-700">
              Your continued use of the Website after any changes constitutes acceptance of those changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Governing Law</h2>
            <p className="text-gray-700">
              These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Love Language Quiz operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Severability</h2>
            <p className="text-gray-700">
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Waiver</h2>
            <p className="text-gray-700">
              No waiver by Love Language Quiz of any term or condition set forth in these Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms of Service, please contact us through our GitHub repository or visit our website.
            </p>
          </section>

          <div className="mt-12 p-6 bg-amber-50 rounded-lg border-2 border-amber-200">
            <h3 className="text-lg font-semibold mb-2 text-amber-900">Important Notice</h3>
            <p className="text-amber-800 mb-2">
              By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
            <p className="text-amber-800">
              The Love Language Quiz is for educational purposes only and should not replace professional advice or counseling.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
