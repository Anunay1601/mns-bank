'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, X, Globe, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import Logo from '@/components/logo'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()
  const router = useRouter()

  const handleLanguageToggle = () => {
    toggleLanguage()
  }

  const handleFindBranch = () => {
    router.push('/branches')
  }

  const handleEMICalculator = () => {
    router.push('/emi-calculator')
  }

  const navItems = [
    { name: t('personal'), href: '/personal' },
    { name: t('business'), href: '/business' },
    { name: t('about'), href: '/about' },
    { name: t('services'), href: '/services' },
    { name: t('contact'), href: '/contact-us' }
  ]

  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[var(--border)] shadow-[var(--shadow-xs)]">
      {/* Top Bar */}
      <div className="bg-[var(--brand-navy)] text-white py-2.5">
        <div className="container mx-auto px-[var(--space-4)] flex justify-between items-center text-sm">
          <div className="hidden md:flex items-center gap-[var(--space-5)]">
            <span className="flex items-center gap-1.5 opacity-90">
              <Phone className="w-3.5 h-3.5" />
              1800-123-4567
            </span>
            <span className="flex items-center gap-1.5 opacity-90">
              <Mail className="w-3.5 h-3.5" />
              info@mnsbank.com
            </span>
            <button
              onClick={handleFindBranch}
              className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity duration-[var(--duration-fast)] cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5" />
              {t('findBranch')}
            </button>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLanguageToggle}
              className="text-white hover:bg-white/15 hover:text-white flex items-center gap-1.5 border border-white/20 hover:border-white/40 transition-colors duration-[var(--duration-normal)] text-xs h-8 px-3"
            >
              <Globe className="w-3.5 h-3.5" />
              {language === 'EN' ? 'EN' : 'हिंदी'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleEMICalculator}
              className="border-white/80 text-[var(--brand-navy)] bg-white hover:bg-white/90 transition-colors duration-[var(--duration-normal)] text-xs font-semibold h-8 px-3"
            >
              {t('emiCalculator')}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white">
        <div className="container mx-auto px-[var(--space-4)]">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Logo size="medium" showText={true} showTagline={true} />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-[var(--foreground)]/80 hover:text-[var(--brand-navy)] transition-colors duration-[var(--duration-normal)] rounded-lg hover:bg-[var(--surface-secondary)] group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-[var(--brand-accent)] transition-all duration-[var(--duration-normal)] ease-[var(--ease-smooth)] group-hover:w-3/5 rounded-full" />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden relative w-10 h-10 p-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden overflow-hidden border-t border-[var(--border)]"
              >
                <div className="py-3 flex flex-col gap-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.25,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-2.5 text-[var(--foreground)]/80 hover:text-[var(--brand-navy)] hover:bg-[var(--surface-secondary)] font-medium transition-colors duration-[var(--duration-fast)] rounded-lg text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  )
}
