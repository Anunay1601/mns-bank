'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Globe, Smartphone, Shield, Clock, Users, FileText, CreditCard, TrendingUp, Lock, Eye, AlertTriangle, ArrowRight, CheckCircle, Download, QrCode } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

interface InternetBankingFeature {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  link?: string
  badge?: string
}

export default function InternetBankingPage() {
  const { t } = useLanguage()

  const coreFeatures: InternetBankingFeature[] = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Account Management",
      description: "Complete control over your accounts online",
      features: ["Check Balance", "View Statements", "Account Summary", "Transaction History"]
    },
    {
      icon: <CreditCard className="w-8 h-8 text-green-600" />,
      title: "Fund Transfer",
      description: "Seamless money transfer services",
      features: ["IMPS", "NEFT", "RTGS", "UPI Transfers"]
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      title: "Bill Payments",
      description: "Pay bills conveniently from anywhere",
      features: ["Utility Bills", "Credit Card Bills", "Loan EMIs", "Insurance Premiums"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-600" />,
      title: "Investment Services",
      description: "Grow your wealth with online investments",
      features: ["Mutual Funds", "Fixed Deposits", "Recurring Deposits", "Tax Saving Instruments"]
    }
  ]

  const securityFeatures = [
    {
      icon: <Lock className="w-6 h-6 text-blue-600" />,
      title: "Secure Login",
      description: "Multi-factor authentication for enhanced security"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Encryption",
      description: "End-to-end encryption of all transactions"
    },
    {
      icon: <Eye className="w-6 h-6 text-purple-600" />,
      title: "Transaction Monitoring",
      description: "Real-time fraud detection and alerts"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
      title: "Security Alerts",
      description: "Instant notifications for suspicious activities"
    }
  ]

  const mobileAppFeatures = [
    {
      icon: <Smartphone className="w-8 h-8 text-orange-600" />,
      title: "Mobile Banking App",
      description: "Bank on the go with our mobile application",
      features: ["Balance Check", "Fund Transfer", "Bill Payments", "QR Code Payments"],
      link: "/emi-calculator"
    },
    {
      icon: <QrCode className="w-8 h-8 text-teal-600" />,
      title: "UPI & QR Payments",
      description: "Scan and pay with UPI and QR codes",
      features: ["UPI ID", "QR Code Scan", "PhonePe", "Google Pay Integration"]
    },
    {
      icon: <Download className="w-8 h-8 text-indigo-600" />,
      title: "e-Statements",
      description: "Access your statements digitally",
      features: ["Monthly Statements", "Tax Certificates", "Interest Certificates", "Download PDF"]
    }
  ]

  const quickActions = [
    {
      title: "Check Account Balance",
      description: "View your account balance instantly",
      icon: <Globe className="w-6 h-6" />,
      link: "/savings-account"
    },
    {
      title: "Transfer Funds",
      description: "Send money to any account",
      icon: <CreditCard className="w-6 h-6" />,
      link: "/emi-calculator"
    },
    {
      title: "Pay Bills",
      description: "Pay your utility and other bills",
      icon: <FileText className="w-6 h-6" />,
      link: "/services"
    },
    {
      title: "Download Statement",
      description: "Get your account statements",
      icon: <Download className="w-6 h-6" />,
      link: "/savings-account"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Internet Banking
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the convenience of banking from anywhere, anytime with our secure 
            and user-friendly internet banking platform.
          </p>
        </div>

        {/* Core Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Core Banking Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow relative">
                {feature.badge && (
                  <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    {feature.badge}
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  {feature.link && (
                    <Button asChild className="w-full">
                      <Link href={feature.link}>
                        Explore {feature.title}
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Security & Safety
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
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

        {/* Mobile App Integration */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Mobile Banking Integration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mobileAppFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  {feature.link && (
                    <Button asChild variant="outline" className="w-full">
                      <Link href={feature.link}>
                        Learn More
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {action.icon}
                  </div>
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                  <CardDescription>{action.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={action.link}>
                      Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Getting Started with Internet Banking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Registration Process</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">1</div>
                  <span>Visit your nearest branch with valid ID proof</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">2</div>
                  <span>Fill the Internet Banking registration form</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">3</div>
                  <span>Receive your User ID and Password</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">4</div>
                  <span>Login and change your password for security</span>
                </li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Login Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Active bank account with MNS Bank</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Registered mobile number</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Valid email address</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Internet connection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Start Banking Online Today
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild size="lg" className="w-full">
              <Link href="/contact-us">
                Register Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/contact-us">
                Demo Request
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/contact-us">
                Customer Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
