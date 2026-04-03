'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Eye, EyeOff, Lock, Mail, User, ArrowRight, Shield, Phone, HelpCircle, Building2 } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function LoginPage() {
  const { t } = useLanguage()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login data:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-8 px-4 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Column - Login Info */}
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Welcome Back to MNS Bank
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Access your secure online banking portal and manage your accounts anytime, anywhere.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-white/20">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    Secure Banking
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 leading-relaxed">
                    Your account is protected with industry-standard encryption and multi-factor authentication.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-white/20">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    24/7 Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 leading-relaxed">
                    Need help? Our customer support team is available round the clock to assist you.
                  </p>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-2xl shadow-xl border border-blue-200">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">New to MNS Bank?</h3>
                  <p className="text-blue-100 leading-relaxed text-base">
                    Open an account in minutes and start your banking journey with us.
                  </p>
                </div>
                <Link href="/register">
                  <Button className="w-full h-12 text-base font-bold bg-white text-blue-600 hover:bg-blue-50 border-2 border-white/30 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95" size="lg">
                    Create New Account
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <div className="text-center pt-2">
                  <p className="text-blue-100 text-xs">
                    Join 1 Crore+ satisfied customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Login Form */}
          <div className="w-full max-w-md mx-auto lg:max-w-none">
            <Card className="bg-white backdrop-blur-sm shadow-2xl border border-gray-200">
              <CardHeader className="space-y-2 pb-6">
                <CardTitle className="text-2xl font-bold text-center text-gray-900">Login to Your Account</CardTitle>
                <CardDescription className="text-center text-gray-600">
                  Enter your credentials to access your secure banking portal.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Username Field */}
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-sm font-medium text-gray-700">Username or Customer ID</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="username"
                        type="text"
                        value={formData.username}
                        onChange={(e) => handleInputChange('username', e.target.value)}
                        placeholder="Enter your username or customer ID"
                        className="pl-12 h-11 text-base text-gray-900 placeholder-gray-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        placeholder="Enter your password"
                        className="pl-12 pr-12 h-11 text-base text-gray-900 placeholder-gray-500"
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

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="rememberMe"
                        checked={formData.rememberMe}
                        onCheckedChange={(checked: boolean) => handleInputChange('rememberMe', checked)}
                      />
                      <Label htmlFor="rememberMe" className="text-sm font-normal cursor-pointer text-gray-700">
                        Remember me
                      </Label>
                    </div>
                    <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline font-medium">
                      Forgot password?
                    </Link>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full h-12 text-lg font-semibold" size="lg">
                    Login to Account
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  {/* Security Notice */}
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Shield className="w-4 h-4 text-amber-600" />
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold text-amber-800 mb-1">Security Notice</p>
                        <p className="text-amber-700 leading-relaxed">
                          Never share your login credentials. MNS Bank will never ask for your password via email or phone.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <div className="mt-8 text-center">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/register" className="text-sm text-blue-600 hover:underline flex items-center gap-2 font-medium">
                  <User className="w-4 h-4" />
                  Create Account
                </Link>
                <span className="text-gray-300 hidden sm:inline">|</span>
                <Link href="/help" className="text-sm text-blue-600 hover:underline flex items-center gap-2 font-medium">
                  <HelpCircle className="w-4 h-4" />
                  Need Help?
                </Link>
                <span className="text-gray-300 hidden sm:inline">|</span>
                <Link href="/security" className="text-sm text-blue-600 hover:underline flex items-center gap-2 font-medium">
                  <Shield className="w-4 h-4" />
                  Security Tips
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center space-y-3">
          <p className="text-gray-600 leading-relaxed">
            Having trouble logging in? Call us at <strong className="text-blue-600">1800-123-4567</strong> or visit your nearest branch.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For your security, please ensure you're on the official MNS Bank website: <strong className="text-blue-600">www.mnsbank.com</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
