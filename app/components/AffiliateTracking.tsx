'use client'

import { useEffect } from 'react'

/**
 * Client component to initialize affiliate tracking from URL
 * Captures ?ref=PARTNER_ID and stores it in cookies/localStorage
 */
export default function AffiliateTracking() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // FIRST TOUCH WINS: Check if attribution already exists
    const existingRef = document.cookie
      .split(';')
      .find(c => c.trim().startsWith('proofio_affiliate_ref='))
    if (existingRef) {
      return // Don't overwrite existing attribution
    }

    // Extract affiliate ID from URL
    const urlParams = new URLSearchParams(window.location.search)
    const ref = urlParams.get('ref')

    if (ref && ref.length > 0) {
      // Set cookie (30 days) with domain .proofio.app for cross-subdomain tracking
      const expiryDate = new Date()
      expiryDate.setDate(expiryDate.getDate() + 30)
      const cookieValue = `${ref}; expires=${expiryDate.toUTCString()}; path=/; domain=.proofio.app; SameSite=Lax`
      document.cookie = `proofio_affiliate_ref=${cookieValue}`

      // Set localStorage (fallback) - only if not already set
      try {
        if (!localStorage.getItem('proofio_affiliate_ref')) {
          localStorage.setItem('proofio_affiliate_ref', ref)
        }
      } catch (error) {
        console.error('Failed to set affiliate in localStorage:', error)
      }
    }
  }, [])

  return null // This component doesn't render anything
}
