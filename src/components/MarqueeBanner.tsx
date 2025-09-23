"use client";

import { marqueeItems } from "@/data/marqueeData";
import Marquee from "react-fast-marquee";

export default function MarqueeBanner() {
  return (
    <div className="w-full bg-brand-blue py-2">
      <Marquee
        speed={50}
        pauseOnHover={false}
        gradient={true}
        gradientColor="10, 42, 78"
        loop={0}
        autoFill={true}
      >
        {marqueeItems.map((item, index) => (
          <span key={index} className="text-white font-semibold text-md mx-8">
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
