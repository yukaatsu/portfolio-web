"use client";

import React, { useState } from "react";
import { Navbar, PortfolioTab } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedProject } from "@/components/FeaturedProject";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";
import { CommandPalette } from "@/components/CommandPalette";
import { motion, AnimatePresence } from "motion/react";
import { GitHubRelease } from "@/lib/github";

interface PortfolioClientProps {
  initialRelease: GitHubRelease | null;
}

export function PortfolioClient({ initialRelease }: PortfolioClientProps) {
  const [activeTab, setActiveTab] = useState<PortfolioTab>("developer");
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  const handleTabSwitch = (tab: PortfolioTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[#0d1017] bg-grid-pattern selection:bg-cyan-500/25 selection:text-white">
      {/* Navigation with Tab Switcher */}
      <Navbar
        activeTab={activeTab}
        onTabChange={handleTabSwitch}
        onOpenCommand={() => setCommandPaletteOpen(true)}
      />

      {/* Main Content with Smooth Spring Transition between Views */}
      <main className="relative z-10 flex flex-col pt-4">
        <AnimatePresence mode="wait">
          {activeTab === "developer" ? (
            <motion.div
              key="developer-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col"
            >
              {/* Profile, Bio, Philosophy, and Tech/Linux Stack */}
              <Hero
                release={initialRelease}
                onOpenCommand={() => setCommandPaletteOpen(true)}
                onExploreProjects={() => handleTabSwitch("projects")}
              />
              <TechStack />
              <Contact />
            </motion.div>
          ) : (
            <motion.div
              key="projects-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col pt-20"
            >
              {/* Flagship Case Study (tsrossa) with Live GitHub Release */}
              <FeaturedProject release={initialRelease} />
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Interactive Command Palette */}
      <CommandPalette
        open={commandPaletteOpen}
        onOpenChange={setCommandPaletteOpen}
        onSelectTab={handleTabSwitch}
      />
    </div>
  );
}
