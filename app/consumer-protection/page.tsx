'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, Users, FileText, AlertCircle, CheckCircle, Phone, Mail, Scale, Gavel, BookOpen, HelpCircle, Download } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { downloadFile, DOWNLOAD_FILES, DownloadFileKey } from '@/lib/download'

export default function ConsumerProtectionPage() {
  const { t } = useLanguage()
  
  const handleDownload = async (fileKey: DownloadFileKey) => {
    const success = await downloadFile(DOWNLOAD_FILES[fileKey].filename, DOWNLOAD_FILES[fileKey].displayName)
    if (success) {
      console.log(`${DOWNLOAD_FILES[fileKey].title} downloaded successfully`)
    } else {
      console.error(`Failed to download ${DOWNLOAD_FILES[fileKey].title}`)
    }
  }
  
  const protectionRights = [
    {
      title: "Right to Information",
      description: "Access to complete information about banking products and services",
      details: [
        "Complete product details and terms",
        "Transparent fee structure and charges",
        "Interest rates and calculation methods",
        "Risk factors and product limitations",
        "Terms and conditions in simple language"
      ],
      icon: <FileText className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Right to Fair Treatment",
      description: "Equal and respectful treatment without any discrimination",
      details: [
        "Non-discriminatory practices",
        "Equal access to all banking services",
        "Respect for customer dignity",
        "Fair grievance redressal process",
        "No unfair or deceptive practices"
      ],
      icon: <Users className="w-6 h-6 text-green-600" />
    },
    {
      title: "Right to Privacy",
      description: "Protection of personal and financial information",
      details: [
        "Confidentiality of customer data",
        "Secure data storage and transmission",
        "Limited data sharing with consent",
        "Right to access and correct personal data",
        "Compliance with data protection laws"
      ],
      icon: <Shield className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Right to Grievance Redressal",
      description: "Prompt and fair resolution of complaints and grievances",
      details: [
        "Dedicated complaint redressal mechanism",
        "Timely response to complaints",
        "Fair investigation process",
        "Escalation procedures",
        "Compensation for service failures"
      ],
      icon: <Gavel className="w-6 h-6 text-orange-600" />
    },
    {
      title: "Right to Suitability",
      description: "Products and services suitable to your needs and risk profile",
      details: [
        "Needs-based product recommendations",
        "Risk assessment and profiling",
        "Clear explanation of product features",
        "No mis-selling or inappropriate products",
        "Regular review of product suitability"
      ],
      icon: <CheckCircle className="w-6 h-6 text-yellow-600" />
    },
    {
      title: "Right to Transparency",
      description: "Clear and transparent communication in all dealings",
      details: [
        "Transparent pricing and charges",
        "Clear terms and conditions",
        "No hidden fees or costs",
        "Regular account statements",
        "Clear communication of changes"
      ],
      icon: <BookOpen className="w-6 h-6 text-red-600" />
    }
  ]

  const protectionActs = [
    {
      name: "Consumer Protection Act, 2019",
      description: "Comprehensive legislation for consumer rights protection",
      keyFeatures: [
        "Consumer Rights Council",
        "Product liability provisions",
        "E-commerce regulations",
        "Mediation and dispute resolution",
        "Punitive damages for violations"
      ],
      relevance: "Provides legal framework for protecting consumer interests in banking"
    },
    {
      name: "Banking Regulation Act, 1949",
      description: "Primary legislation governing banking operations in India",
      keyFeatures: [
        "RBI's regulatory powers",
        "Bank licensing requirements",
        "Customer protection provisions",
        "Banking conduct rules",
        "Penalty provisions for violations"
      ],
      relevance: "Establishes legal framework for banking operations and customer protection"
    },
    {
      name: "Information Technology Act, 2000",
      description: "Legal framework for electronic transactions and data protection",
      keyFeatures: [
        "Digital signature validity",
        "Cyber security provisions",
        "Data protection requirements",
        "Electronic record retention",
        "Cyber crime penalties"
      ],
      relevance: "Governs digital banking and online transaction security"
    },
    {
      name: "Payment and Settlement Systems Act, 2007",
      description: "Regulation of payment systems and electronic fund transfers",
      keyFeatures: [
        "Payment system oversight",
        "Electronic fund transfer rules",
        "Consumer protection in payments",
        "Dispute resolution mechanisms",
        "System security requirements"
      ],
      relevance: "Protects consumers in electronic payment transactions"
    }
  ]

  const complaintProcess = [
    {
      step: 1,
      title: "File Complaint",
      description: "Submit your complaint through any available channel",
      channels: ["Branch", "Phone", "Email", "Mobile App", "Website"],
      timeframe: "Immediate"
    },
    {
      step: 2,
      title: "Acknowledgment",
      description: "Receive complaint reference number and initial response",
      channels: ["SMS", "Email", "Phone Call"],
      timeframe: "Within 24 hours"
    },
    {
      step: 3,
      title: "Investigation",
      description: "Thorough investigation of your complaint",
      channels: ["Dedicated Team", "Branch Manager", "Specialist Department"],
      timeframe: "Within 7 days"
    },
    {
      step: 4,
      title: "Resolution",
      description: "Final resolution and communication of outcome",
      channels: ["Written Response", "Phone Call", "Email"],
      timeframe: "Within 30 days"
    }
  ]

  const protectionTips = [
    {
      category: "Account Security",
      tips: [
        "Never share your PIN or password with anyone",
        "Regularly change your online banking password",
        "Enable two-factor authentication",
        "Monitor your account statements regularly",
        "Report suspicious activity immediately"
      ]
    },
    {
      category: "Transaction Safety",
      tips: [
        "Verify merchant details before making payments",
        "Use secure payment methods online",
        "Keep transaction receipts and records",
        "Check for hidden charges in loan agreements",
        "Read terms and conditions carefully"
      ]
    },
    {
      category: "Digital Banking",
      tips: [
        "Use official banking apps and websites",
        "Avoid public WiFi for banking transactions",
        "Keep your devices updated with security patches",
        "Log out after each banking session",
        "Be cautious of phishing attempts"
      ]
    },
    {
      category: "Documentation",
      tips: [
        "Keep copies of all banking documents",
        "Maintain records of transactions and communications",
        "Store documents securely",
        "Review terms before signing agreements",
        "Ask for clarifications on unclear terms"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 rounded-full p-4">
              <Shield className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Consumer Protection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive protection of your rights as a banking consumer
          </p>
        </div>

        {/* Consumer Rights */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Your Fundamental Rights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {protectionRights.map((right, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    {right.icon}
                    <CardTitle className="text-xl">{right.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    {right.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {right.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Protection Acts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Legal Protection Framework
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {protectionActs.map((act, index) => (
              <Card key={index} className="border-l-4 border-green-500">
                <CardHeader>
                  <CardTitle className="text-xl">{act.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {act.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {act.keyFeatures.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 rounded p-3">
                      <p className="text-sm text-blue-800">
                        <strong>Relevance:</strong> {act.relevance}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Complaint Process */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Complaint Redressal Process</CardTitle>
            <CardDescription>
              Step-by-step process for resolving your complaints
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {complaintProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-gray-500">Channels:</p>
                    <div className="flex flex-wrap justify-center gap-1">
                      {step.channels.map((channel, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="text-sm text-green-600 font-medium">
                      {step.timeframe}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Protection Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Consumer Protection Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {protectionTips.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <HelpCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <Phone className="w-6 h-6 text-blue-600" />
                Consumer Helpline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">Toll-Free:</p>
                  <p className="text-lg text-blue-600">1800-123-4567</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">SMS Support:</p>
                  <p className="text-lg text-gray-700">HELP to 5676766</p>
                </div>
                <p className="text-sm text-gray-600">
                  Available: 24/7 for emergency support
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <Mail className="w-6 h-6 text-green-600" />
                Email Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">General Queries:</p>
                  <p className="text-lg text-green-600">support@mnssbank.com</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Complaints:</p>
                  <p className="text-lg text-green-600">complaints@mnssbank.com</p>
                </div>
                <p className="text-sm text-gray-600">
                  Response within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <Gavel className="w-6 h-6 text-purple-600" />
                Legal Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">Consumer Court:</p>
                  <p className="text-lg text-purple-600">1800-123-4568</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Legal Advisor:</p>
                  <p className="text-lg text-gray-700">legal@mnssbank.com</p>
                </div>
                <p className="text-sm text-gray-600">
                  Available: Monday-Friday, 9:00 AM - 6:00 PM
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Links */}
        <Card className="bg-gray-100">
          <CardHeader>
            <CardTitle className="text-xl">External Resources</CardTitle>
            <CardDescription>
              Government and regulatory consumer protection resources
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Government Portals</h3>
                <div className="space-y-2">
                  <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700">
                    National Consumer Helpline
                  </a>
                  <a href="https://ncpc.gov.in" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700">
                    National Consumer Protection Council
                  </a>
                  <a href="https://consumeraffairs.nic.in" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700">
                    Department of Consumer Affairs
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Regulatory Resources</h3>
                <div className="space-y-2">
                  <a href="https://rbi.org.in" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700">
                    Reserve Bank of India - Consumer Education
                  </a>
                  <a href="https://bcsbi.org.in" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700">
                    Banking Codes and Standards Board
                  </a>
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700">
                    RBI Ombudsman Portal
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Resources */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-3">
              <Download className="w-6 h-6 text-blue-600" />
              Download Consumer Protection Guide
            </CardTitle>
            <CardDescription>
              Get your complete consumer protection guide as a downloadable document
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Download our comprehensive guide to consumer rights and protection in banking
              </p>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
                onClick={() => handleDownload('CONSUMER_PROTECTION_GUIDE')}
              >
                <Download className="w-4 h-4" />
                Download Consumer Protection Guide
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <Link href="/rbi-guidelines">
            <Button variant="outline" className="w-full border-gray-600 text-gray-600 hover:bg-gray-50">
              RBI Guidelines
            </Button>
          </Link>
          <Link href="/banking-ombudsman">
            <Button variant="outline" className="w-full border-gray-600 text-gray-600 hover:bg-gray-50">
              Banking Ombudsman
            </Button>
          </Link>
          <Link href="/bcsbi">
            <Button variant="outline" className="w-full border-gray-600 text-gray-600 hover:bg-gray-50">
              BCSBI Code
            </Button>
          </Link>
          <Link href="/security">
            <Button variant="outline" className="w-full border-gray-600 text-gray-600 hover:bg-gray-50">
              Security Center
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
