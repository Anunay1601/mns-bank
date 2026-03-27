'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Smartphone, Globe, Shield, Clock, Users, FileText, CreditCard, TrendingUp, Lock, Eye, AlertTriangle, ArrowRight, CheckCircle, Download, QrCode, MessageSquare, Camera, Wifi, Settings } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

interface MobileBankingFeature {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  link?: string
  badge?: string
}

export default function MobileBankingPage() {
  const { t } = useLanguage()

  const coreFeatures: MobileBankingFeature[] = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Account Access",
      description: "Access your accounts anytime, anywhere",
      features: ["Check Balance", "View Mini Statement", "Account Details", "Transaction History"]
    },
    {
      icon: <CreditCard className="w-8 h-8 text-green-600" />,
      title: "Fund Transfer",
      description: "Instant money transfer at your fingertips",
      features: ["IMPS", "NEFT", "RTGS", "UPI Transfers"]
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      title: "Bill Payments",
      description: "Pay bills conveniently on mobile",
      features: ["Utility Bills", "Credit Card Bills", "Loan EMIs", "Insurance Premiums"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-600" />,
      title: "Recharge Services",
      description: "Recharge and pay for various services",
      features: ["Mobile Recharge", "DTH Recharge", "Data Card Recharge", "Fastag Recharge"]
    }
  ]

  const appFeatures = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Secure Login",
      description: "Multiple authentication options"
    },
    {
      icon: <QrCode className="w-6 h-6 text-green-600" />,
      title: "QR Payments",
      description: "Scan and pay instantly"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-600" />,
      title: "Chat Support",
      description: "24/7 customer support via chat"
    },
    {
      icon: <Camera className="w-6 h-6 text-red-600" />,
      title: "Document Upload",
      description: "Upload documents using camera"
    }
  ]

  const paymentServices = [
    {
      icon: <QrCode className="w-8 h-8 text-orange-600" />,
      title: "UPI Payments",
      description: "Unified Payments Interface",
      features: ["Send Money", "Receive Money", "QR Code Scan", "UPI ID Creation"],
      link: "/emi-calculator"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-teal-600" />,
      title: "Card Services",
      description: "Manage your cards on mobile",
      features: ["Block Card", "Request New Card", "Set Limits", "View Transactions"],
      link: "/credit-cards"
    },
    {
      icon: <Wifi className="w-8 h-8 text-indigo-600" />,
      title: "Contactless Payments",
      description: "Tap and pay with NFC",
      features: ["NFC Payments", "Tap to Pay", "Merchant Payments", "Transaction Limits"]
    }
  ]

  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: "Advanced Security",
      description: "Multi-layer security protection",
      features: ["Biometric Login", "Two-Factor Authentication", "Session Timeout", "Secure PIN"]
    },
    {
      icon: <Eye className="w-8 h-8 text-green-600" />,
      title: "Transaction Monitoring",
      description: "Real-time tracking of all activities",
      features: ["Instant Alerts", "Transaction History", "Suspicious Activity Detection", "Account Monitoring"]
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-600" />,
      title: "Privacy Controls",
      description: "Control your data and privacy",
      features: ["Data Encryption", "Privacy Settings", "Permission Control", "Secure Backup"]
    }
  ]

  const quickActions = [
    {
      title: "Check Balance",
      description: "View your account balance instantly",
      icon: <Globe className="w-6 h-6" />,
      link: "/savings-account"
    },
    {
      title: "Send Money",
      description: "Transfer money to anyone",
      icon: <CreditCard className="w-6 h-6" />,
      link: "/emi-calculator"
    },
    {
      title: "Pay Bills",
      description: "Pay your bills instantly",
      icon: <FileText className="w-6 h-6" />,
      link: "/services"
    },
    {
      title: "Recharge Mobile",
      description: "Recharge your mobile phone",
      icon: <Smartphone className="w-6 h-6" />,
      link: "/emi-calculator"
    }
  ]

  const appBenefits = [
    "Bank anytime, anywhere",
    "Instant fund transfers",
    "Secure transactions",
    "User-friendly interface",
    "Real-time notifications",
    "Multiple language support",
    "Biometric authentication",
    "24/7 customer support"
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mobile Banking
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the future of banking with our secure and convenient mobile banking app. 
            Manage your finances on the go with just a few taps.
          </p>
        </div>

        {/* Core Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Core Banking Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => (
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

        {/* App Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            App Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appFeatures.map((feature, index) => (
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

        {/* Payment Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Payment Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentServices.map((service, index) => (
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
                    {service.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  {service.link && (
                    <Button asChild variant="outline" className="w-full">
                      <Link href={service.link}>
                        Learn More
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
            Security & Protection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
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

        {/* App Benefits */}
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Our Mobile Banking App?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {appBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <div className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Getting Started
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Download & Install</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">1</div>
                  <span>Download from App Store or Google Play Store</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">2</div>
                  <span>Install the app on your smartphone</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">3</div>
                  <span>Open the app and register with your account</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">4</div>
                  <span>Set up your PIN and start banking</span>
                </li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Android 5.0+ or iOS 10.0+</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Active internet connection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Valid bank account</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Registered mobile number</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Start Mobile Banking Today
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild size="lg" className="w-full">
              <Link href="/contact-us">
                Download App
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/contact-us">
                Request Demo
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/contact-us">
                Get Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
