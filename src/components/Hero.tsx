"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { portfolioConfig } from "@/config/portfolio";
import { MagneticButton } from "@/components/MagneticButton";
import { ArrowUpRight, Terminal, Layers, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { GitHubRelease } from "@/lib/github";
import { OperatorPortrait } from "@/components/ui/OperatorPortrait";

interface HeroProps {
  onOpenCommand: () => void;
  onExploreProjects?: () => void;
  release?: GitHubRelease | null;
}

export function Hero({ onOpenCommand, onExploreProjects, release }: HeroProps) {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-[92dvh] flex flex-col justify-center pt-32 lg:pt-36 pb-20 px-4 md:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center text-left my-auto">
        {/* Left Column (7 cols): Editorial Narrative, Telemetry & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start">
        {/* Release Pill Badge linking to Projects tab */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <button
            onClick={() => {
              if (onExploreProjects) onExploreProjects();
            }}
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-zinc-950/80 px-3.5 py-1.5 text-xs text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:bg-zinc-900/80 hover:text-white cursor-pointer"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono text-[11px] text-zinc-400">
              Latest open-source release:
            </span>
            <span className="font-sans text-xs text-zinc-200 group-hover:text-cyan-300 transition-colors">
              tsrossa {release?.version ? `v${release.version.replace(/^v/, "")}` : "v1.4.0-BETA"} →
            </span>
          </button>
        </motion.div>

        {/* Structural Editorial Header */}
        <div className="space-y-3 mb-6 max-w-4xl">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.04]"
          >
            {portfolioConfig.personal.name}
          </motion.h1>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-1"
          >
            {/* Sleek inline monospace identity pill */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono">
              <span className="text-cyan-400 font-semibold">{portfolioConfig.personal.alias}</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">@{portfolioConfig.personal.handle}</span>
            </span>

            <span className="text-base sm:text-xl font-medium text-zinc-300">
              {portfolioConfig.personal.bioHeadline}
            </span>
          </motion.div>
        </div>

        {/* Focus Tags */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="flex flex-wrap items-center gap-2 mb-8 text-xs font-mono"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900/80 border border-white/[0.08] text-zinc-300">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Web Apps (Next.js & Laravel)</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900/80 border border-white/[0.08] text-zinc-300">
            <Code2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>UI Engineering</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900/80 border border-white/[0.08] text-zinc-300">
            <Terminal className="w-3.5 h-3.5 text-violet-400" />
            <span>Linux & Open Source</span>
          </div>
        </motion.div>

        {/* Concise Value Proposition */}
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-10"
        >
          {portfolioConfig.personal.bioSubheadline}
        </motion.p>

        {/* High-End Nested CTA Group */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          {/* Button-in-Button Primary Island */}
          <MagneticButton
            onClick={() => {
              if (onExploreProjects) onExploreProjects();
            }}
            className="rounded-full bg-zinc-100 pl-6 pr-2 py-2 text-xs sm:text-sm font-semibold text-zinc-950 shadow-xl shadow-white/5 transition-all hover:bg-white"
          >
            <span className="mr-3">View Projects</span>
            <span className="w-8 h-8 rounded-full bg-zinc-950 text-white flex items-center justify-center transition-transform group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </MagneticButton>

          {/* Button-in-Button Secondary Glass Island */}
          <MagneticButton
            href={portfolioConfig.personal.github}
            target="_blank"
            className="rounded-full border border-white/10 bg-zinc-900/80 pl-5 pr-2 py-2 text-xs sm:text-sm font-medium text-zinc-300 backdrop-blur-md transition-all hover:border-white/20 hover:text-white"
          >
            <GithubIcon className="w-4 h-4 mr-2.5 text-zinc-400 group-hover:text-white transition-colors" />
            <span className="mr-3">GitHub (@{portfolioConfig.personal.handle})</span>
            <span className="w-8 h-8 rounded-full bg-white/[0.06] text-zinc-300 flex items-center justify-center transition-transform group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </MagneticButton>
        </motion.div>

          {/* Command palette navigation hint */}
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center gap-2 text-xs font-mono text-zinc-500 cursor-pointer hover:text-zinc-300 transition-colors"
            onClick={onOpenCommand}
          >
            <span>Press</span>
            <kbd className="px-2 py-0.5 rounded bg-zinc-900 border border-white/10 text-zinc-300">
              Ctrl + K
            </kbd>
            <span>or</span>
            <kbd className="px-2 py-0.5 rounded bg-zinc-900 border border-white/10 text-zinc-300">
              /
            </kbd>
            <span>for quick palette</span>
          </motion.div>
        </div>

        {/* Right Column (5 cols): Precision Operator Dossier Portrait */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 w-full flex justify-center lg:justify-end"
        >
          <OperatorPortrait />
        </motion.div>
      </div>
    </section>
  );
}
