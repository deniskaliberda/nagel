import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";

export const metadata: Metadata = {
  title: "Produkte nach Anwendung – Befestigungslösungen für Ihr Gewerk",
  description:
    "Finden Sie die passende Befestigungslösung für Ihr Gewerk. Ob Zimmerer, Dachdecker, Trockenbauer, Schreiner, Bodenleger oder Heimwerker – wir empfehlen Ihnen die richtigen Werkzeuge und Befestigungsmittel.",
  openGraph: {
    title: "Produkte nach Anwendung | Nagel Paul",
    description:
      "Professionelle Befestigungslösungen für jedes Gewerk. Wir empfehlen die passenden Nagler, Nägel und Klammern für Ihre Anwendung.",
    type: "website",
    locale: "de_DE",
  },
  alternates: {
    canonical: "https://nagel-paul.de/anwendungen",
  },
};

const GEWERKE = [
  {
    id: "zimmerer",
    label: "Zimmerer",
    description:
      "Dachlatten befestigen, Schalung nageln, Holzrahmenbau und Balkenverbindungen. Die richtigen Nagler und Nägel für den Holzbau.",
    anwendungenCount: 4,
    produkteCount: 32,
    color: "bg-amber-50 border-amber-200 hover:border-amber-400",
    iconBg: "bg-amber-100",
    textColor: "text-amber-900",
    accentColor: "text-amber-700",
  },
  {
    id: "dachdecker",
    label: "Dachdecker",
    description:
      "Dachpappe befestigen, Dämmplatten nageln und Lattung. Spezialwerkzeuge und Befestigungsmittel für die Dachkonstruktion.",
    anwendungenCount: 3,
    produkteCount: 24,
    color: "bg-red-50 border-red-200 hover:border-red-400",
    iconBg: "bg-red-100",
    textColor: "text-red-900",
    accentColor: "text-red-700",
  },
  {
    id: "trockenbauer",
    label: "Trockenbauer",
    description:
      "Unterkonstruktion montieren, Dämmung befestigen und Profile verbinden. Nagler, Tacker und Schrauben für den Innenausbau.",
    anwendungenCount: 3,
    produkteCount: 18,
    color: "bg-blue-50 border-blue-200 hover:border-blue-400",
    iconBg: "bg-blue-100",
    textColor: "text-blue-900",
    accentColor: "text-blue-700",
  },
  {
    id: "schreiner",
    label: "Schreiner / Tischler",
    description:
      "Möbelbau, Leisten und Zierprofile, Plattenwerkstoffe. Feine Befestigungstechnik mit Brads, Pins und Klammern für perfekte Oberflächen.",
    anwendungenCount: 3,
    produkteCount: 22,
    color: "bg-orange-50 border-orange-200 hover:border-orange-400",
    iconBg: "bg-orange-100",
    textColor: "text-orange-900",
    accentColor: "text-orange-700",
  },
  {
    id: "bodenleger",
    label: "Bodenleger",
    description:
      "Parkett verlegen und Sockelleisten befestigen. Spezialtacker und Klammern für die professionelle Bodenverlegung.",
    anwendungenCount: 2,
    produkteCount: 12,
    color: "bg-emerald-50 border-emerald-200 hover:border-emerald-400",
    iconBg: "bg-emerald-100",
    textColor: "text-emerald-900",
    accentColor: "text-emerald-700",
  },
  {
    id: "heimwerker",
    label: "Heimwerker",
    description:
      "Allround-Befestigung und Holzprojekte. Einsteigerfreundliche Geräte und Komplettsets für ambitionierte Heimwerker.",
    anwendungenCount: 2,
    produkteCount: 15,
    color: "bg-purple-50 border-purple-200 hover:border-purple-400",
    iconBg: "bg-purple-100",
    textColor: "text-purple-900",
    accentColor: "text-purple-700",
  },
];

function AnwendungenJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: "https://nagel-paul.de",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Anwendungen",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function AnwendungenPage() {
  return (
    <main className="min-h-screen">
      <AnwendungenJsonLd />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[{ label: "Anwendungen", href: "/anwendungen" }]}
        />

        {/* Header */}
        <div className="pb-10 pt-4">
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Produkte nach Anwendung
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-text-muted">
            Handwerker denken in Anwendungen, nicht in Produktnummern. Deshalb
            haben wir unser Sortiment nach Gewerken und Einsatzbereichen
            sortiert. Wählen Sie Ihr Gewerk und finden Sie die passenden
            Werkzeuge und Befestigungsmittel für Ihre Anwendung – inklusive
            unserer fachlichen Empfehlung.
          </p>
        </div>

        {/* Gewerk Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GEWERKE.map((gewerk) => (
            <Link
              key={gewerk.id}
              href={`/anwendungen/${gewerk.id}`}
              className={`group flex flex-col rounded-xl border-2 p-6 transition-all hover:shadow-lg hover:-translate-y-0.5 ${gewerk.color}`}
            >
              {/* Icon + Label */}
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold ${gewerk.iconBg} ${gewerk.textColor}`}
                >
                  {gewerk.label.charAt(0)}
                </div>
                <div>
                  <h2
                    className={`text-xl font-bold ${gewerk.textColor}`}
                  >
                    {gewerk.label}
                  </h2>
                  <p className="text-sm text-text-muted">
                    {gewerk.anwendungenCount} Anwendungen &middot;{" "}
                    {gewerk.produkteCount} Produkte
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                {gewerk.description}
              </p>

              {/* CTA */}
              <span
                className={`mt-auto flex items-center gap-1 pt-4 text-sm font-semibold ${gewerk.accentColor} transition-all group-hover:gap-2`}
              >
                Anwendungen ansehen
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
              </span>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <section className="mt-16 rounded-xl bg-bg-alt p-6 sm:p-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-primary">
              Nicht sicher, welches Werkzeug Sie brauchen?
            </h2>
            <p className="mt-3 text-text-muted">
              Unsere Fachberater kennen jede Anwendung und empfehlen Ihnen die
              optimale Kombination aus Nagler und Befestigungsmittel. Seit über
              40 Jahren sind wir der Ansprechpartner für professionelle
              Befestigungstechnik.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Fachberatung kontaktieren
              </Link>
              <Link
                href="/produkte"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Alle Produkte ansehen
              </Link>
            </div>
          </div>
        </section>

        {/* LignoLoc hint */}
        <section className="mt-8 mb-16 rounded-xl bg-gradient-to-r from-lignoloc to-[#1a3a0a] p-6 sm:p-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-lignoloc-light px-2.5 py-0.5 text-xs font-semibold text-lignoloc">
                Nachhaltige Innovation
              </span>
              <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                LignoLoc Holznägel – für jedes Gewerk
              </h2>
              <p className="mt-1 text-sm text-green-100">
                Nachhaltiges Befestigen mit Holznägeln aus Buchenholz. Fragen
                Sie uns nach der LignoLoc-Alternative für Ihre Anwendung.
              </p>
            </div>
            <Link
              href="/lignoloc"
              className="inline-flex shrink-0 items-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-lignoloc transition-colors hover:bg-green-50"
            >
              Mehr erfahren
              <svg
                className="ml-1.5 h-4 w-4"
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
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
