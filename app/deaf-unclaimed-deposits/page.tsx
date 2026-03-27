'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, Search, FileText, Download, CheckCircle, Clock, Users, Database, Shield } from 'lucide-react'

export default function DeafUnclaimedDepositsPage() {
  const [searchType, setSearchType] = useState<'name' | 'account'>('name')
  const [searchData, setSearchData] = useState({
    name: '',
    accountNumber: '',
    pan: '',
    dob: ''
  })
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])

  const handleInputChange = (field: string, value: string) => {
    setSearchData(prev => ({ ...prev, [field]: value }))
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)
    
    // Simulate API call
    setTimeout(() => {
      // Mock search results
      setSearchResults([
        {
          id: 'UDF2024001',
          name: 'Ramesh Kumar',
          accountType: 'Savings Account',
          amount: '₹45,000',
          date: '15/03/2010',
          branch: 'Mumbai - Fort Branch',
          status: 'Claimable'
        },
        {
          id: 'UDF2024002',
          name: 'Sunita Sharma',
          accountType: 'Fixed Deposit',
          amount: '₹1,20,000',
          date: '22/08/2012',
          branch: 'Delhi - Connaught Place',
          status: 'Claimable'
        }
      ])
      setIsSearching(false)
    }, 1500)
  }

  const claimProcess = [
    {
      step: 1,
      title: 'Search Deposits',
      description: 'Search for unclaimed deposits using your name or account number',
      icon: <Search className="w-6 h-6" />
    },
    {
      step: 2,
      title: 'Verify Identity',
      description: 'Submit KYC documents to verify your identity and claim',
      icon: <Shield className="w-6 h-6" />
    },
    {
      step: 3,
      title: 'Submit Claim',
      description: 'Fill and submit the claim form with required documents',
      icon: <FileText className="w-6 h-6" />
    },
    {
      step: 4,
      title: 'Receive Funds',
      description: 'Get your unclaimed amount transferred to your account',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ]

  const requiredDocuments = [
    { document: 'Claim Application Form', mandatory: true },
    { document: 'PAN Card', mandatory: true },
    { document: 'Aadhaar Card', mandatory: true },
    { document: 'Passport Size Photograph', mandatory: true },
    { document: 'Identity Proof (Voter ID/Passport/Driving License)', mandatory: true },
    { document: 'Address Proof (Utility Bill/Rent Agreement)', mandatory: true },
    { document: 'Signature Verification', mandatory: true },
    { document: 'Succession Certificate (for legal heirs)', mandatory: false },
    { document: 'Court Order (if applicable)', mandatory: false },
    { document: 'No Objection Certificate (if applicable)', mandatory: false }
  ]

  const statistics = [
    { label: 'Total Unclaimed Amount', value: '₹12.5 Crore', icon: <Database className="w-5 h-5" /> },
    { label: 'Accounts Identified', value: '8,450', icon: <Users className="w-5 h-5" /> },
    { label: 'Claims Processed', value: '3,200', icon: <CheckCircle className="w-5 h-5" /> },
    { label: 'Avg. Processing Time', value: '15 Days', icon: <Clock className="w-5 h-5" /> }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Database className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unclaimed Deposits
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Search and claim your unclaimed deposits. We help customers recover their forgotten funds 
            with a simple and transparent process.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statistics.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Search Unclaimed Deposits</CardTitle>
            <CardDescription>
              Enter your details to check for any unclaimed deposits in your name
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="flex gap-4 mb-6">
                <Button
                  type="button"
                  variant={searchType === 'name' ? 'default' : 'outline'}
                  onClick={() => setSearchType('name')}
                >
                  Search by Name
                </Button>
                <Button
                  type="button"
                  variant={searchType === 'account' ? 'default' : 'outline'}
                  onClick={() => setSearchType('account')}
                >
                  Search by Account
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={searchType === 'name' ? 'name' : 'accountNumber'}>
                    {searchType === 'name' ? 'Full Name *' : 'Account Number *'}
                  </Label>
                  <Input
                    id={searchType === 'name' ? 'name' : 'accountNumber'}
                    value={searchType === 'name' ? searchData.name : searchData.accountNumber}
                    onChange={(e) => handleInputChange(searchType === 'name' ? 'name' : 'accountNumber', e.target.value)}
                    required
                    placeholder={searchType === 'name' ? 'Enter your full name' : 'Enter account number'}
                  />
                </div>
                <div>
                  <Label htmlFor="pan">PAN Card *</Label>
                  <Input
                    id="pan"
                    value={searchData.pan}
                    onChange={(e) => handleInputChange('pan', e.target.value)}
                    required
                    placeholder="Enter PAN number"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="dob">Date of Birth *</Label>
                <Input
                  id="dob"
                  type="date"
                  value={searchData.dob}
                  onChange={(e) => handleInputChange('dob', e.target.value)}
                  required
                />
              </div>

              <Button type="submit" disabled={isSearching} className="w-full">
                {isSearching ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Search Deposits
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Search Results</CardTitle>
              <CardDescription>
                Found {searchResults.length} unclaimed deposit(s) in your name
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {searchResults.map((result, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{result.name}</h3>
                        <p className="text-sm text-gray-600">Reference: {result.id}</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        {result.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Account Type:</span>
                        <p className="font-medium">{result.accountType}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Amount:</span>
                        <p className="font-medium text-green-600">{result.amount}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Branch:</span>
                        <p className="font-medium">{result.branch}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm">Initiate Claim</Button>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Claim Process */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Claim Process</CardTitle>
            <CardDescription>
              Simple 4-step process to claim your unclaimed deposits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {claimProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      Step {step.step}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Required Documents */}
          <Card>
            <CardHeader>
              <CardTitle>Required Documents</CardTitle>
              <CardDescription>
                Documents needed for claim processing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{doc.document}</span>
                    </div>
                    {doc.mandatory && (
                      <Badge variant="destructive" className="text-xs">Mandatory</Badge>
                    )}
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Download className="w-4 h-4 mr-2" />
                Download Claim Form
              </Button>
            </CardContent>
          </Card>

          {/* Important Information */}
          <Card>
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  What is Unclaimed Deposit?
                </h4>
                <p className="text-sm text-yellow-700">
                  A deposit becomes unclaimed when there are no transactions in the account 
                  for 10 years or the account holder doesn't respond to bank communications.
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Processing Timeline</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Application verification: 2-3 days</li>
                  <li>• Document processing: 5-7 days</li>
                  <li>• Claim approval: 2-3 days</li>
                  <li>• Fund transfer: 1-2 days</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">No Service Charges</h4>
                <p className="text-sm text-green-700">
                  MNS Bank does not charge any fees for processing unclaimed deposit claims.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">How long does it take to claim?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Usually 15-20 working days from submission of complete documents.
                </p>
                
                <h4 className="font-semibold mb-2">What if the account holder is deceased?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Legal heirs can claim with succession certificate and death certificate.
                </p>
                
                <h4 className="font-semibold mb-2">Is interest paid on unclaimed amounts?</h4>
                <p className="text-sm text-gray-600">
                  Yes, interest is paid as per applicable rates for the period.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Can I claim on behalf of someone?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Yes, with power of attorney and proper documentation.
                </p>
                
                <h4 className="font-semibold mb-2">What if I don't have old account details?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  You can search using your name and PAN card to find all accounts.
                </p>
                
                <h4 className="font-semibold mb-2">Where can I submit the claim?</h4>
                <p className="text-sm text-gray-600">
                  At any MNS Bank branch or through our online portal.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
