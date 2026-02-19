import Image from "next/image";
import Link from "next/link";
import Navigation from "@/app/components/Navigation";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";
import { getMessages } from "@/lib/get-messages";
import { getCaseStudyDetail } from "@/lib/data/case-studies";

export default async function EtsyCaseStudyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages(locale as any);
  const localePrefix = locale && locale !== "en" ? `/${locale}` : "/en";
  const content = getCaseStudyDetail((locale as any) || "en", "etsy");

  return (
    <main className="min-h-screen">
      <Navigation locale={locale} messages={messages} />

      <section className="pt-32 pb-20 bg-gradient-to-b from-base-100 to-base-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={localePrefix} className="text-sm font-semibold text-primary hover:underline">
            {content.backToHomepage}
          </Link>

          <section className="mt-6 rounded-[2rem] border border-base-300 bg-base-100 p-8 md:p-12 shadow-lg">
            <div className="mb-6 flex items-center justify-between gap-3">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">{content.badge}</p>
              <Image src="/etsy.svg" alt="Etsy" width={84} height={28} className="h-7 w-auto" />
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-[1.05] text-base-content max-w-4xl">
              {content.title}
            </h1>

            <p className="mt-5 text-lg text-base-content/75 max-w-3xl leading-relaxed">
              {content.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {content.stats.map((stat) => (
                <StatPill key={`${stat.value}-${stat.label}`} value={stat.value} label={stat.label} />
              ))}
            </div>
          </section>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <section className="lg:col-span-5 rounded-3xl border border-base-300 bg-base-100 p-7">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-primary mb-4">{content.keyFindingsLabel}</p>
              <h2 className="text-2xl font-black text-base-content mb-4">{content.keyFindingsTitle}</h2>
              <ul className="space-y-3 text-sm text-base-content/80 leading-relaxed">
                {content.keyFindingsItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="lg:col-span-7 rounded-3xl border border-base-300 bg-base-100 p-7">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-primary mb-4">{content.rootCausesLabel}</p>
              <h2 className="text-2xl font-black text-base-content mb-4">{content.rootCausesTitle}</h2>
              <div className="space-y-4">
                {content.rootCauses.map((cause) => (
                  <div key={cause.title} className="border-l-2 border-primary/40 pl-4">
                    <p className="font-semibold text-base-content">{cause.title}</p>
                    <p className="text-sm text-base-content/75 mt-1">{cause.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="mt-8 rounded-3xl border border-base-300 bg-base-100 p-7">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-primary mb-4">{content.actionLabel}</p>
            <h2 className="text-2xl font-black text-base-content mb-5">{content.actionTitle}</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {content.actions.map((action) => (
                <div key={action.title}>
                  <p className="text-sm font-bold text-base-content">{action.title}</p>
                  <p className="text-sm text-base-content/75 mt-1">{action.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6 rounded-2xl border border-primary/20 bg-base-100 p-6 md:p-8">
            <blockquote className="relative border-l-0 pl-8 md:pl-12 my-2 italic">
              <div className="absolute left-0 top-0 text-6xl text-primary/20 font-serif leading-none select-none" aria-hidden="true">
                &ldquo;
              </div>
              <p className="text-xl md:text-2xl text-base-content/80 leading-relaxed font-medium">
                {content.quote}
              </p>
            </blockquote>
          </section>

          <p className="mt-6 text-[11px] text-base-content/45">
            {content.disclaimer}
          </p>
        </div>
      </section>

      <CTA locale={locale} messages={messages} />
      <Footer locale={locale} messages={messages} />
    </main>
  );
}

function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-full border border-base-300 bg-base-200 px-4 py-2.5">
      <span className="text-base font-black text-base-content">{value}</span>
      <span className="ml-2 text-xs uppercase tracking-wider text-base-content/60">{label}</span>
    </div>
  );
}
