'use client'

import React from "react"

import { useState } from 'react'
import { Mail, MapPin, Phone, Clock, Send, MessageSquare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useLanguage } from '@/lib/language-context'
import { BookingModal } from '@/components/booking-modal'

export default function ContactPage() {
  const { t } = useLanguage()
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '', // Hidden field for spam prevention
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^(\+40|\+39|\+)[0-9\s\-()]{8,}$/
    return phoneRegex.test(phone.replace(/\s/g, ''))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Honeypot check
    if (formData.honeypot) {
      console.log('[v0] Spam attempt detected')
      return
    }

    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Nume obligatoriu'
    if (!validateEmail(formData.email)) newErrors.email = 'Email invalid'
    if (!validatePhone(formData.phone)) newErrors.phone = 'Telefon invalid (+40 sau +39)'
    if (!formData.message.trim()) newErrors.message = 'Mesaj obligatoriu'
    if (formData.message.length < 10) newErrors.message = 'Mesajul trebuie să aibă minim 10 caractere'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    console.log('[v0] Contact form submitted:', formData)
    alert('Mesajul a fost trimis! (Demo only)')
    setFormData({ name: '', email: '', phone: '', message: '', honeypot: '' })
    setErrors({})
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresă',
      details: ['Str. Exemplu 123', 'București 010101', 'România'],
    },
    {
      icon: Phone,
      title: 'Telefon',
      details: ['+40 721 234 567', '+40 31 234 5678'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@denticalm.ro', 'urgente@denticalm.ro'],
    },
    {
      icon: Clock,
      title: 'Program',
      details: ['Luni - Vineri: 9:00 - 19:00', 'Sâmbătă: 10:00 - 14:00', 'Duminică: Închis'],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            {t('nav.contact')}
          </Badge>
          
          <h1 className="mb-4 font-serif text-4xl font-bold text-balance md:text-5xl">
            Intră în Legătură Cu Noi
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Suntem aici pentru a răspunde întrebărilor tale și pentru a te ajuta să obții zâmbetul perfect
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card
                  key={info.title}
                  className="transition-shadow duration-300 hover:shadow-lg"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Trimite un Mesaj</CardTitle>
                <CardDescription>
                  Completează formularul și te vom contacta în cel mai scurt timp
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nume Complet</Label>
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
                    <Label htmlFor="phone">Telefon</Label>
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
                    <div className="flex items-center justify-between">
                      <Label htmlFor="message">Mesaj</Label>
                      <span className="text-xs text-muted-foreground">
                        {formData.message.length}/500
                      </span>
                    </div>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => {
                        if (e.target.value.length <= 500) {
                          setFormData({ ...formData, message: e.target.value })
                          setErrors({ ...errors, message: '' })
                        }
                      }}
                      required
                      placeholder="Cum te putem ajuta?"
                      rows={5}
                      maxLength={500}
                      className={errors.message ? 'border-destructive' : ''}
                    />
                    {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                  </div>

                  {/* Honeypot field - hidden */}
                  <input
                    type="text"
                    name="website"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Trimite Mesaj
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="relative h-[300px] bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="mx-auto mb-2 h-12 w-12 text-primary" />
                      <p className="text-sm text-muted-foreground">Hartă Interactivă</p>
                      <p className="text-xs text-muted-foreground">
                        Str. Exemplu 123, București
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Acțiuni Rapide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full justify-start"
                    variant="outline"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Programează Consultație
                  </Button>
                  
                  <Button
                    asChild
                    className="w-full justify-start bg-green-600 hover:bg-green-700"
                  >
                    <a
                      href="https://wa.me/40721234567"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>

                  <Button
                    asChild
                    className="w-full justify-start bg-transparent"
                    variant="outline"
                  >
                    <a href="tel:+40721234567">
                      <Phone className="mr-2 h-4 w-4" />
                      Sună Acum
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Emergency Note */}
              <Card className="border-destructive">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-destructive/10">
                      <Phone className="h-5 w-5 text-destructive" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Urgențe Dentare</h3>
                      <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
                        Pentru urgențe, sunați la:
                      </p>
                      <a
                        href="tel:+40721234567"
                        className="text-lg font-bold text-destructive"
                      >
                        +40 721 234 567
                      </a>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Disponibili 24/7
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}
