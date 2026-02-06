'use client'

import { useState } from 'react'
import { Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BookingModal } from '@/components/booking-modal'
import { useLanguage } from '@/lib/language-context'

export function StickyBookingButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        size="lg"
        className="fixed bottom-6 right-6 z-40 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      >
        <Calendar className="mr-2 h-5 w-5" />
        {t('nav.book')}
      </Button>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
