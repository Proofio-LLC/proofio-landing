'use client';

export default function SocialProof() {
  const companies = [
    { name: 'EL REY', logo: 'https://www.elrey.ai/logo.svg' },
    { name: 'Spendory', logo: 'https://www.spendory.de/spendory.svg' },
    { name: 'FellAkte', logo: 'https://www.fellakte.de/logo.png' },
    { name: 'flowna', logo: 'https://www.getflowna.com/flownalogo.png' },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-semibold text-base-content/60 uppercase tracking-wider mb-8">
          Trusted by many brands
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center h-12 opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-8 w-auto brightness-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
