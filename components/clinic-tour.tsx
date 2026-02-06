'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

interface TourStop {
  id: string
  image: string
  title: { ro: string; en: string; it: string }
  description: { ro: string; en: string; it: string }
  hotspots: Array<{
    x: number
    y: number
    label: { ro: string; en: string; it: string }
  }>
}

const tourStops: TourStop[] = [
  {
    id: 'reception',
    image: '/clinic-tour.jpg',
    title: {
      ro: 'Recepție',
      en: 'Reception',
      it: 'Reception',
    },
    description: {
      ro: 'Zona de primire caldă și primitoare cu canapele confortabile',
      en: 'Warm and welcoming reception area with comfortable seating',
      it: 'Area reception calda e accogliente con comodi posti a sedere',
    },
    hotspots: [
      { x: 30, y: 50, label: { ro: 'Zonă de așteptare', en: 'Waiting area', it: 'Area d\'attesa' } },
      { x: 70, y: 40, label: { ro: 'Recepție', en: 'Front desk', it: 'Reception' } },
    ],
  },
  {
    id: 'treatment',
    image: '/hero-dental.jpg',
    title: {
      ro: 'Cameră de Tratament',
      en: 'Treatment Room',
      it: 'Sala Trattamenti',
    },
    description: {
      ro: 'Cameră modernă de tratament cu echipament de ultimă generație',
      en: 'Modern treatment room with state-of-the-art equipment',
      it: 'Moderna sala trattamenti con attrezzature all\'avanguardia',
    },
    hotspots: [
      { x: 50, y: 60, label: { ro: 'Scaun dentar', en: 'Dental chair', it: 'Poltrona odontoiatrica' } },
      { x: 80, y: 30, label: { ro: 'Echipament medical', en: 'Medical equipment', it: 'Attrezzature mediche' } },
    ],
  },
  {
    id: 'sterilization',
    image: '/service-restorative.jpg',
    title: {
      ro: 'Cameră de Sterilizare',
      en: 'Sterilization Room',
      it: 'Sala Sterilizzazione',
    },
    description: {
      ro: 'Cameră dedicată de sterilizare pentru siguranța pacienților',
      en: 'Dedicated sterilization room for patient safety',
      it: 'Sala di sterilizzazione dedicata per la sicurezza del paziente',
    },
    hotspots: [
      { x: 50, y: 50, label: { ro: 'Echipament sterilizare', en: 'Sterilization equipment', it: 'Attrezzature di sterilizzazione' } },
    ],
  },
]

export function ClinicTour() {
  const [currentStop, setCurrentStop] = useState(0)
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null)
  const { language } = useLanguage()

  const stop = tourStops[currentStop]

  const nextStop = () => {
    setCurrentStop((prev) => (prev + 1) % tourStops.length)
    setActiveHotspot(null)
  }

  const prevStop = () => {
    setCurrentStop((prev) => (prev - 1 + tourStops.length) % tourStops.length)
    setActiveHotspot(null)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-video bg-gray-100">
          <Image
            src={stop.image || "/placeholder.svg"}
            alt={stop.title[language]}
            fill
            className="object-cover"
          />

          {/* Hotspots */}
          {stop.hotspots.map((hotspot, index) => (
            <button
              key={index}
              onClick={() => setActiveHotspot(activeHotspot === index ? null : index)}
              className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 group"
              style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
            >
              <div className="relative">
                <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
              </div>

              {/* Hotspot Label */}
              {activeHotspot === index && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-white rounded-lg shadow-xl whitespace-nowrap animate-fade-in-up z-10">
                  <p className="text-sm font-medium">{hotspot.label[language]}</p>
                </div>
              )}
            </button>
          ))}

          {/* Navigation Buttons */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg"
            onClick={prevStop}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg"
            onClick={nextStop}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Stop Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {tourStops.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentStop(index)
                  setActiveHotspot(null)
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentStop ? 'w-8 bg-white' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Info Panel */}
        <div className="p-6">
          <h3 className="text-xl font-serif font-semibold mb-2">{stop.title[language]}</h3>
          <p className="text-muted-foreground">{stop.description[language]}</p>
          <p className="text-sm text-muted-foreground mt-3">
            {language === 'ro' && 'Apasă pe punctele marcate pentru mai multe detalii'}
            {language === 'en' && 'Click on the marked points for more details'}
            {language === 'it' && 'Clicca sui punti contrassegnati per maggiori dettagli'}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
