import { type Locale } from '@/i18n/config'
import { getCrushQuizData } from '@/lib/getCrushQuizData'
import CrushQuizClient from './CrushQuizClient'

export default async function LangCrushQuiz({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = lang as Locale
  const quizDataModule = await getCrushQuizData(locale)

  return (
    <CrushQuizClient
      lang={locale}
      questions={quizDataModule.crushQuestions}
      results={quizDataModule.crushQuizResults}
    />
  )
}
