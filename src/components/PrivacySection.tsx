"use client";

import { motion } from "framer-motion";
import { Lock, Shield, UserCheck, EyeOff } from "lucide-react";

const trustFeatures = [
    {
        icon: EyeOff,
        title: "No Data Selling. Ever.",
        desc: "Our business model is subscription-based. You are the customer, not the product. We never sell location history.",
    },
    {
        icon: Lock,
        title: "End-to-End Encryption",
        desc: "Location data is encrypted in transit and at rest. Only your family circle holds the keys to view it.",
    },
    {
        icon: UserCheck,
        title: "COPPA Compliant",
        desc: "Built with strict adherence to children's privacy laws. Verifiable parental consent is baked into our onboarding.",
    },
];

export default function PrivacySection() {
    return (
        <section id="safety" className="py-24 bg-safety-900 text-white relative overflow-hidden">
            {/* Abstract background decorative circle */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-safety-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Left Side: The Promise */}
                    <div className="md:w-1/2">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-safety-800 border border-safety-700 text-safety-100 text-xs font-bold uppercase tracking-wider mb-6">
                            <Shield className="w-3 h-3 mr-2" /> Safety First Architecture
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            We are in the business of <br />
                            <span className="text-safety-400">Trust</span>, not Data.
                        </h2>
                        <p className="text-safety-100 text-lg leading-relaxed opacity-90">
                            Most free tracking apps pay their server bills by selling your movement patterns to advertisers. <br /><br />
                            <strong>We chose a different path.</strong> We charge a fair subscription price so we can afford to keep your data private, secure, and yours alone.
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
                                    <div className="bg-safety-500/20 p-3 rounded-lg mr-5">
                                        <item.icon className="w-6 h-6 text-safety-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-safety-200 text-sm leading-relaxed">{item.desc}</p>
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