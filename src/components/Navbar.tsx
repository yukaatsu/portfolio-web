"use client";

import React from "react";
import { portfolioConfig } from "@/config/portfolio";
import { Command as CmdIcon, User, FolderGit2 } from "lucide-react";
import { motion } from "motion/react";

import Image from "next/image";

export type PortfolioTab = "developer" | "projects";

interface NavbarProps {
  activeTab: PortfolioTab;
  onTabChange: (tab: PortfolioTab) => void;
  onOpenCommand: () => void;
}

export function Navbar({ activeTab, onTabChange, onOpenCommand }: NavbarProps) {
  const [avatarSrc, setAvatarSrc] = React.useState<string>(portfolioConfig.personal.avatarUrl);
  const [avatarError, setAvatarError] = React.useState(false);

  const handleAvatarError = () => {
    if (!avatarError) {
      setAvatarError(true);
      setAvatarSrc(portfolioConfig.personal.fallbackAvatarUrl);
    }
  };

  return (
    <header className="fixed top-2.5 sm:top-5 inset-x-0 z-40 flex justify-center px-2.5 sm:px-4 pointer-events-none">
      <nav
        className="pointer-events-auto relative flex items-center justify-between gap-2 sm:gap-6 rounded-full bg-[#111622]/75 backdrop-blur-2xl border border-white/20 px-3 py-1.5 sm:px-6 sm:py-2.5 shadow-2xl shadow-black/80 max-w-[calc(100vw-1.25rem)] sm:max-w-fit overflow-hidden transform-gpu isolate"
        style={{
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          backdropFilter: "blur(24px) saturate(180%)",
        }}
      >
        {/* Specular incident top hairline with subtle chromatic edge dispersion */}
        <div className="pointer-events-none absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-300/30 via-white/60 to-transparent" />

        {/* Left: Brand Identity with Operator Micro-Avatar */}
        <button
          onClick={() => onTabChange("developer")}
          className="flex items-center gap-2 group cursor-pointer text-left shrink-0"
        >
          <div className="relative flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full overflow-hidden ring-1 ring-white/15 bg-zinc-900 shrink-0">
            <Image
              src={avatarSrc}
              alt={portfolioConfig.personal.name}
              width={28}
              height={28}
              onError={handleAvatarError}
              className="h-full w-full object-cover object-center grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
            />
            <span className="absolute bottom-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 ring-1 ring-black" />
          </div>
          <span className="font-mono text-xs font-semibold tracking-tight text-zinc-200 group-hover:text-white transition-colors">
            {portfolioConfig.personal.alias}
            <span className="text-zinc-500 font-normal ml-1 hidden md:inline">
              / @{portfolioConfig.personal.handle}
            </span>
          </span>
        </button>

        {/* Center: Main View Mode Tabs (Clean glass track without conflicting nested blur) */}
        <div className="flex items-center p-0.5 sm:p-1 rounded-full bg-white/[0.04] border border-white/[0.08] shrink-0">
          <button
            onClick={() => onTabChange("developer")}
            className={`relative flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 text-xs font-medium rounded-full transition-colors ${
              activeTab === "developer" ? "text-white" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {activeTab === "developer" && (
              <motion.div
                layoutId="navActiveTabPill"
                className="absolute inset-0 rounded-full bg-white/[0.1] border border-white/[0.15] shadow-sm"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <User className="w-3.5 h-3.5 relative z-10 shrink-0" />
            <span className="relative z-10 hidden sm:inline">Developer Profile</span>
            <span className="relative z-10 sm:hidden">Profile</span>
          </button>

          <button
            onClick={() => onTabChange("projects")}
            className={`relative flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 text-xs font-medium rounded-full transition-colors ${
              activeTab === "projects" ? "text-white" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {activeTab === "projects" && (
              <motion.div
                layoutId="navActiveTabPill"
                className="absolute inset-0 rounded-full bg-white/[0.1] border border-white/[0.15] shadow-sm"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <FolderGit2 className="w-3.5 h-3.5 relative z-10 shrink-0" />
            <span className="relative z-10 hidden sm:inline">Projects Showcase</span>
            <span className="relative z-10 sm:hidden">Projects</span>
          </button>
        </div>

        {/* Right: Status indicator + Cmd+K Trigger */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Status badge */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Web & Systems</span>
          </div>

          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommand}
            className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-zinc-100 hover:border-violet-500/40 hover:bg-violet-600/10 transition-all text-xs font-mono group"
            title="Search and shortcuts"
            aria-label="Search and command palette"
          >
            <CmdIcon className="w-3 h-3 group-hover:text-violet-400 transition-colors" />
            <span className="hidden sm:inline">Cmd K</span>
            <span className="sm:hidden">K</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
