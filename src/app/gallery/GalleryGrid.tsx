"use client";

import { useState, useCallback, useEffect } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";

export default function GalleryGrid({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);
  const showNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gridAutoRows: "220px",
          gridAutoFlow: "dense",
          gap: "14px",
        }}
      >
        {images.map((src, i) => {
          const featured = i % 7 === 0;
          return (
            <button
              key={src}
              onClick={() => setActiveIndex(i)}
              className="group"
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "10px",
                border: "1px solid rgba(212,175,55,.16)",
                gridColumn: featured ? "span 2" : "span 1",
                gridRow: featured ? "span 2" : "span 1",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <Image
                src={src}
                alt={`Black & White Bridal Studio — ${i + 1}`}
                fill
                className="transition-transform duration-500 ease-out group-hover:scale-110"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,.75))",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "14px",
                }}
              >
                <span
                  style={{
                    color: "#d4af37",
                    fontSize: "11.5px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                  }}
                >
                  View
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {activeIndex !== null && (
        <div
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(5,5,5,.94)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 20px",
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              color: "#d4af37",
              fontSize: "30px",
              background: "none",
              border: "none",
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            &times;
          </button>

          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
              style={navArrowStyle("left")}
            >
              &#8249;
            </button>
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative", width: "min(90vw, 900px)", height: "80vh" }}
          >
            <Image
              src={images[activeIndex]}
              alt={`Black & White Bridal Studio — ${activeIndex + 1}`}
              fill
              style={{ objectFit: "contain" }}
              sizes="90vw"
              priority
            />
          </div>

          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              style={navArrowStyle("right")}
            >
              &#8250;
            </button>
          )}

          <span
            style={{
              position: "absolute",
              bottom: "24px",
              color: "#8f8f8f",
              fontSize: "13px",
              letterSpacing: "0.5px",
            }}
          >
            {activeIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}

function navArrowStyle(side: "left" | "right"): CSSProperties {
  return {
    position: "absolute",
    [side]: "16px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#d4af37",
    fontSize: "36px",
    background: "rgba(212,175,55,.08)",
    border: "1px solid rgba(212,175,55,.25)",
    borderRadius: "50%",
    width: "48px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    lineHeight: 1,
  };
}
