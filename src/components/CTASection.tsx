"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-brand-blue text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Be the First to Know.
        </h2>

        <p className="mt-4 max-w-xl mx-auto">
          The future of group travel is almost here, Join our waitlist for early
          access and travel safer, together.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="flex w-full max-w-md bg-white rounded-lg p-2 shadow-inner">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-4 py-2 text-gray-800 bg-transparent focus:outline-none placeholder:text-gray-500"
            />
            <button className="bg-brand-coral p-3 rounded-md hover:bg-opacity-90 transition-colors">
              <ArrowRight className="text-white" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
