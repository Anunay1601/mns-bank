'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Home, Calculator, FileText, Shield, TrendingUp, Clock, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function HomeLoanDetailsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Home Loan Details</h1>
            <p className="text-xl mb-8">Complete information about our home loan products and services</p>
            <div className="flex gap-4 justify-center">
              <Link href="/home-loan">
                <Button size="lg" className="bg-white text-orange-800 hover:bg-gray-100 font-bold shadow-lg transform transition-all duration-300 hover:scale-105">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/emi-calculator">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-orange-900 font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/50 border-2 border-yellow-300">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate EMI
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Loan Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white border-orange-200 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Interest Rates</CardTitle>
                <CardDescription>Competitive rates starting from 8.5%*</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Fixed and floating rate options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>No hidden charges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Transparent pricing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-orange-200 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Quick Processing</CardTitle>
                <CardDescription>Fast approval and disbursal</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Approval in 24 hours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Minimal documentation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Online application process</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-orange-200 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Flexible Tenure</CardTitle>
                <CardDescription>Choose repayment period up to 30 years</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Tenure up to 30 years</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Part payment options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Loan transfer facility</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Eligibility Criteria */}
          <Card className="mb-12 bg-white border-orange-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <FileText className="w-6 h-6 text-orange-600" />
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
                      <span>Minimum income: ₹25,000 per month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Work experience: Minimum 2 years</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>CIBIL score: 650 and above</span>
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
                      <span>Minimum income: ₹40,000 per month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Business stability: Minimum 3 years</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>CIBIL score: 650 and above</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Documents Required */}
          <Card className="mb-12 bg-white border-orange-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <FileText className="w-6 h-6 text-orange-600" />
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
                      <Badge variant="outline">Passport</Badge>
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
                      <Badge variant="outline">Property Documents</Badge>
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

          {/* Contact Section */}
          <Card className="bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Need Help with Your Home Loan?</h2>
                <p className="text-gray-600 mb-6">Our loan experts are here to assist you</p>
                <div className="flex gap-4 justify-center">
                  <Link href="/contact-us">
                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-bold shadow-lg transform transition-all duration-300 hover:scale-105">
                      <Phone className="w-5 h-5 mr-2" />
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/home-loan">
                    <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-bold shadow-lg transform transition-all duration-300 hover:scale-105">
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
