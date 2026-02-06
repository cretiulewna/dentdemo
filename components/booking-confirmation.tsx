'use client'

import { useState } from 'react'
import { CheckCircle2, AlertCircle, Loader2, Calendar, Clock, User, Phone, Mail, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

type ConfirmationState = 'success' | 'error' | 'processing'

interface BookingConfirmationProps {
  state: ConfirmationState
  bookingData?: {
    name: string
    email: string
    phone: string
    date: string
    time: string
    service: string
    doctor?: string
  }
  error?: string
  onClose: () => void
  onRetry?: () => void
}

export function BookingConfirmation({
  state,
  bookingData,
  error,
  onClose,
  onRetry,
}: BookingConfirmationProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (state === 'processing') {
    return (
      <Card className="max-w-md mx-auto border-0 shadow-lg">
        <CardContent className="p-8 text-center space-y-4">
          <div className="flex justify-center">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
          <h2 className="font-serif text-2xl font-bold">Procesez Cererea...</h2>
          <p className="text-muted-foreground">
            Te rugăm să aștepți. Confirmarea ta este în curs de procesare.
          </p>
        </CardContent>
      </Card>
    )
  }

  if (state === 'error') {
    return (
      <Card className="max-w-md mx-auto border-destructive/20 shadow-lg">
        <CardContent className="p-8 space-y-6">
          <div className="flex justify-center">
            <AlertCircle className="w-12 h-12 text-destructive" />
          </div>
          <div className="text-center space-y-2">
            <h2 className="font-serif text-2xl font-bold">A Apărut o Problemă</h2>
            <p className="text-muted-foreground">
              {error || 'Nu am putut procesa cererea ta. Te rugăm să încerci din nou.'}
            </p>
          </div>
          <div className="space-y-2">
            {onRetry && (
              <Button onClick={onRetry} className="w-full">
                Încearcă Din Nou
              </Button>
            )}
            <Button variant="outline" onClick={onClose} className="w-full bg-transparent">
              Închide
            </Button>
            <p className="text-xs text-muted-foreground text-center pt-2">
              Dacă problema persistă, te rugăm să ne contactezi direct la{' '}
              <a href="tel:+40721234567" className="text-primary hover:underline">
                +40 721 234 567
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Success state
  return (
    <Card className="max-w-2xl mx-auto border-success/20 shadow-lg">
      <CardContent className="p-8 space-y-6">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center animate-bounce">
            <CheckCircle2 className="w-10 h-10 text-success" />
          </div>
        </div>

        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="font-serif text-3xl font-bold">Programul Tău Este Confirmat!</h2>
          <p className="text-muted-foreground text-lg">
            Mulțumim! Ți-am trimis o confirmare la email.
          </p>
        </div>

        {/* Booking Summary */}
        {bookingData && (
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">Detaliile Programării</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Data</p>
                  <p className="font-semibold">{bookingData.date}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Ora</p>
                  <p className="font-semibold">{bookingData.time}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Serviciu</p>
                  <p className="font-semibold">{bookingData.service}</p>
                </div>
              </div>
              {bookingData.doctor && (
                <div className="flex items-start gap-3 pt-2 border-t border-primary/10">
                  <User className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Doctor</p>
                    <p className="font-semibold">{bookingData.doctor}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* What's Next */}
        <Card className="bg-secondary/30 border-secondary/50">
          <CardHeader>
            <CardTitle className="text-lg">Ce Se Întâmplă Acum?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex gap-3">
              <Badge className="text-xs">1</Badge>
              <span>Vei primi un email de confirmare cu detaliile complete</span>
            </div>
            <div className="flex gap-3">
              <Badge className="text-xs">2</Badge>
              <span>Vei putea adăuga programul tău la calendarele tale (Google, Outlook, etc.)</span>
            </div>
            <div className="flex gap-3">
              <Badge className="text-xs">3</Badge>
              <span>Te vom contacta cu 24 de ore înainte de programare</span>
            </div>
            <div className="flex gap-3">
              <Badge className="text-xs">4</Badge>
              <span>Vine 10 minute mai devreme pentru a completa formularul pacient</span>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="border-accent/20 bg-accent/5">
          <CardHeader>
            <CardTitle className="text-lg">Ai Nevoie de Ajutor?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-accent flex-shrink-0" />
              <div>
                <p className="text-muted-foreground">Telefon</p>
                <a href="tel:+40721234567" className="font-semibold text-primary hover:underline">
                  +40 721 234 567
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-accent flex-shrink-0" />
              <div>
                <p className="text-muted-foreground">Email</p>
                <a href="mailto:contact@denticalm.ro" className="font-semibold text-primary hover:underline">
                  contact@denticalm.ro
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-3">
          <Button onClick={onClose} className="flex-1">
            Gata
          </Button>
          <Button variant="outline" asChild className="bg-transparent">
            <a href="https://calendar.google.com" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Adaugă la Calendar
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
