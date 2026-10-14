"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, AlertTriangle, Zap } from "lucide-react";

type PipelineMode = "tsrossa" | "standard";

export function SignalPathComparator() {
  const [mode, setMode] = useState<PipelineMode>("tsrossa");

  const standardStages = [
    { title: "FLAC Source", note: "Lossless Audio File", status: "input" },
    { title: "Android AudioTrack", note: "Standard Java/JNI API", status: "warn" },
    { title: "Mandatory 48kHz SRC", note: "Forced OS Resampling & Jitter", status: "bad" },
    { title: "Software Volume", note: "Lossy Integer Bit Truncation", status: "bad" },
    { title: "AudioFlinger & HAL", note: "Shared System Audio Mixer", status: "bad" },
    { title: "USB Audio Out", note: "Jittered Non-Bit-Perfect Output", status: "bad" },
  ];

  const tsrossaStages = [
    { title: "FLAC/WAV Source", note: "Pure Bitstream (up to 384kHz/DSD)", status: "input" },
    { title: "Linear PCM Preload", note: "Zero Page Faults · POSIX mlock()", status: "good" },
    { title: "C++17 libusb / usbfs", note: "Direct Linux Kernel Endpoint", status: "good" },
    { title: "UAC2 Hardware Clock", note: "Native 44.1 - 384 kHz Sync", status: "good" },
    { title: "Hardware Feature Unit", note: "0.0 dBFS True Unity Gain", status: "good" },
    { title: "Isochronous USB DAC", note: "Bit-Perfect Asynchronous Flow", status: "good" },
  ];

  const stages = mode === "tsrossa" ? tsrossaStages : standardStages;

  return (
    <div className="w-full mt-10 rounded-2xl border border-white/[0.08] bg-black/60 p-5 sm:p-6 backdrop-blur-md">
      {/* Comparator Header & Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.06]">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 block mb-1">
            [ SIGNAL PATH COMPARATOR · KERNEL BENCHMARK ]
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span>Audio Transport Architecture Pipeline</span>
          </h4>
        </div>

        {/* Dual Mode Switcher Pill */}
        <div className="flex items-center p-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
          <button
            onClick={() => setMode("tsrossa")}
            className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors flex items-center gap-1.5 ${
              mode === "tsrossa" ? "text-white" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {mode === "tsrossa" && (
              <motion.div
                layoutId="comparatorPill"
                className="absolute inset-0 rounded-full bg-cyan-950/80 border border-cyan-500/40 shadow-sm"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5 text-cyan-300">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              tsrossa Engine
            </span>
          </button>

          <button
            onClick={() => setMode("standard")}
            className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors flex items-center gap-1.5 ${
              mode === "standard" ? "text-white" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {mode === "standard" && (
              <motion.div
                layoutId="comparatorPill"
                className="absolute inset-0 rounded-full bg-amber-950/80 border border-amber-500/40 shadow-sm"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5 text-amber-300">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              Standard Android
            </span>
          </button>
        </div>
      </div>

      {/* Signal Flow Stage Graph */}
      <div className="py-6 overflow-x-auto scrollbar-thin">
        <div className="min-w-[700px] flex items-center justify-between gap-2">
          {stages.map((stage, idx) => (
            <React.Fragment key={stage.title}>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.25 }}
                className={`flex-1 p-3.5 rounded-xl border flex flex-col justify-between min-h-[96px] ${
                  mode === "tsrossa"
                    ? "bg-cyan-950/20 border-cyan-500/25 hover:border-cyan-400/50"
                    : "bg-red-950/20 border-red-500/25 hover:border-red-400/50"
                } transition-colors`}
              >
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                    0{idx + 1} {"//"} STAGE
                  </span>
                  <div
                    className={`text-xs font-semibold ${
                      mode === "tsrossa" ? "text-zinc-100" : "text-zinc-300"
                    }`}
                  >
                    {stage.title}
                  </div>
                </div>
                <div
                  className={`text-[10px] font-mono leading-tight mt-2 ${
                    mode === "tsrossa" ? "text-cyan-400/80" : "text-amber-400/80"
                  }`}
                >
                  {stage.note}
                </div>
              </motion.div>

              {idx < stages.length - 1 && (
                <div className="shrink-0 px-1 text-zinc-600">
                  <ArrowRight
                    className={`w-3.5 h-3.5 ${
                      mode === "tsrossa" ? "text-cyan-400/60" : "text-amber-500/60"
                    }`}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Metric Deltas & Architectural Impact */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/[0.06]">
        <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/[0.05]">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
            Sample Rate Conversion (SRC)
          </span>
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-mono font-bold ${
                mode === "tsrossa" ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {mode === "tsrossa" ? "0% (Eliminated)" : "Mandatory 48kHz Resampling"}
            </span>
          </div>
          <p className="text-[11px] text-zinc-400 mt-1">
            {mode === "tsrossa"
              ? "Pure bitstream mapped bit-for-bit to external DAC crystal."
              : "Android resampler degrades dynamic range and introduces phase jitter."}
          </p>
        </div>

        <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/[0.05]">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
            Kernel Virtual Memory Swapping
          </span>
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-mono font-bold ${
                mode === "tsrossa" ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {mode === "tsrossa" ? "Locked via mlock()" : "Vulnerable to Page Faults"}
            </span>
          </div>
          <p className="text-[11px] text-zinc-400 mt-1">
            {mode === "tsrossa"
              ? "Zero kernel swapping or memory latency during high-rate audio playback."
              : "OS background GC or low RAM can evict audio buffers causing micro-stutter."}
          </p>
        </div>

        <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/[0.05]">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
            Digital Attenuation & Unity Gain
          </span>
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-mono font-bold ${
                mode === "tsrossa" ? "text-emerald-400" : "text-amber-400"
              }`}
            >
              {mode === "tsrossa" ? "True 0 dBFS Unity" : "Software Truncation Loss"}
            </span>
          </div>
          <p className="text-[11px] text-zinc-400 mt-1">
            {mode === "tsrossa"
              ? "Hardware Feature Unit controls analog/DAC registers directly."
              : "Software volume slider multiplies 16/24-bit PCM values, dropping bits."}
          </p>
        </div>
      </div>
    </div>
  );
}
