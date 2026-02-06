'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { CostEstimator } from '@/components/cost-estimator'

export default function ServicesDetailPage() {
  const { language } = useLanguage()

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            {language === 'ro' && 'Planificare Tratament'}
            {language === 'en' && 'Treatment Planning'}
            {language === 'it' && 'Pianificazione Trattamento'}
          </Badge>
          
          <h1 className="mb-4 font-serif text-4xl font-bold text-balance md:text-5xl">
            {language === 'ro' && 'Estimează Costul Tratamentului Tău'}
            {language === 'en' && 'Estimate Your Treatment Cost'}
            {language === 'it' && 'Stima il Costo del Tuo Trattamento'}
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {language === 'ro' && 'Transparență totală în prețuri. Află costul estimat al tratamentului tău și opțiunile de finanțare disponibile.'}
            {language === 'en' && 'Complete price transparency. Find out the estimated cost of your treatment and available financing options.'}
            {language === 'it' && 'Completa trasparenza dei prezzi. Scopri il costo stimato del tuo trattamento e le opzioni di finanziamento disponibili.'}
          </p>
        </div>
      </section>

      {/* Cost Estimator Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <CostEstimator />
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-balance">
              {language === 'ro' && 'De Ce Să Ne Alegi'}
              {language === 'en' && 'Why Choose Us'}
              {language === 'it' && 'Perché Sceglierci'}
            </h2>
            
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground text-pretty">
              {language === 'ro' && 'Oferim prețuri transparente, opțiuni de finanțare flexibile și calitate premium în toate serviciile noastre.'}
              {language === 'en' && 'We offer transparent pricing, flexible financing options, and premium quality in all our services.'}
              {language === 'it' && 'Offriamo prezzi trasparenti, opzioni di finanziamento flessibili e qualità premium in tutti i nostri servizi.'}
            </p>
            
            <Button size="lg" className="transition-all duration-300 hover:scale-110">
              {language === 'ro' && 'Programează Consultație Gratuită'}
              {language === 'en' && 'Book Free Consultation'}
              {language === 'it' && 'Prenota Consulenza Gratuita'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
