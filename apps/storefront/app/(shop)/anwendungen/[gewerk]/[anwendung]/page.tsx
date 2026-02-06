import type { Metadata } from "next";

type AnwendungPageProps = {
  params: { gewerk: string; anwendung: string };
};

export async function generateMetadata({
  params,
}: AnwendungPageProps): Promise<Metadata> {
  const anwendungName = decodeURIComponent(params.anwendung).replace(/-/g, " ");
  const gewerkName = decodeURIComponent(params.gewerk).replace(/-/g, " ");

  return {
    title: `${anwendungName.charAt(0).toUpperCase() + anwendungName.slice(1)} - ${gewerkName}`,
    description: `${anwendungName} im Bereich ${gewerkName} - Professionelle Befestigungslösungen von Nagel Paul.`,
  };
}

export default function AnwendungPage({ params }: AnwendungPageProps) {
  const anwendungName = decodeURIComponent(params.anwendung).replace(/-/g, " ");
  const gewerkName = decodeURIComponent(params.gewerk).replace(/-/g, " ");

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-text-muted">
          <span>Anwendungen</span> /{" "}
          <span className="capitalize">{gewerkName}</span> /{" "}
          <span className="capitalize text-primary">{anwendungName}</span>
        </nav>
        <h1 className="text-4xl font-bold tracking-tight text-primary capitalize">
          {anwendungName}
        </h1>
        <p className="mt-6 text-lg text-text-muted">
          Detaillierte Informationen zur Anwendung &ldquo;{anwendungName}&rdquo;
          im Bereich &ldquo;{gewerkName}&rdquo;.
        </p>
      </section>
    </main>
  );
}
