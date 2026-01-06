"use client";

import { motion } from "framer-motion";
import { EyeOff } from "lucide-react";

// Visual Component: Radar Scan (for Agency Blind)
const RadarVisual = () => (
    <div className="h-40 w-full bg-slate-50 flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 bg-slate-100/50"></div>
        {/* Radar Circles */}
        {[1, 2, 3].map((i) => (
            <motion.div
                key={i}
                className="absolute border border-red-200 rounded-full"
                style={{ width: i * 60, height: i * 60 }}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            />
        ))}
        {/* Scanning Line */}
        <motion.div
            className="w-32 h-32 absolute bg-gradient-to-r from-transparent to-red-100/50 rounded-full"
            style={{ originX: 0.5, originY: 0.5 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <div className="z-10 bg-white p-2 rounded-full shadow-sm">
            <EyeOff className="text-red-400 w-6 h-6" />
        </div>
    </div>
);

// Visual Component: Lost Dot (for Traveler)
const LostDotVisual = () => (
    <div className="h-40 w-full bg-slate-50 relative overflow-hidden">
        {/* Map Grid Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

        {/* Wandering Dot */}
        <motion.div
            className="absolute w-4 h-4 bg-orange-400 rounded-full border-2 border-white shadow-md z-10"
            animate={{
                x: [50, 150, 80, 200, 100],
                y: [40, 60, 120, 80, 50],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Static Destination */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-dashed border-slate-300 rounded-full flex items-center justify-center">
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Where?</div>
        </div>
    </div>
);

// Visual Component: Low Battery (for Battery)
const BatteryVisual = () => (
    <div className="h-40 w-full bg-slate-50 flex items-center justify-center">
        <motion.div
            className="w-16 h-28 border-4 border-slate-300 rounded-2xl p-1 relative flex flex-col justify-end"
            animate={{ borderColor: ["#cbd5e1", "#f87171", "#cbd5e1"] }}
            transition={{ duration: 2, repeat: Infinity }}
        >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-3 bg-slate-300 rounded-t-sm" />
            <motion.div
                className="w-full bg-red-400 rounded-sm"
                animate={{ height: ["80%", "20%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
        </motion.div>
    </div>
);

const problems = [
    {
        visual: <RadarVisual />,
        title: "Agencies Fly Blind",
        desc: "Once the bus leaves, you lose visibility. WhatsApp checks are manual, slow, and legally insufficient.",
    },
    {
        visual: <LostDotVisual />,
        title: "Travelers Get Lost",
        desc: "PDF itineraries are static and confusing. Students struggle to navigate new cities, leading to delays and panic.",
    },
    {
        visual: <BatteryVisual />,
        title: "Dead Batteries & Data",
        desc: "Competitor tracking apps kill phones by noon. Our context-aware engine protects battery life for the whole group.",
    },
];

export default function ProblemSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-red-500 font-bold tracking-wider uppercase text-sm mb-2 block">
                        The Disconnect
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        The Black Hole of Group Travel.
                    </h2>
                    <p className="text-lg text-slate-500">
                        Most agencies rely on tools built for 2010. The result is chaos you can't control and risks you can't see.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((item, i) => (
                        <div key={i} className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                            {/* Visual Area */}
                            {item.visual}

                            {/* Content Area */}
                            <div className="p-8 flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}