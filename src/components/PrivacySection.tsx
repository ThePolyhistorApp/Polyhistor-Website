"use client";

import { motion } from "framer-motion";
import { Lock, Smartphone, WifiOff } from "lucide-react";

const trustFeatures = [
    {
        icon: WifiOff,
        title: "Offline-First Architecture",
        desc: "Great for travelers without data plans and agencies tracking in dead zones. The map always works.",
    },
    {
        icon: Smartphone,
        title: "Battery-Saving Engine",
        desc: "We intelligently adapt tracking frequency based on movement. 24 hours of tracking on a single charge.",
    },
    {
        icon: Lock,
        title: "COPPA & FERPA Compliant",
        desc: "Built with strict adherence to student privacy laws. We are in the business of trust, not selling data.",
    },
];

export default function PrivacySection() {
    return (
        <section id="safety" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Abstract background decorative circle */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-coral rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/4"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Left Side: The Promise */}
                    <div className="md:w-1/2">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider mb-6">
                            <Smartphone className="w-3 h-3 mr-2" /> Engineering Principles
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Built for the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-coral">Real World.</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed opacity-90">
                            Student travel isn't a lab environment. It's dead zones, old phones, and limited data plans. <br /><br />
                            <strong>We built our tech stack to survive it.</strong> While competitors crash, we keep tracking.
                        </p>
                    </div>

                    {/* Right Side: The Specs */}
                    <div className="md:w-1/2 w-full">
                        <div className="grid gap-6">
                            {trustFeatures.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="flex items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                >
                                    <div className="bg-brand-blue/20 p-3 rounded-lg mr-5">
                                        <item.icon className="w-6 h-6 text-brand-blue" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}