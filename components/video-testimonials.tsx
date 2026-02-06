'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const videoTestimonials = [
  {
    id: 1,
    thumbnail: '/before-after-1.jpg',
    name: { ro: 'Maria D.', en: 'Maria D.', it: 'Maria D.' },
    treatment: { ro: 'Albire Dentară', en: 'Teeth Whitening', it: 'Sbiancamento' },
    duration: '1:24',
  },
  {
    id: 2,
    thumbnail: '/before-after-2.jpg',
    name: { ro: 'Alexandru P.', en: 'Alexandru P.', it: 'Alexandru P.' },
    treatment: { ro: 'Fațete Dentare', en: 'Dental Veneers', it: 'Faccette' },
    duration: '2:15',
  },
  {
    id: 3,
    thumbnail: '/before-after-3.jpg',
    name: { ro: 'Ioana M.', en: 'Ioana M.', it: 'Ioana M.' },
    treatment: { ro: 'Invisalign', en: 'Invisalign', it: 'Invisalign' },
    duration: '1:48',
  },
]

export function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)
  const { language } = useLanguage()

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {videoTestimonials.map((video) => (
        <button
          key={video.id}
          onClick={() => setActiveVideo(video.id)}
          className="relative group overflow-hidden rounded-xl aspect-[9/16] bg-gray-100"
        >
          <Image
            src={video.thumbnail || "/placeholder.svg"}
            alt={video.name[language]}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-102"
          />

          {/* Play Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/45 transition-colors flex items-center justify-center">
            <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center shadow-lg">
              <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
            </div>
          </div>

          {/* Duration Badge */}
          <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
            {video.duration}
          </div>

          {/* Info */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
            <p className="font-semibold">{video.name[language]}</p>
            <p className="text-sm text-white/80">{video.treatment[language]}</p>
          </div>
        </button>
      ))}

      {/* Mock Video Modal */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
        >
          <div className="relative max-w-2xl w-full aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
            <p className="text-white">
              {language === 'ro' && 'Demo: Video testimonal ar fi redat aici'}
              {language === 'en' && 'Demo: Video testimonial would play here'}
              {language === 'it' && 'Demo: Il video testimonial verrebbe riprodotto qui'}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
