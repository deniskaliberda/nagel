import type { Metadata } from "next"
import Breadcrumbs from "@/components/navigation/Breadcrumbs"

export const metadata: Metadata = {
  title: "Kontakt – Fachberatung & Kundenservice",
  description:
    "Kontaktieren Sie Nagel Paul für Fachberatung rund um Nagler, Befestigungstechnik und LignoLoc. Telefonisch, per E-Mail oder persönlich in München.",
  alternates: { canonical: "/kontakt" },
}

const CONTACT_CHANNELS = [
  {
    icon: "phone",
    title: "Telefon",
    primary: "089 / 904 29 28 0",
    secondary: "Mo – Fr: 8:00 – 17:00 Uhr",
    description: "Unsere Fachberater helfen Ihnen bei der Auswahl des richtigen Geräts und der passenden Befestigungsmittel.",
  },
  {
    icon: "mail",
    title: "E-Mail",
    primary: "info@nagel-paul.de",
    secondary: "Antwort innerhalb von 24 Stunden",
    description: "Schreiben Sie uns – gerne auch mit Fotos Ihres Projekts für eine gezielte Empfehlung.",
  },
  {
    icon: "location",
    title: "Vor Ort",
    primary: "JPS GmbH & Co. KG",
    secondary: "Nähe München – nach Vereinbarung",
    description: "Besuchen Sie uns für eine persönliche Beratung und sehen Sie unsere Geräte in Aktion.",
  },
]

function ContactIcon({ type }: { type: string }) {
  switch (type) {
    case "phone":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      )
    case "mail":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
        </svg>
      )
    case "location":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    default:
      return null
  }
}

export default function KontaktPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Kontakt", href: "/kontakt" }]} />
      </div>

      {/* Hero */}
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">Kontakt & Fachberatung</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Seit über 40 Jahren beraten wir Handwerker und Profis bei der Wahl der richtigen
            Befestigungstechnik. Sprechen Sie mit unseren Fachexperten.
          </p>
        </div>
      </section>

      {/* Contact channels */}
      <section className="bg-bg-alt">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CONTACT_CHANNELS.map((channel) => (
              <div
                key={channel.title}
                className="rounded-xl border border-border bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <ContactIcon type={channel.icon} />
                </div>
                <h2 className="text-lg font-semibold text-primary">{channel.title}</h2>
                <p className="mt-2 text-lg font-medium text-accent">{channel.primary}</p>
                <p className="mt-1 text-sm text-text-muted">{channel.secondary}</p>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {channel.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary">Schreiben Sie uns</h2>
          <p className="mt-2 text-text-muted">
            Beschreiben Sie Ihr Projekt oder Ihre Frage – wir melden uns schnellstmöglich bei Ihnen.
          </p>

          <form className="mt-8 space-y-6" action="/api/contact" method="POST">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-primary">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-border px-4 py-2.5 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="Max Mustermann"
                />
              </div>
              <div>
                <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-primary">
                  Firma
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full rounded-lg border border-border px-4 py-2.5 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="Ihre Firma (optional)"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-primary">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-border px-4 py-2.5 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="ihre@email.de"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-primary">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full rounded-lg border border-border px-4 py-2.5 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="Ihre Telefonnummer (optional)"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-primary">
                Betreff *
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full rounded-lg border border-border px-4 py-2.5 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              >
                <option value="">Bitte wählen</option>
                <option value="beratung">Produktberatung</option>
                <option value="angebot">Angebotsanfrage</option>
                <option value="bestellung">Frage zur Bestellung</option>
                <option value="reklamation">Reklamation / Rückgabe</option>
                <option value="lignoloc">LignoLoc Beratung</option>
                <option value="sonstiges">Sonstiges</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-primary">
                Nachricht *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full rounded-lg border border-border px-4 py-2.5 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="Beschreiben Sie Ihr Anliegen..."
              />
            </div>

            <div>
              <button
                type="submit"
                className="rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2"
              >
                Nachricht senden
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="border-t border-border bg-bg-alt">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-bold text-primary">Häufige Fragen</h2>
            <p className="mt-2 text-text-muted">
              Vielleicht finden Sie die Antwort schon in unserer Fachberatung.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-border bg-white p-6 text-left">
                <h3 className="font-semibold text-primary">Welcher Nagler passt zu mir?</h3>
                <p className="mt-2 text-sm text-text-muted">
                  Das hängt von Ihrer Anwendung ab. Nutzen Sie unseren Anwendungsberater oder rufen Sie uns an.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-white p-6 text-left">
                <h3 className="font-semibold text-primary">Welche Nägel passen in mein Gerät?</h3>
                <p className="mt-2 text-sm text-text-muted">
                  Auf jeder Produktseite finden Sie kompatible Befestigungsmittel. Oder fragen Sie uns direkt.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-white p-6 text-left">
                <h3 className="font-semibold text-primary">Was ist LignoLoc?</h3>
                <p className="mt-2 text-sm text-text-muted">
                  LignoLoc sind Holznägel aus Buchenholz – nachhaltig, ohne Wärmebrücken, bauaufsichtlich zugelassen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
