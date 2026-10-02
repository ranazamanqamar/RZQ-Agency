"use client";

import { useEffect, useRef } from "react";

const parts: { text: string; italic?: boolean }[] = [
  { text: "Strong systems " },
  { text: "require", italic: true },
  { text: " strong teams. Since 2016, we’ve " },
  { text: "built", italic: true },
  {
    text: " a multidisciplinary team united by shared standards, professional discipline, and commitment to our mission.",
  },
];

const words = parts.flatMap((part) =>
  part.text
    .split(/(\s+)/)
    .filter(Boolean)
    .map((bit) => ({ bit, italic: part.italic && bit.trim().length > 0 })),
);

export function ScrollFillHeading() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const nodes = [...root.querySelectorAll<HTMLElement>("[data-word]")];
    let frame = 0;

    const update = () => {
      frame = 0;
      const view = window.innerHeight;
      const start = view * 0.72;
      const end = view * 0.36;
      const span = start - end;
      for (const node of nodes) {
        const rect = node.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const progress = Math.min(1, Math.max(0, (start - mid) / span));
        node.style.color = `rgba(255, 255, 255, ${(0.4 + progress * 0.6).toFixed(3)})`;
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <h2 ref={ref} className="mt-4 max-w-4xl text-3xl font-medium leading-snug md:text-5xl">
      {words.map((word, index) =>
        /^\s+$/.test(word.bit) ? (
          word.bit
        ) : (
          <span
            key={index}
            data-word=""
            className={word.italic ? "font-serif-italic font-normal" : undefined}
            style={{ color: "rgba(255, 255, 255, 0.4)" }}
          >
            {word.bit}
          </span>
        ),
      )}
    </h2>
  );
}
