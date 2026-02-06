import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warenkorb",
  description: "Ihr Warenkorb bei Nagel Paul - Überprüfen Sie Ihre ausgewählten Produkte.",
};

export default function WarenkorbPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Warenkorb
        </h1>
        <p className="mt-6 text-lg text-text-muted">
          Ihr Warenkorb ist derzeit leer.
        </p>
      </section>
    </main>
  );
}
