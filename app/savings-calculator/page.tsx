'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calculator, TrendingUp, PiggyBank, Target, ArrowRight, Info } from 'lucide-react'
import Link from 'next/link'

export default function SavingsCalculatorPage() {
  const [principal, setPrincipal] = useState('')
  const [monthlyDeposit, setMonthlyDeposit] = useState('')
  const [interestRate, setInterestRate] = useState('6.5')
  const [years, setYears] = useState('5')
  const [compounding, setCompounding] = useState('monthly')
  
  const [results, setResults] = useState<{
    totalDeposits: number
    totalInterest: number
    finalAmount: number
    monthlyBreakdown: Array<{month: number, balance: number, interest: number}>
  } | null>(null)

  const calculateSavings = () => {
    const p = parseFloat(principal) || 0
    const monthly = parseFloat(monthlyDeposit) || 0
    const rate = parseFloat(interestRate) / 100
    const time = parseInt(years) || 0
    
    let balance = p
    const monthlyRate = rate / 12
    const months = time * 12
    const breakdown = []
    
    for (let month = 1; month <= months; month++) {
      const monthInterest = balance * monthlyRate
      balance = balance + monthInterest + monthly
      breakdown.push({
        month,
        balance: Math.round(balance * 100) / 100,
        interest: Math.round(monthInterest * 100) / 100
      })
    }
    
    const totalDeposits = p + (monthly * months)
    const totalInterest = balance - totalDeposits
    const finalAmount = balance
    
    setResults({
      totalDeposits: Math.round(totalDeposits * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
      finalAmount: Math.round(finalAmount * 100) / 100,
      monthlyBreakdown: breakdown
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Savings Calculator</h1>
            <p className="text-xl mb-8">Calculate your savings growth and plan your financial future</p>
            <div className="flex gap-4 justify-center">
              <Link href="/savings-plans">
                <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-100 font-bold shadow-lg transform transition-all duration-300 hover:scale-105">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  View Savings Plans
                </Button>
              </Link>
              <Link href="/savings-account">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold shadow-lg transform transition-all duration-300 hover:scale-105">
                  Open Account
                  <PiggyBank className="w-5 h-5 mr-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <Card className="bg-white border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Calculator className="w-6 h-6 text-blue-600" />
                  Calculate Your Savings
                </CardTitle>
                <CardDescription>
                  Enter your savings details to see how your money will grow
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="principal" className="text-sm font-medium text-gray-700">
                    Initial Deposit (₹)
                  </Label>
                  <Input
                    id="principal"
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    placeholder="10000"
                    className="h-11 text-base text-gray-900 placeholder-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="monthly" className="text-sm font-medium text-gray-700">
                    Monthly Deposit (₹)
                  </Label>
                  <Input
                    id="monthly"
                    type="number"
                    value={monthlyDeposit}
                    onChange={(e) => setMonthlyDeposit(e.target.value)}
                    placeholder="5000"
                    className="h-11 text-base text-gray-900 placeholder-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rate" className="text-sm font-medium text-gray-700">
                    Interest Rate (% p.a.)
                  </Label>
                  <Select value={interestRate} onValueChange={setInterestRate}>
                    <SelectTrigger className="h-11 bg-transparent border-0 outline-none focus:ring-0 focus:border-0 text-gray-900">
                      <SelectValue placeholder="Select interest rate" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3.5">3.5% (Basic Savings)</SelectItem>
                      <SelectItem value="5.0">5.0% (Premium Savings)</SelectItem>
                      <SelectItem value="6.5">6.5% (Max Savings)</SelectItem>
                      <SelectItem value="7.0">7.0% (Special Rate)</SelectItem>
                      <SelectItem value="8.0">8.0% (High Yield)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="years" className="text-sm font-medium text-gray-700">
                    Investment Period (Years)
                  </Label>
                  <Select value={years} onValueChange={setYears}>
                    <SelectTrigger className="h-11 bg-transparent border-0 outline-none focus:ring-0 focus:border-0 text-gray-900">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Year</SelectItem>
                      <SelectItem value="3">3 Years</SelectItem>
                      <SelectItem value="5">5 Years</SelectItem>
                      <SelectItem value="10">10 Years</SelectItem>
                      <SelectItem value="15">15 Years</SelectItem>
                      <SelectItem value="20">20 Years</SelectItem>
                      <SelectItem value="25">25 Years</SelectItem>
                      <SelectItem value="30">30 Years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="compounding" className="text-sm font-medium text-gray-700">
                    Compounding Frequency
                  </Label>
                  <Select value={compounding} onValueChange={setCompounding}>
                    <SelectTrigger className="h-11 bg-transparent border-0 outline-none focus:ring-0 focus:border-0 text-gray-900">
                      <SelectValue placeholder="Select compounding" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="half-yearly">Half-Yearly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={calculateSavings}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg transform transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate Returns
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {results && (
                <>
                  <Card className="bg-white border-blue-200 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                        Your Savings Growth
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                          <span className="text-gray-700">Total Deposits</span>
                          <span className="text-xl font-bold text-blue-600">
                            {formatCurrency(results.totalDeposits)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                          <span className="text-gray-700">Interest Earned</span>
                          <span className="text-xl font-bold text-green-600">
                            {formatCurrency(results.totalInterest)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                          <span className="text-gray-700">Final Amount</span>
                          <span className="text-xl font-bold text-purple-600">
                            {formatCurrency(results.finalAmount)}
                          </span>
                        </div>
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Info className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium text-gray-700">
                              Growth Summary
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            Your investment of {formatCurrency(results.totalDeposits)} will grow to 
                            {formatCurrency(results.finalAmount)} in {years} years, earning 
                            {formatCurrency(results.totalInterest)} in interest.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-blue-200 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl">Next Steps</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Link href="/savings-account">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg transform transition-all duration-300 hover:scale-105">
                          <PiggyBank className="w-5 h-5 mr-2" />
                          Open Savings Account
                        </Button>
                      </Link>
                      <Link href="/savings-plans">
                        <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold shadow-lg transform transition-all duration-300 hover:scale-105">
                          <Target className="w-5 h-5 mr-2" />
                          Compare Savings Plans
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </>
              )}

              {!results && (
                <Card className="bg-white border-blue-200 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <Calculator className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Ready to Calculate?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Enter your savings details on the left to see how your money will grow over time.
                    </p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <p>• Compare different interest rates</p>
                      <p>• See the power of compound interest</p>
                      <p>• Plan your financial future</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
