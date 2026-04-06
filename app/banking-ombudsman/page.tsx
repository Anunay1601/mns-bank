'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, Users, Scale, Gavel, ExternalLink, Download } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { downloadFile, DOWNLOAD_FILES, DownloadFileKey } from '@/lib/download'

export default function BankingOmbudsmanPage() {
  const { t } = useLanguage()
  
  const handleDownload = async (fileKey: DownloadFileKey) => {
    const success = await downloadFile(DOWNLOAD_FILES[fileKey].filename, DOWNLOAD_FILES[fileKey].displayName)
    if (success) {
      console.log(`${DOWNLOAD_FILES[fileKey].title} downloaded successfully`)
    } else {
      console.error(`Failed to download ${DOWNLOAD_FILES[fileKey].title}`)
    }
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    accountNumber: '',
    complaintType: '',
    description: '',
    bankResponse: '',
    documents: [] as File[]
  })

  const complaintTypes = [
    { value: 'service', label: 'Poor Service Quality' },
    { value: 'charges', label: 'Unfair Charges' },
    { value: 'loan', label: 'Loan Related Issues' },
    { value: 'card', label: 'Credit/Debit Card Issues' },
    { value: 'account', label: 'Account Operations' },
    { value: 'transaction', label: 'Transaction Issues' },
    { value: 'privacy', label: 'Privacy Violations' },
    { value: 'other', label: 'Other Issues' }
  ]

  const processSteps = [
    {
      step: 1,
      title: "File Complaint with Bank",
      description: "First approach the bank with your complaint",
      timeframe: "Within 30 days of issue"
    },
    {
      step: 2,
      title: "Wait for Bank Response",
      description: "Bank has 30 days to resolve your complaint",
      timeframe: "30 days maximum"
    },
    {
      step: 3,
      title: "Approach Ombudsman",
      description: "If unsatisfied, file with Banking Ombudsman",
      timeframe: "Within 1 year of bank response"
    },
    {
      step: 4,
      title: "Ombudsman Review",
      description: "Ombudsman will review and mediate the dispute",
      timeframe: "30-60 days for resolution"
    }
  ]

  const jurisdiction = [
    {
      title: "Complaints Covered",
      items: [
        "Deficiency in banking service",
        "Unfair banking practices",
        "Credit card and loan issues",
        "Deposit account problems",
        "Remittance and collection issues",
        "Mobile banking and electronic transactions"
      ]
    },
    {
      title: "Complaints Not Covered",
      items: [
        "Disputes between banks and their employees",
        "Complaints more than 1 year old",
        "Cases pending in court or tribunal",
        "Matters already decided by court",
        "Disputes involving external parties",
        "Complaints without proper documentation"
      ]
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Complaint submitted:', formData)
    alert('Your complaint has been submitted to the Banking Ombudsman. You will receive a reference number within 7 days.')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Banking Ombudsman
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Independent dispute resolution mechanism for banking complaints
          </p>
        </div>

        {/* Important Notice */}
        <Card className="bg-blue-50 border-blue-200 mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800 flex items-center gap-3">
              <AlertCircle className="w-6 h-6" />
              Before Filing a Complaint
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              You must first approach MNS Bank with your complaint and wait for our response before approaching the Banking Ombudsman.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">30</div>
                <div className="text-sm text-gray-600">Days to approach bank first</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">365</div>
                <div className="text-sm text-gray-600">Days to file with ombudsman</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">Free</div>
                <div className="text-sm text-gray-600">No cost for complaint filing</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Process Steps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Complaint Resolution Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="relative">
                <CardHeader className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <span className="text-sm text-gray-500">{step.timeframe}</span>
                  </div>
                </CardContent>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-gray-300"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Jurisdiction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {jurisdiction.map((section, index) => (
            <Card key={index} className={index === 0 ? "border-green-200" : "border-red-200"}>
              <CardHeader>
                <CardTitle className={`text-xl ${index === 0 ? "text-green-800" : "text-red-800"}`}>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      {index === 0 ? (
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      )}
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <Phone className="w-6 h-6 text-blue-600" />
                Contact Numbers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">Toll-Free:</p>
                  <p className="text-lg text-blue-600">14440</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Landline:</p>
                  <p className="text-lg text-gray-700">022-2444-5000</p>
                </div>
                <p className="text-sm text-gray-600">
                  Available: Monday-Friday, 9:00 AM - 5:00 PM
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <Mail className="w-6 h-6 text-green-600" />
                Email Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">General:</p>
                  <p className="text-lg text-green-600">ombudsman@rbi.org.in</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Complaints:</p>
                  <p className="text-lg text-green-600">crpc@rbi.org.in</p>
                </div>
                <p className="text-sm text-gray-600">
                  Response within 7 working days
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <MapPin className="w-6 h-6 text-purple-600" />
                Office Locations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">Mumbai:</p>
                  <p className="text-sm text-gray-600">
                    Reserve Bank of India Building, Shahid Bhagat Singh Road
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Regional Offices:</p>
                  <p className="text-sm text-gray-600">
                    Available in all major cities
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Online Complaint Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">File Online Complaint</CardTitle>
            <CardDescription>
              Submit your complaint directly to the Banking Ombudsman
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Number (if applicable)
                  </label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Complaint *
                </label>
                <select
                  name="complaintType"
                  value={formData.complaintType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select type of complaint</option>
                  {complaintTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Complaint Details *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe your complaint in detail..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bank Response (if any)
                </label>
                <textarea
                  name="bankResponse"
                  value={formData.bankResponse}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe MNS Bank's response to your complaint..."
                />
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Submit Complaint
                </Button>
                <Button type="button" variant="outline">
                  Save as Draft
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Important Links */}
        <Card className="bg-gray-100">
          <CardHeader>
            <CardTitle className="text-xl">Important Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Official Links</h3>
                <div className="space-y-2">
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <ExternalLink className="w-4 h-4" />
                    RBI Banking Ombudsman Portal
                  </a>
                  <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <ExternalLink className="w-4 h-4" />
                    Reserve Bank of India
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Useful Documents</h3>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2"
                    onClick={() => handleDownload('BANKING_OMBUDSMAN_FORM')}
                  >
                    <Download className="w-4 h-4" />
                    Complaint Form PDF
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Ombudsman Scheme 2021
                  </Button>
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
