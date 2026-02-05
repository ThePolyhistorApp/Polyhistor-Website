"use client";

import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useRef } from "react";
import TrustBadge from "./TrustBadge";

const testimonials = [
  {
    text: "Can't wait to try this on our Spring Break trip! 🙌",
    author: "Adithya",
    platform: "Linkedin",
    color: "bg-blue-50 border-blue-200",
  },
  {
    text: "Finally, an app that will actually make group trips seamless. Sign me up!",
    author: "Ajay Ippala",
    platform: "Waitlist",
    color: "bg-pink-50 border-pink-200",
  },
  {
    text: "This is going to be a game changer for our study abroad group 💯",
    author: "@travelwithcoo",
    platform: "Instagram",
    color: "bg-purple-50 border-purple-200",
  },
  {
    text: "The middle point feature sounds GENIUS. Can't wait to use it!",
    author: "Bhavya",
    platform: "Waitlist",
    color: "bg-green-50 border-green-200",
  },
  {
    text: "Our group will plan to use this for our summer trip",
    author: "@collegetrips",
    platform: "Linkedin",
    color: "bg-orange-50 border-orange-200",
  },
  {
    text: "Been waiting for something like this. So excited!",
    author: "Vamsi Maguluri",
    platform: "Waitlist",
    color: "bg-red-50 border-red-200",
  },
];

export default function SocialProofSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-coral/10 text-brand-coral font-bold tracking-wide uppercase text-sm mb-4">
            Early Interest
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-viral-purple">
              90+ on Waitlist.
            </span>{" "}
            2 Pilot Programs in Talks.
          </h2>
          <div className="flex items-center justify-center gap-2 text-notification-orange">
            <Sparkles className="w-6 h-6 fill-current" />
            <span className="text-lg font-semibold text-slate-700">
              Launching Spring 2026
            </span>
          </div>
        </motion.div>

        {/* Wall of Excitement - Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                ${testimonial.color} 
                bg-white/60 
                backdrop-blur-md 
                border-2 
                rounded-2xl 
                p-6 
                shadow-glass 
                hover:shadow-glass-lg 
                transition-all 
                duration-300
                hover:scale-[1.02]
              `}
            >
              {/* Quote */}
              <p className="text-slate-800 font-medium text-lg mb-4">
                "{testimonial.text}"
              </p>

              {/* Author with Trust Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm font-semibold text-slate-700">
                        {testimonial.author}
                      </p>
                      <TrustBadge size="sm" />
                    </div>
                    <p className="text-xs text-slate-500">
                      via {testimonial.platform}
                    </p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-viral-red to-viral-purple" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "90+", label: "On Waitlist" },
            { number: "2", label: "Pilot Programs in Talks" },
            { number: "15+", label: "Countries Interested" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-md border border-slate-100"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-coral mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
