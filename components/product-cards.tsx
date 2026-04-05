'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Home, PiggyBank, GraduationCap, Briefcase, CreditCard, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import SmartLink from '@/components/smart-link'
import { HomeLoanImage, MobileBankingImage, BankingHeroImage, CreditCardImage, PersonalLoanImage, SavingsAccountImage, EducationLoanImage, FixedDepositImage } from '@/components/image-gallery'
import { StaggerContainer, StaggerItem } from '@/components/fade-in-section'

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
      icon: <Home className="w-6 h-6" />,
      title: t('home') + " " + t('loan'),
      description: "Turn your dream home into reality with our affordable home loan solutions",
      features: ["Interest from 8.5%*", "Up to ₹5 Crores", "Flexible tenure", "Quick approval"],
      link: "/home-loan",
      buttonText: "Explore " + t('home') + " " + t('loan'),
      visual: "home"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Personal Loans",
      description: "Get instant personal loans for all your financial needs",
      features: ["Up to ₹25 Lakhs", "5-minute approval", "No collateral", "Flexible EMI"],
      link: "/personal-loan",
      buttonText: "Check " + t('eligibility'),
      visual: "personal"
    },
    {
      icon: <PiggyBank className="w-6 h-6" />,
      title: "Savings Account",
      description: "Open a savings account with attractive interest rates and digital features",
      features: ["6.5%* interest", "Zero balance", "Digital banking", "Debit card"],
      link: "/savings-account",
      buttonText: "Open " + t('account'),
      visual: "savings"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education Loans",
      description: "Invest in your future with our education loan programs",
      features: ["Study in India/Abroad", "Moratorium period", "Tax benefits", "Easy repayment"],
      link: "/education-loan",
      buttonText: t('learnMore'),
      visual: "education"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Credit Cards",
      description: "Premium credit cards with exclusive benefits and rewards",
      features: ["Cashback offers", "Reward points", "Lounge access", "Fuel surcharge waiver"],
      link: "/credit-cards",
      buttonText: "Compare Cards",
      visual: "credit"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Fixed Deposits",
      description: "Secure your savings with high-yield fixed deposit schemes",
      features: ["7.5%* interest", "Flexible tenure", "Senior citizen benefits", "Online renewal"],
      link: "/fixed-deposits",
      buttonText: "Invest Now",
      visual: "fixed"
    }
  ]

  return (
    <section className="py-[var(--space-16)] bg-[var(--surface-secondary)]">
      <div className="container mx-auto px-[var(--space-4)]">
        <div className="text-center mb-[var(--space-12)]">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-[var(--space-3)] tracking-tight">
            {t('ourProductsServices')}
          </h2>
          <p className="text-base text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
            {t('discoverComprehensiveRange')}
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-6)]">
          {products.map((product, index) => (
            <StaggerItem key={index}>
              <Card className="group relative h-full flex flex-col border-[var(--border)] bg-[var(--surface-elevated)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5 transition-all duration-[var(--duration-normal)] ease-[var(--ease-smooth)]">
                {product.badge && (
                  <div className="absolute -top-2.5 -right-2.5 bg-[var(--color-danger)] text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                    {product.badge}
                  </div>
                )}
                <CardHeader className="flex-grow pb-3">
                  {product.visual && (
                    <div className="mb-[var(--space-3)] rounded-lg overflow-hidden">
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
                  <div className="flex items-center gap-[var(--space-3)]">
                    <div className="w-10 h-10 rounded-xl bg-[var(--brand-accent-subtle)] text-[var(--brand-accent)] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-[var(--duration-normal)]">
                      {product.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold tracking-tight">{product.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm text-[var(--muted-foreground)] mt-2 leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-[var(--space-4)] flex flex-col pt-0">
                  <ul className="space-y-2 flex-grow">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-[var(--foreground)]/80">
                        <div className="w-1.5 h-1.5 bg-[var(--color-success)] rounded-full mr-2.5 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-auto bg-[var(--brand-navy)] hover:bg-[var(--brand-navy-light)] active:scale-[0.98] transition-all duration-[var(--duration-normal)] text-sm font-medium">
                    <SmartLink href={product.link}>
                      {product.buttonText}
                    </SmartLink>
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
