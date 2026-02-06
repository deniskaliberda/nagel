import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Bestellung abschließen - Sicher und einfach bei Nagel Paul bestellen.",
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Checkout
        </h1>
        <p className="mt-6 text-lg text-text-muted">
          Schließen Sie Ihre Bestellung ab.
        </p>
      </section>
    </main>
  );
}
