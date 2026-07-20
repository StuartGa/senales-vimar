"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type MotionContextValue = {
  reduceMotion: boolean;
  systemReduceMotion: boolean;
  forceMotion: boolean;
  enableMotion: () => void;
  useSystemPreference: () => void;
};

const MotionContext = createContext<MotionContextValue | null>(null);

const STORAGE_KEY = "vimar-motion";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [systemReduceMotion, setSystemReduceMotion] = useState(false);
  const [forceMotion, setForceMotion] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const params = new URLSearchParams(window.location.search);
    const forced =
      params.get("motion") === "on" ||
      params.get("anim") === "1" ||
      stored === "force";

    const sync = () => setSystemReduceMotion(media.matches);
    sync();
    setForceMotion(forced);
    setReady(true);

    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const reduceMotion = ready ? systemReduceMotion && !forceMotion : false;

  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.toggle("reduce-motion", reduceMotion);
    document.documentElement.classList.toggle("allow-motion", !reduceMotion);
  }, [ready, reduceMotion]);

  const enableMotion = useCallback(() => {
    window.localStorage.setItem(STORAGE_KEY, "force");
    setForceMotion(true);
    window.location.reload();
  }, []);

  const useSystemPreference = useCallback(() => {
    window.localStorage.removeItem(STORAGE_KEY);
    setForceMotion(false);
    window.location.reload();
  }, []);

  const value = useMemo(
    () => ({
      reduceMotion,
      systemReduceMotion,
      forceMotion,
      enableMotion,
      useSystemPreference,
    }),
    [
      reduceMotion,
      systemReduceMotion,
      forceMotion,
      enableMotion,
      useSystemPreference,
    ],
  );

  return (
    <MotionContext.Provider value={value}>{children}</MotionContext.Provider>
  );
}

export function useMotionPreference() {
  const ctx = useContext(MotionContext);
  if (!ctx) {
    throw new Error("useMotionPreference must be used within MotionProvider");
  }
  return ctx;
}
