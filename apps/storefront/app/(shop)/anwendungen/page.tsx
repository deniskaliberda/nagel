import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anwendungen",
  description:
    "Befestigungslösungen nach Gewerk und Anwendungsbereich. Finden Sie die passende Lösung für Ihr Projekt.",
};

export default function AnwendungenPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Anwendungen
        </h1>
        <p className="mt-6 text-lg text-text-muted">
          Finden Sie die passende Befestigungslösung für Ihr Gewerk und Ihren
          Anwendungsbereich.
        </p>
      </section>
    </main>
  );
}
