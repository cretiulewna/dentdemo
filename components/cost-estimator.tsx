'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calculator, Check } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

interface Treatment {
  id: string
  name: { ro: string; en: string; it: string }
  priceRange: { min: number; max: number }
  duration: { ro: string; en: string; it: string }
}

const treatments: Treatment[] = [
  {
    id: 'cleaning',
    name: { ro: 'Curățare Dentară', en: 'Dental Cleaning', it: 'Pulizia Dentale' },
    priceRange: { min: 200, max: 400 },
    duration: { ro: '1 ședință', en: '1 session', it: '1 sessione' },
  },
  {
    id: 'whitening',
    name: { ro: 'Albire Profesională', en: 'Professional Whitening', it: 'Sbiancamento Professionale' },
    priceRange: { min: 800, max: 1500 },
    duration: { ro: '1-2 ședințe', en: '1-2 sessions', it: '1-2 sessioni' },
  },
  {
    id: 'filling',
    name: { ro: 'Plombă Dentară', en: 'Dental Filling', it: 'Otturazione' },
    priceRange: { min: 300, max: 600 },
    duration: { ro: '1 ședință', en: '1 session', it: '1 sessione' },
  },
  {
    id: 'veneer',
    name: { ro: 'Fațetă Dentară (per dinte)', en: 'Dental Veneer (per tooth)', it: 'Faccetta Dentale (per dente)' },
    priceRange: { min: 1200, max: 2000 },
    duration: { ro: '2-3 ședințe', en: '2-3 sessions', it: '2-3 sessioni' },
  },
  {
    id: 'crown',
    name: { ro: 'Coroană Dentară', en: 'Dental Crown', it: 'Corona Dentale' },
    priceRange: { min: 1500, max: 2500 },
    duration: { ro: '2-3 ședințe', en: '2-3 sessions', it: '2-3 sessioni' },
  },
  {
    id: 'implant',
    name: { ro: 'Implant Dentar', en: 'Dental Implant', it: 'Impianto Dentale' },
    priceRange: { min: 3000, max: 5000 },
    duration: { ro: '3-6 luni', en: '3-6 months', it: '3-6 mesi' },
  },
  {
    id: 'invisalign',
    name: { ro: 'Invisalign (tratament complet)', en: 'Invisalign (full treatment)', it: 'Invisalign (trattamento completo)' },
    priceRange: { min: 4000, max: 7000 },
    duration: { ro: '12-18 luni', en: '12-18 months', it: '12-18 mesi' },
  },
  {
    id: 'root-canal',
    name: { ro: 'Tratament de Canal', en: 'Root Canal', it: 'Cura Canalare' },
    priceRange: { min: 800, max: 1500 },
    duration: { ro: '1-2 ședințe', en: '1-2 sessions', it: '1-2 sessioni' },
  },
]

export function CostEstimator() {
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>([])
  const [showFinancing, setShowFinancing] = useState(false)
  const { language } = useLanguage()

  const toggleTreatment = (id: string) => {
    setSelectedTreatments((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    )
  }

  const calculateTotal = () => {
    const selected = treatments.filter((t) => selectedTreatments.includes(t.id))
    const minTotal = selected.reduce((sum, t) => sum + t.priceRange.min, 0)
    const maxTotal = selected.reduce((sum, t) => sum + t.priceRange.max, 0)
    return { minTotal, maxTotal }
  }

  const { minTotal, maxTotal } = calculateTotal()

  const monthlyPayment = (total: number, months: number) => {
    return Math.round(total / months)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card>
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calculator className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-serif">
            {language === 'ro' && 'Estimator Cost Tratamente'}
            {language === 'en' && 'Treatment Cost Estimator'}
            {language === 'it' && 'Stimatore Costi Trattamenti'}
          </CardTitle>
          <CardDescription>
            {language === 'ro' && 'Selectează tratamentele de care ai nevoie pentru a vedea costul estimat'}
            {language === 'en' && 'Select the treatments you need to see estimated cost'}
            {language === 'it' && 'Seleziona i trattamenti di cui hai bisogno per vedere il costo stimato'}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Treatment Selection */}
          <div className="grid md:grid-cols-2 gap-3">
            {treatments.map((treatment) => {
              const isSelected = selectedTreatments.includes(treatment.id)
              return (
                <button
                  key={treatment.id}
                  onClick={() => toggleTreatment(treatment.id)}
                  className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                    isSelected
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{treatment.name[language]}</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {treatment.duration[language]}
                      </p>
                      <p className="text-sm font-medium text-primary">
                        €{treatment.priceRange.min} - €{treatment.priceRange.max}
                      </p>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isSelected ? 'border-primary bg-primary' : 'border-gray-300'
                      }`}
                    >
                      {isSelected && <Check className="w-4 h-4 text-white" />}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Total Estimate */}
          {selectedTreatments.length > 0 && (
            <div className="space-y-4 animate-fade-in-up">
              <div className="p-6 bg-primary/10 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-medium">
                    {language === 'ro' && 'Cost Total Estimat'}
                    {language === 'en' && 'Estimated Total Cost'}
                    {language === 'it' && 'Costo Totale Stimato'}
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    €{minTotal} - €{maxTotal}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {language === 'ro' && 'Prețurile finale pot varia în funcție de complexitatea cazului'}
                  {language === 'en' && 'Final prices may vary based on case complexity'}
                  {language === 'it' && 'I prezzi finali possono variare in base alla complessità del caso'}
                </p>
              </div>

              {/* Financing Options */}
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => setShowFinancing(!showFinancing)}
                >
                  {language === 'ro' && 'Vezi Opțiuni de Finanțare'}
                  {language === 'en' && 'View Financing Options'}
                  {language === 'it' && 'Vedi Opzioni di Finanziamento'}
                </Button>

                {showFinancing && (
                  <div className="grid sm:grid-cols-3 gap-3 animate-fade-in-up">
                    <div className="p-4 bg-secondary/50 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground mb-1">
                        {language === 'ro' && '12 luni'}
                        {language === 'en' && '12 months'}
                        {language === 'it' && '12 mesi'}
                      </p>
                      <p className="text-xl font-bold">
                        €{monthlyPayment(minTotal, 12)}-{monthlyPayment(maxTotal, 12)}/
                        {language === 'ro' && 'lună'}
                        {language === 'en' && 'mo'}
                        {language === 'it' && 'mese'}
                      </p>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground mb-1">
                        {language === 'ro' && '24 luni'}
                        {language === 'en' && '24 months'}
                        {language === 'it' && '24 mesi'}
                      </p>
                      <p className="text-xl font-bold">
                        €{monthlyPayment(minTotal, 24)}-{monthlyPayment(maxTotal, 24)}/
                        {language === 'ro' && 'lună'}
                        {language === 'en' && 'mo'}
                        {language === 'it' && 'mese'}
                      </p>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground mb-1">
                        {language === 'ro' && '36 luni'}
                        {language === 'en' && '36 months'}
                        {language === 'it' && '36 mesi'}
                      </p>
                      <p className="text-xl font-bold">
                        €{monthlyPayment(minTotal, 36)}-{monthlyPayment(maxTotal, 36)}/
                        {language === 'ro' && 'lună'}
                        {language === 'en' && 'mo'}
                        {language === 'it' && 'mese'}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <Button className="w-full" size="lg">
                {language === 'ro' && 'Programează Consultație Gratuită'}
                {language === 'en' && 'Book Free Consultation'}
                {language === 'it' && 'Prenota Consultazione Gratuita'}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
