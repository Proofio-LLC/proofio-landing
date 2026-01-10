import { jobs } from "@/lib/jobs";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import JobDetailClient from "./JobDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return {
      title: "Job Not Found | Proofio",
    };
  }

  return {
    title: `${job.title} | Careers at Proofio`,
    description: job.description,
    openGraph: {
      title: `${job.title} - ${job.category} position at Proofio`,
      description: job.description,
      type: "article",
    },
  };
}

export default async function JobDetailPage({ params }: PageProps) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    notFound();
  }

  return <JobDetailClient job={job} />;
}
