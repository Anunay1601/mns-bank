'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Shield, Eye, Lock, AlertTriangle, CheckCircle, Phone, Mail, Clock, Users, ShieldCheck, Key, Smartphone, Bell } from 'lucide-react'
import Link from 'next/link'

export default function SecurityCenterPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [notifications, setNotifications] = useState({
    loginAlerts: true,
    transactionAlerts: true,
    emailAlerts: true,
    smsAlerts: false,
    securityAlerts: true
  })

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  const handleToggleNotification = (type: string) => {
    setNotifications(prev => ({ ...prev, [type]: !prev[type as keyof typeof prev] }))
  }

  const securityMetrics = [
    {
      title: 'Account Security Score',
      value: '92%',
      status: 'excellent',
      color: 'text-green-600',
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: 'Active Threats Blocked',
      value: '127',
      status: 'protected',
      color: 'text-blue-600',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Security Updates',
      value: 'Current',
      status: 'updated',
      color: 'text-green-600',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Last Security Scan',
      value: '2 hours ago',
      status: 'completed',
      color: 'text-purple-600',
      icon: <Clock className="w-6 h-6" />
    }
  ]

  const recentAlerts = [
    {
      id: 1,
      type: 'login',
      severity: 'high',
      title: 'Suspicious Login Attempt',
      description: 'Multiple failed login attempts from unrecognized device',
      timestamp: '2024-03-26 10:30 AM',
      location: 'Delhi, India',
      action: 'Account temporarily locked'
    },
    {
      id: 2,
      type: 'transaction',
      severity: 'medium',
      title: 'Unusual Transaction Pattern',
      description: 'Multiple small transactions detected within short timeframe',
      timestamp: '2024-03-26 09:15 AM',
      amount: '₹2,500',
      action: 'Transaction verification required'
    },
    {
      id: 3,
      type: 'security',
      severity: 'low',
      title: 'Password Updated Successfully',
      description: 'Account password was changed from new device',
      timestamp: '2024-03-26 08:45 AM',
      location: 'Mumbai, India',
      action: 'Security notification sent'
    }
  ]

  const securityTools = [
    {
      title: 'Security Scanner',
      description: 'Run comprehensive security scan of your account',
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      action: 'Run Scan',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      title: 'Password Strength Checker',
      description: 'Analyze and improve your password security',
      icon: <Key className="w-8 h-8 text-green-600" />,
      action: 'Check Password',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      title: 'Device Manager',
      description: 'View and manage all connected devices',
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      action: 'Manage Devices',
      color: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: 'Security Audit',
      description: 'Get detailed security audit report',
      icon: <Eye className="w-8 h-8 text-orange-600" />,
      action: 'Run Audit',
      color: 'bg-orange-600 hover:bg-orange-700'
    }
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Security Center
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive security dashboard to monitor and protect your account. 
            Real-time threat detection, security alerts, and advanced protection tools.
          </p>
        </div>

        {/* Security Metrics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Security Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityMetrics.map((metric, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {metric.icon}
                  </div>
                  <CardTitle className="text-lg">{metric.title}</CardTitle>
                  <div className={`text-2xl font-bold ${metric.color}`}>
                    {metric.value}
                  </div>
                  <Badge variant="secondary" className="mt-2">
                    {metric.status}
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {['overview', 'alerts', 'tools', 'settings'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`py-4 px-6 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent Security Alerts</CardTitle>
                <CardDescription>Latest security events and notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className={`p-4 rounded-lg border ${getSeverityColor(alert.severity)}`}>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant={alert.severity === 'high' ? 'destructive' : 'secondary'}>
                            {alert.severity.toUpperCase()}
                          </Badge>
                          <div>
                            <h4 className="font-semibold">{alert.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">
                          {alert.timestamp}
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">
                              <strong>Location:</strong> {alert.location}
                            </p>
                            <p className="text-sm text-gray-600">
                              <strong>Action:</strong> {alert.action}
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Security Actions</CardTitle>
                <CardDescription>Essential security tools and features</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {securityTools.map((tool, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          {tool.icon}
                        </div>
                        <CardTitle className="text-lg">{tool.title}</CardTitle>
                        <CardDescription>{tool.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button className={`w-full ${tool.color}`}>
                          {tool.action}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'alerts' && (
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Customize your security alerts and notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <Bell className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {key === 'loginAlerts' && 'Get notified when someone logs into your account'}
                          {key === 'transactionAlerts' && 'Receive alerts for all account transactions'}
                          {key === 'emailAlerts' && 'Get important updates via email'}
                          {key === 'smsAlerts' && 'Receive critical alerts via SMS'}
                          {key === 'securityAlerts' && 'Get notified about security events and threats'}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant={value ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleToggleNotification(key)}
                    >
                      {value ? 'Enabled' : 'Disabled'}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'tools' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Security Tools</CardTitle>
                <CardDescription>Professional-grade security analysis and protection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-6 border rounded-lg bg-blue-50">
                    <h4 className="font-semibold text-blue-800 mb-4">Security Audit Report</h4>
                    <p className="text-sm text-blue-700 mb-4">
                      Complete analysis of your account security status and recommendations
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Generate Full Report
                    </Button>
                  </div>
                  
                  <div className="p-6 border rounded-lg bg-green-50">
                    <h4 className="font-semibold text-green-800 mb-4">Threat Intelligence</h4>
                    <p className="text-sm text-green-700 mb-4">
                      Real-time monitoring of emerging threats and vulnerabilities
                    </p>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      View Threat Feed
                    </Button>
                  </div>
                  
                  <div className="p-6 border rounded-lg bg-purple-50">
                    <h4 className="font-semibold text-purple-800 mb-4">Security Health Check</h4>
                    <p className="text-sm text-purple-700 mb-4">
                      Comprehensive check of your security settings and configurations
                    </p>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      Run Health Check
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emergency Security</CardTitle>
                <CardDescription>Quick actions for immediate security concerns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white" onClick={() => window.open('tel:1800-123-4567')}>
                      <Lock className="w-4 h-4 mr-2" />
                      Lock Account Now
                    </Button>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white" onClick={() => window.open('mailto:security@mnsbank.com')}>
                      <Mail className="w-4 h-4 mr-2" />
                      Report Security Issue
                    </Button>
                  </div>
                  
                  <div className="text-center pt-4">
                    <p className="text-sm text-gray-600">
                      For immediate assistance, call our 24/7 security hotline
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'settings' && (
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Advanced security configuration options</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-gray-600 mb-6">
                  Security settings configuration is available in the main security settings page.
                </p>
                <Button asChild>
                  <Link href="/security-settings">
                    Go to Security Settings
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Contact Information */}
        <Card className="mt-8 bg-blue-50">
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>Contact our security team 24/7</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Security Helpline</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">24/7 Hotline:</span>
                    <span className="text-blue-600 font-bold">1800-123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">Email:</span>
                    <span className="text-blue-600">security@mnsbank.com</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Emergency Contacts</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">Card Blocking:</span>
                    <span className="text-blue-600 font-bold">1800-123-4568</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">Fraud Reporting:</span>
                    <span className="text-blue-600 font-bold">1800-123-4569</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
