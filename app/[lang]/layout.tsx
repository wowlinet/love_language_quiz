import type { Metadata } from "next";
import "../globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { i18n, type Locale } from '@/i18n/config'

export async function generateStaticParams() {
  return i18n.locales.filter(locale => locale !== 'en').map((locale) => ({ lang: locale }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const locale = lang as Locale

  const titles: Record<Locale, string> = {
    en: "Love Language Quiz – Discover Your 5 Love Languages Free Online Test",
    de: "Liebessprachen-Quiz – Entdecke deine 5 Liebessprachen Kostenloser Online-Test",
    fr: "Quiz Langages d'Amour – Découvrez vos 5 langages d'amour Test en ligne gratuit",
    es: "Test de Lenguajes del Amor – Descubre tus 5 lenguajes del amor Prueba gratis online",
    ru: "Тест языков любви – Откройте свои 5 языков любви Бесплатный онлайн-тест"
  }

  const descriptions: Record<Locale, string> = {
    en: "Take the most popular love language quiz online and find out what your primary love language is. Learn how the 5 love languages can improve your relationships.",
    de: "Mache das beliebteste Liebessprachen-Quiz online und finde heraus, was deine primäre Liebessprache ist. Lerne, wie die 5 Liebessprachen deine Beziehungen verbessern können.",
    fr: "Répondez au quiz des langages d'amour le plus populaire en ligne et découvrez quel est votre langage d'amour principal. Apprenez comment les 5 langages d'amour peuvent améliorer vos relations.",
    es: "Haz el test de lenguajes del amor más popular online y descubre cuál es tu lenguaje del amor principal. Aprende cómo los 5 lenguajes del amor pueden mejorar tus relaciones.",
    ru: "Пройдите самый популярный тест языков любви онлайн и узнайте, какой ваш основной язык любви. Узнайте, как 5 языков любви могут улучшить ваши отношения."
  }

  return {
    title: titles[locale],
    description: descriptions[locale],
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      type: "website",
    },
  }
}

export default async function LangLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params
  const locale = lang as Locale

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation lang={locale} />
      <main className="flex-grow bg-gray-50">
        {children}
      </main>
      <Footer lang={locale} />
    </div>
  );
}
