"use client";

import React, { useRef, useCallback, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  density?: "compact" | "normal";
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(139, 92, 246, 0.12)",
  density = "normal",
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const isCompact = density === "compact";

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || !spotlightRef.current) return;
    // Guard against touch devices where hover/pointer moves are simulated
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlightRef.current.style.setProperty("--x", `${x}px`);
    spotlightRef.current.style.setProperty("--y", `${y}px`);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return;
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = "1";
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = "0";
    }
  }, []);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative liquid-glass-shell ring-1 ring-white/[0.08] transition-all duration-500 hover:ring-white/[0.2] hover:shadow-[0_24px_50px_-15px_rgba(0,0,0,0.85)] h-full flex flex-col",
        isCompact ? "rounded-2xl p-1" : "rounded-[2rem] p-1.5"
      )}
    >
      {/* Outer Shell Spotlight Caustic: Driven purely by CSS variables on the compositor thread */}
      <div
        ref={spotlightRef}
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300",
          isCompact ? "rounded-2xl" : "rounded-[2rem]"
        )}
        style={
          {
            "--x": "0px",
            "--y": "0px",
            background: `radial-gradient(550px circle at var(--x) var(--y), ${spotlightColor}, transparent 55%)`,
          } as React.CSSProperties
        }
      />

      {/* Optical Specular Incident Highlight along top edge */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-80" />

      {/* Inner Core: Concentric squircle, tactile optical depth */}
      <div
        className={cn(
          "relative z-10 w-full h-full liquid-glass-core transition-all duration-500",
          isCompact
            ? "rounded-[calc(1rem-0.125rem)] p-4 sm:p-5"
            : "rounded-[calc(2rem-0.375rem)] p-6 md:p-8",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
