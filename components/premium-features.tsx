'use client'

import { motion, Variants } from 'framer-motion'
import { Home, PiggyBank, GraduationCap, Briefcase, CreditCard, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import FeatureCard from '@/components/feature-card'
import './features.css'

// Header animation variants
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8
    }
  }
}

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2
    }
  }
}

export default function PremiumFeatures() {
  const { t } = useLanguage()

  // Existing products data preserved exactly
  const products = [
    {
      icon: <Home className="w-8 h-8" />,
      title: t('home') + " " + t('loan'),
      description: "Turn your dream home into reality with our affordable home loan solutions",
      features: ["Interest from 8.5%*", "Up to ₹5 Crores", "Flexible tenure", "Quick approval"],
      link: "/home-loan",
      buttonText: "Explore " + t('home') + " " + t('loan'),
      iconType: "home" as const
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Personal Loans",
      description: "Get instant personal loans for all your financial needs",
      features: ["Up to ₹25 Lakhs", "5-minute approval", "No collateral", "Flexible EMI"],
      link: "/personal-loan",
      buttonText: "Check " + t('eligibility'),
      iconType: "personal" as const
    },
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: "Savings Account",
      description: "Open a savings account with attractive interest rates and digital features",
      features: ["6.5%* interest", "Zero balance", "Digital banking", "Debit card"],
      link: "/savings-account",
      buttonText: "Open " + t('account'),
      iconType: "savings" as const
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education Loans",
      description: "Invest in your future with our education loan programs",
      features: ["Study in India/Abroad", "Moratorium period", "Tax benefits", "Easy repayment"],
      link: "/education-loan",
      buttonText: t('learnMore'),
      iconType: "education" as const
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Credit Cards",
      description: "Premium credit cards with exclusive benefits and rewards",
      features: ["Cashback offers", "Reward points", "Lounge access", "Fuel surcharge waiver"],
      link: "/credit-cards",
      buttonText: "Compare Cards",
      iconType: "credit" as const
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Fixed Deposits",
      description: "Secure your savings with high-yield fixed deposit schemes",
      features: ["7.5%* interest", "Flexible tenure", "Senior citizen benefits", "Online renewal"],
      link: "/fixed-deposits",
      buttonText: "Invest Now",
      iconType: "fixed" as const
    }
  ]

  return (
    <section className="premium-features">
      <div className="premium-features-container">
        {/* Section Header */}
        <motion.header 
          className="premium-features-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="premium-features-title"
            variants={headerVariants}
          >
            {t('ourProductsServices')}
          </motion.h2>
          <motion.p 
            className="premium-features-subtitle"
            variants={subtitleVariants}
          >
            {t('discoverComprehensiveRange')}
          </motion.p>
        </motion.header>

        {/* Features Content */}
        <main className="premium-features-content">
          {/* Features Grid Container */}
          <div className="premium-features-grid">
            {products.map((product, index) => (
              <FeatureCard
                key={index}
                icon={product.icon}
                title={product.title}
                description={product.description}
                features={product.features}
                link={product.link}
                buttonText={product.buttonText}
                iconType={product.iconType}
                index={index}
              />
            ))}
          </div>
        </main>
      </div>
    </section>
  )
}
