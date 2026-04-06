'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Shield, TrendingUp, Users, Star, Smartphone, CreditCard, ArrowUpRight, ArrowDownRight, Plus } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { BalanceCard } from '@/components/balance-card'
import './hero.css'

// Type definitions
interface TrustIndicatorProps {
  icon: any
  text: string
  delay?: string
}

interface FloatingCardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

interface CTAButtonProps {
  href: string
  variant: 'primary' | 'secondary'
  children: React.ReactNode
  icon?: any
}

// Trust Indicator Component
function TrustIndicator({ icon: Icon, text, delay = '0s' }: TrustIndicatorProps) {
  return (
    <div 
      className="premium-trust-item fade-in-up"
      style={{ animationDelay: delay }}
    >
      <Icon className="premium-trust-icon" />
      <span>{text}</span>
    </div>
  )
}

// Floating Card Component
function FloatingCard({ children, className = '', style }: FloatingCardProps) {
  return (
    <div 
      className={`premium-floating-card ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

// CTA Button Component
function CTAButton({ href, variant, children, icon: Icon }: CTAButtonProps) {
  const baseClass = variant === 'primary' ? 'premium-cta-primary' : 'premium-cta-secondary'
  
  return (
    <Link href={href} className={baseClass}>
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </Link>
  )
}

// App Mockup Component
function AppMockup() {
  return (
    <div className="premium-app-mockup">
      <div className="premium-app-screen">
        {/* App Header */}
        <div className="premium-app-header">
          <div className="premium-app-nav">
            <div className="premium-app-title">MNS Bank</div>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* App Content */}
        <div className="premium-app-content">
          {/* Balance Display */}
          <div className="premium-app-balance">
            <div className="premium-app-balance-amount">₹1,25,430</div>
            <div className="premium-app-balance-label">Total Balance</div>
          </div>

          {/* Quick Actions */}
          <div className="premium-app-quick-actions">
            <div className="premium-app-action">
              <ArrowUpRight className="premium-app-action-icon" />
              <div className="premium-app-action-label">Send</div>
            </div>
            <div className="premium-app-action">
              <ArrowDownRight className="premium-app-action-icon" />
              <div className="premium-app-action-label">Receive</div>
            </div>
            <div className="premium-app-action">
              <Plus className="premium-app-action-icon" />
              <div className="premium-app-action-label">Add</div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Smartphone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white text-xs font-medium">Mobile Recharge</div>
                  <div className="text-gray-400 text-xs">Today</div>
                </div>
              </div>
              <div className="text-red-400 text-sm font-medium">-₹299</div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white text-xs font-medium">Salary Credit</div>
                  <div className="text-gray-400 text-xs">Yesterday</div>
                </div>
              </div>
              <div className="text-green-400 text-sm font-medium">+₹45,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ATM Card Component
function ATMCard() {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-8 bg-white/20 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">MNS</span>
        </div>
        <CreditCard className="w-6 h-6 text-white/80" />
      </div>
      
      <div className="mb-8">
        <div className="text-white/80 text-xs mb-2">Card Number</div>
        <div className="text-white font-mono text-lg tracking-wider">
          •••• •••• •••• 4532
        </div>
      </div>
      
      <div className="flex justify-between items-end">
        <div>
          <div className="text-white/60 text-xs mb-1">Card Holder</div>
          <div className="text-white font-medium">JOHN DOE</div>
        </div>
        <div>
          <div className="text-white/60 text-xs mb-1">Expires</div>
          <div className="text-white font-medium">12/25</div>
        </div>
      </div>
    </div>
  )
}

// Transaction Card Component
function TransactionCard() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <ArrowDownRight className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <div className="text-gray-900 font-medium text-sm">Received</div>
            <div className="text-gray-500 text-xs">From Raj Kumar</div>
          </div>
        </div>
        <div className="text-green-600 font-semibold">+₹2,500</div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 text-red-600" />
          </div>
          <div>
            <div className="text-gray-900 font-medium text-sm">Sent</div>
            <div className="text-gray-500 text-xs">To Priya Sharma</div>
          </div>
        </div>
        <div className="text-red-600 font-semibold">-₹1,200</div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <Smartphone className="w-4 h-4 text-purple-600" />
          </div>
          <div>
            <div className="text-gray-900 font-medium text-sm">Bill Pay</div>
            <div className="text-gray-500 text-xs">Electricity</div>
          </div>
        </div>
        <div className="text-red-600 font-semibold">-₹850</div>
      </div>
    </div>
  )
}

export default function PremiumHero() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  // Hero content from existing carousel but enhanced
  const heroContent = [
    {
      title: `${t('homeLoansAt')} 8.5%*`,
      subtitle: t('dreamHomeEasyEMI'),
      description: t('homeLoanDescription'),
      primaryCTA: t('applyNow'),
      primaryLink: '/home-loan',
      secondaryCTA: 'Learn More',
      secondaryLink: '/home-loan-details'
    },
    {
      title: t('personalLoansInstant'),
      subtitle: t('getApprovedIn5Minutes'),
      description: t('personalLoanDescription'),
      primaryCTA: t('checkEligibility'),
      primaryLink: '/personal-loan',
      secondaryCTA: 'View Details',
      secondaryLink: '/personal-loan-details'
    },
    {
      title: t('savingsAccount'),
      subtitle: `6.5%* ${t('interestRate')}`,
      description: t('savingsDescription'),
      primaryCTA: t('openAccount'),
      primaryLink: '/savings-account',
      secondaryCTA: 'Compare Plans',
      secondaryLink: '/savings-plans'
    }
  ]

  const currentContent = heroContent[currentSlide]

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="premium-hero">
      <div className="premium-hero-content">
        <div className="premium-hero-grid">
          {/* Left Side - Content */}
          <div className="premium-hero-left">
            <h1 className="premium-hero-title">
              {currentContent.title}
            </h1>
            
            <p className="premium-hero-subtitle">
              {currentContent.subtitle}
            </p>
            
            <p className="premium-hero-description">
              {currentContent.description}
            </p>
            
            <div className="premium-hero-cta">
              <CTAButton 
                href={currentContent.primaryLink}
                variant="primary"
                icon={ArrowRight}
              >
                {currentContent.primaryCTA}
              </CTAButton>
              
              <CTAButton 
                href={currentContent.secondaryLink}
                variant="secondary"
              >
                {currentContent.secondaryCTA}
              </CTAButton>
            </div>
            
            {/* Trust Indicators */}
            <div className="premium-trust-indicators">
              <TrustIndicator 
                icon={Users} 
                text="2M+ Happy Customers" 
                delay="0.8s"
              />
              <TrustIndicator 
                icon={Star} 
                text="4.8/5 Rating" 
                delay="1.0s"
              />
              <TrustIndicator 
                icon={Shield} 
                text="Bank-Level Security" 
                delay="1.2s"
              />
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="premium-hero-right">
            {/* App Mockup */}
            <AppMockup />
            
            {/* Floating Balance Card */}
            <FloatingCard className="premium-balance-float">
              <BalanceCard 
                balance={12543.67}
                subtitle="Total Balance"
                showToggle={false}
              />
            </FloatingCard>
            
            {/* Floating ATM Card */}
            <FloatingCard className="premium-atm-float">
              <ATMCard />
            </FloatingCard>
            
            {/* Floating Transaction Card */}
            <FloatingCard className="premium-transaction-float">
              <h4 className="font-semibold text-gray-900 mb-3">Recent Activity</h4>
              <TransactionCard />
            </FloatingCard>
          </div>
        </div>
      </div>
    </section>
  )
}
