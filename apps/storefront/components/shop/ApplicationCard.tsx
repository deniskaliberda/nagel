import Link from "next/link";

interface ApplicationCardProps {
  gewerk: string;
  gewerkLabel: string;
  anwendung: string;
  anwendungLabel: string;
  productCount: number;
  href: string;
}

const GEWERK_COLORS: Record<string, string> = {
  zimmerer: "bg-amber-100 text-amber-700",
  dachdecker: "bg-red-100 text-red-700",
  trockenbauer: "bg-blue-100 text-blue-700",
  schreiner: "bg-emerald-100 text-emerald-700",
  bodenleger: "bg-purple-100 text-purple-700",
  heimwerker: "bg-orange-100 text-orange-700",
};

const GEWERK_ICONS: Record<string, string> = {
  zimmerer: "Z",
  dachdecker: "D",
  trockenbauer: "T",
  schreiner: "S",
  bodenleger: "B",
  heimwerker: "H",
};

export function ApplicationCard({
  gewerk,
  gewerkLabel,
  anwendung,
  anwendungLabel,
  productCount,
  href,
}: ApplicationCardProps) {
  const colorClass = GEWERK_COLORS[gewerk] ?? "bg-gray-100 text-gray-700";
  const iconLetter = GEWERK_ICONS[gewerk] ?? gewerk.charAt(0).toUpperCase();

  return (
    <Link
      href={href}
      className="group flex items-center gap-4 rounded-lg border border-border bg-white p-4 transition-all duration-200 hover:border-primary/20 hover:shadow-md"
    >
      {/* Icon area */}
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-lg font-bold ${colorClass}`}
      >
        {iconLetter}
      </div>

      {/* Text content */}
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
          {gewerkLabel}
        </span>
        <span className="truncate text-sm font-semibold text-primary group-hover:text-accent transition-colors duration-150">
          {anwendungLabel}
        </span>
        <span className="text-xs text-text-muted">
          {productCount} {productCount === 1 ? "Produkt" : "Produkte"}
        </span>
      </div>

      {/* Arrow indicator */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 shrink-0 text-text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
}
