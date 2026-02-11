import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Agencies | Polyhistor Enterprise",
  description: "The operating system for liability reduction. Real-time visibility and automated compliance for student tour operators.",
};

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
