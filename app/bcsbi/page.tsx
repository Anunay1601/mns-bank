'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Shield, Users, CheckCircle, AlertCircle, Download, Star, Award, Scale } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { downloadFile, DOWNLOAD_FILES, DownloadFileKey } from '@/lib/download'

export default function BCSBICodePage() {
  const { t } = useLanguage()
  
  const handleDownload = async (fileKey: DownloadFileKey) => {
    const success = await downloadFile(DOWNLOAD_FILES[fileKey].filename, DOWNLOAD_FILES[fileKey].displayName)
    if (success) {
      console.log(`${DOWNLOAD_FILES[fileKey].title} downloaded successfully`)
    } else {
      console.error(`Failed to download ${DOWNLOAD_FILES[fileKey].title}`)
    }
  }
  
  const codePrinciples = [
    {
      title: "Principle I: Integrity and Fairness",
      description: "Banks shall deal with customers fairly, honestly and transparently",
      commitment: "We commit to complete transparency in all our dealings with customers",
      examples: [
        "Clear and transparent pricing",
        "Fair treatment of all customers",
        "No hidden charges or fees",
        "Honest communication of product features"
      ]
    },
    {
      title: "Principle II: Transparency",
      description: "Banks shall provide clear and transparent information to customers",
      commitment: "All product terms, conditions, and charges are clearly communicated",
      examples: [
        "Detailed product information",
        "Clear fee structure",
        "Transparent interest rates",
        "Complete terms and conditions"
      ]
    },
    {
      title: "Principle III: Right to Privacy",
      description: "Banks shall respect customer privacy and confidentiality",
      commitment: "Customer information is protected with utmost care and used only for legitimate purposes",
      examples: [
        "Data protection policies",
        "Confidential customer information",
        "Secure data storage",
        "Limited data sharing"
      ]
    },
    {
      title: "Principle IV: Right to Fair Treatment",
      description: "Banks shall treat all customers fairly and without discrimination",
      commitment: "Equal treatment for all customers regardless of background or status",
      examples: [
        "Non-discriminatory practices",
        "Equal opportunity services",
        "Fair grievance redressal",
        "Respect for customer dignity"
      ]
    },
    {
      title: "Principle V: Right to Suitability",
      description: "Banks shall offer products suitable to customer needs",
      commitment: "Products recommended based on thorough assessment of customer requirements",
      examples: [
        "Needs-based product recommendations",
        "Risk profiling",
        "Suitability assessments",
        "Appropriate product advice"
      ]
    },
    {
      title: "Principle VI: Right to Grievance Redressal",
      description: "Banks shall have effective grievance redressal mechanisms",
      commitment: "Prompt and fair resolution of all customer complaints",
      examples: [
        "Dedicated grievance cell",
        "Timely complaint resolution",
        "Fair investigation process",
        "Customer-friendly procedures"
      ]
    }
  ]

  const implementation = [
    {
      area: "Customer Service",
      measures: [
        "24/7 customer support helpline",
        "Multi-channel support (phone, email, chat)",
        "Trained customer service representatives",
        "Regular service quality audits"
      ]
    },
    {
      area: "Product Information",
      measures: [
        "Detailed product brochures",
        "Key information documents (KIDs)",
        "Interactive product calculators",
        "Regular product updates"
      ]
    },
    {
      area: "Complaint Management",
      measures: [
        "Dedicated complaint redressal team",
        "Online complaint tracking system",
        "Escalation matrix",
        "Regular complaint analysis"
      ]
    },
    {
      area: "Staff Training",
      measures: [
        "Regular BCSBI code training",
        "Customer service certification",
        "Ethics and compliance programs",
        "Performance evaluation systems"
      ]
    }
  ]

  const achievements = [
    {
      metric: "Customer Satisfaction",
      value: "94%",
      description: "Customer satisfaction with our services"
    },
    {
      metric: "Complaint Resolution",
      value: "98%",
      description: "Complaints resolved within stipulated time"
    },
    {
      metric: "Code Compliance",
      value: "100%",
      description: "Compliance with all BCSBI code principles"
    },
    {
      metric: "Staff Training",
      value: "100%",
      description: "Staff trained on BCSBI code and ethics"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 rounded-full p-4">
              <Shield className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            BCSBI Code of Commitment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MNS Bank's commitment to the Banking Codes and Standards Board of India Code
          </p>
        </div>

        {/* Commitment Badge */}
        <Card className="bg-blue-50 border-blue-200 mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-blue-800 flex items-center justify-center gap-3">
              <Award className="w-8 h-8" />
              BCSBI Certified Bank
            </CardTitle>
            <CardDescription className="text-gray-700">
              MNS Bank is fully compliant with the BCSBI Code of Commitment for Customers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-800 mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {achievement.metric}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Code Principles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Six Principles of BCSBI Code
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {codePrinciples.map((principle, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <CardTitle className="text-lg">{principle.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    {principle.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-sm font-medium text-blue-800 mb-1">Our Commitment:</p>
                      <p className="text-sm text-gray-600">{principle.commitment}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-2">Implementation Examples:</p>
                      <ul className="space-y-1">
                        {principle.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <Star className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Implementation Measures */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Implementation Measures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementation.map((area, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{area.area}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.measures.map((measure, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {measure}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Customer Rights */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Your Rights Under BCSBI Code</CardTitle>
            <CardDescription>
              As a customer of MNS Bank, you are entitled to these fundamental rights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Right to Information</h3>
                  <p className="text-sm text-gray-600">
                    Complete information about products, services, and charges
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Right to Privacy</h3>
                  <p className="text-sm text-gray-600">
                    Protection of personal and financial information
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Scale className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Right to Fair Treatment</h3>
                  <p className="text-sm text-gray-600">
                    Equal and respectful treatment without discrimination
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Right to Grievance Redressal</h3>
                  <p className="text-sm text-gray-600">
                    Prompt and fair resolution of complaints and grievances
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Right to Suitability</h3>
                  <p className="text-sm text-gray-600">
                    Products and services suitable to your needs
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Right to Transparency</h3>
                  <p className="text-sm text-gray-600">
                    Clear and transparent terms and conditions
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Commitment Certificate */}
        <Card className="bg-green-50 border-green-200 mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-green-800 flex items-center gap-3">
              <Award className="w-6 h-6" />
              Our Commitment Certificate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Certificate Validity</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Valid from: January 1, 2024</p>
                  <p>• Valid till: December 31, 2024</p>
                  <p>• Certificate Number: BCSBI/2024/0456</p>
                  <p>• Status: Fully Compliant</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Download Certificate</h3>
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 flex items-center gap-2"
                    onClick={() => handleDownload('BCSBI_CERTIFICATE')}
                  >
                    <Download className="w-4 h-4" />
                    Download BCSBI Certificate
                  </Button>
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    View Certificate Details
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">BCSBI Compliance Contact</CardTitle>
            <CardDescription>
              For any queries regarding BCSBI Code implementation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Internal Compliance Officer</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Email: bcsbi@mnssbank.com</p>
                  <p>Phone: 1800-123-4570</p>
                  <p>Available: Monday-Friday, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">BCSBI Office</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Email: info@bcsbi.org.in</p>
                  <p>Phone: 022-2499 4999</p>
                  <p>Website: www.bcsbi.org.in</p>
                </div>
              </div>
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
