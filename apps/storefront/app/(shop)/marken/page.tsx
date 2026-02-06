import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marken",
  description:
    "Unsere Partnermarken - Führende Hersteller professioneller Befestigungstechnik im Überblick.",
};

export default function MarkenPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Marken
        </h1>
        <p className="mt-6 text-lg text-text-muted">
          Entdecken Sie unsere Partnermarken - führende Hersteller
          professioneller Befestigungstechnik.
        </p>
      </section>
    </main>
  );
}
