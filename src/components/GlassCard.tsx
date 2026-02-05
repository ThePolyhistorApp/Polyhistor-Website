"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
      className={`
        relative
        bg-white/80
        backdrop-blur-lg
        rounded-2xl
        border border-white/20
        shadow-glass
        ${hover ? "hover:shadow-glass-lg transition-all duration-300" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
