'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AlertTriangle, Phone, Mail, Shield, Eye, Lock, Clock, CheckCircle, AlertCircle, FileText } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function FraudAwarenessPage() {
  const { t } = useLanguage()
  
  const fraudTypes = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      title: "Phishing Attacks",
      description: "Fake emails or websites designed to steal your personal information",
      examples: [
        "Fake bank emails asking for account details",
        "Suspicious links in SMS or WhatsApp messages",
        "Fake job offers requesting personal information",
        "Lottery or prize winning scams"
      ],
      prevention: [
        "Never click on suspicious links",
        "Verify sender email addresses",
        "Don't share personal information via email",
        "Contact bank directly if suspicious"
      ]
    },
    {
      icon: <Phone className="w-8 h-8 text-orange-600" />,
      title: "Vishing & Smishing",
      description: "Voice and SMS-based fraud attempts to obtain sensitive information",
      examples: [
        "Fake calls from bank representatives",
        "SMS messages claiming account suspension",
        "Requests for OTP or PIN verification",
        "Threats of account closure"
      ],
      prevention: [
        "Never share OTP with anyone",
        "Verify caller identity",
        "Don't trust urgent requests",
        "Call bank official number"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Card Fraud",
      description: "Unauthorized use of your credit/debit cards or card details",
      examples: [
        "Card skimming at ATMs",
        "Online card theft",
        "Fake card replacement calls",
        "Unauthorized online transactions"
      ],
      prevention: [
        "Cover your PIN at ATMs",
        "Check for skimming devices",
        "Report lost cards immediately",
        "Monitor transaction alerts"
      ]
    }
  ]

  const safetyTips = [
    {
      title: "Never Share OTP",
      description: "Bank never asks for OTP over phone, email, or SMS",
      icon: <Lock className="w-6 h-6 text-red-600" />
    },
    {
      title: "Verify Before Trust",
      description: "Always verify the identity of anyone claiming to be from the bank",
      icon: <Eye className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Use Official Channels",
      description: "Only use official bank website and mobile app for banking",
      icon: <CheckCircle className="w-6 h-6 text-green-600" />
    },
    {
      title: "Report Immediately",
      description: "Report any suspicious activity immediately to the bank",
      icon: <AlertCircle className="w-6 h-6 text-orange-600" />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fraud Awareness
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn how to protect yourself from banking fraud and stay safe with MNS Bank
          </p>
        </div>

        {/* Fraud Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {fraudTypes.map((fraud, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  {fraud.icon}
                  <CardTitle className="text-xl">{fraud.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  {fraud.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {fraud.examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Prevention:</h4>
                    <ul className="space-y-1">
                      {fraud.prevention.map((tip, idx) => (
                        <li key={idx} className="text-sm text-green-600 flex items-start gap-2">
                          <span className="mt-1">✓</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Safety Tips */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Important Safety Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyTips.map((tip, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  {tip.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Report Fraud */}
        <Card className="bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="text-2xl text-red-800 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8" />
              Report Fraud
            </CardTitle>
            <CardDescription className="text-gray-700">
              If you suspect any fraudulent activity, report it immediately
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Emergency Contacts:</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">24/7 Fraud Hotline: 1800-123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">Email: fraud@mnssbank.com</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Quick Actions:</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Block Card Immediately
                  </Button>
                  <Link href="/report-fraud">
                    <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                      File Fraud Report
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back to Security */}
        <div className="text-center mt-8">
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
