"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

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
    visual: "/Safetyalerts.png",
    width: 270,
    height: 550,
  },
];
export default function FeaturesSection() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPlaying, setIsPlaying] = useState(true);

  const paginate = useCallback((newDirection: number) => {
    setPage((prevPage) => {
      let newPage = prevPage[0] + newDirection;
      if (newPage < 0) {
        newPage = features.length - 1;
      } else if (newPage >= features.length) {
        newPage = 0;
      }
      return [newPage, newDirection];
    });
  }, []);

  const jumpToPage = (newPage: number) => {
    const newDirection = newPage > page ? 1 : -1;
    setPage([newPage, newDirection]);
  };

  const currentFeature = features[page];

  useEffect(() => {
    if (!isPlaying) {
      return;
    }
    const interval = setInterval(() => {
      paginate(1);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying, paginate]);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
            All-in-One Group Travel, Simplified.
          </h2>
        </div>

        {/* MODIFIED: Using a stable container with a fixed height */}
        <div className="relative h-[550px]">
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
              className="w-full h-full absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-8 p-4 items-center"
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

              {/* MODIFIED: Using layout="fill" for a consistent image container */}
              <div className="relative w-full h-full">
                <Image
                  src={currentFeature.visual}
                  alt={`${currentFeature.title} mockup`}
                  layout="fill"
                  objectFit="contain"
                  unoptimized={currentFeature.visual.endsWith(".gif")}
                  className="rounded-xl"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls layout */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          {/* Pagination Dots */}
          <div className="flex items-center space-x-3">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => jumpToPage(i)}
                className="p-1 rounded-full"
                aria-label={`Go to slide ${i + 1}`}
              >
                <div
                  className={`h-2 w-2 rounded-full transition-colors ${
                    page === i ? "bg-brand-coral" : "bg-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Small Play/Pause Button */}
          <button
            onClick={handleTogglePlay}
            className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-brand-blue transition-colors"
            aria-label={
              isPlaying ? "Pause automatic sliding" : "Play automatic sliding"
            }
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

