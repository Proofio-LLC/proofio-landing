export interface Job {
  id: string;
  title: string;
  type: "Freelance" | "Contract" | "Full-time";
  location: "Remote" | "US" | "Germany";
  category: "engineering" | "product" | "marketing";
  workload: string;
  about: string;
  description: string;
  whatYouWillDo: string[];
  requirements: string[];
  niceToHave: string[];
}

export const jobs: Job[] = [
  {
    id: "content-marketing-specialist",
    title: "Content & Marketing Specialist (Freelance)",
    type: "Freelance",
    location: "Remote",
    category: "marketing",
    workload: "Flexible, project-based or retainer",
    about: "Proofio is a product-driven SaaS company focused on building trust and clarity around online reviews. We aggregate and unify reviews across platforms to create a single, reliable signal for businesses and their customers.",
    description: "Execute social media content for platforms like X and Instagram. Turn existing ideas, concepts, and content plans into clean, consistent posts.",
    whatYouWillDo: [
      "Execute social media content for platforms like X and Instagram",
      "Turn existing ideas, concepts, and content plans into clean, consistent posts",
      "Write concise captions and copy aligned with Proofio’s brand voice",
      "Schedule and repurpose content across platforms",
      "Support ongoing content consistency (not growth hacking)"
    ],
    requirements: [
      "Strong written English",
      "Experience with B2B, SaaS, or product-focused content",
      "Ability to follow a clear content direction and tone",
      "Reliability and attention to detail"
    ],
    niceToHave: [
      "Familiarity with startups or early-stage SaaS",
      "Basic understanding of trust, reviews, or reputation topics"
    ]
  },
  {
    id: "seo-content-writer",
    title: "SEO & Content Writer (Freelance)",
    type: "Freelance",
    location: "Remote",
    category: "marketing",
    workload: "Per article or monthly collaboration",
    about: "Proofio helps businesses make sense of fragmented reviews and reputation data. Content plays a key role in educating the market and building long-term trust.",
    description: "Write SEO-optimized blog articles focused on reviews & reputation, trust and credibility, and SaaS products.",
    whatYouWillDo: [
      "Write SEO-optimized blog articles focused on: Reviews & reputation, Trust and credibility, SaaS and digital products",
      "Research topics and structure articles clearly",
      "Create evergreen content with long-term value",
      "Balance SEO requirements with readability and clarity"
    ],
    requirements: [
      "Proven experience in SEO writing",
      "Strong research and structuring skills",
      "Clear, professional English writing style",
      "Understanding of how B2B readers consume content"
    ],
    niceToHave: [
      "Experience writing for SaaS or tech products",
      "Familiarity with search intent and content clusters"
    ]
  },
  {
    id: "frontend-fullstack-developer",
    title: "Frontend / Fullstack Developer (Contract)",
    type: "Contract",
    location: "Remote",
    category: "engineering",
    workload: "Task-based or hourly",
    about: "Proofio is a lean SaaS product built with a strong focus on structure, clarity, and maintainability. We collaborate with developers on clearly scoped tasks rather than open-ended product ownership.",
    description: "Implement small to medium-sized frontend or fullstack tasks. Fix bugs and improve UI/UX details.",
    whatYouWillDo: [
      "Implement small to medium-sized frontend or fullstack tasks",
      "Fix bugs and improve UI/UX details",
      "Work on clearly defined technical requirements",
      "Deliver clean, maintainable code"
    ],
    requirements: [
      "Solid experience with modern web technologies",
      "Ability to work independently on well-defined tasks",
      "Clean and readable code practices",
      "Clear communication and reliability"
    ],
    niceToHave: [
      "Experience with SaaS products",
      "Familiarity with APIs and data-driven interfaces"
    ]
  },
  {
    id: "technical-writer",
    title: "Technical Writer / Documentation Specialist (Freelance)",
    type: "Freelance",
    location: "Remote",
    category: "product",
    workload: "Project-based or ongoing",
    about: "As Proofio grows, clear documentation and guides become essential. We are looking for someone who can translate technical concepts into understandable documentation.",
    description: "Write and maintain product documentation. Create user guides and how-to articles.",
    whatYouWillDo: [
      "Write and maintain product documentation",
      "Create user guides and how-to articles",
      "Help structure documentation logically",
      "Collaborate with the product team to understand features"
    ],
    requirements: [
      "Strong written English",
      "Experience with technical or product documentation",
      "Ability to explain complex topics clearly and simply",
      "Structured, detail-oriented working style"
    ],
    niceToHave: [
      "Experience with SaaS or API documentation",
      "Background in tech, engineering, or product writing"
    ]
  }
];
