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
  '/banking-ombudsman',
  '/bcsbi',
  '/branches',
  '/business',
  '/business-loan',
  '/contact-us',
  '/consumer-protection',
  '/credit-cards',
  '/current-account',
  '/cyber-security',
  '/deaf-unclaimed-deposits',
  '/education-loan',
  '/emi-calculator',
  '/fixed-deposits',
  '/fraud-awareness',
  '/grievance-redressal',
  '/home-loan',
  '/home-loan-details',
  '/interest-rates',
  '/internet-banking',
  '/login',
  '/mobile-banking',
  '/personal',
  '/personal-loan',
  '/personal-loan-details',
  '/privacy-policy',
  '/rbi-guidelines',
  '/register',
  '/report-fraud',
  '/savings-account',
  '/savings-calculator',
  '/savings-plans',
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
