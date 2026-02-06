'use client'

import { useState } from 'react'
import { Calendar, Clock, CheckCircle2, ChevronLeft, ChevronRight, User } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useLanguage } from '@/lib/language-context'
import Image from 'next/image'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

const services = [
  {
    id: 'preventive',
    icon: '🦷',
    nameKey: 'services.preventive',
    descKey: 'services.preventive.desc',
  },
  {
    id: 'cosmetic',
    icon: '✨',
    nameKey: 'services.cosmetic',
    descKey: 'services.cosmetic.desc',
  },
  {
    id: 'restorative',
    icon: '🔧',
    nameKey: 'services.restorative',
    descKey: 'services.restorative.desc',
  },
  {
    id: 'emergency',
    icon: '🚨',
    nameKey: 'services.emergency',
    descKey: 'services.emergency.desc',
  },
]

const doctors = [
  {
    id: 'dr-popescu',
    name: 'Dr. Elena Popescu',
    specialty: { ro: 'Stomatologie Generală', en: 'General Dentistry', it: 'Odontoiatria Generale' },
    image: '/doctor-1.jpg',
    availability: 3,
  },
  {
    id: 'dr-ionescu',
    name: 'Dr. Mihai Ionescu',
    specialty: { ro: 'Stomatologie Estetică', en: 'Cosmetic Dentistry', it: 'Odontoiatria Estetica' },
    image: '/doctor-2.jpg',
    availability: 5,
  },
  {
    id: 'dr-dumitru',
    name: 'Dr. Andrei Dumitru',
    specialty: { ro: 'Implantologie', en: 'Implantology', it: 'Implantologia' },
    image: '/doctor-3.jpg',
    availability: 2,
  },
]

const timeSlots = [
  { time: '09:00', available: true },
  { time: '10:00', available: true },
  { time: '11:00', available: false },
  { time: '12:00', available: true },
  { time: '14:00', available: true },
  { time: '15:00', available: true },
  { time: '16:00', available: false },
  { time: '17:00', available: true },
]

