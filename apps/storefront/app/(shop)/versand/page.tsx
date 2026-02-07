import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Versand & Lieferung – Kostenloser Versand ab 149€ | Nagel Paul",
  description:
    "Versandinformationen bei Nagel Paul: Kostenloser Versand ab 149€, DHL Standard in 2-3 Werktagen, Express-Versand, Palettenversand für schwere Geräte und Abholung bei München.",
}

export default function VersandPage() {
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
          <li className="font-medium text-[#1a1a1a]">Versand &amp; Lieferung</li>
        </ol>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#1a1a1a] md:text-4xl">
          Versand &amp; Lieferung
        </h1>
        <p className="mt-4 text-lg text-[#6b7280]">
          Wir versenden deutschlandweit schnell und zuverlässig. Bei
          Bestellungen über 149,00 € übernehmen wir die Versandkosten für Sie.
        </p>

        {/* Free Shipping Banner */}
        <div className="mt-8 rounded-lg bg-[#e94560] p-4 text-center text-white">
          <p className="text-lg font-bold">
            Kostenloser Versand ab 149,00 € Bestellwert
          </p>
          <p className="mt-1 text-sm text-white/80">
            Gilt für Standardversand innerhalb Deutschlands
          </p>
        </div>

        {/* Shipping Options */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#1a1a1a]">
            Versandoptionen
          </h2>

          <div className="mt-6 space-y-4">
            {/* Standard */}
            <div className="rounded-lg border border-[#e5e7eb] p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-[#1a1a1a]">
                    DHL Standardversand
                  </h3>
                  <p className="mt-1 text-sm text-[#6b7280]">
                    Lieferzeit: 2–3 Werktage
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#1a1a1a]">5,90 €</p>
                  <p className="text-xs text-[#6b7280]">
                    ab 149 € kostenfrei
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm text-[#6b7280]">
                Unser Standardversand erfolgt über DHL. Sie erhalten eine
                Sendungsverfolgungsnummer per E-Mail, sobald Ihr Paket
                unterwegs ist. Die Zustellung erfolgt an Werktagen (Mo–Sa).
              </p>
            </div>

            {/* Express */}
            <div className="rounded-lg border border-[#e5e7eb] p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-[#1a1a1a]">
                    DHL Express
                  </h3>
                  <p className="mt-1 text-sm text-[#6b7280]">
                    Lieferzeit: 1 Werktag (Bestellung bis 14:00 Uhr)
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#1a1a1a]">12,90 €</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-[#6b7280]">
                Für eilige Bestellungen: Bei Auftragseingang bis 14:00 Uhr
                (werktags) versenden wir am selben Tag. Die Zustellung erfolgt
                am nächsten Werktag. Ideal, wenn das Werkzeug dringend auf der
                Baustelle gebraucht wird.
              </p>
            </div>

            {/* Pallet Shipping */}
            <div className="rounded-lg border border-[#e5e7eb] p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-[#1a1a1a]">
                    Palettenversand / Spedition
                  </h3>
                  <p className="mt-1 text-sm text-[#6b7280]">
                    Lieferzeit: 3–5 Werktage
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#1a1a1a]">auf Anfrage</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-[#6b7280]">
                Für schwere oder sperrige Waren (z.B. Kompressoren, große Mengen
                Befestigungsmittel) versenden wir per Spedition auf Palette. Die
                Zustellung erfolgt frei Bordsteinkante. Die genauen Kosten
                werden im Bestellprozess angezeigt oder auf Anfrage kalkuliert.
              </p>
            </div>

            {/* Pickup */}
            <div className="rounded-lg border border-[#e5e7eb] p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-[#1a1a1a]">
                    Abholung bei München
                  </h3>
                  <p className="mt-1 text-sm text-[#6b7280]">
                    Nach Terminvereinbarung
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#1a1a1a]">kostenfrei</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-[#6b7280]">
                Sie können Ihre Bestellung auch an unserem Standort im Raum
                München abholen. Bitte wählen Sie diese Option im Checkout und
                vereinbaren Sie vorab einen Abholtermin per Telefon oder E-Mail.
                So sparen Sie Versandkosten und haben Ihre Ware sofort in der
                Hand.
              </p>
            </div>
          </div>
        </section>

        {/* Delivery Info */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#1a1a1a]">
            Wichtige Hinweise zur Lieferung
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-[#f5f5f7] p-4">
              <h3 className="font-semibold text-[#1a1a1a]">Liefergebiet</h3>
              <p className="mt-1 text-sm text-[#6b7280]">
                Wir liefern ausschließlich innerhalb Deutschlands. Für
                Lieferungen nach Österreich oder in die Schweiz kontaktieren
                Sie uns bitte direkt für ein individuelles Angebot.
              </p>
            </div>

            <div className="rounded-lg bg-[#f5f5f7] p-4">
              <h3 className="font-semibold text-[#1a1a1a]">
                Sendungsverfolgung
              </h3>
              <p className="mt-1 text-sm text-[#6b7280]">
                Sobald Ihr Paket unser Lager verlässt, erhalten Sie per E-Mail
                eine Versandbestätigung mit DHL-Tracking-Nummer. Damit können
                Sie Ihre Sendung jederzeit online verfolgen.
              </p>
            </div>

            <div className="rounded-lg bg-[#f5f5f7] p-4">
              <h3 className="font-semibold text-[#1a1a1a]">
                Teillieferungen
              </h3>
              <p className="mt-1 text-sm text-[#6b7280]">
                Bei Bestellungen mit Artikeln unterschiedlicher Verfügbarkeit
                behalten wir uns Teillieferungen vor. Es entstehen Ihnen
                dadurch keine zusätzlichen Versandkosten.
              </p>
            </div>

            <div className="rounded-lg bg-[#f5f5f7] p-4">
              <h3 className="font-semibold text-[#1a1a1a]">
                Lieferung an Packstationen
              </h3>
              <p className="mt-1 text-sm text-[#6b7280]">
                Eine Lieferung an DHL Packstationen ist grundsätzlich möglich,
                sofern die Paketmaße es zulassen. Bei schweren oder sperrigen
                Artikeln empfehlen wir die Zustellung an Ihre Haus- oder
                Firmenadresse.
              </p>
            </div>
          </div>
        </section>

        {/* Cost Table */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#1a1a1a]">
            Versandkosten im Überblick
          </h2>
          <div className="mt-4 overflow-hidden rounded-lg border border-[#e5e7eb]">
            <table className="w-full text-sm">
              <thead className="bg-[#f5f5f7]">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-[#1a1a1a]">
                    Versandart
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-[#1a1a1a]">
                    Lieferzeit
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-[#1a1a1a]">
                    Kosten
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#e5e7eb]">
                  <td className="px-4 py-3 text-[#1a1a1a]">DHL Standard</td>
                  <td className="px-4 py-3 text-[#6b7280]">2–3 Werktage</td>
                  <td className="px-4 py-3 text-right text-[#1a1a1a]">
                    5,90 €
                  </td>
                </tr>
                <tr className="border-t border-[#e5e7eb]">
                  <td className="px-4 py-3 text-[#1a1a1a]">DHL Express</td>
                  <td className="px-4 py-3 text-[#6b7280]">1 Werktag</td>
                  <td className="px-4 py-3 text-right text-[#1a1a1a]">
                    12,90 €
                  </td>
                </tr>
                <tr className="border-t border-[#e5e7eb]">
                  <td className="px-4 py-3 text-[#1a1a1a]">Spedition</td>
                  <td className="px-4 py-3 text-[#6b7280]">3–5 Werktage</td>
                  <td className="px-4 py-3 text-right text-[#1a1a1a]">
                    auf Anfrage
                  </td>
                </tr>
                <tr className="border-t border-[#e5e7eb]">
                  <td className="px-4 py-3 text-[#1a1a1a]">
                    Selbstabholung
                  </td>
                  <td className="px-4 py-3 text-[#6b7280]">
                    nach Vereinbarung
                  </td>
                  <td className="px-4 py-3 text-right text-[#1a1a1a]">
                    kostenfrei
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-[#6b7280]">
            Alle Preise inkl. MwSt. Ab 149,00 € Bestellwert entfallen die
            Versandkosten für den DHL Standardversand.
          </p>
        </section>

        {/* Contact */}
        <section className="mt-10 rounded-lg border border-[#e5e7eb] bg-[#f5f5f7] p-5">
          <h3 className="font-bold text-[#1a1a1a]">
            Fragen zum Versand?
          </h3>
          <p className="mt-2 text-sm text-[#6b7280]">
            Unser Kundenservice hilft Ihnen gerne weiter – bei Fragen zur
            Lieferzeit, Sendungsverfolgung oder besonderen Versandwünschen.
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <a
              href="tel:+498912345678"
              className="font-medium text-[#e94560] hover:underline"
            >
              +49 (0) 89 / 123 456 78
            </a>
            <a
              href="mailto:info@nagel-paul.de"
              className="font-medium text-[#e94560] hover:underline"
            >
              info@nagel-paul.de
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
