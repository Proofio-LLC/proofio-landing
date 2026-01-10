"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
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
                Proofio empowers teams to transform reviews from multiple platforms into clear and actionable insights, making customer feedback easier to understand and act on.
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
            </div>

            {/* Right Side - Navigation Links */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-base-content mb-4">Product</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#features" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#integration" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      Integrations
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-base-content mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="https://docs.proofio.app" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/help" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/status" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      Status
                    </Link>
                  </li>
                  <li>
                    <Link href="/changelog" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      Changelog
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-base-content mb-4">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/about" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/partners" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                      Partners
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="pt-8 border-t border-base-300 flex flex-wrap justify-between items-center gap-6">
            <p className="text-sm text-base-content/50">
              © 2026 Proofio. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
            <Link href="/imprint" className="text-sm text-base-content/60 hover:text-primary transition-colors underline">
              Imprint
            </Link>
            <Link href="/privacy-policy" className="text-sm text-base-content/60 hover:text-primary transition-colors underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-base-content/60 hover:text-primary transition-colors underline">
              Terms of Service
            </Link>
            <Link href="/cookies-settings" className="text-sm text-base-content/60 hover:text-primary transition-colors underline">
              Cookies Settings
            </Link>
            <a href="mailto:legal@proofio.app" className="text-sm text-base-content/60 hover:text-primary transition-colors underline">
              Legal Inquiries
            </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



