"use client";

import { QrCode, Share2, X } from "lucide-react";
import { useState } from "react";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRCodeModal({ isOpen, onClose }: QRCodeModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with actual waitlist API
    console.log("Email submitted:", email);
    setSubmitted(true);

    // Redirect to thank you page after 1.5s
    setTimeout(() => {
      window.location.href = "/thank-you";
    }, 1500);
  };

  const shareText = "Check out Polyhistor - never lose your friends (or money) on group trips again! 🌍";
  const shareUrl = "https://thepolyhistor.com";

  const handleShare = (platform: string) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    };
    window.open(urls[platform as keyof typeof urls], "_blank", "width=600,height=400");
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-viral-red to-viral-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <QrCode className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Join the Waitlist
              </h2>
              <p className="text-slate-600">
                Be first to know when we launch Spring 2025
              </p>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-viral-red focus:ring-2 focus:ring-viral-red/20 outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-viral-red text-white font-bold hover:shadow-glow hover:scale-105 transition-all duration-200"
              >
                Reserve My Spot
              </button>
            </form>

            {/* Social Share */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-600 text-center mb-3">
                Or share with friends:
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => handleShare("twitter")}
                  className="p-3 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                >
                  <Share2 className="w-5 h-5 text-slate-700" />
                </button>
                <button
                  onClick={() => handleShare("facebook")}
                  className="p-3 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                >
                  <Share2 className="w-5 h-5 text-slate-700" />
                </button>
                <button
                  onClick={() => handleShare("linkedin")}
                  className="p-3 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                >
                  <Share2 className="w-5 h-5 text-slate-700" />
                </button>
              </div>
            </div>

            {/* Pricing Note */}
            <div className="mt-4 p-3 bg-slate-50 rounded-xl">
              <p className="text-xs text-slate-600 text-center">
                💰 <strong>Pricing:</strong> Coming Soon! Early access members get special rates.
              </p>
            </div>
          </>
        ) : (
          /* Success State */
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-4xl">✓</div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              You're In! 🎉
            </h3>
            <p className="text-slate-600">
              Redirecting to your referral dashboard...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
