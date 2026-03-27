import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Building2, Briefcase, TrendingUp, Shield, Users, CreditCard, PiggyBank, FileText } from 'lucide-react'
import Link from 'next/link'

interface BusinessProduct {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  link: string
  badge?: string
}

export default function BusinessPage() {
  const businessProducts: BusinessProduct[] = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      title: "Current Account",
      description: "Flexible banking solutions for your business operations",
      features: ["Zero Balance Facility", "High Transaction Limits", "Mobile Banking", "Dedicated Relationship Manager"],
      link: "/current-account"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-green-600" />,
      title: "Business Loans",
      description: "Grow your business with our tailored loan solutions",
      features: ["Working Capital Loans", "Machinery Loans", "Term Loans", "Collateral Free Options"],
      link: "/business-loan"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Trade Finance",
      description: "Comprehensive solutions for your trade requirements",
      features: ["Letter of Credit", "Bank Guarantees", "Export Finance", "Import Finance"],
      link: "/services"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-red-600" />,
      title: "Corporate Cards",
      description: "Smart payment solutions for your business",
      features: ["Corporate Credit Cards", "Fuel Cards", "Purchase Cards", "Expense Management"],
      link: "/credit-cards"
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-orange-600" />,
      title: "Business Deposits",
      description: "Earn higher returns on your business deposits",
      features: ["Current Account FD", "Business RD", "Tax Saver FD", "Liquidity Management"],
      link: "/interest-rates"
    },
    {
      icon: <FileText className="w-8 h-8 text-teal-600" />,
      title: "Cash Management",
      description: "Efficient cash management solutions",
      features: ["Payment Solutions", "Collection Services", "Liquidity Management", "Sweep Facilities"],
      link: "/services"
    }
  ]

  const businessServices = [
    {
      title: "Dedicated Relationship Manager",
      description: "Get personalized service from your dedicated relationship manager",
      icon: <Users className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Digital Banking Suite",
      description: "Complete digital solutions for business banking needs",
      icon: <TrendingUp className="w-6 h-6 text-green-600" />
    },
    {
      title: "24/7 Business Support",
      description: "Round-the-clock assistance for all your business banking needs",
      icon: <Shield className="w-6 h-6 text-purple-600" />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Business Banking
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empower your business with our comprehensive range of banking solutions designed 
            to meet the unique needs of enterprises of all sizes.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {businessProducts.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow relative">
              {product.badge && (
                <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  {product.badge}
                </div>
              )}
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {product.icon}
                </div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full">
                  <Link href={product.link}>
                    Know More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Choose MNS Business Banking?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessServices.map((service, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Business Types */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Solutions for Every Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg">
              <h3 className="font-semibold mb-2">Startups</h3>
              <p className="text-sm text-gray-600">Special solutions for new businesses</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h3 className="font-semibold mb-2">SMEs</h3>
              <p className="text-sm text-gray-600">Tailored products for growing businesses</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h3 className="font-semibold mb-2">Corporates</h3>
              <p className="text-sm text-gray-600">Comprehensive banking for large enterprises</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <h3 className="font-semibold mb-2">MSMEs</h3>
              <p className="text-sm text-gray-600">Government scheme enabled services</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to Grow Your Business?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild size="lg" className="w-full">
              <Link href="/current-account">
                Open Account
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/business-loan">
                Apply for Loan
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/contact-us">
                Contact Business Team
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
