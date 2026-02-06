import type { Metadata } from "next";

type BrandPageProps = {
  params: { brand: string };
};

export async function generateMetadata({
  params,
}: BrandPageProps): Promise<Metadata> {
  const brandName = decodeURIComponent(params.brand).replace(/-/g, " ");

  return {
    title: `${brandName.charAt(0).toUpperCase() + brandName.slice(1)} - Marken`,
    description: `Produkte von ${brandName} - Professionelle Befestigungstechnik bei Nagel Paul.`,
  };
}

export default function BrandPage({ params }: BrandPageProps) {
  const brandName = decodeURIComponent(params.brand).replace(/-/g, " ");

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-text-muted">
          <span>Marken</span> /{" "}
          <span className="capitalize text-primary">{brandName}</span>
        </nav>
        <h1 className="text-4xl font-bold tracking-tight text-primary capitalize">
          {brandName}
        </h1>
        <p className="mt-6 text-lg text-text-muted">
          Alle Produkte von &ldquo;{brandName}&rdquo; bei Nagel Paul.
        </p>
      </section>
    </main>
  );
}
