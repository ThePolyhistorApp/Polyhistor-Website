"use client";

import {motion} from "framer-motion";
import {ArrowRight, ShieldCheck, Map, Users} from "lucide-react";

// Accept the onClick function as a prop (Same interface as your old Hero)
export default function Hero({
                                 onJoinWaitlistClick,
                             }: {
    onJoinWaitlistClick: () => void;
}) {
    return (
        <div
            className="relative min-h-screen w-full overflow-hidden bg-slate-50 flex flex-col justify-center pt-20 pb-10">

            {/* Abstract Background Blobs (Replaces Video/Images for "No-UI" feel) */}
            <div
                className="absolute top-0 -left-4 w-72 h-72 bg-safety-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div
                className="absolute top-0 -right-4 w-72 h-72 bg-travel-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div
                className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Social Proof Badge */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="inline-flex items-center px-4 py-2 rounded-full bordernD border-slate-200 bg-white shadow-sm mb-8"
                >
                    <span className="flex h-2 w-2 rounded-full bg-safety-500 mr-2 animate-pulse"></span>
                    <span className="text-sm font-medium text-slate-600">
            Accepting early testers for our app
          </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6"
                >
                    Coordinated Travel. <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety-500 to-travel-500">
            Confident Safety.
          </span>
                </motion.h1>

                {/* Subheadline - Targeting the "Organizer" */}
                <motion.p
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.4}}
                    className="mt-4 max-w-2xl mx-auto text-xl text-slate-600"
                >
                    The single app for the <strong>Family Organizer</strong>. Manage the chaos of group trips and the
                    anxiety of daily commutes in one secure place.
                </motion.p>

                {/* Action Button */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.6}}
                    className="mt-10 flex justify-center gap-4"
                >
                    <button
                        onClick={onJoinWaitlistClick}
                        className="px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Join Waitlist <ArrowRight className="w-4 h-4"/>
                    </button>
                </motion.div>

                {/* The "Problem/Solution" Grid (Abstract Visuals) */}
                <motion.div
                    initial={{opacity: 0, y: 40}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.7, delay: 0.8}}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
                >
                    {/* Card 1: Safety */}
                    <div
                        className="p-6 bg-white/60 backdrop-blur-sm border border-slate-100 rounded-2xl hover:border-safety-200 hover:shadow-md transition-all">
                        <div className="w-12 h-12 bg-safety-50 rounded-lg flex items-center justify-center mb-4">
                            <ShieldCheck className="w-6 h-6 text-safety-500"/>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">Daily Peace of Mind</h3>
                        <p className="text-slate-600 mt-2 text-sm leading-relaxed">Real-time geofencing for school
                            commutes without the battery drain by our competitors.</p>
                    </div>

                    {/* Card 2: Travel */}
                    <div
                        className="p-6 bg-white/60 backdrop-blur-sm border border-slate-100 rounded-2xl hover:border-travel-200 hover:shadow-md transition-all">
                        <div className="w-12 h-12 bg-travel-50 rounded-lg flex items-center justify-center mb-4">
                            <Map className="w-6 h-6 text-travel-500"/>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">Chaos-Free Planning</h3>
                        <p className="text-slate-600 mt-2 text-sm leading-relaxed">A collaborative itinerary that
                            replaces the messy WhatsApp group chat scroll.</p>
                    </div>

                    {/* Card 3: Privacy */}
                    <div
                        className="p-6 bg-white/60 backdrop-blur-sm border border-slate-100 rounded-2xl hover:border-purple-200 hover:shadow-md transition-all">
                        <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                            <Users className="w-6 h-6 text-purple-600"/>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">Privacy First</h3>
                        <p className="text-slate-600 mt-2 text-sm leading-relaxed">We are in the business of trust. We
                            never sell your location data. Ever.</p>
                    </div>

                </motion.div>

            </div>
        </div>
    );
}