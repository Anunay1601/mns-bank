'use client'

import { Shield, Smartphone, Globe, CreditCard, FileText, Users, Clock, ArrowRight, CheckCircle, Lock, Eye, AlertTriangle, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  link: string
  badge?: string
}

export default function ServicesPage() {
  const { t } = useLanguage()

  const digitalServices: Service[] = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Mobile Banking",
      description: "Online banking on the go",
      features: ["24/7 Access", "Fund Transfer", "Bill Payment", "Mobile Recharge"],
      link: "/mobile-banking"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Internet Banking",
      description: "Complete banking solutions at your fingertips",
      features: ["Account Management", "Online Payments", "Investment Services", "Tax Payments"],
      link: "/internet-banking"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-purple-600" />,
      title: "Card Services",
      description: "Wide range of debit and credit cards",
      features: ["Debit Cards", "Credit Cards", "Contactless Payments", "International Cards"],
      link: "/credit-cards"
    },
    {
      icon: <FileText className="w-8 h-8 text-red-600" />,
      title: "Bill Payments",
      description: "Pay all your bills conveniently",
      features: ["Utility Bills", "Credit Card Bills", "Loan EMIs", "Insurance Premiums"],
      link: "/contact-us"
    }
  ]

  const valueAddedServices = [
    {
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      title: "Safe Deposit Lockers",
      description: "Secure storage for your valuables",
      features: ["Various Sizes", "High Security", "Easy Access", "Annual Rental"],
      link: "/contact-us"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-teal-600" />,
      title: "Investment Services",
      description: "Grow your wealth with smart investments",
      features: ["Mutual Funds", "Insurance", "Tax Planning", "Portfolio Management"],
      link: "/interest-rates"
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "NRI Services",
      description: "Specialized services for NRIs",
      features: ["NRE/NRO Accounts", "Foreign Exchange", "Remittances", "Investments"],
      link: "/contact-us"
    },
    {
      icon: <Clock className="w-8 h-8 text-pink-600" />,
      title: "24/7 Banking",
      description: "Bank anytime, anywhere",
      features: ["ATM Services", "Phone Banking", "Email Support", "Chat Support"],
      link: "/contact-us"
    }
  ]

  const serviceFeatures = [
    {
      title: "Secure & Safe",
      description: "Bank with confidence using our secure platforms",
      icon: <Shield className="w-6 h-6 text-blue-600" />
    },
    {
      title: "24/7 Availability",
      description: "Access our services round the clock",
      icon: <Clock className="w-6 h-6 text-green-600" />
    },
    {
      title: "User Friendly",
      description: "Simple and intuitive banking experience",
      icon: <Users className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Instant Transactions",
      description: "Real-time processing of all transactions",
      icon: <TrendingUp className="w-6 h-6 text-orange-600" />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of banking services designed to make your 
            financial life simpler, smarter, and more convenient.
          </p>
        </div>

        {/* Digital Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Digital Banking Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow relative">
                {service.badge && (
                  <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    {service.badge}
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full">
                    <Link href={service.link}>
                      Explore {service.title}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Value Added Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Value Added Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueAddedServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={service.link}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Access */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Quick Access to Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button asChild size="lg" className="w-full">
              <Link href="/mobile-banking">
                <Smartphone className="w-5 h-5 mr-2" />
                Mobile Banking
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/internet-banking">
                <Globe className="w-5 h-5 mr-2" />
                Internet Banking
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/credit-cards">
                <CreditCard className="w-5 h-5 mr-2" />
                Apply for Cards
              </Link>
            </Button>
          </div>
        </div>

        {/* Security Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600" />
              Security & Safety
            </CardTitle>
            <CardDescription>
              Your security is our top priority. Learn how to bank safely.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Security Features</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Two-factor authentication
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    End-to-end encryption
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Real-time fraud detection
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Secure login protocols
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Safety Tips</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Never share your password
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Use official apps only
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Report suspicious activity
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Keep contact info updated
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-6">
              <Button asChild>
                <Link href="/contact-us">
                  Learn More About Security
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
