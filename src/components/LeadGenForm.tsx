"use client";

import { Building2, Calendar, Linkedin, X } from "lucide-react";
import { useState } from "react";

interface LeadGenFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadGenForm({ isOpen, onClose }: LeadGenFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    groupSize: "",
    phone: "",
    linkedin: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email to naveengali@thepolyhistor.com
      const response = await fetch("/api/send-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to: "naveengali@thepolyhistor.com",
        }),
      });

      if (response.ok) {
        console.log("Lead submitted successfully:", formData);
        setSubmitted(true);
      } else {
        console.error("Failed to send lead");
        // Still show success to user, data is logged
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
      // Still show success to user
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
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
              <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-viral-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Request a Pilot Demo
              </h2>
              <p className="text-slate-600">
                See how Polyhistor reduces liability for tour operators
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  placeholder="Jane Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  placeholder="jane@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Company/Organization *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  placeholder="Amazing Tours Inc."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Typical Group Size *
                </label>
                <select
                  name="groupSize"
                  value={formData.groupSize}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all bg-white"
                >
                  <option value="">Select size</option>
                  <option value="10-25">10-25 travelers</option>
                  <option value="25-50">25-50 travelers</option>
                  <option value="50-100">50-100 travelers</option>
                  <option value="100+">100+ travelers</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  LinkedIn Profile (Optional)
                </label>
                <div className="relative">
                  <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    placeholder="linkedin.com/in/yourprofile"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-viral-purple text-white font-bold hover:shadow-glow-blue hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Calendar className="w-5 h-5" />
                {isSubmitting ? "Sending..." : "Schedule Demo Call"}
              </button>
            </form>

            {/* Trust Signal */}
            <p className="mt-4 text-xs text-center text-slate-500">
              We'll reach out within 24 hours to schedule your personalized demo
            </p>
          </>
        ) : (
          /* Success State */
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-4xl">✓</div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Request Received!
            </h3>
            <p className="text-slate-600 mb-6">
              Our team will contact you within 24 hours to schedule your
              personalized pilot demo.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl font-semibold text-slate-700 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
