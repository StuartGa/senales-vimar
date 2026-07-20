import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  variant?: "auto" | "light" | "dark";
  className?: string;
  priority?: boolean;
};

export function Logo({ variant = "auto", className, priority = false }: LogoProps) {
  // Transparent logo (white + green) works on dark; on light use dark plate.
  const src = variant === "light" ? "/images/brand/logo-on-dark.png" : "/images/brand/logo.png";

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label={`${siteConfig.name} — inicio`}
    >
      <Image
        src={src}
        alt={siteConfig.name}
        width={variant === "light" ? 160 : 148}
        height={variant === "light" ? 80 : 72}
        priority={priority}
        className="h-10 w-auto md:h-12"
      />
    </Link>
  );
}
