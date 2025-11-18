"use client";

import { useState } from "react";
import Link from "next/link";
import { Twitter, Linkedin, Instagram, X, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
    const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
    const [legalType, setLegalType] = useState("");

    const openLegal = (type: string) => {
        setLegalType(type);
        setIsLegalModalOpen(true);
    };

    return (
        <>
            <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 mt-auto">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                        {/* Brand Column */}
                        <div className="col-span-1 md:col-span-2">
                            <Link href="/" className="text-2xl font-bold text-brand-blue mb-4 block">
                                PolyHistor
                            </Link>
                            <p className="text-slate-500 max-w-xs">
                                Coordinated Travel. Confident Safety. The all-in-one platform for modern family logistics.
                            </p>
                        </div>

                        {/* Product Links */}
                        <div>
                            <h4 className="font-bold text-slate-900 mb-4">Product</h4>
                            <ul className="space-y-2 text-slate-500 text-sm">
                                <li><Link href="/#features" className="hover:text-brand-blue">Features</Link></li>
                                <li><Link href="/#safety" className="hover:text-safety-500">Safety</Link></li>
                                <li><span className="text-slate-300 cursor-not-allowed">Download (Beta)</span></li>
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
                            <ul className="space-y-2 text-slate-500 text-sm">
                                <li>
                                    <Link href="/about" className="hover:text-brand-blue">About Us</Link>
                                </li>
                                <li>
                                    <button onClick={() => openLegal("Privacy Policy")} className="hover:text-brand-blue text-left">
                                        Privacy Policy
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => openLegal("Terms of Service")} className="hover:text-brand-blue text-left">
                                        Terms of Service
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-slate-400 text-sm">© 2025 ThePolyhistor. All rights reserved.</p>

                        <div className="flex space-x-6 mt-4 md:mt-0">
                            {/*<a href="#" className="text-slate-400 hover:text-brand-blue transition-colors"><Twitter size={20} /></a>*/}
                            <a
                                href="https://www.linkedin.com/company/thepolyhistor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-brand-blue transition-colors"
                                aria-label="Visit ThePolyhistor on LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            {/*<a href="#" className="text-slate-400 hover:text-brand-blue transition-colors"><Instagram size={20} /></a>*/}
                        </div>
                    </div>
                </div>
            </footer>

            {/* The "Coming Soon" Modal for Legal Docs */}
            <AnimatePresence>
                {isLegalModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setIsLegalModalOpen(false)}
                            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                            className="relative bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
                        >
                            <button onClick={() => setIsLegalModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
                                <X size={20} />
                            </button>
                            <div className="w-12 h-12 bg-safety-50 text-safety-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <ShieldAlert size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{legalType}</h3>
                            <p className="text-slate-600 mb-6">
                                We are currently working with our legal counsel to finalize our compliance documents (including COPPA & GDPR). <br/><br/>
                                <strong>Safety is our #1 priority</strong>, so we aren't launching until these are perfect.
                            </p>
                            <button
                                onClick={() => setIsLegalModalOpen(false)}
                                className="px-6 py-2 bg-slate-900 text-white rounded-lg font-bold text-sm hover:bg-slate-800"
                            >
                                Understood
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}