"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "de">("en");
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Integration", href: "#integration" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#blog" },
    { label: "FAQ", href: "#faq" },
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
        <div className={`flex items-center justify-between px-4 lg:px-6 h-16 lg:h-20 ${isScrolled ? 'lg:px-4' : ''}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center group">
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

          {/* Desktop Navigation Items */}
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

          {/* Desktop Actions */}
          <div className={`hidden lg:flex items-center transition-all ${isScrolled ? 'gap-2' : 'gap-3'}`}>
            {!isScrolled && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-sm gap-2 rounded-lg"
                >
                  <Globe className="w-4 h-4" />
                  <span className="uppercase text-xs">{language}</span>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-xl z-[1] w-32 p-2 shadow-lg border border-base-300 mt-2"
                >
                  <li>
                    <button
                      onClick={() => setLanguage("en")}
                      className={language === "en" ? "active" : ""}
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setLanguage("de")}
                      className={language === "de" ? "active" : ""}
                    >
                      Deutsch
                    </button>
                  </li>
                </ul>
              </div>
            )}
            <button className="btn btn-ghost rounded-lg">Sign In</button>
            <button className="btn rounded-lg shadow-md hover:shadow-lg transition-all px-6 bg-primary text-white hover:bg-primary/90">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            {!isScrolled && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-sm gap-1 rounded-lg"
                >
                  <Globe className="w-4 h-4" />
                  <span className="uppercase text-xs">{language}</span>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-xl z-[1] w-32 p-2 shadow-lg border border-base-300 mt-2"
                >
                  <li>
                    <button
                      onClick={() => setLanguage("en")}
                      className={language === "en" ? "active" : ""}
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setLanguage("de")}
                      className={language === "de" ? "active" : ""}
                    >
                      Deutsch
                    </button>
                  </li>
                </ul>
              </div>
            )}
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
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
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
                <button className="btn btn-ghost w-full justify-start rounded-lg">
                  Sign In
                </button>
              </li>
              <li>
                <button className="btn w-full rounded-lg shadow-md hover:shadow-lg transition-all px-6 bg-primary text-white hover:bg-primary/90">
                  Get Started
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  );
}



