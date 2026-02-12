'use client'

import Link from 'next/link'
import { Logo } from '@/app/components/Logo'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF8F5] dark:bg-gray-950 px-6 py-12">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Logo Section */}
        <div className="flex justify-center">
          <Logo className="h-10 w-auto" />
        </div>

        {/* 404 Visual */}
        <div className="relative">
          <h1 className="text-[12rem] font-black text-gray-200 dark:text-gray-800 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                Page not found
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Oops! The page you're looking for seems to have vanished into the review universe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#02BB7E] hover:bg-[#02a36e] text-white font-bold transition-all shadow-lg shadow-[#02BB7E]/20"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-12">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Proofio. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
