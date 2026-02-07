import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Kontakt – Nagel Paul | JPS GmbH & Co. KG",
  description:
    "Kontaktieren Sie Nagel Paul – Ihren Fachhändler für Befestigungstechnik seit über 40 Jahren. Telefonische Fachberatung, E-Mail oder Kontaktformular. Standort bei München.",
}

export default function KontaktPage() {
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
          <li className="font-medium text-[#1a1a1a]">Kontakt</li>
        </ol>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#1a1a1a] md:text-4xl">
          Kontakt
        </h1>
        <p className="mt-4 text-lg text-[#6b7280]">
          Sie haben Fragen zu unseren Produkten, benötigen eine Fachberatung
          oder möchten eine Bestellung aufgeben? Unser Team steht Ihnen gerne
          zur Verfügung.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              JPS GmbH &amp; Co. KG
            </h2>
            <p className="mt-1 text-sm text-[#6b7280]">
              Handelsmarke: Nagel Paul
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">
                  Anschrift
                </h3>
                <p className="mt-1 text-[#1a1a1a]">
                  JPS GmbH &amp; Co. KG
                  <br />
                  Musterstra&szlig;e 12
                  <br />
                  85748 Garching bei München
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">
                  Telefon
                </h3>
                <p className="mt-1">
                  <a
                    href="tel:+498912345678"
                    className="text-[#e94560] hover:underline"
                  >
                    +49 (0) 89 / 123 456 78
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">
                  E-Mail
                </h3>
                <p className="mt-1">
                  <a
                    href="mailto:info@nagel-paul.de"
                    className="text-[#e94560] hover:underline"
                  >
                    info@nagel-paul.de
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">
                  Fax
                </h3>
                <p className="mt-1 text-[#1a1a1a]">
                  +49 (0) 89 / 123 456 79
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-[#1a1a1a]">
                Öffnungszeiten
              </h3>
              <table className="mt-3 w-full text-sm">
                <tbody>
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="py-2 text-[#6b7280]">Montag – Freitag</td>
                    <td className="py-2 text-right font-medium text-[#1a1a1a]">
                      08:00 – 17:00 Uhr
                    </td>
                  </tr>
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="py-2 text-[#6b7280]">Samstag</td>
                    <td className="py-2 text-right font-medium text-[#1a1a1a]">
                      nach Vereinbarung
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 text-[#6b7280]">
                      Sonntag / Feiertage
                    </td>
                    <td className="py-2 text-right font-medium text-[#1a1a1a]">
                      geschlossen
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pickup Info */}
            <div className="mt-8 rounded-lg border border-[#e5e7eb] bg-[#f5f5f7] p-4">
              <h3 className="font-semibold text-[#1a1a1a]">
                Abholung vor Ort
              </h3>
              <p className="mt-1 text-sm text-[#6b7280]">
                Online bestellte Waren können nach Absprache an unserem Standort
                bei München abgeholt werden. Bitte vereinbaren Sie vorab einen
                Termin per Telefon oder E-Mail.
              </p>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div>
            <h2 className="text-xl font-bold text-[#1a1a1a]">
              Nachricht senden
            </h2>
            <p className="mt-2 text-sm text-[#6b7280]">
              Füllen Sie das Formular aus und wir melden uns in der Regel
              innerhalb eines Werktags bei Ihnen.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a]">
                  Name *
                </label>
                <div className="mt-1 h-10 rounded-lg border border-[#e5e7eb] bg-white" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a1a1a]">
                  Firma
                </label>
                <div className="mt-1 h-10 rounded-lg border border-[#e5e7eb] bg-white" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a1a1a]">
                  E-Mail *
                </label>
                <div className="mt-1 h-10 rounded-lg border border-[#e5e7eb] bg-white" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a1a1a]">
                  Telefon
                </label>
                <div className="mt-1 h-10 rounded-lg border border-[#e5e7eb] bg-white" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a1a1a]">
                  Betreff *
                </label>
                <div className="mt-1 h-10 rounded-lg border border-[#e5e7eb] bg-white" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a1a1a]">
                  Nachricht *
                </label>
                <div className="mt-1 h-32 rounded-lg border border-[#e5e7eb] bg-white" />
              </div>

              <p className="text-xs text-[#6b7280]">
                * Pflichtfelder. Ihre Daten werden gemäß unserer{" "}
                <Link
                  href="/datenschutz"
                  className="text-[#e94560] hover:underline"
                >
                  Datenschutzerklärung
                </Link>{" "}
                verarbeitet.
              </p>

              <div className="h-11 w-full rounded-lg bg-[#e94560] text-center text-sm font-semibold leading-[2.75rem] text-white">
                Nachricht senden
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTAs */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <Link
            href="/beratung"
            className="rounded-lg border border-[#e5e7eb] p-5 transition-colors hover:border-[#e94560]"
          >
            <h3 className="font-bold text-[#1a1a1a]">Fachberatung</h3>
            <p className="mt-1 text-sm text-[#6b7280]">
              Sie sind unsicher, welches Gerät oder welche Nägel Sie benötigen?
              Unsere Experten beraten Sie persönlich.
            </p>
            <span className="mt-2 inline-block text-sm font-medium text-[#e94560]">
              Zur Fachberatung →
            </span>
          </Link>
          <Link
            href="/faq"
            className="rounded-lg border border-[#e5e7eb] p-5 transition-colors hover:border-[#e94560]"
          >
            <h3 className="font-bold text-[#1a1a1a]">Häufige Fragen</h3>
            <p className="mt-1 text-sm text-[#6b7280]">
              Antworten auf die häufigsten Fragen zu Bestellung, Versand,
              Retouren und Kompatibilität.
            </p>
            <span className="mt-2 inline-block text-sm font-medium text-[#e94560]">
              Zu den FAQ →
            </span>
          </Link>
        </div>
      </div>
    </main>
  )
}
