import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Existing brand colors (kept for compatibility)
                "brand-blue": "#0A2A4E",
                "brand-coral": "#FF6F61",

                // NEW: Deep Teal/Blue for Trust & Safety Mode
                safety: {
                    50: '#f0f9fa',
                    100: '#dcfce7',
                    500: '#0f766e', // Primary Brand
                    900: '#134e4a',
                },
                // NEW: Vibrant Coral/Orange for Travel & Energy Mode
                travel: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    500: '#f97316',
                    900: '#7c2d12',
                }
            },
            // Animation for the background blobs
            animation: {
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                }
            }
        },
    },
    plugins: [],
};
export default config;