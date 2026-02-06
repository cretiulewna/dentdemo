import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'

import './globals.css'
import { LanguageProvider } from '@/lib/language-context'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StickyBookingButton } from '@/components/sticky-booking-button'
import { ScrollProgress } from '@/components/scroll-progress'
import { PageTransition } from '@/components/page-transition'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DentiCalm - Clinica Dentară de Lux',
  description: 'O experiență dentară premium într-un ambient calm și reconfortant. Servicii stomatologice de înaltă calitate în București.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-to-main">
          Sari la conținut principal
        </a>
        <LanguageProvider>
          <ScrollProgress />
          <Header />
          <PageTransition>
            <main className="min-h-screen" id="main-content">
              {children}
            </main>
          </PageTransition>
          <Footer />
          <StickyBookingButton />
        </LanguageProvider>
      </body>
    </html>
  )
}
