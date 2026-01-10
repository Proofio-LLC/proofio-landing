import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Transparent Plans for Teams of All Sizes | Proofio",
  description: "Choose the right plan for your review intelligence needs. From free starter to enterprise scale.",
  openGraph: {
    title: "Proofio Pricing - Growth and Scale Plans",
    description: "Compare our plans and start aggregating your reviews today. Free starter plan available.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
