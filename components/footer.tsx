'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Shield, Award, Users, Clock } from 'lucide-react'
import SmartLink from '@/components/smart-link'
import Logo from '@/components/logo'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-gray-900 text-white transition-colors duration-300">
      {/* Trust Badges */}
      <div className="bg-blue-900 py-4 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>{t('rbiRegulated')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>{t('isoCertified')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>{t('oneCroreCustomers')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{t('banking24x7')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Bank Info */}
          <div>
            <div className="mb-4">
              <Logo size="medium" showText={true} showTagline={true} textColor="white" />
            </div>
            <p className="text-gray-400 mb-4">
              {t('bankDescription')}
            </p>
            <div className="text-sm text-gray-300 italic">
              "{t('bankTagline')}"
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link href="/savings-account" className="text-gray-400 hover:text-white transition-colors">{t('savingsAccount')}</Link></li>
              <li><Link href="/personal-loan" className="text-gray-400 hover:text-white transition-colors">{t('personal') + " " + t('loan')}</Link></li>
              <li><Link href="/home-loan" className="text-gray-400 hover:text-white transition-colors">{t('home') + " " + t('loan')}</Link></li>
              <li><Link href="/education-loan" className="text-gray-400 hover:text-white transition-colors">{t('education') + " " + t('loan')}</Link></li>
              <li><Link href="/interest-rates" className="text-gray-400 hover:text-white transition-colors">{t('interest') + " " + t('rates')}</Link></li>
              <li><Link href="/emi-calculator" className="text-gray-400 hover:text-white transition-colors">{t('emiCalculator')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('services')}</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">{t('internet') + " " + t('banking')}</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">{t('mobile') + " " + t('banking')}</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Bill Payments</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">{t('transfer')}</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">{t('deposit')}</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Recurring Deposits</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('contactUs')}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-400">{t('tollFree')}</p>
                  <p className="font-medium">{t('phoneNumber')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-400">{t('email')}</p>
                  <p className="font-medium">{t('emailAddress')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-400">{t('headOffice')}</p>
                  <p className="font-medium">{t('headOfficeAddress')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Links */}
        <div className="border-t border-gray-800 mt-8 pt-8 transition-colors duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-bold mb-2">{t('importantLinks')}</h4>
              <div className="space-y-1">
                <Link href="/grievance-redressal" className="text-gray-400 hover:text-white transition-colors block">{t('grievanceRedressal')}</Link>
                <Link href="/deaf-unclaimed-deposits" className="text-gray-400 hover:text-white transition-colors block">{t('unclaimedDeposits')}</Link>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors block">{t('privacyPolicy')}</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors block">{t('termsConditions')}</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-2">{t('security')}</h4>
              <div className="space-y-1">
                <ul>
                  <li><Link href="/security" className="text-gray-400 hover:text-white transition-colors">{t('bankingSecurity')}</Link></li>
                  <li><Link href="/fraud-awareness" className="text-gray-400 hover:text-white transition-colors">{t('fraudAwareness')}</Link></li>
                  <li><Link href="/cyber-security" className="text-gray-400 hover:text-white transition-colors">{t('cyberSecurity')}</Link></li>
                  <li><Link href="/report-fraud" className="text-gray-400 hover:text-white transition-colors">{t('reportFraud')}</Link></li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-2">{t('regulatory')}</h4>
              <div className="space-y-1">
                <SmartLink href="/rbi-guidelines" className="text-gray-400 hover:text-white transition-colors block">{t('rbiGuidelines')}</SmartLink>
                <SmartLink href="/banking-ombudsman" className="text-gray-400 hover:text-white transition-colors block">{t('bankingOmbudsman')}</SmartLink>
                <SmartLink href="/bcsbi" className="text-gray-400 hover:text-white transition-colors block">{t('bcsbiCode')}</SmartLink>
                <SmartLink href="/consumer-protection" className="text-gray-400 hover:text-white transition-colors block">{t('consumerProtection')}</SmartLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>&copy; 2024 MNS Bank. {t('allRightsReserved')}. | {t('regulatedByRBI')}</p>
        </div>
      </div>
    </footer>
  )
}
