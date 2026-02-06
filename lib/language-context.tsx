'use client'

import React, { createContext, useContext, useState } from 'react'

export type Language = 'ro' | 'en' | 'it'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  ro: {
    // Navigation
    'nav.home': 'Acasă',
    'nav.services': 'Servicii',
    'nav.gallery': 'Galerie',
    'nav.team': 'Echipa',
    'nav.contact': 'Contact',
    'nav.book': 'Programează-te',
    
    // Hero
    'hero.title': 'Zâmbetul Tău Perfect Începe Aici',
    'hero.subtitle': 'O experiență dentară premium într-un ambient calm și reconfortant',
    'hero.cta': 'Programează Consultație',
    'hero.rating': '4.9/5 din 250+ recenzii',
    
    // Services
    'services.title': 'Serviciile Noastre',
    'services.subtitle': 'Îngrijire dentară completă adaptată nevoilor tale',
    'services.preventive': 'Stomatologie Preventivă',
    'services.preventive.desc': 'Controale regulate, igienizare profesională și tratamente de prevenție pentru o sănătate orală optimă.',
    'services.cosmetic': 'Stomatologie Estetică',
    'services.cosmetic.desc': 'Albire dentară, fațete și alinierea dinților pentru zâmbetul tău de vis.',
    'services.restorative': 'Stomatologie Restaurativă',
    'services.restorative.desc': 'Implanturi, coroane și tratamente de canal folosind tehnologie de ultimă generație.',
    'services.emergency': 'Urgențe Dentare',
    'services.emergency.desc': 'Disponibili pentru situații urgente. Te ajutăm rapid să-ți recapeți confortul.',
    'services.learnmore': 'Află Mai Mult',
    
    // Comfort
    'comfort.title': 'De Ce Ne Aleg Pacienții',
    'comfort.painFree': 'Proceduri Fără Durere',
    'comfort.painFree.desc': 'Tehnici avansate de anestezie pentru confortul tău maxim',
    'comfort.atmosphere': 'Atmosferă Liniștită',
    'comfort.atmosphere.desc': 'Muzică ambientală și aromatherapie pentru relaxare',
    'comfort.equipment': 'Echipamente Premium',
    'comfort.equipment.desc': 'Tehnologie dentară de ultimă generație',
    'comfort.staff': 'Echipă Prietenoasă',
    'comfort.staff.desc': 'Personal calificat și empatic',
    
    // Team
    'team.title': 'Echipa Noastră',
    'team.subtitle': 'Profesioniști dedicați îngrijirii tale',
    
    // Testimonials
    'testimonials.title': 'Ce Spun Pacienții Noștri',
    
    // FAQ
    'faq.title': 'Întrebări Frecvente',
    'faq.q1': 'Acceptați asigurări medicale?',
    'faq.a1': 'Da, acceptăm majoritatea asigurărilor medicale. Vă rugăm să ne contactați pentru detalii.',
    'faq.q2': 'Cât durează o consultație?',
    'faq.a2': 'O consultație inițială durează în medie 45-60 de minute.',
    'faq.q3': 'Oferiți opțiuni de finanțare?',
    'faq.a3': 'Da, avem parteneriate cu mai multe instituții financiare pentru planuri de plată flexibile.',
    'faq.q4': 'Cum mă programez?',
    'faq.a4': 'Poți face o programare online, telefonic sau prin WhatsApp.',
    
    // CTA
    'cta.title': 'Pregătit pentru Zâmbetul Tău Perfect?',
    'cta.subtitle': 'Programează o consultație și descoperă diferența DentiCalm',
    'cta.button': 'Programează Acum',
    
    // Footer
    'footer.about': 'Despre Noi',
    'footer.services': 'Servicii',
    'footer.contact': 'Contact',
    'footer.hours': 'Program',
    'footer.address': 'Adresă',
    'footer.phone': 'Telefon',
    'footer.email': 'Email',
    'footer.rights': 'Toate drepturile rezervate',
    
    // Booking Modal
    'booking.title': 'Programează Consultație',
    'booking.name': 'Nume Complet',
    'booking.email': 'Email',
    'booking.phone': 'Telefon',
    'booking.service': 'Serviciu Dorit',
    'booking.date': 'Data Preferată',
    'booking.time': 'Ora Preferată',
    'booking.message': 'Mesaj (opțional)',
    'booking.submit': 'Trimite Programare',
    'booking.select': 'Selectează...',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.book': 'Book Now',
    
    // Hero
    'hero.title': 'Your Perfect Smile Starts Here',
    'hero.subtitle': 'A premium dental experience in a calm and comforting environment',
    'hero.cta': 'Book Consultation',
    'hero.rating': '4.9/5 from 250+ reviews',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Complete dental care tailored to your needs',
    'services.preventive': 'Preventive Dentistry',
    'services.preventive.desc': 'Regular checkups, professional cleaning and preventive treatments for optimal oral health.',
    'services.cosmetic': 'Cosmetic Dentistry',
    'services.cosmetic.desc': 'Teeth whitening, veneers and alignment for your dream smile.',
    'services.restorative': 'Restorative Dentistry',
    'services.restorative.desc': 'Implants, crowns and root canal treatments using cutting-edge technology.',
    'services.emergency': 'Emergency Dentistry',
    'services.emergency.desc': 'Available for urgent situations. We help you regain comfort quickly.',
    'services.learnmore': 'Learn More',
    
    // Comfort
    'comfort.title': 'Why Patients Choose Us',
    'comfort.painFree': 'Pain-Free Procedures',
    'comfort.painFree.desc': 'Advanced anesthesia techniques for your maximum comfort',
    'comfort.atmosphere': 'Calming Atmosphere',
    'comfort.atmosphere.desc': 'Ambient music and aromatherapy for relaxation',
    'comfort.equipment': 'Premium Equipment',
    'comfort.equipment.desc': 'State-of-the-art dental technology',
    'comfort.staff': 'Friendly Staff',
    'comfort.staff.desc': 'Qualified and empathetic team',
    
    // Team
    'team.title': 'Our Team',
    'team.subtitle': 'Professionals dedicated to your care',
    
    // Testimonials
    'testimonials.title': 'What Our Patients Say',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'Do you accept insurance?',
    'faq.a1': 'Yes, we accept most medical insurance. Please contact us for details.',
    'faq.q2': 'How long does a consultation take?',
    'faq.a2': 'An initial consultation takes an average of 45-60 minutes.',
    'faq.q3': 'Do you offer financing options?',
    'faq.a3': 'Yes, we have partnerships with several financial institutions for flexible payment plans.',
    'faq.q4': 'How do I book an appointment?',
    'faq.a4': 'You can book online, by phone or via WhatsApp.',
    
    // CTA
    'cta.title': 'Ready for Your Perfect Smile?',
    'cta.subtitle': 'Book a consultation and discover the DentiCalm difference',
    'cta.button': 'Book Now',
    
    // Footer
    'footer.about': 'About Us',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.hours': 'Hours',
    'footer.address': 'Address',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.rights': 'All rights reserved',
    
    // Booking Modal
    'booking.title': 'Book Consultation',
    'booking.name': 'Full Name',
    'booking.email': 'Email',
    'booking.phone': 'Phone',
    'booking.service': 'Preferred Service',
    'booking.date': 'Preferred Date',
    'booking.time': 'Preferred Time',
    'booking.message': 'Message (optional)',
    'booking.submit': 'Submit Booking',
    'booking.select': 'Select...',
  },
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Servizi',
    'nav.gallery': 'Galleria',
    'nav.team': 'Team',
    'nav.contact': 'Contatto',
    'nav.book': 'Prenota',
    
    // Hero
    'hero.title': 'Il Tuo Sorriso Perfetto Inizia Qui',
    'hero.subtitle': "Un'esperienza dentale premium in un ambiente calmo e confortevole",
    'hero.cta': 'Prenota Consulto',
    'hero.rating': '4.9/5 da 250+ recensioni',
    
    // Services
    'services.title': 'I Nostri Servizi',
    'services.subtitle': 'Cure dentali complete su misura per le tue esigenze',
    'services.preventive': 'Odontoiatria Preventiva',
    'services.preventive.desc': 'Controlli regolari, pulizia professionale e trattamenti preventivi per una salute orale ottimale.',
    'services.cosmetic': 'Odontoiatria Estetica',
    'services.cosmetic.desc': 'Sbiancamento, faccette e allineamento per il sorriso dei tuoi sogni.',
    'services.restorative': 'Odontoiatria Restaurativa',
    'services.restorative.desc': 'Impianti, corone e devitalizzazioni con tecnologia all\'avanguardia.',
    'services.emergency': 'Emergenze Dentali',
    'services.emergency.desc': 'Disponibili per situazioni urgenti. Ti aiutiamo a ritrovare il comfort rapidamente.',
    'services.learnmore': 'Scopri di Più',
    
    // Comfort
    'comfort.title': 'Perché i Pazienti Ci Scelgono',
    'comfort.painFree': 'Procedure Indolori',
    'comfort.painFree.desc': 'Tecniche avanzate di anestesia per il tuo massimo comfort',
    'comfort.atmosphere': 'Atmosfera Rilassante',
    'comfort.atmosphere.desc': 'Musica ambient e aromaterapia per il relax',
    'comfort.equipment': 'Attrezzature Premium',
    'comfort.equipment.desc': 'Tecnologia dentale all\'avanguardia',
    'comfort.staff': 'Staff Cordiale',
    'comfort.staff.desc': 'Team qualificato ed empatico',
    
    // Team
    'team.title': 'Il Nostro Team',
    'team.subtitle': 'Professionisti dedicati alla tua cura',
    
    // Testimonials
    'testimonials.title': 'Cosa Dicono i Nostri Pazienti',
    
    // FAQ
    'faq.title': 'Domande Frequenti',
    'faq.q1': 'Accettate assicurazioni?',
    'faq.a1': 'Sì, accettiamo la maggior parte delle assicurazioni mediche. Contattaci per i dettagli.',
    'faq.q2': 'Quanto dura una consulenza?',
    'faq.a2': 'Una consulenza iniziale dura in media 45-60 minuti.',
    'faq.q3': 'Offrite opzioni di finanziamento?',
    'faq.a3': 'Sì, abbiamo partnership con diverse istituzioni finanziarie per piani di pagamento flessibili.',
    'faq.q4': 'Come posso prenotare?',
    'faq.a4': 'Puoi prenotare online, telefonicamente o tramite WhatsApp.',
    
    // CTA
    'cta.title': 'Pronto per il Tuo Sorriso Perfetto?',
    'cta.subtitle': 'Prenota una consulenza e scopri la differenza DentiCalm',
    'cta.button': 'Prenota Ora',
    
    // Footer
    'footer.about': 'Chi Siamo',
    'footer.services': 'Servizi',
    'footer.contact': 'Contatto',
    'footer.hours': 'Orari',
    'footer.address': 'Indirizzo',
    'footer.phone': 'Telefono',
    'footer.email': 'Email',
    'footer.rights': 'Tutti i diritti riservati',
    
    // Booking Modal
    'booking.title': 'Prenota Consulto',
    'booking.name': 'Nome Completo',
    'booking.email': 'Email',
    'booking.phone': 'Telefono',
    'booking.service': 'Servizio Preferito',
    'booking.date': 'Data Preferita',
    'booking.time': 'Ora Preferita',
    'booking.message': 'Messaggio (opzionale)',
    'booking.submit': 'Invia Prenotazione',
    'booking.select': 'Seleziona...',
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ro')

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
