"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionPreference } from "@/components/motion/MotionProvider";
import { withBase } from "@/lib/paths";

const HERO_VIDEO_SRC =
  "https://video.wixstatic.com/video/bf14a5_55b98fe931a74a8994f10db7e7f6b8e7/720p/mp4/file.mp4";
const HERO_POSTER = withBase("/images/hero.jpg");

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { reduceMotion } = useMotionPreference();
  const [canPlayVideo, setCanPlayVideo] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reduceMotion) {
      video.pause();
      setCanPlayVideo(false);
      return;
    }

    const tryPlay = async () => {
      try {
        video.muted = true;
        await video.play();
        setCanPlayVideo(true);
      } catch {
        setCanPlayVideo(false);
      }
    };

    tryPlay();
  }, [reduceMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_POSTER}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          canPlayVideo ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden
      />
      {!reduceMotion ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            canPlayVideo ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER}
          aria-label="Video de señalización vial Señales Vimar"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
