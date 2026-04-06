'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, Lock, Eye, AlertTriangle, Cpu, Wifi, Database, FileText, Key, Smartphone, Monitor } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CyberSecurityPage() {
  const { t } = useLanguage()
  
  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: "Encryption Technology",
      description: "Advanced encryption to protect your data and transactions",
      features: [
        "256-bit SSL encryption",
        "End-to-end data protection",
        "Secure socket layer (SSL) protocols",
        "Encrypted data storage"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Firewall Protection",
      description: "Multi-layered firewall systems to prevent unauthorized access",
      features: [
        "Next-generation firewalls",
        "Intrusion detection systems",
        "Real-time threat monitoring",
        "Automatic threat blocking"
      ]
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-600" />,
      title: "Security Monitoring",
      description: "24/7 monitoring of our systems for potential threats",
      features: [
        "Continuous surveillance",
        "Automated security alerts",
        "Threat intelligence integration",
        "Security incident response"
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-orange-600" />,
      title: "Secure Data Centers",
      description: "State-of-the-art data centers with multiple security layers",
      features: [
        "Physical security controls",
        "Biometric access systems",
        "Environmental monitoring",
        "Redundant infrastructure"
      ]
    }
  ]

  const bestPractices = [
    {
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
      title: "Mobile Banking Security",
      tips: [
        "Download official banking app only",
        "Enable app lock/biometric security",
        "Keep app updated",
        "Avoid public WiFi for banking"
      ]
    },
    {
      icon: <Key className="w-6 h-6 text-green-600" />,
      title: "Password Management",
      tips: [
        "Use strong, unique passwords",
        "Change passwords regularly",
        "Never share credentials",
        "Use password managers"
      ]
    },
    {
      icon: <Monitor className="w-6 h-6 text-purple-600" />,
      title: "Computer Security",
      tips: [
        "Keep antivirus updated",
        "Use firewall protection",
        "Regular system updates",
        "Avoid suspicious downloads"
      ]
    },
    {
      icon: <Wifi className="w-6 h-6 text-orange-600" />,
      title: "Network Security",
      tips: [
        "Use secure WiFi networks",
        "Avoid public WiFi for transactions",
        "Use VPN when necessary",
        "Check for HTTPS encryption"
      ]
    }
  ]

  const threats = [
    {
      type: "Malware",
      description: "Malicious software designed to damage or gain unauthorized access",
      protection: "Use antivirus software and avoid suspicious downloads"
    },
    {
      type: "Phishing",
      description: "Fake emails or websites to steal personal information",
      protection: "Verify sender authenticity and don't click suspicious links"
    },
    {
      type: "Ransomware",
      description: "Software that encrypts files and demands payment for decryption",
      protection: "Regular backups and updated security software"
    },
    {
      type: "Identity Theft",
      description: "Unauthorized use of personal information for fraudulent purposes",
      protection: "Monitor accounts and use strong authentication"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cyber Security
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about MNS Bank's advanced cyber security measures and how you can stay protected
          </p>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-3">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Best Practices */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Security Best Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bestPractices.map((practice, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {practice.icon}
                    <CardTitle className="text-xl">{practice.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {practice.tips.map((tip, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Common Threats */}
        <div className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Common Cyber Threats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {threats.map((threat, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-red-800 mb-2">
                  {threat.type}
                </h3>
                <p className="text-gray-600 mb-3">
                  {threat.description}
                </p>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-sm text-green-800">
                    <strong>Protection:</strong> {threat.protection}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Tools */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Recommended Security Tools</CardTitle>
            <CardDescription>
              Essential tools to enhance your online security
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Antivirus Software</h3>
                <p className="text-sm text-gray-600">
                  Protect against viruses, malware, and ransomware
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Lock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Password Manager</h3>
                <p className="text-sm text-gray-600">
                  Securely store and manage strong passwords
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Two-Factor Auth</h3>
                <p className="text-sm text-gray-600">
                  Add extra security layer to your accounts
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link href="/security-settings">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Security Settings
            </Button>
          </Link>
          <Link href="/fraud-awareness">
            <Button variant="outline" className="w-full border-gray-600 text-gray-600 hover:bg-gray-50">
              Fraud Awareness
            </Button>
          </Link>
          <Link href="/report-fraud">
            <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
              Report Fraud
            </Button>
          </Link>
        </div>

        {/* Back to Security */}
        <div className="text-center">
          <Link href="/security">
            <Button variant="outline" className="border-gray-600 text-gray-600 hover:bg-gray-50">
              ← Back to Security Center
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
