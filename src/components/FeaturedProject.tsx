"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioConfig } from "@/config/portfolio";
import { SpotlightCard } from "@/components/SpotlightCard";
import { MagneticButton } from "@/components/MagneticButton";
import {
  Copy,
  Check,
  Activity,
  ShieldCheck,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import { GitHubRelease } from "@/lib/github";
import { SignalPathComparator } from "@/components/SignalPathComparator";

interface FeaturedProjectProps {
  release?: GitHubRelease | null;
}

export function FeaturedProject({ release }: FeaturedProjectProps) {
  const { flagship } = portfolioConfig;
  const [activeTab, setActiveTab] = useState<"architecture" | "telemetry" | "install">("architecture");
  const [copiedClone, setCopiedClone] = useState(false);

  const displayVersion = release?.version
    ? `v${release.version.replace(/^v/, "")} (Latest Release)`
    : flagship.status;
  const releasesUrl = release?.htmlUrl || flagship.releasesUrl;
  const apkDownloadUrl = release?.apkDownloadUrl;

  const cloneCommand = `git clone ${flagship.repoUrl}.git`;

  const handleCopyClone = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2000);
  };

  return (
    <section id="flagship" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Editorial Section Header */}
      <div className="flex flex-col items-start mb-12">
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2">
          [ FLAGSHIP CASE STUDY · KERNEL AUDIO ]
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
          {flagship.title}
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          {flagship.tagline}
        </p>
      </div>

      {/* Main Double-Bezel Showcase Panel */}
      <SpotlightCard className="mb-14 p-6 sm:p-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 pb-8 border-b border-white/[0.06]">
          <div className="space-y-4 max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-3xl font-mono font-bold text-white tracking-wider">
                {flagship.title}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {displayVersion}
              </span>
              {release?.publishedAt && (
                <span className="text-xs font-mono text-zinc-500">
                  Published {new Date(release.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
              )}
            </div>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {flagship.description}
            </p>

            {/* Language Composition Bar */}
            <div className="pt-2">
              <div className="flex justify-between items-center text-xs font-mono text-zinc-400 mb-2">
                <span className="uppercase tracking-wider text-[11px] text-zinc-500">Architecture Footprint</span>
                <span className="text-zinc-400">Kernel C & Kotlin NDK</span>
              </div>
              <div className="h-2 w-full rounded-full bg-zinc-900 overflow-hidden flex gap-0.5">
                {flagship.languageBreakdown.map((lang) => (
                  <div
                    key={lang.name}
                    style={{
                      width: `${lang.percentage}%`,
                      backgroundColor: lang.color,
                    }}
                    title={`${lang.name}: ${lang.percentage}%`}
                    className="h-full transition-all duration-500 hover:opacity-80"
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono text-zinc-400">
                {flagship.languageBreakdown.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span>
                      {lang.name} <strong className="text-zinc-200">{lang.percentage}%</strong>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs (Island Button Architecture) */}
          <div className="flex flex-wrap lg:flex-col gap-3 w-full lg:w-auto">
            {apkDownloadUrl && (
              <MagneticButton
                href={apkDownloadUrl}
                target="_blank"
                className="w-full justify-between rounded-full bg-zinc-100 pl-5 pr-2 py-2 text-xs sm:text-sm font-semibold text-zinc-950 shadow-lg shadow-white/5 hover:bg-white"
              >
                <span>Download APK {release?.apkSizeMb ? `(${release.apkSizeMb} MB)` : ""}</span>
                <span className="w-8 h-8 rounded-full bg-zinc-950 text-white flex items-center justify-center transition-transform group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </MagneticButton>
            )}
            <MagneticButton
              href={releasesUrl}
              target="_blank"
              className="w-full justify-between rounded-full border border-white/10 bg-zinc-900/80 pl-5 pr-2 py-2 text-xs sm:text-sm font-medium text-zinc-300 hover:border-white/20 hover:text-white"
            >
              <span>Release & Notes</span>
              <span className="w-8 h-8 rounded-full bg-white/[0.06] text-zinc-300 flex items-center justify-center transition-transform group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </MagneticButton>
            <MagneticButton
              href={flagship.repoUrl}
              target="_blank"
              className="w-full justify-between rounded-full border border-white/10 bg-zinc-900/80 pl-5 pr-2 py-2 text-xs sm:text-sm font-medium text-zinc-300 hover:border-white/20 hover:text-white"
            >
              <span>Source Repository</span>
              <span className="w-8 h-8 rounded-full bg-white/[0.06] text-zinc-300 flex items-center justify-center transition-transform group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </MagneticButton>
          </div>
        </div>

        {/* Interactive Tab Switcher (Harmonized Liquid Glass Track) */}
        <div className="pt-8">
          <div className="flex flex-wrap gap-2 p-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm max-w-lg mb-8">
            <button
              onClick={() => setActiveTab("architecture")}
              className={`relative flex-1 py-2 px-3 rounded-full text-xs font-mono transition-colors ${
                activeTab === "architecture" ? "text-white" : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {activeTab === "architecture" && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 rounded-full bg-white/[0.12] border border-white/[0.18] shadow-sm"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">Architecture</span>
            </button>

            <button
              onClick={() => setActiveTab("telemetry")}
              className={`relative flex-1 py-2 px-3 rounded-full text-xs font-mono transition-colors ${
                activeTab === "telemetry" ? "text-white" : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {activeTab === "telemetry" && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 rounded-full bg-white/[0.1] border border-white/[0.15]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">Hardware Telemetry</span>
            </button>

            <button
              onClick={() => setActiveTab("install")}
              className={`relative flex-1 py-2 px-3 rounded-full text-xs font-mono transition-colors ${
                activeTab === "install" ? "text-white" : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {activeTab === "install" && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 rounded-full bg-white/[0.1] border border-white/[0.15]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">Terminal & Clone</span>
            </button>
          </div>

          {/* Tab Contents */}
          <AnimatePresence mode="wait">
            {activeTab === "architecture" && (
              <motion.div
                key="arch"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {flagship.architecturePoints.map((pt, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl border border-white/[0.06] bg-zinc-950/60 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1.5">
                        Layer 0{i + 1}: {pt.layer}
                      </span>
                      <h4 className="text-sm font-semibold text-white mb-2">{pt.component}</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">{pt.impact}</p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                      <Zap className="w-3.5 h-3.5" />
                      <span>{pt.badge}</span>
                    </div>
                  </div>
                ))}

                {/* Interactive Signal Path Comparator */}
                <div className="col-span-1 md:col-span-2 lg:col-span-4">
                  <SignalPathComparator />
                </div>
              </motion.div>
            )}

            {activeTab === "telemetry" && (
              <motion.div
                key="telemetry"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {flagship.hardwareTelemetry.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-white/[0.06] bg-zinc-950/60 relative overflow-hidden group"
                  >
                    <div className="text-xs font-mono text-zinc-400 mb-1">{item.label}</div>
                    <div className="flex items-baseline gap-1.5 my-2">
                      <span className="text-3xl font-mono font-bold text-white tracking-tight">
                        {item.value}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">{item.unit}</span>
                    </div>
                    <p className="text-xs text-zinc-500">{item.subtext}</p>
                    <div className="absolute top-4 right-4 text-white/10 group-hover:text-emerald-400/40 transition-colors">
                      <Activity className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "install" && (
              <motion.div
                key="install"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-white/[0.08] bg-black/90 p-5 font-mono text-xs"
              >
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="text-zinc-500 ml-2">bash — tsrossa build & clone</span>
                  </div>
                  <button
                    onClick={handleCopyClone}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors border border-white/10"
                  >
                    {copiedClone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="space-y-1.5 text-zinc-300">
                  <p className="text-zinc-500"># 1. Clone repository with native submodules</p>
                  <p className="text-zinc-100">{cloneCommand}</p>
                  <p className="text-zinc-500 mt-3"># 2. Build native NDK libs & assemble APK</p>
                  <p>cd tsrossa</p>
                  <p>./gradlew assembleRelease</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </SpotlightCard>

      {/* Engineering Highlights Asymmetric Grid */}
      <div id="architecture" className="mb-14">
        <div className="mb-8">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500">
            [ ARCHITECTURAL RIGOR ]
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Bypassing Android AudioHAL at the Kernel Boundary
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {flagship.engineeringHighlights.map((hl, i) => (
            <SpotlightCard key={i} className="flex flex-col justify-between p-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-[10px] font-mono uppercase tracking-wider text-zinc-300">
                    {hl.tag}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-zinc-600" />
                </div>
                <h4 className="text-base font-semibold text-white mb-2">{hl.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{hl.description}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
