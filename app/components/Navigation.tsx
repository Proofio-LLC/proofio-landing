"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowLeft } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Check if we're on a blog page
  const isBlogPage = pathname?.startsWith("/blog");
  const isBlogPost = pathname?.startsWith("/blog/") && pathname !== "/blog";

  // Determine back button href
  const backHref = isBlogPost ? "/blog" : "/";

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Integration", href: "#integration" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Blog", href: "#blog" },
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
          maxWidth: isScrolled ? "1200px" : "1400px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-base-100/95 backdrop-blur-xl rounded-2xl shadow-lg border border-base-300/50"
      >
        <div className={`flex items-center ${isBlogPage ? 'justify-center' : 'justify-between'} px-4 lg:px-6 h-16 lg:h-20 ${isScrolled ? 'lg:px-4' : ''}`}>
          {/* Back Button (only on blog pages) */}
          {isBlogPage && (
            <Link
              href={backHref}
              className="absolute left-4 lg:left-8 flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back</span>
            </Link>
          )}

          {/* Logo - centered on blog pages */}
          <Link href="/" className={`flex items-center group ${isBlogPage ? 'mx-auto' : ''}`}>
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
          {!isBlogPage && (
            <div className={`hidden lg:flex items-center transition-all ${isScrolled ? 'gap-0.5' : 'gap-1'}`}>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`py-2 text-sm font-medium text-base-content/70 hover:text-primary transition-colors rounded-lg hover:bg-base-200/50 ${isScrolled ? 'px-3' : 'px-4'}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* Desktop Actions */}
          <div className={`hidden lg:flex items-center transition-all ${isScrolled ? 'gap-4' : 'gap-6'} ${isBlogPage ? 'absolute right-4 lg:right-8' : ''}`}>
            <a href="https://dash.proofio.app" className="btn btn-ghost rounded-lg">Sign In</a>
            <a href="https://dash.proofio.app" className="btn rounded-lg shadow-md hover:shadow-lg transition-all px-6 bg-primary text-white hover:bg-primary/90">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          {!isBlogPage && (
            <div className="flex lg:hidden items-center gap-2">
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
        {!isBlogPage && mobileMenuOpen && (
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
                    className="text-base-content/80 hover:text-primary transition-colors rounded-lg py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-base-300 mt-2">
                <a href="https://dash.proofio.app" className="btn btn-ghost w-full justify-start rounded-lg">
                  Sign In
                </a>
              </li>
              <li>
                <a href="https://dash.proofio.app" className="btn w-full rounded-lg shadow-md hover:shadow-lg transition-all px-6 bg-primary text-white hover:bg-primary/90">
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



