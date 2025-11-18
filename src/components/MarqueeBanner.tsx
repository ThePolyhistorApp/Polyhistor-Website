// src/components/MarqueeBanner.tsx
"use client";

import { marqueeItems } from "@/data/marqueeData";
import Marquee from "react-fast-marquee";
import { Sparkles } from "lucide-react";

export default function MarqueeBanner() {
    return (
        <div className="w-full bg-white/60 backdrop-blur-md border-b border-white/40 py-3 sticky top-0 z-50">
            <Marquee
                speed={40}
                pauseOnHover={true}
                gradient={true}
                gradientColor="#f8fafc" // This matches the slate-50 background so the fade is seamless
                gradientWidth={50}
                autoFill={true}
            >
                {marqueeItems.map((item, index) => (
                    <div key={index} className="flex items-center mx-8">
                        <Sparkles className="w-3 h-3 text-brand-coral mr-3 opacity-80" />
                        <span className="text-slate-600 font-bold text-[10px] md:text-xs tracking-widest md:tracking-[0.2em] uppercase">
              {item}
            </span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}