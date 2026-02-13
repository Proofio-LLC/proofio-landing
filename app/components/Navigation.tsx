"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowLeft, ChevronDown, SmilePlus, Eye, Target, Sparkles, Link as LinkIcon, Bell, BarChart3, Users } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { features } from '@/lib/data/features';
import { comparisons } from '@/lib/data/comparisons';
import { integrations } from '@/lib/data/integrations';
import { useLocaleContext } from './LocaleProvider';

interface NavigationProps {
  locale?: string;
  messages?: any;
}

export default function Navigation({ locale, messages }: NavigationProps) {
  const localeContext = useLocaleContext();
  const activeLocale = locale || localeContext.locale;
  const activeMessages = messages || localeContext.messages;
  const t = activeMessages?.nav || {};
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [mobileFeatureDropdownOpen, setMobileFeatureDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // List of non-localized sub-pages (English only)
  const nonLocalizedPaths = ['/about', '/blog', '/careers', '/changelog', '/cookies-settings', '/help', '/imprint', '/partners', '/pricing', '/privacy-policy', '/status', '/terms-of-service'];
  
  // Check if we're on a sub-page (non-localized)
  const isSubPage = pathname ? nonLocalizedPaths.some(path => 
    pathname === path || pathname.startsWith(`${path}/`)
  ) : false;
  
  const isBlogPage = pathname?.startsWith("/blog");
  const isBlogPost = pathname?.startsWith("/blog/") && pathname !== "/blog";

  // Determine back button href
  const backHref = isBlogPost ? "/blog" : "/";

  // Determine the locale prefix for URLs
  const localePrefix = activeLocale && activeLocale !== 'en' ? `/${activeLocale}` : '';

  const navItems = [
    { label: t.integration || "Integration", href: isSubPage ? "/#integration" : "#integration" },
    { label: t.useCases || "Use Cases", href: isSubPage ? "/#use-cases" : "#use-cases" },
    { label: t.pricing || "Pricing", href: isSubPage ? "/#pricing" : "#pricing" },
    { label: t.faq || "FAQ", href: isSubPage ? "/#faq" : "#faq" },
    { label: t.blog || "Blog", href: "/blog" },
  ];

  // Icon map for features
  const iconMap: { [key: string]: any } = {
    'SmilePlus': SmilePlus,
    'Eye': Eye,
    'Target': Target,
    'Sparkles': Sparkles,
    'Link': LinkIcon,
    'Bell': Bell,
    'BarChart3': BarChart3,
    'Users': Users,
  };

  // Features dropdown items
  const featuresDropdownItems = features.map((feature) => ({
    label: feature.name,
    iconComponent: feature.iconComponent || 'Sparkles',
    href: `${localePrefix}/features/${feature.slug}`,
  }));

  // Comparisons dropdown items
  const comparisonsDropdownItems = comparisons.map((competitor) => ({
    label: `Proofio vs ${competitor.name}`,
    href: `${localePrefix}/compare/proofio-vs-${competitor.slug}`,
  }));

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-2"
    >
      <motion.div
        animate={{
          width: isScrolled ? "90%" : "95%",
          maxWidth: isSubPage ? (isBlogPost ? "1000px" : "1280px") : (isScrolled ? "1200px" : "1280px"),
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative bg-base-100 rounded-[2rem] shadow-lg border border-base-300"
      >
        <div className={`flex items-center ${isSubPage ? 'justify-center' : 'justify-between'} px-6 lg:px-12 h-16 lg:h-20 ${isScrolled ? 'lg:px-8' : ''}`}>
          {/* Back Button (only on blog/help pages) */}
          {isSubPage && (
            <Link
              href={backHref}
              className="absolute left-6 lg:left-10 flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back</span>
            </Link>
          )}

          {/* Logo - centered on sub pages */}
          <Link href="/" className={`flex items-center group ${isSubPage ? 'mx-auto' : ''}`}>
            <motion.div
              animate={{
                height: isScrolled ? 32 : 40,
              }}
              transition={{ duration: 0.3 }}
              className="relative h-10 w-auto"
            >
              <Image
                src="/logo.svg"
                alt="Proofio"
                width={150}
                height={40}
                className="h-full w-auto object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation Items (only on landing page) */}
          {!isSubPage && (
            <div className={`hidden lg:flex items-center transition-all ${isScrolled ? 'gap-0.5' : 'gap-1'}`}>
              {/* Features Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setFeaturesDropdownOpen(true)}
                onMouseLeave={() => setFeaturesDropdownOpen(false)}
              >
                <button
                  className={`py-2 text-sm font-medium text-base-content/70 hover:text-primary transition-colors rounded-xl hover:bg-base-200/50 flex items-center h-9 ${isScrolled ? 'px-3' : 'px-4'}`}
                  onClick={() => setFeaturesDropdownOpen(!featuresDropdownOpen)}
                >
                  {t.features || "Features"}
                  <ChevronDown className={`w-3 h-3 transition-transform flex-shrink-0 ml-2 ${featuresDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Features Dropdown Menu */}
                {featuresDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[900px] bg-base-100 rounded-xl shadow-xl border border-base-300 p-4 z-50"
                  >
                    <div className="flex gap-6">
                      {/* LEFT: Features */}
                      <div className="flex-1">
                        <h3 className="text-xs font-semibold text-base-content/60 uppercase mb-3">Features</h3>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          {featuresDropdownItems.map((item) => {
                            const IconComponent = iconMap[item.iconComponent];
                            return (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-center gap-3 p-3 text-sm text-base-content/80 hover:text-primary hover:bg-base-200/50 rounded-lg transition-colors"
                              >
                                {IconComponent && <IconComponent className="w-5 h-5 flex-shrink-0" />}
                                <span className="line-clamp-2">{item.label}</span>
                              </Link>
                            );
                          })}
                        </div>

                        {/* All Features Link */}
                        <button
                          onClick={() => {
                            setFeaturesDropdownOpen(false);
                            const element = document.getElementById('features');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            } else {
                              window.location.href = '/#features';
                            }
                          }}
                          className="w-full flex items-center justify-between p-3 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors"
                        >
                          <span>All Features</span>
                          <span className="ml-2">→</span>
                        </button>
                      </div>

                      {/* DIVIDER */}
                      <div className="border-l border-base-300" />

                      {/* RIGHT: Integrations */}
                      <div className="flex-1">
                        <h3 className="text-xs font-semibold text-base-content/60 uppercase mb-3">Sources</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {integrations.slice(0, 6).map((integration) => (
                            <Link
                              key={integration.slug}
                              href={`${localePrefix}/integrations/${integration.slug}`}
                              className="flex items-center gap-3 p-3 text-sm text-base-content/80 hover:text-primary hover:bg-base-200/50 rounded-lg transition-colors"
                            >
                              {integration.icon && (
                                <img
                                  src={integration.icon}
                                  alt={integration.name}
                                  className="w-5 h-5 flex-shrink-0 object-contain"
                                />
                              )}
                              <span className="line-clamp-2">{integration.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Other Navigation Items */}
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`py-2 text-sm font-medium text-base-content/70 hover:text-primary transition-colors rounded-xl hover:bg-base-200/50 flex items-center h-9 -ml-2 ${isScrolled ? 'px-3' : 'px-4'}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* Desktop Actions */}
          <div className={`hidden lg:flex items-center transition-all ${isScrolled ? 'gap-4' : 'gap-6'} ${isSubPage ? 'absolute right-6 lg:right-10' : ''}`}>
            <a href="https://dash.proofio.app/login" className="btn btn-ghost rounded-xl">{t.login || "Sign In"}</a>
            <a href="https://dash.proofio.app/register" className="btn rounded-xl shadow-md hover:shadow-lg transition-all px-6 bg-primary text-white hover:bg-primary/90">
              Get Started
            </a>
            {!isSubPage && <LanguageSwitcher />}
          </div>

          {/* Mobile Menu Button and Language Switcher */}
          {!isSubPage && (
            <div className="flex lg:hidden items-center gap-2">
              <LanguageSwitcher />
              <button
                className="btn btn-ghost btn-square"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu (only on landing page) */}
        {!isSubPage && mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 bg-base-100 z-40 overflow-y-auto"
          >
            {/* Header with Logo and Close Button */}
            <div className="sticky top-0 bg-base-100 px-4 py-4 flex items-center justify-between border-b border-base-300">
              <Link href="/" className="flex items-center">
                <div className="relative h-8 w-auto">
                  <Image
                    src="/logo.svg"
                    alt="Proofio"
                    width={120}
                    height={32}
                    className="h-full w-auto object-contain"
                  />
                </div>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-ghost btn-circle"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-4 py-8 space-y-6 pb-8">
              {/* Features Section */}
              <div>
                <button
                  onClick={() => setMobileFeatureDropdownOpen(!mobileFeatureDropdownOpen)}
                  className="flex items-center justify-between w-full p-3 rounded-lg text-base-content/80 text-base font-medium hover:bg-base-200/50 transition-colors"
                >
                  <span>{t.features || "Features"}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform flex-shrink-0 ${mobileFeatureDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileFeatureDropdownOpen && (
                  <div className="space-y-2 ml-2">
                    {featuresDropdownItems.map((item) => {
                      const IconComponent = iconMap[item.iconComponent];
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200/50 transition-colors"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileFeatureDropdownOpen(false);
                          }}
                        >
                          {IconComponent && <IconComponent className="w-5 h-5 text-primary flex-shrink-0" />}
                          <span className="text-base-content/80">{item.label}</span>
                        </Link>
                      );
                    })}
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileFeatureDropdownOpen(false);
                        const element = document.getElementById('features');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          window.location.href = '/#features';
                        }
                      }}
                      className="flex items-center justify-between w-full p-3 rounded-lg text-primary font-bold hover:bg-primary/10 transition-colors mt-2"
                    >
                      <span>All Features</span>
                      <span>→</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Other Navigation Items */}
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center p-3 rounded-lg text-base-content/80 text-base font-medium hover:bg-base-200/50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-base-300" />

              {/* Auth Buttons */}
              <div className="space-y-2 pt-4">
                <a href="https://dash.proofio.app/login" className="flex items-center justify-center w-full btn btn-ghost rounded-xl">
                  Sign In
                </a>
                <a href="https://dash.proofio.app/register" className="flex items-center justify-center w-full btn rounded-xl bg-primary text-white hover:bg-primary/90 transition-all">
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  );

}


