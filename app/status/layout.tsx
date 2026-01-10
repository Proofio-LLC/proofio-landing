import { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Status - Real-time Platform Health | Proofio",
  description: "Check the current status and health of Proofio services, including API, sync engine, and dashboard.",
  openGraph: {
    title: "Proofio System Status",
    description: "Real-time monitoring and transparency for all Proofio infrastructure services.",
  },
};

export default function StatusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
