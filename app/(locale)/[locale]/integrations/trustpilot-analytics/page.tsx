export const metadata = {
  title: 'Trustpilot Review Analytics — Proofio',
  description: 'Analyze Trustpilot reviews with Proofio — sentiment analysis, trends, and exportable reports.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Trustpilot Review Analytics',
  description: 'Analyze Trustpilot reviews with Proofio — sentiment analysis, trends, and exportable reports.',
};

export default function Page() {
  return (
    <main className="prose mx-auto p-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>Trustpilot Review Analytics</h1>
      <p>Proofio ingests Trustpilot reviews, matches them to products and locations, and surfaces trends with AI-driven summaries.</p>
      <h2>Capabilities</h2>
      <ul>
        <li>Auto-matching and normalization</li>
        <li>Sentiment and topic extraction</li>
        <li>Custom alerting and reporting</li>
      </ul>
    </main>
  );
}
