import Script from "next/script";

/**
 * Structured Data (JSON-LD) for SEO
 * Adds Organization and SoftwareApplication schema to improve search visibility
 */
export function StructuredData() {
  return (
    <>
      {/* Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Proofio",
            "url": "https://proofio.app",
            "logo": "https://proofio.app/logo.svg",
            "description": "Proofio is an AI-powered review intelligence platform that automatically collects, normalizes, and analyzes customer reviews from App Store, Google Play, Trustpilot and more.",
            "sameAs": [
              "https://x.com/proofioapp",
              "https://www.linkedin.com/company/proofio-app",
              "https://instagram.com/proofio.app"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Support",
              "url": "https://proofio.app/help"
            }
          })
        }}
      />
      
      {/* SoftwareApplication Schema */}
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Proofio",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "priceValidUntil": "2026-12-31"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "150"
            },
            "description": "Proofio is an AI-powered review intelligence platform that automatically collects, normalizes, and analyzes customer reviews from App Store, Google Play, Trustpilot and more.",
            "url": "https://proofio.app",
            "screenshot": "https://proofio.app/opengraph.png"
          })
        }}
      />

      {/* WebSite Schema with SearchAction */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Proofio",
            "url": "https://proofio.app",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://proofio.app/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </>
  );
}
