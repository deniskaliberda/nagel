"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "lignoloc";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover focus-visible:ring-accent shadow-sm",
  secondary:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary",
  ghost:
    "text-primary hover:bg-gray-100 focus-visible:ring-gray-300",
  lignoloc:
    "bg-lignoloc text-white hover:bg-green-800 focus-visible:ring-lignoloc shadow-sm",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-5 py-2.5 text-base gap-2",
  lg: "px-7 py-3.5 text-lg gap-2.5",
};

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

interface ButtonAsButtonProps extends ButtonBaseProps {
  href?: undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  type?: undefined;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const baseStyles =
  "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  disabled,
  ...rest
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if ("href" in rest && rest.href !== undefined) {
    const { href, onClick, ...linkRest } = rest as ButtonAsLinkProps;
    return (
      <Link
        href={href}
        className={cn(classes, disabled && "opacity-50 pointer-events-none")}
        onClick={onClick}
        aria-disabled={disabled}
        {...linkRest}
      >
        {children}
      </Link>
    );
  }

  const { onClick, type = "button", ...buttonRest } = rest as ButtonAsButtonProps;
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...buttonRest}
    >
      {children}
    </button>
  );
}
