'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Check, Heart, Music, Sparkles, Users, Shield, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/lib/language-context'
import { BookingModal } from '@/components/booking-modal'
import { Tooth3D } from '@/components/tooth-3d'
import { VideoTestimonials } from '@/components/video-testimonials'
import { BeforeAfterSlider } from '@/components/before-after-slider'
import { useParallax } from '@/hooks/use-parallax'

export default function HomePage() {
  const { t, language } = useLanguage()
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const { offset } = useParallax(0.25)

  const services = [
    {
      icon: Check,
      title: t('services.preventive'),
      description: t('services.preventive.desc'),
      image: '/service-preventive.jpg',
      href: '/services',
      badge: null,
    },
    {
      icon: Sparkles,
      title: t('services.cosmetic'),
      description: t('services.cosmetic.desc'),
      image: '/service-cosmetic.jpg',
      href: '/services',
      badge: language === 'ro' ? 'Cel mai popular' : language === 'en' ? 'Most Popular' : 'Più Popolare',
    },
    {
      icon: Heart,
      title: t('services.restorative'),
      description: t('services.restorative.desc'),
      image: '/service-restorative.jpg',
      href: '/services',
      badge: null,
    },
    {
      icon: Users,
      title: t('services.emergency'),
      description: t('services.emergency.desc'),
      image: '/service-emergency.jpg',
      href: '/services',
      badge: null,
    },
  ]

  const comfortFeatures = [
    {
      icon: Heart,
      title: language === 'ro' ? 'Fii Liniștit, Ești Pe Mâini Bune' : language === 'en' ? 'Rest Easy, You\'re in Good Hands' : 'Stai Tranquillo, Sei in Buone Mani',
      description: language === 'ro'
        ? 'Folosim cele mai delicate tehnici de anestezie, astfel încât să nu simți nimic. Confortul tău este prioritatea noastră absolută.'
        : language === 'en'
        ? 'We use the gentlest anesthesia techniques so you feel nothing at all. Your comfort is our absolute priority.'
        : 'Usiamo le tecniche di anestesia più delicate affinché tu non senta nulla. Il tuo comfort è la nostra priorità assoluta.',
    },
    {
      icon: Music,
      title: language === 'ro' ? 'Relaxează-te, Noi Ne Ocupăm' : language === 'en' ? 'Relax, We\'ve Got This' : 'Rilassati, Ci Pensiamo Noi',
      description: language === 'ro'
        ? 'Muzică ambientală, aromaterapie și un spațiu creat special pentru a te simți ca acasă, nu ca la dentist.'
        : language === 'en'
        ? 'Ambient music, aromatherapy and a space designed to make you feel at home, not at a dentist.'
        : 'Musica ambient, aromaterapia e uno spazio creato per farti sentire a casa, non dal dentista.',
    },
    {
      icon: Shield,
      title: language === 'ro' ? 'Tehnologie Care Te Protejează' : language === 'en' ? 'Technology That Protects You' : 'Tecnologia Che Ti Protegge',
      description: language === 'ro'
        ? 'Echipamente digitale de ultimă generație care reduc timpul de tratament și elimină disconfortul.'
        : language === 'en'
        ? 'State-of-the-art digital equipment that reduces treatment time and eliminates discomfort.'
        : 'Attrezzature digitali all\'avanguardia che riducono i tempi di trattamento ed eliminano il disagio.',
    },
    {
      icon: Users,
      title: language === 'ro' ? 'Echipă Care Înțelege Frica' : language === 'en' ? 'A Team That Understands Fear' : 'Un Team Che Comprende la Paura',
      description: language === 'ro'
        ? 'Fiecare membru al echipei noastre este instruit să ajute pacienții anxioși. Ești în siguranță aici.'
        : language === 'en'
        ? 'Every member of our team is trained to help anxious patients. You are safe here.'
        : 'Ogni membro del nostro team è formato per aiutare i pazienti ansiosi. Sei al sicuro qui.',
    },
  ]

  const faqs = [
    {
      question: language === 'ro' ? 'Mi-e frică de dentist. Mă puteți ajuta?' : language === 'en' ? 'I\'m afraid of the dentist. Can you help?' : 'Ho paura del dentista. Potete aiutarmi?',
      answer: language === 'ro'
        ? 'Absolut. Peste 500 de pacienți cu anxietate dentară ne-au trecut pragul și acum zâmbesc cu încredere. Folosim sedare conștientă, anestezie delicată și un ritm adaptat ție. Nu te vom grăbi niciodată.'
        : language === 'en'
        ? 'Absolutely. Over 500 patients with dental anxiety have walked through our doors and now smile with confidence. We use conscious sedation, gentle anesthesia, and a pace adapted to you. We will never rush you.'
        : 'Assolutamente. Oltre 500 pazienti con ansia dentale hanno varcato la nostra soglia e ora sorridono con fiducia. Usiamo sedazione cosciente, anestesia delicata e un ritmo adattato a te. Non ti metteremo mai fretta.',
    },
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
      {/* Hero Section with Parallax */}
      <section className="relative h-[600px] overflow-hidden md:h-[700px]">
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${offset}px)` }}
        >
          <Image
            src="/hero-dental.jpg"
            alt={language === 'ro' ? 'Clinica DentiCalm - Spațiu modern și relaxant' : language === 'en' ? 'DentiCalm Clinic - Modern and relaxing space' : 'Clinica DentiCalm - Spazio moderno e rilassante'}
            fill
            className="object-cover scale-110"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        
        <div className="relative container mx-auto flex h-full items-center justify-between px-4">
          <div className="max-w-2xl space-y-6 animate-fade-in-up">
            <Badge variant="secondary" className="mb-2 gap-1">
              <Star className="h-3 w-3 fill-accent text-accent" />
              {t('hero.rating')}
            </Badge>
            
            <h1 className="font-serif text-4xl font-bold leading-tight text-balance md:text-6xl">
              {language === 'ro' ? 'Aici Frica de Dentist Dispare' : language === 'en' ? 'Where Dental Fear Disappears' : 'Dove la Paura del Dentista Scompare'}
            </h1>
            
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
              {language === 'ro'
                ? 'Ești în siguranță aici. O echipă caldă, tehnici delicate și un ambient creat pentru tine.'
                : language === 'en'
                ? 'You are safe here. A warm team, gentle techniques, and an environment crafted for you.'
                : 'Sei al sicuro qui. Un team caloroso, tecniche delicate e un ambiente creato per te.'}
            </p>

            {/* Social proof */}
            <p className="text-sm font-medium text-accent">
              {language === 'ro'
                ? '500+ pacienți anxioși acum zâmbesc cu încredere'
                : language === 'en'
                ? '500+ anxious patients now smile with confidence'
                : '500+ pazienti ansiosi ora sorridono con fiducia'}
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => setIsBookingOpen(true)}
                className="group"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent"
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

      {/* Services Section - reduced stagger, no hover lift */}
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
                  className="group overflow-hidden transition-shadow duration-300 hover:shadow-lg relative"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {service.badge && (
                    <div className="absolute top-3 right-3 z-10">
                      <Badge className="bg-accent text-accent-foreground">{service.badge}</Badge>
                    </div>
                  )}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                      className="group/btn -ml-4"
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
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-balance md:text-4xl">
              {t('nav.gallery')}
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              {language === 'ro' && 'Transformari reale ale pacientilor nostri'}
              {language === 'en' && 'Real transformations from our patients'}
              {language === 'it' && 'Trasformazioni reali dei nostri pazienti'}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/before-after-1.jpg"
              afterImage="/before-after-2.jpg"
            />
            <BeforeAfterSlider
              beforeImage="/before-after-3.jpg"
              afterImage="/before-after-4.jpg"
            />
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild className="bg-transparent">
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

      {/* Comfort Features - first-person tone */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-balance md:text-4xl">
              {language === 'ro' ? 'De Ce Te Vei Simti in Siguranta Aici' : language === 'en' ? 'Why You\'ll Feel Safe Here' : 'Perche Ti Sentirai al Sicuro Qui'}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {comfortFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="flex flex-col items-center text-center"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-semibold">{feature.title}</h3>
                  <p className="leading-relaxed text-muted-foreground text-pretty text-sm">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-balance md:text-4xl">
              {t('testimonials.title')}
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              {language === 'ro' && 'Asculta povestile pacientilor nostri multumiti'}
              {language === 'en' && 'Hear from our satisfied patients'}
              {language === 'it' && 'Ascolta le storie dei nostri pazienti soddisfatti'}
            </p>
          </div>

          <VideoTestimonials />
        </div>
      </section>

      {/* FAQ - more anxiety-focused */}
      <section className="py-20">
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

      {/* Smile Quiz CTA Banner */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-balance md:text-3xl">
            {language === 'ro' ? 'Nu stii ce tratament ti se potriveste?' : language === 'en' ? 'Not sure which treatment is right for you?' : 'Non sai quale trattamento fa per te?'}
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-muted-foreground text-pretty">
            {language === 'ro'
              ? 'Raspunde la 3 intrebari rapide si primeste o recomandare personalizata.'
              : language === 'en'
              ? 'Answer 3 quick questions and get a personalized recommendation.'
              : 'Rispondi a 3 domande rapide e ricevi una raccomandazione personalizzata.'}
          </p>
          <Button size="lg" variant="outline" asChild className="bg-transparent">
            <Link href="/quiz">
              {language === 'ro' ? 'Fa Testul Zambetului' : language === 'en' ? 'Take the Smile Quiz' : 'Fai il Quiz del Sorriso'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-primary/5" />
        
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-balance md:text-4xl">
            {t('cta.title')}
          </h2>
          
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {t('cta.subtitle')}
          </p>
          
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              onClick={() => setIsBookingOpen(true)}
              className="group"
            >
              {t('cta.button')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent">
              <a href="tel:+40721234567">
                <Phone className="mr-2 h-5 w-5" />
                +40 721 234 567
              </a>
            </Button>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}
