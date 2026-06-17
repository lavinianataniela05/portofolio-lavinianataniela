"use client";

import { useEffect, useRef, useState } from "react";

interface ProjectCarouselProps {
  images: string[];
  alt: string;
  /** auto-advance interval in ms; set 0 to disable */
  interval?: number;
}

export default function ProjectCarousel({ images, alt, interval = 0 }: ProjectCarouselProps) {
  const [idx, setIdx] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  const count = images.length;
  const hoverRef = useRef(false);

  const go = (e: React.MouseEvent, n: number) => {
    e.stopPropagation();
    setIdx((n + count) % count);
  };

  // optional auto-advance, paused on hover
  useEffect(() => {
    if (!interval || count <= 1) return;
    const t = setInterval(() => {
      if (!hoverRef.current) setIdx((i) => (i + 1) % count);
    }, interval);
    return () => clearInterval(t);
  }, [interval, count]);

  return (
    <div
      className="pcar"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      <div className="pcar-track">
        {images.map((src, i) => (
          <div key={i} className={`pcar-slide ${i === idx ? "is-active" : ""}`}>
            {failed[i] ? (
              <span className="pcar-fallback">Snapshot coming soon</span>
            ) : (
              <img
                src={src}
                alt={`${alt} — image ${i + 1}`}
                loading="lazy"
                onError={() => setFailed((f) => ({ ...f, [i]: true }))}
              />
            )}
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            className="pcar-arrow pcar-prev"
            onClick={(e) => go(e, idx - 1)}
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            type="button"
            className="pcar-arrow pcar-next"
            onClick={(e) => go(e, idx + 1)}
            aria-label="Next image"
          >
            →
          </button>

          <div className="pcar-counter">
            {idx + 1} / {count}
          </div>

          <div className="pcar-dots">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`pcar-dot ${i === idx ? "is-active" : ""}`}
                onClick={(e) => go(e, i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
