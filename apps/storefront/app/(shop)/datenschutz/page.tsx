import type { Metadata } from "next"
import Breadcrumbs from "@/components/navigation/Breadcrumbs"

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der JPS GmbH & Co. KG (Nagel Paul) – Informationen zum Umgang mit Ihren personenbezogenen Daten.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
}

export default function DatenschutzPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Datenschutz", href: "/datenschutz" }]} />
      </div>

      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary">Datenschutzerklärung</h1>
        <p className="mt-2 text-sm text-text-muted">Stand: Februar 2026</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-gray-700">
          <section>
            <h2 className="text-lg font-semibold text-primary">1. Verantwortlicher</h2>
            <p className="mt-3">
              JPS GmbH &amp; Co. KG<br />
              Musterstraße 1, 85xxx München-Umgebung<br />
              E-Mail: info@nagel-paul.de<br />
              Telefon: 089 / 904 29 28 0
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p className="mt-3">
              Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst.
              Diese Informationen (Server-Logfiles) beinhalten die Art des Webbrowsers, das verwendete
              Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und
              Ähnliches.
            </p>
            <p className="mt-3">Sie werden insbesondere zu folgenden Zwecken verarbeitet:</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website</li>
              <li>Sicherstellung einer komfortablen Nutzung unserer Website</li>
              <li>Auswertung der Systemsicherheit und -stabilität</li>
              <li>Weitere administrative Zwecke</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">3. Bestellungen und Kundenkonto</h2>
            <p className="mt-3">
              Bei einer Bestellung erheben wir Ihren Namen, Ihre Adresse, E-Mail-Adresse und
              Zahlungsinformationen. Diese Daten werden zur Vertragsabwicklung (Art. 6 Abs. 1 lit. b
              DSGVO) und zur Erfüllung gesetzlicher Aufbewahrungspflichten (Art. 6 Abs. 1 lit. c DSGVO)
              verarbeitet.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">4. Zahlungsdienstleister</h2>
            <p className="mt-3">
              Für die Zahlungsabwicklung nutzen wir die Dienste von Stripe, PayPal und Klarna.
              Dabei werden Ihre Zahlungsdaten direkt an den jeweiligen Zahlungsdienstleister
              übermittelt. Wir speichern keine Kreditkartennummern oder Bankdaten auf unseren Servern.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">5. Cookies</h2>
            <p className="mt-3">
              Unsere Website verwendet technisch notwendige Cookies, um die Grundfunktionen der
              Website sicherzustellen. Diese Cookies speichern keine personenbezogenen Daten.
              Darüber hinaus verwenden wir Cookies für den Warenkorb und die Sitzungsverwaltung.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">6. Ihre Rechte</h2>
            <p className="mt-3">Sie haben das Recht auf:</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-primary">7. Kontakt zum Datenschutz</h2>
            <p className="mt-3">
              Für Fragen zum Datenschutz erreichen Sie uns unter: info@nagel-paul.de
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}
