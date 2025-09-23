// src/components/HowItWorksSection.tsx
"use client";

import { motion } from "framer-motion";
import { Calendar, Map, ShieldCheck } from "lucide-react";

export default function HowItWorksSection() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
          Get Started in Three Simple Steps.
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 grid md:grid-cols-3 gap-12"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <div className="bg-brand-coral/20 text-brand-coral p-4 rounded-full">
              <Calendar size={32} />
            </div>
            <h3 className="mt-4 text-xl font-bold">1. Plan</h3>
            <p className="mt-2 text-gray-600">
              Input your trip details and let our Al build the perfect,
              shareable itinerary.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <div className="bg-brand-coral/20 text-brand-coral p-4 rounded-full">
              <Map size={32} />
            </div>
            <h3 className="mt-4 text-xl font-bold">2. Explore</h3>
            <p className="mt-2 text-gray-600">
              Navigate your destination together with live location sharing for
              your entire group.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <div className="bg-brand-coral/20 text-brand-coral p-4 rounded-full">
              <ShieldCheck size={32} />
            </div>
            <h3 className="mt-4 text-xl font-bold">3. Protect</h3>
            <p className="mt-2 text-gray-600">
              Travel with confidence as our app proactively monitors your
              surroundings for potential risks.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
