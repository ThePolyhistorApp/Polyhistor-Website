"use client";

import { useModal } from "@/context/ModalContext";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Building2, CheckCircle, Eye, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function EnterprisePage() {
  const { openModal } = useModal();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <main className="antialiased font-sans text-slate-900 bg-white pt-16">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="py-24 bg-gradient-to-br from-slate-900 via-brand-blue to-slate-900 text-white overflow-hidden relative"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <Building2 className="w-5 h-5" />
                <span className="text-sm font-semibold">For Tour Operators</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                The Operating System for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-notification-orange">
                  Liability Reduction
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Real-time visibility. Automated compliance. Zero adoption friction.
                Finally, a safety solution your students will actually use.
              </p>

              <button
                onClick={openModal}
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-brand-coral to-notification-orange text-white font-bold hover:shadow-2xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-coral/20 to-viral-purple/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700">
                <Image
                  src="/agency-dashboard.png"
                  alt="Agency Dashboard showing real-time student tracking"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Adoption Solved Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-brand-coral/10 text-brand-coral font-bold tracking-wide uppercase text-sm mb-4">
              The Adoption Problem
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Students Don't Use GPS Trackers.{" "}
              <span className="text-brand-coral">But They Use This.</span>
            </h2>
            <p className="text-xl text-slate-600">
              Traditional safety apps get uninstalled within hours. Polyhistor keeps
              students engaged with consumer features they love—giving you 100%
              visibility without forcing adoption.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Traditional Approach */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <div className="text-red-500 mb-4">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Traditional GPS Tracker
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Students uninstall after 2 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Battery drain complaints</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Zero value for students</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>20% actual coverage</span>
                </li>
              </ul>
            </div>

            {/* Polyhistor Approach */}
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="text-green-500 mb-4">
                <CheckCircle className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                The Polyhistor Way
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Students keep app for social features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Smart battery optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>High value: maps, bills, meetups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>98% sustained coverage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* God View Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-bold tracking-wide uppercase text-sm mb-4">
              Real-Time Control
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              The <span className="text-brand-blue">"God View"</span> Dashboard
            </h2>
            <p className="text-xl text-slate-600">
              Monitor multiple groups simultaneously. Get instant alerts. React in
              real-time. Everything you need to keep travelers safe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Eye,
                title: "Live Tracking",
                description: "See every traveler's location, battery, and status in real-time",
              },
              {
                icon: Shield,
                title: "Geofencing Alerts",
                description: "Automatic notifications when students enter high-risk areas",
              },
              {
                icon: CheckCircle,
                title: "Check-In System",
                description: "Automated check-ins with escalation for missing travelers",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md border border-slate-100 hover:shadow-xl transition-shadow"
              >
                <div className="text-brand-blue mb-4">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-safety-500/10 text-safety-500 font-bold tracking-wide uppercase text-sm mb-4">
              Enterprise Security
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Built for Compliance & Security
            </h2>
          </div>

          {/* Compliance Logos */}
          <div className="flex flex-wrap justify-center items-center gap-12 mb-12">
            {["FERPA", "COPPA", "SYTA"].map((cert) => (
              <div
                key={cert}
                className="px-8 py-4 bg-slate-100 rounded-xl font-bold text-2xl text-slate-700"
              >
                {cert}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                🔒 Enterprise-Grade Security
              </h3>
              <p className="text-slate-600">
                End-to-end encryption, SOC 2 compliance, annual security audits
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                📋 Regulatory Compliance
              </h3>
              <p className="text-slate-600">
                FERPA, COPPA compliant. Full audit trails for liability protection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-brand-blue to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Upgrade Your Tours?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join the waitlist to be among the first tour operators to access
            Polyhistor's safety platform. We'll identify business emails and reach
            out for pilot opportunities.
          </p>
          <button
            onClick={openModal}
            className="px-10 py-5 rounded-full bg-gradient-to-r from-brand-coral to-notification-orange text-white font-bold hover:shadow-2xl hover:scale-105 transition-all duration-200 text-lg"
          >
            Join Waitlist
          </button>
          <p className="mt-6 text-sm text-slate-400">
            Or{" "}
            <Link href="/" className="text-brand-coral hover:underline">
              learn about the traveler features
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
