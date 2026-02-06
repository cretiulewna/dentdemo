'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { SmileQuiz } from '@/components/smile-quiz'
import { useLanguage } from '@/lib/language-context'
import Link from 'next/link'
import { useState } from 'react'
import { BookingModal } from '@/components/booking-modal'

export default function QuizPage() {
  const { t, language } = useLanguage()
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            {language === 'ro' ? 'Test Gratuit' : language === 'en' ? 'Free Quiz' : 'Quiz Gratuito'}
          </Badge>

          <h1 className="mb-4 font-serif text-4xl font-bold text-balance md:text-5xl">
            {language === 'ro'
              ? 'Testul Zambetului'
              : language === 'en'
              ? 'The Smile Quiz'
              : 'Il Quiz del Sorriso'}
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {language === 'ro'
              ? 'Răspunde la 3 întrebări rapide și primește o recomandare personalizată pentru tratamentul perfect pentru tine.'
              : language === 'en'
              ? 'Answer 3 quick questions and get a personalized recommendation for your perfect smile.'
              : 'Rispondi a 3 domande rapide e ricevi una raccomandazione personalizzata per il tuo sorriso perfetto.'}
          </p>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SmileQuiz />
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="mb-4 font-serif text-3xl font-bold text-balance">
                {language === 'ro' ? 'De Ce Este Important Acest Test?' : language === 'en' ? 'Why This Quiz Matters' : 'Perche Questo Quiz È Importante'}
              </h2>
              <p className="mb-6 leading-relaxed text-muted-foreground text-pretty">
                {language === 'ro'
                  ? 'Fiecare pacient are nevoie unice. Acest test ne ajută să înțelegem ce este important pentru tine și să recomandăm tratamentul cel mai potrivit pentru a-ți obține zâmbetul perfect.'
                  : language === 'en'
                  ? 'Every patient is unique. This quiz helps us understand what matters most to you and recommend the perfect treatment to achieve your ideal smile.'
                  : 'Ogni paziente è unico. Questo quiz ci aiuta a capire cosa è importante per te e consigliare il trattamento perfetto per il tuo sorriso ideale.'}
              </p>
              <ul className="space-y-3">
                {[
                  language === 'ro' ? 'Recomandări personalizate' : language === 'en' ? 'Personalized recommendations' : 'Raccomandazioni personalizzate',
                  language === 'ro' ? 'Fără obligații sau costuri' : language === 'en' ? 'No obligations or costs' : 'Senza obblighi o costi',
                  language === 'ro' ? 'Doar 3 întrebări simple' : language === 'en' ? 'Just 3 simple questions' : 'Solo 3 domande semplici',
                  language === 'ro' ? 'Consultații gratuite disponibile' : language === 'en' ? 'Free consultations available' : 'Consultazioni gratuite disponibili',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-80 overflow-hidden rounded-xl">
              <Image
                src="/hero-dental.jpg"
                alt="DentiCalm Clinic"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-balance">
            {language === 'ro' ? 'Gata sa Zâmbesti?' : language === 'en' ? 'Ready to Smile?' : 'Pronto a Sorridere?'}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {language === 'ro'
              ? 'Programează o consultație gratuită și descoperă planul perfect pentru zâmbetul tău.'
              : language === 'en'
              ? 'Schedule a free consultation and discover the perfect plan for your smile.'
              : 'Prenota una consultazione gratuita e scopri il piano perfetto per il tuo sorriso.'}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              onClick={() => setIsBookingOpen(true)}
              className="group"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent">
              <Link href="/services">
                {t('nav.services')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}
