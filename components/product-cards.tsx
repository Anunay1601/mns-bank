'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Home, PiggyBank, GraduationCap, Briefcase, CreditCard, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import SmartLink from '@/components/smart-link'
import { HomeLoanImage, MobileBankingImage, BankingHeroImage, CreditCardImage, PersonalLoanImage, SavingsAccountImage, EducationLoanImage, FixedDepositImage } from '@/components/image-gallery'

interface Product {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  link: string
  buttonText: string
  badge?: string
  visual?: 'home' | 'mobile' | 'banking' | 'credit' | 'personal' | 'savings' | 'education' | 'fixed'
}

export default function ProductCards() {
  const { t } = useLanguage()

  const products: Product[] = [
    {
      icon: <Home className="w-8 h-8 text-blue-600" />,
      title: t('home') + " " + t('loan'),
      description: "Turn your dream home into reality with our affordable home loan solutions",
      features: ["Interest from 8.5%*", "Up to ₹5 Crores", "Flexible tenure", "Quick approval"],
      link: "/home-loan",
      buttonText: "Explore " + t('home') + " " + t('loan'),
      visual: "home"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-green-600" />,
      title: "Personal Loans",
      description: "Get instant personal loans for all your financial needs",
      features: ["Up to ₹25 Lakhs", "5-minute approval", "No collateral", "Flexible EMI"],
      link: "/personal-loan",
      buttonText: "Check " + t('eligibility'),
      visual: "personal"
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-purple-600" />,
      title: "Savings Account",
      description: "Open a savings account with attractive interest rates and digital features",
      features: ["6.5%* interest", "Zero balance", "Digital banking", "Debit card"],
      link: "/savings-account",
      buttonText: "Open " + t('account'),
      visual: "savings"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-orange-600" />,
      title: "Education Loans",
      description: "Invest in your future with our education loan programs",
      features: ["Study in India/Abroad", "Moratorium period", "Tax benefits", "Easy repayment"],
      link: "/education-loan",
      buttonText: t('learnMore'),
      visual: "education"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-red-600" />,
      title: "Credit Cards",
      description: "Premium credit cards with exclusive benefits and rewards",
      features: ["Cashback offers", "Reward points", "Lounge access", "Fuel surcharge waiver"],
      link: "/credit-cards",
      buttonText: "Compare Cards",
      visual: "credit"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-teal-600" />,
      title: "Fixed Deposits",
      description: "Secure your savings with high-yield fixed deposit schemes",
      features: ["7.5%* interest", "Flexible tenure", "Senior citizen benefits", "Online renewal"],
      link: "/fixed-deposits",
      buttonText: "Invest Now",
      visual: "fixed"
    }
  ]
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('ourProductsServices')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('discoverComprehensiveRange')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 relative h-full flex flex-col">
              {product.badge && (
                <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  {product.badge}
                </div>
              )}
              <CardHeader className="flex-grow">
                {product.visual && (
                  <div className="mb-4">
                    {product.visual === 'home' && <HomeLoanImage />}
                    {product.visual === 'personal' && <PersonalLoanImage />}
                    {product.visual === 'savings' && <SavingsAccountImage />}
                    {product.visual === 'education' && <EducationLoanImage />}
                    {product.visual === 'credit' && <CreditCardImage />}
                    {product.visual === 'fixed' && <FixedDepositImage />}
                    {product.visual === 'mobile' && <MobileBankingImage />}
                    {product.visual === 'banking' && <BankingHeroImage />}
                  </div>
                )}
                <div className="flex items-center space-x-3">
                  {product.icon}
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col">
                <ul className="space-y-2 flex-grow">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-auto">
                  <SmartLink href={product.link}>
                    {product.buttonText}
                  </SmartLink>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
