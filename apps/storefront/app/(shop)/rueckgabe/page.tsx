import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Rückgabe & Reklamation – 30 Tage Rückgaberecht | Nagel Paul",
  description:
    "Einfache Rückgabe innerhalb von 30 Tagen. Informationen zum Rückgabeprozess, Reklamationen und Umtausch bei Nagel Paul – Ihrem Fachhändler für Befestigungstechnik.",
}

export default function RueckgabePage() {
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
          <li className="font-medium text-[#1a1a1a]">
            Rückgabe &amp; Reklamation
          </li>
        </ol>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#1a1a1a] md:text-4xl">
          Rückgabe &amp; Reklamation
        </h1>
        <p className="mt-4 text-lg text-[#6b7280]">
          Ihre Zufriedenheit ist uns wichtig. Sollte ein Produkt nicht Ihren
          Erwartungen entsprechen oder beschädigt ankommen, finden Sie hier alle
          Informationen zur Rückgabe und Reklamation.
        </p>

        {/* 30-day policy highlight */}
        <div className="mt-8 rounded-lg bg-[#f5f5f7] p-6 text-center">
          <p className="text-4xl font-bold text-[#e94560]">30 Tage</p>
          <p className="mt-1 text-lg font-semibold text-[#1a1a1a]">
            Rückgaberecht
          </p>
          <p className="mt-2 text-sm text-[#6b7280]">
            Sie können unbenutzte und originalverpackte Artikel innerhalb von
            30 Tagen nach Erhalt an uns zurücksenden.
          </p>
        </div>

        {/* Return Process */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#1a1a1a]">
            So funktioniert die Rückgabe
          </h2>
          <div className="mt-6 space-y-6">
            {[
              {
                step: "1",
                title: "Rücksendung anmelden",
                text: "Kontaktieren Sie uns per E-Mail an retoure@nagel-paul.de oder telefonisch unter +49 (0) 89 / 123 456 78. Nennen Sie Ihre Bestellnummer und den Grund der Rücksendung. Wir senden Ihnen eine Rücksende-Autorisierung (RMA-Nummer) zu.",
              },
              {
                step: "2",
                title: "Ware verpacken",
                text: "Verpacken Sie den Artikel sorgfältig in der Originalverpackung, sofern möglich. Legen Sie die Rücksende-Autorisierung bei. Die Ware muss unbenutzt, vollständig und im Originalzustand sein.",
              },
              {
                step: "3",
                title: "Paket versenden",
                text: "Senden Sie das Paket an die Adresse, die wir Ihnen in der Rücksende-Bestätigung mitteilen. Wir empfehlen den Versand als versichertes Paket, da Sie das Transportrisiko tragen. Bewahren Sie den Einlieferungsbeleg auf.",
              },
              {
                step: "4",
                title: "Erstattung erhalten",
                text: "Nach Eingang und Prüfung der Retoure erstatten wir den Kaufpreis innerhalb von 14 Tagen auf Ihr ursprüngliches Zahlungsmittel. Über die Erstattung werden Sie per E-Mail informiert.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#e94560] text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a1a]">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#6b7280]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conditions */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#1a1a1a]">
            Rückgabebedingungen
          </h2>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-[#e5e7eb] p-4">
              <h3 className="font-semibold text-[#1a1a1a]">
                Rückgabefrist
              </h3>
              <p className="mt-1 text-sm text-[#6b7280]">
                Die Rückgabe ist innerhalb von 30 Tagen ab Erhalt der Ware
                möglich. Diese Frist geht über das gesetzliche
                Widerrufsrecht von 14 Tagen hinaus – als Service für unsere
                Kunden.
              </p>
            </div>

            <div className="rounded-lg border border-[#e5e7eb] p-4">
              <h3 className="font-semibold text-[#1a1a1a]">
                Zustand der Ware
              </h3>
              <p className="mt-1 text-sm text-[#6b7280]">
                Die Ware muss unbenutzt, unbeschädigt und in der
                Originalverpackung sein. Geöffnete Verpackungen von
                Befestigungsmitteln (Nägel, Klammern, Schrauben) können aus
                hygienischen und sicherheitstechnischen Gründen nicht
                zurückgenommen werden.
              </p>
            </div>

            <div className="rounded-lg border border-[#e5e7eb] p-4">
              <h3 className="font-semibold text-[#1a1a1a]">
                Versandkosten bei Rücksendung
              </h3>
              <p className="mt-1 text-sm text-[#6b7280]">
                Die Kosten der Rücksendung tragen Sie. Bei fehlerhafter oder
                falscher Lieferung unsererseits übernehmen wir
                selbstverständlich die Rücksendekosten und senden Ihnen ein
                vorfrankiertes Retourenlabel zu.
              </p>
            </div>

            <div className="rounded-lg border border-[#e5e7eb] p-4">
              <h3 className="font-semibold text-[#1a1a1a]">
                Ausnahmen
              </h3>
              <p className="mt-1 text-sm text-[#6b7280]">
                Von der Rückgabe ausgeschlossen sind: individuell angefertigte
                oder zugeschnittene Waren, geöffnete Verbrauchsmaterialien
                sowie Artikel mit gebrochenem Siegel (z.B. aus Sicherheits-
                oder Hygienegründen versiegelte Produkte).
              </p>
            </div>
          </div>
        </section>

        {/* Complaints */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#1a1a1a]">
            Reklamation &amp; Gewährleistung
          </h2>
          <p className="mt-3 text-[#6b7280]">
            Bei defekten oder beschädigten Artikeln gelten Ihre gesetzlichen
            Gewährleistungsrechte (24 Monate ab Kaufdatum). Viele unserer
            Markenprodukte bieten darüber hinaus erweiterte
            Herstellergarantien.
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg bg-[#f5f5f7] p-4">
              <h3 className="font-semibold text-[#1a1a1a]">
                Transportschäden
              </h3>
              <p className="mt-1 text-sm text-[#6b7280]">
                Bitte prüfen Sie Ihre Lieferung bei Erhalt. Dokumentieren Sie
                eventuelle Transportschäden möglichst sofort mit Fotos und
                melden Sie diese innerhalb von 7 Tagen an uns. So können wir
                den Schaden schnell und unkompliziert regulieren.
              </p>
            </div>

            <div className="rounded-lg bg-[#f5f5f7] p-4">
              <h3 className="font-semibold text-[#1a1a1a]">
                Defekte Geräte
              </h3>
              <p className="mt-1 text-sm text-[#6b7280]">
                Bei einem Defekt innerhalb der Gewährleistungszeit reparieren
                oder ersetzen wir das Gerät. Kontaktieren Sie unseren
                Kundenservice mit Ihrer Bestellnummer und einer Beschreibung
                des Defekts. Wir klären gemeinsam die schnellste Lösung.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-10 rounded-lg border-l-4 border-[#e94560] bg-[#f5f5f7] p-5">
          <h3 className="font-bold text-[#1a1a1a]">
            Rücksendung anmelden
          </h3>
          <p className="mt-2 text-sm text-[#6b7280]">
            Kontaktieren Sie uns, um eine Rücksendung oder Reklamation
            anzumelden. Bitte halten Sie Ihre Bestellnummer bereit.
          </p>
          <div className="mt-3 space-y-1 text-sm">
            <p>
              <span className="text-[#6b7280]">E-Mail: </span>
              <a
                href="mailto:retoure@nagel-paul.de"
                className="font-medium text-[#e94560] hover:underline"
              >
                retoure@nagel-paul.de
              </a>
            </p>
            <p>
              <span className="text-[#6b7280]">Telefon: </span>
              <a
                href="tel:+498912345678"
                className="font-medium text-[#e94560] hover:underline"
              >
                +49 (0) 89 / 123 456 78
              </a>
            </p>
          </div>
        </section>

        {/* Links */}
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link
            href="/widerruf"
            className="text-[#e94560] hover:underline"
          >
            Widerrufsbelehrung →
          </Link>
          <Link href="/agb" className="text-[#e94560] hover:underline">
            Allgemeine Geschäftsbedingungen →
          </Link>
        </div>
      </div>
    </main>
  )
}
