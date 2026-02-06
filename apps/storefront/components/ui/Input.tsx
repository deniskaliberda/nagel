"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type InputVariant = "default" | "search";

interface InputProps {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: InputVariant;
  className?: string;
  wrapperClassName?: string;
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={cn("h-5 w-5", className)}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Input({
  label,
  error,
  helperText,
  variant = "default",
  className,
  wrapperClassName,
  id: externalId,
  disabled,
  required,
  ...rest
}: InputProps) {
  const generatedId = useId();
  const inputId = externalId ?? generatedId;
  const errorId = error ? `${inputId}-error` : undefined;
  const helperTextId = helperText ? `${inputId}-helper` : undefined;

  const describedBy = [errorId, helperTextId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("flex flex-col gap-1.5", wrapperClassName)}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-primary"
        >
          {label}
          {required && (
            <span className="ml-1 text-accent" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}
      <div className="relative">
        {variant === "search" && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon className="text-text-muted" />
          </div>
        )}
        <input
          id={inputId}
          disabled={disabled}
          required={required}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy}
          className={cn(
            "w-full rounded-lg border bg-white px-4 py-2.5 text-base text-primary placeholder:text-text-muted",
            "transition-colors duration-200",
            "focus:outline-none focus:ring-2 focus:ring-offset-0",
            error
              ? "border-accent focus:border-accent focus:ring-accent/30"
              : "border-border focus:border-info focus:ring-info/30",
            disabled && "cursor-not-allowed bg-gray-50 opacity-60",
            variant === "search" && "pl-10",
            className
          )}
          {...rest}
        />
      </div>
      {error && (
        <p id={errorId} className="text-sm text-accent" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={helperTextId} className="text-sm text-text-muted">
          {helperText}
        </p>
      )}
    </div>
  );
}
