"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// 1. UPDATED DATA: Each feature now has its own width and height
const features = [
  {
    title: "AI Trip Planner",
    description:
      "Our app automatically generates a custom itinerary based on your group's budget and preferences. Simply input your constraints, and let our AI build the perfect trip, saving you hours of planning.",
    visual: "/aitripplanner.png",
    width: 600,
    height: 700,
  },
  {
    title: "Live Group Coordination",
    description:
      "Track everyone's location in real-time on a single, unified map to stay connected. No more 'where are you?' texts—see your group's location at a glance and navigate with confidence.",
    visual: "/livecoordination.png",
    width: 600,
    height: 700,
  },
  {
    title: "Proactive Safety Alerts",
    description:
      "Receive intelligent notifications when your group is near high-crime areas, so you can make safer choices. Our predictive AI acts as your safety co-pilot in unfamiliar places.",
    visual: "/realtimealerts.png",
    width: 270,
    height: 550,
  },
];

export default function FeaturesSection() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    let newPage = page + newDirection;
    if (newPage < 0) {
      newPage = features.length - 1;
    } else if (newPage >= features.length) {
      newPage = 0;
    }
    setPage([newPage, newDirection]);
  };

  const currentFeature = features[page];

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [page]);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
            All-in-One Group Travel, Simplified.
          </h2>
        </div>

        {/* 3. REMOVED fixed height (h-[...]) to allow the container to adapt */}
        <div className="relative min-h-[550px] px-10 flex items-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={{
                enter: (direction: number) => ({
                  x: direction > 0 ? "100%" : "-100%",
                  opacity: 0,
                }),
                center: { x: "0%", opacity: 1 },
                exit: (direction: number) => ({
                  x: direction < 0 ? "100%" : "-100%",
                  opacity: 0,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="w-full absolute inset-0 grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Text Content */}
              <div
                className={`text-center md:text-left ${
                  page % 2 !== 0 ? "md:order-last" : ""
                }`}
              >
                <h3 className="text-2xl font-bold text-brand-blue mb-4">
                  {currentFeature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {currentFeature.description}
                </p>
              </div>

              <div className="w-full flex items-center justify-center">
                <Image
                  src={currentFeature.visual}
                  alt={`${currentFeature.title} mockup`}
                  width={currentFeature.width}
                  height={currentFeature.height}
                  unoptimized={currentFeature.visual.endsWith(".gif")}
                  className="rounded-xl shadow-2xl object-contain"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => paginate(-1)}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/50 hover:bg-white rounded-full p-2 shadow-md z-10"
          >
            <ArrowLeft className="h-6 w-6 text-brand-blue" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/50 hover:bg-white rounded-full p-2 shadow-md z-10"
          >
            <ArrowRight className="h-6 w-6 text-brand-blue" />
          </button>
        </div>

        <div className="flex justify-center space-x-3 mt-8">
          {features.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-colors ${
                page === i ? "bg-brand-coral" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
