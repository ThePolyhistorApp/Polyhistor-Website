"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function ThankYouPage() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Set window size for confetti
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Stop confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center justify-center px-4">
      {/* Confetti Effect */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={400}
          recycle={false}
          colors={["#FF2D55", "#FB923C", "#A855F7", "#0A2A4E", "#3B82F6"]}
        />
      )}

      <div className="max-w-2xl mx-auto text-center">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-32 h-32 bg-gradient-to-r from-viral-red to-viral-purple rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
            <span className="text-7xl">🎉</span>
          </div>
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            You're In!
          </h1>

          <p className="text-xl text-slate-600 mb-4">
            Thank you for joining the waitlist
          </p>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl border-2 border-slate-200 p-8 mb-8 shadow-glass max-w-md mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed">
              📧 <strong>An email will be sent to you</strong> with early access details and launch updates.
            </p>
          </div>

          <p className="text-sm text-slate-500 mb-8">
            Launching <strong>Spring 2025</strong>
          </p>

          {/* Back to Homepage */}
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-brand-blue to-viral-red text-white rounded-full font-bold hover:shadow-glow hover:scale-105 transition-all duration-200"
          >
            Back to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
