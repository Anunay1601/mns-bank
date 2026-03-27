'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Briefcase, TrendingUp, Building2, CreditCard, Shield, Users, FileText, Globe, Calculator, CheckCircle, ArrowRight, Award, Target, DollarSign } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

interface LoanFeature {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  link?: string
  badge?: string
}

export default function BusinessLoanPage() {
  const { t } = useLanguage()

  const loanTypes: LoanFeature[] = [
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Working Capital Loan",
      description: "Meet your day-to-day business financial needs",
      features: ["Flexible Repayment", "Quick Disbursement", "Competitive Interest", "Minimal Documentation"]
    },
    {
      icon: <Building2 className="w-8 h-8 text-green-600" />,
      title: "Machinery Loan",
      description: "Finance your business equipment and machinery",
      features: ["Up to 80% Funding", "Long Tenure", "Tax Benefits", "Easy EMI Options"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Term Loan",
      description: "Long-term financing for business expansion",
      features: ["Flexible Tenure", "High Loan Amount", "Competitive Rates", "Simple Process"]
    },
    {
      icon: <CreditCard className="w-8 h-8 text-red-600" />,
      title: "Collateral Free Loan",
      description: "Business loans without collateral requirements",
      features: ["No Collateral Required", "Quick Approval", "Digital Process", "MSME Focus"]
    }
  ]

  const loanFeatures = [
    {
      icon: <DollarSign className="w-6 h-6 text-blue-600" />,
      title: "Competitive Interest Rates",
      description: "Best-in-market interest rates for business loans"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Flexible Repayment",
      description: "Customized repayment options as per your business cash flow"
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-600" />,
      title: "Minimal Documentation",
      description: "Simple and quick documentation process"
    },
    {
      icon: <Users className="w-6 h-6 text-red-600" />,
      title: "Expert Guidance",
      description: "Dedicated relationship manager for loan assistance"
    }
  ]

  const benefits = [
    "Quick loan approval",
    "Flexible repayment options",
    "Competitive interest rates",
    "High loan amounts",
    "Minimal documentation",
    "Doorstep service",
    "Online application",
    "Transparent process"
  ]

  const eligibility = [
    "Business vintage of at least 2 years",
    "Minimum annual turnover as per loan type",
    "Good credit history and CIBIL score",
    "Valid business registration",
    "Financial statements for last 2 years",
    "KYC documents of business owners"
  ]

  const quickActions = [
    {
      title: "Apply Now",
      description: "Start your business loan application",
      icon: <Briefcase className="w-6 h-6" />,
      link: "/contact-us"
    },
    {
      title: "Calculate EMI",
      description: "Estimate your loan EMI and eligibility",
      icon: <Calculator className="w-6 h-6" />,
      link: "/emi-calculator"
    },
    {
      title: "Check Eligibility",
      description: "Find out if you qualify for business loans",
      icon: <Target className="w-6 h-6" />,
      link: "/emi-calculator"
    },
    {
      title: "Document Checklist",
      description: "View required documents for loan application",
      icon: <FileText className="w-6 h-6" />,
      link: "/contact-us"
    }
  ]

  const loanProcess = [
    {
      step: "1",
      title: "Application",
      description: "Submit your loan application online or at branch"
    },
    {
      step: "2", 
      title: "Documentation",
      description: "Provide required business and financial documents"
    },
    {
      step: "3",
      title: "Verification",
      description: "Our team verifies your documents and business details"
    },
    {
      step: "4",
      title: "Approval",
      description: "Get loan approval and disbursement to your account"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Business Loans
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fuel your business growth with our comprehensive business loan solutions. 
            Get quick approval, competitive rates, and flexible repayment terms tailored to your business needs.
          </p>
        </div>

        {/* Loan Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Business Loan Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader className="text-center flex-grow">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {loan.icon}
                  </div>
                  <CardTitle className="text-xl">{loan.title}</CardTitle>
                  <CardDescription>{loan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex flex-col">
                  <div className="space-y-2 flex-grow">
                    {loan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full mt-auto">
                    <Link href="/contact-us">
                      Apply Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Loan Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Loan Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanFeatures.map((feature, index) => (
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
            Why Choose MNS Business Loans?
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

        {/* Loan Process */}
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Loan Application Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanProcess.map((process, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {process.step}
                  </div>
                  <CardTitle className="text-lg">{process.title}</CardTitle>
                  <CardDescription>{process.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Eligibility */}
        <div className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Eligibility Criteria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">Basic Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                {eligibility.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Business Types Eligible</h3>
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
                  <span>Manufacturing Units</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Service Providers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-orange-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader className="flex-grow">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {action.icon}
                  </div>
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                  <CardDescription>{action.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
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
            Grow Your Business with Our Loans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild size="lg" className="w-full">
              <Link href="/contact-us">
                Apply for Loan
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/emi-calculator">
                Calculate EMI
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/contact-us">
                Talk to Expert
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
