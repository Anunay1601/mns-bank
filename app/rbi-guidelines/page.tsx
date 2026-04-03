'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Shield, AlertCircle, CheckCircle, Download, ExternalLink, Scale, Gavel } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { downloadFile, DOWNLOAD_FILES, DownloadFileKey } from '@/lib/download'

export default function RBIGuidelinesPage() {
  const { t } = useLanguage()
  
  const handleDownload = async (fileKey: DownloadFileKey) => {
    const success = await downloadFile(DOWNLOAD_FILES[fileKey].filename, DOWNLOAD_FILES[fileKey].displayName)
    if (success) {
      // You could show a success toast here
      console.log(`${DOWNLOAD_FILES[fileKey].title} downloaded successfully`)
    } else {
      // You could show an error toast here
      console.error(`Failed to download ${DOWNLOAD_FILES[fileKey].title}`)
    }
  }
  
  const guidelines = [
    {
      title: "Know Your Customer (KYC) Guidelines",
      description: "RBI guidelines for customer identification and verification",
      category: "Customer Protection",
      lastUpdated: "March 2024",
      importance: "High",
      summary: "Mandatory customer identification procedures for all banking transactions"
    },
    {
      title: "Anti-Money Laundering (AML) Standards",
      description: "Prevention of money laundering and terrorist financing activities",
      category: "Compliance",
      lastUpdated: "February 2024",
      importance: "Critical",
      summary: "Framework for detecting and preventing financial crimes"
    },
    {
      title: "Digital Banking Guidelines",
      description: "Regulations for digital payment systems and online banking",
      category: "Digital Banking",
      lastUpdated: "January 2024",
      importance: "High",
      summary: "Security and operational standards for digital banking services"
    },
    {
      title: "Interest Rate Guidelines",
      description: "Regulations on lending rates and deposit interest",
      category: "Banking Operations",
      lastUpdated: "December 2023",
      importance: "Medium",
      summary: "Fair practices for interest rate setting and disclosure"
    },
    {
      title: "Customer Service Standards",
      description: "Minimum standards for customer service and grievance redressal",
      category: "Customer Protection",
      lastUpdated: "November 2023",
      importance: "High",
      summary: "Service quality benchmarks and complaint handling procedures"
    },
    {
      title: "Data Protection Guidelines",
      description: "Privacy and security of customer data and information",
      category: "Data Security",
      lastUpdated: "October 2023",
      importance: "Critical",
      summary: "Framework for protecting customer information and privacy"
    }
  ]

  const complianceAreas = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation frameworks",
      items: ["Credit Risk", "Market Risk", "Operational Risk", "Liquidity Risk"]
    },
    {
      icon: <Scale className="w-8 h-8 text-green-600" />,
      title: "Corporate Governance",
      description: "Board composition and management practices",
      items: ["Board Structure", "Audit Committees", "Fit & Proper Criteria", "Disclosure Norms"]
    },
    {
      icon: <Gavel className="w-8 h-8 text-purple-600" />,
      title: "Regulatory Compliance",
      description: "Adherence to all applicable banking regulations",
      items: ["Statutory Compliance", "Reporting Requirements", "Audit Compliance", "Legal Framework"]
    }
  ]

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'Critical': return 'text-red-600 bg-red-50'
      case 'High': return 'text-orange-600 bg-orange-50'
      case 'Medium': return 'text-yellow-600 bg-yellow-50'
      default: return 'text-green-600 bg-green-50'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            RBI Guidelines & Regulations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive information on Reserve Bank of India guidelines that govern MNS Bank operations
          </p>
        </div>

        {/* Important Notice */}
        <Card className="bg-blue-50 border-blue-200 mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800 flex items-center gap-3">
              <AlertCircle className="w-6 h-6" />
              Regulatory Compliance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              MNS Bank is fully compliant with all RBI guidelines and regulations. We regularly update our 
              policies and procedures to align with the latest regulatory requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">100%</div>
                <div className="text-sm text-gray-600">RBI Compliance Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">24/7</div>
                <div className="text-sm text-gray-600">Regulatory Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">0</div>
                <div className="text-sm text-gray-600">Regulatory Penalties</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {guidelines.map((guideline, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg">{guideline.title}</CardTitle>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImportanceColor(guideline.importance)}`}>
                    {guideline.importance}
                  </span>
                </div>
                <CardDescription className="text-gray-600">
                  {guideline.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Category:</span>
                    <span className="font-medium text-gray-900">{guideline.category}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Last Updated:</span>
                    <span className="font-medium text-gray-900">{guideline.lastUpdated}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      {guideline.summary}
                    </p>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      className="flex items-center gap-1"
                      onClick={() => handleDownload('RBI_GUIDELINES')}
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compliance Areas */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Key Compliance Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {complianceAreas.map((area, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-3">
                    {area.icon}
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Updates */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Recent RBI Circulars</CardTitle>
            <CardDescription>
              Latest guidelines and circulars from the Reserve Bank of India
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Guidelines on Digital Lending
                    </h3>
                    <p className="text-sm text-gray-600">
                      Framework for digital lending platforms and fintech partnerships
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">March 15, 2024</span>
                </div>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Cyber Security Framework
                    </h3>
                    <p className="text-sm text-gray-600">
                      Enhanced security measures for banking systems and customer data
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">March 1, 2024</span>
                </div>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      UPI Transaction Limits
                    </h3>
                    <p className="text-sm text-gray-600">
                      Revised limits and security measures for UPI transactions
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">February 20, 2024</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-gray-100">
          <CardHeader>
            <CardTitle className="text-xl">Regulatory Compliance Contact</CardTitle>
            <CardDescription>
              For any queries regarding RBI guidelines and regulatory compliance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Compliance Officer</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Email: compliance@mnssbank.com</p>
                  <p>Phone: 1800-123-4568</p>
                  <p>Available: Monday-Friday, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">RBI Liaison</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Email: rbi.liaison@mnssbank.com</p>
                  <p>Phone: 1800-123-4569</p>
                  <p>Available: Monday-Saturday, 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
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
          <Link href="/consumer-protection">
            <Button variant="outline" className="w-full border-gray-600 text-gray-600 hover:bg-gray-50">
              Consumer Protection
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
