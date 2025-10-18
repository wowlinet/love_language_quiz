import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Love Language Quiz – Discover Your 5 Love Languages Free Online Test",
  description: "Take the most popular love language quiz online and find out what your primary love language is. Learn how the 5 love languages—words of affirmation, quality time, gifts, acts of service, and physical touch—can improve your relationships. Start your free quiz today.",
  keywords: "love language quiz, love languages test, couples quiz, free online test, 5 love languages",
  openGraph: {
    title: "Love Language Quiz – Discover Your 5 Love Languages Free Online Test",
    description: "Take the most popular love language quiz online and find out what your primary love language is. Learn how the 5 love languages—words of affirmation, quality time, gifts, acts of service, and physical touch—can improve your relationships. Start your free quiz today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navigation />
        <main className="flex-grow bg-gray-50">
          {children}
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
