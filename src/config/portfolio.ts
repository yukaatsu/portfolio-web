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
  bentoCards: {
    id: string;
    title: string;
    subtitle: string;
    badge: string;
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
          "Circumvents Android AudioTrack and AudioFlinger entirely by communicating directly with the Linux kernel usbfs device nodes via libusb-1.0 asynchronous endpoints.",
        tag: "Kernel Bypass",
      },
      {
        title: "Hardware Clock & Rate Negotiation",
        description:
          "Controls USB Audio Class 1.0/2.0 (UAC1/UAC2) crystal oscillators directly, matching source sampling rates (44.1kHz - 768kHz, DSD) without OS-forced resamplers.",
        tag: "Crystal Control",
      },
      {
        title: "In-Memory PCM Preload & POSIX mlock()",
        description:
          "Buffers uncompressed audio in dedicated virtual memory pages locked via mlock() to eliminate page faults, Linux kernel swapping, and real-time playback jitter.",
        tag: "Zero-Jitter",
      },
      {
        title: "Hardware Feature Unit & True Unity Gain",
        description:
          "Adjusts analog/digital gain directly at the DAC Feature Unit registers, retaining 0 dBFS bit-perfect dynamic range without lossy 16/24-bit software attenuation.",
        tag: "0 dBFS Native",
      },
      {
        title: "Gapless Streaming Handover",
        description:
          "Double-buffered circular DMA pipelines feed audio endpoints across track boundaries with sample-accurate continuity and seamless ring buffer swap.",
        tag: "Gapless Ring",
      },
    ],
    architecturePoints: [
      {
        layer: "Userspace / UI",
        component: "Kotlin Jetpack Compose",
        impact: "Zero-overhead state management, telemetry graphs, and DAC hardware discovery.",
        badge: "Zero-Overhead UI",
      },
      {
        layer: "JNI Boundary",
        component: "Modern C++17 Native Bridge",
        impact: "Direct memory mapping with Android USB Host permission intents.",
        badge: "Direct Memory Map",
      },
      {
        layer: "Core Audio Engine",
        component: "libusb-1.0 + Asynchronous URBs",
        impact: "Non-blocking isochronous transfers bypassing Android AudioHAL and mixer pipelines.",
        badge: "Kernel URB Async",
      },
      {
        layer: "Hardware Layer",
        component: "External USB DAC / UAC2 Interface",
        impact: "Native hardware crystal master clocking with pure bit-for-bit PCM bitstream.",
        badge: "Bit-Perfect Clock",
      },
    ],
    hardwareTelemetry: [
      { label: "Sample Rate", value: "384.0", unit: "kHz", subtext: "Bit-perfect native UAC2" },
      { label: "Bit Depth", value: "32", unit: "bit", subtext: "Integer PCM direct output" },
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
  bentoCards: [
    {
      id: "systems-mindset",
      title: "Linux & Systems Mindset",
      subtitle: "Kernel-level rigor meets user experience",
      badge: "Kernel / usbfs",
      description:
        "Deep enthusiasm for deterministic performance, memory safety, and direct hardware interfacing. Not afraid to bypass high-level abstractions when fidelity requires it.",
    },
    {
      id: "creative-fullstack",
      title: "Full-Stack & Creative Range",
      subtitle: "From C drivers to fluid WebGL/React UIs",
      badge: "Next.js / Laravel",
      description:
        "Bridging low-level systems programming with high-level web craftsmanship. Pixel-perfect layouts, silky physics, and robust backend endpoints.",
    },
    {
      id: "open-source-rd",
      title: "R&D & Open Source",
      subtitle: "Building tooling for the community",
      badge: "Active R&D",
      description:
        "Constantly researching audio transports, DSP filters, direct memory DMA, and exploring modern systems languages like Rust for future utilities.",
    },
  ],
};
