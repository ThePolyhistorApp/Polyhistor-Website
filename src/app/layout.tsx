import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const siteConfig = {
  title: "PolyHistor | AI-Powered Group Travel Planning & Safety App",
  description:
    "PolyHistor is the all-in-one AI app for group travel, simplifying planning, coordination, and safety. Get proactive safety alerts and generate custom itineraries instantly. Join the waitlist today.",
  url: "https://thepolyhistor.com",
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "group travel",
    "AI travel planner",
    "travel safety",
    "PolyHistor",
    "group trip coordination",
    "safety alerts",
  ],

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
        alt: "PolyHistor App - AI-Powered Group Travel Planning & Safety",
      },
    ],
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
              name: "PolyHistor",
              applicationCategory: "TravelApplication",
              operatingSystem: "iOS, Android",
              description:
                "PolyHistor is an AI-powered mobile app that unifies group travel planning, live coordination, and proactive safety alerts.",
              author: {
                "@type": "Organization",
                name: "PolyHistor",
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
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
