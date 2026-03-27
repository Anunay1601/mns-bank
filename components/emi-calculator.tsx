'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calculator, TrendingUp, DollarSign, Calendar } from 'lucide-react'

interface EMIData {
  emi: number
  totalInterest: number
  totalPayment: number
}

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState<string>('1000000')
  const [interestRate, setInterestRate] = useState<string>('8.5')
  const [tenure, setTenure] = useState<string>('20')
  const [tenureType, setTenureType] = useState<'years' | 'months'>('years')
  const [emiData, setEmiData] = useState<EMIData | null>(null)

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount) || 0
    const rate = parseFloat(interestRate) || 0
    let time = parseFloat(tenure) || 0

    // Convert tenure to months
    if (tenureType === 'years') {
      time = time * 12
    }

    if (principal <= 0 || rate <= 0 || time <= 0) {
      setEmiData(null)
      return
    }

    // EMI Formula: P × r × (1 + r)^n / ((1 + r)^n - 1)
    // where P = principal, r = monthly interest rate, n = tenure in months
    const monthlyRate = rate / 12 / 100
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, time) / (Math.pow(1 + monthlyRate, time) - 1)
    const totalPayment = emi * time
    const totalInterest = totalPayment - principal

    setEmiData({
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment)
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount)
  }

  const handleLoanAmountChange = (value: string) => {
    // Remove non-numeric characters except decimal point and limit to reasonable range
    const cleanValue = value.replace(/[^\d.]/g, '')
    const numValue = parseFloat(cleanValue)
    
    // Limit to reasonable range (₹1,000 to ₹10 Crore)
    if (numValue > 100000000) {
      setLoanAmount('100000000')
    } else if (numValue < 1000) {
      setLoanAmount('1000')
    } else {
      setLoanAmount(cleanValue)
    }
  }

  const handleInterestRateChange = (value: string) => {
    // Remove non-numeric characters except decimal point and limit to reasonable range
    const cleanValue = value.replace(/[^\d.]/g, '')
    const numValue = parseFloat(cleanValue)
    
    // Limit to reasonable range (1% to 25%)
    if (numValue > 25) {
      setInterestRate('25')
    } else if (numValue < 1) {
      setInterestRate('1')
    } else {
      setInterestRate(cleanValue)
    }
  }

  const handleTenureChange = (value: string) => {
    // Remove non-numeric characters
    const cleanValue = value.replace(/[^\d]/g, '')
    const numValue = parseInt(cleanValue)
    
    // Limit to reasonable range (1 to 30 years or 1 to 360 months)
    if (tenureType === 'years') {
      if (numValue > 30) {
        setTenure('30')
      } else if (numValue < 1) {
        setTenure('1')
      } else {
        setTenure(cleanValue)
      }
    } else {
      if (numValue > 360) {
        setTenure('360')
      } else if (numValue < 1) {
        setTenure('1')
      } else {
        setTenure(cleanValue)
      }
    }
  }

  const setQuickValues = (type: 'home' | 'personal' | 'car') => {
    switch (type) {
      case 'home':
        setLoanAmount('5000000')
        setInterestRate('8.5')
        setTenure('20')
        setTenureType('years')
        break
      case 'personal':
        setLoanAmount('500000')
        setInterestRate('12')
        setTenure('4')
        setTenureType('years')
        break
      case 'car':
        setLoanAmount('800000')
        setInterestRate('9')
        setTenure('5')
        setTenureType('years')
        break
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              EMI Calculator
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Calculate your Equated Monthly Installment (EMI) instantly with our easy-to-use calculator
            </p>
          </div>

          {/* Quick Presets */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Presets</CardTitle>
                <CardDescription>Use common loan configurations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setQuickValues('home')}
                    className="flex items-center gap-2"
                  >
                    <Home className="w-4 h-4" />
                    Home Loan
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setQuickValues('personal')}
                    className="flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    Personal Loan
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setQuickValues('car')}
                    className="flex items-center gap-2"
                  >
                    <Car className="w-4 h-4" />
                    Car Loan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <Card>
              <CardHeader>
                <CardTitle>Loan Details</CardTitle>
                <CardDescription>Enter your loan parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="loanAmount">Loan Amount (₹)</Label>
                  <Input
                    id="loanAmount"
                    value={loanAmount}
                    onChange={(e) => handleLoanAmountChange(e.target.value)}
                    placeholder="Enter loan amount"
                    className="text-lg"
                  />
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setLoanAmount('1000000')}
                    >
                      ₹1L
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setLoanAmount('5000000')}
                    >
                      ₹5L
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setLoanAmount('10000000')}
                    >
                      ₹10L
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setLoanAmount('50000000')}
                    >
                      ₹50L
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="interestRate">Interest Rate (% p.a.)</Label>
                  <Input
                    id="interestRate"
                    value={interestRate}
                    onChange={(e) => handleInterestRateChange(e.target.value)}
                    placeholder="Enter interest rate"
                    className="text-lg"
                  />
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInterestRate('6.5')}
                    >
                      6.5%
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInterestRate('8.5')}
                    >
                      8.5%
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInterestRate('12')}
                    >
                      12%
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setInterestRate('15')}
                    >
                      15%
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="tenure">Loan Tenure</Label>
                  <div className="flex gap-2">
                    <Input
                      id="tenure"
                      value={tenure}
                      onChange={(e) => handleTenureChange(e.target.value)}
                      placeholder="Enter tenure"
                      className="text-lg"
                    />
                    <Select value={tenureType} onValueChange={(value: 'years' | 'months') => setTenureType(value)}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="years">Years</SelectItem>
                        <SelectItem value="months">Months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => { setTenure('1'); setTenureType('years') }}
                    >
                      1 Year
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => { setTenure('5'); setTenureType('years') }}
                    >
                      5 Years
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => { setTenure('10'); setTenureType('years') }}
                    >
                      10 Years
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => { setTenure('20'); setTenureType('years') }}
                    >
                      20 Years
                    </Button>
                  </div>
                </div>

                <Button onClick={calculateEMI} className="w-full" size="lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate EMI
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {emiData ? (
                <>
                  {/* EMI Result */}
                  <Card className="border-2 border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-2xl text-blue-900">Monthly EMI</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-blue-900">
                        {formatCurrency(emiData.emi)}
                      </div>
                      <p className="text-blue-700 mt-2">Your monthly installment amount</p>
                    </CardContent>
                  </Card>

                  {/* Breakdown */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-green-600" />
                          <span className="font-medium">Principal Amount</span>
                        </div>
                        <span className="font-bold text-lg">
                          {formatCurrency(parseFloat(loanAmount) || 0)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-orange-600" />
                          <span className="font-medium">Total Interest</span>
                        </div>
                        <span className="font-bold text-lg text-orange-600">
                          {formatCurrency(emiData.totalInterest)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded border border-blue-200">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-blue-600" />
                          <span className="font-medium">Total Payment</span>
                        </div>
                        <span className="font-bold text-lg text-blue-600">
                          {formatCurrency(emiData.totalPayment)}
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Additional Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Loan Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Interest Rate</span>
                        <span className="font-medium">{interestRate}% p.a.</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Loan Tenure</span>
                        <span className="font-medium">
                          {tenure} {tenureType}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Months</span>
                        <span className="font-medium">
                          {tenureType === 'years' ? (parseFloat(tenure) * 12) : tenure}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Interest as % of Principal</span>
                        <span className="font-medium">
                          {((emiData.totalInterest / (parseFloat(loanAmount) || 1)) * 100).toFixed(1)}%
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card>
                  <CardContent className="text-center py-12">
                    <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      Ready to Calculate
                    </h3>
                    <p className="text-gray-600">
                      Enter loan details and click &quot;Calculate EMI&quot; to see your monthly installment
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Information Section */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>About EMI Calculation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">What is EMI?</h4>
                  <p className="text-gray-600 text-sm">
                    EMI (Equated Monthly Installment) is the fixed amount you pay each month towards 
                    repaying your loan. It includes both principal and interest components.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">EMI Formula</h4>
                  <p className="text-gray-600 text-sm">
                    EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)<br />
                    Where P = Principal, r = Monthly interest rate, n = Tenure in months
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Factors Affecting EMI</h4>
                  <p className="text-gray-600 text-sm">
                    • Loan amount (higher amount = higher EMI)<br />
                    • Interest rate (higher rate = higher EMI)<br />
                    • Loan tenure (longer tenure = lower EMI)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tips for Lower EMI</h4>
                  <p className="text-gray-600 text-sm">
                    • Opt for longer loan tenure<br />
                    • Negotiate for lower interest rates<br />
                    • Make larger down payment
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Add missing icons
function Home({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )
}

function User({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
}

function Car({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
  )
}
