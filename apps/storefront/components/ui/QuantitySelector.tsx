"use client";

import { useCallback } from "react";
import { cn } from "@/lib/utils";

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
  className?: string;
  label?: string;
}

function MinusIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      aria-hidden="true"
    >
      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
    </svg>
  );
}

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 999,
  disabled = false,
  className,
  label = "Menge",
}: QuantitySelectorProps) {
  const isAtMin = value <= min;
  const isAtMax = value >= max;

  const decrement = useCallback(() => {
    if (!isAtMin) {
      onChange(value - 1);
    }
  }, [value, isAtMin, onChange]);

  const increment = useCallback(() => {
    if (!isAtMax) {
      onChange(value + 1);
    }
  }, [value, isAtMax, onChange]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/\D/g, "");
      if (raw === "") {
        onChange(min);
        return;
      }
      const parsed = parseInt(raw, 10);
      if (parsed < min) {
        onChange(min);
      } else if (parsed > max) {
        onChange(max);
      } else {
        onChange(parsed);
      }
    },
    [min, max, onChange]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        increment();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        decrement();
      }
    },
    [increment, decrement]
  );

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <span className="text-sm font-medium text-primary">{label}</span>
      )}
      <div className="inline-flex items-center rounded-lg border border-border">
        <button
          type="button"
          onClick={decrement}
          disabled={disabled || isAtMin}
          aria-label="Menge verringern"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-l-lg transition-colors duration-200",
            "hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info",
            "disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
          )}
        >
          <MinusIcon />
        </button>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          aria-label={label}
          className={cn(
            "h-10 w-12 border-x border-border bg-white text-center text-base font-medium text-primary",
            "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-info",
            "disabled:cursor-not-allowed disabled:opacity-60",
            "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          )}
        />
        <button
          type="button"
          onClick={increment}
          disabled={disabled || isAtMax}
          aria-label="Menge erhoehen"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-r-lg transition-colors duration-200",
            "hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info",
            "disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
          )}
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
}
