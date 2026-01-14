"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowLeft } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavigationProps {
  locale?: string;
  messages?: any;
}

export default function Navigation({ locale, messages }: NavigationProps) {
  const t = messages?.nav || {};
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Check if we're on a blog or help page
  const isBlogPage = pathname?.startsWith("/blog");
  const isHelpPage = pathname === "/help";
  const isSubPage = isBlogPage || isHelpPage;
  const isBlogPost = pathname?.startsWith("/blog/") && pathname !== "/blog";

  // Determine back button href
  const backHref = isBlogPost ? "/blog" : "/";

  const navItems = [
    { label: t.features || "Features", href: isSubPage ? "/#features" : "#features" },
    { label: t.integration || "Integration", href: isSubPage ? "/#integration" : "#integration" },
    { label: t.useCases || "Use Cases", href: isSubPage ? "/#use-cases" : "#use-cases" },
    { label: t.pricing || "Pricing", href: isSubPage ? "/#pricing" : "#pricing" },
    { label: t.faq || "FAQ", href: isSubPage ? "/#faq" : "#faq" },
    { label: t.blog || "Blog", href: "/blog" },
  ];

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
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`py-2 text-sm font-medium text-base-content/70 hover:text-primary transition-colors rounded-xl hover:bg-base-200/50 ${isScrolled ? 'px-3' : 'px-4'}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* Desktop Actions */}
          <div className={`hidden lg:flex items-center transition-all ${isScrolled ? 'gap-4' : 'gap-6'} ${isSubPage ? 'absolute right-6 lg:right-10' : ''}`}>
            <a href="https://dash.proofio.app" className="btn btn-ghost rounded-xl">{t.login || "Sign In"}</a>
            <a href="https://dash.proofio.app" className="btn rounded-xl shadow-md hover:shadow-lg transition-all px-6 bg-primary text-white hover:bg-primary/90">
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-base-300"
          >
            <ul className="menu p-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-base-content/80 hover:text-primary transition-colors rounded-xl py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-base-300 mt-2">
                <a href="https://dash.proofio.app" className="btn btn-ghost w-full justify-start rounded-xl">
                  Sign In
                </a>
              </li>
              <li>
                <a href="https://dash.proofio.app" className="btn w-full rounded-xl shadow-md hover:shadow-lg transition-all px-6 bg-primary text-white hover:bg-primary/90">
                  Get Started
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  );

}



