export const metadata = {
  title: 'App Store Review Monitoring Tool — Proofio',
  description: 'Monitor App Store reviews with Proofio — automated aggregation, AI summaries, and alerting.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'App Store Review Monitoring Tool',
  description: 'Monitor App Store reviews with Proofio — automated aggregation, AI summaries, and alerting.',
};

export default function Page() {
  return (
    <main className="prose mx-auto p-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>App Store Review Monitoring Tool</h1>
      <p>Proofio connects to the App Store, imports reviews, normalizes ratings, and applies AI-driven classification and summaries.</p>
      <h2>Key features</h2>
      <ul>
        <li>Real-time or scheduled syncing</li>
        <li>AI summaries and sentiment</li>
        <li>Integrations with Slack, Zapier, and webhooks</li>
      </ul>
    </main>
  );
}
