'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Eye, AlertTriangle, Shield, Clock, Search, Filter } from 'lucide-react'

export default function ActivityMonitorPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')

  const activities = [
    {
      id: 1,
      type: 'login',
      title: 'Login Activity',
      description: 'Account login from new device',
      timestamp: '2024-03-26 10:30:45',
      status: 'success',
      location: 'Mumbai, India',
      device: 'Chrome on Windows',
      ip: '192.168.1.1'
    },
    {
      id: 2,
      type: 'transaction',
      title: 'Fund Transfer',
      description: 'Transfer to account ending in 4567',
      timestamp: '2024-03-26 09:15:22',
      status: 'success',
      amount: '₹5,000',
      from: 'Account ****1234',
      to: 'Account ****4567'
    },
    {
      id: 3,
      type: 'login',
      title: 'Failed Login Attempt',
      description: 'Invalid password attempt',
      timestamp: '2024-03-26 08:45:12',
      status: 'failed',
      location: 'Delhi, India',
      device: 'Safari on iPhone',
      ip: '203.197.85.1'
    },
    {
      id: 4,
      type: 'transaction',
      title: 'Bill Payment',
      description: 'Electricity bill payment',
      timestamp: '2024-03-26 07:30:15',
      status: 'success',
      amount: '₹1,200',
      merchant: 'MSEB'
    },
    {
      id: 5,
      type: 'security',
      title: 'Password Changed',
      description: 'Account password successfully updated',
      timestamp: '2024-03-25 18:20:00',
      status: 'success',
      location: 'Pune, India',
      device: 'Mobile App'
    },
    {
      id: 6,
      type: 'transaction',
      title: 'ATM Withdrawal',
      description: 'Cash withdrawal from ATM',
      timestamp: '2024-03-25 16:45:30',
      status: 'success',
      amount: '₹3,000',
      location: 'Andheri West ATM'
    },
    {
      id: 7,
      type: 'security',
      title: 'Account Locked',
      description: 'Account temporarily locked due to suspicious activity',
      timestamp: '2024-03-25 14:15:00',
      status: 'warning',
      reason: 'Multiple failed login attempts'
    },
    {
      id: 8,
      type: 'transaction',
      title: 'Online Purchase',
      description: 'E-commerce transaction',
      timestamp: '2024-03-25 12:30:45',
      status: 'success',
      amount: '₹2,500',
      merchant: 'Amazon India'
    }
  ]

  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === 'all' || activity.type === filterType
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-100 text-green-800'
      case 'failed': return 'bg-red-100 text-red-800'
      case 'warning': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'login': return <Eye className="w-5 h-5" />
      case 'transaction': return <Shield className="w-5 h-5" />
      case 'security': return <AlertTriangle className="w-5 h-5" />
      default: return <Clock className="w-5 h-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'login': return 'text-blue-600'
      case 'transaction': return 'text-green-600'
      case 'security': return 'text-orange-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Activity Monitor
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Monitor all your account activities in real-time. Keep track of login attempts, 
            transactions, and security events.
          </p>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search & Filter Activities</CardTitle>
            <CardDescription>Find specific activities or filter by type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Activities
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search activities..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Type
                </label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">All Activities</option>
                  <option value="login">Login Activities</option>
                  <option value="transaction">Transactions</option>
                  <option value="security">Security Events</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activities List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredActivities.map((activity) => (
            <Card key={activity.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${getTypeColor(activity.type)}`}>
                      {getTypeIcon(activity.type)}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{activity.title}</CardTitle>
                      <CardDescription>{activity.description}</CardDescription>
                    </div>
                  </div>
                  <Badge 
                    variant={activity.status === 'success' ? 'default' : 'secondary'}
                    className="ml-2"
                  >
                    {activity.status.toUpperCase()}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{activity.timestamp}</span>
                </div>
                
                {activity.location && (
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Filter className="w-4 h-4" />
                    <span>{activity.location}</span>
                  </div>
                )}
                
                {activity.device && (
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Shield className="w-4 h-4" />
                    <span>{activity.device}</span>
                  </div>
                )}
                
                {activity.ip && (
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Filter className="w-4 h-4" />
                    <span>IP: {activity.ip}</span>
                  </div>
                )}
                
                {activity.amount && (
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span className="font-semibold">Amount:</span>
                    <span className="text-blue-600 font-bold">{activity.amount}</span>
                  </div>
                )}
                
                {activity.merchant && (
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span className="font-semibold">Merchant:</span>
                    <span>{activity.merchant}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security Tips */}
        <Card className="mt-8 bg-blue-50">
          <CardHeader>
            <CardTitle>Security Monitoring Tips</CardTitle>
            <CardDescription>How to keep your account secure</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-800">Regular Monitoring</h4>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• Check activity monitor daily</li>
                  <li>• Review all transactions</li>
                  <li>• Monitor login attempts</li>
                  <li>• Set up security alerts</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-blue-800">Immediate Action</h4>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• Report suspicious activity immediately</li>
                  <li>• Block lost/stolen cards</li>
                  <li>• Change passwords regularly</li>
                  <li>• Contact security team for concerns</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Security */}
        <Card className="mt-8">
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
