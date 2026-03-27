'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, CheckCircle, Clock, FileText, Shield, Users, Phone, Mail, MessageSquare, TrendingUp } from 'lucide-react'

export default function GrievanceRedressalPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    accountNumber: '',
    complaintType: '',
    subject: '',
    description: '',
    referenceNumber: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [complaintReference, setComplaintReference] = useState('')

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      const refNo = 'GRV' + Date.now().toString().slice(-8)
      setComplaintReference(refNo)
      setShowSuccess(true)
      setIsSubmitting(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        accountNumber: '',
        complaintType: '',
        subject: '',
        description: '',
        referenceNumber: ''
      })
    }, 1500)
  }

  const grievanceTypes = [
    { value: 'service', label: 'Service Quality', description: 'Issues with service delivery' },
    { value: 'charges', label: 'Excess Charges', description: 'Incorrect or excessive fees' },
    { value: 'transaction', label: 'Transaction Issues', description: 'Failed or incorrect transactions' },
    { value: 'card', label: 'Card Related', description: 'Debit/Credit card issues' },
    { value: 'loan', label: 'Loan Related', description: 'Loan processing or repayment issues' },
    { value: 'digital', label: 'Digital Banking', description: 'Net banking or mobile app issues' },
    { value: 'staff', label: 'Staff Behavior', description: 'Issues with bank staff' },
    { value: 'other', label: 'Other Issues', description: 'Any other grievances' }
  ]

  const resolutionTimeline = [
    { stage: 'Complaint Received', time: 'Immediate', icon: <FileText className="w-5 h-5" /> },
    { stage: 'Acknowledgment', time: 'Within 24 hours', icon: <Mail className="w-5 h-5" /> },
    { stage: 'Initial Response', time: 'Within 3 days', icon: <MessageSquare className="w-5 h-5" /> },
    { stage: 'Resolution', time: 'Within 30 days', icon: <CheckCircle className="w-5 h-5" /> },
    { stage: 'Escalation', time: 'If not resolved', icon: <TrendingUp className="w-5 h-5" /> }
  ]

  const contactHierarchy = [
    {
      level: 'Level 1',
      title: 'Branch Manager',
      contact: 'Visit your home branch',
      timeline: 'Resolution within 7 days'
    },
    {
      level: 'Level 2',
      title: 'Regional Office',
      contact: 'regional@mnsbank.com',
      timeline: 'Resolution within 15 days'
    },
    {
      level: 'Level 3',
      title: 'Nodal Officer',
      contact: 'nodal@mnsbank.com',
      timeline: 'Resolution within 30 days'
    },
    {
      level: 'Level 4',
      title: 'Banking Ombudsman',
      contact: 'Reserve Bank of India',
      timeline: 'External resolution'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Grievance Redressal
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to resolving your concerns promptly and fairly. 
            Your feedback helps us improve our services.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <CardTitle>Call Us</CardTitle>
              <CardDescription>24/7 Grievance Helpline</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold text-blue-600 mb-2">1800-123-4567</p>
              <Button variant="outline" className="w-full">Call Now</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Mail className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <CardTitle>Email Us</CardTitle>
              <CardDescription>Send detailed complaint</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm font-medium text-gray-600 mb-2">grievance@mnsbank.com</p>
              <Button variant="outline" className="w-full">Compose Email</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <MessageSquare className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <CardTitle>Track Status</CardTitle>
              <CardDescription>Check complaint status</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Input placeholder="Enter reference number" className="mb-2" />
              <Button variant="outline" className="w-full">Track</Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Complaint Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>File a Complaint</CardTitle>
                <CardDescription>
                  Fill in the details below to register your grievance
                </CardDescription>
              </CardHeader>
              <CardContent>
                {showSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Complaint Registered!</h3>
                    <p className="text-gray-600 mb-4">Your complaint has been successfully registered.</p>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <p className="text-sm text-blue-800">
                        <strong>Reference Number:</strong> {complaintReference}
                      </p>
                      <p className="text-sm text-blue-800 mt-1">
                        Please save this number for future reference
                      </p>
                    </div>
                    <Button 
                      onClick={() => setShowSuccess(false)}
                      variant="outline"
                    >
                      File Another Complaint
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                          placeholder="10-digit mobile number"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="accountNumber">Account Number</Label>
                        <Input
                          id="accountNumber"
                          value={formData.accountNumber}
                          onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                          placeholder="Your account number (if applicable)"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="complaintType">Complaint Type *</Label>
                      <Select value={formData.complaintType} onValueChange={(value) => handleInputChange('complaintType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select complaint type" />
                        </SelectTrigger>
                        <SelectContent>
                          {grievanceTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label} - {type.description}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                        placeholder="Brief subject of your complaint"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Detailed Description *</Label>
                      <textarea
                        id="description"
                        className="w-full min-h-[150px] p-3 border border-gray-300 rounded-md resize-none"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        required
                        placeholder="Please provide detailed information about your grievance..."
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="referenceNumber">Previous Reference (if any)</Label>
                      <Input
                        id="referenceNumber"
                        value={formData.referenceNumber}
                        onChange={(e) => handleInputChange('referenceNumber', e.target.value)}
                        placeholder="Previous complaint reference number"
                      />
                    </div>
                    
                    <Button type="submit" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? 'Submitting...' : 'Submit Complaint'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Resolution Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Resolution Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {resolutionTimeline.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.stage}</p>
                        <p className="text-xs text-gray-600">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Important Contacts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Important Contacts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-medium text-red-600">Grievance Helpline</p>
                  <p className="text-sm text-gray-600">1800-123-4567 (24/7)</p>
                </div>
                <div>
                  <p className="font-medium text-blue-600">Email Support</p>
                  <p className="text-sm text-gray-600">grievance@mnsbank.com</p>
                </div>
                <div>
                  <p className="font-medium text-purple-600">Nodal Officer</p>
                  <p className="text-sm text-gray-600">nodal@mnsbank.com</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start text-sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Customer Charter
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  <Shield className="w-4 h-4 mr-2" />
                  Banking Ombudsman
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  <Users className="w-4 h-4 mr-2" />
                  BCSBI Code
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Escalation Matrix */}
        <Card>
          <CardHeader>
            <CardTitle>Escalation Matrix</CardTitle>
            <CardDescription>
              If your complaint is not resolved satisfactorily, you can escalate it
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactHierarchy.map((level, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant={index === 0 ? "default" : "secondary"}>
                      {level.level}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2">{level.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{level.contact}</p>
                  <p className="text-xs text-blue-600 font-medium">{level.timeline}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Important Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Important Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                What to Include in Your Complaint
              </h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Complete account details and customer ID</li>
                <li>• Clear description of the issue</li>
                <li>• Date and time of the incident</li>
                <li>• Any reference numbers from previous communications</li>
                <li>• Supporting documents (if any)</li>
              </ul>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Your Rights</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Right to fair treatment and prompt service</li>
                <li>• Right to transparent information</li>
                <li>• Right to privacy and data protection</li>
                <li>• Right to seek redressal for grievances</li>
                <li>• Right to approach banking ombudsman</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
