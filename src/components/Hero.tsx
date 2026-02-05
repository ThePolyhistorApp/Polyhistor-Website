"use client";

import { getPersonalizedHeadline, getUserLocation } from "@/lib/geolocation";
import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Floating notification bubble component
const NotificationBubble = ({
    text,
    delay,
    x,
    y,
}: {
    text: string;
    delay: number;
    x: string;
    y: string;
}) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8], y: [20, 0, 0, -20] }}
        transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            repeatDelay: 4,
        }}
        className={`absolute ${x} ${y} bg-white px-4 py-2 rounded-full shadow-lg border border-slate-100`}
        style={{ zIndex: 5 }}
    >
        <span className="text-sm font-medium text-slate-700">{text}</span>
    </motion.div>
);

export default function Hero({
    onJoinWaitlistClick,
}: {
    onJoinWaitlistClick: () => void;
}) {
    const [scrollY, setScrollY] = useState(0);
    const [city, setCity] = useState<string>();
    const [headlineText, setHeadlineText] = useState("Never Lose Your Friends");

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Fetch user's city for personalization
        getUserLocation().then((location) => {
            setCity(location.city);
            setHeadlineText(getPersonalizedHeadline(location.city));
        });
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 flex flex-col pt-20 pb-10">
            {/* Floating background blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-brand-coral/20 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-viral-purple/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-notification-orange/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
                {/* Social Proof Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm mb-8"
                >
                    <span className="flex h-2 w-2 rounded-full bg-viral-red mr-2 animate-pulse" />
                    <span className="text-sm font-medium text-slate-600">
                        90+ already on the waitlist • Launching Spring 2026
                    </span>
                </motion.div>

                {/* Main Headline - Consumer Focused */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6"
                >
                    {headlineText} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-viral-red via-notification-orange to-viral-purple">
                        (Or Your Money) Again.
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-4 max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed"
                >
                    The all-in-one app to track your squad, split costs instantly, and
                    find the perfect middle point to meet.
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
                        className="group px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-viral-red text-white font-bold hover:shadow-glow transition-all flex items-center justify-center gap-2 hover:scale-105 duration-200"
                    >
                        Join Waitlist{" "}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    {/* Secondary CTA - For Agencies */}
                    <Link
                        href="/enterprise"
                        className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-900 rounded-full font-bold hover:border-brand-blue hover:bg-slate-50 transition-all duration-200 flex items-center gap-2 shadow-sm"
                    >
                        <Building2 className="w-5 h-5" />
                        For travel agencies
                    </Link>
                </motion.div>
            </div>

            {/* Phone Mockups with Parallax */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-16 md:mt-24 relative max-w-6xl mx-auto w-full px-4"
                style={{ transform: `translateY(-${scrollY * 0.1}px)` }}
            >
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative">
                    {/* Notification Bubbles */}
                    <NotificationBubble
                        text="🎉 Sarah joined the trip"
                        delay={1}
                        x="left-[10%]"
                        y="top-[15%]"
                    />
                    <NotificationBubble
                        text="💰 $15 received"
                        delay={2.5}
                        x="right-[15%]"
                        y="top-[20%]"
                    />
                    <NotificationBubble
                        text="📍 Mike is nearby"
                        delay={4}
                        x="left-[5%]"
                        y="bottom-[25%]"
                    />

                    {/* Left Phone - Friend Map */}
                    <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            transform: `translateY(-${scrollY * 0.15}px) rotateY(${scrollY * 0.02}deg)`,
                            transformStyle: "preserve-3d",
                        }}
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-viral-red to-notification-orange rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-500" />
                        <div className="relative w-[280px] h-[560px] rounded-[2rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/friend-map-mockup.png"
                                alt="Friend Map showing real-time location tracking"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Right Phone - Split Bill */}
                    <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.05, rotateY: -5 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            transform: `translateY(-${scrollY * 0.12}px) rotateY(${-scrollY * 0.02}deg)`,
                            transformStyle: "preserve-3d",
                        }}
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-viral-purple to-brand-blue rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-500" />
                        <div className="relative w-[280px] h-[560px] rounded-[2rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/split-bill-mockup.png"
                                alt="Split bill notification showing Sagar requested $15 for Pizza"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}