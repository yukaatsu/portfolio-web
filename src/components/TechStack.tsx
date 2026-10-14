"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioConfig } from "@/config/portfolio";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Code2 } from "lucide-react";
import {
  CppIcon,
  PythonIcon,
  NextjsIcon,
  LaravelIcon,
  HtmlCssIcon,
  RustIcon,
  ArchLinuxIcon,
  GitIcon,
} from "@/components/TechIcons";

const iconMap: Record<string, React.ReactNode> = {
  Layers: <NextjsIcon className="w-4.5 h-4.5" />,
  Server: <LaravelIcon className="w-4.5 h-4.5" />,
  Code: <HtmlCssIcon className="w-4.5 h-4.5" />,
  Terminal: <PythonIcon className="w-4.5 h-4.5" />,
  Cpu: <CppIcon className="w-4.5 h-4.5" />,
  Wrench: <RustIcon className="w-4.5 h-4.5" />,
  Monitor: <ArchLinuxIcon className="w-4.5 h-4.5" />,
  GitBranch: <GitIcon className="w-4.5 h-4.5" />,
};

export function TechStack() {
  const { techStack } = portfolioConfig;
  const categories = ["All", "Web & Frameworks", "Languages & Core", "Systems & Linux"] as const;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredTech =
    activeCategory === "All"
      ? techStack
      : techStack.filter((item) => item.category === activeCategory);

  return (
    <section id="tech-stack" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2">
          [ STACK & TOOLS ]
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
          Languages, Frameworks & Environment
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
          The tools and technologies I actually use to build web applications, backend services, and side projects.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`relative px-4 py-2 rounded-full text-xs font-mono transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1017] ${
              activeCategory === cat
                ? "text-white"
                : "text-zinc-400 hover:text-zinc-200 bg-zinc-950/60 border border-white/[0.06]"
            }`}
          >
            {activeCategory === cat && (
              <motion.div
                layoutId="techTabPill"
                className="absolute inset-0 rounded-full bg-white/[0.1] border border-white/[0.18]"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </div>

      {/* Filterable Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <AnimatePresence>
          {filteredTech.map((tech, idx) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              <SpotlightCard density="compact" className="h-full flex flex-col justify-between">
                <div className="flex flex-col flex-1">
                  {/* Top Header Row: Dedicated Logo Badge on Left + Clean Terminal Node Index on Right */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
                      {iconMap[tech.icon] || <Code2 className="w-4.5 h-4.5 text-zinc-400" />}
                    </div>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest px-1.5 py-0.5 rounded bg-white/[0.02] border border-white/[0.04]">
                      SYS-0{idx + 1}
                    </span>
                  </div>

                  {/* Technology Title */}
                  <h4 className="text-sm sm:text-base font-semibold text-white tracking-tight line-clamp-1 mb-1" title={tech.name}>
                    {tech.name}
                  </h4>

                  {/* Dedicated Proficiency Badge: Full-width container, zero wrapping risk */}
                  <div className="flex items-center mb-2.5">
                    <span className="inline-flex items-center text-[10px] font-mono text-cyan-400/90 uppercase tracking-wider px-2 py-0.5 rounded-md bg-cyan-950/40 border border-cyan-500/20 whitespace-nowrap">
                      {tech.proficiency}
                    </span>
                  </div>

                  {/* Technology Description with Natural Flow */}
                  <p className="text-xs text-zinc-400 leading-relaxed mb-3 min-h-[3.75rem] flex-1">
                    {tech.description}
                  </p>
                </div>

                {/* Bottom Meta */}
                <div className="pt-2.5 border-t border-white/[0.05] text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  {tech.category}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
