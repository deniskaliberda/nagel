import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produkte",
  description:
    "Unser komplettes Sortiment an Befestigungstechnik - Nägel, Schrauben, Klammern und mehr für professionelle Anwendungen.",
};

export default function ProduktePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Produkte
        </h1>
        <p className="mt-6 text-lg text-text-muted">
          Entdecken Sie unser umfassendes Sortiment an professioneller
          Befestigungstechnik.
        </p>
      </section>
    </main>
  );
}
