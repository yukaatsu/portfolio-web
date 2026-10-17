"use client";

import React, { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  pullFactor?: number;
}

export function MagneticButton({
  children,
  className,
  onClick,
  href,
  target,
  rel,
  pullFactor = 0.28,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 280, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 280, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    mouseX.set((clientX - centerX) * pullFactor);
    mouseY.set((clientY - centerY) * pullFactor);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: reduce ? 0 : springX, y: reduce ? 0 : springY }}
      whileTap={{ scale: 0.97 }}
      className={cn("group inline-flex items-center justify-center cursor-pointer", className)}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    const isFullWidth = className?.includes("w-full");
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={cn("inline-block", isFullWidth && "w-full")}
      >
        {content}
      </a>
    );
  }

  return content;
}
