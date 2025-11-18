"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection({
                                       onJoinWaitlistClick,
                                   }: {
    onJoinWaitlistClick: () => void;
}) {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto bg-brand-blue rounded-[3rem] overflow-hidden shadow-2xl relative">

                    {/* Abstract Gradient Background */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-30">
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-coral rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 left-1/2 w-full h-full bg-blue-400 rounded-full blur-3xl transform -translate-y-1/2"></div>
                    </div>

                    <div className="relative z-10 py-20 px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Ready to travel smarter?
                            </h2>
                            <p className="text-lg text-blue-100 max-w-xl mx-auto mb-10">
                                Join thousands of parents and travelers on the waitlist.
                                Secure your family's peace of mind today.
                            </p>

                            <button
                                onClick={onJoinWaitlistClick}
                                className="inline-flex items-center px-8 py-4 bg-white text-brand-blue text-lg font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Join the Waitlist <ArrowRight className="ml-2 w-5 h-5" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}