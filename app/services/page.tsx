'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Check, Heart, Sparkles, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useLanguage } from '@/lib/language-context'
import { BookingModal } from '@/components/booking-modal'

export default function ServicesPage() {
  const { t } = useLanguage()
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const services = [
    {
      id: 'preventive',
      icon: Check,
      title: t('services.preventive'),
      description: t('services.preventive.desc'),
      image: '/service-preventive.jpg',
      details: [
        'Controale periodice complete',
        'Igienizare dentară profesională',
        'Detartraj cu ultrasunete',
        'Sigilări preventive',
        'Fluorurizări',
        'Consultații de prevenție',
      ],
    },
    {
      id: 'cosmetic',
      icon: Sparkles,
      title: t('services.cosmetic'),
      description: t('services.cosmetic.desc'),
      image: '/service-cosmetic.jpg',
      details: [
        'Albire dentară profesională',
        'Fațete ceramice premium',
        'Alinierea dinților (Invisalign)',
        'Reconstrucții estetice',
        'Conturare gingivală',
        'Smile makeover complet',
      ],
    },
    {
      id: 'restorative',
      icon: Heart,
      title: t('services.restorative'),
      description: t('services.restorative.desc'),
      image: '/service-restorative.jpg',
      details: [
        'Implanturi dentare premium',
        'Coroane ceramice',
        'Punți dentare fixe',
        'Tratamente de canal',
        'Proteze dentare',
        'Restaurări complexe',
      ],
    },
    {
      id: 'emergency',
      icon: Users,
      title: t('services.emergency'),
      description: t('services.emergency.desc'),
      image: '/service-emergency.jpg',
      details: [
        'Tratament urgent al durerii',
        'Rezolvarea fracturilor dentare',
        'Reimplantarea dinților',
        'Tratarea infecțiilor acute',
        'Disponibilitate rapidă',
        'Echipă de urgență dedicată',
      ],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            Servicii Premium
          </Badge>
          
          <h1 className="mb-4 font-serif text-4xl font-bold text-balance md:text-5xl">
            {t('services.title')}
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="preventive" className="w-full">
            <TabsList className="mb-12 grid w-full grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{service.title}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {services.map((service) => {
              const Icon = service.icon
              return (
                <TabsContent key={service.id} value={service.id} className="space-y-8">
                  <div className="grid gap-8 lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-[400px] overflow-hidden rounded-xl">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="space-y-6">
                      <div>
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        
                        <h2 className="mb-4 font-serif text-3xl font-bold">
                          {service.title}
                        </h2>
                        
                        <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                          {service.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-semibold">Ce Include:</h3>
                        <ul className="space-y-2">
                          {service.details.map((detail, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                <Check className="h-3 w-3 text-primary" />
                              </div>
                              <span className="leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        size="lg"
                        onClick={() => setIsBookingOpen(true)}
                        className="group"
                      >
                        {t('hero.cta')}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </section>

      {/* All Services Overview */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-balance md:text-4xl">
              Toate Serviciile Noastre
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Îngrijire dentară completă sub un singur acoperiș
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.id}
                  className="group overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
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
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden border-2">
            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-8 text-center md:p-12">
              <h2 className="mb-4 font-serif text-3xl font-bold text-balance">
                Pregătit să Începi?
              </h2>
              
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
                Programează o consultație gratuită și descoperă cum te putem ajuta să obții zâmbetul perfect
              </p>
              
              <Button
                size="lg"
                onClick={() => setIsBookingOpen(true)}
                className="group"
              >
                {t('cta.button')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}