export function BookingModalV2({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    doctor: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const { t, language } = useLanguage()

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    // Accept Romanian (+40) and Italian (+39) phone numbers
    const phoneRegex = /^(\+40|\+39|\+)[0-9\s\-()]{8,}$/
    return phoneRegex.test(phone.replace(/\s/g, ''))
  }

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = language === 'ro' ? 'Nume obligatoriu' : language === 'en' ? 'Name required' : 'Nome obbligatorio'
    if (!validateEmail(formData.email)) newErrors.email = language === 'ro' ? 'Email invalid' : language === 'en' ? 'Invalid email' : 'Email non valido'
    if (!validatePhone(formData.phone)) newErrors.phone = language === 'ro' ? 'Telefon invalid' : language === 'en' ? 'Invalid phone' : 'Telefono non valido'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    console.log('[v0] Multi-step booking submitted:', formData)
    alert('Programarea a fost trimisă cu succes! (Demo only)')
    onClose()
    resetForm()
  }

  const resetForm = () => {
    setStep(1)
    setFormData({
      service: '',
      doctor: '',
      date: '',
      time: '',
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const getAvailabilityText = (count: number) => {
    if (language === 'ro') return `${count} sloturi disponibile săptămâna aceasta`
    if (language === 'en') return `${count} slots available this week`
    return `${count} slot disponibili questa settimana`
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px]" aria-label="Booking wizard">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">
            {language === 'ro' && 'Programează Consultație'}
            {language === 'en' && 'Book Consultation'}
            {language === 'it' && 'Prenota Consulto'}
          </DialogTitle>
          <DialogDescription>
            {language === 'ro' && `Pasul ${step} din 4: Completează pașii pentru a programa o consultație`}
            {language === 'en' && `Step ${step} of 4: Complete the steps to book your consultation`}
            {language === 'it' && `Passo ${step} di 4: Completa i passaggi per prenotare la tua consulenza`}
          </DialogDescription>
        </DialogHeader>

        {/* Progress Bar */}
        <div className="flex items-center gap-2 mb-6" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={4} aria-label={`Step ${step} of 4`}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex-1" aria-current={i === step ? 'step' : undefined}>
              <div
                className={`h-2 rounded-full transition-all ${
                  i <= step ? 'bg-primary' : 'bg-gray-200'
                }`}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* Step 1: Select Service */}
        {step === 1 && (
          <div className="space-y-4 animate-fade-in-up">
            <h3 className="font-semibold text-lg">
              {language === 'ro' && 'Selectează Serviciul'}
              {language === 'en' && 'Select Service'}
              {language === 'it' && 'Seleziona Servizio'}
            </h3>
            <div className="grid gap-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => {
                    setFormData({ ...formData, service: service.id })
                    nextStep()
                  }}
                  className={`p-4 rounded-lg border-2 text-left transition-all hover:border-primary hover:bg-primary/5 ${
                    formData.service === service.id ? 'border-primary bg-primary/5' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{service.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{t(service.nameKey)}</h4>
                      <p className="text-sm text-muted-foreground">{t(service.descKey)}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Select Doctor */}
        {step === 2 && (
          <div className="space-y-4 animate-fade-in-up">
            <h3 className="font-semibold text-lg">
              {language === 'ro' && 'Alege Doctorul (Opțional)'}
              {language === 'en' && 'Choose Doctor (Optional)'}
              {language === 'it' && 'Scegli Dottore (Opzionale)'}
            </h3>
            <div className="space-y-3">
              {doctors.map((doctor) => (
                <button
                  key={doctor.id}
                  onClick={() => {
                    setFormData({ ...formData, doctor: doctor.id })
                    nextStep()
                  }}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all hover:border-primary hover:bg-primary/5 ${
                    formData.doctor === doctor.id ? 'border-primary bg-primary/5' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{doctor.name}</h4>
                      <p className="text-sm text-muted-foreground mb-1">{doctor.specialty[language]}</p>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="flex items-center gap-1 text-success">
                          <div className="w-2 h-2 bg-success rounded-full" />
                          {getAvailabilityText(doctor.availability)}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={prevStep} className="flex-1 bg-transparent">
                <ChevronLeft className="w-4 h-4 mr-2" />
                {language === 'ro' && 'Înapoi'}
                {language === 'en' && 'Back'}
                {language === 'it' && 'Indietro'}
              </Button>
              <Button onClick={nextStep} variant="outline" className="flex-1 bg-transparent">
                {language === 'ro' && 'Sări'}
                {language === 'en' && 'Skip'}
                {language === 'it' && 'Salta'}
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Select Date & Time */}
        {step === 3 && (
          <div className="space-y-4 animate-fade-in-up">
            <h3 className="font-semibold text-lg">
              {language === 'ro' && 'Alege Data și Ora'}
              {language === 'en' && 'Choose Date & Time'}
              {language === 'it' && 'Scegli Data e Ora'}
            </h3>

            {/* Date Picker */}
            <div className="space-y-2">
              <Label htmlFor="date">
                {language === 'ro' && 'Data'}
                {language === 'en' && 'Date'}
                {language === 'it' && 'Data'}
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  className="pl-10"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            {/* Time Slots */}
            {formData.date && (
              <div className="space-y-2">
                <Label>
                  {language === 'ro' && 'Ora Disponibilă'}
                  {language === 'en' && 'Available Time'}
                  {language === 'it' && 'Ora Disponibile'}
                </Label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      onClick={() => slot.available && setFormData({ ...formData, time: slot.time })}
                      disabled={!slot.available}
                      className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                        slot.available
                          ? formData.time === slot.time
                            ? 'border-primary bg-primary text-white'
                            : 'border-gray-200 hover:border-primary hover:bg-primary/5'
                          : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <Clock className="w-4 h-4 mx-auto mb-1" />
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <Button variant="outline" onClick={prevStep} className="flex-1 bg-transparent">
                <ChevronLeft className="w-4 h-4 mr-2" />
                {language === 'ro' && 'Înapoi'}
                {language === 'en' && 'Back'}
                {language === 'it' && 'Indietro'}
              </Button>
              <Button onClick={nextStep} disabled={!formData.date || !formData.time} className="flex-1">
                {language === 'ro' && 'Continuă'}
                {language === 'en' && 'Continue'}
                {language === 'it' && 'Continua'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Personal Details */}
        {step === 4 && (
          <div className="space-y-4 animate-fade-in-up">
            <h3 className="font-semibold text-lg">
              {language === 'ro' && 'Detaliile Tale'}
              {language === 'en' && 'Your Details'}
              {language === 'it' && 'I Tuoi Dettagli'}
            </h3>

            <div className="space-y-2">
              <Label htmlFor="name">
                {language === 'ro' && 'Nume Complet'}
                {language === 'en' && 'Full Name'}
                {language === 'it' && 'Nome Completo'}
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value })
                  setErrors({ ...errors, name: '' })
                }}
                required
                placeholder="Ion Popescu"
                className={errors.name ? 'border-destructive' : ''}
              />
              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value })
                  setErrors({ ...errors, email: '' })
                }}
                required
                placeholder="ion@example.com"
                className={errors.email ? 'border-destructive' : ''}
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                {language === 'ro' && 'Telefon'}
                {language === 'en' && 'Phone'}
                {language === 'it' && 'Telefono'}
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value })
                  setErrors({ ...errors, phone: '' })
                }}
                required
                placeholder="+40 721 234 567"
                className={errors.phone ? 'border-destructive' : ''}
              />
              {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">
                {language === 'ro' && 'Mesaj (opțional)'}
                {language === 'en' && 'Message (optional)'}
                {language === 'it' && 'Messaggio (opzionale)'}
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
              />
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={prevStep} className="flex-1 bg-transparent">
                <ChevronLeft className="w-4 h-4 mr-2" />
                {language === 'ro' && 'Înapoi'}
                {language === 'en' && 'Back'}
                {language === 'it' && 'Indietro'}
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!formData.name || !formData.email || !formData.phone}
                className="flex-1"
              >
                <CheckCircle2 className="w-4 h-4 mr-2" />
                {language === 'ro' && 'Confirmă'}
                {language === 'en' && 'Confirm'}
                {language === 'it' && 'Conferma'}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
