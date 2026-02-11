import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Polyhistor",
  description: "Meet the team behind Polyhistor. Built by friends, engineered for safety. Learn about our mission to revolutionize group travel.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
