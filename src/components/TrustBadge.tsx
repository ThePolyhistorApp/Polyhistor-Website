"use client";

import { BadgeCheck } from "lucide-react";

interface TrustBadgeProps {
  text?: string;
  size?: "sm" | "md";
  tooltip?: string;
}

export default function TrustBadge({
  text = "Verified",
  size = "sm",
  tooltip = "Verified waitlist member",
}: TrustBadgeProps) {
  const iconSize = size === "sm" ? 14 : 18;

  return (
    <div
      className="inline-flex items-center gap-1 group relative"
      title={tooltip}
    >
      <BadgeCheck
        className="text-viral-red"
        size={iconSize}
      />
      {text && (
        <span className="text-xs font-semibold text-viral-red">{text}</span>
      )}

      {/* Tooltip on hover */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {tooltip}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900" />
      </div>
    </div>
  );
}
