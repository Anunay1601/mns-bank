import Link from 'next/link'
import { Phone, Mail, MapPin, Shield, Award, Users, Clock } from 'lucide-react'
import SmartLink from '@/components/smart-link'
import Logo from '@/components/logo'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Trust Badges */}
      <div className="bg-blue-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>RBI Regulated</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>1 Crore+ Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>24/7 Banking</span>
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
              Serving the nation with integrity and excellence since 1950. 
              Your trusted banking partner for all financial needs.
            </p>
            <div className="text-sm text-gray-300 italic">
              "Banking with Trust, Growing with Excellence"
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/savings-account" className="text-gray-400 hover:text-white transition-colors">Savings Account</Link></li>
              <li><Link href="/personal-loan" className="text-gray-400 hover:text-white transition-colors">Personal Loan</Link></li>
              <li><Link href="/home-loan" className="text-gray-400 hover:text-white transition-colors">Home Loan</Link></li>
              <li><Link href="/education-loan" className="text-gray-400 hover:text-white transition-colors">Education Loan</Link></li>
              <li><Link href="/interest-rates" className="text-gray-400 hover:text-white transition-colors">Interest Rates</Link></li>
              <li><Link href="/emi-calculator" className="text-gray-400 hover:text-white transition-colors">EMI Calculator</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Internet Banking</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Mobile Banking</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Bill Payments</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Fund Transfer</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Fixed Deposits</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Recurring Deposits</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-400">Toll Free</p>
                  <p className="font-medium">1800-123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="font-medium">info@mnsbank.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-400">Head Office</p>
                  <p className="font-medium">123 Banking Street, Financial District, Mumbai - 400001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Links */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-bold mb-2">Important Links</h4>
              <div className="space-y-1">
                <Link href="/grievance-redressal" className="text-gray-400 hover:text-white transition-colors block">Grievance Redressal</Link>
                <Link href="/deaf-unclaimed-deposits" className="text-gray-400 hover:text-white transition-colors block">Unclaimed Deposits</Link>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors block">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors block">Terms & Conditions</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-2">Security</h4>
              <div className="space-y-1">
                <ul>
                  <li><Link href="/security" className="text-gray-400 hover:text-white transition-colors">Banking Security</Link></li>
                  <li><Link href="/security" className="text-gray-400 hover:text-white transition-colors">Fraud Awareness</Link></li>
                  <li><Link href="/security" className="text-gray-400 hover:text-white transition-colors">Cyber Security</Link></li>
                  <li><Link href="/security" className="text-gray-400 hover:text-white transition-colors">Report Fraud</Link></li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-2">Regulatory</h4>
              <div className="space-y-1">
                <SmartLink href="/rbi-guidelines" className="text-gray-400 hover:text-white transition-colors block">RBI Guidelines</SmartLink>
                <SmartLink href="/banking-ombudsman" className="text-gray-400 hover:text-white transition-colors block">Banking Ombudsman</SmartLink>
                <SmartLink href="/bcsbi" className="text-gray-400 hover:text-white transition-colors block">BCSBI Code</SmartLink>
                <SmartLink href="/consumer-protection" className="text-gray-400 hover:text-white transition-colors block">Consumer Protection</SmartLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>&copy; 2024 MNS Bank. All rights reserved. | Regulated by Reserve Bank of India</p>
        </div>
      </div>
    </footer>
  )
}
