"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    // Here you could enable analytics cookies if needed
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
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
            <div className="bg-base-100 rounded-2xl shadow-2xl border border-base-300 p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex-shrink-0">
                    <Cookie className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-base-content mb-2">
                      We use cookies
                    </h3>
                    <p className="text-sm text-base-content/70 mb-3">
                      We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                      By clicking "Accept All", you consent to our use of cookies.{" "}
                      <Link href="/cookies-settings" className="text-primary hover:underline font-medium">
                        Learn more
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 w-full md:w-auto">
                  <button
                    onClick={handleAccept}
                    className="btn rounded-lg shadow-md hover:shadow-lg transition-all px-6 bg-primary text-white hover:bg-primary/90 whitespace-nowrap"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={handleReject}
                    className="btn rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white hover:border-primary transition-all px-6 whitespace-nowrap"
                  >
                    Reject All
                  </button>
                </div>
                <button
                  onClick={() => setShowBanner(false)}
                  className="absolute top-4 right-4 text-base-content/50 hover:text-base-content transition-colors"
                  aria-label="Close cookie banner"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

