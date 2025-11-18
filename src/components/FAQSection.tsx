"use client";

import { faqData } from "@/data/faqData";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react"; // Changed to Plus/Minus for a cleaner look
import { useState } from "react";

const FaqItem = ({ item, isOpen, onClick }: { item: { question: string; answer: string }, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className={`border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md ring-1 ring-slate-200' : 'hover:border-slate-300'}`}>
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center p-6 text-left"
            >
        <span className={`text-lg font-bold ${isOpen ? 'text-brand-blue' : 'text-slate-700'}`}>
          {item.question}
        </span>
                <div className={`p-2 rounded-full ${isOpen ? 'bg-brand-coral/10 text-brand-coral' : 'bg-slate-100 text-slate-400'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-500">
                        Everything you need to know about the product and billing.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <FaqItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}