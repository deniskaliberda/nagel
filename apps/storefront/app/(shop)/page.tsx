import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nagel Paul - Ihr Fachhandel für Befestigungstechnik",
  description:
    "Professionelle Befestigungstechnik für Handwerk und Industrie. Nägel, Schrauben, Klammern und innovative LignoLoc Holznägel.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Nagel Paul - Ihr Fachhandel für Befestigungstechnik
        </h1>
        <p className="mt-6 text-lg text-text-muted">
          Professionelle Befestigungslösungen für Handwerk und Industrie.
          Entdecken Sie unser umfassendes Sortiment an Nägeln, Schrauben,
          Klammern und innovativen LignoLoc Holznägeln.
        </p>
      </section>
    </main>
  );
}
