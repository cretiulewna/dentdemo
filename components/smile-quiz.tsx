'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, ChevronRight, Sparkles } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

interface QuizQuestion {
  id: string
  question: { ro: string; en: string; it: string }
  options: Array<{
    value: string
    label: { ro: string; en: string; it: string }
  }>
}

const questions: QuizQuestion[] = [
  {
    id: 'concern',
    question: {
      ro: 'Care este principala ta preocupare dentară?',
      en: 'What is your main dental concern?',
      it: 'Qual è la tua principale preoccupazione dentale?',
    },
    options: [
      {
        value: 'whitening',
        label: { ro: 'Albirea dinților', en: 'Teeth whitening', it: 'Sbiancamento dei denti' },
      },
      {
        value: 'alignment',
        label: { ro: 'Alinierea dinților', en: 'Teeth alignment', it: 'Allineamento dei denti' },
      },
      {
        value: 'missing',
        label: { ro: 'Dinți lipsă', en: 'Missing teeth', it: 'Denti mancanti' },
      },
      {
        value: 'damaged',
        label: { ro: 'Dinți deteriorați', en: 'Damaged teeth', it: 'Denti danneggiati' },
      },
    ],
  },
  {
    id: 'smile',
    question: {
      ro: 'Cum te simți în legătură cu zâmbetul tău?',
      en: 'How do you feel about your smile?',
      it: 'Come ti senti riguardo al tuo sorriso?',
    },
    options: [
      {
        value: 'confident',
        label: { ro: 'Încrezător, dar poate fi îmbunătățit', en: 'Confident but could improve', it: 'Fiducioso ma potrebbe migliorare' },
      },
      {
        value: 'self-conscious',
        label: { ro: 'Îmi este jenă să zâmbesc', en: 'Self-conscious about smiling', it: 'Imbarazzato a sorridere' },
      },
      {
        value: 'hide',
        label: { ro: 'Încerc să-mi ascund zâmbetul', en: 'Try to hide my smile', it: 'Cerco di nascondere il mio sorriso' },
      },
    ],
  },
  {
    id: 'timeline',
    question: {
      ro: 'Cât de repede dorești rezultate?',
      en: 'How quickly do you want results?',
      it: 'Quanto velocemente vuoi i risultati?',
    },
    options: [
      {
        value: 'asap',
        label: { ro: 'Cât mai repede posibil', en: 'As soon as possible', it: 'Il prima possibile' },
      },
      {
        value: 'months',
        label: { ro: 'Câteva luni', en: 'A few months', it: 'Alcuni mesi' },
      },
      {
        value: 'year',
        label: { ro: 'Într-un an', en: 'Within a year', it: 'Entro un anno' },
      },
    ],
  },
]

const recommendations: Record<string, { ro: string; en: string; it: string; treatments: string[] }> = {
  whitening: {
    ro: 'Albirea Profesională',
    en: 'Professional Whitening',
    it: 'Sbiancamento Professionale',
    treatments: ['whitening', 'veneers'],
  },
  alignment: {
    ro: 'Invisalign sau Fațete',
    en: 'Invisalign or Veneers',
    it: 'Invisalign o Faccette',
    treatments: ['invisalign', 'veneers'],
  },
  missing: {
    ro: 'Implanturi Dentare',
    en: 'Dental Implants',
    it: 'Impianti Dentali',
    treatments: ['implants', 'crowns'],
  },
  damaged: {
    ro: 'Coroane sau Fațete',
    en: 'Crowns or Veneers',
    it: 'Corone o Faccette',
    treatments: ['crowns', 'veneers'],
  },
}

export function SmileQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)
  const { t, language } = useLanguage()

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value })

    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300)
    } else {
      setTimeout(() => setShowResults(true), 300)
    }
  }

  const resetQuiz = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResults(false)
  }

  const getRecommendation = () => {
    const concern = answers.concern || 'whitening'
    return recommendations[concern]
  }

  if (showResults) {
    const recommendation = getRecommendation()
    return (
      <Card className="w-full max-w-2xl mx-auto animate-scale-in">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-serif">
            {t.quiz.results[language]}
          </CardTitle>
          <CardDescription>
            {t.quiz.resultsSubtitle[language]}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-primary/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{recommendation[language]}</h3>
            <p className="text-muted-foreground">
              {t.quiz.recommendation[language]}
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="flex-1" size="lg">
              {t.cta.book[language]}
            </Button>
            <Button variant="outline" onClick={resetQuiz}>
              {t.quiz.restart[language]}
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const currentQuestion = questions[currentStep]

  return (
    <Card className="w-full max-w-2xl mx-auto animate-fade-in-up">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-muted-foreground">
            {t.quiz.question[language]} {currentStep + 1} / {questions.length}
          </span>
          <div className="flex gap-1">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-8 rounded-full transition-colors ${
                  index <= currentStep ? 'bg-primary' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
        <CardTitle className="text-xl font-serif">
          {currentQuestion.question[language]}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {currentQuestion.options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleAnswer(currentQuestion.id, option.value)}
            className="w-full p-4 text-left rounded-lg border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{option.label[language]}</span>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
            </div>
          </button>
        ))}
      </CardContent>
    </Card>
  )
}
