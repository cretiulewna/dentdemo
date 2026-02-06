'use client'

import Image from 'next/image'
import { Award, GraduationCap, Heart, Play } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/lib/language-context'

export default function TeamPage() {
  const { t } = useLanguage()

  const team = [
    {
      name: 'Dr. Elena Popescu',
      role: 'Director Medical & Specialist Stomatologie Estetică',
      image: '/doctor-1.jpg',
      qualifications: [
        'Medicină Dentară - Universitatea Carol Davila',
        'Specialist în Stomatologie Estetică - Paris',
        '15+ ani experiență',
        'Membru al Academiei Europene de Stomatologie Estetică',
      ],
    },
    {
      name: 'Dr. Mihai Ionescu',
      role: 'Specialist Implantologie & Chirurgie Orală',
      image: '/doctor-2.jpg',
      qualifications: [
        'Medicină Dentară - Universitatea Carol Davila',
        'Certificare Implantologie - Germania',
        '20+ ani experiență',
        'Expert în chirurgie dento-alveolară complexă',
      ],
    },
    {
      name: 'Dr. Alexandru Dumitrescu',
      role: 'Specialist Ortodonție & Invisalign',
      image: '/doctor-3.jpg',
      qualifications: [
        'Medicină Dentară - Universitatea Carol Davila',
        'Specialist Ortodonție - Spania',
        '10+ ani experiență',
        'Certificat Invisalign Diamond Provider',
      ],
    },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Empatie & Grijă',
      description: 'Fiecare pacient este tratat cu căldură și înțelegere, prioritizând confortul și bunăstarea acestuia.',
    },
    {
      icon: Award,
      title: 'Excelență Profesională',
      description: 'Echipa noastră este formată din specialiști cu certificări internaționale și experiență vastă.',
    },
    {
      icon: GraduationCap,
      title: 'Educație Continuă',
      description: 'Participăm constant la cursuri și conferințe pentru a rămâne la curent cu cele mai noi tehnici.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            {t('team.title')}
          </Badge>
          
          <h1 className="mb-4 font-serif text-4xl font-bold text-balance md:text-5xl">
            {t('team.title')}
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {t('team.subtitle')}
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-balance">
              Medicii Noștri
            </h2>
            <p className="mx-auto max-w-2xl leading-relaxed text-muted-foreground text-pretty">
              O echipă de profesioniști pasionați, dedicați sănătății tale orale
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="mb-2 font-serif text-2xl font-bold">{member.name}</h3>
                  <p className="mb-4 text-sm font-medium text-primary">{member.role}</p>
                  
                  <div className="space-y-2">
                    {member.qualifications.map((qual, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span className="leading-relaxed text-muted-foreground">{qual}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-balance">
              Valorile Noastre
            </h2>
            <p className="mx-auto max-w-2xl leading-relaxed text-muted-foreground text-pretty">
              Principiile care ne ghidează în fiecare zi
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="text-center transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-bold">{value.title}</h3>
                  <p className="leading-relaxed text-muted-foreground text-pretty">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Clinic Tour Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <Badge variant="secondary">Tur Virtual</Badge>
              
              <h2 className="font-serif text-3xl font-bold text-balance">
                Descoperă Clinica Noastră
              </h2>
              
              <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                O clinică modernă, dotată cu echipamente de ultimă generație, într-un ambient calm și reconfortant. Am creat un spațiu care combină profesionalismul medical cu confortul unei experiențe spa.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="leading-relaxed">Zone de așteptare confortabile cu aromatherapie</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="leading-relaxed">Cabinete individuale pentru intimitate maximă</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="leading-relaxed">Echipamente digitale de ultimă generație</span>
                </li>
              </ul>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/clinic-tour.jpg"
                alt="Clinic Tour"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity hover:bg-black/30">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl transition-transform hover:scale-110">
                  <Play className="ml-1 h-8 w-8 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 font-serif text-4xl font-bold text-primary">15+</div>
              <p className="text-sm text-muted-foreground">Ani de Experiență</p>
            </div>
            <div className="text-center">
              <div className="mb-2 font-serif text-4xl font-bold text-primary">5000+</div>
              <p className="text-sm text-muted-foreground">Pacienți Fericiți</p>
            </div>
            <div className="text-center">
              <div className="mb-2 font-serif text-4xl font-bold text-primary">98%</div>
              <p className="text-sm text-muted-foreground">Satisfacție</p>
            </div>
            <div className="text-center">
              <div className="mb-2 font-serif text-4xl font-bold text-primary">24/7</div>
              <p className="text-sm text-muted-foreground">Urgențe</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
