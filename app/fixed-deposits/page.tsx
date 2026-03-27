'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PiggyBank, TrendingUp, Shield, Users, FileText, Globe, Calculator, CheckCircle, ArrowRight, Award, Target, DollarSign, Clock, Calendar } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

interface FixedDepositFeature {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  link?: string
  badge?: string
}

export default function FixedDepositsPage() {
  const { t } = useLanguage()

  const depositTypes: FixedDepositFeature[] = [
    {
      icon: <PiggyBank className="w-8 h-8 text-blue-600" />,
      title: "Regular Fixed Deposit",
      description: "Secure investment with guaranteed returns for fixed tenure",
      features: ["7.5%* Interest Rate", "Flexible Tenure", "Quarterly Interest Payout", "Auto-Renewal Option"],
      badge: "Most Popular"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Senior Citizen FD",
      description: "Special fixed deposit scheme for senior citizens",
      features: ["8.0%* Interest Rate", "Additional 0.5% for Seniors", "Flexible Tenure", "Tax Benefits"],
      badge: "Best Returns"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Tax Saver FD",
      description: "Save tax under Section 80C with fixed deposits",
      features: ["7.0%* Interest Rate", "5-Year Lock-in", "Tax Benefit up to ₹1.5L", "Deduction under 80C"]
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Cumulative FD",
      description: "Compound interest paid at maturity for maximum returns",
      features: ["7.8%* Effective Rate", "Interest Compounded Quarterly", "Higher Maturity Amount", "Long-Term Growth"]
    }
  ]

  const depositFeatures = [
    {
      icon: <DollarSign className="w-6 h-6 text-blue-600" />,
      title: "High Interest Rates",
      description: "Best-in-market interest rates for your investments"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Safe & Secure",
      description: "Government-backed insurance up to ₹5 Lakhs"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: "Flexible Tenure",
      description: "Choose from 7 days to 10 years as per your needs"
    },
    {
      icon: <Users className="w-6 h-6 text-red-600" />,
      title: "Easy to Start",
      description: "Open FD with just ₹1,000 minimum deposit"
    }
  ]

  const benefits = [
    "Guaranteed returns",
    "Higher interest than savings",
    "Flexible tenure options",
    "Loan against FD facility",
    "Tax benefits available",
    "Auto-renewal facility",
    "Online management",
    "Premature withdrawal option"
  ]

  const eligibility = [
    "Individuals (Resident/NRI)",
    "Minors (through guardians)",
    "Companies and firms",
    "HUF and associations",
    "Trusts and societies",
    "Government organizations"
  ]

  const quickActions = [
    {
      title: "Calculate Returns",
      description: "Estimate your FD maturity amount",
      icon: <Calculator className="w-6 h-6" />,
      link: "/emi-calculator"
    },
    {
      title: "Open FD Account",
      description: "Start your fixed deposit investment",
      icon: <PiggyBank className="w-6 h-6" />,
      link: "/contact-us"
    },
    {
      title: "Compare Rates",
      description: "Find the best FD scheme for you",
      icon: <Target className="w-6 h-6" />,
      link: "/interest-rates"
    },
    {
      title: "Premature Withdrawal",
      description: "Know about withdrawal rules",
      icon: <FileText className="w-6 h-6" />,
      link: "/contact-us"
    }
  ]

  const fdProcess = [
    {
      step: "1",
      title: "Choose Tenure",
      description: "Select your preferred FD tenure from 7 days to 10 years"
    },
    {
      step: "2",
      title: "Deposit Amount",
      description: "Invest minimum ₹1,000 or any amount in multiples of ₹1,000"
    },
    {
      step: "3",
      title: "Complete KYC",
      description: "Submit required documents for account opening"
    },
    {
      step: "4",
      title: "Start Earning",
      description: "Your FD starts earning interest from the day of deposit"
    }
  ]

  const interestRates = [
    { tenure: "7-14 days", rate: "4.50%" },
    { tenure: "15-45 days", rate: "5.50%" },
    { tenure: "46-90 days", rate: "6.00%" },
    { tenure: "91-180 days", rate: "6.50%" },
    { tenure: "181-364 days", rate: "7.00%" },
    { tenure: "1-2 years", rate: "7.25%" },
    { tenure: "2-3 years", rate: "7.50%" },
    { tenure: "3-5 years", rate: "7.75%" },
    { tenure: "5-10 years", rate: "8.00%" }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fixed Deposits
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Secure your savings with our high-yield fixed deposit schemes. 
            Enjoy guaranteed returns, flexible tenure options, and complete safety for your investments.
          </p>
        </div>

        {/* FD Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Fixed Deposit Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {depositTypes.map((deposit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader className="text-center flex-grow">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {deposit.icon}
                  </div>
                  <CardTitle className="text-xl">{deposit.title}</CardTitle>
                  <CardDescription>{deposit.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex flex-col">
                  <div className="space-y-2 flex-grow">
                    {deposit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full mt-auto">
                    <Link href="/contact-us">
                      Invest Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interest Rates */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Interest Rates (per annum)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {interestRates.map((rate, index) => (
              <div key={index} className="flex justify-between items-center bg-white p-3 rounded-lg">
                <span className="text-gray-700 font-medium">{rate.tenure}</span>
                <span className="text-green-600 font-bold text-lg">{rate.rate}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">*Rates are indicative and subject to change</p>
        </div>

        {/* FD Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Choose MNS Fixed Deposits?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {depositFeatures.map((feature, index) => (
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
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Fixed Deposit Benefits
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

        {/* FD Process */}
        <div className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How to Open Fixed Deposit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fdProcess.map((process, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
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
        <div className="bg-orange-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Who Can Open Fixed Deposit?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">Eligible Applicants</h3>
              <ul className="space-y-2 text-gray-700">
                {eligibility.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Required Documents</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>PAN Card</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Aadhaar Card</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Address Proof</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Photograph</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Bank Account Details</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-indigo-50 rounded-lg p-8 mb-12">
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
            Start Investing in Fixed Deposits Today
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild size="lg" className="w-full">
              <Link href="/contact-us">
                Open FD Account
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/emi-calculator">
                Calculate Returns
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
