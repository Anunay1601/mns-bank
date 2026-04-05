'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CheckCircle, FileText, Users, Phone, Mail, MapPin, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
    let validatedValue = value
    let error = ''
    
    if (field === 'name') {
      validatedValue = value.replace(/[^a-zA-Z\s\-\.']/g, '')
      if (validatedValue.length < 3) {
        error = 'Name must be at least 3 characters'
      }
    } else if (field === 'phone') {
      validatedValue = value.replace(/[^\d]/g, '')
      if (validatedValue.length !== 10) {
        error = 'Phone number must be exactly 10 digits'
      }
    } else if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value) && value !== '') {
        error = 'Please enter a valid email address'
      }
    }
    
    setFormErrors(prev => ({ ...prev, [field]: '' }))
    
    if (error) {
      setFormErrors(prev => ({ ...prev, [field]: error }))
    }
    
    setFormData(prev => ({ ...prev, [field]: validatedValue }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
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

  const statCards = [
    { label: 'Interest Rate', value: data.interestRate },
    { label: 'Max Amount', value: data.maxAmount },
    { label: 'Tenure', value: data.tenure },
    { label: 'Processing Fee', value: data.processingFee },
  ]

  return (
    <div className="min-h-screen bg-[var(--surface-primary)]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[var(--brand-navy)] via-[var(--brand-navy-light)] to-[var(--brand-accent)] text-white py-[var(--space-16)]">
        <div className="container mx-auto px-[var(--space-4)]">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-[var(--space-3)] tracking-tight">{data.title}</h1>
            <p className="text-lg md:text-xl mb-[var(--space-4)] opacity-90 font-light">{data.subtitle}</p>
            <p className="text-base opacity-75 mb-[var(--space-8)] max-w-[65ch] leading-relaxed">{data.description}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--space-3)]">
              {statCards.map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-[var(--space-4)] border border-white/10">
                  <p className="text-xs opacity-80 mb-1 uppercase tracking-wide">{stat.label}</p>
                  <p className="text-xl md:text-2xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-[var(--space-4)] py-[var(--space-12)]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[var(--space-8)]">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-[var(--surface-secondary)] p-1 rounded-xl h-auto">
                {['overview', 'features', 'eligibility', 'documents', 'apply'].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="text-xs md:text-sm capitalize py-2.5 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-[var(--shadow-sm)] data-[state=active]:text-[var(--brand-navy)] transition-all duration-[var(--duration-normal)]"
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <TabsContent value="overview" className="mt-[var(--space-6)]">
                <Card className="border-[var(--border)] shadow-[var(--shadow-sm)]">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold tracking-tight">Product Overview</CardTitle>
                    <CardDescription>Complete information about {data.title}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-[var(--space-6)]">
                    <div>
                      <h3 className="text-base font-semibold mb-[var(--space-4)]">Key Highlights</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-4)]">
                        {[
                          { title: 'Competitive Interest Rates', desc: `${data.interestRate} p.a.` },
                          { title: 'Quick Approval', desc: 'Get approved in 24-48 hours' },
                          { title: 'Flexible Tenure', desc: data.tenure },
                          { title: 'Minimal Documentation', desc: 'Simple and hassle-free process' },
                        ].map((item) => (
                          <div key={item.title} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[var(--color-success-light)] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-3.5 h-3.5 text-[var(--color-success)]" />
                            </div>
                            <div>
                              <p className="font-medium text-sm">{item.title}</p>
                              <p className="text-sm text-[var(--muted-foreground)]">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-base font-semibold mb-[var(--space-3)]">Why Choose {data.title}?</h3>
                      <p className="text-[var(--muted-foreground)] leading-relaxed text-sm max-w-[65ch]">
                        Our {data.title.toLowerCase()} offers competitive rates, flexible terms, and a seamless application process. 
                        With transparent terms and conditions, no hidden charges, and dedicated customer support, we ensure 
                        your financial journey is smooth and rewarding.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="features" className="mt-[var(--space-6)]">
                <Card className="border-[var(--border)] shadow-[var(--shadow-sm)]">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold tracking-tight">Features & Benefits</CardTitle>
                    <CardDescription>Exclusive features of {data.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-3)]">
                      {data.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[var(--surface-secondary)] transition-colors duration-[var(--duration-fast)]">
                          <div className="w-6 h-6 rounded-full bg-[var(--color-success-light)] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-3.5 h-3.5 text-[var(--color-success)]" />
                          </div>
                          <p className="text-sm text-[var(--foreground)]/80">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="eligibility" className="mt-[var(--space-6)]">
                <Card className="border-[var(--border)] shadow-[var(--shadow-sm)]">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold tracking-tight">Eligibility Criteria</CardTitle>
                    <CardDescription>Check if you qualify for {data.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-[var(--space-3)]">
                      {data.eligibility.map((criteria, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[var(--surface-secondary)] transition-colors duration-[var(--duration-fast)]">
                          <div className="w-6 h-6 rounded-full bg-[var(--brand-accent-subtle)] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Users className="w-3.5 h-3.5 text-[var(--brand-accent)]" />
                          </div>
                          <p className="text-sm text-[var(--foreground)]/80">{criteria}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-[var(--space-6)] p-[var(--space-4)] bg-[var(--brand-accent-subtle)] rounded-xl border border-[var(--brand-accent)]/10">
                      <p className="text-sm text-[var(--brand-accent)]">
                        <strong>Note:</strong> Eligibility criteria may vary based on specific product variants and your credit profile. 
                        Our loan officers will help you find the best option.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="documents" className="mt-[var(--space-6)]">
                <Card className="border-[var(--border)] shadow-[var(--shadow-sm)]">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold tracking-tight">Required Documents</CardTitle>
                    <CardDescription>Documents needed for application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-[var(--space-4)]">
                      <div>
                        <h4 className="font-semibold text-sm mb-[var(--space-3)] flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[var(--brand-accent)]" />
                          Mandatory Documents
                        </h4>
                        <div className="space-y-2">
                          {data.documents.map((doc, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-[var(--surface-secondary)] rounded-lg">
                              <div className="w-1.5 h-1.5 bg-[var(--brand-accent)] rounded-full flex-shrink-0"></div>
                              <p className="text-sm text-[var(--foreground)]/80">{doc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="p-[var(--space-4)] bg-[var(--color-warning-light)] rounded-xl border border-amber-200/50">
                        <p className="text-sm text-amber-800">
                          <strong>Important:</strong> All documents should be self-attested. Original documents may be required for verification.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="apply" className="mt-[var(--space-6)]">
                <Card className="border-[var(--border)] shadow-[var(--shadow-sm)]">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold tracking-tight">Apply Now</CardTitle>
                    <CardDescription>Fill in your details to get started</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AnimatePresence mode="wait">
                      {showSuccess ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="text-center py-[var(--space-8)]"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.15, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                            className="w-16 h-16 bg-[var(--color-success-light)] rounded-full flex items-center justify-center mx-auto mb-[var(--space-4)]"
                          >
                            <CheckCircle className="w-8 h-8 text-[var(--color-success)]" />
                          </motion.div>
                          <h3 className="text-xl font-semibold text-[var(--color-success)] mb-2">Application Submitted!</h3>
                          <p className="text-[var(--muted-foreground)] text-sm mb-[var(--space-4)]">Your application has been received successfully.</p>
                          <div className="bg-[var(--brand-accent-subtle)] p-[var(--space-4)] rounded-xl inline-block">
                            <p className="text-sm text-[var(--brand-accent)]">
                              <strong>Reference Number:</strong> {referenceNumber}
                            </p>
                            <p className="text-sm text-[var(--brand-accent)] mt-1 opacity-80">
                              Our representative will contact you within 24 hours.
                            </p>
                          </div>
                          <div className="mt-[var(--space-4)]">
                            <Button 
                              onClick={() => setShowSuccess(false)}
                              variant="outline"
                              className="border-[var(--brand-accent)] text-[var(--brand-accent)] hover:bg-[var(--brand-accent-subtle)]"
                            >
                              Submit Another Application
                            </Button>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.form
                          key="form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onSubmit={handleSubmit}
                          className="space-y-[var(--space-4)]"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-4)]">
                            <div>
                              <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                              <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                required
                                placeholder="Enter your full name"
                                className={`mt-1.5 ${formErrors.name ? 'border-[var(--color-danger)] focus-visible:ring-[var(--color-danger)]' : 'focus-visible:ring-[var(--brand-accent)]'}`}
                              />
                              {formErrors.name && (
                                <p className="text-[var(--color-danger)] text-xs mt-1.5">{formErrors.name}</p>
                              )}
                            </div>
                            <div>
                              <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                              <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                required
                                placeholder="10-digit mobile number"
                                pattern="[0-9]{10}"
                                className={`mt-1.5 ${formErrors.phone ? 'border-[var(--color-danger)] focus-visible:ring-[var(--color-danger)]' : 'focus-visible:ring-[var(--brand-accent)]'}`}
                              />
                              {formErrors.phone && (
                                <p className="text-[var(--color-danger)] text-xs mt-1.5">{formErrors.phone}</p>
                              )}
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-4)]">
                            <div>
                              <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                              <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                required
                                placeholder="your.email@example.com"
                                className={`mt-1.5 ${formErrors.email ? 'border-[var(--color-danger)] focus-visible:ring-[var(--color-danger)]' : 'focus-visible:ring-[var(--brand-accent)]'}`}
                              />
                              {formErrors.email && (
                                <p className="text-[var(--color-danger)] text-xs mt-1.5">{formErrors.email}</p>
                              )}
                            </div>
                            <div>
                              <Label htmlFor="product" className="text-sm font-medium">Product</Label>
                              <Select value={formData.product} onValueChange={(value) => handleInputChange('product', value)}>
                                <SelectTrigger className="mt-1.5">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value={data.title}>{data.title}</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="message" className="text-sm font-medium">Message (Optional)</Label>
                            <textarea
                              id="message"
                              className="w-full min-h-[100px] p-3 border border-[var(--border)] rounded-lg resize-none mt-1.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 bg-[var(--surface-primary)] transition-shadow duration-[var(--duration-fast)]"
                              value={formData.message}
                              onChange={(e) => handleInputChange('message', e.target.value)}
                              placeholder="Any specific requirements or questions..."
                            />
                          </div>
                          
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[var(--brand-navy)] hover:bg-[var(--brand-navy-light)] active:scale-[0.98] transition-all duration-[var(--duration-normal)] h-11 text-sm font-medium"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center gap-2">
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Submitting...
                              </span>
                            ) : (
                              'Submit Application'
                            )}
                          </Button>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-[var(--space-5)]">
            {/* Quick Inquiry Form */}
            <Card className="border-[var(--border)] shadow-[var(--shadow-sm)]">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold tracking-tight">Quick Inquiry</CardTitle>
                <CardDescription className="text-sm">Get a call back from our experts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-[var(--space-3)]">
                <Input placeholder="Your Name" className="focus-visible:ring-[var(--brand-accent)] text-sm" />
                <Input type="tel" placeholder="Phone Number" className="focus-visible:ring-[var(--brand-accent)] text-sm" />
                <Button className="w-full bg-[var(--brand-navy)] hover:bg-[var(--brand-navy-light)] active:scale-[0.98] transition-all duration-[var(--duration-normal)] text-sm font-medium">
                  Request Call Back
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-[var(--border)] shadow-[var(--shadow-sm)]">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold tracking-tight">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-[var(--space-4)]">
                {[
                  { icon: Phone, label: 'Call Us', value: '1800-123-4567' },
                  { icon: Mail, label: 'Email Us', value: 'loans@mnsbank.com' },
                  { icon: MapPin, label: 'Visit Branch', value: 'Find nearest branch' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[var(--brand-accent-subtle)] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[var(--brand-accent)]" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{label}</p>
                      <p className="text-xs text-[var(--muted-foreground)]">{value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Related Products */}
            <Card className="border-[var(--border)] shadow-[var(--shadow-sm)]">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold tracking-tight">Related Products</CardTitle>
              </CardHeader>
              <CardContent className="space-y-[var(--space-3)]">
                {data.relatedProducts.map((product, index) => (
                  <div key={index} className="p-[var(--space-3)] border border-[var(--border)] rounded-xl hover:bg-[var(--surface-secondary)] hover:border-[var(--brand-accent)]/20 transition-all duration-[var(--duration-fast)]">
                    <h4 className="font-medium text-sm mb-1">{product.name}</h4>
                    <p className="text-xs text-[var(--muted-foreground)] mb-2.5 leading-relaxed">{product.description}</p>
                    <Button variant="outline" size="sm" asChild className="text-xs h-8 border-[var(--brand-accent)]/30 text-[var(--brand-accent)] hover:bg-[var(--brand-accent-subtle)]">
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
