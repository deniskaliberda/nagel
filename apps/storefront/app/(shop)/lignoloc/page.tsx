import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LignoLoc - Holznägel für nachhaltiges Bauen",
  description:
    "LignoLoc Holznägel - Die innovative und nachhaltige Alternative für ökologisches Bauen. Magazinierte Holznägel für maschinelle Verarbeitung.",
};

export default function LignoLocPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-lignoloc sm:text-5xl">
          LignoLoc
        </h1>
        <p className="mt-2 text-xl font-medium text-primary">
          Holznägel für nachhaltiges Bauen
        </p>
        <p className="mt-6 text-lg text-text-muted">
          Entdecken Sie LignoLoc - die weltweit ersten magazinierten Holznägel
          für maschinelle Verarbeitung. Eine innovative und nachhaltige
          Alternative für ökologisches Bauen.
        </p>
      </section>
    </main>
  );
}
