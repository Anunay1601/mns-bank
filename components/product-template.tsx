'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, FileText, Users, Calculator, Phone, Mail, MapPin } from 'lucide-react'

interface ProductData {
  title: string
  subtitle: string
  description: string
  interestRate: string
  maxAmount: string
  tenure: string
  processingFee: string
  features: string[]
  eligibility: string[]
  documents: string[]
  relatedProducts: {
    name: string
    link: string
    description: string
  }[]
}

interface ProductTemplateProps {
  data: ProductData
}

export default function ProductTemplate({ data }: ProductTemplateProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: data.title,
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [referenceNumber, setReferenceNumber] = useState('')
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({})

  const handleInputChange = (field: string, value: string) => {
    // Basic validation for different fields
    let validatedValue = value
    let error = ''
    
    if (field === 'name') {
      // Only allow letters, spaces, and common punctuation
      validatedValue = value.replace(/[^a-zA-Z\s\-\.']/g, '')
      if (validatedValue.length < 3) {
        error = 'Name must be at least 3 characters'
      }
    } else if (field === 'phone') {
      // Only allow numbers
      validatedValue = value.replace(/[^\d]/g, '')
      if (validatedValue.length !== 10) {
        error = 'Phone number must be exactly 10 digits'
      }
    } else if (field === 'email') {
      // Basic email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value) && value !== '') {
        error = 'Please enter a valid email address'
      }
    }
    
    // Clear previous error for this field
    setFormErrors(prev => ({ ...prev, [field]: '' }))
    
    // Set new error if any
    if (error) {
      setFormErrors(prev => ({ ...prev, [field]: error }))
    }
    
    setFormData(prev => ({ ...prev, [field]: validatedValue }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      const refNo = 'MNS' + Date.now().toString().slice(-8)
      setReferenceNumber(refNo)
      setShowSuccess(true)
      setIsSubmitting(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        product: data.title,
        message: ''
      })
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>
            <p className="text-xl mb-6 opacity-90">{data.subtitle}</p>
            <p className="text-lg opacity-80 mb-8">{data.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <p className="text-sm opacity-90 mb-1">Interest Rate</p>
                <p className="text-2xl font-bold">{data.interestRate}</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <p className="text-sm opacity-90 mb-1">Max Amount</p>
                <p className="text-2xl font-bold">{data.maxAmount}</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <p className="text-sm opacity-90 mb-1">Tenure</p>
                <p className="text-2xl font-bold">{data.tenure}</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <p className="text-sm opacity-90 mb-1">Processing Fee</p>
                <p className="text-2xl font-bold">{data.processingFee}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="apply">Apply</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Product Overview</CardTitle>
                    <CardDescription>Complete information about {data.title}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Key Highlights</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                          <div>
                            <p className="font-medium">Competitive Interest Rates</p>
                            <p className="text-sm text-gray-600">{data.interestRate} p.a.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                          <div>
                            <p className="font-medium">Quick Approval</p>
                            <p className="text-sm text-gray-600">Get approved in 24-48 hours</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                          <div>
                            <p className="font-medium">Flexible Tenure</p>
                            <p className="text-sm text-gray-600">{data.tenure}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                          <div>
                            <p className="font-medium">Minimal Documentation</p>
                            <p className="text-sm text-gray-600">Simple and hassle-free process</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Why Choose {data.title}?</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our {data.title.toLowerCase()} offers competitive rates, flexible terms, and a seamless application process. 
                        With transparent terms and conditions, no hidden charges, and dedicated customer support, we ensure 
                        your financial journey is smooth and rewarding.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="features" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Features & Benefits</CardTitle>
                    <CardDescription>Exclusive features of {data.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {data.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <p className="text-gray-700">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="eligibility" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Eligibility Criteria</CardTitle>
                    <CardDescription>Check if you qualify for {data.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {data.eligibility.map((criteria, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Users className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                          <p className="text-gray-700">{criteria}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Note:</strong> Eligibility criteria may vary based on specific product variants and your credit profile. 
                        Our loan officers will help you find the best option.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="documents" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Required Documents</CardTitle>
                    <CardDescription>Documents needed for application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <FileText className="w-5 h-5 mr-2" />
                          Mandatory Documents
                        </h4>
                        <div className="space-y-2">
                          {data.documents.map((doc, index) => (
                            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              <p className="text-gray-700">{doc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="p-4 bg-yellow-50 rounded-lg">
                        <p className="text-sm text-yellow-800">
                          <strong>Important:</strong> All documents should be self-attested. Original documents may be required for verification.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="apply" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Apply Now</CardTitle>
                    <CardDescription>Fill in your details to get started</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {showSuccess ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-green-800 mb-2">Application Submitted!</h3>
                        <p className="text-gray-600 mb-4">Your application has been received successfully.</p>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-sm text-blue-800">
                            <strong>Reference Number:</strong> {referenceNumber}
                          </p>
                          <p className="text-sm text-blue-800 mt-1">
                            Our representative will contact you within 24 hours.
                          </p>
                        </div>
                        <Button 
                          onClick={() => setShowSuccess(false)}
                          className="mt-4"
                        >
                          Submit Another Application
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
                              className={formErrors.name ? 'border-red-500' : ''}
                            />
                            {formErrors.name && (
                              <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                            )}
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
                              pattern="[0-9]{10}"
                              className={formErrors.phone ? 'border-red-500' : ''}
                            />
                            {formErrors.phone && (
                              <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                            )}
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
                              className={formErrors.email ? 'border-red-500' : ''}
                            />
                            {formErrors.email && (
                              <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                            )}
                          </div>
                          <div>
                            <Label htmlFor="product">Product</Label>
                            <Select value={formData.product} onValueChange={(value) => handleInputChange('product', value)}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value={data.title}>{data.title}</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="message">Message (Optional)</Label>
                          <textarea
                            id="message"
                            className="w-full min-h-[100px] p-3 border border-gray-300 rounded-md resize-none"
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            placeholder="Any specific requirements or questions..."
                          />
                        </div>
                        
                        <Button type="submit" disabled={isSubmitting} className="w-full">
                          {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Inquiry Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Inquiry</CardTitle>
                <CardDescription>Get a call back from our experts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="tel" placeholder="Phone Number" />
                <Button className="w-full">Request Call Back</Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-sm text-gray-600">1800-123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-sm text-gray-600">loans@mnsbank.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Visit Branch</p>
                    <p className="text-sm text-gray-600">Find nearest branch</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Products */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Related Products</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {data.relatedProducts.map((product, index) => (
                  <div key={index} className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium mb-1">{product.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={product.link}>Know More</a>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
