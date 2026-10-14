import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yukaatsu.vercel.app"),
  title: {
    default: "Indra Prayoga (Yuka / @yukaatsu) — Creative Developer & Systems Engineer",
    template: "%s | Indra Prayoga (Yuka)",
  },
  description:
    "Developer portfolio of Indra Prayoga (Yuka). Architect of tsrossa — Direct-to-DAC bit-perfect USB audio engine for Android. Frontend, Backend, and Linux enthusiast.",
  keywords: [
    "Indra Prayoga",
    "Yuka",
    "yukaatsu",
    "tsrossa",
    "AudioFlinger bypass",
    "Bit-perfect Android",
    "Creative Developer",
    "Next.js",
    "Linux Enthusiast",
    "C++17",
    "libusb",
    "UAC2",
  ],
  authors: [{ name: "Indra Prayoga (Yuka)", url: "https://github.com/yukaatsu" }],
  creator: "Indra Prayoga (Yuka)",
  openGraph: {
    title: "Indra Prayoga (Yuka) — Creative Developer & Systems Engineer",
    description:
      "Crafting high-performance software, low-level audio engineering, and seamless web experiences.",
    url: "https://github.com/yukaatsu",
    siteName: "Indra Prayoga Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indra Prayoga (Yuka) — Creative Developer & Systems Engineer",
    description:
      "Crafting high-performance software, low-level audio engineering, and seamless web experiences.",
    creator: "@yukaatsu",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-[#0d1017] text-zinc-100 selection:bg-cyan-500/25 selection:text-white">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
