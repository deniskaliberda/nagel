import { cn } from "@/lib/utils";

type CompatibilityStatus = "recommended" | "compatible" | "incompatible";

interface CompatibilityBadgeProps {
  status: CompatibilityStatus;
  deviceName?: string;
}

const STATUS_CONFIG: Record<
  CompatibilityStatus,
  { containerClass: string; label: string; icon: "check" | "x" }
> = {
  recommended: {
    containerClass: "bg-success/10 text-success border-success/20",
    label: "Empfohlen",
    icon: "check",
  },
  compatible: {
    containerClass: "bg-info/10 text-info border-info/20",
    label: "Kompatibel",
    icon: "check",
  },
  incompatible: {
    containerClass: "bg-accent/10 text-accent border-accent/20",
    label: "Nicht kompatibel",
    icon: "x",
  },
};

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  );
}

export function CompatibilityBadge({
  status,
  deviceName,
}: CompatibilityBadgeProps) {
  const config = STATUS_CONFIG[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium",
        config.containerClass
      )}
    >
      {config.icon === "check" ? <CheckIcon /> : <XIcon />}
      <span>
        {config.label}
        {deviceName && (
          <span className="ml-1 font-normal">
            {status === "incompatible" ? "mit" : "für"} {deviceName}
          </span>
        )}
      </span>
    </span>
  );
}
