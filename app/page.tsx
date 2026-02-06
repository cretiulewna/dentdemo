'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Check, Heart, Music, Sparkles, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/lib/language-context'
import { BookingModal } from '@/components/booking-modal'
import { Tooth3D } from '@/components/tooth-3d'
import { SmileQuiz } from '@/components/smile-quiz'
import { VideoTestimonials } from '@/components/video-testimonials'
import { BeforeAfterSlider } from '@/components/before-after-slider'

export default function HomePage() {
  const { t, language } = useLanguage()
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const services = [
    {
      icon: Check,
      title: t('services.preventive'),
      description: t('services.preventive.desc'),
      image: '/service-preventive.jpg',
      href: '/services',
    },
    {
      icon: Sparkles,
      title: t('services.cosmetic'),
      description: t('services.cosmetic.desc'),
      image: '/service-cosmetic.jpg',
      href: '/services',
    },
    {
      icon: Heart,
      title: t('services.restorative'),
      description: t('services.restorative.desc'),
      image: '/service-restorative.jpg',
      href: '/services',
    },
    {
      icon: Users,
      title: t('services.emergency'),
      description: t('services.emergency.desc'),
      image: '/service-emergency.jpg',
      href: '/services',
    },
  ]

  const comfortFeatures = [
    {
      icon: Heart,
      title: t('comfort.painFree'),
      description: t('comfort.painFree.desc'),
    },
    {
      icon: Music,
      title: t('comfort.atmosphere'),
      description: t('comfort.atmosphere.desc'),
    },
    {
      icon: Sparkles,
      title: t('comfort.equipment'),
      description: t('comfort.equipment.desc'),
    },
    {
      icon: Users,
      title: t('comfort.staff'),
      description: t('comfort.staff.desc'),
    },
  ]

  const testimonials = [
    {
      name: 'Maria Ionescu',
      role: 'Pacient',
      content: 'O experiență extraordinară! Atmosfera este atât de calmă încât mi-am depășit frica de dentist. Echipa este extrem de profesionistă și prietenoasă.',
      rating: 5,
    },
    {
      name: 'Alexandru Pop',
      role: 'Pacient',
      content: 'Rezultatele sunt impresionante! Am făcut o albire dentară și sunt încântat de zâmbet. Procedura a fost complet nedureroasă.',
      rating: 5,
    },
    {
      name: 'Elena Dumitrescu',
      role: 'Pacient',
      content: 'Clinica este impecabilă, echipamentele sunt de ultimă generație. Mă simt în siguranță și îngrijită la fiecare vizită.',
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1'),
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2'),
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3'),
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4'),
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden md:h-[700px]">
        <Image
          src="/hero-dental.jpg"
          alt="DentiCalm Clinic"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        
        <div className="relative container mx-auto flex h-full items-center justify-between px-4">
          <div className="max-w-2xl space-y-6 animate-fade-in-up">
            <Badge variant="secondary" className="mb-2 gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              {t('hero.rating')}
            </Badge>
            
            <h1 className="font-serif text-4xl font-bold leading-tight text-balance md:text-6xl">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => setIsBookingOpen(true)}
                className="group transition-all duration-300 hover:scale-105"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                asChild
                className="transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Link href="/gallery">{t('nav.gallery')}</Link>
              </Button>
            </div>
          </div>
          
          {/* 3D Tooth Icon */}
          <div className="hidden lg:block animate-fade-in">
            <Tooth3D />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-balance md:text-4xl">
              {t('services.title')}
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.title}
                  className="group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <Button
                      variant="ghost"
                      asChild
                      className="group/btn -ml-4 transition-colors"
                    >
                      <Link href={service.href}>
                        {t('services.learnmore')}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Before/After Gallery Preview */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-balance md:text-4xl">
              {t('nav.gallery')}
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              {language === 'ro' && 'Transformări reale ale pacienților noștri'}
              {language === 'en' && 'Real transformations from our patients'}
              {language === 'it' && 'Trasformazioni reali dei nostri pazienti'}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <div className="animate-fade-in-up">
              <BeforeAfterSlider
                beforeImage="/before-after-1.jpg"
                afterImage="/before-after-2.jpg"
              />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <BeforeAfterSlider
                beforeImage="/before-after-3.jpg"
                afterImage="/before-after-4.jpg"
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/gallery">
                {language === 'ro' && 'Vezi Toate Rezultatele'}
                {language === 'en' && 'View All Results'}
                {language === 'it' && 'Vedi Tutti i Risultati'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Comfort Features */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-balance md:text-4xl">
              {t('comfort.title')}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {comfortFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-semibold">{feature.title}</h3>
                  <p className="leading-relaxed text-muted-foreground text-pretty">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-balance md:text-4xl">
              {t('testimonials.title')}
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              {language === 'ro' && 'Ascultă poveștile pacienților noștri mulțumiți'}
              {language === 'en' && 'Hear from our satisfied patients'}
              {language === 'it' && 'Ascolta le storie dei nostri pazienti soddisfatti'}
            </p>
          </div>

          <VideoTestimonials />
        </div>
      </section>

      {/* Smile Assessment Quiz */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-balance md:text-4xl">
              {language === 'ro' && 'Descoperă Soluția Perfectă Pentru Tine'}
              {language === 'en' && 'Discover Your Perfect Solution'}
              {language === 'it' && 'Scopri la Soluzione Perfetta per Te'}
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              {language === 'ro' && 'Răspunde la câteva întrebări și află ce tratament ți se potrivește'}
              {language === 'en' && 'Answer a few questions and find out which treatment suits you'}
              {language === 'it' && 'Rispondi ad alcune domande e scopri quale trattamento fa per te'}
            </p>
          </div>

          <SmileQuiz />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-balance md:text-4xl">
              {t('faq.title')}
            </h2>
          </div>

          <Accordion type="single" collapsible className="mx-auto max-w-3xl">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-balance md:text-4xl">
            {t('cta.title')}
          </h2>
          
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {t('cta.subtitle')}
          </p>
          
          <Button
            size="lg"
            onClick={() => setIsBookingOpen(true)}
            className="group transition-all duration-300 hover:scale-110"
          >
            {t('cta.button')}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}
