"use client";

import { motion } from "framer-motion";

export default function CTASection({
  onJoinWaitlistClick,
}: {
  onJoinWaitlistClick: () => void;
}) {
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
          The future of group travel is almost here. Join our waitlist for early
          access and travel safer, together.
        </p>
        <div className="mt-8 flex justify-center">
          {/* We'll make the whole input a button to simplify */}
          <button
            onClick={onJoinWaitlistClick} // Use the passed-in function
            className="flex w-full max-w-md bg-white rounded-lg p-2 shadow-inner text-left items-center cursor-pointer"
          >
            <span className="w-full px-4 py-2 text-gray-500">
              Your Email Address
            </span>
            <div className="bg-brand-coral p-3 rounded-md">
              <span className="text-white font-bold">Join →</span>
            </div>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
