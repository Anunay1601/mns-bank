'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Shield, Eye, Bell, Lock, Smartphone, Mail, Check, X } from 'lucide-react'

export default function SecuritySettingsPage() {
  const [settings, setSettings] = useState({
    twoFactorAuth: true,
    loginAlerts: true,
    transactionAlerts: true,
    emailNotifications: true,
    smsAlerts: false,
    biometricLogin: false,
    sessionTimeout: '30',
    ipWhitelist: false,
    deviceManagement: true
  })

  const [showSuccess, setShowSuccess] = useState(false)

  const handleToggle = (key: string) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))
  }

  const handleSave = () => {
    // Simulate saving settings
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const securityFeatures = [
    {
      title: 'Two-Factor Authentication',
      description: 'Add an extra layer of security to your account',
      icon: <Shield className="w-6 h-6" />,
      key: 'twoFactorAuth',
      enabled: settings.twoFactorAuth
    },
    {
      title: 'Login Alerts',
      description: 'Get notified when someone logs into your account',
      icon: <Bell className="w-6 h-6" />,
      key: 'loginAlerts',
      enabled: settings.loginAlerts
    },
    {
      title: 'Transaction Alerts',
      description: 'Receive alerts for all account transactions',
      icon: <Eye className="w-6 h-6" />,
      key: 'transactionAlerts',
      enabled: settings.transactionAlerts
    },
    {
      title: 'Email Notifications',
      description: 'Get important updates via email',
      icon: <Mail className="w-6 h-6" />,
      key: 'emailNotifications',
      enabled: settings.emailNotifications
    },
    {
      title: 'SMS Alerts',
      description: 'Receive critical alerts via SMS',
      icon: <Smartphone className="w-6 h-6" />,
      key: 'smsAlerts',
      enabled: settings.smsAlerts
    },
    {
      title: 'Biometric Login',
      description: 'Use fingerprint or face recognition for login',
      icon: <Lock className="w-6 h-6" />,
      key: 'biometricLogin',
      enabled: settings.biometricLogin
    }
  ]

  const advancedSettings = [
    {
      title: 'Session Timeout',
      description: 'Automatically log out after inactivity',
      value: `${settings.sessionTimeout} minutes`,
      key: 'sessionTimeout'
    },
    {
      title: 'IP Whitelist',
      description: 'Only allow login from trusted IP addresses',
      value: settings.ipWhitelist ? 'Enabled' : 'Disabled',
      key: 'ipWhitelist'
    },
    {
      title: 'Device Management',
      description: 'Manage and remove trusted devices',
      value: settings.deviceManagement ? 'Active' : 'Inactive',
      key: 'deviceManagement'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Security Settings
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Manage your account security preferences and control how you access your banking services.
            Customize alerts and authentication methods for enhanced protection.
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-800 font-medium">
                Security settings saved successfully!
              </span>
            </div>
          </div>
        )}

        {/* Security Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </div>
                    </div>
                    <Button
                      variant={feature.enabled ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleToggle(feature.key)}
                      className="shrink-0"
                    >
                      {feature.enabled ? 'Enabled' : 'Disabled'}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      {feature.enabled ? (
                        <span className="flex items-center text-green-600">
                          <Check className="w-4 h-4 mr-1" />
                          Active
                        </span>
                      ) : (
                        <span className="flex items-center text-gray-500">
                          <X className="w-4 h-4 mr-1" />
                          Inactive
                        </span>
                      )}
                    </div>
                    <Badge variant={feature.enabled ? "default" : "secondary"}>
                      {feature.enabled ? 'Protected' : 'Not Protected'}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advanced Settings */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Advanced Settings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedSettings.map((setting, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{setting.title}</CardTitle>
                  <CardDescription>{setting.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-blue-600">
                      {setting.value}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleToggle(setting.key)}
                    >
                      Configure
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Device Management */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Trusted Devices
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Currently Logged In Devices</CardTitle>
              <CardDescription>Manage devices that have access to your account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: 'Chrome on Windows',
                    location: 'Mumbai, India',
                    lastActive: '2024-03-26 10:30 AM',
                    current: true
                  },
                  {
                    name: 'Safari on iPhone',
                    location: 'Delhi, India', 
                    lastActive: '2024-03-25 08:45 PM',
                    current: false
                  },
                  {
                    name: 'Mobile App',
                    location: 'Pune, India',
                    lastActive: '2024-03-24 06:20 PM',
                    current: false
                  }
                ].map((device, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{device.name}</h4>
                        <p className="text-sm text-gray-600">{device.location}</p>
                        <p className="text-xs text-gray-500">Last active: {device.lastActive}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {device.current && (
                        <Badge variant="default">Current Device</Badge>
                      )}
                      <Button variant="outline" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline">
                  Manage All Devices
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Save Settings */}
        <div className="text-center">
          <Button size="lg" onClick={handleSave} className="px-8">
            Save Security Settings
          </Button>
        </div>

        {/* Security Tips */}
        <Card className="mt-8 bg-blue-50">
          <CardHeader>
            <CardTitle>Security Recommendations</CardTitle>
            <CardDescription>Best practices to keep your account secure</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-800">Essential Security</h4>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• Enable two-factor authentication</li>
                  <li>• Use strong, unique passwords</li>
                  <li>• Regular security checkups</li>
                  <li>• Monitor account activity</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-blue-800">Advanced Protection</h4>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• Set up transaction alerts</li>
                  <li>• Use trusted devices only</li>
                  <li>• Keep contact info updated</li>
                  <li>• Report suspicious activity immediately</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
