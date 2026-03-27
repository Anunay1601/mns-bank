'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FileText, CreditCard, Home, GraduationCap, Briefcase, Calculator, Users, Shield, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

interface ApplicationType {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  link: string
  badge?: string
}

export default function ApplicationPage() {
  const { t } = useLanguage()

  const applicationTypes: ApplicationType[] = [
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Personal Loan",
      description: "Quick personal loans for all your financial needs",
      features: ["Up to ₹25 Lakhs", "5-minute approval", "No collateral", "Flexible EMI"],
      link: "/personal-loan",
      badge: "Instant"
    },
    {
      icon: <Home className="w-8 h-8 text-green-600" />,
      title: "Home Loan",
      description: "Affordable home loans to build your dream house",
      features: ["Up to ₹5 Crores", "Interest from 8.5%*", "Flexible tenure", "Quick approval"],
      link: "/home-loan",
      badge: "Popular"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      title: "Education Loan",
      description: "Invest in your future with education financing",
      features: ["Study in India/Abroad", "Moratorium period", "Tax benefits", "Easy repayment"],
      link: "/education-loan"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-red-600" />,
      title: "Credit Card",
      description: "Premium credit cards with exclusive benefits",
      features: ["Cashback offers", "Reward points", "Lounge access", "Fuel surcharge waiver"],
      link: "/credit-cards"
    }
  ]

  const applicationSteps = [
    {
      step: "1",
      title: "Choose Product",
      description: "Select the loan or card product that suits your needs"
    },
    {
      step: "2",
      title: "Fill Application",
      description: "Complete the application form with your details"
    },
    {
      step: "3",
      title: "Submit Documents",
      description: "Upload required documents for verification"
    },
    {
      step: "4",
      title: "Get Approval",
      description: "Receive instant approval and disbursement"
    }
  ]

  const requiredDocuments = [
    {
      category: "Identity Proof",
      documents: ["PAN Card", "Aadhaar Card", "Voter ID", "Driving License", "Passport"]
    },
    {
      category: "Address Proof",
      documents: ["Utility Bills", "Bank Statement", "Rent Agreement", "Property Tax Receipt"]
    },
    {
      category: "Income Proof",
      documents: ["Salary Slips", "Form 16", "IT Returns", "Bank Statement", "Business Proof"]
    },
    {
      category: "Other Documents",
      documents: ["Photograph", "Signature", "Bank Account Details", "KYC Form"]
    }
  ]

  const eligibilityCriteria = [
    {
      product: "Personal Loan",
      criteria: ["Age: 21-60 years", "Minimum Income: ₹15,000/month", "Work Experience: 1 year", "Credit Score: 650+"]
    },
    {
      product: "Home Loan",
      criteria: ["Age: 21-65 years", "Minimum Income: ₹25,000/month", "Work Experience: 2 years", "Credit Score: 700+"]
    },
    {
      product: "Education Loan",
      criteria: ["Student Age: 16-35 years", "Parent/Guardian Required", "Admission Confirmed", "Co-applicant Required"]
    },
    {
      product: "Credit Card",
      criteria: ["Age: 21-65 years", "Minimum Income: ₹18,000/month", "Good Credit History", "Employment Stable"]
    }
  ]

  const quickActions = [
    {
      title: "Check Eligibility",
      description: "Find out if you qualify for our products",
      icon: <Calculator className="w-6 h-6" />,
      link: "/emi-calculator"
    },
    {
      title: "Calculate EMI",
      description: "Estimate your monthly payments",
      icon: <Calculator className="w-6 h-6" />,
      link: "/emi-calculator"
    },
    {
      title: "Track Application",
      description: "Check your application status",
      icon: <FileText className="w-6 h-6" />,
      link: "/contact-us"
    },
    {
      title: "Get Help",
      description: "Speak to our application experts",
      icon: <Phone className="w-6 h-6" />,
      link: "/contact-us"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Apply Now
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quick and easy online application process for all our banking products. 
            Get instant approval and fast disbursement with minimal documentation.
          </p>
        </div>

        {/* Application Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Choose Your Product
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationTypes.map((app, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader className="text-center flex-grow">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {app.icon}
                  </div>
                  <CardTitle className="text-xl">{app.title}</CardTitle>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex flex-col">
                  <div className="space-y-2 flex-grow">
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full mt-auto">
                    <Link href={app.link}>
                      Apply Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Application Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationSteps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Required Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requiredDocuments.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.documents.map((doc, docIndex) => (
                      <div key={docIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{doc}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Eligibility Criteria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eligibilityCriteria.map((eligibility, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{eligibility.product}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {eligibility.criteria.map((criterion, criterionIndex) => (
                      <div key={criterionIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{criterion}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-orange-50 rounded-lg p-8 mb-12">
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

        {/* Contact Support */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Need Help with Your Application?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <CardTitle>Call Us</CardTitle>
                <CardDescription>1800-123-4567</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Mail className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <CardTitle>Email Us</CardTitle>
                <CardDescription>apply@mnsbank.com</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <CardTitle>Visit Branch</CardTitle>
                <CardDescription>Find nearest branch</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Start Your Application Today
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild size="lg" className="w-full">
              <Link href="/personal-loan">
                Apply for Personal Loan
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/emi-calculator">
                Check Eligibility
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/contact-us">
                Get Expert Help
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
