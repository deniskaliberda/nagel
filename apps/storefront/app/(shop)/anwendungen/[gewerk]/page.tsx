import type { Metadata } from "next";

type GewerkPageProps = {
  params: { gewerk: string };
};

export async function generateMetadata({
  params,
}: GewerkPageProps): Promise<Metadata> {
  const gewerkName = decodeURIComponent(params.gewerk).replace(/-/g, " ");

  return {
    title: `${gewerkName.charAt(0).toUpperCase() + gewerkName.slice(1)} - Anwendungen`,
    description: `Befestigungslösungen für ${gewerkName} - Professionelle Produkte und Anwendungstipps von Nagel Paul.`,
  };
}

export default function GewerkPage({ params }: GewerkPageProps) {
  const gewerkName = decodeURIComponent(params.gewerk).replace(/-/g, " ");

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-text-muted">
          <span>Anwendungen</span> /{" "}
          <span className="capitalize text-primary">{gewerkName}</span>
        </nav>
        <h1 className="text-4xl font-bold tracking-tight text-primary capitalize">
          {gewerkName}
        </h1>
        <p className="mt-6 text-lg text-text-muted">
          Entdecken Sie unsere Befestigungslösungen für den Bereich{" "}
          &ldquo;{gewerkName}&rdquo;.
        </p>
      </section>
    </main>
  );
}
