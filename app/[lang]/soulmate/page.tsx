import { type Locale } from '@/i18n/config'
import { getSoulmateQuizData } from '@/lib/getSoulmateQuizData'
import SoulmateClient from './SoulmateClient'

export default async function LangSoulmate({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = lang as Locale
  const quizDataModule = await getSoulmateQuizData(locale)

  return (
    <SoulmateClient
      lang={locale}
      questions={quizDataModule.soulmateQuestions}
      soulmateTypes={quizDataModule.SOULMATE_TYPES}
    />
  )
}
