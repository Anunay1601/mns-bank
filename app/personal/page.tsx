import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { User, Briefcase, Home, CreditCard, TrendingUp, Shield } from 'lucide-react'
import Link from 'next/link'

export default function PersonalPage() {
  const personalProducts = [
    {
      icon: <User className="w-8 h-8 text-blue-600" />,
      title: "Personal Banking",
      description: "Complete banking solutions for your personal financial needs",
      features: ["Savings Accounts", "Personal Loans", "Credit Cards", "Insurance"],
      link: "/savings-account"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-green-600" />,
      title: "Wealth Management",
      description: "Grow your wealth with our investment solutions",
      features: ["Fixed Deposits", "Mutual Funds", "Portfolio Management", "Tax Planning"],
      link: "/wealth-management"
    },
    {
      icon: <Home className="w-8 h-8 text-purple-600" />,
      title: "Home Solutions",
      description: "Complete solutions for your dream home",
      features: ["Home Loans", "Home Insurance", "Property Services", "Legal Assistance"],
      link: "/home-loan"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-red-600" />,
      title: "Digital Banking",
      description: "Bank anytime, anywhere with our digital services",
      features: ["Net Banking", "Mobile App", "UPI Services", "Bill Payments"],
      link: "/services"
    }
  ]

  const personalServices = [
    {
      title: "24/7 Banking",
      description: "Access your accounts anytime through our digital platforms",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Secure Transactions",
      description: "Bank with confidence using our secure banking systems",
      icon: <Shield className="w-6 h-6 text-green-600" />
    },
    {
      title: "Expert Advice",
      description: "Get personalized financial advice from our experts",
      icon: <User className="w-6 h-6 text-purple-600" />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Personal Banking
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of personal banking products and services designed 
            to meet your unique financial needs and help you achieve your goals.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {personalProducts.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader className="text-center flex-grow">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {product.icon}
                </div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col">
                <div className="space-y-2 flex-grow">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full mt-auto">
                  <Link href={product.link}>
                    Explore {product.title}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Choose MNS Personal Banking?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalServices.map((service, index) => (
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

        {/* Quick Actions */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Get Started Today
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild size="lg" className="w-full">
              <Link href="/savings-account">
                Open Account
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/personal-loan">
                Apply for Loan
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <Link href="/emi-calculator">
                Calculate EMI
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
