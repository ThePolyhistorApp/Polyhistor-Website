"use client";

import { motion } from "framer-motion";
import { Compass, ShieldCheck, Users } from "lucide-react";

export default function FeatureToggle() {

    const features = [
        {
            id: "navigation",
            icon: Compass,
            title: "AI-Guided Exploration",
            desc: "Not just a tracker. Students get turn-by-turn navigation to their next itinerary stop. They never ask 'Where do I go?' again.",
            visualColor: "bg-brand-coral",
        },
        {
            id: "social",
            icon: Users,
            title: "Social Group Locator",
            desc: "Travelers can find their friends on the map instantly. It’s fun for them, and keeps the group together for you.",
            visualColor: "bg-brand-blue",
        },
        {
            id: "liability",
            icon: ShieldCheck,
            title: "Automated Liability Logs",
            desc: "Every check-in is timestamped. If an incident occurs, you have a digital audit trail ready for insurance.",
            visualColor: "bg-safety-500",
        },
    ];

    return (
        <section className="py-24 bg-slate-50" id="features">
            <div className="container mx-auto px-4">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Traveler Perks that Serve <br />
                        <span className="text-brand-blue">Agency Safety.</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        The "Trojan Horse" strategy: Give students tools they love, and get the compliance you need.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feat, i) => (
                        <motion.div
                            key={feat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.5 }}
                            className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all"
                        >
                            <div className={`w-14 h-14 ${feat.visualColor} bg-opacity-10 rounded-2xl flex items-center justify-center mb-6`}>
                                <feat.icon className={`w-7 h-7 ${feat.visualColor.replace('bg-', 'text-')}`} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                {feat.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feat.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}