"use client";

import { useState } from "react";

type Service = { name: string; price: string | null };
type Category = { title: string; services: Service[] };

export default function ServiceMenu({ categories }: { categories: Category[] }) {
  const [active, setActive] = useState(0);
  const current = categories[active];

  return (
    <div>
      {/* Tabs */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "56px",
        }}
      >
        {categories.map((cat, i) => {
          const isActive = i === active;
          return (
            <button
              key={cat.title}
              onClick={() => setActive(i)}
              style={{
                padding: "9px 20px",
                borderRadius: "999px",
                fontSize: "13px",
                letterSpacing: "0.4px",
                border: isActive
                  ? "1px solid #d4af37"
                  : "1px solid rgba(212,175,55,.22)",
                background: isActive ? "rgba(212,175,55,.1)" : "transparent",
                color: isActive ? "#d4af37" : "#8f8f8f",
                cursor: "pointer",
                transition: "all .2s ease",
              }}
            >
              {cat.title}
            </button>
          );
        })}
      </div>

      {/* Active category */}
      <div key={current.title} className="menu-fade" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h3
          style={{
            color: "#d4af37",
            fontSize: "22px",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          {current.title}
        </h3>
        <div className="gold-divider" style={{ margin: "0 auto 36px" }} />

        <div
          style={{
            columnCount: current.services.length > 7 ? 2 : 1,
            columnGap: "56px",
          }}
        >
          {current.services.map((s) => (
            <div
              key={s.name}
              style={{
                display: "flex",
                alignItems: "baseline",
                padding: "10px 0",
                breakInside: "avoid",
              }}
            >
              <span style={{ color: "#e0e0e0", fontSize: "15.5px", whiteSpace: "nowrap" }}>
                {s.name}
              </span>
              <span
                style={{
                  flex: 1,
                  margin: "0 10px",
                  borderBottom: "1px dotted rgba(212,175,55,.3)",
                  transform: "translateY(-4px)",
                }}
              />
              {s.price ? (
                <span
                  style={{
                    color: "#d4af37",
                    fontWeight: 600,
                    fontSize: "15.5px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {s.price}
                </span>
              ) : (
                <span style={{ color: "#d4af37", fontSize: "13px" }}>&#10003;</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .menu-fade {
          animation: fadein 0.25s ease;
        }
        @keyframes fadein {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
