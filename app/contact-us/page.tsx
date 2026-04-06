'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle, Send } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ContactUsPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [referenceNumber, setReferenceNumber] = useState('')

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call to backend
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        const refNo = 'MNS' + Date.now().toString().slice(-8)
        setReferenceNumber(refNo)
        setShowSuccess(true)
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: '',
          inquiryType: ''
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRequestCallback = () => {
    // Navigate to callback request page or open modal
    const subject = encodeURIComponent('Request for Call Back')
    router.push(`/contact-us?callback=true&subject=${subject}`)
  }

  const handleFindBranch = () => {
    // Navigate to branches page
    router.push('/branches')
  }

  const handleWhatsAppSupport = () => {
    // Open WhatsApp with pre-filled message
    const message = encodeURIComponent('Hello, I need assistance from MNS Bank.')
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank')
  }

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Phone Banking",
      details: ["1800-123-4567 (Toll Free)", "+91-22-12345678 (International)", "Available 24/7"],
      description: "Call our customer service for instant assistance"
    },
    {
      icon: <Mail className="w-6 h-6 text-green-600" />,
      title: "Email Support",
      details: ["info@mnsbank.com", "support@mnsbank.com", "complaints@mnsbank.com"],
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-600" />,
      title: "WhatsApp Banking",
      details: ["+91-9876543210", "Available 9 AM - 9 PM", "Instant responses"],
      description: "Chat with us on WhatsApp for quick queries"
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      title: "Branch Locator",
      details: ["500+ branches nationwide", "24/7 ATM access", "Find nearest branch"],
      description: "Visit your nearest branch for personalized service"
    }
  ]

  const officeLocations = [
    {
      city: "Mumbai (Head Office)",
      address: "123 Banking Street, Fort, Mumbai - 400001",
      phone: "+91-22-12345678",
      email: "mumbai@mnsbank.com",
      hours: "9:30 AM - 5:30 PM (Mon-Fri)"
    },
    {
      city: "Delhi",
      address: "456 Connaught Place, New Delhi - 110001",
      phone: "+91-11-23456789",
      email: "delhi@mnsbank.com",
      hours: "9:30 AM - 5:30 PM (Mon-Fri)"
    },
    {
      city: "Bangalore",
      address: "789 MG Road, Bangalore - 560001",
      phone: "+91-80-34567890",
      email: "bangalore@mnsbank.com",
      hours: "9:30 AM - 5:30 PM (Mon-Fri)"
    },
    {
      city: "Chennai",
      address: "321 Anna Salai, Chennai - 600002",
      phone: "+91-44-45678901",
      email: "chennai@mnsbank.com",
      hours: "9:30 AM - 5:30 PM (Mon-Fri)"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help you. Reach out to us through any of the following channels 
            and our team will assist you promptly.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {method.icon}
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {method.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-sm text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Send us a Message</CardTitle>
                <CardDescription className="text-gray-600">
                  Fill in the form below and we'll get back to you soon
                </CardDescription>
              </CardHeader>
              <CardContent>
                {showSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-4">We've received your message and will respond within 24 hours.</p>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <p className="text-sm text-blue-800">
                        <strong>Reference Number:</strong> {referenceNumber}
                      </p>
                    </div>
                    <Button 
                      onClick={() => setShowSuccess(false)}
                      variant="outline"
                    >
                      Send Another Message
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
                          pattern="[0-9]{10}"
                        />
                      </div>
                    </div>
                    
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
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="loan">Loan Related</SelectItem>
                          <SelectItem value="account">Account Related</SelectItem>
                          <SelectItem value="complaint">Complaint</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
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
                        placeholder="Brief subject of your message"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <textarea
                        id="message"
                        className="w-full min-h-[120px] p-3 border border-gray-300 rounded-md resize-none"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                        placeholder="Describe your inquiry in detail..."
                      />
                    </div>
                    
                    <Button type="submit" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" onClick={handleRequestCallback}>
                  <Phone className="w-4 h-4 mr-2" />
                  Request Call Back
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={handleFindBranch}>
                  <MapPin className="w-4 h-4 mr-2" />
                  Find Branch
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={handleWhatsAppSupport}>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp Support
                </Button>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">9:30 AM - 5:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">9:30 AM - 1:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">24/7 Helpline</span>
                  <span className="font-medium text-green-600">Available</span>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Emergency Contacts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-medium text-red-600">Card Blocking</p>
                  <p className="text-sm text-gray-600">1800-123-4567 (24/7)</p>
                </div>
                <div>
                  <p className="font-medium text-red-600">Fraud Reporting</p>
                  <p className="text-sm text-gray-600">1800-234-5678 (24/7)</p>
                </div>
                <div>
                  <p className="font-medium text-blue-600">Net Banking Support</p>
                  <p className="text-sm text-gray-600">1800-345-6789 (24/7)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Locations */}
        <Card>
          <CardHeader>
            <CardTitle>Our Office Locations</CardTitle>
            <CardDescription>Major branches across India</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {officeLocations.map((location, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">{location.city}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                      <span className="text-gray-600">{location.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{location.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{location.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{location.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <Button variant="outline">
                <MapPin className="w-4 h-4 mr-2" />
                View All Branches
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
