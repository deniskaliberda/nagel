import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";

type GewerkPageProps = {
  params: Promise<{ gewerk: string }>;
};

interface GewerkData {
  label: string;
  description: string;
  metaDescription: string;
  anwendungen: Array<{
    slug: string;
    label: string;
    description: string;
    produkteCount: number;
    hasLignoLoc: boolean;
  }>;
}

const GEWERK_DATA: Record<string, GewerkData> = {
  zimmerer: {
    label: "Zimmerer",
    description:
      "Im Zimmererhandwerk kommt es auf zuverlässige Befestigungstechnik an, die auch unter Baustellenbedingungen dauerhaft hält. Ob Dachstuhl, Holzrahmenbau oder Schalung – die richtige Kombination aus Nagler und Nagel entscheidet über Effizienz und Haltbarkeit. Wir empfehlen Ihnen genau die Werkzeuge und Befestigungsmittel, die sich in der Praxis bewährt haben. Für nachhaltiges Bauen bieten wir mit LignoLoc Holznägeln eine innovative Alternative zu Stahlnägeln.",
    metaDescription:
      "Befestigungstechnik für Zimmerer: Nagler und Nägel für Dachlatten, Schalung, Holzrahmenbau und Balkenverbindungen. Auch LignoLoc Holznägel. Fachberatung von Nagel Paul.",
    anwendungen: [
      {
        slug: "dachlatten",
        label: "Dachlatten befestigen",
        description:
          "Streifennagler und Coilnagler mit passenden Nägeln für die schnelle und sichere Befestigung von Dachlatten auf Sparren.",
        produkteCount: 12,
        hasLignoLoc: true,
      },
      {
        slug: "schalung",
        label: "Schalung nageln",
        description:
          "Druckluft- und Akku-Nagler für die effiziente Verschalung von Dachflächen und Fassaden. Nägel in verschiedenen Längen und Oberflächen.",
        produkteCount: 10,
        hasLignoLoc: false,
      },
      {
        slug: "holzrahmenbau",
        label: "Holzrahmenbau",
        description:
          "Leistungsstarke Streifennagler für den Holzrahmenbau. Lange Nägel (75-90 mm) für tragende Verbindungen. LignoLoc-Option für wärmebrückenfreie Konstruktionen.",
        produkteCount: 14,
        hasLignoLoc: true,
      },
      {
        slug: "balkenverbindungen",
        label: "Balkenverbindungen",
        description:
          "Schwere Nagler und lange Nägel (90-130 mm) für die Verbindung von Balken, Pfetten und Sparren im konstruktiven Holzbau.",
        produkteCount: 8,
        hasLignoLoc: false,
      },
    ],
  },
  dachdecker: {
    label: "Dachdecker",
    description:
      "Im Dachdeckerhandwerk werden vielfältige Befestigungslösungen benötigt – von der Dachpappe über Dämmplatten bis zur Lattung. Jede Anwendung erfordert spezielle Werkzeuge und Befestigungsmittel. Unsere Experten kennen die Anforderungen und empfehlen Ihnen die optimale Ausstattung für jede Dachkonstruktion. Für die Dämmebene bieten LignoLoc Holznägel den Vorteil, dass keine Wärmebrücken entstehen.",
    metaDescription:
      "Befestigungstechnik für Dachdecker: Tacker und Nagler für Dachpappe, Dämmplatten und Lattung. Wärmebrückenfreie Befestigung mit LignoLoc. Jetzt beraten lassen.",
    anwendungen: [
      {
        slug: "dachpappe",
        label: "Dachpappe befestigen",
        description:
          "Spezial-Tacker und Breitkopfklammern für die zuverlässige Befestigung von Dachpappe und Unterspannbahnen.",
        produkteCount: 8,
        hasLignoLoc: false,
      },
      {
        slug: "daemmplatten",
        label: "Dämmplatten nageln",
        description:
          "Nagler und Breitkopfstifte für Holzfaser-Dämmplatten. LignoLoc Holznägel vermeiden Wärmebrücken in der Dämmebene.",
        produkteCount: 10,
        hasLignoLoc: true,
      },
      {
        slug: "lattung",
        label: "Lattung",
        description:
          "Coilnagler und Streifennagler für die schnelle Lattung auf dem Dach. Verzinkte und feuerverzinkte Nägel für den Außenbereich.",
        produkteCount: 11,
        hasLignoLoc: true,
      },
    ],
  },
  trockenbauer: {
    label: "Trockenbauer",
    description:
      "Im Trockenbau werden unterschiedliche Befestigungsmittel für Unterkonstruktionen, Dämmung und Verkleidungen benötigt. Von der schweren Befestigung von Ständerwerk bis zur feinen Dämmstoffbefestigung – jede Anwendung braucht das passende Werkzeug. Wir empfehlen die bewährtesten Lösungen aus unserem Sortiment für den effizienten Innenausbau.",
    metaDescription:
      "Befestigungstechnik für Trockenbauer: Nagler und Tacker für Unterkonstruktion, Dämmung und Profile. Schneller Innenausbau mit den richtigen Werkzeugen.",
    anwendungen: [
      {
        slug: "unterkonstruktion",
        label: "Unterkonstruktion montieren",
        description:
          "Nagler und Nägel für die Befestigung von Holz-Unterkonstruktionen auf Beton und Mauerwerk.",
        produkteCount: 9,
        hasLignoLoc: false,
      },
      {
        slug: "daemmung",
        label: "Dämmung befestigen",
        description:
          "Tacker und Klammern für die Befestigung von Dämmstoffen, Dampfbremsen und Folien.",
        produkteCount: 7,
        hasLignoLoc: false,
      },
      {
        slug: "profile",
        label: "Profile verbinden",
        description:
          "Magazinierte Schrauben und Schrauber für die schnelle Montage von Metallprofilen und Gipskartonplatten.",
        produkteCount: 6,
        hasLignoLoc: false,
      },
    ],
  },
  schreiner: {
    label: "Schreiner / Tischler",
    description:
      "Im Schreinerhandwerk zählt Präzision. Brads und Pins ermöglichen nahezu unsichtbare Befestigungen an Möbeln, Leisten und Zierleisten. Feine Klammern halten Plattenwerkstoffe sicher zusammen, ohne die Oberfläche zu beschädigen. Unsere Bradnagler und Pinner von Senco, Prebena und BeA sind speziell für den anspruchsvollen Möbel- und Innenausbau konzipiert.",
    metaDescription:
      "Befestigungstechnik für Schreiner und Tischler: Bradnagler und Pinner für Möbelbau, Leisten und Plattenwerkstoffe. Unsichtbare Befestigung vom Fachhandel.",
    anwendungen: [
      {
        slug: "moebelbau",
        label: "Möbelbau",
        description:
          "18-Gauge Bradnagler und feine Klammern für die Korpusmontage, Rückwände und Schubladenbau.",
        produkteCount: 10,
        hasLignoLoc: false,
      },
      {
        slug: "leisten",
        label: "Leisten & Zierprofile",
        description:
          "23-Gauge Micro-Pinner für die unsichtbare Befestigung von Zierleisten, Profilleisten und Blenden.",
        produkteCount: 8,
        hasLignoLoc: false,
      },
      {
        slug: "plattenwerkstoffe",
        label: "Plattenwerkstoffe",
        description:
          "Klammern und Brads für die Verbindung von MDF, Multiplex und Sperrholzplatten.",
        produkteCount: 7,
        hasLignoLoc: false,
      },
    ],
  },
  bodenleger: {
    label: "Bodenleger",
    description:
      "Für die professionelle Bodenverlegung brauchen Sie spezialisierte Tacker und Klammern. Ob Parkettverlegung oder Sockelleisten-Montage – jede Anwendung hat ihre eigenen Anforderungen an das Befestigungsmittel. Wir führen die bewährtesten Parketttacker und Sockelleisten-Nagler der führenden Marken.",
    metaDescription:
      "Befestigungstechnik für Bodenleger: Parketttacker und Sockelleisten-Nagler. Spezialklammern und Brads für professionelle Bodenverlegung.",
    anwendungen: [
      {
        slug: "parkett",
        label: "Parkett verlegen",
        description:
          "Druckluft-Parketttacker und Spezialklammern für die professionelle Verlegung von Massivparkett und Mehrschichtparkett.",
        produkteCount: 8,
        hasLignoLoc: false,
      },
      {
        slug: "sockelleisten",
        label: "Sockelleisten befestigen",
        description:
          "Akku-Bradnagler und 18-Gauge Brads für die saubere Montage von Sockelleisten und Fußleisten.",
        produkteCount: 6,
        hasLignoLoc: false,
      },
    ],
  },
  heimwerker: {
    label: "Heimwerker",
    description:
      "Auch ambitionierte Heimwerker profitieren von professioneller Befestigungstechnik. Ein guter Nagler oder Tacker beschleunigt Holzprojekte enorm und liefert gleichmäßig professionelle Ergebnisse. Wir empfehlen vielseitige Einsteigergeräte, die für die häufigsten Heimwerker-Anwendungen bestens geeignet sind.",
    metaDescription:
      "Befestigungstechnik für Heimwerker: Einsteigerfreundliche Nagler und Tacker für Holzprojekte und Allround-Befestigung. Beratung vom Fachhandel.",
    anwendungen: [
      {
        slug: "allround-befestigung",
        label: "Allround-Befestigung",
        description:
          "Vielseitige Kombi-Nagler und Tacker für die häufigsten Befestigungsaufgaben rund ums Haus.",
        produkteCount: 10,
        hasLignoLoc: false,
      },
      {
        slug: "holzprojekte",
        label: "Holzprojekte",
        description:
          "Bradnagler und Tacker für Holzprojekte in der Werkstatt: Regale, Gartenmöbel, Vogelhäuser und mehr.",
        produkteCount: 8,
        hasLignoLoc: false,
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: GewerkPageProps): Promise<Metadata> {
  const { gewerk } = await params;
  const data = GEWERK_DATA[gewerk];
  const label = data?.label ?? gewerk.charAt(0).toUpperCase() + gewerk.slice(1);

  return {
    title: `${label} – Befestigungslösungen für Ihr Gewerk`,
    description:
      data?.metaDescription ??
      `Befestigungslösungen für ${label}. Professionelle Werkzeuge und Befestigungsmittel von Nagel Paul.`,
    openGraph: {
      title: `${label} – Anwendungen | Nagel Paul`,
      description:
        data?.metaDescription ??
        `Professionelle Befestigungstechnik für ${label} von Nagel Paul.`,
      type: "website",
      locale: "de_DE",
    },
    alternates: {
      canonical: `https://nagel-paul.de/anwendungen/${gewerk}`,
    },
  };
}

function GewerkJsonLd({ gewerk, label }: { gewerk: string; label: string }) {
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
        item: "https://nagel-paul.de/anwendungen",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: label,
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

export default async function GewerkPage({ params }: GewerkPageProps) {
  const { gewerk } = await params;
  const data = GEWERK_DATA[gewerk];
  const label =
    data?.label ?? gewerk.charAt(0).toUpperCase() + gewerk.slice(1);
  const description = data?.description ?? null;
  const anwendungen = data?.anwendungen ?? [];

  return (
    <main className="min-h-screen">
      <GewerkJsonLd gewerk={gewerk} label={label} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Anwendungen", href: "/anwendungen" },
            { label, href: `/anwendungen/${gewerk}` },
          ]}
        />

        {/* Header */}
        <div className="pb-10 pt-4">
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {label}
          </h1>
          {description && (
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-muted">
              {description}
            </p>
          )}
        </div>

        {/* Anwendungen Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {anwendungen.map((anwendung) => (
            <Link
              key={anwendung.slug}
              href={`/anwendungen/${gewerk}/${anwendung.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-white p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:-translate-y-0.5"
            >
              {/* Header row */}
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-bold text-primary transition-colors group-hover:text-accent">
                  {anwendung.label}
                </h2>
                {anwendung.hasLignoLoc && (
                  <span className="inline-flex shrink-0 items-center rounded-full bg-lignoloc-light px-2.5 py-0.5 text-xs font-semibold text-lignoloc">
                    LignoLoc
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {anwendung.description}
              </p>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="text-sm text-text-muted">
                  {anwendung.produkteCount} empfohlene Produkte
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all group-hover:gap-2">
                  Empfehlung ansehen
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
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-12 mb-16 rounded-xl bg-bg-alt p-6 sm:p-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-primary">
                Individuelle Beratung für {label}
              </h2>
              <p className="mt-1 text-sm text-text-muted">
                Unsere Fachberater kennen die Anforderungen im{" "}
                {label.replace(" / ", "- und ")}-Handwerk und empfehlen Ihnen
                die optimale Ausstattung.
              </p>
            </div>
            <Link
              href="/kontakt"
              className="inline-flex shrink-0 items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Jetzt beraten lassen
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
