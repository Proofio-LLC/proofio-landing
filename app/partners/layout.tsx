import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners - Let's Work Together | Proofio",
  description: "Join the Proofio partner program. Collaborate with us to build modern review intelligence solutions.",
  openGraph: {
    title: "Partner with Proofio",
    description: "Join our network of technology partners, agencies, and resellers to transform review management.",
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
