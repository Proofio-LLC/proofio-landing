import { Locale, locales, defaultLocale, getPathWithoutLocale } from "@/lib/i18n";

interface HreflangTagsProps {
  pathname: string;
}

export default function HreflangTags({ pathname }: HreflangTagsProps) {
  const baseUrl = 'https://proofio.app';
  
  // Remove locale from pathname if present
  const pathWithoutLocale = getPathWithoutLocale(pathname) || '/';
  
  return (
    <>
      {locales.map((locale) => {
        const url = locale === defaultLocale
          ? `${baseUrl}${pathWithoutLocale}`
          : `${baseUrl}/${locale}${pathWithoutLocale}`;
        
        return (
          <link
            key={locale}
            rel="alternate"
            hrefLang={locale}
            href={url}
          />
        );
      })}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${baseUrl}${pathWithoutLocale}`}
      />
    </>
  );
}
