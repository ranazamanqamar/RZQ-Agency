"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Play, X } from "lucide-react";

const SHOWREEL_SRC = "/works/showreel.mp4";

export function HeroPlayShowreel() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const close = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    void video.play().catch(() => {
      /* autoplay may require user gesture; controls remain available */
    });
  }, [open]);

  const modal =
    open && mounted
      ? createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Works showreel"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close showreel"
              className="absolute right-4 top-4 z-[110] flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 md:right-8 md:top-8"
            >
              <X className="h-5 w-5" />
            </button>

            <div
              className="relative w-full max-w-5xl overflow-hidden rounded-[24px] border border-white/10 bg-[#0b0b0b] shadow-[0_40px_120px_rgba(0,0,0,0.65)]"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={videoRef}
                src={SHOWREEL_SRC}
                className="aspect-video w-full bg-black object-cover"
                controls
                playsInline
                autoPlay
                preload="auto"
              />
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Play works showreel"
        className="group/play relative inline-flex h-16 w-[6.75rem] shrink-0 overflow-hidden rounded-2xl align-middle shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition hover:scale-[1.03] md:h-[4.75rem] md:w-[8.25rem]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <span className="absolute inset-0 bg-[#6a52ff]" />
        <img
          src="/works/covers/nextgpu.avif"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top opacity-70 transition duration-500 group-hover/play:scale-105"
        />
        <span className="absolute bottom-1.5 left-1.5 inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur">
          <Play className="h-2 w-2 fill-white text-white" />
          Play
        </span>
      </button>
      {modal}
    </>
  );
}
