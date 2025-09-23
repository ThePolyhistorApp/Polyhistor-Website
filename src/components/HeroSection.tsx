"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-brand-blue leading-tight">
            Redefining How the World Travels Together.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
            PolyHistor is the Al-powered co-pilot that unifies your group's
            plans, location, and safety into one intelligent app.
          </p>
          <motion.button
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
          className="hidden md:flex justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            <Image
              src="/logo.png"
              alt="PolyHistor Compass Logo"
              width={500}
              height={500}
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
