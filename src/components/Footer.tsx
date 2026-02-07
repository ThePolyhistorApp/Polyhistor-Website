"use client";

import { Instagram, Linkedin, Twitter } from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-white to-slate-50 border-t border-slate-200 pt-16 pb-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="mb-6 block">
                            <NextImage
                                src="/polyhistor-logo.svg"
                                alt="Polyhistor"
                                width={250}
                                height={50}
                                className="h-12 w-auto"
                            />
                        </Link>
                        <p className="text-slate-600 max-w-md mb-6 font-medium">
                            Never lose your friends (or your money) again. Group travel made simple for Gen Z travelers.
                        </p>

                        {/* Pre-launch Stats */}
                        <div className="flex flex-wrap gap-6 mb-6">
                            <div>
                                <p className="text-2xl font-bold text-viral-red">90+</p>
                                <p className="text-sm text-slate-500">On Waitlist</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-viral-purple">2</p>
                                <p className="text-sm text-slate-500">Pilot Programs</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-brand-blue">15+</p>
                                <p className="text-sm text-slate-500">Countries Interested</p>
                            </div>
                        </div>


                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-4">Product</h4>
                        <ul className="space-y-3 text-slate-600 text-sm">
                            <li>
                                <Link href="/#features" className="hover:text-viral-red transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/enterprise" className="hover:text-brand-blue transition-colors">
                                    For Agencies
                                </Link>
                            </li>
                            <li>
                                <Link href="/#community" className="hover:text-viral-purple transition-colors">
                                    Community
                                </Link>
                            </li>
                            <li>
                                <span className="text-slate-400 cursor-not-allowed">
                                    Download (Coming Spring 2026)
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-4">Company</h4>
                        <ul className="space-y-3 text-slate-600 text-sm">
                            <li>
                                <Link href="/about" className="hover:text-viral-red transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-viral-red transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="hover:text-viral-red transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-of-service" className="hover:text-viral-red transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/eula" className="hover:text-viral-red transition-colors">
                                    EULA
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-200 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm">
                            © 2026 Polyhistor Inc. All rights reserved. Made with ❤️ for travelers.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-6">
                            <a
                                href="https://x.com/polyhistor_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-viral-red transition-colors"
                                aria-label="Follow us on Twitter"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/thepolyhistor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-brand-blue transition-colors"
                                aria-label="Visit Polyhistor on LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://instagram.com/polyhistorapp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-viral-purple transition-colors"
                                aria-label="Follow us on Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}