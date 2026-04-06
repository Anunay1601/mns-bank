'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { MapPin, Phone, Mail, Clock, Search, Filter } from 'lucide-react'
import { BranchBankingImage } from '@/components/image-gallery'
import { useLanguage } from '@/contexts/LanguageContext'

export default function BranchesPage() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedState, setSelectedState] = useState('all')

  const branches = [
    {
      id: 1,
      name: "MNS Bank - Head Office",
      address: "123 Banking Street, Financial District, Mumbai - 400001",
      phone: "022-12345678",
      email: "headoffice@mnsbank.com",
      state: "Maharashtra",
      city: "Mumbai",
      pincode: "400001",
      coordinates: "19.0760° N, 72.8777° E",
      services: ["Corporate Banking", "International Banking", "Treasury Services"],
      timings: "Monday - Friday: 9:30 AM - 6:00 PM, Saturday: 9:30 AM - 2:00 PM",
      type: "headquarters"
    },
    {
      id: 2,
      name: "MNS Bank - Andheri Branch",
      address: "456 Nehru Road, Andheri West, Mumbai - 400053",
      phone: "022-23456789",
      email: "andheri@mnsbank.com",
      state: "Maharashtra",
      city: "Mumbai",
      pincode: "400053",
      coordinates: "19.1198° N, 72.8465° E",
      services: ["Retail Banking", "Personal Banking", "Business Banking"],
      timings: "Monday - Saturday: 10:00 AM - 6:00 PM",
      type: "branch"
    },
    {
      id: 3,
      name: "MNS Bank - Delhi Connaught Place",
      address: "789 Connaught Place, New Delhi - 110001",
      phone: "011-23456789",
      email: "delhi.cp@mnsbank.com",
      state: "Delhi",
      city: "New Delhi",
      pincode: "110001",
      coordinates: "28.6139° N, 77.2090° E",
      services: ["Retail Banking", "NRI Services", "Wealth Management"],
      timings: "Monday - Friday: 9:00 AM - 7:00 PM, Saturday: 9:00 AM - 3:00 PM",
      type: "branch"
    },
    {
      id: 4,
      name: "MNS Bank - Bangalore MG Road",
      address: "123 MG Road, Bangalore - 560001",
      phone: "080-12345678",
      email: "bangalore@mnsbank.com",
      state: "Karnataka",
      city: "Bangalore",
      pincode: "560001",
      coordinates: "12.9716° N, 77.5946° E",
      services: ["IT Banking", "Startup Banking", "Digital Banking"],
      timings: "Monday - Friday: 9:30 AM - 6:30 PM, Saturday: 9:30 AM - 2:00 PM",
      type: "branch"
    },
    {
      id: 5,
      name: "MNS Bank - Chennai T. Nagar",
      address: "456 Anna Salai, T. Nagar, Chennai - 600018",
      phone: "044-12345678",
      email: "chennai@mnsbank.com",
      state: "Tamil Nadu",
      city: "Chennai",
      pincode: "600018",
      coordinates: "13.0827° N, 80.2707° E",
      services: ["Retail Banking", "Agricultural Banking", "MSME Banking"],
      timings: "Monday - Friday: 10:00 AM - 5:00 PM, Saturday: 10:00 AM - 1:00 PM",
      type: "branch"
    },
    {
      id: 6,
      name: "MNS Bank - Kolkata Park Street",
      address: "789 Park Street, Kolkata - 700016",
      phone: "033-12345678",
      email: "kolkata@mnsbank.com",
      state: "West Bengal",
      city: "Kolkata",
      pincode: "700016",
      coordinates: "22.5726° N, 88.3639° E",
      services: ["Retail Banking", "Corporate Banking", "Trade Finance"],
      timings: "Monday - Friday: 10:30 AM - 6:00 PM, Saturday: 10:30 AM - 2:00 PM",
      type: "branch"
    },
    {
      id: 7,
      name: "MNS Bank - Hyderabad Begumpet",
      address: "123 Begumpet, Hyderabad - 500016",
      phone: "040-12345678",
      email: "hyderabad@mnsbank.com",
      state: "Telangana",
      city: "Hyderabad",
      pincode: "500016",
      coordinates: "17.3850° N, 78.4867° E",
      services: ["Retail Banking", "Corporate Banking", "Digital Services"],
      timings: "Monday - Friday: 9:30 AM - 7:00 PM, Saturday: 9:30 AM - 2:00 PM",
      type: "branch"
    },
    {
      id: 8,
      name: "MNS Bank - Pune FC Road",
      address: "789 FC Road, Pune - 411001",
      phone: "020-12345678",
      email: "pune@mnsbank.com",
      state: "Maharashtra",
      city: "Pune",
      pincode: "411001",
      coordinates: "18.5204° N, 73.8567° E",
      services: ["Retail Banking", "Auto Loans", "Home Loans"],
      timings: "Monday - Friday: 9:00 AM - 6:30 PM, Saturday: 9:00 AM - 2:00 PM",
      type: "branch"
    }
  ]

  const states = ['all', 'Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'West Bengal', 'Telangana']

  const filteredBranches = branches.filter(branch => {
    const matchesSearch = branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         branch.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         branch.state.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesState = selectedState === 'all' || branch.state === selectedState
    return matchesSearch && matchesState
  })

  const getStateColor = (state: string) => {
    const colors = {
      'Maharashtra': 'bg-blue-100 text-blue-800',
      'Delhi': 'bg-green-100 text-green-800',
      'Karnataka': 'bg-purple-100 text-purple-800',
      'Tamil Nadu': 'bg-orange-100 text-orange-800',
      'West Bengal': 'bg-red-100 text-red-800',
      'Telangana': 'bg-yellow-100 text-yellow-800'
    }
    return colors[state as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-8">
            <BranchBankingImage />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('findOurBranches')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('branchesDescription')}
          </p>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{t('searchBranches')}</CardTitle>
            <CardDescription>{t('findBranchesByLocation')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search by Name or City
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Enter branch name or city..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by State
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">All States</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBranches.map((branch) => (
            <Card key={branch.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{branch.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      {branch.city}, {branch.state}
                    </CardDescription>
                  </div>
                  <Badge 
                    variant={branch.type === 'headquarters' ? 'default' : 'secondary'}
                    className="ml-2"
                  >
                    {branch.type === 'headquarters' ? 'Head Office' : 'Branch'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{branch.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>{branch.email}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{branch.timings}</span>
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Services Available</h4>
                  <div className="flex flex-wrap gap-2">
                    {branch.services.map((service, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* State Filter Legend */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Branch Locations by State</CardTitle>
            <CardDescription>Our branch network across different states</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {states.map(state => (
                <div key={state} className={`p-3 rounded-lg ${getStateColor(state)}`}>
                  <h4 className="font-semibold mb-1">{state}</h4>
                  <p className="text-sm opacity-80">
                    {branches.filter(b => b.state === state).length} branches
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mt-8 bg-blue-50">
          <CardHeader>
            <CardTitle>Need Help Finding a Branch?</CardTitle>
            <CardDescription>Contact our branch locator service</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Branch Locator Helpline</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>1800-123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>branch.locator@mnsbank.com</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Business Hours</h4>
                <div className="space-y-2 text-gray-700">
                  <p>Monday - Friday: 9:30 AM - 6:00 PM</p>
                  <p>Saturday: 9:30 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
