import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Program | Proofio",
  description: "Become a Proofio partner. Join our affiliate program with 10% recurring commission or explore other partnership opportunities including reseller programs and strategic partnerships.",
  openGraph: {
    title: "Partner Program | Proofio",
    description: "Become a Proofio partner. Join our affiliate program with 10% recurring commission or explore other partnership opportunities.",
    images: ["/opengraph.png"],
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
