import { type Locale } from '@/i18n/config'
import { getLoveMeQuizData } from '@/lib/getLoveMeQuizData'
import DoesHeLoveMeClient from './DoesHeLoveMeClient'

export default async function LangDoesHeLoveMe({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = lang as Locale
  const quizDataModule = await getLoveMeQuizData(locale)

  return (
    <DoesHeLoveMeClient
      lang={locale}
      questions={quizDataModule.loveMeQuestions}
      results={quizDataModule.loveMeQuizResults}
    />
  )
}
