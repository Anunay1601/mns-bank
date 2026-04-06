'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, X, Globe, Phone, Mail, MapPin, ChevronRight, User, LogIn, Shield, LucideIcon } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Logo from '@/components/logo'
import './navbar.css'

// Type definitions
interface ContactInfoProps {
  icon: LucideIcon
  text: string
  onClick?: () => void
  className?: string
}

interface NavigationItemProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}

interface PremiumButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  onClick: () => void
  icon?: LucideIcon
  className?: string
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: Array<{ name: string; href: string }>
  language: string
  onLanguageToggle: () => void
  t: (key: string) => string
}

interface NavItem {
  name: string
  href: string
}

// Reusable Contact Info Component
function ContactInfo({ icon: Icon, text, onClick, className = '' }: ContactInfoProps) {
  return (
    <div 
      className={`premium-contact-item cursor-pointer ${className}`}
      onClick={onClick}
    >
      <Icon className="w-4 h-4" />
      <span>{text}</span>
    </div>
  )
}

// Reusable Navigation Item Component
function NavigationItem({ href, children, onClick, className = '', style }: NavigationItemProps) {
  return (
    <Link 
      href={href}
      className={`premium-nav-item fade-in-up ${className}`}
      onClick={onClick}
      style={{ animationDelay: '0.1s' }}
    >
      {children}
    </Link>
  )
}

// Reusable Button Component
function PremiumButton({ 
  variant = 'primary', 
  children, 
  onClick, 
  icon: Icon,
  className = '' 
}: PremiumButtonProps) {
  const baseClass = variant === 'primary' ? 'premium-btn-primary' : 'premium-btn-secondary'
  
  return (
    <button 
      className={`${baseClass} fade-in-up flex items-center gap-2 ${className}`}
      onClick={onClick}
      style={{ animationDelay: '0.3s' }}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  )
}

// Mobile Menu Component
function MobileMenu({ isOpen, onClose, navItems, language, onLanguageToggle, t }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <div className={`premium-mobile-overlay ${isOpen ? 'active' : ''}`} onClick={onClose} />
      <div className={`premium-mobile-menu ${isOpen ? 'active' : ''}`}>
        {/* Mobile Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 p-6 flex items-center justify-between">
          <div className="premium-logo">
            <Logo size="medium" showText={true} showTagline={false} />
          </div>
          <button 
            className="premium-menu-toggle"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="py-4">
          {navItems.map((item: NavItem, index: number) => (
            <Link
              key={item.name}
              href={item.href}
              className="premium-mobile-nav-item"
              onClick={onClose}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </Link>
          ))}
        </nav>

        {/* Mobile Actions */}
        <div className="p-6 space-y-4 border-t border-gray-100">
          <PremiumButton 
            variant="primary" 
            onClick={() => {
              // Handle mobile login
              onClose()
            }}
            icon={LogIn}
          >
            {t('login')}
          </PremiumButton>
          
          <PremiumButton 
            variant="secondary" 
            onClick={onLanguageToggle}
            icon={Globe}
          >
            {language === 'EN' ? 'English' : 'हिंदी'}
          </PremiumButton>

          <div className="pt-4 space-y-3">
            <ContactInfo 
              icon={Phone} 
              text="1800-123-4567" 
            />
            <ContactInfo 
              icon={Mail} 
              text="info@mnsbank.com" 
            />
            <ContactInfo 
              icon={MapPin} 
              text={t('findBranch')} 
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default function PremiumHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()
  const router = useRouter()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleFindBranch = () => {
    router.push('/branches')
  }

  const handleEMICalculator = () => {
    router.push('/emi-calculator')
  }

  const handleLogin = () => {
    router.push('/login')
  }

  const handleRegister = () => {
    router.push('/register')
  }

  const navItems: NavItem[] = [
    { name: t('personal'), href: '/personal' },
    { name: t('business'), href: '/business' },
    { name: t('about'), href: '/about' },
    { name: t('services'), href: '/services' },
    { name: t('contact'), href: '/contact-us' }
  ]

  return (
    <div className={`premium-navbar ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="premium-top-bar">
        <div className="premium-nav-container">
          <div className="flex justify-between items-center py-2">
            {/* Left side - Contact Info */}
            <div className="hidden lg:flex items-center space-x-6">
              <ContactInfo 
                icon={Phone} 
                text="1800-123-4567" 
                onClick={() => {}}
              />
              <ContactInfo 
                icon={Mail} 
                text="info@mnsbank.com" 
                onClick={() => {}}
              />
              <ContactInfo 
                icon={MapPin} 
                text={t('findBranch')} 
                onClick={handleFindBranch}
              />
            </div>

            {/* Right side - Actions */}
            <div className="flex items-center gap-4">
              <button 
                className="premium-language-toggle fade-in-up"
                onClick={toggleLanguage}
                style={{ animationDelay: '0.2s' }}
              >
                <Globe className="w-4 h-4" />
                {language === 'EN' ? 'EN' : 'हिंदी'}
              </button>
              
              <PremiumButton 
                variant="secondary" 
                onClick={handleEMICalculator}
                className="hidden md:flex"
                icon={Shield}
              >
                {t('emiCalculator')}
              </PremiumButton>

              <PremiumButton 
                variant="primary" 
                onClick={handleLogin}
                icon={LogIn}
                className="hidden lg:flex"
              >
                {t('login')}
              </PremiumButton>

              {/* Mobile Menu Toggle */}
              <button 
                className="premium-menu-toggle md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/80 backdrop-blur-lg">
        <div className="premium-nav-container">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="premium-logo fade-in-up">
              <Logo size="medium" showText={true} showTagline={true} />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item: NavItem, index: number) => (
                <NavigationItem 
                  key={item.name}
                  href={item.href}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </NavigationItem>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <PremiumButton 
                variant="primary" 
                onClick={handleRegister}
                icon={User}
              >
                {t('register')}
              </PremiumButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={navItems}
        language={language}
        onLanguageToggle={toggleLanguage}
        t={t}
      />
    </div>
  )
}
