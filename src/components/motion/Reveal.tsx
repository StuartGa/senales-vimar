"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { useMotionPreference } from "@/components/motion/MotionProvider";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li" | "section";
  delay?: number;
  variant?: "up" | "fade" | "left" | "scale";
  once?: boolean;
};

export function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  variant = "up",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const { reduceMotion } = useMotionPreference();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (reduceMotion) {
      setVisible(true);
      return;
    }

    let cancelled = false;

    const show = () => {
      // Double rAF ensures the browser paints the hidden state before revealing.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!cancelled) setVisible(true);
        });
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [once, reduceMotion]);

  return (
    <Tag
      ref={ref as never}
      className={cn(
        "reveal",
        `reveal-${variant}`,
        visible && "is-visible",
        className,
      )}
      style={{ transitionDelay: visible && !reduceMotion ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
