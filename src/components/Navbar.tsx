"use client";

import { useModal } from "@/context/ModalContext";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const { openModal } = useModal();

  const features = [
    { name: "Friend Map", href: "#friend-map" },
    { name: "Expense Splitting", href: "#expense-splitting" },
    { name: "Itinerary Voting", href: "#itinerary-voting" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/polyhistor-logo.svg"
              alt="Polyhistor"
              width={200}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Features Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setFeaturesOpen(true)}
                onMouseLeave={() => setFeaturesOpen(false)}
                className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
              >
                Features
                <ChevronDown className={`w-4 h-4 transition-transform ${featuresOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {featuresOpen && (
                <div
                  onMouseEnter={() => setFeaturesOpen(true)}
                  onMouseLeave={() => setFeaturesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  {features.map((feature) => (
                    <Link
                      key={feature.name}
                      href={feature.href}
                      className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-blue transition-colors"
                    >
                      {feature.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="#community" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
              Community
            </Link>

            <Link
              href="/enterprise"
              className="text-sm font-semibold text-slate-700 hover:text-brand-blue px-4 py-2 rounded-full border border-slate-200 hover:border-brand-blue transition-all"
            >
              For Agencies
            </Link>
          </div>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={openModal}
              className="hidden md:block px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-coral text-white text-sm font-bold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Join Waitlist
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-4 py-4 space-y-3">
            {/* Features Submenu */}
            <div>
              <button
                onClick={() => setFeaturesOpen(!featuresOpen)}
                className="flex items-center justify-between w-full text-slate-700 font-medium py-2"
              >
                Features
                <ChevronDown className={`w-4 h-4 transition-transform ${featuresOpen ? 'rotate-180' : ''}`} />
              </button>
              {featuresOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  {features.map((feature) => (
                    <Link
                      key={feature.name}
                      href={feature.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-slate-600 py-2 hover:text-brand-blue"
                    >
                      {feature.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="#community"
              onClick={() => setIsOpen(false)}
              className="block text-slate-600 font-medium py-2 hover:text-brand-blue"
            >
              Community
            </Link>

            <Link
              href="/enterprise"
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 font-semibold py-2 px-4 rounded-lg border border-slate-200 hover:border-brand-blue hover:text-brand-blue text-center"
            >
              For Agencies
            </Link>

            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setIsOpen(false);
                  openModal();
                }}
                className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-coral text-white font-bold hover:shadow-lg"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
