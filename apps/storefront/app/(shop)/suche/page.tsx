import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suche",
  description:
    "Durchsuchen Sie das gesamte Sortiment von Nagel Paul - Befestigungstechnik schnell und einfach finden.",
};

export default function SuchePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Suche
        </h1>
        <p className="mt-6 text-lg text-text-muted">
          Durchsuchen Sie unser gesamtes Sortiment an Befestigungstechnik.
        </p>
      </section>
    </main>
  );
}
