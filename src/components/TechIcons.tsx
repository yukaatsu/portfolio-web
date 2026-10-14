import React from "react";

interface IconProps {
  className?: string;
}

// Authentic, high-precision SVGs for all core engineering technologies

export function CppIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2L3 7v10l9 5 9-5V7l-9-5z"
        stroke="#659AD2"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10 9a3 3 0 1 0 0 6h1"
        stroke="#659AD2"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14 12h2m-1-1v2m3-1h2m-1-1v2"
        stroke="#94c2ff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function KotlinIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 2h20L12 12l10 10H2V2z"
        fill="url(#kotlin-grad)"
      />
      <defs>
        <linearGradient id="kotlin-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7F52FF" />
          <stop offset="0.5" stopColor="#C711E1" />
          <stop offset="1" stopColor="#E4485D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function PythonIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M11.9 2c-3.1 0-5 1.4-5 3.3v2.4h5.2v.7H4.3C2.4 8.4 1 10.3 1 13.4c0 3.2 1.4 5.1 3.3 5.1h1.9v-2.6c0-2.1 1.7-3.8 3.8-3.8h5.2v-.7c0-2.8-2.3-4.4-5.3-4.4h2.1V5.3C12.1 3.4 13.9 2 11.9 2z"
        fill="#3776AB"
      />
      <circle cx="9.2" cy="5.2" r=".7" fill="#fff" />
      <path
        d="M12.1 22c3.1 0 5-1.4 5-3.3v-2.4h-5.2v-.7h7.8c1.9 0 3.3-1.9 3.3-5 0-3.2-1.4-5.1-3.3-5.1h-1.9v2.6c0 2.1-1.7 3.8-3.8 3.8H8.8v.7c0 2.8 2.3 4.4 5.3 4.4h-2.1v1.7c0 1.9-1.9 3.3.1 3.3z"
        fill="#FFD43B"
      />
      <circle cx="14.8" cy="18.8" r=".7" fill="#1e293b" />
    </svg>
  );
}

export function NextjsIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="1.8" />
      <path
        d="M8.5 7.5v9M15.5 7.5v9M8.5 7.5l7 9"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LaravelIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 6.5l7.5-4.5 7.5 4.5v11L10.5 22 3 17.5v-11z"
        stroke="#FF2D20"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 2.5v19M3 6.5l15 9M18 6.5l-7.5 4.5"
        stroke="#FF2D20"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HtmlCssIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 3l1.5 15.5L12 21l6.5-2.5L20 3H4z"
        stroke="#E44D26"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 7h9M7.8 11h8.4l-.5 4.5-3.7 1.2-3.7-1.2-.2-2"
        stroke="#264DE4"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RustIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="#DEA584" strokeWidth="1.8" />
      <path
        d="M9 16V8h3.8c1.6 0 2.7 1 2.7 2.3 0 1.1-.8 1.9-1.8 2.1l2.3 3.6h-1.8L12.3 12.5H10.6V16H9zm1.6-4.9h2.1c.7 0 1.2-.4 1.2-1 0-.6-.5-1-1.2-1h-2.1v2z"
        fill="#DEA584"
      />
    </svg>
  );
}

export function ArchLinuxIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2L3 22l6-2 3-5 3 5 6 2L12 2z"
        stroke="#1793D1"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 16.5c1.5-1 3.5-1 5 0"
        stroke="#1793D1"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GitIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M21.5 10.5l-8-8a2.12 2.12 0 0 0-3 0L2.5 10.5a2.12 2.12 0 0 0 0 3l8 8a2.12 2.12 0 0 0 3 0l8-8a2.12 2.12 0 0 0 0-3z"
        stroke="#F05032"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
        fill="#F05032"
      />
      <path d="M12 8v4" stroke="#F05032" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
