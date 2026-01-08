"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [consent, setConsent] = useState({
    essential: true,
    analytics: true,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookieConsent");
    if (!savedConsent) {
      setShowBanner(true);
    } else {
      try {
        const parsed = JSON.parse(savedConsent);
        // If it's the old format (string), reset it
        if (typeof parsed !== 'object') throw new Error();
        setConsent(parsed);
      } catch {
        // Fallback for old "accepted"/"rejected" strings
        if (savedConsent === "accepted") {
          setConsent({ essential: true, analytics: true });
        } else {
          setConsent({ essential: true, analytics: false });
        }
      }
    }
  }, []);

  const handleSave = (newConsent: typeof consent) => {
    // Save to localStorage for client-side
    localStorage.setItem("cookieConsent", JSON.stringify(newConsent));
    
    // Also save to a cookie so the server (RootLayout) can read it
    document.cookie = `cookieConsent=${JSON.stringify(newConsent)}; path=/; max-age=${60 * 60 * 24 * 365}`;
    
    setConsent(newConsent);
    setShowBanner(false);
    setShowManage(false);
    // Reload page to apply changes (e.g. stop/start analytics)
    window.location.reload();
  };

  const handleAcceptAll = () => {
    handleSave({ essential: true, analytics: true });
  };

  const handleRejectAll = () => {
    handleSave({ essential: true, analytics: false });
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="bg-base-100 rounded-[2rem] shadow-2xl border border-base-300 p-6 md:p-10">
              {!showManage ? (
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Cookie className="w-6 h-6 text-primary" />
                      </div>
                  </div>
                  <div className="flex-1">
                      <h3 className="text-xl font-bold text-base-content mb-1">
                      We use cookies
                    </h3>
                      <p className="text-sm text-base-content/70 leading-relaxed">
                      We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                      By clicking "Accept All", you consent to our use of cookies.{" "}
                      <Link href="/cookies-settings" className="text-primary hover:underline font-medium">
                        Learn more
                      </Link>
                    </p>
                  </div>
                </div>
                  <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                      onClick={() => setShowManage(true)}
                      className="text-sm font-medium text-base-content/60 hover:text-base-content transition-colors px-4 py-2"
                  >
                      Manage Preferences
                  </button>
                  <button
                      onClick={handleRejectAll}
                      className="btn rounded-xl border-2 border-base-300 text-base-content hover:bg-base-200 transition-all px-8 order-2 sm:order-1"
                  >
                    Reject All
                  </button>
                    <button
                      onClick={handleAcceptAll}
                      className="btn rounded-xl shadow-lg shadow-primary/20 transition-all px-8 bg-primary text-white hover:bg-primary/90 order-1 sm:order-2"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-base-content">Manage Cookie Preferences</h3>
                    <button onClick={() => setShowManage(false)} className="p-2 hover:bg-base-200 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
                  
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between p-4 bg-base-200 rounded-xl">
                      <div>
                        <p className="font-bold text-base-content">Essential Cookies</p>
                        <p className="text-xs text-base-content/60">Required for the site to function properly.</p>
                      </div>
                      <div className="badge badge-primary badge-outline">Always Active</div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-base-200 rounded-xl">
                      <div>
                        <p className="font-bold text-base-content">Analytics Cookies</p>
                        <p className="text-xs text-base-content/60">Help us understand how visitors interact with the site.</p>
                      </div>
                      <input 
                        type="checkbox" 
                        className="toggle toggle-primary" 
                        checked={consent.analytics}
                        onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => setShowManage(false)}
                      className="btn btn-ghost rounded-xl"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => handleSave(consent)}
                      className="btn bg-primary text-white hover:bg-primary/90 rounded-xl px-8"
                    >
                      Save Settings
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

