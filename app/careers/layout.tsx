import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers - Join the Proofio Team | Proofio",
  description: "Explore career opportunities at Proofio. Help us build the ultimate review intelligence platform.",
  openGraph: {
    title: "Work at Proofio",
    description: "Join a remote-first team focused on building high-quality product-led software.",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
