'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { User, Calculator, FileText, Shield, TrendingUp, Clock, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function PersonalLoanDetailsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Personal Loan Details</h1>
            <p className="text-xl mb-8">Instant personal loans with competitive interest rates and flexible terms</p>
            <div className="flex gap-4 justify-center">
              <Link href="/personal-loan">
                <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100 font-bold shadow-lg transform transition-all duration-300 hover:scale-105">
                  Check Eligibility
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/emi-calculator">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/50 border-2 border-yellow-300">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate EMI
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Loan Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-green-200 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Instant Approval</CardTitle>
                <CardDescription>Get approved in just 5 minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Online application</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Quick verification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Instant disbursal</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Flexible Amount</CardTitle>
                <CardDescription>Loan amount from ₹50,000 to ₹25 Lakhs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Up to ₹25 Lakhs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Flexible tenure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>No collateral required</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Competitive Rates</CardTitle>
                <CardDescription>Interest rates starting from 10.99%*</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Low processing fees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>No hidden charges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Transparent terms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Eligibility Criteria */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <FileText className="w-6 h-6 text-green-600" />
                Eligibility Criteria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">For Salaried Individuals</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Age: 21 to 60 years</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Minimum income: ₹15,000 per month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Work experience: Minimum 6 months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>CIBIL score: 750 and above</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">For Self-Employed Individuals</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Age: 21 to 65 years</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Minimum income: ₹20,000 per month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Business stability: Minimum 2 years</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>CIBIL score: 750 and above</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Documents Required */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <FileText className="w-6 h-6 text-green-600" />
                Documents Required
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Identity Proof</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">Aadhaar Card</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">PAN Card</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">Voter ID</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">Driving License</Badge>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Address Proof</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">Utility Bills</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">Rent Agreement</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">Passport</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">Bank Statements</Badge>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Income Proof</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">Salary Slips</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">Form 16</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">IT Returns</Badge>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">Bank Statements</Badge>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Loan Benefits */}
          <Card className="mb-12 bg-gradient-to-r from-green-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-600" />
                Why Choose Our Personal Loan?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Quick Processing</h3>
                  <p className="text-sm text-gray-600">Get your loan approved in minutes</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">100% Digital</h3>
                  <p className="text-sm text-gray-600">Complete online application process</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Flexible Tenure</h3>
                  <p className="text-sm text-gray-600">Choose repayment period up to 5 years</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">No Collateral</h3>
                  <p className="text-sm text-gray-600">Unsecured loan with no security required</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Need Help with Your Personal Loan?</h2>
                <p className="text-gray-600 mb-6">Our loan experts are here to assist you</p>
                <div className="flex gap-4 justify-center">
                  <Link href="/contact-us">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg transform transition-all duration-300 hover:scale-105">
                      <Phone className="w-5 h-5 mr-2" />
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/personal-loan">
                    <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold shadow-lg transform transition-all duration-300 hover:scale-105">
                      Apply Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
