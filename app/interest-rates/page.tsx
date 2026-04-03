'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TrendingUp, TrendingDown, Calendar, Download, RefreshCw } from 'lucide-react'
import Link from 'next/link'

const handleDownloadRateSheet = () => {
    // Create rate sheet data
    const rateSheetData = {
      loanRates: [
        {
          product: "Home Loan",
          current: "8.50%",
          previous: "8.75%",
          trend: "down",
          tenure: "Up to 30 years",
          amount: "Up to ₹5 Cr",
          link: "/home-loan"
        },
        {
          product: "Personal Loan",
          current: "12.00%",
          previous: "11.50%",
          trend: "up",
          tenure: "1-5 years",
          amount: "Up to ₹25 L",
          link: "/personal-loan"
        },
        {
          product: "Education Loan",
          current: "9.50%",
          previous: "9.50%",
          trend: "stable",
          tenure: "Up to 15 years",
          amount: "Up to ₹1.5 Cr",
          link: "/education-loan"
        },
        {
          product: "Car Loan",
          current: "9.00%",
          previous: "9.25%",
          trend: "down",
          tenure: "Up to 7 years",
          amount: "Up to ₹50 L",
          link: "/car-loan"
        },
        {
          product: "Business Loan",
          current: "12.50%",
          previous: "12.00%",
          trend: "up",
          tenure: "1-10 years",
          amount: "Up to ₹2 Cr",
          link: "/business-loan"
        }
      ],
      depositRates: [
        {
          product: "Savings Account",
          current: "6.50%",
          previous: "6.00%",
          trend: "up",
          minBalance: "Zero Balance",
          link: "/savings-account"
        },
        {
          product: "Fixed Deposit (1 Year)",
          current: "7.50%",
          previous: "7.25%",
          trend: "up",
          minBalance: "₹10,000",
          link: "/fixed-deposits"
        },
        {
          product: "Fixed Deposit (5 Years)",
          current: "8.00%",
          previous: "7.75%",
          trend: "up",
          minBalance: "₹10,000",
          link: "/fixed-deposits"
        }
      ],
      lastUpdated: "1st March 2024"
    }
    
    // Convert to JSON string
    const dataStr = JSON.stringify(rateSheetData, null, 2)
    
    // Create blob and download
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'MNS_Bank_Interest_Rates.json'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

export default function InterestRatesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Current Interest Rates
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest interest rates for loans and deposits. 
            Rates effective from 1st March 2024.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button variant="outline" className="flex items-center gap-2" onClick={handleDownloadRateSheet}>
              <Download className="w-4 h-4" />
              Download Rate Sheet
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Last Updated: Today
            </Button>
          </div>
        </div>

        {/* Loan Rates */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Loan Interest Rates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                product: "Home Loan",
                current: "8.50%",
                previous: "8.75%",
                trend: "down",
                tenure: "Up to 30 years",
                amount: "Up to ₹5 Cr",
                link: "/home-loan"
              },
              {
                product: "Personal Loan",
                current: "12.00%",
                previous: "11.50%",
                trend: "up",
                tenure: "1-5 years",
                amount: "Up to ₹25 L",
                link: "/personal-loan"
              },
              {
                product: "Education Loan",
                current: "9.50%",
                previous: "9.50%",
                trend: "stable",
                tenure: "Up to 15 years",
                amount: "Up to ₹1.5 Cr",
                link: "/education-loan"
              },
              {
                product: "Car Loan",
                current: "9.00%",
                previous: "9.25%",
                trend: "down",
                tenure: "Up to 7 years",
                amount: "Up to ₹50 L",
                link: "/car-loan"
              },
              {
                product: "Business Loan",
                current: "12.50%",
                previous: "12.00%",
                trend: "up",
                tenure: "1-10 years",
                amount: "Up to ₹2 Cr",
                link: "/business-loan"
              }
            ].map((loan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{loan.product}</CardTitle>
                      <CardDescription className="text-sm text-gray-600">
                        {loan.tenure} • {loan.amount}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      {loan.trend === 'up' ? (
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      ) : loan.trend === 'down' ? (
                        <TrendingDown className="w-5 h-5 text-red-600" />
                      ) : (
                        <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                      )}
                      <span className="text-sm text-gray-500">
                        {loan.previous}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Previous Rate</p>
                      <p className="text-lg font-semibold text-gray-500 line-through">
                        {loan.previous}
                      </p>
                    </div>
                    <div className="text-center">
                      <Badge variant="secondary" className="text-lg px-4 py-2">
                        {loan.current}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Change</p>
                      <p className={`text-lg font-semibold ${
                        loan.trend === 'up' ? 'text-green-600' : 
                        loan.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {loan.trend === 'up' ? '+' : loan.trend === 'down' ? '-' : ''}
                        {Math.abs(parseFloat(loan.current) - parseFloat(loan.previous)).toFixed(2)}%
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Button asChild className="w-full">
                      <Link href={loan.link}>
                        Apply Now
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Deposit Rates */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Deposit Interest Rates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                product: "Savings Account",
                current: "6.50%",
                previous: "6.00%",
                trend: "up",
                minBalance: "Zero Balance",
                link: "/savings-account"
              },
              {
                product: "Fixed Deposit (1 Year)",
                current: "7.50%",
                previous: "7.25%",
                trend: "up",
                minBalance: "₹10,000",
                link: "/fixed-deposits"
              },
              {
                product: "Fixed Deposit (5 Years)",
                current: "8.00%",
                previous: "7.75%",
                trend: "up",
                minBalance: "₹10,000",
                link: "/fixed-deposits"
              }
            ].map((deposit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{deposit.product}</CardTitle>
                      <CardDescription className="text-sm text-gray-600">
                        Min Balance: {deposit.minBalance}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      {deposit.trend === 'up' ? (
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      ) : (
                        <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                      )}
                      <span className="text-sm text-gray-500">
                        {deposit.previous}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Previous Rate</p>
                      <p className="text-lg font-semibold text-gray-500 line-through">
                        {deposit.previous}
                      </p>
                    </div>
                    <div className="text-center">
                      <Badge variant="secondary" className="text-lg px-4 py-2">
                        {deposit.current}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Change</p>
                      <p className={`text-lg font-semibold ${
                        deposit.trend === 'up' ? 'text-green-600' : 'text-gray-600'
                      }`}>
                        +{Math.abs(parseFloat(deposit.current) - parseFloat(deposit.previous)).toFixed(2)}%
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Button asChild className="w-full">
                      <Link href={deposit.link}>
                        Open Account
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Factors Affecting Interest Rates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• RBI repo rate changes</li>
                <li>• Inflation rate trends</li>
                <li>• Market liquidity conditions</li>
                <li>• Credit risk assessment</li>
                <li>• Loan tenure and amount</li>
                <li>• Customer credit profile</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-green-600" />
                Rate Review Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Quarterly review: Every 3 months</li>
                <li>• Special rates for festive seasons</li>
                <li>• Pre-approved customer offers</li>
                <li>• Women applicants special rates</li>
                <li>• Senior citizen benefits</li>
                <li>• Existing customer loyalty rates</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Important Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-yellow-50">
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">
                Interest rates mentioned above are indicative and subject to change without notice. 
                Final rates will be based on individual credit assessment, loan amount, tenure, 
                and other factors at the time of application.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle>Special Offers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">
                Special interest rates available for women applicants, senior citizens, 
                and existing MNS Bank customers. Contact your nearest branch for more details.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green-50">
            <CardHeader>
              <CardTitle>Rate Lock Facility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">
                Lock in current interest rates for up to 30 days during loan application. 
                Applicable for home loans and car loans only.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
