'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useLanguage } from '@/lib/language-context'

export default function GalleryPage() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')

  const cases = [
    {
      id: 1,
      title: 'Albire Dentară Premium',
      category: 'cosmetic',
      image: '/before-after-1.jpg',
      description: 'Transformare completă prin albire dentară profesională',
    },
    {
      id: 2,
      title: 'Fațete Ceramice',
      category: 'cosmetic',
      image: '/before-after-2.jpg',
      description: 'Corectarea spațiilor între dinți cu fațete premium',
    },
    {
      id: 3,
      title: 'Aliniere Ortodontică',
      category: 'cosmetic',
      image: '/before-after-3.jpg',
      description: 'Dinți perfect aliniați cu tratament Invisalign',
    },
    {
      id: 4,
      title: 'Restaurare cu Coroane',
      category: 'restorative',
      image: '/before-after-4.jpg',
      description: 'Restaurare completă cu coroane ceramice premium',
    },
  ]

  const categories = [
    { id: 'all', label: 'Toate Cazurile' },
    { id: 'cosmetic', label: t('services.cosmetic') },
    { id: 'restorative', label: t('services.restorative') },
  ]

  const filteredCases =
    activeFilter === 'all'
      ? cases
      : cases.filter((c) => c.category === activeFilter)

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            Galerie Before & After
          </Badge>
          
          <h1 className="mb-4 font-serif text-4xl font-bold text-balance md:text-5xl">
            Transformări Extraordinare
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Descoperă rezultatele excepționale ale pacienților noștri și inspiră-te pentru propriul tău zâmbet perfect
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <Tabs
            defaultValue="all"
            onValueChange={setActiveFilter}
            className="mb-12"
          >
            <TabsList className="mx-auto grid w-full max-w-md grid-cols-3">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Gallery Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredCases.map((item, index) => (
              <Card
                key={item.id}
                className="group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Badge className="mb-2" variant="secondary">
                        {item.category === 'cosmetic'
                          ? t('services.cosmetic')
                          : t('services.restorative')}
                      </Badge>
                      <h3 className="mb-2 font-serif text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/90">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <Badge className="mb-2" variant="outline">
                    {item.category === 'cosmetic'
                      ? t('services.cosmetic')
                      : t('services.restorative')}
                  </Badge>
                  <h3 className="font-serif text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No results message */}
          {filteredCases.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">
                Nu există cazuri în această categorie momentan.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-balance">
              Rezultate Reale, Pacienți Reali
            </h2>
            
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground text-pretty">
              Toate imaginile prezentate sunt cazuri reale tratate în clinica noastră. Confidențialitatea pacienților este asigurată, iar toate fotografiile sunt publicate cu acordul acestora.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              <Card className="p-6 text-center">
                <div className="mb-2 font-serif text-3xl font-bold text-primary">250+</div>
                <p className="text-sm text-muted-foreground">Cazuri de Succes</p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="mb-2 font-serif text-3xl font-bold text-primary">98%</div>
                <p className="text-sm text-muted-foreground">Satisfacție Pacienți</p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="mb-2 font-serif text-3xl font-bold text-primary">15+</div>
                <p className="text-sm text-muted-foreground">Ani Experiență</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-balance md:text-4xl">
            Vrei și Tu Un Zâmbet Ca Acestea?
          </h2>
          
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Programează o consultație gratuită și descoperă cum te putem ajuta
          </p>
          
          <Button size="lg" className="transition-all duration-300 hover:scale-110">
            {t('hero.cta')}
          </Button>
        </div>
      </section>
    </>
  )
}
