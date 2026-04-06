'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Home, Calculator, FileText, Shield, TrendingUp, Clock, CheckCircle, ArrowRight, Phone, Users, PiggyBank, Target } from 'lucide-react'
import Link from 'next/link'

export default function SavingsPlansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-800 via-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Savings Account Plans</h1>
            <p className="text-xl mb-8">Compare our savings account options and choose the best one for you</p>
            <div className="flex gap-4 justify-center">
              <Link href="/savings-account">
                <Button size="lg" className="bg-white text-purple-800 hover:bg-gray-100 font-bold shadow-lg transform transition-all duration-300 hover:scale-105">
                  Open Account
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/savings-calculator">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/50 border-2 border-yellow-300">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate Returns
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Savings Account Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white border-purple-200 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <PiggyBank className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Basic Savings</CardTitle>
                <CardDescription>Perfect for everyday banking needs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-600">3.5%*</span>
                    <Badge variant="secondary">Interest Rate</Badge>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Zero minimum balance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Free debit card</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Mobile banking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>No hidden charges</span>
                    </li>
                  </ul>
                  <Link href="/savings-account">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold shadow-lg transform transition-all duration-300 hover:scale-105">
                      Open Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-purple-200 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Premium Savings</CardTitle>
                <CardDescription>Enhanced features for higher returns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-600">5.0%*</span>
                    <Badge variant="secondary">Interest Rate</Badge>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Higher interest rate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Premium debit card</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Personalized service</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Free ATM withdrawals</span>
                    </li>
                  </ul>
                  <Link href="/savings-account">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold shadow-lg transform transition-all duration-300 hover:scale-105">
                      Open Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-purple-200 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Max Savings</CardTitle>
                <CardDescription>Maximum returns with exclusive benefits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-600">6.5%*</span>
                    <Badge variant="secondary">Interest Rate</Badge>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Maximum interest rate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Exclusive benefits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Dedicated relationship manager</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Priority service</span>
                    </li>
                  </ul>
                  <Link href="/savings-account">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold shadow-lg transform transition-all duration-300 hover:scale-105">
                      Open Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Table */}
          <Card className="mb-16 bg-white border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Calculator className="w-6 h-6 text-purple-600" />
                Compare Savings Plans
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-purple-200">
                      <th className="text-left p-4 font-semibold text-gray-900">Features</th>
                      <th className="text-center p-4 font-semibold text-gray-900">Basic Savings</th>
                      <th className="text-center p-4 font-semibold text-gray-900">Premium Savings</th>
                      <th className="text-center p-4 font-semibold text-gray-900">Max Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-purple-100">
                      <td className="text-gray-900">Interest Rate</td>
                      <td className="text-center p-4 font-bold text-purple-600">3.5%*</td>
                      <td className="text-center p-4 font-bold text-purple-600">5.0%*</td>
                      <td className="text-center p-4 font-bold text-purple-600">6.5%*</td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="text-gray-900">Minimum Balance</td>
                      <td className="text-center p-4 text-gray-900">₹0</td>
                      <td className="text-center p-4 text-gray-900">₹5,000</td>
                      <td className="text-center p-4 text-gray-900">₹10,000</td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="text-gray-900">Debit Card</td>
                      <td className="text-center p-4 text-gray-900">Free Basic</td>
                      <td className="text-center p-4 text-gray-900">Free Premium</td>
                      <td className="text-center p-4 text-gray-900">Free Platinum</td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="text-gray-900">ATM Withdrawals</td>
                      <td className="text-center p-4 text-gray-900">5 free/month</td>
                      <td className="text-center p-4 text-gray-900">Unlimited</td>
                      <td className="text-center p-4 text-gray-900">Unlimited</td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="text-gray-900">Mobile Banking</td>
                      <td className="text-center p-4 text-gray-900">✓</td>
                      <td className="text-center p-4 text-gray-900">✓</td>
                      <td className="text-center p-4 text-gray-900">✓</td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="text-gray-900">Personalized Service</td>
                      <td className="text-center p-4 text-gray-900">-</td>
                      <td className="text-center p-4 text-gray-900">✓</td>
                      <td className="text-center p-4 text-gray-900">✓</td>
                    </tr>
                    <tr className="border-b border-purple-100">
                      <td className="text-gray-900">Relationship Manager</td>
                      <td className="text-center p-4 text-gray-900">-</td>
                      <td className="text-center p-4 text-gray-900">-</td>
                      <td className="text-center p-4 text-gray-900">✓</td>
                    </tr>
                    <tr>
                      <td className="text-gray-900">Annual Fee</td>
                      <td className="text-center p-4 text-gray-900">₹0</td>
                      <td className="text-center p-4 text-gray-900">₹500</td>
                      <td className="text-center p-4 text-gray-900">₹1,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Benefits Section */}
          <Card className="bg-white border-purple-200 shadow-lg mb-16">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">High Interest</h3>
                  <p className="text-sm text-gray-600">Earn up to 6.5%* interest</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Secure Banking</h3>
                  <p className="text-sm text-gray-600">Bank-grade security for your money</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">24/7 Support</h3>
                  <p className="text-sm text-gray-600">Round-the-clock customer service</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Quick Access</h3>
                  <p className="text-sm text-gray-600">Instant access to your funds</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Need Help Choosing a Savings Plan?</h2>
                <p className="text-gray-600 mb-6">Our banking experts are here to help you select the perfect account</p>
                <div className="flex justify-center">
                  <Link href="/contact-us">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold shadow-lg transform transition-all duration-300 hover:scale-105">
                      <Phone className="w-5 h-5 mr-2" />
                      Talk to Expert
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
