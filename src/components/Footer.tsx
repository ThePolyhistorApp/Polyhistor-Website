"use client";

import { Linkedin } from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";

export default function Footer() {

    return (
        <>
            <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 mt-auto">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                        {/* Brand Column */}
                        <div className="col-span-1 md:col-span-2">
                            <Link href="/" className="mb-4 block">
                                <NextImage
                                    src="/thepolyhistor-logo.svg"
                                    alt="ThePolyHistor"
                                    width={300}
                                    height={48}
                                    className="h-12 w-auto"
                                />
                            </Link>
                            <p className="text-slate-500 max-w-xs mb-4">
                                Trusted by Modern Student Tour Agencies.
                            </p>
                            <p className="text-slate-400 text-sm">
                                Join 85+ organizers on the waitlist building the future of safe travel.
                            </p>
                        </div>

                        {/* Product Links */}
                        <div>
                            <h4 className="font-bold text-slate-900 mb-4">Product</h4>
                            <ul className="space-y-2 text-slate-500 text-sm">
                                <li><Link href="/#features" className="hover:text-brand-blue">Features</Link></li>
                                <li><Link href="/#safety" className="hover:text-safety-500">Safety</Link></li>
                                <li><span className="text-slate-300 cursor-not-allowed">Download (Beta)</span></li>
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
                            <ul className="space-y-2 text-slate-500 text-sm">
                                <li>
                                    <Link href="/about" className="hover:text-brand-blue">About Us</Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-brand-blue">Contact Us</Link>
                                </li>
                                <li>
                                    <Link href="/privacy-policy" className="hover:text-brand-blue">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms-of-service" className="hover:text-brand-blue">
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/eula" className="hover:text-brand-blue">
                                        EULA
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-slate-400 text-sm">© 2025 ThePolyhistor. All rights reserved.</p>

                        <div className="flex space-x-6 mt-4 md:mt-0">
                            {/*<a href="#" className="text-slate-400 hover:text-brand-blue transition-colors"><Twitter size={20} /></a>*/}
                            <a
                                href="https://www.linkedin.com/company/thepolyhistor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-brand-blue transition-colors"
                                aria-label="Visit ThePolyhistor on LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            {/*<a href="#" className="text-slate-400 hover:text-brand-blue transition-colors"><Instagram size={20} /></a>*/}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}