import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { withBase } from "@/lib/paths";

type ButtonProps = ComponentProps<"a"> & {
  variant?: "primary" | "secondary" | "ghost" | "onDark";
  size?: "md" | "lg";
};

const variants = {
  primary:
    "bg-brand text-white hover:bg-brand-strong focus-visible:outline-offset-2",
  secondary:
    "bg-white text-ink border border-line hover:border-ink/30 hover:bg-surface",
  ghost: "bg-transparent text-ink hover:bg-brand-soft",
  onDark:
    "bg-white text-ink hover:bg-brand-soft border border-white/20",
} as const;

const sizes = {
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-12 px-6 text-base",
} as const;

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      href={href ? withBase(href) : href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] font-semibold tracking-wide transition-[color,background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 active:translate-y-0",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

type NativeButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
};

export function NativeButton({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: NativeButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] font-semibold tracking-wide transition-[color,background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
