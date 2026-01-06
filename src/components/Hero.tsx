"use client";

import { motion } from "framer-motion";
import { ArrowRight, LayoutDashboard, Smartphone } from "lucide-react";

export default function Hero({
    onJoinWaitlistClick,
}: {
    onJoinWaitlistClick: () => void;
}) {
    const scrollToFeatures = () => {
        const featuresSection = document.getElementById('features');
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-slate-50 flex flex-col pt-20 pb-10">

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">

                {/* Social Proof Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm mb-8"
                >
                    <span className="flex h-2 w-2 rounded-full bg-brand-blue mr-2 animate-pulse"></span>
                    <span className="text-sm font-medium text-slate-600">
                        Accepting early testers for Spring 2025
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6"
                >
                    The Operating System for <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-coral">
                        Group Travel.
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-4 max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed"
                >
                    Empower your Agency with real-time liability protection, while giving your travelers the AI-powered navigation tools they’ll actually love.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
                >
                    <button
                        onClick={onJoinWaitlistClick}
                        className="px-8 py-4 rounded-full bg-brand-blue text-white font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Join Waitlist <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                        onClick={scrollToFeatures}
                        className="px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2"
                    >
                        See Traveler Features
                    </button>
                </motion.div>
            </div>

            {/* Split Visual Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-16 md:mt-24 relative max-w-6xl mx-auto w-full px-4"
            >
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

                    {/* Agency Dashboard (Left) */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
                            <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
                                <LayoutDashboard className="w-4 h-4 text-slate-400" />
                                <div className="h-2 w-20 bg-slate-200 rounded-full"></div>
                                <div className="flex-1"></div>
                                <div className="h-2 w-2 rounded-full bg-red-400"></div>
                                <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                            </div>
                            <div className="p-1 min-h-[200px] md:min-h-[250px] bg-slate-100 flex items-center justify-center relative">
                                {/* Map Representation */}
                                <div className="absolute inset-0 p-4 grid grid-cols-4 gap-2 opacity-50">
                                    {[...Array(12)].map((_, i) => (
                                        <div key={i} className="bg-white rounded h-full w-full"></div>
                                    ))}
                                </div>
                                <div className="relative z-10 bg-white/90 backdrop-blur border border-slate-200 px-6 py-3 rounded-lg shadow-sm text-center">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Agency View</span>
                                    <span className="text-brand-blue font-bold text-lg">50 Students Tracked</span>
                                </div>
                                {/* Map Dots */}
                                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-blue rounded-full animate-ping"></div>
                                <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-brand-blue rounded-full"></div>
                                <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-brand-blue rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Connection Line (Dotted) */}
                    <div className="hidden md:block w-32 h-0 border-t-2 border-dashed border-slate-300 relative">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-50 px-2 text-slate-400 text-xs font-semibold">
                            REAL-TIME SYNC
                        </div>
                    </div>

                    {/* Traveler App (Right) */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-coral to-yellow-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative w-[280px] h-[500px] bg-slate-900 rounded-[2rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>

                            {/* App Screen */}
                            <div className="w-full h-full bg-white relative pt-8 flex flex-col">
                                {/* Map bg */}
                                <div className="absolute inset-0 bg-slate-100">
                                    <div className="w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#cbd5e1 2px, transparent 2px)', backgroundSize: '10px 10px' }}></div>
                                </div>

                                {/* Floating UI Elements */}
                                <div className="relative z-10 px-4 mt-8 space-y-4">
                                    {/* Navigation Card */}
                                    <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-100">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-brand-coral rounded-xl flex items-center justify-center text-white shrink-0">
                                                <Smartphone className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-sm">Next Stop: The Louvre</h4>
                                                <p className="text-xs text-slate-500 mt-1">12 min walk • 0.8 km</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Friend Bubble */}
                                    <div className="absolute top-40 right-4 bg-brand-blue text-white text-xs px-3 py-1.5 rounded-full shadow-lg font-medium">
                                        Sarah is nearby 👋
                                    </div>
                                </div>

                                {/* Bottom Nav Mock */}
                                <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-100 flex items-center justify-around px-4">
                                    <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
                                    <div className="w-6 h-6 bg-brand-coral rounded-full"></div>
                                    <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>

        </div>
    );
}