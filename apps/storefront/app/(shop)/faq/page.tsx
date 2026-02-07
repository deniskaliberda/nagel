import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Häufige Fragen (FAQ) – Bestellung, Versand & Beratung | Nagel Paul",
  description:
    "Antworten auf häufig gestellte Fragen zu Bestellung, Versand, Retouren, Kompatibilität, LignoLoc Holznägeln und B2B-Konditionen bei Nagel Paul.",
}

const faqCategories = [
  {
    title: "Bestellung & Bezahlung",
    items: [
      {
        question: "Welche Zahlungsarten bieten Sie an?",
        answer:
          "Wir akzeptieren Kreditkarte (Visa, Mastercard), PayPal, SEPA-Lastschrift und Kauf auf Rechnung (über Klarna). Alle Zahlungen werden verschlüsselt und sicher abgewickelt.",
      },
      {
        question: "Kann ich als Firma auf Rechnung bestellen?",
        answer:
          "Ja. Für registrierte Geschäftskunden bieten wir den Kauf auf Rechnung mit einem Zahlungsziel von 14 Tagen. Bei regelmäßigen Bestellungen vereinbaren wir gerne individuelle Konditionen. Kontaktieren Sie uns für die Einrichtung eines B2B-Kundenkontos.",
      },
      {
        question: "Erhalte ich eine Auftragsbestätigung?",
        answer:
          "Ja. Nach Abschluss Ihrer Bestellung erhalten Sie umgehend eine Auftragsbestätigung per E-Mail mit allen Details zu Ihren bestellten Artikeln, der Lieferadresse und der gewählten Zahlungsart.",
      },
    ],
  },
  {
    title: "Versand & Lieferung",
    items: [
      {
        question: "Wie lange dauert die Lieferung?",
        answer:
          "Per DHL Standardversand dauert die Lieferung 2–3 Werktage. Mit DHL Express erhalten Sie Ihre Bestellung am nächsten Werktag (bei Bestellung bis 14:00 Uhr). Für schwere Artikel per Spedition rechnen Sie bitte mit 3–5 Werktagen.",
      },
      {
        question: "Ab welchem Bestellwert ist der Versand kostenlos?",
        answer:
          "Ab einem Bestellwert von 149,00 € versenden wir kostenfrei per DHL Standardversand innerhalb Deutschlands. Für Expressversand und Speditionslieferungen fallen separate Kosten an.",
      },
      {
        question: "Kann ich meine Bestellung selbst abholen?",
        answer:
          "Ja. Sie können Ihre Bestellung an unserem Standort im Raum München abholen. Bitte wählen Sie die Option \u201ESelbstabholung\u201C im Checkout und vereinbaren Sie einen Termin mit uns.",
      },
    ],
  },
  {
    title: "Rückgabe & Widerruf",
    items: [
      {
        question: "Wie lange kann ich Artikel zurückgeben?",
        answer:
          "Sie haben bei uns ein erweitertes Rückgaberecht von 30 Tagen ab Erhalt der Ware. Die Artikel müssen unbenutzt und in der Originalverpackung sein. Geöffnete Verbrauchsmaterialien wie Nägel oder Klammern können nicht zurückgenommen werden.",
      },
      {
        question: "Was kostet die Rücksendung?",
        answer:
          "Die Kosten der Rücksendung tragen Sie. Bei fehlerhafter Lieferung oder defekter Ware senden wir Ihnen selbstverständlich ein kostenfreies Retourenlabel zu. Melden Sie die Rücksendung bitte immer vorab unter retoure@nagel-paul.de an.",
      },
    ],
  },
  {
    title: "Produkte & Kompatibilität",
    items: [
      {
        question: "Welche Nägel passen in meinen Nagler?",
        answer:
          "Auf jeder Produktseite eines Naglers finden Sie den Tab \u201EKompatibilität\u201C mit allen passenden Befestigungsmitteln. Alternativ können Sie uns anrufen oder eine E-Mail mit dem Modellnamen Ihres Naglers senden – wir sagen Ihnen sofort, welche Nägel passen.",
      },
      {
        question: "Was sind LignoLoc Holznägel und wofür werden sie verwendet?",
        answer:
          "LignoLoc sind die weltweit ersten magazinierten Holznägel aus verdichtetem Buchenholz. Sie verursachen 66 % weniger CO₂ als Stahlnägel, erzeugen keine Wärmebrücken und sind bauaufsichtlich zugelassen. LignoLoc eignet sich für Holzrahmenbau, Dachlatten, Schalung und Dämmarbeiten. Wichtig: Sie benötigen einen speziellen LignoLoc-kompatiblen Nagler von Beck/FASCO.",
      },
      {
        question: "Kann ich LignoLoc Holznägel in jedem Nagler verwenden?",
        answer:
          "Nein. LignoLoc Holznägel benötigen spezielle Nagler von Beck/FASCO, die für den besonderen Eintriebsvorgang optimiert sind. Herkömmliche Nagler sind nicht kompatibel. Wir führen die passenden Geräte in unserem Shop – sprechen Sie uns an, wenn Sie unsicher sind.",
      },
    ],
  },
  {
    title: "B2B & Großbestellungen",
    items: [
      {
        question: "Bieten Sie Staffelpreise oder B2B-Konditionen?",
        answer:
          "Ja. Für Handwerksbetriebe, Baufirmen und Großabnehmer bieten wir individuelle Staffelpreise und Rahmenvereinbarungen. Kontaktieren Sie unsere Geschäftskundenbetreuung unter b2b@nagel-paul.de oder telefonisch für ein persönliches Angebot.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <main>
      {/* Breadcrumb */}
      <nav
        className="mx-auto max-w-4xl px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center gap-2 text-sm text-[#6b7280]">
          <li>
            <Link href="/" className="hover:text-[#1a1a1a]">
              Home
            </Link>
          </li>
          <li>
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </li>
          <li className="font-medium text-[#1a1a1a]">Häufige Fragen</li>
        </ol>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#1a1a1a] md:text-4xl">
          Häufige Fragen (FAQ)
        </h1>
        <p className="mt-4 text-lg text-[#6b7280]">
          Hier finden Sie Antworten auf die häufigsten Fragen rund um
          Bestellung, Versand, Rücksendung, Produktkompatibilität und mehr. Ist
          Ihre Frage nicht dabei? Kontaktieren Sie uns gerne direkt.
        </p>

        {/* FAQ Sections */}
        <div className="mt-10 space-y-10">
          {faqCategories.map((category) => (
            <section key={category.title}>
              <h2 className="text-xl font-bold text-[#1a1a1a]">
                {category.title}
              </h2>
              <div className="mt-4 space-y-3">
                {category.items.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-lg border border-[#e5e7eb] bg-white"
                  >
                    <summary className="flex cursor-pointer items-center justify-between p-4 text-left font-semibold text-[#1a1a1a] [&::-webkit-details-marker]:hidden">
                      {item.question}
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-[#6b7280] transition-transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <p className="px-4 pb-4 text-sm text-[#6b7280]">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Still have questions */}
        <section className="mt-12 rounded-lg bg-[#f5f5f7] p-6 text-center sm:p-8">
          <h2 className="text-xl font-bold text-[#1a1a1a]">
            Ihre Frage war nicht dabei?
          </h2>
          <p className="mt-2 text-[#6b7280]">
            Unser kompetentes Team hilft Ihnen gerne weiter – persönlich und
            mit über 40 Jahren Erfahrung in der Befestigungstechnik.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-lg bg-[#e94560] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c81e45]"
            >
              Kontakt aufnehmen
            </Link>
            <Link
              href="/beratung"
              className="inline-flex items-center justify-center rounded-lg border-2 border-[#1a1a1a] px-6 py-3 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a] hover:text-white"
            >
              Fachberatung anfordern
            </Link>
          </div>
        </section>

        {/* Quick Links */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <Link
            href="/versand"
            className="rounded-lg border border-[#e5e7eb] p-4 text-center transition-colors hover:border-[#e94560]"
          >
            <h3 className="font-semibold text-[#1a1a1a]">Versandinfos</h3>
            <p className="mt-1 text-xs text-[#6b7280]">
              Lieferzeiten &amp; Kosten
            </p>
          </Link>
          <Link
            href="/rueckgabe"
            className="rounded-lg border border-[#e5e7eb] p-4 text-center transition-colors hover:border-[#e94560]"
          >
            <h3 className="font-semibold text-[#1a1a1a]">Rückgabe</h3>
            <p className="mt-1 text-xs text-[#6b7280]">
              Retouren &amp; Reklamation
            </p>
          </Link>
          <Link
            href="/widerruf"
            className="rounded-lg border border-[#e5e7eb] p-4 text-center transition-colors hover:border-[#e94560]"
          >
            <h3 className="font-semibold text-[#1a1a1a]">Widerruf</h3>
            <p className="mt-1 text-xs text-[#6b7280]">
              Gesetzliche Widerrufsbelehrung
            </p>
          </Link>
        </div>
      </div>
    </main>
  )
}
