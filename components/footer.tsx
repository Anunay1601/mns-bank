import Link from 'next/link'
import { Phone, Mail, MapPin, Shield, Award, Users, Clock } from 'lucide-react'
import SmartLink from '@/components/smart-link'
import Logo from '@/components/logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Trust Badges */}
      <div className="bg-[var(--brand-navy)] py-4">
        <div className="container mx-auto px-[var(--space-4)]">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm">
            {[
              { icon: Shield, label: 'RBI Regulated' },
              { icon: Award, label: 'ISO Certified' },
              { icon: Users, label: '1 Crore+ Customers' },
              { icon: Clock, label: '24/7 Banking' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 opacity-90">
                <Icon className="w-4 h-4" />
                <span className="tracking-wide text-xs font-medium uppercase">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-[var(--space-4)] py-[var(--space-12)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-8)]">
          {/* Bank Info */}
          <div>
            <div className="mb-[var(--space-4)]">
              <Logo size="medium" showText={true} showTagline={true} textColor="white" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-[var(--space-4)]">
              Serving the nation with integrity and excellence since 1950. 
              Your trusted banking partner for all financial needs.
            </p>
            <div className="text-sm text-gray-500 italic">
              &ldquo;Banking with Trust, Growing with Excellence&rdquo;
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-[var(--space-4)] text-gray-300">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { href: '/savings-account', label: 'Savings Account' },
                { href: '/personal-loan', label: 'Personal Loan' },
                { href: '/home-loan', label: 'Home Loan' },
                { href: '/education-loan', label: 'Education Loan' },
                { href: '/interest-rates', label: 'Interest Rates' },
                { href: '/emi-calculator', label: 'EMI Calculator' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-white transition-colors duration-[var(--duration-fast)] text-sm group inline-flex items-center gap-1">
                    {label}
                    <span className="inline-block opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[var(--duration-normal)]">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-[var(--space-4)] text-gray-300">Services</h3>
            <ul className="space-y-2.5">
              {[
                'Internet Banking',
                'Mobile Banking',
                'Bill Payments',
                'Fund Transfer',
                'Fixed Deposits',
                'Recurring Deposits',
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-[var(--duration-fast)] text-sm group inline-flex items-center gap-1">
                    {service}
                    <span className="inline-block opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[var(--duration-normal)]">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-[var(--space-4)] text-gray-300">Contact Us</h3>
            <div className="space-y-[var(--space-4)]">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[var(--brand-accent-light)] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide">Toll Free</p>
                  <p className="font-medium text-sm">1800-123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[var(--brand-accent-light)] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide">Email</p>
                  <p className="font-medium text-sm">info@mnsbank.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--brand-accent-light)] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wide">Head Office</p>
                  <p className="font-medium text-sm leading-snug">123 Banking Street, Financial District, Mumbai - 400001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Links */}
        <div className="border-t border-gray-800 mt-[var(--space-10)] pt-[var(--space-8)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-6)] text-sm">
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-wider mb-3 text-gray-400">Important Links</h4>
              <div className="space-y-2">
                <Link href="/grievance-redressal" className="text-gray-500 hover:text-white transition-colors duration-[var(--duration-fast)] block text-sm">Grievance Redressal</Link>
                <Link href="/deaf-unclaimed-deposits" className="text-gray-500 hover:text-white transition-colors duration-[var(--duration-fast)] block text-sm">Unclaimed Deposits</Link>
                <Link href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors duration-[var(--duration-fast)] block text-sm">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-500 hover:text-white transition-colors duration-[var(--duration-fast)] block text-sm">Terms & Conditions</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-wider mb-3 text-gray-400">Security</h4>
              <div className="space-y-2">
                <Link href="/security" className="text-gray-500 hover:text-white transition-colors duration-[var(--duration-fast)] block text-sm">Banking Security</Link>
                <Link href="/security" className="text-gray-500 hover:text-white transition-colors duration-[var(--duration-fast)] block text-sm">Fraud Awareness</Link>
                <Link href="/security" className="text-gray-500 hover:text-white transition-colors duration-[var(--duration-fast)] block text-sm">Cyber Security</Link>
                <Link href="/security" className="text-gray-500 hover:text-white transition-colors duration-[var(--duration-fast)] block text-sm">Report Fraud</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-wider mb-3 text-gray-400">Regulatory</h4>
              <div className="space-y-2">
                <SmartLink href="/rbi-guidelines" className="text-gray-500 hover:text-white transition-colors duration-[var(--duration-fast)] block text-sm">RBI Guidelines</SmartLink>
                <SmartLink href="/banking-ombudsman" className="text-gray-500 hover:text-white transition-colors duration-[var(--duration-fast)] block text-sm">Banking Ombudsman</SmartLink>
                <SmartLink href="/bcsbi" className="text-gray-500 hover:text-white transition-colors duration-[var(--duration-fast)] block text-sm">BCSBI Code</SmartLink>
                <SmartLink href="/consumer-protection" className="text-gray-500 hover:text-white transition-colors duration-[var(--duration-fast)] block text-sm">Consumer Protection</SmartLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/40 py-[var(--space-4)]">
        <div className="container mx-auto px-[var(--space-4)] text-center text-gray-500 text-xs tracking-wide">
          <p>&copy; {currentYear} MNS Bank. All rights reserved. | Regulated by Reserve Bank of India</p>
        </div>
      </div>
    </footer>
  )
}
