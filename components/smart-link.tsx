'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ReactNode } from 'react'

interface SmartLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

// List of existing pages
const existingPages = [
  '/',
  '/about',
  '/activity-monitor',
  '/application',
  '/branches',
  '/business',
  '/business-loan',
  '/contact-us',
  '/credit-cards',
  '/current-account',
  '/deaf-unclaimed-deposits',
  '/education-loan',
  '/emi-calculator',
  '/fixed-deposits',
  '/grievance-redressal',
  '/home-loan',
  '/interest-rates',
  '/internet-banking',
  '/mobile-banking',
  '/personal',
  '/personal-loan',
  '/privacy-policy',
  '/savings-account',
  '/security',
  '/security-center',
  '/security-settings',
  '/services',
  '/terms',
  '/wealth-management'
]

export default function SmartLink({ href, children, className, onClick }: SmartLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    // Check if the page exists
    if (!existingPages.includes(href)) {
      e.preventDefault()
      // Redirect to privacy policy instead of showing 404
      router.push('/privacy-policy')
      return
    }
    
    // Call the original onClick if provided
    if (onClick) {
      onClick()
    }
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
