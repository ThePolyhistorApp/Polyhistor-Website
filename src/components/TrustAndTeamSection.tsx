// src/components/TrustAndTeamSection.tsx
"use client";

import { motion } from "framer-motion";

export default function TrustAndTeamSection() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* Trust & Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
            Safety Isn't a Feature. It's Our Foundation.
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-gray-50 p-8 rounded-xl shadow-md text-left">
              <h3 className="font-bold text-lg text-brand-blue">
                Built by Data Scientists
              </h3>
              <p className="mt-2 text-gray-600">
                Our intelligent safety system is developed by a data scientist
                with experience building predictive machine learning systems.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md text-left">
              <h3 className="font-bold text-lg text-brand-blue">
                Designed by Safety Experts
              </h3>
              <p className="mt-2 text-gray-600">
                Our user experience is designed by a product lead who has
                professionally built a GPS-based kidnapping prevention tool.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
            Built by Engineers, For Travelers.
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="mt-4 max-w-3xl mx-auto text-gray-600"
          >
            We are a team of three founders who have known each other for 10
            years, from high school in India to graduating together with
            Master's degrees in Computer Science from the Illinois Institute of
            Technology in Chicago.
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h3 className="font-bold">Naveen Gali </h3>
              <p className="text-sm text-brand-coral">CEO</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <h3 className="font-bold">Sagar Sujith Somepalli</h3>
              <p className="text-sm text-brand-coral">CTO</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <h3 className="font-bold">Mahendra Reddy Ippala</h3>
              <p className="text-sm text-brand-coral">COO</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
