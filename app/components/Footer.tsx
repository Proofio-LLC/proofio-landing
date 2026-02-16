"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { usePathname } from "next/navigation";
import { comparisons } from "@/lib/data/comparisons";
import { useLocaleContext } from "./LocaleProvider";

interface FooterProps {
  locale?: string;
  messages?: any;
}

export default function Footer({ locale, messages }: FooterProps) {
  const localeContext = useLocaleContext();
  const activeLocale = locale || localeContext.locale;
  const activeMessages = messages || localeContext.messages;
  const t = activeMessages?.footer || {};
  const pathname = usePathname();
  const localePrefix = activeLocale && activeLocale !== 'en' ? `/${activeLocale}` : '';

  // Check if we're on a sub-page (non-localized paths or localized versions of them)
  const nonLocalizedPaths = ['/about', '/blog', '/careers', '/changelog', '/cookies-settings', '/developers', '/help', '/imprint', '/partners', '/pricing', '/privacy-policy', '/refund-policy', '/status', '/terms-of-service', '/ios-app'];
  const isSubPage = pathname ? (
    nonLocalizedPaths.some(path => pathname === path || pathname.startsWith(`${path}/`)) ||
    (activeLocale !== 'en' && pathname.startsWith(`/${activeLocale}/`))
  ) : false;

  // Function to get the correct link for anchor tags
  const getAnchorLink = (anchor: string) => {
    return isSubPage ? `${localePrefix || "/"}${anchor}` : anchor;
  };

  return (
    <footer className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="bg-base-100 rounded-[2rem] shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Left Side - Company Info */}
            <div className="space-y-6">
              <div className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="Proofio"
                  width={180}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-base-content/70 max-w-md">
                {t.description || "Proofio empowers teams to transform reviews from multiple platforms into clear and actionable insights, making customer feedback easier to understand and act on."}
              </p>
              <div className="flex gap-4">
                <Link href="https://x.com/proofioapp" className="text-base-content/60 hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="https://instagram.com/proofio.app" className="text-base-content/60 hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="https://www.linkedin.com/company/proofio-app" className="text-base-content/60 hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
              <div className="pt-2">
                <a 
                  href="https://www.saashub.com/proofio?utm_source=badge&utm_campaign=badge&utm_content=proofio&badge_variant=color&badge_kind=approved" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block hover:scale-105 transition-transform"
                >
                  <img 
                    src="https://cdn-b.saashub.com/img/badges/approved-color.png?v=1" 
                    alt="Proofio badge" 
                    className="max-w-[140px] h-auto"
                  />
                </a>
              </div>
            </div>

            {/* Right Side - Navigation Links */}
            <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold text-base-content mb-4">{t.product || "Product"}</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href={getAnchorLink("#features")} className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      {t.features || "Features"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      {t.pricing || "Pricing"}
                    </Link>
                  </li>
                  <li>
                    <Link href={getAnchorLink("#integration")} className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      {t.integrations || "Integrations"}
                    </Link>
                  </li>
                  <li>
                    <Link href={`${localePrefix}/ios-app`} className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      {t.iosApp || "iOS App"}
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-base-content mb-4">{t.resources || "Resources"}</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="https://docs.proofio.app" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      {t.documentation || "Documentation"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/developers" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      {t.developerHub || "Developer Hub"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      {t.blog || "Blog"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/help" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      {t.support || "Support"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/status" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      {t.status || "Status"}
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/changelog" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      {t.changelog || "Changelog"}
                    </Link>
                  </li> */}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-base-content mb-4">{t.company || "Company"}</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/about" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      {t.about || "About"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      {t.careers || "Careers"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/partners" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      {t.partners || "Partners"}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="hidden md:block">
                <h3 className="font-semibold text-base-content mb-4">Compare</h3>
                <ul className="space-y-3">
                  {comparisons.map((competitor) => (
                    <li key={competitor.slug}>
                      <Link
                        href={`${localePrefix}/compare/proofio-vs-${competitor.slug}`}
                        className="text-sm text-base-content/70 hover:text-primary transition-colors"
                      >
                        Proofio vs {competitor.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="pt-8 border-t border-base-300 flex flex-wrap justify-between items-center gap-6">
            <p className="text-sm text-base-content/50">
              {t.copyright || "© 2026 Proofio. All rights reserved."}
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/imprint" className="text-sm text-base-content/60 hover:text-primary transition-colors underline">
                {t.imprint || "Imprint"}
              </Link>
              <Link href="/privacy-policy" className="text-sm text-base-content/60 hover:text-primary transition-colors underline">
                {t.privacyPolicy || "Privacy Policy"}
              </Link>
              <Link href="/terms-of-service" className="text-sm text-base-content/60 hover:text-primary transition-colors underline">
                {t.termsOfService || "Terms of Service"}
              </Link>
              <Link href="/refund-policy" className="text-sm text-base-content/60 hover:text-primary transition-colors underline">
                {t.refundPolicy || "Refund Policy"}
              </Link>
              <Link href="/cookies-settings" className="text-sm text-base-content/60 hover:text-primary transition-colors underline">
                {t.cookiesSettings || "Cookies Settings"}
              </Link>
              <a href="mailto:legal@proofio.app" className="text-sm text-base-content/60 hover:text-primary transition-colors underline">
                {t.legalInquiries || "Legal Inquiries"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
