"use client";

import { useMotionPreference } from "@/components/motion/MotionProvider";

export function MotionBanner() {
  const { systemReduceMotion, forceMotion, enableMotion, useSystemPreference } =
    useMotionPreference();

  if (!systemReduceMotion) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-xl rounded-[var(--radius-md)] border border-line bg-surface-elevated p-4 text-sm text-ink shadow-[var(--shadow-soft)] md:left-auto md:right-6"
      role="status"
    >
      {forceMotion ? (
        <p>
          Animaciones activadas en este sitio (tu macOS sigue con “Reducir
          movimiento”).{" "}
          <button
            type="button"
            className="font-semibold text-brand underline"
            onClick={useSystemPreference}
          >
            Volver a la preferencia del sistema
          </button>
        </p>
      ) : (
        <p>
          No ves animaciones porque tu sistema tiene{" "}
          <strong>Reducir movimiento</strong> activo.{" "}
          <button
            type="button"
            className="font-semibold text-brand underline"
            onClick={enableMotion}
          >
            Activar animaciones aquí
          </button>
        </p>
      )}
    </div>
  );
}
