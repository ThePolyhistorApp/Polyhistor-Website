// src/app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import {
    ArrowLeft,
    Users,
    GraduationCap,
    HeartHandshake,
    Lightbulb,
    Code,
    BarChart3,
    Linkedin // Added this import
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Simple Header */}
            <div className="container mx-auto px-4 py-8">
                <Link href="/" className="inline-flex items-center text-slate-500 hover:text-brand-blue transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
            </div>

            {/* Hero Text */}
            <section className="container mx-auto px-4 py-12 max-w-4xl text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-brand-blue mb-6"
                >
                    Built by Friends. <br/> Engineered for Safety.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-slate-600 leading-relaxed"
                >
                    We aren't just a company. We are three friends who have known each other for 10 years—from high school in India to graduating together with Master's degrees in Computer Science in Chicago.
                </motion.p>
            </section>

            {/* The Values Grid */}
            <section className="bg-slate-50 py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6">
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue mb-2">The Expertise</h3>
                            <p className="text-slate-600">
                                We hold Master's degrees in Computer Science from the Illinois Institute of Technology. We are building this platform on a foundation of rigorous engineering, not just hype.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-brand-coral/10 text-brand-coral rounded-xl flex items-center justify-center mb-6">
                                <Users size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue mb-2">The Bond</h3>
                            <p className="text-slate-600">
                                Trust is built over time. Our founding team has a decade of shared history. We know how to solve hard problems together, and we are in this for the long haul.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
                                <HeartHandshake size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue mb-2">The Mission</h3>
                            <p className="text-slate-600">
                                We realized that existing safety apps were just "utilities." We wanted to build a "Co-Pilot"—an app that actually reduces anxiety instead of just tracking dots on a map.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Founders */}
            <section className="py-20 container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl font-bold text-brand-blue text-center mb-12">Meet the Founders</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[
                        {
                            name: "Naveen Gali",
                            role: "CEO",
                            bio: "Vision & Strategy",
                            icon: Lightbulb,
                            color: "bg-yellow-50 text-yellow-600",
                            linkedin: "https://www.linkedin.com/in/naveen-gali/" // Replace with real link
                        },
                        {
                            name: "Sagar Sujith Somepalli",
                            role: "CTO",
                            bio: "Architecture & Security",
                            icon: Code,
                            color: "bg-blue-50 text-blue-600",
                            linkedin: "https://www.linkedin.com/in/sagarsujith/" // Replace with real link
                        },
                        {
                            name: "Mahendra Reddy Ippala",
                            role: "COO",
                            bio: "Operations & Growth",
                            icon: BarChart3,
                            color: "bg-green-50 text-green-600",
                            linkedin: "https://www.linkedin.com/in/mahendra-reddy-ippala/" // Replace with real link
                        }
                    ].map((founder, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group relative"
                        >
                            <div className={`w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center ${founder.color} ring-4 ring-white shadow-lg`}>
                                <founder.icon size={48} />
                            </div>
                            <h3 className="text-lg font-bold text-brand-blue flex items-center justify-center gap-2">
                                {founder.name}
                                {/* LinkedIn Button */}
                                <a
                                    href={founder.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                                    aria-label={`Visit ${founder.name}'s LinkedIn`}
                                >
                                    <Linkedin size={14} />
                                </a>
                            </h3>
                            <p className="text-brand-coral font-bold text-sm mb-2">{founder.role}</p>
                            <p className="text-slate-500 text-sm">{founder.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}