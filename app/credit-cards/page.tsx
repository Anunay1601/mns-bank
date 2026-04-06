'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CreditCard, Shield, Gift, Car, ShoppingBag, Plane, Fuel } from 'lucide-react'
import { CreditCardImage } from '@/components/image-gallery'
import { useLanguage } from '@/contexts/LanguageContext'
import SmartLink from '@/components/smart-link'
import { FlippableCreditCard } from '@/components/ui/credit-debit-card'

export default function CreditCardsPage() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('all')

  const creditCards = [
    {
      id: 1,
      name: "MNS Platinum Card",
      category: "premium",
      annualFee: "₹3,000",
      welcomeBonus: "5,000 Reward Points",
      features: [
        "5X reward points on dining & shopping",
        "2X reward points on all other spends",
        "Complimentary airport lounge access",
        "Fuel surcharge waiver",
        "Personal accident insurance cover",
        "Zero lost card liability"
      ],
      benefits: [
        "Welcome bonus of 5,000 reward points",
        "Annual fee waiver on spend of ₹3 Lakhs",
        "Complimentary railway lounge access",
        "Golf rounds at premium courses"
      ],
      eligibility: [
        "Age: 21-60 years",
        "Monthly income: ₹80,000+",
        "Good credit score",
        "Resident Indian"
      ],
      fees: {
        joining: "₹3,000",
        annual: "₹3,000",
        interest: "3.4% per month"
      },
      applyLink: "/credit-cards/platinum"
    },
    {
      id: 2,
      name: "MNS Gold Card",
      category: "regular",
      annualFee: "₹1,000",
      welcomeBonus: "2,000 Reward Points",
      features: [
        "2X reward points on online shopping",
        "1X reward point on all other spends",
        "Fuel surcharge waiver at HP pumps",
        "Emergency card replacement",
        "Add-on cards for family",
        "SMS alerts for transactions"
      ],
      benefits: [
        "Welcome bonus of 2,000 reward points",
        "Annual fee waiver on spend of ₹1.5 Lakhs",
        "Discounts on partner merchants",
        "Free credit period up to 50 days"
      ],
      eligibility: [
        "Age: 21-60 years",
        "Monthly income: ₹40,000+",
        "Fair credit score",
        "Resident Indian"
      ],
      fees: {
        joining: "₹1,000",
        annual: "₹1,000",
        interest: "3.5% per month"
      },
      applyLink: "/credit-cards/gold"
    },
    {
      id: 3,
      name: "MNS Shopping Card",
      category: "shopping",
      annualFee: "₹500",
      welcomeBonus: "1,500 Reward Points",
      features: [
        "3X reward points on shopping",
        "2X reward points on dining",
        "Exclusive shopping discounts",
        "Cashback offers",
        "EMI options on purchases",
        "Mobile app for tracking"
      ],
      benefits: [
        "Welcome bonus of 1,500 reward points",
        "No annual fee for first year",
        "Shopping festival discounts",
        "Exclusive partner offers"
      ],
      eligibility: [
        "Age: 21-60 years",
        "Monthly income: ₹25,000+",
        "Basic credit score",
        "Resident Indian"
      ],
      fees: {
        joining: "₹500",
        annual: "₹500 (waived first year)",
        interest: "3.6% per month"
      },
      applyLink: "/credit-cards/shopping"
    },
    {
      id: 4,
      name: "MNS Travel Card",
      category: "travel",
      annualFee: "₹2,000",
      welcomeBonus: "4,000 Reward Points",
      features: [
        "4X reward points on travel bookings",
        "2X reward points on dining",
        "Complimentary travel insurance",
        "Airport lounge access",
        "Hotel booking discounts",
        "Foreign transaction benefits"
      ],
      benefits: [
        "Welcome bonus of 4,000 reward points",
        "Annual fee waiver on spend of ₹2 Lakhs",
        "Travel vouchers worth ₹5,000",
        "24/7 travel assistance"
      ],
      eligibility: [
        "Age: 21-60 years",
        "Monthly income: ₹60,000+",
        "Good credit score",
        "Resident Indian"
      ],
      fees: {
        joining: "₹2,000",
        annual: "₹2,000",
        interest: "3.4% per month"
      },
      applyLink: "/credit-cards/travel"
    },
    {
      id: 5,
      name: "MNS Fuel Card",
      category: "fuel",
      annualFee: "₹299",
      welcomeBonus: "1,000 Reward Points",
      features: [
        "5X reward points on fuel purchases",
        "Fuel surcharge waiver at all pumps",
        "Vehicle insurance discounts",
        "Roadside assistance",
        "Fuel tracking app",
        "Exclusive fuel station offers"
      ],
      benefits: [
        "Welcome bonus of 1,000 reward points",
        "No annual fee for first year",
        "Fuel vouchers worth ₹2,000",
        "Free vehicle health check-ups"
      ],
      eligibility: [
        "Age: 21-65 years",
        "Monthly income: ₹20,000+",
        "Basic credit score",
        "Vehicle owner preferred"
      ],
      fees: {
        joining: "₹299",
        annual: "₹299 (waived first year)",
        interest: "3.7% per month"
      },
      applyLink: "/credit-cards/fuel"
    },
    {
      id: 6,
      name: "MNS Student Card",
      category: "student",
      annualFee: "₹0",
      welcomeBonus: "500 Reward Points",
      features: [
        "1X reward point on all spends",
        "No annual fee",
        "Low credit limit",
        "Educational discounts",
        "Online shopping benefits",
        "Credit building opportunity"
      ],
      benefits: [
        "Welcome bonus of 500 reward points",
        "Zero annual fee",
        "Student exclusive offers",
        "Free credit score monitoring"
      ],
      eligibility: [
        "Age: 18-25 years",
        "Student enrollment proof",
        "No income requirement",
        "Resident Indian"
      ],
      fees: {
        joining: "₹0",
        annual: "₹0",
        interest: "3.8% per month"
      },
      applyLink: "/credit-cards/student"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Cards', icon: CreditCard },
    { id: 'premium', name: 'Premium', icon: Shield },
    { id: 'regular', name: 'Regular', icon: CreditCard },
    { id: 'shopping', name: 'Shopping', icon: ShoppingBag },
    { id: 'travel', name: 'Travel', icon: Plane },
    { id: 'fuel', name: 'Fuel', icon: Fuel },
    { id: 'student', name: 'Student', icon: Gift }
  ]

  const filteredCards = selectedCategory === 'all' 
    ? creditCards 
    : creditCards.filter(card => card.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-8">
            <CreditCardImage />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('creditCards')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('creditCardsDescription')}
          </p>
        </div>

        {/* Premium Card Showcase */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Experience Our Premium Cards
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hover over the card to see the security features on the back. Our premium cards offer unmatched security and exclusive benefits.
            </p>
          </div>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">MNS Platinum Card</h3>
              <FlippableCreditCard
                cardholderName="RAVI KATIYAR"
                cardNumber="•••• •••• •••• 1939"
                expiryDate="12/27"
                cvv="987"
              />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">MNS Gold Card</h3>
              <FlippableCreditCard
                cardholderName="PRIYA SHARMA"
                cardNumber="•••• •••• •••• 2456"
                expiryDate="09/26"
                cvv="456"
              />
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Credit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCards.map((card) => (
            <Card key={card.id} className="hover:shadow-lg transition-shadow duration-300 relative">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-xl">{card.name}</CardTitle>
                  <Badge variant="secondary">{card.category}</Badge>
                </div>
                <CardDescription className="text-gray-600">
                  Annual Fee: {card.annualFee}
                </CardDescription>
                <div className="mt-2">
                  <span className="text-sm font-semibold text-green-600">
                    Welcome Bonus: {card.welcomeBonus}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {card.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {card.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold">Interest Rate:</span>
                    <span className="text-red-600">{card.fees.interest}</span>
                  </div>
                </div>

                <Button asChild className="w-full">
                  <SmartLink href={card.applyLink}>
                    Apply Now
                  </SmartLink>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Choose MNS Bank Credit Cards?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Secure & Safe</CardTitle>
                <CardDescription>
                  Advanced security features to protect your transactions
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Exciting Rewards</CardTitle>
                <CardDescription>
                  Earn reward points on every purchase and redeem them easily
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Exclusive Offers</CardTitle>
                <CardDescription>
                  Special discounts and cashback at partner merchants
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>Travel Benefits</CardTitle>
                <CardDescription>
                  Airport lounge access and travel insurance on select cards
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Easy Application Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Choose Card</h3>
              <p className="text-sm text-gray-600">Select the card that suits your needs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Fill Application</h3>
              <p className="text-sm text-gray-600">Complete the online application form</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Submit Documents</h3>
              <p className="text-sm text-gray-600">Upload required documents for verification</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Get Card</h3>
              <p className="text-sm text-gray-600">Receive your card within 7 working days</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What is the minimum income required for credit cards?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The minimum income requirement varies by card type. Student cards have no income requirement, 
                  while premium cards may require monthly income of ₹80,000 or more.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How can I check my credit card application status?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  You can check your application status online through our mobile app or website, 
                  or call our customer service at 1800-123-4567.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What should I do if my credit card is lost or stolen?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Immediately call our 24/7 helpline at 1800-123-4568 to block your card. 
                  You can also block it through our mobile app or internet banking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
