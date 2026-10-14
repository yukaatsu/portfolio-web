"use client";

import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import {
  ExternalLink,
  Mail,
  Copy,
  Check,
  Disc3,
  Cpu,
  Layers,
  Sparkles,
  X,
  FileCode2,
} from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { portfolioConfig } from "@/config/portfolio";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectTab?: (tab: "developer" | "projects") => void;
}

export function CommandPalette({ open, onOpenChange, onSelectTab }: CommandPaletteProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedClone, setCopiedClone] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !e.metaKey && !e.ctrlKey)) {
        const target = e.target as HTMLElement;
        if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape" && open) {
        onOpenChange(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioConfig.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyClone = () => {
    navigator.clipboard.writeText(`git clone ${portfolioConfig.flagship.repoUrl}.git`);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2000);
  };

  const scrollTo = (id: string) => {
    onOpenChange(false);
    // Allow React/Motion tab transition to mount the target section if needed
    const performScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return true;
      }
      return false;
    };

    if (!performScroll()) {
      // Retry in the next frames once the DOM is committed
      requestAnimationFrame(() => {
        setTimeout(performScroll, 80);
      });
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/70 backdrop-blur-md animate-in fade-in-0 duration-200">
      <div
        className="fixed inset-0"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command Palette"
        className="relative w-full max-w-xl overflow-hidden rounded-2xl liquid-glass-core border border-white/12 shadow-2xl shadow-black/90"
      >
        {/* Specular incident rim */}
        <div className="pointer-events-none absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <Command
          className="w-full flex flex-col font-sans"
          loop
          label="Command Menu"
        >
          <div className="flex items-center border-b border-white/[0.08] px-4 py-3">
            <span className="text-zinc-500 mr-2 text-xs font-mono uppercase tracking-wider">
              &gt;_
            </span>
            <Command.Input
              autoFocus
              placeholder="Type a command or search..."
              className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-400 outline-none"
            />
            <button
              onClick={() => onOpenChange(false)}
              className="p-1 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <Command.List className="max-h-80 overflow-y-auto p-2 scrollbar-thin">
            <Command.Empty className="py-6 text-center text-xs text-zinc-500">
              No results found.
            </Command.Empty>

            <Command.Group
              heading="Navigation"
              className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 px-2 py-1"
            >
              <Command.Item
                onSelect={() => {
                  onSelectTab?.("developer");
                  scrollTo("hero");
                }}
                className="flex items-center gap-3 px-3 py-2.5 text-xs text-zinc-200 rounded-lg hover:bg-white/[0.08] hover:text-white cursor-pointer transition-colors"
              >
                <Sparkles className="w-4 h-4 text-zinc-400" />
                <span>Overview & Developer Profile</span>
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  onSelectTab?.("developer");
                  scrollTo("tech-stack");
                }}
                className="flex items-center gap-3 px-3 py-2.5 text-xs text-zinc-200 rounded-lg hover:bg-white/[0.08] hover:text-white cursor-pointer transition-colors"
              >
                <Layers className="w-4 h-4 text-zinc-400" />
                <span>Skills, Systems & Linux</span>
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  onSelectTab?.("projects");
                  scrollTo("flagship");
                }}
                className="flex items-center gap-3 px-3 py-2.5 text-xs text-zinc-200 rounded-lg hover:bg-white/[0.08] hover:text-white cursor-pointer transition-colors"
              >
                <Disc3 className="w-4 h-4 text-zinc-400" />
                <span>Projects Showcase (tsrossa Case Study)</span>
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  onSelectTab?.("projects");
                  scrollTo("architecture");
                }}
                className="flex items-center gap-3 px-3 py-2.5 text-xs text-zinc-200 rounded-lg hover:bg-white/[0.08] hover:text-white cursor-pointer transition-colors"
              >
                <Cpu className="w-4 h-4 text-zinc-400" />
                <span>Systems & Audio Architecture</span>
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  scrollTo("contact");
                }}
                className="flex items-center gap-3 px-3 py-2.5 text-xs text-zinc-200 rounded-lg hover:bg-white/[0.08] hover:text-white cursor-pointer transition-colors"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>Contact & Connect</span>
              </Command.Item>
            </Command.Group>

            <Command.Group
              heading="Flagship Project (tsrossa)"
              className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 px-2 py-1 mt-2"
            >
              <Command.Item
                onSelect={() => {
                  window.open(portfolioConfig.flagship.repoUrl, "_blank");
                  onOpenChange(false);
                }}
                className="flex items-center justify-between px-3 py-2.5 text-xs text-zinc-200 rounded-lg hover:bg-white/[0.08] hover:text-white cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <FileCode2 className="w-4 h-4 text-zinc-400" />
                  <span>Open tsrossa Repository</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  window.open(portfolioConfig.flagship.releasesUrl, "_blank");
                  onOpenChange(false);
                }}
                className="flex items-center justify-between px-3 py-2.5 text-xs text-zinc-200 rounded-lg hover:bg-white/[0.08] hover:text-white cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Disc3 className="w-4 h-4 text-zinc-400" />
                  <span>Download tsrossa APKs &amp; Releases</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
              </Command.Item>
              <Command.Item
                onSelect={handleCopyClone}
                className="flex items-center justify-between px-3 py-2.5 text-xs text-zinc-200 rounded-lg hover:bg-white/[0.08] hover:text-white cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  {copiedClone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-zinc-400" />
                  )}
                  <span className="font-mono text-zinc-300">
                    {copiedClone ? "Clone command copied!" : `git clone ${portfolioConfig.flagship.repoUrl}.git`}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-zinc-500">Terminal</span>
              </Command.Item>
            </Command.Group>

            <Command.Group
              heading="Actions & Social"
              className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 px-2 py-1 mt-2"
            >
              <Command.Item
                onSelect={handleCopyEmail}
                className="flex items-center justify-between px-3 py-2.5 text-xs text-zinc-200 rounded-lg hover:bg-white/[0.08] hover:text-white cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-zinc-400" />
                  )}
                  <span>
                    {copiedEmail ? "Copied to clipboard!" : `Copy Email (${portfolioConfig.personal.email})`}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-zinc-500">Click to copy</span>
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  window.open(portfolioConfig.personal.github, "_blank");
                  onOpenChange(false);
                }}
                className="flex items-center justify-between px-3 py-2.5 text-xs text-zinc-200 rounded-lg hover:bg-white/[0.08] hover:text-white cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-4 h-4 text-zinc-300" />
                  <span>GitHub Profile (@yukaatsu)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
              </Command.Item>
            </Command.Group>
          </Command.List>

          <div className="flex items-center justify-between border-t border-white/[0.08] px-4 py-2 bg-zinc-950/60 text-[11px] font-mono text-zinc-500">
            <span>Navigate with ↑ ↓ and Enter</span>
            <span>ESC to close</span>
          </div>
        </Command>
      </div>
    </div>
  );
}
