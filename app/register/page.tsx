'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Phone, Mail, User, Lock, Eye, EyeOff, Calendar as CalendarIcon, MapPin, Briefcase, Shield, CheckCircle, ArrowRight, Users, FileText, Building2, CreditCard, GraduationCap, Home, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import BasicDatePicker from '@/components/ui/calendar-1'

export default function RegisterPage() {
  const { t } = useLanguage()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [date, setDate] = useState<Date>()
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
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

  const handleInputChange = (field: string, value: string | boolean | Date) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Registration data:', { ...formData, dateOfBirth: date })
  }

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
    'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
    'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
    'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Jammu and Kashmir',
    'Lakshadweep', 'Ladakh', 'Puducherry'
  ]

  const occupations = [
    { value: 'student', label: 'Student' },
    { value: 'salaried', label: 'Salaried Professional' },
    { value: 'business', label: 'Business Owner' },
    { value: 'self-employed', label: 'Self-Employed' },
    { value: 'freelancer', label: 'Freelancer' },
    { value: 'homemaker', label: 'Homemaker' },
    { value: 'retired', label: 'Retired' },
    { value: 'other', label: 'Other' }
  ]

  const incomeRanges = [
    { value: '0-5lakh', label: 'Below ₹5 Lakhs' },
    { value: '5-10lakh', label: '₹5-10 Lakhs' },
    { value: '10-25lakh', label: '₹10-25 Lakhs' },
    { value: '25-50lakh', label: '₹25-50 Lakhs' },
    { value: '50lakh+', label: 'Above ₹50 Lakhs' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Building2 className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h1>
          <p className="text-gray-600">Join MNS Bank and experience seamless banking</p>
        </div>

        <Card className="bg-white shadow-2xl border-0">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Enter your first name"
                      className="h-11 text-base text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Enter your last name"
                      className="h-11 text-base text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                      className="h-11 text-base text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Mobile Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter 10-digit mobile number"
                      maxLength={10}
                      className="h-11 text-base text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender" className="text-sm font-medium text-gray-700">Gender *</Label>
                    <Select onValueChange={(value) => handleInputChange('gender', value)}>
                      <SelectTrigger className="h-11 bg-transparent border-0 outline-none focus:ring-0 focus:border-0 text-gray-900">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700">Date of Birth *</Label>
                    <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full h-12 justify-start text-left font-normal bg-white border border-gray-300 rounded-lg shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900",
                            !date && "text-gray-500"
                          )}
                        >
                          <CalendarIcon className="mr-3 h-5 w-5 text-blue-600" />
                          {date ? format(date, "dd MMMM yyyy") : "Select your date of birth"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-white rounded-xl shadow-xl border border-gray-200" align="start">
                        <BasicDatePicker value={date} onChange={(newDate) => {
                          setDate(newDate);
                          setIsCalendarOpen(false);
                        }} />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>

              {/* Address Information Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Address Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address" className="text-sm font-medium text-gray-700">Street Address *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Enter your street address"
                      className="h-11 text-base text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm font-medium text-gray-700">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      placeholder="Enter your city"
                      className="h-11 text-base text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-sm font-medium text-gray-700">State *</Label>
                    <Select onValueChange={(value) => handleInputChange('state', value)}>
                      <SelectTrigger className="h-11 bg-transparent border-0 outline-none focus:ring-0 focus:border-0 text-gray-900">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {states.map((state) => (
                          <SelectItem key={state} value={state}>{state}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pinCode" className="text-sm font-medium text-gray-700">PIN Code *</Label>
                    <Input
                      id="pinCode"
                      value={formData.pinCode}
                      onChange={(e) => handleInputChange('pinCode', e.target.value)}
                      placeholder="Enter 6-digit PIN code"
                      maxLength={6}
                      className="h-11 text-base text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Professional Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="occupation" className="text-sm font-medium text-gray-700">Occupation *</Label>
                    <Select onValueChange={(value) => handleInputChange('occupation', value)}>
                      <SelectTrigger className="h-11 bg-transparent border-0 outline-none focus:ring-0 focus:border-0 text-gray-900">
                        <SelectValue placeholder="Select occupation" />
                      </SelectTrigger>
                      <SelectContent>
                        {occupations.map((occ) => (
                          <SelectItem key={occ.value} value={occ.value}>{occ.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="annualIncome" className="text-sm font-medium text-gray-700">Annual Income *</Label>
                    <Select onValueChange={(value) => handleInputChange('annualIncome', value)}>
                      <SelectTrigger className="h-11 bg-transparent border-0 outline-none focus:ring-0 focus:border-0 text-gray-900">
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

              {/* KYC Information Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">KYC Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="panNumber" className="text-sm font-medium text-gray-700">PAN Number *</Label>
                    <Input
                      id="panNumber"
                      value={formData.panNumber}
                      onChange={(e) => handleInputChange('panNumber', e.target.value.toUpperCase())}
                      placeholder="Enter 10-digit PAN number"
                      maxLength={10}
                      className="h-11 text-base text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="aadhaarNumber" className="text-sm font-medium text-gray-700">Aadhaar Number *</Label>
                    <Input
                      id="aadhaarNumber"
                      value={formData.aadhaarNumber}
                      onChange={(e) => handleInputChange('aadhaarNumber', e.target.value)}
                      placeholder="Enter 12-digit Aadhaar number"
                      maxLength={12}
                      className="h-11 text-base text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Account Security Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <Lock className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Account Security</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">Password *</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        placeholder="Create a strong password"
                        className="pr-12 h-11 text-base text-gray-900 placeholder-gray-500"
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

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">Confirm Password *</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        placeholder="Re-enter your password"
                        className="pr-12 h-11 text-base text-gray-900 placeholder-gray-500"
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
                  onCheckedChange={(checked) => handleInputChange('agreeTerms', checked)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label htmlFor="agreeTerms" className="text-sm font-medium text-gray-700 cursor-pointer">
                    I agree to the Terms and Conditions and Privacy Policy *
                  </Label>
                  <p className="text-xs text-gray-500 mt-1">
                    By creating an account, you agree to our terms of service and privacy policy. 
                    We'll send you account-related emails occasionally.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col gap-4">
                <Button
                  type="submit"
                  className="group w-full h-12 bg-gradient-to-r from-gray-900 via-gray-800 to-black hover:from-gray-700 hover:via-gray-600 hover:to-gray-900 text-white font-bold shadow-2xl transform transition-all duration-200 hover:scale-110 hover:shadow-black/50 hover:shadow-3xl active:scale-90 border-2 border-gray-600 hover:border-yellow-400"
                  disabled={!formData.agreeTerms}
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="transition-all duration-200 group-hover:scale-125 group-hover:text-yellow-300">Create Account</span>
                    <ArrowRight className="w-5 h-5 transition-all duration-200 group-hover:translate-x-3 group-hover:scale-150 group-hover:rotate-12 group-hover:text-yellow-400" />
                  </span>
                </Button>

                <div className="text-center text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                    Sign in here
                  </Link>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
