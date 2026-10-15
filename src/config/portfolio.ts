export interface FlagshipProject {
  title: string;
  tagline: string;
  description: string;
  repoUrl: string;
  releasesUrl: string;
  status: string;
  languageBreakdown: { name: string; percentage: number; color: string }[];
  engineeringHighlights: {
    title: string;
    description: string;
    tag: string;
  }[];
  architecturePoints: {
    layer: string;
    component: string;
    impact: string;
    badge: string;
  }[];
  hardwareTelemetry: {
    label: string;
    value: string;
    unit: string;
    subtext: string;
  }[];
}

export interface PortfolioConfig {
  personal: {
    name: string;
    alias: string;
    handle: string;
    email: string;
    github: string;
    roles: string[];
    bioHeadline: string;
    bioSubheadline: string;
    location: string;
    avatarUrl: string;
    fallbackAvatarUrl: string;
  };
  flagship: FlagshipProject;
  techStack: {
    category: "Languages & Core" | "Web & Frameworks" | "Systems & Linux";
    name: string;
    proficiency: string;
    icon: string;
    description: string;
  }[];
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Indra Prayoga",
    alias: "Yuka",
    handle: "yukaatsu",
    email: "yukaatsu2773@gmail.com",
    github: "https://github.com/yukaatsu",
    avatarUrl: "/images/profile/avatar.jpg",
    fallbackAvatarUrl: "https://github.com/yukaatsu.png",
    roles: [
      "Frontend Developer",
      "Backend Developer",
      "Creative Developer",
      "Linux Enthusiast",
    ],
    bioHeadline: "Frontend, Backend & Creative Developer",
    bioSubheadline:
      "I build web applications, backend APIs, and interactive interfaces—mostly working with Next.js, Laravel, and TypeScript. Outside of web development, I spend time tinkering with Arch Linux and building open-source native tools like tsrossa.",
    location: "Indonesia",
  },
  flagship: {
    title: "tsrossa",
    tagline: "Direct-to-DAC Bit-Perfect USB Audio Player for Android",
    description:
      "High-fidelity C++17 audio engine bypassing Android AudioFlinger via kernel-level USB transport (usbfs + libusb-1.0), achieving true unity gain, zero sample-rate conversion, and POSIX memory locking (mlock).",
    repoUrl: "https://github.com/yukaatsu/tsrossa",
    releasesUrl: "https://github.com/yukaatsu/tsrossa/releases",
    status: "v1.4.0-BETA / Active",
    languageBreakdown: [
      { name: "C", percentage: 64.9, color: "#555555" },
      { name: "Kotlin", percentage: 27.7, color: "#a97bff" },
      { name: "C++", percentage: 7.3, color: "#f34b7d" },
      { name: "CMake", percentage: 0.1, color: "#064f8c" },
    ],
    engineeringHighlights: [
      {
        title: "Direct Kernel USB Transport",
        description:
          "Circumvents AudioTrack, AudioFlinger, and vendor audio HAL layers entirely by communicating directly with Linux usbfs device nodes via libusb-1.0 asynchronous endpoints.",
        tag: "Kernel Bypass",
      },
      {
        title: "Hardware Clock Negotiation",
        description:
          "Inspects UAC1/UAC2 clock descriptors and commands CS_SAMPLING_FREQ_CONTROL directly at the crystal oscillator, preserving native 44.1 kHz – 384 kHz without 48 kHz resamplers.",
        tag: "Crystal Control",
      },
      {
        title: "In-Memory PCM Preload",
        description:
          "Decodes FLAC and WAV bitstreams into uncompressed 32-bit linear PCM buffers locked in physical RAM via POSIX mlock() to eliminate page faults and kernel swapping.",
        tag: "POSIX mlock()",
      },
      {
        title: "Hardware Feature Unit Volume",
        description:
          "Implements logarithmic hardware volume attenuation via FU_VOLUME_CONTROL with 0.0 dB true unity gain, preserving exact 0 dBFS dynamic range without digital math distortion.",
        tag: "0 dBFS Native",
      },
      {
        title: "Gapless Streaming Handover",
        description:
          "Secondary background worker pre-decodes the next queued track into RAM, switching audio frames across endpoint boundaries without stream teardown or pops.",
        tag: "Gapless Ring",
      },
      {
        title: "Strict Audiophile Design Scope",
        description:
          "Engineered exclusively for external USB-C OTG DACs with lossless FLAC (16/24/32-bit) and WAV. Internal phone speakers and lossy formats (MP3, AAC) are intentionally excluded.",
        tag: "Bit-Perfect Scope",
      },
    ],
    architecturePoints: [
      {
        layer: "INTERFACE & HUD",
        component: "Now Playing HUD & Library (Kotlin)",
        impact: "Terminal interface with Pac-Man seek bar, dynamic album art palette extraction, hardware volume dial, and hierarchical file browser.",
        badge: "Kotlin UI & HUD",
      },
      {
        layer: "DIAGNOSTICS & JNI",
        component: "Hardware Telemetry & USB Host Bridge",
        impact: "Acquires raw Android usbfs file descriptors and provides real-time [LOGS] verification with 1-tap telemetry report export.",
        badge: "USB Host & Diagnostics",
      },
      {
        layer: "NATIVE ENGINE",
        component: "C++17 Audio Engine & POSIX mlock()",
        impact: "Preloads uncompressed 32-bit PCM into physical RAM locked via mlock() with background gapless track handover.",
        badge: "C++17 & mlock()",
      },
      {
        layer: "KERNEL TRANSPORT",
        component: "libusb-1.0 & UAC2 Hardware Clocking",
        impact: "Asynchronous Isochronous USB transfers with direct CS_SAMPLING_FREQ_CONTROL oscillator negotiation and 0.0 dB hardware unity gain.",
        badge: "libusb-1.0 & UAC2",
      },
    ],
    hardwareTelemetry: [
      { label: "Sample Rate", value: "384.0", unit: "kHz", subtext: "Bit-perfect native UAC1/UAC2" },
      { label: "Bit Depth", value: "32", unit: "bit", subtext: "Integer / Float Linear PCM" },
      { label: "Buffer Latency", value: "1.2", unit: "ms", subtext: "Isochronous transfer rate" },
      { label: "Kernel Swapping", value: "0", unit: "%", subtext: "POSIX mlock() pinned pages" },
    ],
  },
  techStack: [
    {
      category: "Web & Frameworks",
      name: "Next.js & React",
      proficiency: "Frontend & Web",
      icon: "Layers",
      description: "Building fast web interfaces, multi-page apps, and interactive UI components with TypeScript and Tailwind CSS.",
    },
    {
      category: "Web & Frameworks",
      name: "Laravel & PHP",
      proficiency: "Backend & Full-Stack",
      icon: "Server",
      description: "Structuring relational databases, authentication, REST APIs, and full-stack web applications.",
    },
    {
      category: "Web & Frameworks",
      name: "HTML, CSS & UI Design",
      proficiency: "Creative Frontend",
      icon: "Code",
      description: "Focusing on clean typography, responsive layouts, dark-mode aesthetics, and smooth page transitions.",
    },
    {
      category: "Languages & Core",
      name: "Python",
      proficiency: "Scripting & Tooling",
      icon: "Terminal",
      description: "Writing automation scripts, data utilities, and quick backend helpers when needed.",
    },
    {
      category: "Languages & Core",
      name: "C, C++ & Kotlin",
      proficiency: "Native Side Projects",
      icon: "Cpu",
      description: "Used for Android NDK and low-level system integration—most notably the USB audio engine in tsrossa.",
    },
    {
      category: "Languages & Core",
      name: "Rust",
      proficiency: "Exploring",
      icon: "Wrench",
      description: "Experimenting with memory-safe systems programming and CLI tooling in spare time.",
    },
    {
      category: "Systems & Linux",
      name: "Linux (Arch / Wayland)",
      proficiency: "Daily Driver",
      icon: "Monitor",
      description: "My primary development environment. Customizing window managers, shell workflows, and system configs.",
    },
    {
      category: "Systems & Linux",
      name: "Git & GitHub",
      proficiency: "Workflow",
      icon: "GitBranch",
      description: "Version control, managing open-source releases, and documenting code cleanly.",
    },
  ],
};
