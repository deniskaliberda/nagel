import type { Metadata } from "next";

type CategoryPageProps = {
  params: { category: string };
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const categoryName = decodeURIComponent(params.category).replace(/-/g, " ");

  return {
    title: categoryName.charAt(0).toUpperCase() + categoryName.slice(1),
    description: `Produkte in der Kategorie ${categoryName} - Professionelle Befestigungstechnik von Nagel Paul.`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = decodeURIComponent(params.category).replace(/-/g, " ");

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-primary capitalize">
          {categoryName}
        </h1>
        <p className="mt-6 text-lg text-text-muted">
          Produkte in der Kategorie &ldquo;{categoryName}&rdquo;.
        </p>
      </section>
    </main>
  );
}
