// src/components/WaitlistModal.tsx
"use client";

import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function WaitlistModal({ onClose }: { onClose: () => void }) {
    const [email, setEmail] = useState("");
    const [isBetaTester, setIsBetaTester] = useState(false);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setMessage("");

        try {
            const response = await axios.post(
                "https://polyhistor-backend-do6y.onrender.com/api/waitlist/join",
                { email, isBetaTester }
            );

            setStatus("success");
            setMessage("You've secured your spot. We'll be in touch soon.");
            setEmail("");
            setIsBetaTester(false);

            // Optional: Auto close after success
            // setTimeout(onClose, 3000);
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || error.message || "Something went wrong. Please try again.";
            setStatus("error");
            setMessage(errorMessage);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Darkened Backdrop with Blur */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* The Modal Card */}
            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
                {/* Decorative Top Gradient */}
                <div className="h-2 w-full bg-gradient-to-r from-safety-500 to-travel-500"></div>

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="p-8">
                    <AnimatePresence mode="wait">
                        {status === "success" ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8"
                            >
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">You're on the list!</h3>
                                <p className="text-slate-600">{message}</p>
                                <button
                                    onClick={onClose}
                                    className="mt-6 text-sm font-bold text-slate-500 hover:text-slate-900 underline"
                                >
                                    Close
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                                    Get Early Access
                                </h2>
                                <p className="text-slate-500 mb-6 text-sm">
                                    Join other organized parents and travelers. We are limiting our beta to the first 500 users.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label htmlFor="email" className="sr-only">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="name@example.com"
                                            required
                                            disabled={status === "loading"}
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                                        />
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="beta-tester"
                                                type="checkbox"
                                                checked={isBetaTester}
                                                onChange={(e) => setIsBetaTester(e.target.checked)}
                                                className="w-4 h-4 border border-slate-300 rounded text-brand-blue focus:ring-brand-blue"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="beta-tester" className="font-medium text-slate-700">
                                                I want to be a Beta Tester
                                            </label>
                                            <p className="text-slate-500 text-xs">Get the app before anyone else for free.</p>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg shadow-slate-200 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {status === "loading" ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" /> Processing...
                                            </>
                                        ) : (
                                            <>
                                                Join the Waitlist <ArrowRight className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>

                                    {status === "error" && (
                                        <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded-lg">
                                            {message}
                                        </p>
                                    )}
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}