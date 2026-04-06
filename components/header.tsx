'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, X, Globe, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import Logo from '@/components/logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()
  const router = useRouter()

  const handleLanguageToggle = () => {
    toggleLanguage()
  }

  const handleFindBranch = () => {
    // Navigate to branches page using Next.js router
    router.push('/branches')
  }

  const handleEMICalculator = () => {
    // Navigate to EMI calculator page using Next.js router
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
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200 transition-colors duration-300">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 transition-colors duration-300">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="hidden md:flex items-center space-x-4">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              {t('phoneNumber')}
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              {t('emailAddress')}
            </span>
            <span className="hidden md:flex items-center gap-1 cursor-pointer hover:text-blue-200 transition-all duration-300 hover:scale-105 transform" onClick={handleFindBranch}>
              <MapPin className="w-4 h-4" />
              {t('findBranch')}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLanguageToggle}
              className="text-white hover:bg-white/20 hover:text-white flex items-center gap-2 border border-white/50 hover:border-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium"
            >
              <Globe className="w-4 h-4" />
              {language === 'EN' ? 'EN' : 'हिंदी'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleEMICalculator}
              className="border-2 border-white text-blue-900 bg-white hover:bg-blue-50 hover:border-blue-900 hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              {t('emiCalculator')}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">MNS</span>
              </div>
              <span className="text-xl font-bold text-gray-900">MNS Bank</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 hover:scale-105 relative group py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-50 px-3 py-2 rounded-lg transform"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
