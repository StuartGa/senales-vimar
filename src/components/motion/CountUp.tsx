"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionPreference } from "@/components/motion/MotionProvider";

function parseStat(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { target: 0, suffix: value, numeric: false };
  return { target: Number(match[1]), suffix: match[2] ?? "", numeric: true };
}

export function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const { target, suffix, numeric } = parseStat(value);
  const ref = useRef<HTMLSpanElement>(null);
  const { reduceMotion } = useMotionPreference();
  const [display, setDisplay] = useState(numeric ? "0" : value);

  useEffect(() => {
    if (!numeric) {
      setDisplay(value);
      return;
    }

    if (reduceMotion) {
      setDisplay(String(target));
      return;
    }

    const node = ref.current;
    if (!node) return;

    let frame = 0;
    let started = false;

    const run = () => {
      if (started) return;
      started = true;
      const duration = 1200;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(String(Math.round(target * eased)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };

      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [numeric, reduceMotion, target, value]);

  return (
    <span ref={ref} className={className}>
      {display}
      {numeric ? suffix : null}
    </span>
  );
}
