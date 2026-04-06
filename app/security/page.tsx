'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, Lock, Eye, AlertTriangle, Phone, Mail, Clock, CheckCircle, Users, FileText } from 'lucide-react'
import Link from 'next/link'
import { SecurityImage } from '@/components/image-gallery'
import { useLanguage } from '@/contexts/LanguageContext'

export default function SecurityPage() {
  const { t } = useLanguage()
  
  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security to your account with 2FA",
      features: ["SMS OTP verification", "Email authentication", "Biometric login", "Device registration"]
    },
    {
      icon: <Eye className="w-8 h-8 text-green-600" />,
      title: "Secure Login",
      description: "Advanced security features to protect your online banking access",
      features: ["Virtual keyboard", "Secure login session", "Login attempt monitoring", "Auto logout"]
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Transaction Security",
      description: "Comprehensive protection for all your banking transactions",
      features: ["Real-time fraud detection", "Transaction limits", "Secure payment gateway", "Encryption"]
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Account Monitoring",
      description: "Continuous monitoring of your account for suspicious activities",
      features: ["24/7 monitoring", "Alert system", "Activity logs", "Device tracking"]
    }
  ]

  const securityTips = [
    {
      title: "Create Strong Passwords",
      description: "Use unique passwords with letters, numbers, and special characters",
      icon: <Lock className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Never Share Credentials",
      description: "Keep your username, password, and PIN confidential",
      icon: <Shield className="w-6 h-6 text-green-600" />
    },
    {
      title: "Use Official Channels",
      description: "Only access banking through official website and mobile app",
      icon: <CheckCircle className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Enable Notifications",
      description: "Set up alerts for all account transactions and activities",
      icon: <Eye className="w-6 h-6 text-orange-600" />
    },
    {
      title: "Regular Security Updates",
      description: "Keep your contact information and security questions updated",
      icon: <Users className="w-6 h-6 text-red-600" />
    }
  ]

  const reportTypes = [
    {
      title: "Lost/Stolen Card",
      description: "Report immediately if your card is lost or stolen",
      phone: "1800-123-4567",
      priority: "High"
    },
    {
      title: "Unauthorized Transaction",
      description: "Report any transaction you didn't authorize",
      phone: "1800-123-4568",
      priority: "High"
    },
    {
      title: "Suspicious Activity",
      description: "Report any unusual account activity",
      phone: "1800-123-4569",
      priority: "Medium"
    },
    {
      title: "Phishing Attempt",
      description: "Report fake emails or websites claiming to be MNS Bank",
      phone: "1800-123-4570",
      priority: "High"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-8">
            <SecurityImage />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('bankingSecurity')}
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            {t('securityDescription')}
          </p>
          <p className="text-sm text-gray-500">
            {t('securityNote')}
          </p>
        </div>

        {/* Security Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t('ourSecurityFeatures')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
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

        {/* Security Tips */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-600" />
                Security Best Practices
              </CardTitle>
              <CardDescription>
                Essential tips to keep your account secure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securityTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      {tip.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{tip.title}</h4>
                      <p className="text-gray-600 text-sm">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                Warning Signs
              </CardTitle>
              <CardDescription>
                Recognize and avoid common security threats
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-3">Never Respond To:</h4>
                  <ul className="space-y-2 text-red-700">
                    <li>• Emails asking for your password or OTP</li>
                    <li>• Phone calls threatening account closure</li>
                    <li>• Messages claiming you&apos;ve won a lottery</li>
                    <li>• Requests for money transfers to &quot;safe&quot; accounts</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-3">Always Verify:</h4>
                  <ul className="space-y-2 text-yellow-700">
                    <li>• Check official website URLs carefully</li>
                    <li>• Call official bank numbers to verify requests</li>
                    <li>• Download apps only from official stores</li>
                    <li>• Confirm with bank directly for suspicious communications</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Report Security Issues */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Report Security Issues
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reportTypes.map((report, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{report.title}</CardTitle>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      report.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {report.priority} Priority
                    </span>
                  </div>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold">Hotline:</p>
                        <p className="text-2xl font-bold text-blue-600">{report.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 mb-4">
                      <Mail className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-semibold">Email:</p>
                        <p className="text-blue-600">security@mnsbank.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="font-semibold">Available:</p>
                        <p className="text-blue-600">24/7, 365 days</p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">What to Report:</h4>
                      <ul className="space-y-1 text-blue-700 text-sm">
                        <li>• Date and time of incident</li>
                        <li>• Description of what happened</li>
                        <li>• Account numbers affected</li>
                        <li>• Any communication received</li>
                        <li>• Screenshots of suspicious activity</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security Tools */}
        <Card className="bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600" />
              Security Tools & Resources
            </CardTitle>
            <CardDescription>
            Tools and features to help you stay secure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg">
                <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Security Center</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Complete security dashboard with real-time monitoring
                </p>
                <Button className="w-full">
                  <Link href="/security-center">
                    Access Security Center
                  </Link>
                </Button>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg">
                <Eye className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Activity Monitor</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Track all account activities and set custom alerts
                </p>
                <Button className="w-full" variant="outline">
                  <Link href="/activity-monitor">
                    Monitor Activity
                  </Link>
                </Button>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Security Settings</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Manage your security preferences and notification settings
                </p>
                <Button className="w-full" variant="outline">
                  <Link href="/security-settings">
                    Security Settings
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <h4 className="font-semibold mb-2">Need Help?</h4>
              <p className="text-gray-600 text-sm mb-4">
                Contact our security team for any concerns or questions
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Security Team
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Security
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Security Team */}
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Contact Security Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-6 h-6 text-blue-600" />
                Call Security Team
              </CardTitle>
              <CardDescription>Available 24/7 for emergency security issues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">1800-123-4567</p>
                  <p className="text-sm text-gray-600">Emergency Hotline</p>
                </div>
                <Button size="lg" className="w-full" onClick={() => window.open('tel:1800-123-4567')}>
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-6 h-6 text-green-600" />
                Email Security Team
              </CardTitle>
              <CardDescription>Send detailed security reports via email</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-lg font-semibold text-green-600 mb-2">security@mnsbank.com</p>
                  <p className="text-sm text-gray-600">Security Email</p>
                </div>
                <Button size="lg" className="w-full" onClick={() => window.open('mailto:security@mnsbank.com')}>
                  Send Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
