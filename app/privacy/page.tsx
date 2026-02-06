import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            Legal
          </Badge>
          
          <h1 className="mb-4 font-serif text-4xl font-bold text-balance md:text-5xl">
            Politica de Confidențialitate
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Ultima actualizare: Ianuarie 2024
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <Card>
            <CardContent className="prose prose-slate max-w-none p-8">
              <h2>1. Introducere</h2>
              <p>
                DentiCalm ("noi", "al nostru" sau "clinica") respectă confidențialitatea pacienților și se angajează să protejeze datele personale în conformitate cu Regulamentul General privind Protecția Datelor (GDPR).
              </p>

              <h2>2. Datele pe Care le Colectăm</h2>
              <p>Colectăm următoarele tipuri de informații:</p>
              <ul>
                <li>Date de identificare (nume, prenume, CNP)</li>
                <li>Date de contact (adresă, telefon, email)</li>
                <li>Istoric medical și dentar</li>
                <li>Date privind tratamentele efectuate</li>
                <li>Imagini medicale (radiografii, fotografii dentare)</li>
              </ul>

              <h2>3. Cum Folosim Datele</h2>
              <p>Folosim datele dumneavoastră pentru:</p>
              <ul>
                <li>Furnizarea serviciilor medicale</li>
                <li>Menținerea evidenței medicale</li>
                <li>Comunicarea cu dumneavoastră</li>
                <li>Îmbunătățirea serviciilor noastre</li>
                <li>Conformarea cu obligațiile legale</li>
              </ul>

              <h2>4. Păstrarea Datelor</h2>
              <p>
                Păstrăm datele medicale conform legislației în vigoare - minimum 5 ani de la ultimul tratament. Alte date personale sunt păstrate doar cât timp este necesar pentru scopurile pentru care au fost colectate.
              </p>

              <h2>5. Drepturile Dumneavoastră</h2>
              <p>Aveți dreptul de a:</p>
              <ul>
                <li>Accesa datele personale</li>
                <li>Rectifica datele incorecte</li>
                <li>Șterge datele (în anumite condiții)</li>
                <li>Restricționa procesarea</li>
                <li>Portabilitatea datelor</li>
                <li>Obiecta la procesare</li>
              </ul>

              <h2>6. Securitatea Datelor</h2>
              <p>
                Implementăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor împotriva accesului neautorizat, pierderii sau distrugerii.
              </p>

              <h2>7. Contact</h2>
              <p>
                Pentru orice întrebări privind politica de confidențialitate, vă rugăm să ne contactați la:
                <br />
                Email: contact@denticalm.ro
                <br />
                Telefon: +40 721 234 567
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
