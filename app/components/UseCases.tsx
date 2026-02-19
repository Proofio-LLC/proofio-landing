'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Briefcase, Rocket, Sparkles, UserRoundCheck, Wrench } from 'lucide-react';
import Image from 'next/image';
import type { ComponentType } from 'react';
import { Locale } from '@/lib/i18n';
import { getUseCaseCards, UseCaseSlug } from '@/lib/data/use-cases';
import { getCaseStudyCards } from '@/lib/data/case-studies';

type UseCasesProps = {
  locale?: string;
  messages?: any;
};

const iconByCase: Record<UseCaseSlug, ComponentType<{ className?: string }>> = {
  agency: Briefcase,
  coaches: UserRoundCheck,
  services: Wrench,
  'saas-startups': Rocket,
};

export default function UseCases({ locale = 'en', messages }: UseCasesProps) {
  const t = messages?.useCases || {};
  const normalizedLocale = (locale || 'en') as Locale;
  const useCaseItems = getUseCaseCards(normalizedLocale);
  const localizedCaseStudies = getCaseStudyCards(normalizedLocale);
  const caseStudyItems = [
    { slug: 'n26', logo: '/n26.svg', logoAlt: 'N26', ...localizedCaseStudies.n26 },
    { slug: 'etsy', logo: '/etsy.svg', logoAlt: 'Etsy', ...localizedCaseStudies.etsy },
    { slug: 'uber', logo: '/uber.svg', logoAlt: 'Uber', ...localizedCaseStudies.uber },
  ];
  const liveCaseStudiesLabel: Record<Locale, string> = {
    en: 'Live Case Studies',
    de: 'Live Case Studies',
    fr: 'Études de cas en direct',
    es: 'Casos de estudio en vivo',
    pt: 'Estudos de caso ao vivo',
    it: 'Case study live',
  };

  return (
    <section id="use-cases" className="py-32 bg-base-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-40">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-widest">USE CASES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-base-content tracking-tight">
            {t.title || 'Built for teams that need more than just reviews'}
          </h2>
          <p className="text-xl text-base-content/60 max-w-2xl mx-auto leading-relaxed font-medium">
            {t.description || 'See how Proofio helps different teams turn feedback into action.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCaseItems.map((useCase, index) => {
            const Icon = iconByCase[useCase.id];

            return (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  href={`/${normalizedLocale}/use-cases/${useCase.id}`}
                  className="relative block h-full bg-base-200/50 hover:bg-base-200 transition-all duration-500 rounded-[2.5rem] p-10 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20"
                >
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-base-content group-hover:text-primary transition-colors duration-300">
                      {useCase.title}
                    </h3>

                    <div className="space-y-4 flex-grow">
                      <p className="text-lg text-base-content/70 leading-relaxed font-medium">
                        {useCase.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-8 border-t border-base-300/50 flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      {t.readCaseStudy || 'Read case study'}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}

          <div className="md:col-span-2 mt-2">
            <div className="mb-5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">{liveCaseStudiesLabel[normalizedLocale]}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudyItems.map((study, idx) => (
                <motion.div
                  key={study.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (useCaseItems.length * 0.1) + (idx * 0.08) }}
                  className="group"
                >
                  <Link
                    href={`/${normalizedLocale}/case-studies/${study.slug}`}
                    className="relative block h-full bg-base-200/50 hover:bg-base-200 transition-all duration-500 rounded-[2rem] p-7 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20"
                  >
                    <Image
                      src="/favicon.png"
                      alt=""
                      width={220}
                      height={220}
                      aria-hidden="true"
                      className="absolute -top-10 -right-10 w-44 h-44 opacity-5 group-hover:opacity-15 rotate-[-18deg] transition-opacity pointer-events-none grayscale"
                    />
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-6 flex items-center gap-4">
                        <div className={`w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${study.slug === 'uber' ? 'p-2' : ''}`}>
                          <Image src={study.logo} alt={study.logoAlt} width={64} height={30} className="h-8 w-auto" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-xl font-bold text-base-content group-hover:text-primary transition-colors duration-300">
                            {study.title}
                          </h3>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary/70">
                            {study.industry}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3 flex-grow">
                        <p className="text-sm text-base-content/70 leading-relaxed font-medium">
                          {study.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-6 border-t border-base-300/50 flex items-center gap-2 text-primary font-bold text-[11px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        {t.readCaseStudy || 'Read case study'}
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
