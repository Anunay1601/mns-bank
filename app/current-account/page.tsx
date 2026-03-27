'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Building2, CreditCard, TrendingUp, Shield, Users, FileText, Globe, Smartphone, CheckCircle, ArrowRight, Calculator, Award, Target } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

interface AccountFeature {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  link?: string
  badge?: string
}

export default function CurrentAccountPage() {
  const { t } = useLanguage()

  const accountTypes: AccountFeature[] = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      title: "Regular Current Account",
      description: "Standard current account for everyday business needs",
      features: ["No Minimum Balance", "Free Cheque Book", "Online Banking", "Mobile Banking"]
    },
    {
      icon: <CreditCard className="w-8 h-8 text-green-600" />,
      title: "Premium Current Account",
      description: "Enhanced features for growing businesses",
      features: ["Higher Transaction Limits", "Dedicated Relationship Manager", "Free Demand Drafts", "Priority Banking"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Startup Current Account",
      description: "Special account for startups and entrepreneurs",
      features: ["Zero Balance for 6 Months", "Free NEFT/RTGS", "Business Advisory", "Networking Events"]
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Corporate Current Account",
      description: "Comprehensive banking for large corporations",
      features: ["Multi-User Access", "Customized Solutions", "Trade Finance", "Treasury Services"]
    }
  ]

  const coreFeatures = [
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: "24/7 Banking",
      description: "Access your account anytime through internet and mobile banking"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-green-600" />,
      title: "Mobile Banking",
      description: "Complete banking solutions on your smartphone"
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-600" />,
      title: "Online Payments",
      description: "Make payments and transfers conveniently online"
    },
    {
      icon: <Shield className="w-6 h-6 text-red-600" />,
      title: "Secure Banking",
      description: "Advanced security features to protect your account"
    }
  ]

  const benefits = [
    "High transaction limits",
    "Free NEFT/RTGS transactions",
    "Online and mobile banking",
    "Dedicated relationship manager",
    "Customized solutions",
    "Competitive interest rates",
    "Easy account opening",
    "Complete documentation support"
  ]

  const quickActions = [
    {
      title: "Open Account",
      description: "Start your business banking journey",
      icon: <Building2 className="w-6 h-6" />,
      link: "/contact-us"
    },
    {
      title: "Calculate Charges",
      description: "Estimate your banking charges",
      icon: <Calculator className="w-6 h-6" />,
      link: "/emi-calculator"
    },
    {
      title: "Compare Features",
      description: "Find the right account for your business",
      icon: <Target className="w-6 h-6" />,
      link: "/business"
    },
    {
      title: "Contact Support",
      description: "Get help from our banking experts",
      icon: <Users className="w-6 h-6" />,
      link: "/contact-us"
    }
  ]

  const eligibility = [
    "Business entity (Proprietorship, Partnership, Company, LLP)",
    "Valid business registration documents",
    "PAN card of the business",
    "KYC documents of authorized signatories",
    "Proof of business address",
    "Identity and address proof of partners/directors"
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Current Account
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Streamline your business operations with our feature-rich current accounts. 
            Enjoy high transaction limits, digital banking, and dedicated support for your business needs.
          </p>
        </div>

        {/* Account Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Choose Your Current Account
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accountTypes.map((account, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader className="text-center flex-grow">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {account.icon}
                  </div>
                  <CardTitle className="text-xl">{account.title}</CardTitle>
                  <CardDescription>{account.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex flex-col">
                  <div className="space-y-2 flex-grow">
                    {account.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full mt-auto">
                    <Link href="/contact-us">
                      Open Account
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Core Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => (
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

        {/* Benefits */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose MNS Current Account?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility */}
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Eligibility Criteria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">Required Documents</h3>
              <ul className="space-y-2 text-gray-700">
                {eligibility.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Account Types Eligible</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Sole Proprietorship</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Partnership Firm</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Private Limited Company</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Limited Liability Partnership (LLP)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Public Limited Company</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Trusts and Societies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-purple-50 rounded-lg p-8 mb-12">
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

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Open Your Current Account Today
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild size="lg" className="w-full">
              <Link href="/contact-us">
                Open Account Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/contact-us">
                Schedule Appointment
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/contact-us">
                Request Callback
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
