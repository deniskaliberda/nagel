"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  label?: string;
  options: SelectOption[];
  error?: string;
  helperText?: string;
  placeholder?: string;
  className?: string;
  wrapperClassName?: string;
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
}

function ChevronDownIcon({ className }: { className?: string }) {
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
        d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Select({
  label,
  options,
  error,
  helperText,
  placeholder,
  className,
  wrapperClassName,
  id: externalId,
  disabled,
  required,
  ...rest
}: SelectProps) {
  const generatedId = useId();
  const selectId = externalId ?? generatedId;
  const errorId = error ? `${selectId}-error` : undefined;
  const helperTextId = helperText ? `${selectId}-helper` : undefined;

  const describedBy = [errorId, helperTextId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("flex flex-col gap-1.5", wrapperClassName)}>
      {label && (
        <label
          htmlFor={selectId}
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
        <select
          id={selectId}
          disabled={disabled}
          required={required}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy}
          className={cn(
            "w-full appearance-none rounded-lg border bg-white px-4 py-2.5 pr-10 text-base text-primary",
            "transition-colors duration-200",
            "focus:outline-none focus:ring-2 focus:ring-offset-0",
            error
              ? "border-accent focus:border-accent focus:ring-accent/30"
              : "border-border focus:border-info focus:ring-info/30",
            disabled && "cursor-not-allowed bg-gray-50 opacity-60",
            className
          )}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ChevronDownIcon className="text-text-muted" />
        </div>
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
