import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const siteConfig = {
  title: "ThePolyHistor | AI-Powered Group Travel Planning & Safety App",
  description:
    "ThePolyHistor is the all-in-one AI app for group travel, unifying planning, coordination, and proactive safety alerts. Generate custom itineraries instantly.",
  url: "https://thepolyhistor.com",
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "group travel",
    "AI travel planner",
    "travel safety",
    "ThePolyHistor",
    "group trip coordination",
    "safety alerts",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/social-card.jpg`,
        width: 1200,
        height: 630,
        alt: "ThePolyHistor App - AI-Powered Group Travel Planning & Safety",
      },
    ],
  },
  // --- ADDITION: Twitter Card Tags ---
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/social-card.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "ThePolyHistor",
              applicationCategory: "TravelApplication",
              operatingSystem: "iOS, Android",
              description:
                "ThePolyHistor is an AI-powered mobile app that unifies group travel planning, live coordination, and proactive safety alerts.",
              author: {
                "@type": "Organization",
                name: "ThePolyHistor",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className={manrope.className}>{children}<Footer  /></body>
    </html>
  );
}
