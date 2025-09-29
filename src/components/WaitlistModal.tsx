// src/components/WaitlistModal.tsx
"use client";
import axios from "axios";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export default function WaitlistModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [isBetaTester, setIsBetaTester] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      // Axios automatically stringifies objects when Content-Type is JSON
      const response = await axios.post(
        "https://polyhistor-backend-do6y.onrender.com/api/waitlist/join",
        { email, isBetaTester }
      );

      setStatus("success");
      setMessage(
        "Thank you for joining! Please check your email for a confirmation."
      );
      setEmail("");
      setIsBetaTester(false);
    } catch (error: any) {
      // Axios errors have a different shape than fetch errors
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong. Please try again.";

      setStatus("error");
      setMessage(errorMessage);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>

        {status !== "success" ? (
          <>
            <h2 className="text-2xl font-bold text-brand-blue mb-2">
              Join the Waitlist
            </h2>
            <p className="text-gray-600 mb-6">
              Be the first to know when PolyHistor launches.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-coral focus:outline-none"
                />
              </div>
              <div className="flex items-center">
                <input
                  id="beta-tester"
                  type="checkbox"
                  checked={isBetaTester}
                  onChange={(e) => setIsBetaTester(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-brand-coral focus:ring-brand-coral"
                />
                <label
                  htmlFor="beta-tester"
                  className="ml-3 block text-sm text-gray-700"
                >
                  I'm interested in beta testing
                </label>
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-brand-coral text-white font-bold py-3 px-4 rounded-lg shadow-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Submitting..." : "Get Early Access"}
              </button>
            </form>
            {status === "error" && (
              <p className="text-red-500 text-sm mt-4 text-center">{message}</p>
            )}
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-2">
              You're In! ✅
            </h2>
            <p className="text-gray-600">{message}</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
