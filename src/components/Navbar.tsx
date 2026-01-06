"use client";

import { useModal } from "@/context/ModalContext";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/thepolyhistor-logo.svg"
              alt="ThePolyHistor"
              width={160}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
              Features
            </Link>
            <Link href="#safety" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
              Safety & Compliance
            </Link>
            <Link href="#" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
              Agency Benefits
            </Link>
          </div>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={openModal}
              className="hidden md:block px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-colors"
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
            <Link
              href="#features"
              onClick={() => setIsOpen(false)}
              className="block text-slate-600 font-medium py-2 hover:text-brand-blue"
            >
              Features
            </Link>
            <Link
              href="#safety"
              onClick={() => setIsOpen(false)}
              className="block text-slate-600 font-medium py-2 hover:text-brand-blue"
            >
              Safety & Compliance
            </Link>
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="block text-slate-600 font-medium py-2 hover:text-brand-blue"
            >
              Agency Benefits
            </Link>
            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setIsOpen(false);
                  openModal();
                }}
                className="w-full px-5 py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800"
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
