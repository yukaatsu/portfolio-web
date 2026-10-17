"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioConfig } from "@/config/portfolio";
import { ShieldCheck, Terminal } from "lucide-react";

interface OperatorPortraitProps {
  className?: string;
}

export function OperatorPortrait({ className = "" }: OperatorPortraitProps) {
  const { personal } = portfolioConfig;
  const [imgSrc, setImgSrc] = useState<string>(personal.avatarUrl);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(personal.fallbackAvatarUrl);
    }
  };

  return (
    <div className={`relative group w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] lg:ml-auto mx-auto ${className}`}>
      {/* Outer Optical Bezel Shell */}
      <div className="relative rounded-[2rem] p-1.5 liquid-glass-shell ring-1 ring-white/[0.08] transition-all duration-700 hover:ring-cyan-400/30 hover:shadow-[0_24px_50px_-15px_rgba(6,182,212,0.15)]">
        {/* Specular incident highlight top edge */}
        <div className="pointer-events-none absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-80" />

        {/* Inner Glass Frame */}
        <div className="relative z-10 w-full rounded-[calc(2rem-0.375rem)] liquid-glass-core overflow-hidden p-3 sm:p-4">
          {/* HUD Top Bar */}
          <div className="flex items-center justify-between pb-2.5 sm:pb-3 px-1 text-[10px] font-mono border-b border-white/[0.06] mb-2.5 sm:mb-3">
            <div className="flex items-center gap-1.5 text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>[ @{personal.handle} ]</span>
            </div>
            <span className="text-zinc-500 uppercase tracking-widest text-[9px] sm:text-[10px]">
              ID · UTC+7
            </span>
          </div>

          {/* Portrait Viewport */}
          <div className="relative aspect-[4/4.3] max-h-[360px] sm:max-h-none w-full rounded-2xl overflow-hidden bg-zinc-950/90 shadow-inner">
            {/* Precision Corner Registration Crosshairs */}
            <svg viewBox="0 0 10 10" className="absolute top-2.5 left-2.5 z-20 w-2.5 h-2.5 stroke-zinc-500/70 pointer-events-none select-none" strokeWidth="1.2">
              <path d="M5 1v8M1 5h8" />
            </svg>
            <svg viewBox="0 0 10 10" className="absolute top-2.5 right-2.5 z-20 w-2.5 h-2.5 stroke-zinc-500/70 pointer-events-none select-none" strokeWidth="1.2">
              <path d="M5 1v8M1 5h8" />
            </svg>
            <svg viewBox="0 0 10 10" className="absolute bottom-2.5 left-2.5 z-20 w-2.5 h-2.5 stroke-zinc-500/70 pointer-events-none select-none" strokeWidth="1.2">
              <path d="M5 1v8M1 5h8" />
            </svg>
            <svg viewBox="0 0 10 10" className="absolute bottom-2.5 right-2.5 z-20 w-2.5 h-2.5 stroke-zinc-500/70 pointer-events-none select-none" strokeWidth="1.2">
              <path d="M5 1v8M1 5h8" />
            </svg>

            {/* Micro grid scanline texture overlay */}
            <div
              className="absolute inset-0 z-10 pointer-events-none opacity-40 mix-blend-overlay"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 4px)",
              }}
            />

            {/* Profile Image with Editorial Monochrome Default & Full Color Hover */}
            <Image
              src={imgSrc}
              alt={personal.name}
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              priority
              onError={handleError}
              className="object-cover object-center grayscale contrast-[1.08] brightness-95 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
            />

            {/* Atmospheric Depth Vignette (Dark Bottom Fade) */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0d1017] via-[#0d1017]/30 to-transparent pointer-events-none" />

            {/* Inside Frame Bottom Telemetry HUD */}
            <div className="absolute bottom-2.5 sm:bottom-3 inset-x-2.5 sm:inset-x-3 z-20 p-2.5 sm:p-3 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-white/[0.08]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-2 mb-1.5">
                <span className="text-xs font-semibold text-white tracking-tight flex items-center gap-1.5 truncate max-w-full">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{personal.name} ({personal.alias})</span>
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded-full shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="hidden sm:inline">Available for projects</span>
                  <span className="sm:hidden">Available</span>
                </span>
              </div>

              <div className="flex flex-col gap-1 text-[10px] font-mono text-zinc-400 pt-1.5 border-t border-white/[0.06]">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 truncate">Focus: Frontend · Backend · Full-Stack</span>
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                  <span className="flex items-center gap-1 text-zinc-400 truncate">
                    <ShieldCheck className="w-3 h-3 text-cyan-400 shrink-0" />
                    Environment: Arch Linux
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
