import { type Locale } from '@/i18n/config'
import { getLoveQuizData } from '@/lib/getLoveQuizData'
import AmIInLoveClient from './AmIInLoveClient'

export default async function LangAmIInLovePage({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = lang as Locale
  const quizDataModule = await getLoveQuizData(locale)

  return (
    <AmIInLoveClient
      lang={locale}
      questions={quizDataModule.loveQuestions}
      results={quizDataModule.loveQuizResults}
    />
  )
}
