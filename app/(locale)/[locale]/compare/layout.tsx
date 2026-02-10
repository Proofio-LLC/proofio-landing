import HreflangTags from '@/app/components/HreflangTags';

export const metadata = {
  title: 'Proofio Comparisons | Compare Review Management Tools',
  description:
    'Compare Proofio with other review management solutions. See feature comparisons, pricing, and discover why teams choose Proofio.',
  robots: {
    index: true,
    follow: true,
  },
};

export default async function CompareLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const pathname = '/compare';

  return (
    <>
      <HreflangTags pathname={pathname} />
      {children}
    </>
  );
}
