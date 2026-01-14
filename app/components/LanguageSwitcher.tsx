"use client";

import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Locale, locales, getLocalizedPath } from "@/lib/i18n";
import Link from "next/link";
import { GB, DE, FR, ES, PT } from "country-flag-icons/react/3x2";
import { motion } from "framer-motion";

const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  pt: "Português",
};

const localeFlags: Record<Locale, typeof GB> = {
  en: GB,
  de: DE,
  fr: FR,
  es: ES,
  pt: PT,
};

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get current locale from pathname
  const currentLocale = pathname?.split('/')[1] as Locale;
  const validLocale = locales.includes(currentLocale) ? currentLocale : 'en';

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const CurrentFlag = localeFlags[validLocale];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 py-2 rounded-xl text-sm font-medium text-base-content/70 hover:text-primary hover:bg-base-200/50 transition-all"
        aria-label="Change language"
      >
        <CurrentFlag className="w-5 h-4 rounded-md flex-shrink-0 overflow-hidden" />
        <ChevronDown className={`w-4 h-4 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 w-44 bg-base-100 rounded-xl shadow-lg border border-base-300 py-2 z-50"
        >
          {locales.map((locale) => {
            const localizedPath = getLocalizedPath(pathname || '/', locale);
            const isActive = locale === validLocale;
            const Flag = localeFlags[locale];

            return (
              <Link
                key={locale}
                href={localizedPath}
                className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-base-content/70 hover:text-primary hover:bg-base-200/50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Flag className="w-5 h-4 rounded-md flex-shrink-0 overflow-hidden" />
                <span className="flex-1">{localeNames[locale]}</span>
                {isActive && (
                  <span className="text-primary text-lg">✓</span>
                )}
              </Link>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
