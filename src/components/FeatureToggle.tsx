"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Plane, Bell, MapPin, Users, Wallet } from "lucide-react";

export default function FeatureToggle() {
    const [activeTab, setActiveTab] = useState<"safety" | "travel">("safety");

    const data = {
        safety: {
            color: "bg-safety-500",
            lightColor: "bg-safety-50",
            textColor: "text-safety-900",
            title: "For Daily Peace of Mind",
            subtitle: "Trusted by parents for school commutes and daily routines.",
            features: [
                { icon: MapPin, title: "Real-Time Geofencing", desc: "Get alerted when they arrive at school or leave home." },
                { icon: Shield, title: "Privacy First", desc: "COPPA compliant. We don't sell location data." },
                { icon: Bell, title: "Smart Alerts", desc: "Proactive notifications without constant checking." },
            ],
        },
        travel: {
            color: "bg-travel-500",
            lightColor: "bg-travel-50",
            textColor: "text-travel-900",
            title: "For Group Adventures",
            subtitle: "The ultimate tool for the family organizer.",
            features: [
                { icon: Plane, title: "AI Itinerary Builder", desc: "Turn messy group chats into a visual plan." },
                { icon: Wallet, title: "Expense Splitting", desc: "Track who paid for dinner without the awkwardness." },
                { icon: Users, title: "Group Location", desc: "Find your friends easily in crowded theme parks." },
            ],
        },
    };

    const content = data[activeTab];

    return (
        <section className="py-24 bg-slate-50" id="features">
            <div className="container mx-auto px-4">

                {/* The Toggle Switch */}
                <div className="flex justify-center mb-12 px-4 w-full"> {/* Added px-4 and w-full */}
                    <div className="bg-white p-1 rounded-full shadow-sm border border-slate-200 flex relative w-full max-w-[300px]"> {/* Added max-w constraint */}
                        {/* Sliding Background */}
                        <motion.div
                            layout
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            className={`absolute top-1 bottom-1 rounded-full w-1/2 ${ // Changed w-[140px] to w-1/2
                                activeTab === "safety" ? "left-1 bg-safety-500" : "left-[50%] bg-travel-500" // Adjusted positioning
                            }`}
                        />

                        <button
                            onClick={() => setActiveTab("safety")}
                            className={`relative z-10 w-1/2 py-3 rounded-full text-sm font-bold transition-colors ${ // Changed fixed width to w-1/2
                                activeTab === "safety" ? "text-white" : "text-slate-500 hover:text-slate-900"
                            }`}
                        >
                            Daily Safety
                        </button>
                        <button
                            onClick={() => setActiveTab("travel")}
                            className={`relative z-10 w-1/2 py-3 rounded-full text-sm font-bold transition-colors ${ // Changed fixed width to w-1/2
                                activeTab === "travel" ? "text-white" : "text-slate-500 hover:text-slate-900"
                            }`}
                        >
                            Group Travel
                        </button>
                    </div>
                </div>

                {/* Animated Content Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className={`rounded-3xl overflow-hidden shadow-2xl bg-white flex flex-col md:flex-row`}>

                            {/* Left Side: Text Content */}
                            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                                <h3 className={`text-3xl font-bold mb-4 ${content.textColor}`}>
                                    {content.title}
                                </h3>
                                <p className="text-slate-600 mb-8 text-lg">
                                    {content.subtitle}
                                </p>
                                <div className="space-y-6">
                                    {content.features.map((feat, i) => (
                                        <div key={i} className="flex items-start">
                                            <div className={`p-3 rounded-xl mr-4 ${content.lightColor}`}>
                                                <feat.icon className={`w-6 h-6 ${activeTab === "safety" ? "text-safety-500" : "text-travel-500"}`} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900">{feat.title}</h4>
                                                <p className="text-sm text-slate-500 mt-1">{feat.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: Abstract Visualization (Code-based) */}
                            <div className={`md:w-1/2 p-8 md:p-12 flex items-center justify-center ${content.lightColor}`}>
                                {/* This replaces the screenshot.
                    It's an abstract representation of the feature using CSS/Divs.
                 */}
                                <div className="relative w-64 h-80 bg-white rounded-3xl shadow-lg border border-white/50 p-4 flex flex-col">
                                    {/* Abstract Header */}
                                    <div className="h-8 w-full bg-slate-100 rounded-lg mb-4 animate-pulse"></div>
                                    {/* Abstract Map/List */}
                                    <div className={`flex-1 rounded-xl ${activeTab === 'safety' ? 'bg-safety-100' : 'bg-travel-100'} relative overflow-hidden`}>
                                        {activeTab === 'safety' ? (
                                            // Safety Abstract Vis: Pulsing Radar
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-32 h-32 bg-safety-500/20 rounded-full animate-ping absolute"></div>
                                                <div className="w-4 h-4 bg-safety-500 rounded-full relative z-10 ring-4 ring-white"></div>
                                            </div>
                                        ) : (
                                            // Travel Abstract Vis: Connecting Line
                                            <div className="absolute inset-0 p-4 flex flex-col justify-between">
                                                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-travel-500"></div><div className="h-2 w-20 bg-travel-200 rounded"></div></div>
                                                <div className="w-0.5 h-full bg-travel-200 ml-1.5 my-1"></div>
                                                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-travel-500"></div><div className="h-2 w-24 bg-travel-200 rounded"></div></div>
                                            </div>
                                        )}
                                    </div>
                                    {/* Abstract Bottom Action */}
                                    <div className="h-10 w-full bg-slate-900 rounded-xl mt-4 opacity-10"></div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}