import { Metadata } from "next";
import HelpContent from "./HelpContent";

export const metadata: Metadata = {
  title: "Help Center | Proofio",
  description: "Get support at Proofio. Create a support ticket or browse our documentation.",
  openGraph: {
    title: "Proofio Help Center",
    description: "Documentation and support for the Proofio review intelligence platform.",
  },
};

export default function HelpPage() {
  return <HelpContent />;
}
