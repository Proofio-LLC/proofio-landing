import Image from "next/image";
import Link from "next/link";
import Navigation from "@/app/components/Navigation";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";
import { getMessages } from "@/lib/get-messages";
import { getCaseStudyCards, type CaseStudySlug } from "@/lib/data/case-studies";
import type { Locale } from "@/lib/i18n";

export default async function CaseStudiesIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const activeLocale = (locale as Locale) || "en";
  const messages = await getMessages(activeLocale as any);
  const cards = getCaseStudyCards(activeLocale);
  const localePrefix = activeLocale !== "en" ? `/${activeLocale}` : "/en";

  const copy: Record<Locale, { title: string; subtitle: string; back: string }> = {
    en: {
      title: "Case Studies",
      subtitle: "Real app review datasets turned into clear business actions.",
      back: "Back to homepage",
    },
    de: {
      title: "Case Studies",
      subtitle: "Reale App-Review-Datensätze in klare Business-Maßnahmen übersetzt.",
      back: "Zur Startseite",
    },
    fr: {
      title: "Études de cas",
      subtitle: "Des jeux de données réels transformés en actions business concrètes.",
      back: "Retour à l'accueil",
    },
    es: {
      title: "Casos de estudio",
      subtitle: "Datos reales de reseñas de apps convertidos en acciones concretas.",
      back: "Volver al inicio",
    },
    pt: {
      title: "Estudos de caso",
      subtitle: "Dados reais de reviews de apps transformados em ações claras.",
      back: "Voltar para a página inicial",
    },
    it: {
      title: "Case study",
      subtitle: "Dataset reali di recensioni app trasformati in azioni concrete.",
      back: "Torna alla homepage",
    },
  };

  const items: Array<{ slug: CaseStudySlug; logo: string; logoAlt: string }> = [
    { slug: "n26", logo: "/n26.svg", logoAlt: "N26" },
    { slug: "etsy", logo: "/etsy.svg", logoAlt: "Etsy" },
    { slug: "uber", logo: "/uber.svg", logoAlt: "Uber" },
  ];

  return (
    <main className="min-h-screen">
      <Navigation locale={activeLocale} messages={messages} />

      <section className="pt-32 pb-20 bg-gradient-to-b from-base-100 to-base-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={localePrefix} className="text-sm font-semibold text-primary hover:underline">
            {copy[activeLocale].back}
          </Link>

          <div className="mt-6 mb-10">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-base-content">{copy[activeLocale].title}</h1>
            <p className="mt-3 text-lg text-base-content/70">{copy[activeLocale].subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item) => {
              const card = cards[item.slug];
              return (
                <Link
                  key={item.slug}
                  href={`/${activeLocale}/case-studies/${item.slug}`}
                  className="group relative block rounded-[2rem] border border-base-300 bg-base-100 p-7 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 overflow-hidden"
                >
                  <Image
                    src="/favicon.png"
                    alt=""
                    width={220}
                    height={220}
                    aria-hidden="true"
                    className="absolute -top-10 -right-10 w-44 h-44 opacity-5 group-hover:opacity-15 rotate-[-18deg] transition-opacity pointer-events-none [filter:brightness(0)_saturate(100%)_invert(52%)_sepia(74%)_saturate(488%)_hue-rotate(118deg)_brightness(95%)_contrast(98%)]"
                  />
                  <div className="relative z-10">
                    <div className={`w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 ${item.slug === "uber" ? "p-2" : ""}`}>
                      <Image src={item.logo} alt={item.logoAlt} width={64} height={30} className="h-8 w-auto" />
                    </div>
                    <h2 className="text-2xl font-black text-base-content">{card.title}</h2>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary/70">{card.industry}</p>
                    <p className="mt-4 text-sm text-base-content/70 leading-relaxed">{card.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTA locale={activeLocale} messages={messages} />
      <Footer locale={activeLocale} messages={messages} />
    </main>
  );
}
