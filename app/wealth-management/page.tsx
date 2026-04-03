'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Shield, PiggyBank, FileText, Calculator, Target, Award } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

interface WealthProduct {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  link: string
  badge?: string
}

export default function WealthManagementPage() {
  const { t } = useLanguage()

  const wealthProducts: WealthProduct[] = [
    {
      icon: <PiggyBank className="w-8 h-8 text-blue-600" />,
      title: "Fixed Deposits",
      description: "Safe and secure investment options with guaranteed returns",
      features: ["High Interest Rates", "Flexible Tenure", "Senior Citizen Benefits", "Tax Benefits"],
      link: "/interest-rates"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Mutual Funds",
      description: "Professional fund management for diversified investment portfolio",
      features: ["Expert Management", "Diversified Portfolio", "Systematic Investment Plan", "Liquidity Options"],
      link: "/services"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Portfolio Management",
      description: "Personalized investment strategies tailored to your goals",
      features: ["Customized Strategies", "Risk Assessment", "Regular Review", "Expert Advisory"],
      link: "/services"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Tax Planning",
      description: "Optimize your taxes with smart investment planning",
      features: ["Tax Saving Instruments", "ELSS Funds", "PPF Account", "Life Insurance"],
      link: "/services"
    }
  ]

  const wealthServices = [
    {
      title: "Investment Advisory",
      description: "Get expert advice on investment opportunities and market trends",
      icon: <Award className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Risk Assessment",
      description: "Understand your risk profile and invest accordingly",
      icon: <Shield className="w-6 h-6 text-green-600" />
    },
    {
      title: "Financial Planning",
      description: "Comprehensive financial planning for your life goals",
      icon: <Calculator className="w-6 h-6 text-purple-600" />
    }
  ]

  const investmentCalculator = [
    {
      title: "SIP Calculator",
      description: "Calculate returns on your systematic investment plan",
      link: "/emi-calculator"
    },
    {
      title: "FD Calculator",
      description: "Calculate interest earned on fixed deposits",
      link: "/emi-calculator"
    },
    {
      title: "Retirement Calculator",
      description: "Plan your retirement corpus with our calculator",
      link: "/emi-calculator"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wealth Management
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Grow your wealth with our comprehensive investment solutions designed to meet 
            your financial goals and secure your future.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {wealthProducts.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow relative">
              {product.badge && (
                <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  {product.badge}
                </div>
              )}
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {product.icon}
                </div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full">
                  <Link href={product.link}>
                    Explore {product.title}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Choose MNS Wealth Management?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wealthServices.map((service, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Investment Calculators */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Investment Calculators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {investmentCalculator.map((calc, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Calculator className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{calc.title}</CardTitle>
                  <CardDescription>{calc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={calc.link}>
                      Calculate Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Wealth Tips */}
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Wealth Building Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Investment Principles</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Start early and invest regularly</li>
                <li>• Diversify your investment portfolio</li>
                <li>• Invest according to your risk appetite</li>
                <li>• Review and rebalance your portfolio periodically</li>
                <li>• Keep emergency fund separate from investments</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Tax Planning</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Utilize tax-saving investment options</li>
                <li>• Plan investments under Section 80C</li>
                <li>• Consider tax-free bonds and funds</li>
                <li>• Keep track of capital gains tax</li>
                <li>• Consult tax advisor for complex situations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Start Your Wealth Journey Today
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild size="lg" className="w-full">
              <Link href="/contact-us">
                Consult Advisor
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/emi-calculator">
                Calculate Returns
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/services">
                Explore Products
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
