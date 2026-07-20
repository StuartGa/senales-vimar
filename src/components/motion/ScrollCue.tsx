"use client";

import { ChevronDown } from "lucide-react";

export function ScrollCue() {
  return (
    <a
      href="#acerca"
      className="scroll-cue absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70 transition hover:text-white"
      aria-label="Desplazarse al contenido"
    >
      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em]">
        Explorar
      </span>
      <ChevronDown className="h-5 w-5" aria-hidden />
    </a>
  );
}
