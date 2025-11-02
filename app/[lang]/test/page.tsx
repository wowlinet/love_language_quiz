import { type Locale } from '@/i18n/config'
import { getQuizData } from '@/lib/getQuizData'
import LoveLanguageQuizClient from './QuizClient'

export default async function LangTestPage({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = lang as Locale
  const quizDataModule = await getQuizData(locale)

  return (
    <LoveLanguageQuizClient
      lang={locale}
      questions={quizDataModule.questions}
      descriptions={quizDataModule.loveLanguageDescriptions}
    />
  )
}
