'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AlertTriangle, Phone, Mail, Clock, CheckCircle, FileText, Shield, AlertCircle, User, CreditCard, Smartphone, Lock as LockIcon } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ReportFraudPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    accountNumber: '',
    fraudType: '',
    description: '',
    urgency: 'normal'
  })

  const fraudTypes = [
    { value: 'phishing', label: 'Phishing Attack' },
    { value: 'vishing', label: 'Voice Phishing (Vishing)' },
    { value: 'smishing', label: 'SMS Phishing (Smishing)' },
    { value: 'card', label: 'Card Fraud' },
    { value: 'account', label: 'Account Takeover' },
    { value: 'transaction', label: 'Unauthorized Transaction' },
    { value: 'identity', label: 'Identity Theft' },
    { value: 'atm', label: 'ATM Fraud' },
    { value: 'other', label: 'Other' }
  ]

  const emergencySteps = [
    {
      icon: <Phone className="w-6 h-6 text-red-600" />,
      title: "Call Immediately",
      description: "Call our 24/7 fraud hotline at 1800-123-4567"
    },
    {
      icon: <CreditCard className="w-6 h-6 text-orange-600" />,
      title: "Block Cards",
      description: "Block all your cards immediately to prevent further fraud"
    },
    {
      icon: <LockIcon className="w-6 h-6 text-yellow-600" />,
      title: "Change Passwords",
      description: "Change your online banking and mobile app passwords"
    },
    {
      icon: <FileText className="w-6 h-6 text-green-600" />,
      title: "Document Everything",
      description: "Keep records of all communications and transactions"
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
    // Handle form submission
    console.log('Fraud report submitted:', formData)
    alert('Your fraud report has been submitted. We will contact you within 24 hours.')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Report Fraud
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            If you suspect fraudulent activity, report it immediately. We're here to help 24/7.
          </p>
        </div>

        {/* Emergency Alert */}
        <Card className="bg-red-50 border-red-200 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-red-800 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8" />
              Emergency Steps - Take Action Now!
            </CardTitle>
            <CardDescription className="text-gray-700">
              If you're currently experiencing fraud, take these immediate steps
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emergencySteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <Phone className="w-6 h-6 text-blue-600" />
                24/7 Fraud Hotline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-2xl font-bold text-blue-800">
                    1800-123-4567
                  </p>
                  <p className="text-sm text-gray-600">
                    Available 24 hours, 7 days a week
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">When to call:</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Lost or stolen cards</li>
                    <li>• Unauthorized transactions</li>
                    <li>• Suspicious account activity</li>
                    <li>• Phishing attempts</li>
                  </ul>
                </div>
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
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-lg font-bold text-green-800">
                    fraud@mnssbank.com
                  </p>
                  <p className="text-sm text-gray-600">
                    Response within 24 hours
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">For non-urgent matters:</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• General fraud inquiries</li>
                    <li>• Follow-up on reports</li>
                    <li>• Security questions</li>
                    <li>• Documentation requests</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Report Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">File a Fraud Report</CardTitle>
            <CardDescription>
              Please provide as much detail as possible to help us investigate
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
                  Type of Fraud *
                </label>
                <select
                  name="fraudType"
                  value={formData.fraudType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select type of fraud</option>
                  {fraudTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Detailed Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please describe what happened, when it occurred, and any other relevant details..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Urgency Level
                </label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="bg-red-600 hover:bg-red-700">
                  Submit Fraud Report
                </Button>
                <Button type="button" variant="outline">
                  Save as Draft
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Important Information */}
        <Card className="bg-blue-50 mb-8">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              Important Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">What happens next:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• We'll acknowledge your report within 24 hours</li>
                  <li>• Our fraud team will investigate immediately</li>
                  <li>• We'll contact you for additional information if needed</li>
                  <li>• You'll receive regular updates on the investigation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Documents to prepare:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Government-issued ID proof</li>
                  <li>• Account statements</li>
                  <li>• Screenshots of suspicious messages</li>
                  <li>• Any other relevant evidence</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link href="/security">
            <Button variant="outline" className="w-full border-gray-600 text-gray-600 hover:bg-gray-50">
              ← Back to Security
            </Button>
          </Link>
          <Link href="/fraud-awareness">
            <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
              Learn About Fraud
            </Button>
          </Link>
          <Link href="/security-settings">
            <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
              Security Settings
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
