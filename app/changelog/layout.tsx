import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog - Evolution of Proofio | Proofio",
  description: "Stay up to date with the latest features, improvements, and fixes at Proofio.",
  openGraph: {
    title: "Proofio Changelog - What's New",
    description: "The chronicle of our journey to build the ultimate review intelligence platform.",
  },
};

export default function ChangelogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
