"use client";

import React, { useState } from "react";
import { portfolioConfig } from "@/config/portfolio";
import { SpotlightCard } from "@/components/SpotlightCard";
import { MagneticButton } from "@/components/MagneticButton";
import {
  Copy,
  Check,
  Send,
  Terminal,
  Activity,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";

export function Contact() {
  const { personal } = portfolioConfig;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer id="contact" className="py-14 sm:py-20 md:py-24 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Contact Call to Action Double-Bezel Card */}
      <SpotlightCard className="mb-14 sm:mb-20 p-5 sm:p-10 md:p-14 text-left relative overflow-hidden">
        <div className="max-w-2xl flex flex-col items-start">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2 sm:mb-3">
            [ CONTACT ]
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            Get in touch
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
            Open for frontend, backend, or full-stack web projects, freelance work, or open-source discussions. Feel free to send an email or check out my work on GitHub.
          </p>

          {/* Island Magnetic CTA Group */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <MagneticButton
              href={`mailto:${personal.email}`}
              className="rounded-full bg-zinc-100 pl-5 sm:pl-6 pr-2 py-2 text-xs sm:text-sm font-semibold text-zinc-950 shadow-xl shadow-white/5 hover:bg-white transition-all"
            >
              <Send className="w-3.5 h-3.5 mr-2 text-zinc-900" />
              <span className="mr-2 sm:mr-3">Send Email</span>
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-950 text-white flex items-center justify-center transition-transform group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </MagneticButton>

            <MagneticButton
              onClick={handleCopyEmail}
              className="rounded-full border border-white/10 bg-zinc-900/80 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-zinc-300 hover:border-white/20 hover:text-white transition-all"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400 mr-2" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400 mr-2" />
                  <span className="font-mono">{personal.email}</span>
                </>
              )}
            </MagneticButton>

            <MagneticButton
              href={personal.github}
              target="_blank"
              className="rounded-full border border-white/10 bg-zinc-900/80 pl-4 sm:pl-5 pr-2 py-2 text-xs sm:text-sm font-medium text-zinc-300 hover:border-white/20 hover:text-white transition-all"
            >
              <GithubIcon className="w-4 h-4 mr-2 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="mr-2 sm:mr-3">GitHub</span>
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/[0.06] text-zinc-300 flex items-center justify-center transition-transform group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </MagneticButton>
          </div>
        </div>
      </SpotlightCard>

      {/* Clean Telemetry Footer Bar */}
      <div className="pt-6 sm:pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-zinc-400 shrink-0" />
          <span className="truncate">
            {personal.name} ({personal.alias}) · @{personal.handle}
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          <div className="flex items-center gap-1.5 text-zinc-400">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>Kernel & Web Native</span>
          </div>
          <span className="text-zinc-700">•</span>
          <span>Next.js 16 · Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
