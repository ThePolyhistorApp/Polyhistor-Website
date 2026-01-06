import FirebaseAnalytics from "@/components/FirebaseAnalytics"; // NEW
import Footer from "@/components/Footer";
import GlobalWaitlistWrapper from "@/components/GlobalWaitlistWrapper";
import Navbar from "@/components/Navbar";
import { ModalProvider } from "@/context/ModalContext";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const siteConfig = {
  title: "ThePolyHistor | The Operating System for Group Travel",
  description:
    "Empower your agency with real-time liability protection and AI-guided travel tools. Join the future of student tour management.",
  url: "https://thepolyhistor.com",
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "group travel agency software",
    "student tour operator app",
    "travel liability protection",
    "group travel safety app",
    "ThePolyHistor",
    "trip coordination platform",
  ],
  authors: [{ name: "ThePolyHistor Team" }],
  creator: "ThePolyHistor",
  publisher: "ThePolyHistor",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: "ThePolyHistor",
    images: [
      {
        url: "/social-card.png",
        width: 1200,
        height: 630,
        alt: "ThePolyHistor App - Agency Dashboard & Mobile App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/social-card.png"],
    creator: "@ThePolyHistor",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={manrope.className}>
        <FirebaseAnalytics />
        <ModalProvider>
          <Navbar />
          {children}
          <Footer />
          <GlobalWaitlistWrapper />
        </ModalProvider>
      </body>
    </html>
  );
}
