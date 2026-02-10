import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import UseCasePageTemplate from '@/app/components/UseCasePageTemplate';
import { getMessages } from '@/lib/get-messages';
import { Locale, isValidLocale, locales } from '@/lib/i18n';
import { getUseCasePage, useCaseSlugs } from '@/lib/data/use-cases';

const baseUrl = 'https://proofio.app';

export async function generateStaticParams() {
  const params: Array<{ locale: Locale; slug: string }> = [];

  for (const locale of locales) {
    for (const slug of useCaseSlugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const content = getUseCasePage(locale, slug);

  if (!content) {
    return {};
  }

  const canonical = `${baseUrl}/${locale}/use-cases/${slug}`;

  return {
    title: `${content.title} | Proofio`,
    description: content.subtitle,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${content.title} | Proofio`,
      description: content.subtitle,
      type: 'article',
      url: canonical,
      images: [
        {
          url: '/opengraph.png',
          width: 1200,
          height: 630,
          alt: content.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${content.title} | Proofio`,
      description: content.subtitle,
      images: ['/opengraph.png'],
    },
  };
}

export default async function UseCaseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const content = getUseCasePage(locale, slug);

  if (!content) {
    notFound();
  }

  const messages = await getMessages(locale);

  return <UseCasePageTemplate locale={locale} messages={messages} content={content} />;
}
