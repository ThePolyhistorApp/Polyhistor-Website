// src/components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";

// Accept the onClick function as a prop
export default function HeroSection({
  onJoinWaitlistClick,
}: {
  onJoinWaitlistClick: () => void;
}) {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-brand-blue leading-tight">
            Redefining How the World Travels Together.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
            PolyHistor is the Al-powered co-pilot that unifies your group's
            plans, location, and safety into one intelligent app.
          </p>
          <motion.button
            onClick={onJoinWaitlistClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-brand-coral text-white font-bold py-3 px-8 rounded-lg shadow-lg"
          >
            Join the Waitlist
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center order-1 md:order-2"
        >
          {/* Replaced the Image component with the HTML video tag */}
          <video
            width="500"
            height="500"
            autoPlay
            muted
            playsInline
            className="w-full h-auto max-w-md"
          >
            <source src="/logo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
}

