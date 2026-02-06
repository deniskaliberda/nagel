import type { Metadata } from "next";

type ProductPageProps = {
  params: { category: string; product: string };
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const productName = decodeURIComponent(params.product).replace(/-/g, " ");

  return {
    title: productName.charAt(0).toUpperCase() + productName.slice(1),
    description: `${productName} - Hochwertige Befestigungstechnik von Nagel Paul. Jetzt entdecken und bestellen.`,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const productName = decodeURIComponent(params.product).replace(/-/g, " ");
  const categoryName = decodeURIComponent(params.category).replace(/-/g, " ");

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-text-muted">
          <span>Produkte</span> / <span className="capitalize">{categoryName}</span> /{" "}
          <span className="capitalize text-primary">{productName}</span>
        </nav>
        <h1 className="text-4xl font-bold tracking-tight text-primary capitalize">
          {productName}
        </h1>
        <p className="mt-6 text-lg text-text-muted">
          Produktdetails werden geladen...
        </p>
      </section>
    </main>
  );
}
