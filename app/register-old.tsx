'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Phone, Mail, User, Lock, Eye, EyeOff, Calendar, MapPin, Briefcase, Shield, CheckCircle, ArrowRight, Users, FileText, Building2 } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function RegisterPage() {
  const { t } = useLanguage()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    occupation: '',
    annualIncome: '',
    panNumber: '',
    aadhaarNumber: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log('Registration data:', formData)
  }

  const accountTypes = [
    { value: 'savings', label: 'Savings Account' },
    { value: 'current', label: 'Current Account' },
    { value: 'fixed-deposit', label: 'Fixed Deposit' },
    { value: 'recurring-deposit', label: 'Recurring Deposit' }
  ]

  const occupations = [
    { value: 'salaried', label: 'Salaried Employee' },
    { value: 'business', label: 'Business Owner' },
    { value: 'professional', label: 'Professional' },
    { value: 'student', label: 'Student' },
    { value: 'retired', label: 'Retired' },
    { value: 'homemaker', label: 'Homemaker' }
  ]

  const incomeRanges = [
    { value: '0-3lakh', label: 'Below ₹3 Lakhs' },
    { value: '3-6lakh', label: '₹3-6 Lakhs' },
    { value: '6-12lakh', label: '₹6-12 Lakhs' },
    { value: '12-24lakh', label: '₹12-24 Lakhs' },
    { value: '24lakh+', label: 'Above ₹24 Lakhs' }
  ]

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
    'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
    'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
    'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Mumbai', 'Kolkata',
    'Chennai', 'Bengaluru', 'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Open Your MNS Bank Account
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join millions of satisfied customers. Register online in minutes and start your banking journey with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Benefits */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  Why Choose MNS Bank?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Zero Balance Account</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Open account with zero minimum balance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Instant Digital Banking</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Get access to internet and mobile banking</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Competitive Interest Rates</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Best rates on savings and deposits</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">24/7 Customer Support</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Get help anytime, anywhere</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  Account Types
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {accountTypes.map((type) => (
                  <div key={type.value} className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{type.label}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Registration Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white dark:bg-gray-800 backdrop-blur-sm shadow-2xl border border-gray-200 dark:border-gray-700">
              <CardHeader className="space-y-2 pb-6">
                <CardTitle className="text-2xl font-bold text-center">Registration Form</CardTitle>
                <CardDescription className="text-center text-gray-600">
                  Fill in your details to create your account. All fields marked with * are mandatory.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold flex items-center gap-3 text-gray-900">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-blue-600" />
                      </div>
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="Enter your first name"
                          className="h-11 text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Enter your last name"
                          className="h-11 text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Enter your email"
                          className="h-11 text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium">Mobile Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="Enter 10-digit mobile number"
                          maxLength={10}
                          className="h-11 text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="dateOfBirth" className="text-sm font-medium">Date of Birth *</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                          className="h-11 text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="gender" className="text-sm font-medium">Gender *</Label>
                        <Select onValueChange={(value) => handleInputChange('gender', value)}>
                          <SelectTrigger className="h-11 bg-transparent dark:bg-transparent border-0 outline-none focus:ring-0 focus:border-0 text-gray-900 dark:text-white">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Address Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold flex items-center gap-3 text-gray-900">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-blue-600" />
                      </div>
                      Address Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <Label htmlFor="address" className="text-sm font-medium">Street Address *</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          placeholder="Enter your street address"
                          className="h-11 text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="city" className="text-sm font-medium">City *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          placeholder="Enter your city"
                          className="h-11 text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="state" className="text-sm font-medium">State *</Label>
                        <Select onValueChange={(value) => handleInputChange('state', value)}>
                          <SelectTrigger className="h-11 bg-transparent dark:bg-transparent border-0 outline-none focus:ring-0 focus:border-0 text-gray-900 dark:text-white">
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            {states.map((state) => (
                              <SelectItem key={state} value={state}>{state}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="pinCode" className="text-sm font-medium">PIN Code *</Label>
                        <Input
                          id="pinCode"
                          value={formData.pinCode}
                          onChange={(e) => handleInputChange('pinCode', e.target.value)}
                          placeholder="Enter 6-digit PIN code"
                          maxLength={6}
                          className="h-11 text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold flex items-center gap-3 text-gray-900">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Briefcase className="w-4 h-4 text-blue-600" />
                      </div>
                      Professional Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="occupation" className="text-sm font-medium">Occupation *</Label>
                        <Select onValueChange={(value) => handleInputChange('occupation', value)}>
                          <SelectTrigger className="h-11 bg-transparent dark:bg-transparent border-0 outline-none focus:ring-0 focus:border-0 text-gray-900 dark:text-white">
                            <SelectValue placeholder="Select occupation" />
                          </SelectTrigger>
                          <SelectContent>
                            {occupations.map((occ) => (
                              <SelectItem key={occ.value} value={occ.value}>{occ.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="annualIncome" className="text-sm font-medium">Annual Income *</Label>
                        <Select onValueChange={(value) => handleInputChange('annualIncome', value)}>
                          <SelectTrigger className="h-11 bg-transparent dark:bg-transparent border-0 outline-none focus:ring-0 focus:border-0 text-gray-900 dark:text-white">
                            <SelectValue placeholder="Select income range" />
                          </SelectTrigger>
                          <SelectContent>
                            {incomeRanges.map((range) => (
                              <SelectItem key={range.value} value={range.value}>{range.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* KYC Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold flex items-center gap-3 text-gray-900">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <FileText className="w-4 h-4 text-blue-600" />
                      </div>
                      KYC Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="panNumber" className="text-sm font-medium">PAN Number *</Label>
                        <Input
                          id="panNumber"
                          value={formData.panNumber}
                          onChange={(e) => handleInputChange('panNumber', e.target.value.toUpperCase())}
                          placeholder="Enter 10-digit PAN number"
                          maxLength={10}
                          className="h-11 text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="aadhaarNumber" className="text-sm font-medium">Aadhaar Number *</Label>
                        <Input
                          id="aadhaarNumber"
                          value={formData.aadhaarNumber}
                          onChange={(e) => handleInputChange('aadhaarNumber', e.target.value)}
                          placeholder="Enter 12-digit Aadhaar number"
                          maxLength={12}
                          className="h-11 text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Account Security */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold flex items-center gap-3 text-gray-900">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Lock className="w-4 h-4 text-blue-600" />
                      </div>
                      Account Security
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="password" className="text-sm font-medium">Password *</Label>
                        <div className="relative">
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={(e) => handleInputChange('password', e.target.value)}
                            placeholder="Create a strong password"
                            className="pr-12 h-11 text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-9 w-9 p-0 hover:bg-gray-100"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password *</Label>
                        <div className="relative">
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                            placeholder="Re-enter your password"
                            className="pr-12 h-11 text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-9 w-9 p-0 hover:bg-gray-100"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <Checkbox
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked: boolean) => handleInputChange('agreeTerms', checked)}
                      required
                    />
                    <div className="text-sm">
                      <Label htmlFor="agreeTerms" className="text-sm font-normal cursor-pointer leading-relaxed">
                        I agree to the Terms and Conditions and Privacy Policy of MNS Bank. 
                        I consent to receive communications from MNS Bank.
                      </Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-6 pt-4">
                    <Button type="submit" className="flex-1 h-12 text-lg font-semibold" size="lg">
                      Create Account
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button type="button" variant="outline" className="flex-1 h-12 text-lg font-semibold">
                      <Link href="/login" className="flex items-center justify-center">
                        Already have an account? Login
                      </Link>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-gray-600 leading-relaxed text-lg">
            Need help? Call us at <strong className="text-blue-600">1800-123-4567</strong> or email us at 
            <strong className="text-blue-600">support@mnsbank.com</strong>
          </p>
          <p className="text-gray-600 leading-relaxed">
            Your information is secure with us. We use industry-standard encryption to protect your data.
          </p>
        </div>
      </div>
    </div>
  )
}
