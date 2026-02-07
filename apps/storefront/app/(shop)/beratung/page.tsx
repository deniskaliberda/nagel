import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Fachberatung – Über 40 Jahre Erfahrung in Befestigungstechnik | Nagel Paul",
  description:
    "Professionelle Fachberatung für Nagler, Tacker und Befestigungsmittel. Unsere Experten beraten Sie telefonisch und per E-Mail – seit über 40 Jahren Ihr Partner für Befestigungstechnik.",
}

export default function BeratungPage() {
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
          <li className="font-medium text-[#1a1a1a]">Fachberatung</li>
        </ol>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#1a1a1a] md:text-4xl">
          Fachberatung
        </h1>
        <p className="mt-4 text-lg text-[#6b7280]">
          Bei Nagel Paul erhalten Sie nicht einfach nur Produkte – Sie bekommen
          die Erfahrung und das Fachwissen aus über 40 Jahren Befestigungstechnik
          dazu. Unser Beratungsteam besteht aus ausgebildeten Fachleuten, die
          selbst aus dem Handwerk kommen und jede Anwendung kennen.
        </p>

        {/* Why Us */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#1a1a1a]">
            Warum unsere Beratung den Unterschied macht
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "40+ Jahre Erfahrung",
                text: "Seit über vier Jahrzehnten sind wir auf Befestigungstechnik spezialisiert. Wir kennen jede Maschine, jeden Nagel und jede Anwendung – vom Dachstuhl bis zum Möbelbau.",
              },
              {
                title: "Praxiswissen aus dem Handwerk",
                text: "Unsere Berater haben selbst auf der Baustelle gearbeitet. Wir verstehen nicht nur die Technik, sondern auch die praktischen Anforderungen Ihres Gewerks.",
              },
              {
                title: "Herstellerunabhängig",
                text: "Wir führen alle relevanten Marken und empfehlen Ihnen immer das Produkt, das am besten zu Ihrer Anwendung passt – nicht das mit der höchsten Marge.",
              },
              {
                title: "Kompatibilitätsgarantie",
                text: "Nagler und Nägel müssen zusammenpassen. Wir stellen sicher, dass Sie die richtigen Befestigungsmittel für Ihr Gerät erhalten – jedes Mal.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-[#e5e7eb] p-5"
              >
                <h3 className="font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#6b7280]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Specialties */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#1a1a1a]">
            Unsere Beratungsschwerpunkte
          </h2>
          <ul className="mt-4 space-y-3">
            {[
              "Auswahl des richtigen Naglers oder Tackers für Ihre Anwendung (Druckluft, Akku oder Gas)",
              "Kompatible Befestigungsmittel: Welcher Nagel, welche Klammer passt in welches Gerät?",
              "LignoLoc Holznägel: Einsatzmöglichkeiten, Vorteile und Geräteanforderungen",
              "Gewerke-spezifische Empfehlungen für Zimmerer, Dachdecker, Trockenbauer, Schreiner und Bodenleger",
              "B2B-Konditionen und Rahmenvereinbarungen für Handwerksbetriebe und Baufirmen",
              "Druckluftsysteme: Kompressorauswahl, Schlauchsysteme und Kupplungen",
              "Ersatzteil- und Reparaturberatung für alle geführten Marken",
              "Normen und Zulassungen: Welche Befestigungsmittel sind für Ihre Anwendung zugelassen?",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#e94560]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[#1a1a1a]">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact Options */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#1a1a1a]">
            So erreichen Sie unsere Fachberatung
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-[#e5e7eb] bg-[#f5f5f7] p-5 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e94560]/10">
                <svg
                  className="h-6 w-6 text-[#e94560]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="mt-3 font-bold text-[#1a1a1a]">Telefon</h3>
              <p className="mt-1 text-sm text-[#6b7280]">
                Schnell und direkt
              </p>
              <a
                href="tel:+498912345678"
                className="mt-2 inline-block font-medium text-[#e94560] hover:underline"
              >
                +49 (0) 89 / 123 456 78
              </a>
              <p className="mt-1 text-xs text-[#6b7280]">
                Mo–Fr, 08:00–17:00 Uhr
              </p>
            </div>

            <div className="rounded-lg border border-[#e5e7eb] bg-[#f5f5f7] p-5 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e94560]/10">
                <svg
                  className="h-6 w-6 text-[#e94560]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mt-3 font-bold text-[#1a1a1a]">E-Mail</h3>
              <p className="mt-1 text-sm text-[#6b7280]">
                Ausführlich anfragen
              </p>
              <a
                href="mailto:beratung@nagel-paul.de"
                className="mt-2 inline-block font-medium text-[#e94560] hover:underline"
              >
                beratung@nagel-paul.de
              </a>
              <p className="mt-1 text-xs text-[#6b7280]">
                Antwort innerhalb eines Werktags
              </p>
            </div>

            <div className="rounded-lg border border-[#e5e7eb] bg-[#f5f5f7] p-5 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e94560]/10">
                <svg
                  className="h-6 w-6 text-[#e94560]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-3 font-bold text-[#1a1a1a]">Vor Ort</h3>
              <p className="mt-1 text-sm text-[#6b7280]">
                Persönlich bei München
              </p>
              <p className="mt-2 font-medium text-[#1a1a1a]">
                Nach Terminvereinbarung
              </p>
              <p className="mt-1 text-xs text-[#6b7280]">
                Produkte ansehen und testen
              </p>
            </div>
          </div>
        </section>

        {/* Tip */}
        <section className="mt-12 rounded-lg border-l-4 border-[#e94560] bg-[#f5f5f7] p-5">
          <h3 className="font-bold text-[#1a1a1a]">
            Tipp: Bereiten Sie diese Infos vor
          </h3>
          <p className="mt-2 text-sm text-[#6b7280]">
            Damit wir Ihnen schnell und gezielt helfen können, halten Sie bitte
            folgende Informationen bereit:
          </p>
          <ul className="mt-3 space-y-1 text-sm text-[#6b7280]">
            <li>
              – Welche Anwendung planen Sie? (z.B. Dachlatten nageln, Parkett
              verlegen)
            </li>
            <li>– Welches Material soll befestigt werden? (Holz, Gipskarton, Dämmung)</li>
            <li>– Materialstärke und Unterkonstruktion</li>
            <li>
              – Falls vorhanden: Welche Geräte besitzen Sie bereits?
              (Hersteller, Modell)
            </li>
            <li>– Geschätzter Bedarf (Stückzahl / Mengen)</li>
          </ul>
        </section>

        {/* B2B CTA */}
        <section className="mt-12 rounded-lg bg-[#1a1a2e] p-6 text-white sm:p-8">
          <h2 className="text-xl font-bold">B2B-Kunden &amp; Großabnehmer</h2>
          <p className="mt-2 text-sm text-gray-300">
            Handwerksbetriebe und Baufirmen profitieren bei Nagel Paul von
            individuellen Konditionen, Rahmenvereinbarungen und einem festen
            Ansprechpartner. Sprechen Sie uns an – wir erstellen Ihnen gerne ein
            maßgeschneidertes Angebot.
          </p>
          <Link
            href="/kontakt"
            className="mt-4 inline-flex items-center rounded-lg bg-[#e94560] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#c81e45]"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </section>
      </div>
    </main>
  )
}
