"use client";

import { motion } from "framer-motion";
import { BatteryWarning, MessageSquareWarning, SearchX } from "lucide-react";

const problems = [
    {
        icon: SearchX,
        title: "The Commute Black Hole",
        text: "Worrying about your child’s journey to school? Texting 'Are you there?' every hour creates anxiety, not safety.",
        color: "text-safety-500",
        bg: "bg-safety-50",
    },
    {
        icon: MessageSquareWarning,
        title: "Group Chat Chaos",
        text: "Important flight details and itineraries get buried in endless WhatsApp scrolls. There is no single source of truth.",
        color: "text-travel-500",
        bg: "bg-travel-50",
    },
    {
        icon: BatteryWarning,
        title: "The Battery Drain",
        text: "Most tracking apps kill your phone battery by noon. An app is useless if the phone is dead when you need it most.",
        color: "text-red-500",
        bg: "bg-red-50",
    },
];

export default function ProblemSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Why is managing a group <br />
                        <span className="text-slate-400">still so stressful?</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        You are stuck using 5 different apps to do one job.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="group p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon className={`w-7 h-7 ${item.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}