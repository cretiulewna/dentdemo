import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            Legal
          </Badge>
          
          <h1 className="mb-4 font-serif text-4xl font-bold text-balance md:text-5xl">
            Termeni și Condiții
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
              <h2>1. Acceptarea Termenilor</h2>
              <p>
                Prin utilizarea serviciilor DentiCalm, acceptați acești termeni și condiții în totalitate. Dacă nu sunteți de acord cu oricare dintre termeni, vă rugăm să nu utilizați serviciile noastre.
              </p>

              <h2>2. Servicii Medicale</h2>
              <p>
                DentiCalm oferă servicii stomatologice profesionale de înaltă calitate. Toate tratamentele sunt efectuate de medici autorizați, conform standardelor medicale în vigoare.
              </p>

              <h2>3. Programări</h2>
              <ul>
                <li>Programările se fac telefonic, online sau prin WhatsApp</li>
                <li>Recomandăm confirmarea programării cu 24 ore înainte</li>
                <li>Anulările trebuie făcute cu minimum 24 ore înainte</li>
                <li>Anulările repetate pot duce la refuzul programărilor viitoare</li>
              </ul>

              <h2>4. Plăți și Tarife</h2>
              <ul>
                <li>Tarifele sunt afișate la recepție și comunicate înainte de tratament</li>
                <li>Plata se poate face cash, card sau transfer bancar</li>
                <li>Acceptăm majoritatea asigurărilor medicale</li>
                <li>Ofertele și promoțiile sunt valabile în condițiile specificate</li>
              </ul>

              <h2>5. Politica de Anulare</h2>
              <p>
                Anulările făcute cu mai puțin de 24 ore înainte sau neprezentarea la programare pot atrage o taxă de anulare de până la 50% din valoarea tratamentului planificat.
              </p>

              <h2>6. Consimțământ Informat</h2>
              <p>
                Înainte de orice tratament, veți primi informații complete despre procedura propusă, alternative, riscuri și beneficii. Tratamentul va începe doar după semnarea consimțământului informat.
              </p>

              <h2>7. Rezultate și Garanții</h2>
              <p>
                Deși ne străduim să obținem cele mai bune rezultate, rezultatele medicale pot varia în funcție de factori individuali. Oferim garanție pentru lucrările protetice conform condițiilor specificate în contractul de tratament.
              </p>

              <h2>8. Confidențialitate</h2>
              <p>
                Toate informațiile medicale sunt confidențiale și protejate conform GDPR. Pentru detalii, consultați Politica de Confidențialitate.
              </p>

              <h2>9. Răspundere</h2>
              <p>
                Clinica își asumă responsabilitatea pentru serviciile medicale furnizate în limitele prevăzute de lege. Nu suntem responsabili pentru complicații apărute din nerespectarea instrucțiunilor post-tratament.
              </p>

              <h2>10. Modificări</h2>
              <p>
                Ne rezervăm dreptul de a modifica acești termeni. Modificările vor fi comunicate pe website și vor intra în vigoare de la data publicării.
              </p>

              <h2>11. Contact</h2>
              <p>
                Pentru întrebări despre acești termeni:
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
